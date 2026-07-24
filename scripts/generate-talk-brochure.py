#!/usr/bin/env python3
"""Generate single-page landscape brochure PDF for college keynote talk."""

from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.colors import HexColor
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    Image, HRFlowable, Frame, PageTemplate, BaseDocTemplate
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO_PATH = os.path.join(BASE, "src", "assets", "logo.png")
BRANDNAME_PATH = os.path.join(BASE, "public", "gradtensor-brandname.png")
WA_ICON_PATH = os.path.join(BASE, "scripts", "whatsapp-icon.png")
OUTPUT_PATH = os.path.join(BASE, "public", "talk-brochure-ai-job-market.pdf")

PAGE = landscape(A4)  # 297 x 210 mm

# Brand colors
GREEN = HexColor("#4CAF50")
DARK_GREEN = HexColor("#388E3C")
LIGHT_GRAY = HexColor("#666666")
MID_GRAY = HexColor("#999999")
BORDER_GRAY = HexColor("#dddddd")
TEXT_DARK = HexColor("#1a1a1a")
TEXT_BODY = HexColor("#333333")

# Compact styles for single page
s_type = ParagraphStyle("Type", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=GREEN, spaceAfter=2*mm)
s_title = ParagraphStyle("Title", fontName="Helvetica-Bold", fontSize=22, leading=27, textColor=TEXT_DARK, spaceAfter=2*mm)
s_subtitle = ParagraphStyle("Sub", fontName="Helvetica", fontSize=9.5, leading=14, textColor=LIGHT_GRAY, spaceAfter=3*mm)
s_section = ParagraphStyle("Sec", fontName="Helvetica-Bold", fontSize=10, leading=14, textColor=DARK_GREEN, spaceBefore=4*mm, spaceAfter=2*mm)
s_bullet = ParagraphStyle("Bul", fontName="Helvetica", fontSize=8.5, leading=12.5, textColor=TEXT_BODY, leftIndent=8, spaceAfter=0.8*mm)
s_body = ParagraphStyle("Body", fontName="Helvetica", fontSize=8.5, leading=12.5, textColor=TEXT_BODY, spaceAfter=1.5*mm)
s_speaker_name = ParagraphStyle("SpName", fontName="Helvetica-Bold", fontSize=11, leading=15, textColor=TEXT_DARK, spaceAfter=0.5*mm)
s_speaker_title = ParagraphStyle("SpTitle", fontName="Helvetica", fontSize=8.5, leading=12, textColor=GREEN, spaceAfter=2*mm)
s_speaker_detail = ParagraphStyle("SpDet", fontName="Helvetica", fontSize=8, leading=11.5, textColor=TEXT_BODY, leftIndent=8, spaceAfter=0.5*mm)
s_meta_label = ParagraphStyle("MetaL", fontName="Helvetica-Bold", fontSize=8.5, leading=12, textColor=TEXT_DARK)
s_meta_value = ParagraphStyle("MetaV", fontName="Helvetica", fontSize=8.5, leading=12, textColor=TEXT_BODY)
s_cta = ParagraphStyle("CTA", fontName="Helvetica-Bold", fontSize=10, leading=14, textColor=DARK_GREEN, alignment=TA_CENTER, spaceBefore=2*mm, spaceAfter=1*mm)
s_footer = ParagraphStyle("Foot", fontName="Helvetica-Oblique", fontSize=7.5, leading=10, textColor=MID_GRAY, alignment=TA_CENTER)


def build_pdf():
    # Use low-level frames for two-column layout
    page_w, page_h = PAGE
    margin_x = 15 * mm
    margin_top = 14 * mm
    margin_bottom = 12 * mm
    gutter = 10 * mm
    col_w = (page_w - 2 * margin_x - gutter) / 2
    content_h = page_h - margin_top - margin_bottom

    left_frame = Frame(margin_x, margin_bottom, col_w, content_h, id="left",
                       leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    right_frame = Frame(margin_x + col_w + gutter, margin_bottom, col_w, content_h, id="right",
                        leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)

    def draw_decoration(canvas, doc):
        canvas.saveState()
        # Top green accent bar
        canvas.setStrokeColor(GREEN)
        canvas.setLineWidth(3)
        canvas.line(margin_x, page_h - 10 * mm, page_w - margin_x, page_h - 10 * mm)
        # Bottom footer: WhatsApp icon + number | gradtensor.com
        icon_size = 3.5 * mm
        footer_y = 4 * mm
        center_x = page_w / 2
        # Draw WhatsApp icon
        if os.path.exists(WA_ICON_PATH):
            canvas.drawImage(WA_ICON_PATH, center_x - 40 * mm, footer_y - 0.5 * mm,
                             width=icon_size, height=icon_size, mask='auto')
        # Draw text
        canvas.setFont("Helvetica", 7)
        canvas.setFillColor(MID_GRAY)
        canvas.drawString(center_x - 36 * mm, footer_y, "+91 98452 03997  |  gradtensor.com")
        canvas.restoreState()

    template = PageTemplate(id="landscape", frames=[left_frame, right_frame],
                            onPage=draw_decoration)

    doc = BaseDocTemplate(OUTPUT_PATH, pagesize=PAGE,
                          topMargin=margin_top, bottomMargin=margin_bottom,
                          leftMargin=margin_x, rightMargin=margin_x)
    doc.addPageTemplates([template])

    story = []

    # ===================== LEFT COLUMN =====================

    # Logo + brand name
    header_cells = []
    if os.path.exists(LOGO_PATH):
        header_cells.append(Image(LOGO_PATH, width=18 * mm, height=18 * mm))
    if os.path.exists(BRANDNAME_PATH):
        header_cells.append(Image(BRANDNAME_PATH, width=48 * mm, height=8.4 * mm))

    if header_cells:
        ht = Table([header_cells], colWidths=[22 * mm, 52 * mm])
        ht.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ]))
        ht.hAlign = "LEFT"
        story.append(ht)
        story.append(Spacer(1, 4 * mm))

    story.append(Paragraph("GUEST KEYNOTE", s_type))
    story.append(Paragraph("The Job Market<br/>Just Changed. Did You?", s_title))
    story.append(Paragraph(
        "A keynote on how AI is reshaping careers, which opportunities "
        "are emerging, and what students can do right now to stay ahead.",
        s_subtitle
    ))

    story.append(HRFlowable(width="100%", thickness=0.4, color=BORDER_GRAY, spaceAfter=1*mm))

    # What this talk covers
    story.append(Paragraph("WHAT THIS TALK COVERS", s_section))
    for item in [
        "The AI acceleration - what changed in the last 12 months",
        "Jobs disappearing - entry-level and white-collar roles being automated",
        "Jobs emerging - AI engineer, agent developer, RAG architect",
        "The K-curve - why builders pull ahead of everyone else",
        "Your playbook - what to build, learn, and how to stand out",
    ]:
        story.append(Paragraph(f"\u2022  {item}", s_bullet))

    # Why attend
    story.append(Paragraph("WHY YOUR STUDENTS SHOULD ATTEND", s_section))
    story.append(Paragraph(
        "AI is becoming a baseline skill for every engineering role, but most "
        "curricula haven't caught up. This talk gives students a clear picture "
        "of what's changed and a practical framework for what to do about it.",
        s_body
    ))

    # What they take away
    story.append(Paragraph("WHAT STUDENTS WILL TAKE AWAY", s_section))
    for item in [
        "Which skills employers are actually hiring for in AI roles",
        "Why deployed projects matter more than certificates",
        "A framework for what to learn, build, and present",
        "Awareness of new roles emerging in the AI economy",
    ]:
        story.append(Paragraph(f"\u2022  {item}", s_bullet))

    # ===================== RIGHT COLUMN =====================
    # FrameBreak to move to right column
    from reportlab.platypus import FrameBreak
    story.append(FrameBreak())

    # Speaker
    story.append(Paragraph("SPEAKER", s_section))
    story.append(Paragraph("Prabhu Eshwarla", s_speaker_name))
    story.append(Paragraph("AI Systems Architect | Author (Manning, Packt)", s_speaker_title))

    for item in [
        "20+ years in engineering and technology leadership",
        "2x published author (Manning Publications, Packt)",
        "Former India Head, HP Software Services Delivery",
        "Former CTO, European blockchain startup",
        "Speaker at international tech conferences",
        "M.E., BITS Pilani",
        "Creator of mlship, open-source CLI for AI/ML engineers",
    ]:
        story.append(Paragraph(f"\u2022  {item}", s_speaker_detail))

    # Logistics
    story.append(Paragraph("LOGISTICS", s_section))

    logistics_data = [
        ["Duration", "60-90 minutes (includes Q&amp;A)"],
        ["Format", "In-person or virtual"],
        ["Audience", "Engineering students (all branches, all years)"],
        ["Cost", "No charge to the institution"],
    ]
    for label, value in logistics_data:
        t = Table(
            [[Paragraph(f"<b>{label}:</b>", s_meta_label), Paragraph(value, s_meta_value)]],
            colWidths=[col_w * 0.28, col_w * 0.72],
        )
        t.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
        ]))
        story.append(t)

    # CTA
    story.append(Spacer(1, 6 * mm))
    story.append(HRFlowable(width="100%", thickness=0.5, color=GREEN, spaceAfter=3*mm))
    story.append(Paragraph("To schedule this talk for your college:", s_cta))

    # WhatsApp icon + number | website in a table for alignment
    cta_cells = []
    if os.path.exists(WA_ICON_PATH):
        wa_img = Image(WA_ICON_PATH, width=5 * mm, height=5 * mm)
        cta_cells.append(wa_img)
    cta_cells.append(Paragraph("+91 98452 03997  |  gradtensor.com", s_cta))
    cta_table = Table([cta_cells], colWidths=[7 * mm, col_w - 7 * mm])
    cta_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
    ]))
    cta_table.hAlign = "CENTER"
    story.append(cta_table)
    story.append(Spacer(1, 3 * mm))
    story.append(Paragraph(
        "This talk is offered as a community initiative to help students "
        "navigate the changing AI landscape.",
        s_footer
    ))

    doc.build(story)
    print(f"PDF generated: {OUTPUT_PATH}")


if __name__ == "__main__":
    build_pdf()
