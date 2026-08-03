# Cheat Sheet — Windows & the Command Line

> A printable quick reference for **Module 02**. Grows as the module's lessons are published.

---

## Files & folders (Lesson 02-01)

- **File** = one saved item (photo, note, document). The **extension** (`.txt`, `.jpg`) shows its type.
- **Folder** (directory) = a container for files and other folders.
- **Drive** = a whole storage space (usually **C:**).
- **File path** = the address to a file. Read **left to right**, folders separated by `\`:
  ```
  C:\Users\You\Documents\notes.txt
  ```
- **File Explorer** = the tool to see files/folders → open with **Windows key + E**.
- **Make a new folder:** right-click empty space → **New → Folder**.

### The folder tree

```
C:\                         (the drive)
└── Users
      └── You               (your personal folder)
            ├── Documents   (a folder)
            │     └── notes.txt   (a file)
            ├── Pictures
            └── Downloads
```

> **Remember:** drive = the filing cabinet · folder = a drawer/folder · file = a paper · path = the label that leads to it.

---

## Finding tools (Lesson 02-02)

- **Open anything:** press the **Windows key** → type the tool's name → press **Enter**.
- **Pin to taskbar:** search the tool → right-click → **Pin to taskbar**.
- **Key tools:**

| Tool | For |
|------|-----|
| Settings | Change how Windows works (incl. network) |
| Control Panel | Older settings; some network tools |
| Command Prompt (`cmd`) | Type commands |
| File Explorer | See files & folders |
| Task Manager | See what's running; CPU/RAM use |
| Network settings | See/change your connection |

> **Taskbar** = bottom strip of one-click tools · **Start menu** = click Start / press Windows key.
> **Habit:** Windows key → type → Enter.

---

## The command line (Lesson 02-03)

- **Command line (CLI)** = type text commands instead of clicking.
- **Terminal** = the window for it: **Command Prompt** (classic) or **PowerShell** (newer).
- **Prompt** = text ending in `>` (e.g., `C:\Users\You>`). Type only *after* the `>`.

```
C:\Users\You> ver          ← prompt + command
Microsoft Windows [Version 10.0.22631]   ← output
C:\Users\You> _            ← ready for the next
```

- **Rhythm:** see prompt → type command → press **Enter** → read **output**.
- **Open:** taskbar icon or Windows key → `cmd` → Enter. **Close:** type `exit`.
- **Safe first commands:** `ver` (version) · `whoami` (your user) · `hostname` (computer name).
- ⚠️ Type exactly — a typo means "not recognized." Just retype it.

---

## First four networking commands (Lesson 02-04)

| Command | Asks | Shows |
|---------|------|-------|
| `ipconfig` | "What's my address?" | **IPv4 Address** + **Default Gateway** (your router) |
| `ping <address>` | "Can I reach you?" | "Reply from" = yes · "Request timed out" = no |
| `cd <folder>` | "Go into a folder" | moves you in (`cd ..` = up one) |
| `dir` | "What's here?" | lists files & folders |

- **Fast connection test:** `ipconfig` → note the Default Gateway → `ping <that address>`.
- **Where's the problem?** gateway replies but `8.8.8.8` times out → issue is past the router (internet/ISP).
- Put a **space** in `ping 8.8.8.8`. Return home: `cd %USERPROFILE%`.
- *(IP addresses are covered fully in Module 08 — here, it's just "your address.")*

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 02_
