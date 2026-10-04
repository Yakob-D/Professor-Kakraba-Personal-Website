/* =============================================================================
   CONTACT PAGE DATA
   ========================================================================== */

export type ContactReason = {
  value: string;
  label: string;
  icon: string;
};

export const contactReasons: ContactReason[] = [
  { value: "collaboration", label: "Research collaboration", icon: "users" },
  { value: "speaking", label: "Speaking invitation", icon: "mic" },
  { value: "media", label: "Media enquiry", icon: "message-square" },
  { value: "other", label: "Something else", icon: "sparkles" },
];

export const studentNote =
  "Interested in joining the lab as a student or postdoc? Project openings, applications and current students are on the lab site.";
