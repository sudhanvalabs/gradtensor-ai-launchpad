#!/usr/bin/env python3
"""Generate branded syllabus PDF for the 6-week AI Engineering course."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import mm, cm
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    Image, PageBreak, HRFlowable
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER
import os

# Paths
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO_PATH = os.path.join(BASE, "src", "assets", "logo.png")
GT_ICON_PATH = os.path.join(BASE, "public", "gt-favicon.png")
OUTPUT_PATH = os.path.join(BASE, "public", "syllabus-ai-engineering-6-week.pdf")

# Brand colors
GREEN = HexColor("#4CAF50")
DARK_GREEN = HexColor("#388E3C")
DARK_BG = HexColor("#0a0a0a")
DARK_CARD = HexColor("#1a1a1a")
LIGHT_GRAY = HexColor("#666666")
MID_GRAY = HexColor("#999999")
BORDER_GRAY = HexColor("#333333")
WHITE = white
TEXT_DARK = HexColor("#1a1a1a")
TEXT_BODY = HexColor("#333333")
BG_LIGHT = HexColor("#f8f9fa")
ACCENT_BG = HexColor("#f0f7f0")

# Styles
style_title = ParagraphStyle(
    "Title",
    fontName="Helvetica-Bold",
    fontSize=24,
    leading=30,
    textColor=TEXT_DARK,
    spaceAfter=4 * mm,
)

style_subtitle = ParagraphStyle(
    "Subtitle",
    fontName="Helvetica",
    fontSize=13,
    leading=18,
    textColor=LIGHT_GRAY,
    spaceAfter=6 * mm,
)

style_section = ParagraphStyle(
    "Section",
    fontName="Helvetica-Bold",
    fontSize=16,
    leading=22,
    textColor=DARK_GREEN,
    spaceBefore=8 * mm,
    spaceAfter=4 * mm,
)

style_week_title = ParagraphStyle(
    "WeekTitle",
    fontName="Helvetica-Bold",
    fontSize=13,
    leading=18,
    textColor=TEXT_DARK,
    spaceBefore=6 * mm,
    spaceAfter=1 * mm,
)

style_week_subtitle = ParagraphStyle(
    "WeekSubtitle",
    fontName="Helvetica-Oblique",
    fontSize=10,
    leading=14,
    textColor=GREEN,
    spaceAfter=3 * mm,
)

style_subsection = ParagraphStyle(
    "Subsection",
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=14,
    textColor=TEXT_DARK,
    spaceBefore=3 * mm,
    spaceAfter=1.5 * mm,
)

style_body = ParagraphStyle(
    "Body",
    fontName="Helvetica",
    fontSize=10,
    leading=15,
    textColor=TEXT_BODY,
    spaceAfter=1.5 * mm,
)

style_bullet = ParagraphStyle(
    "Bullet",
    fontName="Helvetica",
    fontSize=10,
    leading=15,
    textColor=TEXT_BODY,
    leftIndent=12,
    spaceAfter=1 * mm,
    bulletIndent=0,
)

style_portfolio = ParagraphStyle(
    "Portfolio",
    fontName="Helvetica-Oblique",
    fontSize=9.5,
    leading=14,
    textColor=DARK_GREEN,
    spaceBefore=2 * mm,
    spaceAfter=2 * mm,
    leftIndent=12,
)

style_footer = ParagraphStyle(
    "Footer",
    fontName="Helvetica",
    fontSize=8,
    leading=12,
    textColor=MID_GRAY,
    alignment=TA_CENTER,
)

style_meta = ParagraphStyle(
    "Meta",
    fontName="Helvetica",
    fontSize=10,
    leading=15,
    textColor=TEXT_BODY,
    spaceAfter=1.5 * mm,
)

style_cta = ParagraphStyle(
    "CTA",
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=16,
    textColor=DARK_GREEN,
    alignment=TA_CENTER,
    spaceBefore=4 * mm,
    spaceAfter=2 * mm,
)

style_diff_title = ParagraphStyle(
    "DiffTitle",
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=15,
    textColor=TEXT_DARK,
    spaceAfter=1 * mm,
    leftIndent=12,
)

style_diff_body = ParagraphStyle(
    "DiffBody",
    fontName="Helvetica",
    fontSize=9.5,
    leading=14,
    textColor=TEXT_BODY,
    spaceAfter=3 * mm,
    leftIndent=12,
)


def add_header_footer(canvas, doc):
    """Add header line and footer to each page."""
    canvas.saveState()
    width, height = A4

    # Top accent line
    canvas.setStrokeColor(GREEN)
    canvas.setLineWidth(2)
    canvas.line(20 * mm, height - 12 * mm, width - 20 * mm, height - 12 * mm)

    # Footer
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MID_GRAY)
    canvas.drawCentredString(width / 2, 10 * mm, "gradtensor.com  |  wa.me/919108030542")
    canvas.drawRightString(width - 20 * mm, 10 * mm, f"Page {doc.page}")

    canvas.restoreState()


def build_pdf():
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=A4,
        topMargin=18 * mm,
        bottomMargin=18 * mm,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
    )

    story = []
    width = A4[0] - 40 * mm  # usable width

    # --- HEADER ---
    story.append(Spacer(1, 4 * mm))

    # Logo + Brand name side by side
    BRANDNAME_PATH = os.path.join(BASE, "public", "gradtensor-brandname.png")
    header_cells = []
    if os.path.exists(LOGO_PATH):
        logo_img = Image(LOGO_PATH, width=28 * mm, height=28 * mm)
        header_cells.append(logo_img)
    if os.path.exists(BRANDNAME_PATH):
        # Scale brand name proportionally (original ~1775x311)
        bn_img = Image(BRANDNAME_PATH, width=72 * mm, height=12.6 * mm)
        header_cells.append(bn_img)

    if header_cells:
        header_table = Table(
            [header_cells],
            colWidths=[32 * mm, 76 * mm],
        )
        header_table.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ]))
        header_table.hAlign = "LEFT"
        story.append(header_table)
        story.append(Spacer(1, 6 * mm))

    # Title
    story.append(Paragraph("AI Engineering &amp; Agentic Foundations", style_title))
    story.append(Paragraph("Build production-ready AI agents in 6 weeks", style_subtitle))

    # Divider
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER_GRAY, spaceAfter=5 * mm))

    # --- COURSE META ---
    meta_items = [
        ("<b>Duration:</b> 6 weeks", "<b>Format:</b> Live sessions (not recorded)"),
        ("<b>Effort:</b> 24 live hours + 24 project hours (~8 hrs/week)", "<b>Prerequisites:</b> Basic Python knowledge"),
        ("<b>Ideal for:</b> Final-year students &amp; working professionals adding AI skills", "<b>Next Batch:</b> April 2026"),
    ]

    for left, right in meta_items:
        t = Table(
            [[Paragraph(left, style_meta), Paragraph(right, style_meta)]],
            colWidths=[width * 0.55, width * 0.45],
        )
        t.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ]))
        story.append(t)

    story.append(Spacer(1, 2 * mm))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER_GRAY, spaceAfter=2 * mm))

    # --- WEEKLY CURRICULUM ---
    story.append(Paragraph("WEEKLY CURRICULUM", style_section))

    weeks = [
        {
            "title": "WEEK 1: How LLMs Actually Work (4 hrs)",
            "subtitle": "The conceptual spine",
            "live": [
                "Transformers, attention, tokenization (intuitive, not math-heavy)",
                "Inference parameters: temperature, top-p, system prompts, context windows",
                "Live demo showing how parameters change outputs",
            ],
            "project": [
                "Structured prompt experiments - same task, varying parameters",
                "Document what changed and why",
            ],
            "portfolio": "Understanding of how LLMs work at a product-decision level.",
        },
        {
            "title": "WEEK 2: Working with APIs & Embeddings (4 hrs)",
            "subtitle": "The engineering foundation",
            "live": [
                "OpenAI/Anthropic API fundamentals (auth, rate limits, cost management, structured outputs)",
                "Embeddings and vector similarity search",
                "Build a semantic search engine live",
            ],
            "project": [
                "Build a personal knowledge base from 20-30 documents with simple query interface",
            ],
            "portfolio": "Foundation for Week 4's RAG system.",
        },
        {
            "title": "WEEK 3: Prompt Engineering as a Discipline (4 hrs)",
            "subtitle": "What separates good AI engineers from great ones",
            "live": [
                "Chain-of-thought, few-shot learning, structured outputs (JSON/XML)",
                "Prompt injection risks and defenses",
                "Introduction to evaluation - how do you know if prompts work?",
            ],
            "project": [
                "Design and evaluate a prompt pipeline",
                "Write 3 variants, build a 10-example eval set, score them systematically",
            ],
            "portfolio": "Evaluation discipline that companies actually want.",
        },
        {
            "title": "WEEK 4: Building a RAG Pipeline (4 hrs)",
            "subtitle": "Most in-demand pattern in production",
            "live": [
                "Full RAG architecture - ingestion, chunking strategy, embedding, retrieval, reranking, generation",
                "Chunking tradeoffs, why naive RAG fails, handling hallucination",
                "Build working RAG chatbot live",
            ],
            "project": [
                "Extend Week 2's knowledge base into a full RAG chatbot with UI (Streamlit/Gradio)",
            ],
            "portfolio": "Portfolio piece #1 - deployed RAG system you can demo.",
        },
        {
            "title": "WEEK 5: Building Agents from First Principles (4 hrs)",
            "subtitle": "Understanding agents before using frameworks",
            "live": [
                "Agent anatomy - ReAct loop, tool calling with native APIs, memory types",
                "Multi-step reasoning, failure modes, prompt engineering for agents",
            ],
            "project": [
                "Build a research agent with 3+ tools that searches, synthesizes, and saves output",
            ],
            "portfolio": "Working agent from scratch with clear understanding of the loop.",
        },
        {
            "title": "WEEK 6: Agent Frameworks & Production Patterns (4 hrs)",
            "subtitle": "When and how to use frameworks",
            "live": [
                "LangGraph - state machines, rebuild Week 5 agent in framework",
                "Multi-agent patterns (delegation, collaboration, supervision)",
                "Ecosystem tour (LangChain/CrewAI/MCP)",
                "Production considerations: cost control, latency, observability, safety",
            ],
            "project_intro": "Choose one:",
            "project": [
                "Option A: Migrate to LangGraph with state management",
                "Option B: Build multi-agent system (researcher + writer)",
                "Option C: Real integration (GitHub/Notion/Slack agent)",
            ],
            "portfolio": "Portfolio piece #2 - production-grade agent with framework.",
        },
    ]

    for week in weeks:
        story.append(Paragraph(week["title"].replace("&", "&amp;"), style_week_title))
        story.append(Paragraph(week["subtitle"], style_week_subtitle))

        story.append(Paragraph("Live Session:", style_subsection))
        for item in week["live"]:
            story.append(Paragraph(f"\u2022  {item}", style_bullet))

        proj_label = "Project:"
        if "project_intro" in week:
            proj_label = f"Project ({week['project_intro']})"
        story.append(Paragraph(proj_label, style_subsection))
        for item in week["project"]:
            story.append(Paragraph(f"\u2022  {item}", style_bullet))

        story.append(Paragraph(f"Portfolio outcome: {week['portfolio']}", style_portfolio))

        # Subtle divider between weeks
        story.append(HRFlowable(width="80%", thickness=0.3, color=HexColor("#e0e0e0"), spaceBefore=2 * mm, spaceAfter=1 * mm))

    # --- PROJECTS SUMMARY ---
    story.append(Paragraph("DEPLOYED PROJECTS", style_section))
    story.append(Paragraph("You graduate with two deployed, demo-ready projects - not notebooks.", style_body))
    story.append(Spacer(1, 2 * mm))

    projects = [
        ("1. RAG Chatbot with Custom Knowledge Base", "Ingest documents, chunk, embed, retrieve, generate answers. Deployed with a web interface (Streamlit/Gradio)."),
        ("2. AI Agent with Tool Orchestration", "Agent that can search the web, call APIs, and take actions on its own. Deployed and demo-ready for interviews."),
    ]

    for title, desc in projects:
        story.append(Paragraph(title, style_subsection))
        story.append(Paragraph(desc, style_bullet))
        story.append(Spacer(1, 1 * mm))

    # --- WHAT MAKES THIS DIFFERENT ---
    story.append(Paragraph("WHAT MAKES THIS DIFFERENT", style_section))

    differentiators = [
        ("First principles, not just frameworks", "You understand WHY things work, not just how to call them."),
        ("Explain and defend your work", "You graduate able to explain your architecture and defend your design decisions in interviews."),
        ("Live sessions, not recordings", "Direct instructor access with real-time Q&amp;A and feedback."),
        ("Deployed projects", "Live projects you can demo in interviews, not notebooks on your laptop."),
        ("Cumulative learning", "Each week builds on the last - Week 2's knowledge base becomes Week 4's RAG system."),
    ]

    for title, desc in differentiators:
        story.append(Paragraph(f"\u2022  {title}", style_diff_title))
        story.append(Paragraph(desc, style_diff_body))

    # --- WHO IS THIS FOR ---
    story.append(Paragraph("WHO IS THIS FOR", style_section))
    who_items = [
        "Final-year students who need an AI edge in campus interviews",
        "Working professionals adding agentic AI skills quickly",
        "Anyone who needs to build and demo AI systems fast",
    ]
    for item in who_items:
        story.append(Paragraph(f"\u2022  {item}", style_bullet))

    # --- CTA ---
    story.append(Spacer(1, 8 * mm))
    story.append(HRFlowable(width="100%", thickness=0.5, color=GREEN, spaceAfter=5 * mm))
    story.append(Paragraph("Next Batch: April 2026", style_cta))
    story.append(Paragraph("gradtensor.com  |  wa.me/919108030542", style_cta))

    # Build
    doc.build(story, onFirstPage=add_header_footer, onLaterPages=add_header_footer)
    print(f"PDF generated: {OUTPUT_PATH}")


if __name__ == "__main__":
    build_pdf()
