/**
 * Reference snippet for the Google Apps Script Web App that backs
 * `siteConfig.googleSheetUrl`. This file is a source-of-truth copy;
 * the actually-deployed script lives in the Apps Script editor
 * (https://script.google.com) and must be kept in sync manually.
 *
 * Purpose: when the contact form on /contact submits, also send an
 * email notification (in addition to the existing sheet append).
 *
 * Integration: the existing script already handles `doPost(e)` and
 * appends to a Google Sheet for the existing dialog forms. The two
 * additions below are:
 *   1. The constant CONTACT_NOTIFY_EMAIL
 *   2. The function notifyContact(payload)
 *   3. Inside the existing doPost, after the sheet append, dispatch
 *      to notifyContact when payload.source === "contact".
 *
 * The contact form sends this payload shape (see src/pages/Contact.tsx):
 *   {
 *     source: "contact",
 *     name: string,
 *     email: string,
 *     organisation: string,   // may be empty
 *     interest: "For Leaders" | "For Professionals" | "For Engineers"
 *               | "Not sure yet" | "Other",
 *     message: string
 *   }
 *
 * Quota note: MailApp.sendEmail has a daily quota (100/day on free
 * Google accounts, 1500/day on Workspace). Contact form volume is
 * very unlikely to hit either ceiling.
 */

// Change this to whichever inbox should receive contact notifications.
// partnerships@gradtensor.com is also a good choice for institutional enquiries.
const CONTACT_NOTIFY_EMAIL = "courses@gradtensor.com";

/**
 * Send a plain-text email notification for a contact form submission.
 * Sets Reply-To to the submitter's email so a direct reply lands with
 * them, not back in the gradtensor inbox.
 */
function notifyContact(payload) {
  var name = payload.name || "Unknown";
  var interest = payload.interest || "Not specified";
  var subject = "New contact enquiry: " + name + " (" + interest + ")";

  var lines = [
    "A new contact form submission was received on gradtensor.com.",
    "",
    "Name:          " + (payload.name || "-"),
    "Email:         " + (payload.email || "-"),
    "Organisation:  " + (payload.organisation || "-"),
    "Interest:      " + (payload.interest || "-"),
    "",
    "Message:",
    payload.message || "(no message)",
    "",
    "---",
    "Reply directly to " + (payload.email || "the email above") + ".",
  ];

  MailApp.sendEmail({
    to: CONTACT_NOTIFY_EMAIL,
    replyTo: payload.email || CONTACT_NOTIFY_EMAIL,
    subject: subject,
    body: lines.join("\n"),
  });
}

/**
 * Drop-in pattern for the existing doPost(e). Copy the body of this
 * function into your real doPost, or wrap it. The key new line is the
 * `if (source === "contact") notifyContact(payload)` dispatch.
 *
 * This reference also shows a defensive shape: parse JSON, write to
 * the sheet, then notify, returning JSON either way so the front-end
 * fetch resolves.
 */
function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var source = String(payload.source || "default").toLowerCase();

    // ===== Existing behaviour =====
    // Replace this stub with whatever sheet-append logic the live
    // script already has. The contact submission should still land in
    // a sheet for record-keeping; notification is additive.
    // appendSubmissionToSheet(source, payload);
    // =================================

    if (source === "contact") {
      notifyContact(payload);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
