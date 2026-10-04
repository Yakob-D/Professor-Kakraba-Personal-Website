import Link from "next/link";
import { Fragment } from "react";

/* Tiny inline-markdown renderer — no dependency. Supports exactly what the
   chat assistant is instructed to use: [label](url) links, **bold**, and
   line breaks. Internal links (starting with "/") use next/link; mailto:
   and external links render as plain <a> tags with the right target. */

const TOKEN_SOURCE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\n/g;

export function ChatMessageContent({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  // A fresh RegExp per render rather than resetting a shared module-level
  // one's `lastIndex` — mutating shared state like that isn't safe under
  // React's concurrent rendering.
  const token = new RegExp(TOKEN_SOURCE);
  while ((match = token.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }

    const [whole, linkLabel, linkHref, boldText] = match;

    if (linkLabel && linkHref) {
      nodes.push(<ChatLink key={key++} href={linkHref}>{linkLabel}</ChatLink>);
    } else if (boldText) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink">
          {boldText}
        </strong>,
      );
    } else if (whole === "\n") {
      nodes.push(<br key={key++} />);
    }

    lastIndex = match.index + whole.length;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return <>{nodes}</>;
}

function ChatLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className = "font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 hover:decoration-brand-500 dark:text-brand-300 dark:decoration-brand-600";

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {children}
    </a>
  );
}
