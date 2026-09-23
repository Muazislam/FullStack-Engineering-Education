# JS to React Learning System

This folder is the persistent memory for the JavaScript to React learning plan.
Start every learning session by giving the AI `INSTRUCTOR_PROMPT.md` and asking
it to read the files in this folder before teaching.

## Files and folders

- `INSTRUCTOR_PROMPT.md` - the teaching rules and session protocol.
- `CURRICULUM.md` - the merged JavaScript and React learning plan.
- `progress/PROGRESS.md` - metrics, module status, and charts.
- `progress/SESSIONS.md` - chronological session history.
- `sessions/` - detailed notes for individual sessions when needed.
- `projects/shelflife/` - project instructions, decisions, and milestones.
- `checkpoints/` - checkpoint answers and instructor feedback.
- `recall/` - cumulative recall sessions after checkpoints.

## How to resume later

In a new AI chat, say:

```text
Read learning-system/INSTRUCTOR_PROMPT.md first, then continue my learning
using learning-system/CURRICULUM.md, learning-system/progress/PROGRESS.md,
and learning-system/progress/SESSIONS.md.
```

The AI should then identify the next lesson, ask for your thinking before
helping, and update the progress files at the end of the session.
