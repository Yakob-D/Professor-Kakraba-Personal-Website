/**
 * Applies the saved (or system) theme to <html> before first paint, so there
 * is no flash of the wrong colour scheme. Must stay inline and blocking.
 */
const script = `(function(){try{var s=localStorage.getItem("kakraba-theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var c=document.documentElement.classList;d?c.add("dark"):c.remove("dark");document.documentElement.style.colorScheme=d?"dark":"light"}catch(e){}})()`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
