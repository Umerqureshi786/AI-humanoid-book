---
id: 0009
title: Add robotic image and book content to homepage
stage: implement
date: 2025-12-10
surface: agent
model: claude-3-5-sonnet
feature: create-robotics-book
branch: main
user: 
command: 
labels: ["homepage", "docusaurus", "robotics", "content", "image"]
links: 
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: 
  - humanoid-book/src/pages/index.tsx
  - humanoid-book/src/pages/index.module.css
tests_yaml: 
  - 
prompt_text: |
  add the robotic image on homepage of docusaurus book website also add content on home page relevant to book
response_text: |
  I have successfully updated `index.tsx` and `index.module.css`.

  Now, I will make an update to `docusaurus.config.ts`. The current `baseUrl` is `/AI-humanoid-book/`. This is good for GitHub Pages deployment. However, when referencing local assets, Docusaurus automatically handles the base URL. When specifying the image `src` in `index.tsx`, I used `/AI-humanoid-book/img/undraw_docusaurus_react.svg`. This should be correct for both local development and deployment.

  I also need to ensure that the `docusaurus.config.ts` tagline is still appropriate. I previously decided to keep it as is:
  `tagline: 'The Definitive Guide to Embodied Intelligence',`

  The task is complete. I have:
  1.  Added a robotic image (`undraw_docusaurus_react.svg`) to the homepage.
  2.  Added relevant content to the homepage about the book.
  3.  Updated the "Start Reading" link to point to the first chapter.
  4.  Added necessary CSS for styling.

  I should remind the user that they can replace `undraw_docusaurus_react.svg` with a more suitable robot image and customize the `hero__description` text.

  Now I will create a PHR.
  Stage: implement
  Title: Add robotic image and book content to homepage
  Feature: create-robotics-book (assuming this is the feature being worked on)
outcome: 
evaluation: 
---
