# Part N — Final Submission

## Practical 01 — GitHub & VS Code

| Item | Value |
|---|---|
| GitHub Username | **Samantha476** |
| GitHub Repository URL | https://github.com/Samantha476/intern-github-practical |
| Technologies used | HTML, CSS, JavaScript, Git, GitHub, VS Code |
| Project | Intern Task Manager / Intern Daily Task Tracker |

## Screenshots checklist

- [ ] GitHub repository
- [ ] VS Code Source Control panel
- [ ] Commit history
- [ ] Branches
- [ ] Running final project

## Commit history created in this practical

| # | Commit message | Branch |
|---|---|---|
| 1 | Create initial task manager project | main |
| 2 | Add intern information | main |
| 3 | Add task management interface | main |
| 4 | Improve project styling | main |
| 5 | Add task dashboard | feature/add-dashboard → merged to main |
| 6 | Add task form with description, priority and date | feature/task-form → merged to main |
| 7 | Add task status field with status filters | feature/task-status → merged to main |
| 8 | Add self-study answers and submission documentation | main |
| 9 | Update README from GitHub to demonstrate pull | main (pulled from GitHub) |
| 10 | Update submission with GitHub username and repository URL | main |

# Reflection

**What did you learn?**

How the full Git workflow fits together: repository → stage → commit → push,
then branching for features and merging back into `main`. I also learned that
Git is local (it all works offline on GitHub) and GitHub is the remote sharing
layer, plus how VS Code's Source Control panel makes staging and committing
visual.

**What was difficult?**

Understanding the difference between the working directory, the staging area and
the repository — knowing that `git add` does not save anything, only `git
commit` does. Keeping branches in sync (push/pull) and resolving merge
conflicts was the trickiest part at first.

**What Git command was most useful and why?**

`git status` — it always tells you exactly where you are: which files changed,
what is staged and which branch you are on. It prevents committing the wrong
files and answers "what do I do next?" every time.

**What is the difference between Git and GitHub?**

Git is the version-control tool installed on your computer that tracks changes
locally; GitHub is a cloud service that hosts remote Git repositories and adds
collaboration features such as pull requests, issues and actions.

**Why are branches useful?**

They let you develop a feature or fix a bug in isolation without breaking
`main`. You can experiment freely, push the branch for review, and merge only
when the work is finished — keeping the main branch always stable.

**What would you do differently in your next project?**

Commit more often with smaller, clearer messages, and create the feature branch
*before* starting work instead of after — so every change is already tracked in
the right place.
