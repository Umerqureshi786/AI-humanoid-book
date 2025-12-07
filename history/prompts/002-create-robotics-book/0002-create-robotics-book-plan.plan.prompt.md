---
id: 0002
title: Create Robotics Book Plan
stage: plan
date: 2025-12-07
surface: agent
model: gemini-1.5-flash
feature: 002-create-robotics-book
branch: 002-create-robotics-book
user: unknown
command: /sp.plan
labels: [plan, book, robotics]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-create-robotics-book/plan.md
  - specs/002-create-robotics-book/research.md
  - specs/002-create-robotics-book/data-model.md
  - specs/002-create-robotics-book/quickstart.md
tests:

---

## Prompt

/sp.plan  Create a complete, phased execution plan for the 20,000–30,000-word technical book
Project: Physical AI & Humanoid Robotics
Deliverables to produce in this Plan phase:

High-level architecture sketch of the entire book (chapter flow, dependencies, cross-references)
Detailed section structure for every chapter (H1 → H2 → H3 hierarchy with short descriptions and estimated word counts)
Research-while-writing strategy (research-concurrent approach, no full upfront literature review)
Source acquisition and validation pipeline
Quality validation and gating process at chapter level
Timeline with realistic milestones (target completion: 2026-04-30)

Core planning principles (must respect):

Strictly follow the ratified Constitution v1.1.0 and the accepted /sp.specify
Use research-concurrent workflow: research and writing happen in parallel per chapter; never block writing waiting for all sources
All references in APA 7th edition from day one
Minimum 50 unique sources, ≥50% peer-reviewed (track progress live)
Zero plagiarism gate before any chapter is marked complete

Phased execution structure (organize the entire project into these exact phases):
Phase 1 – Research & Foundation (Weeks 1–6)

Finalise exact chapter titles and section hierarchy
Build master bibliography skeleton (Zotero + BibTeX)
Create reusable Markdown + Mermaid + LaTeX templates
Set up Docusaurus repository and CI/CD to GitHub Pages
Complete Chapters 1–3 (Introduction, History, Kinematics/Dynamics) – these are mostly foundational and require fewer bleeding-edge sources

Phase 2 – Core Systems & State-of-the-Art (Weeks 7–14)

Chapters 4–9 (Sensing, ROS 2, Simulation, Perception, Locomotion, Manipulation)
Heavy parallel research on 2023–2025 papers (RSS, CoRL, Science Robotics, ICRA/IROS 2024–2025)
Generate all original diagrams and code snippets
Weekly peer-review gate: each finished chapter passes constitution compliance check

Phase 3 – Advanced Topics & Integration (Weeks 15–20)

Chapters 10–12 (VLA models, Sim-to-Real, Current Humanoid Platforms comparison)
Include technical deep-dive tables (e.g., Atlas vs. Figure 02 vs. Unitree G1 vs. Tesla Optimus vs. Apptronik Apollo – public specs only)

Phase 4 – Synthesis & Futures (Weeks 21–24)

Chapters 13–15 (Safety/Ethics grounded in technical constraints, Research Frontiers, Conclusion)
Final cross-chapter consistency pass
Master bibliography completion (≥50 sources, ≥50% peer-reviewed)

Phase 5 – Validation & Deployment (Weeks 25–26)

Full plagiarism scan (Turnitin + GPTZero)
External technical review by at least one PhD-level robotics expert
Final proofreading and Flesch-Kincaid validation (grade 10–12)
Deploy to GitHub Pages (verify zero build errors)
Generate PDF version via Docusaurus or WeasyPrint

Key decisions needing explicit documentation and trade-offs:

Depth vs. breadth in locomotion chapter: ZMP + whole-body control classics vs. latest RL-based methods
Level of mathematical derivation (full proofs vs. intuitive explanations with citations)
Inclusion of proprietary platforms (e.g., Tesla Optimus): only publicly available specs and videos (no speculation)
Diagram style: Mermaid only vs. hand-drawn SVG for complex kinematics

Testing / Validation strategy (chapter acceptance criteria):

Every factual claim has an in-text APA citation pointing to a real source
Source list for chapter contains ≥70% peer-reviewed items by end of project
All code snippets run in ROS 2 Humble/Iron + Isaac Sim 2024.1+ (tested in CI)
All Mermaid diagrams render correctly
Chapter word count within ±15% of target
Plagiarism score <1% (excluding references and code)
Reviewed and signed off by project owner

Technical details:

Research tool: Zotero + Zotero-to-BibTeX + Citation Picker in Obsidian/VS Code
Writing environment: Markdown with YAML frontmatter, embedded Mermaid, LaTeX via KaTeX
Version control: Git with meaningful commit messages referencing constitution version
Continuous integration: GitHub Actions running Docusaurus build on every push

## Response snapshot

I have created the implementation plan for the "Create a technical book about Physical AI and Humanoid Robotics" feature.

The plan is located at `specs/002-create-robotics-book/plan.md`. I have also created placeholder files for research, data model, and quickstart.

You can now proceed to the task breakdown phase by running `/sp.tasks`.

## Outcome

- ✅ Impact: Created the implementation plan and placeholder files for the feature.
- 🧪 Tests: none
- 📁 Files: 
    - specs/002-create-robotics-book/plan.md
    - specs/002-create-robotics-book/research.md
    - specs/002-create-robotics-book/data-model.md
    - specs/002-create-robotics-book/quickstart.md
- 🔁 Next prompts: /sp.tasks
- 🧠 Reflection: The `setup-plan.ps1` script failed, so I had to manually create the plan file. This indicates a problem with the scripting in this project.

## Evaluation notes (flywheel)

- Failure modes observed: The `setup-plan.ps1` script failed.
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
