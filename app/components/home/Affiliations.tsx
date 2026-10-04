import Image from "next/image";
import { affiliations } from "@/app/(home)/data";
import { Container } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

/**
 * §3.8 — the affiliations strip.
 * Logos require permission, so each entry renders its wordmark until a real
 * `logo` path is set in data. The row scrolls on small screens and sits
 * static on wide ones.
 */
export function Affiliations() {
  return (
    <section className="border-b border-line bg-surface py-14">
      <Container>
        <Reveal>
          <p className="text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-faint">
            Affiliations &amp; partners
          </p>

          <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
            {affiliations.map((a, i) => {
              const content = a.logo ? (
                <Image
                  src={a.logo}
                  alt={a.name}
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover/aff:opacity-100 dark:invert dark:brightness-200"
                />
              ) : (
                <span className="text-center font-display text-[0.9375rem] font-semibold leading-tight text-muted transition-colors duration-300 group-hover/aff:text-brand-700 dark:group-hover/aff:text-brand-200">
                  {a.shortName}
                </span>
              );

              return (
                <Reveal
                  as="li"
                  key={a.shortName}
                  delay={i * 60}
                  className="flex items-center justify-center"
                >
                  {a.href ? (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      title={a.name}
                      className="group/aff flex h-14 items-center justify-center"
                    >
                      {content}
                    </a>
                  ) : (
                    <span title={a.name} className="group/aff flex h-14 items-center">
                      {content}
                    </span>
                  )}
                </Reveal>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
