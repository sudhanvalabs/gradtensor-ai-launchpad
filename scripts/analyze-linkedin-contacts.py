#!/usr/bin/env python3
"""Analyze LinkedIn connections to identify key categories for outreach."""

import csv
import re
import os

CSV_PATH = "/tmp/ln-export/Connections.csv"
OUTPUT_DIR = "/Users/prabhueshwarla/sites/gradtensor-ai-launchpad/scripts/linkedin-analysis"

os.makedirs(OUTPUT_DIR, exist_ok=True)

# Read connections (skip the notes header lines)
connections = []
with open(CSV_PATH, "r", encoding="utf-8-sig") as f:
    # Skip lines until we find the header
    for line in f:
        if line.startswith("First Name,"):
            break
    reader = csv.DictReader(f, fieldnames=["First Name", "Last Name", "URL", "Email Address", "Company", "Position", "Connected On"])
    for row in reader:
        connections.append(row)

print(f"Total connections: {len(connections)}")

# --- Category 1: Students in engineering/CS institutions ---
student_keywords_position = [
    r"\bstudent\b", r"\bintern\b", r"\bundergrad\b", r"\bgraduate\b",
    r"\bfresher\b", r"\blearner\b", r"\btrainee\b", r"\bapprentice\b",
    r"\bb\.tech\b", r"\bm\.tech\b", r"\bbtech\b", r"\bmtech\b",
    r"\bb\.e\b", r"\bm\.e\b", r"\bm\.s\b", r"\bms \b", r"\bmba\b",
    r"\bphd\b", r"\bresearch scholar\b", r"\bfinal year\b",
    r"\baspiring\b", r"\bseeking opportunities\b",
]

engineering_keywords_company = [
    r"\buniversity\b", r"\bcollege\b", r"\binstitut\b", r"\biit\b",
    r"\bnit\b", r"\bbits\b", r"\biiit\b", r"\bvit\b", r"\bsrm\b",
    r"\bmanipal\b", r"\bamity\b", r"\bjntu\b", r"\banna university\b",
    r"\bengineering\b", r"\btechnology\b", r"\bpilani\b",
    r"\bschool of\b", r"\bacademy\b", r"\bpsg\b", r"\brv college\b",
    r"\bpes university\b", r"\bdtu\b", r"\bnsut\b", r"\bcoep\b",
    r"\bjadavpur\b", r"\bbit mesra\b", r"\bthapar\b",
]

cs_keywords = [
    r"\bcomputer\b", r"\bcs\b", r"\bcse\b", r"\bit\b",
    r"\bsoftware\b", r"\bdata science\b", r"\bai\b",
    r"\bmachine learning\b", r"\bml\b", r"\belectronics\b",
    r"\bece\b", r"\beee\b", r"\binformation\b",
]

# --- Category 2: Founders/startup people ---
founder_keywords = [
    r"\bfounder\b", r"\bco-founder\b", r"\bcofounder\b",
    r"\bceo\b", r"\bcto\b", r"\bcoo\b", r"\bchief\b",
    r"\bbuilding\b", r"\bstarted\b", r"\bentrepreneur\b",
]

# --- Category 3: AI/ML hiring - people in AI roles or companies ---
ai_keywords = [
    r"\bai\b", r"\bartificial intelligence\b", r"\bmachine learning\b",
    r"\bml\b", r"\bdeep learning\b", r"\bdata scien\b", r"\bnlp\b",
    r"\bllm\b", r"\bgenerative ai\b", r"\bgen ai\b", r"\bgenai\b",
    r"\bcomputer vision\b", r"\bneural\b", r"\btransformer\b",
    r"\bai engineer\b", r"\bml engineer\b", r"\bai infrastructure\b",
    r"\brag\b", r"\bagent\b", r"\bprompt\b",
]

hiring_keywords = [
    r"\bhiring\b", r"\brecruit\b", r"\btalent\b", r"\bhr\b",
    r"\bhuman resource\b", r"\bpeople\b", r"\bvp engineering\b",
    r"\bengineering manager\b", r"\beng manager\b", r"\bhead of\b",
    r"\bdirector\b", r"\bvp\b",
]

# --- Category 4: Professors/academics ---
academic_keywords = [
    r"\bprofessor\b", r"\bprof\b", r"\bassociate prof\b",
    r"\bassistant prof\b", r"\blecturer\b", r"\bfaculty\b",
    r"\bhod\b", r"\bdean\b", r"\bacademic\b", r"\bteach\b",
    r"\bresearch\b", r"\bphd\b",
]


def matches(text, patterns):
    if not text:
        return False
    text = text.lower()
    return any(re.search(p, text) for p in patterns)


# Categorize
students = []
founders = []
ai_professionals = []
ai_hiring_managers = []
academics = []

for c in connections:
    pos = c.get("Position", "") or ""
    comp = c.get("Company", "") or ""
    name = f"{c.get('First Name', '')} {c.get('Last Name', '')}".strip()
    url = c.get("URL", "") or ""
    combined = f"{pos} {comp}"

    # Students
    if matches(pos, student_keywords_position) or (matches(comp, engineering_keywords_company) and matches(combined, cs_keywords)):
        students.append({
            "name": name,
            "position": pos,
            "company": comp,
            "url": url,
        })

    # Founders
    if matches(pos, founder_keywords):
        founders.append({
            "name": name,
            "position": pos,
            "company": comp,
            "url": url,
        })

    # AI professionals
    if matches(pos, ai_keywords):
        ai_professionals.append({
            "name": name,
            "position": pos,
            "company": comp,
            "url": url,
        })

    # AI hiring managers (AI company + leadership role, or hiring role)
    if matches(combined, ai_keywords) and matches(pos, hiring_keywords):
        ai_hiring_managers.append({
            "name": name,
            "position": pos,
            "company": comp,
            "url": url,
        })

    # Academics
    if matches(pos, academic_keywords) and matches(comp, engineering_keywords_company):
        academics.append({
            "name": name,
            "position": pos,
            "company": comp,
            "url": url,
        })


def write_report(filename, title, data, columns=("name", "position", "company", "url")):
    path = os.path.join(OUTPUT_DIR, filename)
    with open(path, "w") as f:
        f.write(f"# {title}\n")
        f.write(f"# Total: {len(data)}\n\n")
        # Header
        f.write(f"{'Name':<30} {'Position':<50} {'Company':<40} URL\n")
        f.write("-" * 160 + "\n")
        for item in sorted(data, key=lambda x: x["name"]):
            f.write(f"{item['name']:<30} {item['position'][:50]:<50} {item['company'][:40]:<40} {item['url']}\n")
    print(f"  {title}: {len(data)} -> {path}")


# Write reports
print("\nResults:")
write_report("1-students.txt", "Students in Engineering/CS Institutions", students)
write_report("2-founders.txt", "Startup Founders & CEOs", founders)
write_report("3-ai-professionals.txt", "AI/ML Professionals", ai_professionals)
write_report("4-ai-hiring-managers.txt", "AI Hiring Managers & Leaders", ai_hiring_managers)
write_report("5-academics.txt", "Professors & Academics at Engineering Institutions", academics)

# Summary
print(f"\nSummary:")
print(f"  Total connections: {len(connections)}")
print(f"  Students: {len(students)}")
print(f"  Founders: {len(founders)}")
print(f"  AI Professionals: {len(ai_professionals)}")
print(f"  AI Hiring Managers: {len(ai_hiring_managers)}")
print(f"  Academics: {len(academics)}")
print(f"\nReports saved to: {OUTPUT_DIR}")
