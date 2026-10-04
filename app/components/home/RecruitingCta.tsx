import { recruitingCta } from "@/app/(home)/data";
import { Container } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

/**
 * The homepage's recruiting call-to-action, per the source document:
 * "Now recruiting motivated MS/PhD students in health AI. Read how to
 * join →" — points to the separate lab site rather than an on-site page,
 * since lab/mentorship content stays there by direction.
 */
export function RecruitingCta() {
  return (
    <section className="border-b border-line bg-brand-gradient-soft py-10">
      <Container>
        <Reveal>
          <a
            href={recruitingCta.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group/recruit flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-3 sm:text-left"
          >
            <Icon name="graduation-cap" className="size-5 text-brand-600 dark:text-brand-300" />
            <span className="text-[0.9375rem] font-medium text-ink">{recruitingCta.text}</span>
            <span className="inline-flex items-center gap-1 text-[0.9375rem] font-semibold text-brand-700 dark:text-brand-300">
              {recruitingCta.linkLabel}
              <Icon
                name="arrow-up-right"
                className="size-4 transition-transform group-hover/recruit:translate-x-0.5"
              />
            </span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
