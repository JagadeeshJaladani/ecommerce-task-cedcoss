# 🛒 Gotoshop – Referral Program Page

> A referral program page built for **Gotoshop** as part of the **Cedcoss Technologies × LPU Placement Drive 2026** — Round 2 Task.

---

## 🔗 Live Preview

Open `index.html` directly in any browser, or use VS Code Live Server.

---

## 📌 Features

- **Referral Link** — Unique link per user with animated "Link Active" pulse indicator
- **One-click Copy** — Clipboard API with instant visual feedback
- **Share Buttons** — WhatsApp, Twitter, and Copy link
- **Stats Dashboard** — Friends Referred, Points Earned, Credits Earned with animated count-up
- **Animated Progress Bars** — Visual progress on each stat card
- **Floating Hero Cards** — Live stats displayed as floating UI cards
- **Leaderboard** — Top 5 referrers with medal ranks and staggered entrance animation
- **Profile Dropdown** — Avatar menu with Profile, Settings, Rewards, and Logout
- **Sticky Header** — Scroll-aware shadow effect with Back button navigation
- **Purple Theme** — Deep purple animated background with drifting orbs
- **Fully Responsive** — Mobile-friendly layout

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure & semantic markup |
| CSS3 | Flexbox, Grid, custom properties, keyframe animations |
| Vanilla JavaScript | DOM manipulation, Clipboard API, count-up animation |
| Google Fonts | Playfair Display + DM Sans |
| Git & GitHub | Version control |

---

## 📁 Project Structure

```
ecommerce-task-cedcoss/
├── index.html       ← Main page
├── style.css        ← All styles (purple theme, animations, responsive)
├── script.js        ← Referral logic, leaderboard, copy, share
├── logo.png         ← Gotoshop logo
└── README.md        ← This file
```

---

## 🚀 How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/ecommerce-task-cedcoss.git
   cd ecommerce-task-cedcoss
   ```
2. Open `index.html` in any browser
3. Or right-click `index.html` → **Open with Live Server** in VS Code

---

## 🧠 Key JavaScript Functions

| Function | Description |
|---|---|
| `setReferralLink()` | Generates and injects the user's referral URL |
| `copyLink()` | Copies link to clipboard with visual feedback |
| `shareWhatsApp()` | Opens WhatsApp with pre-filled referral message |
| `shareTwitter()` | Opens Twitter with pre-filled tweet |
| `animateCount()` | Smooth number count-up animation on load |
| `loadLeaderboard()` | Dynamically renders leaderboard rows with stagger |
| `toggleProfileMenu()` | Opens/closes profile dropdown |
| `initHeaderScroll()` | Adds shadow to header on scroll |

---

## 👤 Built by

**Jagadeesh Jaladani**  
B.Tech CSE — Lovely Professional University  
Cedcoss Technologies × LPU Placement Drive 2026

---

## 📄 License

This project is built for educational and placement purposes.  
© 2026 Gotoshop. All rights reserved.