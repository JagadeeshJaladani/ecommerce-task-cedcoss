// ── Profile Dropdown ──
function toggleProfileMenu() {
  const dropdown = document.getElementById("profile-dropdown");
  const caret    = document.getElementById("profile-caret");
  const trigger  = document.getElementById("profile-trigger");
  const isOpen   = dropdown.classList.contains("show");
  dropdown.classList.toggle("show");
  caret.classList.toggle("open");
  trigger.setAttribute("aria-expanded", String(!isOpen));
}

function handleLogout(e) {
  e.preventDefault();
  if (confirm("Are you sure you want to logout?")) {
    alert("You have been logged out. Goodbye! 👋");
  }
}

document.addEventListener("click", function(e) {
  const wrap = document.getElementById("profile-menu-wrap");
  if (wrap && !wrap.contains(e.target)) {
    document.getElementById("profile-dropdown").classList.remove("show");
    document.getElementById("profile-caret").classList.remove("open");
    document.getElementById("profile-trigger").setAttribute("aria-expanded", "false");
  }
});

// ── User Data ──
const userData = {
  name:            "Jagadeesh Jaladani",
  referralCode:    "JAGA2026",
  friendsReferred: 12,
  pointsEarned:    240,
  creditsEarned:   120
};

// ── Leaderboard Data ──
const leaderboardData = [
  { name: "Rahul Sharma",       referred: 31, points: 620, badge: "🥇 Gold"   },
  { name: "Priya Verma",        referred: 27, points: 540, badge: "🥈 Silver"  },
  { name: "Arjun Singh",        referred: 22, points: 440, badge: "🥉 Bronze"  },
  { name: "Neha Gupta",         referred: 18, points: 360, badge: "🚀 Rising"  },
  { name: "Jagadeesh Jaladani", referred: 12, points: 240, badge: "⭐ You"     }
];

// ── Referral Link ──
function setReferralLink() {
  const link = `https://gotoshop.com/join?ref=${userData.referralCode}`;
  document.getElementById("referral-link").value = link;
}

// ── Copy Link ──
function copyLink() {
  const linkInput   = document.getElementById("referral-link");
  const copyBtn     = document.getElementById("copy-btn");
  const copyBtnText = document.getElementById("copy-btn-text");
  const copyBtnIcon = document.getElementById("copy-btn-icon");
  const copyMsg     = document.getElementById("copy-msg");

  navigator.clipboard.writeText(linkInput.value).then(() => {
    copyBtnText.textContent = "Copied!";
    copyBtnIcon.textContent = "✅";
    copyBtn.classList.add("copied");
    copyMsg.classList.add("show");
    setTimeout(() => {
      copyBtnText.textContent = "Copy Link";
      copyBtnIcon.textContent = "⌘";
      copyBtn.classList.remove("copied");
      copyMsg.classList.remove("show");
    }, 2500);
  }).catch(() => {
    linkInput.select();
    document.execCommand("copy");
    copyMsg.classList.add("show");
    setTimeout(() => copyMsg.classList.remove("show"), 2500);
  });
}

// ── Share Functions ──
function shareWhatsApp() {
  const link = document.getElementById("referral-link").value;
  const msg  = encodeURIComponent(`🛒 Join Gotoshop and get amazing deals! Use my referral link: ${link}`);
  window.open(`https://wa.me/?text=${msg}`, "_blank");
}

function shareTwitter() {
  const link = document.getElementById("referral-link").value;
  const msg  = encodeURIComponent(`🚀 Shopping smarter with @Gotoshop! Join using my referral link and we both earn rewards: ${link} #Gotoshop #Rewards`);
  window.open(`https://twitter.com/intent/tweet?text=${msg}`, "_blank");
}

// ── Animate Count Up ──
function animateCount(elementId, target, prefix = "", suffix = "") {
  const el = document.getElementById(elementId);
  if (!el) return;
  let current = 0;
  const duration  = 1600;
  const stepTime  = 20;
  const steps     = duration / stepTime;
  const increment = target / steps;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = prefix + Math.floor(current) + suffix;
  }, stepTime);
}

// ── Load Leaderboard ──
function loadLeaderboard() {
  const container = document.getElementById("leaderboard-body");
  const medals    = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"];

  leaderboardData.forEach((user, i) => {
    const isYou = user.name === userData.name;
    const row   = document.createElement("div");
    row.className = "lb-row" + (isYou ? " me" : "");
    row.style.animationDelay = `${i * 0.09}s`;

    row.innerHTML = `
      <div class="lb-rank">${medals[i]}</div>
      <div class="lb-name">${user.name}${isYou ? '<span class="you-tag">You</span>' : ""}</div>
      <div class="lb-referred">${user.referred} friends</div>
      <div class="lb-points">${user.points} pts</div>
      <div><span class="lb-badge">${user.badge}</span></div>
    `;
    container.appendChild(row);
  });
}

// ── Sticky Header Shadow ──
function initHeaderScroll() {
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 20
      ? "0 4px 40px rgba(0,0,0,0.55)"
      : "none";
  });
}

// ── Init ──
window.onload = function () {
  setReferralLink();
  animateCount("friends-count",  userData.friendsReferred);
  animateCount("points-earned",  userData.pointsEarned);
  animateCount("credits-earned", userData.creditsEarned, "₹");
  loadLeaderboard();
  initHeaderScroll();
};