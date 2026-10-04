/**
 * Applies the saved (or system) theme to <html> before first paint, so there
 * is no flash of the wrong colour scheme. Must stay inline and blocking.
 *
 * `type` flips between "text/javascript" (server) and "text/plain" (client):
 * the browser executes it during HTML parsing on the real page load either
 * way (that happens before React ever runs), but once React hydrates we
 * don't want it treated as a live script tag — React 19 warns on that, and
 * re-rendering it would be a no-op anyway since the DOM already has it.
 * See https://nextjs.org/docs/app/guides/preventing-flash-before-hydration
 */
const script = `(function(){try{var s=localStorage.getItem("kakraba-theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var c=document.documentElement.classList;d?c.add("dark"):c.remove("dark");document.documentElement.style.colorScheme=d?"dark":"light"}catch(e){}})()`;

export function ThemeScript() {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
