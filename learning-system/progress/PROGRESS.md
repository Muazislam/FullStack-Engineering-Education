# Progress Dashboard

Last updated: 2026-09-27

## Current State

| Metric | Value |
|---|---:|
| Current module | Module 0 - JavaScript Foundations |
| Current focus | Day C repair: function scope, declarations, expressions, and arrow functions |
| Module completion | 28% |
| Total time spent | 240 minutes (4 hours) |
| Active days | 2 |
| Sessions completed | 2 |
| Recall sessions completed | 1 |
| Checkpoints passed | 1 |
| Project features completed | 0 |

## Metrics To Track

| Metric | Why it matters |
|---|---|
| `time_spent_minutes` | Measures effort and pacing |
| `cumulative_hours` | Shows total investment over time |
| `active_days` | Shows consistency |
| `documentation_pages_read` | Ensures syntax comes from docs |
| `worked_examples_typed` | Confirms examples were typed manually |
| `problems_attempted` | Measures active practice |
| `problems_solved_independently` | Measures independence |
| `problems_solved_with_hints` | Shows where support was needed |
| `concepts_explained_correctly` | Measures understanding, not just code |
| `recall_score_percent` | Measures retention after checkpoints |
| `project_features_completed` | Tracks portfolio progress |
| `tests_written` | Measures engineering maturity |
| `bugs_resolved` | Measures debugging practice |
| `refactors_completed` | Measures design growth |
| `confidence_rating_1_to_5` | Captures student self-assessment |
| `stuck_points` | Feeds the next recall session |

## Module Progress

| Module | Status | Completion | Time Spent |
|---|---:|---:|---:|
| Module 0 - JavaScript Foundations | `[~]` | 28% | 240 min |
| Module 1 - Describing the UI | `[ ]` | 0% | 0 min |
| Module 2 - Adding Interactivity | `[ ]` | 0% | 0 min |
| Module 3 - Managing State | `[ ]` | 0% | 0 min |
| Module 4 - Escape Hatches | `[ ]` | 0% | 0 min |
| Module 5 - Performance and Modern React | `[ ]` | 0% | 0 min |
| Module 6 - Frontend Ecosystem | `[ ]` | 0% | 0 min |
| Module 7 - Capstone | `[ ]` | 0% | 0 min |

## Module Completion Formula

```text
module_completion =
  20% documentation and typed examples
+ 25% exercises/problems
+ 25% project feature work
+ 20% checkpoint explanation
+ 10% recall retention
```

## Charts

Markdown can display Mermaid line and pie charts in many viewers. A true
calendar heatmap is not native Mermaid, so this file uses an HTML table heatmap.
Update the chart values after each session.

### Cumulative Time Line Graph

```mermaid
xychart-beta
  title "Cumulative Study Time"
  x-axis ["Start", "2026-09-26", "2026-09-27"]
  y-axis "Minutes" 0 --> 300
  line [0, 30, 240]
```

### Progress Pie Graph

```mermaid
pie title Overall Curriculum Progress
  "Completed" : 28
  "Remaining" : 72
```

### Time By Module Pie Graph

```mermaid
pie title Time Spent By Module
  "Module 0" : 240
  "Other Modules" : 0
```

### Daily Work Heatmap

Use intensity values:

- `0` = no work
- `1` = 1-30 minutes
- `2` = 31-60 minutes
- `3` = 61-120 minutes
- `4` = more than 120 minutes

<table>
  <tr>
    <th>Date</th>
    <th>Minutes</th>
    <th>Intensity</th>
    <th>Heat</th>
  </tr>
  <tr>
    <td>2026-09-26</td>
    <td>30</td>
    <td>1</td>
    <td style="background:#9be9a8;width:80px;">&nbsp;</td>
  </tr>
  <tr>
    <td>2026-09-27</td>
    <td>210</td>
    <td>4</td>
    <td style="background:#216e39;width:80px;">&nbsp;</td>
  </tr>
</table>

## Current Stuck Points

- `push()` returns the new array length, not the pushed value.
- Array-of-object syntax: use `books.push({ ... })` and access an object with `books[0]`.
- Continue reinforcing `return` versus a method that only mutates an object.
- A variable assigned without `let`, `const`, or `var` can leak into global scope; use `const` or `let`.
- A nested function is scoped to its outer function; `square()` cannot be called outside `addsquares()`.
- Passing an object or array lets a function mutate the shared value, but the parameter itself is local; this is not `this`.
- Arrow functions can be object methods, but they do not get a dynamic `this` like method shorthand or a regular function.
- Avoid duplicate function names in one scope because later declarations replace earlier ones.

## Next Session Target

Repair the Day C code with `const`, nested-function scope, and a short comparison of regular methods versus arrow functions; then begin the checkpoint.
