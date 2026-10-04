import Link from "next/link";
import { Container, MeshBackdrop } from "./components/ui/Section";
import { Button } from "./components/ui/Button";
import { GraphNetwork } from "./components/ui/GraphNetwork";
import { Icon } from "./components/ui/Icon";
import { primaryNav } from "./data/site";

/** Custom 404 — stays on-brand rather than the framework default. */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden py-24">
      <MeshBackdrop intensity="medium" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 w-[60rem] max-w-none -translate-x-1/2 opacity-20"
      >
        <GraphNetwork />
      </div>

      <Container className="relative text-center">
        <p className="font-display text-8xl font-semibold tracking-tight text-gradient sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
          That page didn&apos;t make it into the dataset.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted">
          The page you&apos;re looking for may have moved or never existed. Try the homepage, or jump
          straight to one of the sections below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" icon="arrow-right">
            Back to home
          </Button>
          <Button href="/contact" variant="secondary" leadingIcon="mail">
            Contact
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {primaryNav.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-muted hover:text-brand-700 dark:hover:text-brand-200"
              >
                <Icon name="arrow-right" className="size-3.5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
