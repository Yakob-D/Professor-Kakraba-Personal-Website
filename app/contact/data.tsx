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

/** "Personal Information" on the CV, in full. */
export const cvContact = {
  primaryAddress: [
    "Department of Biostatistics and Data Science",
    "Celia Scott Weatherhead School of Public Health and Tropical Medicine (WSPH)",
    "Tulane University, 1440 Canal Street, Suite 1610H, MB Code #8310",
    "New Orleans, LA 70112, USA",
  ],
  secondaryAffiliation: [
    "Connolly Alexander Institute of Data Science (CAIDS)",
    "Tulane University, New Orleans, LA 70118, USA",
  ],
  tertiaryAffiliation: [
    "Tulane Center for Aging, School of Medicine",
    "Tulane University, 1430 Tulane Avenue, New Orleans, LA 70112, USA",
  ],
  phones: [
    { label: "Office", display: "+1 (504) 988-2475", href: "tel:+15049882475" },
    { label: "Mobile", display: "+1 (423) 672-9998", href: "tel:+14236729998" },
  ],
  emails: ["skakraba@tulane.edu", "kakrabaresearchgroup@gmail.com"],
  website: { display: "kakrabaresearchgroup.com", href: "https://kakrabaresearchgroup.com" },
  languages: ["English", "Fante", "Twi"],
};
