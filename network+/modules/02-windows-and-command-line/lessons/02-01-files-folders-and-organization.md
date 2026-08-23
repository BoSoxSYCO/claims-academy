---
id: NA-M02-L01
module: 02
lesson: 01
title: "Files, Folders, and How Windows Organizes Them"
unit: 1
objective_ids: ["on-ramp"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M01-L02", "NA-M01-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 02 · Lesson 01] Files, Folders, and How Windows Organizes Them

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lessons 01-02 (storage) and 01-04 (the operating system).

Welcome to Module 02. You know the parts of a computer. Now you'll learn to *use* Windows with confidence — starting with the most basic skill of all: finding your way around files and folders.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **file** is and what a **folder** is.
- [ ] Explain how folders hold files and other folders (like a tree).
- [ ] Open **File Explorer** and create a folder.
- [ ] Read a simple **file path**, like `C:\Users\You\Documents`.

---

## 2. Introduction — why this matters

Imagine a filing cabinet with no folders inside — just thousands of loose papers dumped in a drawer. Finding one page would take forever. That's why we use folders: to keep papers grouped and easy to find.

Your computer's **storage** (from Lesson 01-02) holds thousands of pieces of information. Without organization, you'd never find anything. So Windows keeps every piece of information in a **file**, and it groups files into **folders**. Folders can even hold other folders. This keeps everything tidy.

Why does this matter for networking? Because soon you'll download tools, save notes, and store switch settings on your laptop. You need to know where things are and how to get to them. And when you start using the command line (next lessons), moving between folders is the very first skill you'll use.

🎯 **Exam tip:** Later, network tools and log files live in specific folders. Being comfortable finding files now makes those tasks easy later.

---

## 3. Simple explanation

Let's define the pieces:

- A **file** is one saved item of information — a photo, a document, a song, a note. Each file has a **name** and usually a small tag at the end called an **extension** (like `.jpg` for a photo or `.txt` for a text note) that tells you its type.

- A **folder** (also called a **directory**) is a container that holds files. A folder can also hold *other folders*. This lets you build a neat tree.

Picture it like a filing cabinet:

> The **drive** is the whole cabinet. A **folder** is a drawer or a labeled folder inside it. A **file** is a single paper. Folders inside folders are like folders inside a drawer.

Your main storage is usually called the **C: drive**. Inside it, Windows keeps a folder for each user. Your personal folders — Documents, Pictures, Downloads — live inside your user folder.

To point to an exact file or folder, Windows uses a **path**. A path is like an address. It lists each folder you open, separated by a backslash `\`. For example:

```
C:\Users\You\Documents
```

Read that left to right: start at the **C:** drive, open **Users**, open your name (**You**), then open **Documents**. That's the address of your Documents folder.

The tool you use to see all this is **File Explorer** — the window with folders that opens when you click the yellow folder icon on the taskbar.

💡 **Tip:** A backslash `\` in a path just means "go one folder deeper." Each `\` is another step in.

---

## 4. Real-world analogy

> **"A drive is a filing cabinet; folders are the drawers and folders inside it; files are the papers."**

| In the filing cabinet… | On the computer… |
|------------------------|------------------|
| The whole **cabinet** | The **drive** (like C:) |
| A **drawer** you pull open | A top-level **folder** |
| A **labeled folder** inside the drawer | A **folder inside a folder** |
| A single **paper** | A **file** |
| The **label** telling you where to look | The **path** (the address) |

To find one paper, you open the right drawer, then the right folder, then pull the page. A path does the same thing in words: cabinet → drawer → folder → paper.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **File** | file | One saved item of information (a photo, note, or document). |
| **Folder** | FOLE-der | A container that holds files and other folders. Also called a **directory**. |
| **Directory** | dih-REK-tor-ee | Another word for a folder. |
| **File path** | path | The address that lists each folder to open to reach a file. |
| **Drive** | drive | A whole storage space, like the **C:** drive. |
| **File Explorer** | | The Windows tool that shows your files and folders. |

---

## 6. ASCII diagram

```
   C:\   (the drive — the whole cabinet)
   │
   └── Users
         │
         └── You              ← your personal folder
               ├── Documents  ← a folder
               │     ├── notes.txt      ← a file
               │     └── lab-log.txt    ← a file
               ├── Pictures
               └── Downloads

   A path names the way down:  C:\Users\You\Documents\notes.txt
```

_Notice how folders nest inside folders. The path lists each step, separated by `\`._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-02-01-folder-tree-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a folder tree starting at the C: drive, branching to Users → You → Documents/Pictures/Downloads, with two files inside Documents; a callout showing the path `C:\Users\You\Documents\notes.txt`.
> **Key elements & labels:** folder icons for folders, a page icon for files, indentation showing nesting, and the highlighted path.
> **Color meaning:** folders = yellow, files = gray — **and** folders use a folder shape and files a page shape, so it reads in black and white.
> **Flow direction:** top (drive) down through the tree.
> **Alt text (required):** "A folder tree starting at the C drive, opening to Users, then a personal folder, then Documents, Pictures, and Downloads; inside Documents are two files, with the full path to one file highlighted."

---

## 8. Suggested real photos (production brief)

> **Screenshot 1** — `img-02-01-file-explorer-01.jpg`
> File Explorer open to the Documents folder, with the address bar (showing the path) circled. Alt text: "The File Explorer window open to Documents, with the path in the address bar highlighted."
>
> **Screenshot 2** — `img-02-01-new-folder-01.jpg`
> The right-click menu with "New > Folder" highlighted. Alt text: "The right-click menu in File Explorer with New then Folder highlighted."
>
> **Photo 3** — `img-02-01-filing-cabinet-01.jpg`
> A real filing cabinet with a drawer open and folders inside, labeled to match drive/folder/file. Alt text: "An open filing cabinet drawer with folders inside, labeled to compare with a computer's drive, folders, and files."

---

## 9. Hands-on lab

**Goal:** open File Explorer, find your Documents folder, and create your own lab folder.
**Why:** you'll keep your course notes and downloads here for the rest of the program.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- No internet or cables needed.
- Estimated time: 10 min.

⚠️ **Before you start (safety):** You will only create one new, empty folder. You will not delete or move anything.

### 9a. Step-by-step instructions

1. Open **File Explorer** by clicking the yellow folder icon on the taskbar (or press the **Windows key + E**).
2. In the left panel, click **Documents**.
3. Look at the **address bar** at the top. It shows the path to where you are.
4. Right-click an empty space in the folder. Choose **New**, then **Folder**.
5. Type the name `NetworkAcademy` and press **Enter**.
6. Double-click your new folder to open it. Notice the path in the address bar now ends with `\NetworkAcademy`.

### 9b. Expected results

- You see your files and folders in the main window.
- A new, empty folder named **NetworkAcademy** appears in Documents.
- The address bar shows a path ending in your new folder, for example:
  ```text
  C:\Users\You\Documents\NetworkAcademy
  ```
- ✅ **You did it if:** your `NetworkAcademy` folder exists and you can read its path.

### 9c. Verify it worked

1. Click in the address bar. The full path highlights.
2. Read it out loud, step by step: "C drive, Users, my name, Documents, NetworkAcademy."

### 9d. Reset / roll back

You can keep the `NetworkAcademy` folder — you'll use it all course. If you'd rather remove it, right-click it and choose **Delete** (it's empty, so nothing is lost).

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Confusing a file with a folder | You look in the wrong place | A folder holds things; a file *is* the thing. Folders have a folder icon |
| Ignoring the file extension | You can't tell a file's type | The tag after the dot (`.txt`, `.jpg`) tells you the type |
| Reading a path backward | You get lost in the tree | Read left to right: drive → folder → folder → file |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't find File Explorer | Icon not on taskbar | Press **Windows key + E** to open it |
| No "New > Folder" option | Right-clicked a file, not empty space | Right-click an empty area inside the folder |
| The address bar shows names, not `\` | Windows shows a friendly view | Click once in the address bar to see the full path with `\` |

---

## 12. Lesson summary

- A **file** is one saved item; a **folder** (directory) holds files and other folders.
- Folders **nest** inside folders, forming a tree.
- A **path** is the address that lists each folder to open, separated by `\`.
- **File Explorer** is the Windows tool for seeing and organizing all of it.

**One-sentence recap:** Files hold your information, folders keep files organized in a tree, and a path is the address that leads to any file.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-02-01-fill-in-the-blank.md`
2. **Matching** — `wb-02-01-matching.md`
3. **Label the diagram** — `wb-02-01-label-the-diagram.md` (label the folder tree)
4. **Short answer** — `wb-02-01-short-answer.md`
5. **Hands-on observation** — `wb-02-01-hands-on-observation.md` (record your folder's path)
6. **Vocabulary review** — `wb-02-01-vocabulary-review.md`
7. **Reflection** — `wb-02-01-reflection.md`

**Quick written warm-up (do this now):** Write the path to your Documents folder.

`C:\Users\____________\Documents`

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-02-01-knowledge-check.md`.)

1. What is a file? *(Objective: define file)*
   - A) A container that holds other things
   - B) One saved item of information
   - C) The whole drive
   - D) A cable

2. What is a folder? *(Objective: define folder)*
   - A) One saved item of information
   - B) A container that holds files and other folders
   - C) A network cable
   - D) A password

3. Another word for a folder is a… *(Objective: vocabulary)*
   - A) directory
   - B) driver
   - C) program
   - D) port

4. What does a **file path** tell you? *(Objective: path)*
   - A) The price of a file
   - B) The address — which folders to open to reach a file
   - C) The color of a file
   - D) Who made the file

5. In the path `C:\Users\You\Documents`, what do you open **first**? *(Objective: path)*
   - A) Documents
   - B) You
   - C) The C: drive
   - D) Users

6. **True or false —** A folder can hold other folders. Explain your answer in one sentence. *(Objective: nesting)*

7. Which tool do you use to see your files and folders in Windows? *(Objective: File Explorer)*
   - A) Task Manager
   - B) File Explorer
   - C) The browser
   - D) Notepad

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ File &nbsp;&nbsp; ___ Folder &nbsp;&nbsp; ___ Path
   - A) a container for files &nbsp; B) one saved item &nbsp; C) the address to a file

9. Fill in the blank: In a path, folders are separated by the ____________ symbol. *(Objective: path)*

10. **Scenario —** A friend says, "I saved my file but now I can't find it." What one question about *where* they saved it would help most, and why? *(Objective: paths/organization)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-02-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-02-01-files-folders.md`. In brief:

- **Objective in one line:** learners can define file/folder, read a path, and create a folder.
- **Common misconceptions:** file vs. folder; reading paths backward. Correct with the filing-cabinet image.
- **Pacing:** ~25 min. The hands-on folder creation is the payoff and sets up the whole course's note-keeping.
- **How CompTIA tests it:** indirectly — tools and logs live in known paths; comfort here speeds later labs.
- **Support idea:** have learners physically point along the path in the address bar.
- **Extension idea:** create subfolders inside NetworkAcademy (one per module).

---

## 17. Cheat sheet

> **Quick reference — Files & Folders**
>
> - **File** = one saved item (photo, note, document); its **extension** (`.txt`, `.jpg`) shows the type.
> - **Folder** (directory) = a container for files and other folders.
> - **Path** = the address to a file, e.g., `C:\Users\You\Documents\notes.txt`; folders separated by `\`.
> - **Drive** = a whole storage space (usually **C:**).
> - **File Explorer** = the tool to see it all (**Windows key + E**).
> - **New folder:** right-click empty space → **New → Folder**.
>
> _(Full version: `resources/cheat-sheets/windows-and-cli-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **File** — One saved item of information (a photo, note, or document).
- **Folder** — A container that holds files and other folders; also called a directory.
- **Directory** — Another word for a folder.
- **File path** — The address that lists each folder to open to reach a file.
- **Drive** — A whole storage space, like the C: drive.
- **File Explorer** — The Windows tool that shows your files and folders.

---

## 19. Homework

- **Practice:** Inside your `NetworkAcademy` folder, create a subfolder for this module called `Module-02`. Write down its full path.
- **Spaced review:** Redo the Lesson 01-02 flashcards for storage — files live in storage.
- **Preview:** Windows has hundreds of settings and tools. How do you find the ones you need? The next lesson shows you.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. What is still fuzzy for me? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what a file and a folder are.
- [ ] I understand how folders nest to form a tree.
- [ ] I opened File Explorer and created my NetworkAcademy folder.
- [ ] I can read a file path left to right.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: finding the tools in Windows.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M02-L01** — "Files, Folders, and How Windows Organizes Them" · Module 02 · Unit 1_
