import { memberships, skillGroups } from "@/app/about/data";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

export function SkillsToolkit() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      <div className="grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal as="div" key={group.label} delay={i * 80}>
            <div className="h-full rounded-2xl border border-line bg-surface p-5">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-brand-gradient-soft text-brand-700 dark:text-brand-300">
                  <Icon name={group.icon} className="size-4" />
                </span>
                <h3 className="text-[0.875rem] font-semibold text-ink">{group.label}</h3>
              </div>
              <ul className="mt-3.5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.75rem] text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="h-full rounded-2xl border border-line bg-brand-gradient-soft p-6">
          <div className="flex items-center gap-2.5">
            <Icon name="users" className="size-4 text-brand-600 dark:text-brand-300" />
            <h3 className="text-[0.875rem] font-semibold text-ink">Professional memberships and offices</h3>
          </div>
          <ul className="mt-4 space-y-2.5">
            {memberships.map((m) => (
              <li key={m} className="flex gap-2.5 text-[0.875rem] leading-snug text-ink-soft">
                <Icon name="check" className="mt-0.5 size-3.5 shrink-0 text-brand-500" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
