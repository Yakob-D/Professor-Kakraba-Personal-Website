/* =============================================================================
   CONTACT PAGE DATA
   -----------------------------------------------------------------------------
   No form, no backend: every "reason" is a mailto: link with the subject
   line pre-filled, so a click opens the visitor's own email client ready to
   send — simple, infrastructure-free, and still gives him a little triage
   signal from the subject line alone.
   ========================================================================== */

export type ContactReason = {
  value: string;
  label: string;
  /** Pre-filled into the mailto: link's subject line. */
  subject: string;
  icon: string;
};

export const contactReasons: ContactReason[] = [
  {
    value: "collaboration",
    label: "Research collaboration",
    subject: "Research Collaboration Inquiry",
    icon: "users",
  },
  {
    value: "speaking",
    label: "Speaking invitation",
    subject: "Speaking Invitation",
    icon: "mic",
  },
  {
    value: "media",
    label: "Media enquiry",
    subject: "Media Inquiry",
    icon: "message-square",
  },
  {
    value: "other",
    label: "Something else",
    subject: "Website Inquiry",
    icon: "sparkles",
  },
];

export const studentNote =
  "Interested in joining the lab as a student or postdoc? Project openings, applications and current students are on the lab site.";
