# Part A — Self-Study Answers

Practical 01 — GitHub & VS Code: Git Integration, Version Control and
Self-Study Example Project (Marvex Software Solutions).

## 1. Git

Git is a **distributed version control system** that runs on your own computer.
It records every change made to a project as a snapshot (commit) in a local
database called a repository, so you can go back to any earlier version, compare
changes and work on several versions at the same time.

## 2. GitHub

GitHub is a **cloud platform for hosting Git repositories**. It adds a web
interface and collaboration tools on top of Git: pull requests, issues, project
boards, actions (CI/CD), branches on the web, contributors, README rendering and
more. Git works offline on your machine; GitHub shares that work with others.

## 3. Difference between Git and GitHub

- **Git** = the tool installed on your computer; it tracks versions locally.
- **GitHub** = a website/service that stores a *remote copy* of your Git
  repository so you can back it up, collaborate and show your work.

Git can be used without GitHub; GitHub cannot be used without Git.

## 4. Repository

A repository (repo) is a project folder together with Git's database of its
entire history (`.git` folder). It contains the working files plus every commit
ever made. A repo can be **local** (on your machine) or **remote** (on GitHub).

## 5. Commit

A commit is a **saved snapshot** of the project at a moment in time, with a
message describing what changed. Each commit has a unique ID (hash), points to
the previous commit and forms a chain — the *commit history*. Nothing is
recorded until you run `git commit`.

## 6. Branch

A branch is a **movable pointer to a commit** — an independent line of
development. Creating `feature/add-dashboard` lets you build a feature without
affecting `main`. When the work is finished you **merge** it back, and the
history of both lines is kept.

## 7. Push

`git push` **uploads local commits to the remote repository** (GitHub). It is
how your work leaves your computer and becomes visible to others.

## 8. Pull

`git pull` **downloads commits from the remote and merges them into your current
local branch**. It is the opposite of push and keeps your local copy up to date
with the team's work.

## 9. Clone

`git clone` **copies an entire remote repository** — files *and* full history —
to your computer and sets up `origin` so push/pull work immediately:
`git clone https://github.com/user/repo.git`.

## 10. Merge

`git merge` **combines one branch's history into another**. After finishing
`feature/add-dashboard` you run `git switch main && git merge
feature/add-dashboard`; the two lines of development become one, and the
feature's commits appear in `main`.

---

## Extra research (end of Part A)

**How VS Code connects with GitHub:** install the GitHub extension (or use the
built-in Git support), sign in with *Accounts > Sign in to GitHub*, and VS Code
can clone repositories, create PRs and show account avatars in the UI.

**Source Control panel:** VS Code's Git panel (`Ctrl+Shift+G`). It shows
**Changes** (modified files), **Staged Changes** (files added to the next
commit), a commit message box, and buttons for Commit, Sync (pull+push), Push,
Pull and branch switching.

**Staging:** `git add` copies a change into the *staging area* (index) — the
exact list of edits the next commit will contain. Staging lets you build
partial, meaningful commits.

**Git changes / commit / push / branch management** in VS Code: edit files →
they appear under *Changes* → click `+` to stage → type a message → ✓ Commit →
the ↑/↓ arrows (Sync) push and pull branches.

---

# Part D

**Q: What happens when you modify a file inside a Git repository?**

The file becomes a *modified* (unstaged) change. Git notices it via `git status`
("Changes not staged for commit") but **nothing is saved yet**. You then choose
what to do: `git add` to stage it, `git restore` to discard the edit, or edit
again. Only `git commit` stores it permanently in the history.

# Part H

**Q: Why is it better to create meaningful commits instead of one huge commit?**

- Each commit documents **one logical step**, so the history explains *why* the
  project changed, not just *that* it changed.
- You can **revert a single change** without undoing unrelated work.
- **Bugs are easy to find** with `git bisect` — a bad commit is isolated.
- **Review is easier**: small diffs in pull requests.
- Work in progress can be saved and shared without exposing half-finished code.

# Part K

**Q: Difference between `git push` and `git pull`?**

- **Push:** sends *your* local commits **to** the remote — publishing your work.
- **Pull:** fetches *other people's* commits **from** the remote and merges them
  into your branch — updating your copy.

Push = upload, Pull = download + merge.

# Part L — GitHub repository features

- **Code:** the file browser — the current snapshot of every file in the branch.
- **Issues:** a to-do/bug tracker for planning work and discussing problems.
- **Pull Requests:** proposes changes from a branch into another branch, with
  review, comments and checks before merging.
- **Actions:** automated workflows (build, test, deploy) that run on events —
  continuous integration.
- **Settings:** repository configuration — name, visibility, collaborators,
  branch protection, pages, secrets.
- **Branches:** lists all branches, their last commit and protection rules.
- **Commit history:** the ordered list of every snapshot with author, message and
  diff of what changed.
- **README:** the project's front page shown on the repository home — what it is,
  how to install/run it.
- **Contributors:** everyone who has committed to the repository and their
  contribution counts.
