import { profile } from "@/app/data/site";
import { Container } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { ArrowLink } from "../ui/Button";
import { Icon } from "../ui/Icon";

/** The short, first-person introduction (§3.2). */
export function Intro() {
  return (
    <section className="relative border-y border-line bg-surface py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Icon
            name="quote"
            className="mx-auto size-7 text-accent-400"
            strokeWidth={1.4}
          />
          <p className="mt-6 text-pretty text-xl leading-[1.6] text-ink-soft sm:text-[1.6rem] sm:leading-[1.55]">
            {profile.intro}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-10 bg-brand-gradient" />
            <ArrowLink href="/about">Read the full story</ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
