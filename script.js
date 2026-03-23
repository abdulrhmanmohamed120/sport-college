// ================================================
// UTILITY FUNCTIONS
// ================================================
function sanitize(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function showToast(msg, type) {
    type = type || 'info';
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    toast.className = 'toast toast-' + type;
    toast.innerHTML = '<span>' + (icons[type] || '') + '</span><span>' + sanitize(msg) + '</span>';
    container.appendChild(toast);
    setTimeout(function () { toast.remove(); }, 3000);
}

function generateId() {
    return 'SSC-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 9000 + 1000);
}

function formatDate(d) {
    if (!d) return '-';
    const date = new Date(d);
    if (isNaN(date)) return d;
    return date.toLocaleDateString('ar-EG');
}

// ================================================
// REAL IMAGES DATABASE
// ================================================
const REAL_IMAGES = {
    gallery: [
        { cat: 'football', url: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=400&fit=crop', title: 'نهائي بطولة الجامعات', date: '📅 ديسمبر 2024' },
        { cat: 'basketball', url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop', title: 'تدريبات كرة السلة', date: '📅 نوفمبر 2024' },
        { cat: 'swimming', url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop', title: 'بطولة السباحة', date: '📅 أكتوبر 2024' },
        { cat: 'athletics', url: 'https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=600&h=400&fit=crop', title: 'سباق 100 متر', date: '📅 سبتمبر 2024' },
        { cat: 'gym', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop', title: 'صالة اللياقة الجديدة', date: '📅 أغسطس 2024' },
        { cat: 'football', url: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?w=600&h=400&fit=crop', title: 'تدريبات كرة اليد', date: '📅 يوليو 2024' },
        { cat: 'swimming', url: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600&h=400&fit=crop', title: 'حصة سباحة عملية', date: '📅 يونيو 2024' },
        { cat: 'athletics', url: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=600&h=400&fit=crop', title: 'تتويج أبطال الكلية', date: '📅 مايو 2024' }
    ],
    hero: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=1600&h=900&fit=crop',
    about: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    news: [
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=600&h=300&fit=crop',
        'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=600&h=300&fit=crop'
    ],
    avatars: {
        male: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        female: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
    },
    departments: [
        'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=300&fit=crop',
        'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=300&fit=crop',
        'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&h=300&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop'
    ]
};

// ================================================
// APPLY REAL IMAGES TO PAGE
// ================================================
function applyRealImages() {
    // Gallery Images
    const galleryItems = document.querySelectorAll('.g-item');
    galleryItems.forEach(function (item, i) {
        if (REAL_IMAGES.gallery[i]) {
            const imgDiv = item.querySelector('.g-img');
            const data = REAL_IMAGES.gallery[i];
            imgDiv.style.background = 'url(' + data.url + ') center/cover no-repeat';
            imgDiv.querySelector('span').style.display = 'none';
        }
    });

    // About Image
    const aboutBox = document.querySelector('.about-box');
    if (aboutBox) {
        aboutBox.style.background = 'url(' + REAL_IMAGES.about + ') center/cover no-repeat';
        aboutBox.style.fontSize = '0';
    }

    // News Images
    const newsImgs = document.querySelectorAll('.news-img');
    newsImgs.forEach(function (img, i) {
        if (REAL_IMAGES.news[i]) {
            img.style.background = 'url(' + REAL_IMAGES.news[i] + ') center/cover no-repeat';
            const emoji = img.querySelector('span');
            if (emoji) emoji.style.display = 'none';
        }
    });

    // Department Images
    const deptCards = document.querySelectorAll('.dept-h');
    deptCards.forEach(function (card, i) {
        if (REAL_IMAGES.departments[i]) {
            card.style.background = 'url(' + REAL_IMAGES.departments[i] + ') center/cover no-repeat';
            card.style.position = 'relative';
            // Add overlay for readability
            const overlay = document.createElement('div');
            overlay.style.cssText = 'position:absolute;inset:0;background:linear-gradient(135deg,rgba(30,58,95,.85),rgba(45,95,138,.75))';
            card.style.position = 'relative';
            card.insertBefore(overlay, card.firstChild);
            // Make content above overlay
            Array.from(card.children).forEach(function (child, ci) {
                if (ci > 0) child.style.position = 'relative';
            });
        }
    });
}

// ================================================
// STUDENT DATABASE (with localStorage persistence)
// ================================================
let DB = {
    "29901011234567": {
        name: "أحمد محمد العلي", nid: "29901011234567", uid: "SSC-2022-0451",
        year: "السنة الثالثة", dept: "التدريب الرياضي", status: "منتظم",
        gpa: 3.45, grade: "جيد جداً مرتفع", hours: 96, total: 140,
        dob: "1999-01-01", email: "ahmed.ali@ssc.edu.sa", phone: "+966 50 123 4567",
        gender: "male", rank: "12/280", avatar: "",
        courses: [
            { n: "تدريب رياضي متقدم", c: "SPE305", h: 3, w: 35, f: 50, t: 85, g: "B+", gc: "grade-b" },
            { n: "البحث العلمي في الرياضة", c: "SPE306", h: 3, w: 38, f: 52, t: 90, g: "A", gc: "grade-a" },
            { n: "الإصابات الرياضية", c: "SPE301", h: 3, w: 32, f: 46, t: 78, g: "C+", gc: "grade-c" },
            { n: "القياس والتقويم", c: "SPE302", h: 3, w: 40, f: 55, t: 95, g: "A+", gc: "grade-a" },
            { n: "رياضات الماء المتقدمة", c: "SPE307", h: 2, w: 28, f: 35, t: 63, g: "D", gc: "grade-d" },
            { n: "اللياقة البدنية", c: "SPE308", h: 2, w: 30, f: 40, t: 70, g: "C", gc: "grade-c" }
        ],
        monthly: [{ m: "سبتمبر", s: 78 }, { m: "أكتوبر", s: 82 }, { m: "نوفمبر", s: 85 }, { m: "ديسمبر", s: 88 }],
        sched: { "الأحد": ["تدريب رياضي", "", "البحث العلمي", ""], "الاثنين": ["", "الإصابات", "القياس والتقويم", ""], "الثلاثاء": ["تدريب رياضي", "", "رياضات الماء", ""], "الأربعاء": ["", "البحث العلمي", "", "اللياقة"], "الخميس": ["القياس", "الإصابات", "", ""] },
        att: {
            total: 60, present: 52, absent: 5, excused: 3, pct: 86.7, details: [
                { d: "2024-12-15", sub: "تدريب رياضي", st: "حاضر" }, { d: "2024-12-15", sub: "البحث العلمي", st: "حاضر" },
                { d: "2024-12-14", sub: "الإصابات", st: "غائب" }, { d: "2024-12-14", sub: "القياس", st: "حاضر" },
                { d: "2024-12-12", sub: "تدريب رياضي", st: "حاضر" }, { d: "2024-12-12", sub: "رياضات الماء", st: "معذور" }
            ]
        }
    },
    "30001151234567": {
        name: "سارة خالد الشمري", nid: "30001151234567", uid: "SSC-2023-0892",
        year: "السنة الثانية", dept: "التربية الرياضية", status: "منتظمة",
        gpa: 3.72, grade: "ممتاز", hours: 62, total: 136,
        dob: "2000-01-15", email: "sara.shamri@ssc.edu.sa", phone: "+966 55 987 6543",
        gender: "female", rank: "5/350", avatar: "",
        courses: [
            { n: "طرق تدريس التربية الرياضية", c: "SPE205", h: 3, w: 40, f: 52, t: 92, g: "A", gc: "grade-a" },
            { n: "كرة اليد", c: "SPE206", h: 2, w: 35, f: 43, t: 78, g: "C+", gc: "grade-c" },
            { n: "فسيولوجيا الجهد البدني", c: "SPE207", h: 3, w: 38, f: 50, t: 88, g: "B+", gc: "grade-b" },
            { n: "التغذية الرياضية", c: "SPE208", h: 2, w: 42, f: 55, t: 97, g: "A+", gc: "grade-a" },
            { n: "علم النفس الرياضي", c: "SPE201", h: 3, w: 36, f: 49, t: 85, g: "B+", gc: "grade-b" }
        ],
        monthly: [{ m: "سبتمبر", s: 88 }, { m: "أكتوبر", s: 91 }, { m: "نوفمبر", s: 89 }, { m: "ديسمبر", s: 93 }],
        sched: { "الأحد": ["طرق التدريس", "", "فسيولوجيا", ""], "الاثنين": ["", "كرة اليد", "التغذية", ""], "الثلاثاء": ["علم النفس", "طرق التدريس", "", ""], "الأربعاء": ["", "فسيولوجيا", "", "كرة اليد"], "الخميس": ["التغذية", "علم النفس", "", ""] },
        att: {
            total: 55, present: 53, absent: 1, excused: 1, pct: 96.4, details: [
                { d: "2024-12-15", sub: "طرق التدريس", st: "حاضر" }, { d: "2024-12-14", sub: "كرة اليد", st: "حاضر" },
                { d: "2024-12-12", sub: "علم النفس", st: "حاضر" }, { d: "2024-12-11", sub: "فسيولوجيا", st: "معذور" },
                { d: "2024-12-10", sub: "التغذية", st: "حاضر" }, { d: "2024-12-10", sub: "علم النفس", st: "غائب" }
            ]
        }
    },
    "29805201234567": {
        name: "عمر حسن الدوسري", nid: "29805201234567", uid: "SSC-2021-0234",
        year: "السنة الرابعة", dept: "الإدارة الرياضية", status: "منتظم",
        gpa: 3.15, grade: "جيد جداً", hours: 118, total: 132,
        dob: "1998-05-20", email: "omar.dossari@ssc.edu.sa", phone: "+966 54 111 2233",
        gender: "male", rank: "22/300", avatar: "",
        courses: [
            { n: "التدريب الميداني", c: "SPE405", h: 4, w: 38, f: 42, t: 80, g: "B", gc: "grade-b" },
            { n: "مشروع التخرج", c: "SPE406", h: 4, w: 40, f: 48, t: 88, g: "B+", gc: "grade-b" },
            { n: "الإعلام الرياضي", c: "SPE407", h: 2, w: 30, f: 35, t: 65, g: "D+", gc: "grade-d" },
            { n: "رياضة ذوي الاحتياجات", c: "SPE408", h: 2, w: 35, f: 40, t: 75, g: "C+", gc: "grade-c" }
        ],
        monthly: [{ m: "سبتمبر", s: 72 }, { m: "أكتوبر", s: 75 }, { m: "نوفمبر", s: 80 }, { m: "ديسمبر", s: 78 }],
        sched: { "الأحد": ["تدريب ميداني", "تدريب ميداني", "", ""], "الاثنين": ["مشروع التخرج", "", "الإعلام", ""], "الثلاثاء": ["تدريب ميداني", "تدريب ميداني", "", ""], "الأربعاء": ["", "مشروع التخرج", "ذوي الاحتياجات", ""], "الخميس": ["", "", "", ""] },
        att: {
            total: 40, present: 34, absent: 4, excused: 2, pct: 85, details: [
                { d: "2024-12-15", sub: "تدريب ميداني", st: "حاضر" }, { d: "2024-12-14", sub: "مشروع التخرج", st: "حاضر" },
                { d: "2024-12-12", sub: "تدريب ميداني", st: "غائب" }, { d: "2024-12-11", sub: "الإعلام", st: "حاضر" }
            ]
        }
    },
    "30103081234567": {
        name: "نور عبدالله القحطاني", nid: "30103081234567", uid: "SSC-2024-1205",
        year: "السنة الأولى", dept: "علوم الحركة والصحة", status: "مستجدة",
        gpa: 3.88, grade: "ممتاز", hours: 28, total: 138,
        dob: "2001-03-08", email: "noor.qahtani@ssc.edu.sa", phone: "+966 56 444 5566",
        gender: "female", rank: "3/270", avatar: "",
        courses: [
            { n: "مدخل إلى التربية الرياضية", c: "SPE101", h: 3, w: 42, f: 53, t: 95, g: "A+", gc: "grade-a" },
            { n: "تشريح وظيفي", c: "SPE102", h: 3, w: 38, f: 50, t: 88, g: "B+", gc: "grade-b" },
            { n: "كرة القدم", c: "SPE103", h: 2, w: 40, f: 50, t: 90, g: "A", gc: "grade-a" },
            { n: "ألعاب القوى", c: "SPE104", h: 2, w: 35, f: 45, t: 80, g: "B", gc: "grade-b" },
            { n: "اللغة العربية", c: "GEN101", h: 3, w: 40, f: 55, t: 95, g: "A+", gc: "grade-a" },
            { n: "اللغة الإنجليزية", c: "GEN102", h: 3, w: 36, f: 48, t: 84, g: "B", gc: "grade-b" }
        ],
        monthly: [{ m: "سبتمبر", s: 90 }, { m: "أكتوبر", s: 92 }, { m: "نوفمبر", s: 88 }, { m: "ديسمبر", s: 95 }],
        sched: { "الأحد": ["مدخل تربية", "", "تشريح", ""], "الاثنين": ["كرة القدم", "", "اللغة العربية", ""], "الثلاثاء": ["", "ألعاب القوى", "", "تشريح"], "الأربعاء": ["اللغة الإنجليزية", "مدخل تربية", "", ""], "الخميس": ["", "اللغة العربية", "كرة القدم", ""] },
        att: {
            total: 58, present: 57, absent: 0, excused: 1, pct: 98.3, details: [
                { d: "2024-12-15", sub: "مدخل تربية", st: "حاضر" }, { d: "2024-12-15", sub: "تشريح", st: "حاضر" },
                { d: "2024-12-14", sub: "كرة القدم", st: "حاضر" }, { d: "2024-12-12", sub: "ألعاب القوى", st: "حاضر" },
                { d: "2024-12-12", sub: "تشريح", st: "معذور" }, { d: "2024-12-11", sub: "اللغة الإنجليزية", st: "حاضر" }
            ]
        }
    }
};

// ================================================
// DATABASE PERSISTENCE (localStorage)
// ================================================
function saveDB() {
    localStorage.setItem('ssc_db', JSON.stringify(DB));
}

function loadDB() {
    const saved = localStorage.getItem('ssc_db');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            for (const k in parsed) {
                DB[k] = parsed[k];
            }
        } catch (e) { console.warn('DB load error'); }
    }
}

function resetDB() {
    localStorage.removeItem('ssc_db');
    localStorage.removeItem('ssc_users');
    location.reload();
}

// Load saved data
loadDB();

// ================================================
// USERS DATABASE
// ================================================
let users = JSON.parse(localStorage.getItem('ssc_users') || '{}');

function saveUsers() { localStorage.setItem('ssc_users', JSON.stringify(users)); }

function initUsers() {
    let save = false;
    for (const k in DB) {
        if (!users[k]) {
            users[k] = { nid: k, name: DB[k].name, email: DB[k].email, pass: btoa('123456') };
            save = true;
        }
    }
    if (!users['admin']) {
        users['admin'] = { nid: 'admin', name: 'مدير النظام', email: 'admin@ssc.edu.sa', pass: btoa('admin123'), isAdmin: true };
        save = true;
    }
    if (save) saveUsers();
}
initUsers();

function checkPassword(input, stored) {
    try { return btoa(input) === stored; }
    catch (e) { return input === stored; }
}

// Current logged in student
let currentStudentNid = null;

// ================================================
// NOTIFICATIONS
// ================================================
let notifs = [
    { id: 1, icon: "🔴", title: "تنبيه عاجل", msg: "امتحان التشريح يوم الأحد الساعة 9 صباحاً", time: "منذ ساعة", read: false },
    { id: 2, icon: "📊", title: "نتائج جديدة", msg: "تم رصد درجات فسيولوجيا الرياضة", time: "منذ 3 ساعات", read: false },
    { id: 3, icon: "🏆", title: "فعالية رياضية", msg: "بطولة الكلية لكرة القدم - سجّل الآن", time: "منذ يوم", read: false },
    { id: 4, icon: "📢", title: "إعلان", msg: "آخر موعد لدفع الرسوم 30 يناير", time: "منذ يومين", read: true }
];

function renderNotifications() {
    const p = document.getElementById('notifPanel');
    let h = '<div class="notif-header"><h4>🔔 الإشعارات</h4><button onclick="markAllRead()">✓ قراءة الكل</button></div>';
    notifs.forEach(function (n) {
        h += '<div class="notif-item ' + (n.read ? '' : 'unread') + '" onclick="markRead(' + n.id + ')">';
        h += '<div class="n-icon">' + n.icon + '</div><div class="n-body"><strong>' + sanitize(n.title) + '</strong><p>' + sanitize(n.msg) + '</p><small>' + n.time + '</small></div>';
        if (!n.read) h += '<span class="n-dot"></span>';
        h += '</div>';
    });
    p.innerHTML = h;
}

function showNotifications() {
    const p = document.getElementById('notifPanel');
    p.classList.toggle('active');
    if (p.classList.contains('active')) renderNotifications();
}
function markRead(id) { notifs.forEach(function (n) { if (n.id === id) n.read = true; }); updateBadge(); renderNotifications(); }
function markAllRead() { notifs.forEach(function (n) { n.read = true; }); updateBadge(); renderNotifications(); }
function updateBadge() { const c = notifs.filter(function (n) { return !n.read; }).length; const b = document.getElementById('notifBadge'); b.textContent = c; b.style.display = c > 0 ? 'flex' : 'none'; }

document.addEventListener('click', function (e) {
    const panel = document.getElementById('notifPanel');
    const btn = document.querySelector('.notif-btn');
    if (panel && panel.classList.contains('active') && !panel.contains(e.target) && !btn.contains(e.target)) {
        panel.classList.remove('active');
    }
});

// ================================================
// LOADING & INIT
// ================================================
window.addEventListener('load', function () {
    setTimeout(function () { document.getElementById('loadingScreen').classList.add('hidden'); }, 1200);
    const tc = document.getElementById('tickerContent');
    tc.innerHTML += tc.innerHTML;
    setTimeout(function () { document.querySelectorAll('.h-num').forEach(animateNum); }, 1800);
    setTimeout(checkSession, 2000);
    // Apply real images
    setTimeout(applyRealImages, 500);
});

function animateNum(el) {
    const target = +el.getAttribute('data-target');
    let cur = 0;
    const step = target / 120;
    const t = setInterval(function () {
        cur += step;
        if (cur >= target) { el.textContent = target.toLocaleString() + '+'; clearInterval(t); }
        else el.textContent = Math.floor(cur).toLocaleString() + '+';
    }, 16);
}

// ================================================
// NAVBAR & SCROLL
// ================================================
const navbar = document.getElementById('navbar');
const scrollBtn = document.getElementById('scrollTop');
let scrollTicking = false;

window.addEventListener('scroll', function () {
    if (!scrollTicking) {
        requestAnimationFrame(function () {
            navbar.classList.toggle('scrolled', scrollY > 80);
            scrollBtn.classList.toggle('visible', scrollY > 300);
            document.querySelectorAll('section[id]').forEach(function (s) {
                if (scrollY >= s.offsetTop - 200 && scrollY < s.offsetTop + s.offsetHeight)
                    document.querySelectorAll('.nav-links a').forEach(function (a) {
                        a.classList.toggle('active', a.getAttribute('href') === '#' + s.id);
                    });
            });
            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

const mobToggle = document.getElementById('mobileToggle');
const navLinksEl = document.getElementById('navLinks');

mobToggle.addEventListener('click', function () {
    mobToggle.classList.toggle('active');
    navLinksEl.classList.toggle('active');
    mobToggle.setAttribute('aria-expanded', navLinksEl.classList.contains('active'));
});

navLinksEl.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
        mobToggle.classList.remove('active');
        navLinksEl.classList.remove('active');
        mobToggle.setAttribute('aria-expanded', 'false');
    });
});

scrollBtn.addEventListener('click', function () { scrollTo({ top: 0, behavior: 'smooth' }); });

document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark mode
const darkBtn = document.getElementById('darkToggle');
let isDark = localStorage.getItem('dark') === 'true';
if (isDark) { document.body.classList.add('dark-mode'); darkBtn.textContent = '☀️'; }
darkBtn.addEventListener('click', function () {
    isDark = !isDark;
    document.body.classList.toggle('dark-mode');
    darkBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('dark', isDark);
});

// Observer
const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
}, { threshold: .1 });
document.querySelectorAll('.fade-up').forEach(function (el) { obs.observe(el); });

// ================================================
// GALLERY
// ================================================
document.querySelectorAll('.gf').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.gf').forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        const f = this.getAttribute('data-f');
        document.querySelectorAll('.g-item').forEach(function (item) {
            if (f === 'all' || item.getAttribute('data-cat') === f) {
                item.classList.remove('hide');
                item.style.opacity = '0';
                setTimeout(function () { item.style.opacity = '1'; item.style.transition = 'opacity .3s'; }, 50);
            } else {
                item.style.opacity = '0';
                setTimeout(function () { item.classList.add('hide'); }, 300);
            }
        });
    });
});

function likePhoto(btn) {
    btn.classList.toggle('liked');
    const s = btn.querySelector('span');
    if (s) { const n = +s.textContent; s.textContent = btn.classList.contains('liked') ? n + 1 : n - 1; }
}

function openLightbox(item) {
    const imgDiv = item.querySelector('.g-img');
    const bg = imgDiv.style.background;
    const title = item.querySelector('.g-over h4').textContent;
    const date = item.querySelector('.g-over p').textContent;
    const lbImg = document.getElementById('lbImg');

    // Check if it has a real image
    if (bg.includes('url(')) {
        lbImg.innerHTML = '';
        lbImg.style.background = bg.replace('600', '1200').replace('400', '800');
    } else {
        const emoji = imgDiv.querySelector('span') ? imgDiv.querySelector('span').textContent : '';
        lbImg.innerHTML = '<span style="font-size:7rem">' + emoji + '</span>';
        lbImg.style.background = bg;
    }
    document.getElementById('lbTitle').textContent = title;
    document.getElementById('lbDate').textContent = date;
    document.getElementById('lightboxModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ================================================
// STUDENT SEARCH
// ================================================
function fillId(id) { document.getElementById('nidInput').value = id; searchStudent(); }
document.getElementById('nidInput').addEventListener('keypress', function (e) { if (e.key === 'Enter') searchStudent(); });

function searchStudent() {
    const id = document.getElementById('nidInput').value.trim();
    if (id.length !== 14 || !/^\d{14}$/.test(id)) { showToast('أدخل رقم قومي صحيح (14 رقم)', 'error'); return; }
    const s = DB[id];
    if (!s) { showToast('لم يتم العثور على بيانات لهذا الرقم', 'error'); return; }
    currentStudentNid = id;
    showStudent(s);
}

function getAvatarHTML(s) {
    if (s.avatar) {
        return '<img src="' + s.avatar + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%" alt="صورة الطالب">';
    }
    const defaultAvatar = s.gender === 'female' ? REAL_IMAGES.avatars.female : REAL_IMAGES.avatars.male;
    return '<img src="' + defaultAvatar + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%" alt="صورة الطالب" onerror="this.outerHTML=\'' + (s.gender === 'female' ? '👩‍🎓' : '👨‍🎓') + '\'">';
}

function showStudent(s) {
    const r = document.getElementById('studentResult');
    r.style.display = 'block';

    // Avatar with real image
    document.getElementById('sAvatar').innerHTML = getAvatarHTML(s);
    document.getElementById('sName').textContent = s.name;
    document.getElementById('sIdDisplay').textContent = s.nid + ' | ' + s.uid;
    document.getElementById('sYear').textContent = s.year;
    document.getElementById('sDept').textContent = s.dept;
    document.getElementById('sStatus').textContent = s.status;

    // Info tab - with EDIT button
    const isLoggedIn = localStorage.getItem('ssc_login') === s.nid;
    const editBtn = isLoggedIn ? '<button onclick="openEditProfile()" style="background:var(--gold);color:var(--dark);border:none;padding:8px 20px;border-radius:50px;font-weight:600;cursor:pointer;font-family:inherit;font-size:.85rem;margin-bottom:15px;transition:var(--t)">✏️ تعديل البيانات</button>' : '';

    const fields = [
        ['الاسم', s.name, '👤'], ['الرقم القومي', s.nid, '🆔'], ['الرقم الجامعي', s.uid, '🎓'],
        ['السنة الدراسية', s.year, '📚'], ['القسم', s.dept, '🏫'], ['المعدل GPA', s.gpa.toFixed(2), '📊', 'gpa-val'],
        ['التقدير', s.grade, '🏆'], ['الساعات المكتملة', s.hours + ' / ' + s.total, '⏱️'], ['تاريخ الميلاد', s.dob, '🎂'],
        ['البريد الإلكتروني', s.email, '📧'], ['الهاتف', s.phone, '📱'], ['الحالة', s.status, '✅'],
        ['الترتيب', s.rank, '📈'], ['الجنس', s.gender === 'female' ? 'أنثى' : 'ذكر', '👤']
    ];
    let ig = editBtn;
    fields.forEach(function (f) {
        ig += '<div class="info-card"><span class="info-lbl">' + f[2] + ' ' + f[0] + '</span><span class="info-val ' + (f[3] || '') + '">' + sanitize(f[1]) + '</span></div>';
    });
    document.getElementById('infoGrid').innerHTML = ig;

    // Grades
    document.getElementById('gpaVal').textContent = s.gpa.toFixed(2);
    setTimeout(function () { document.getElementById('gpaFill').style.strokeDashoffset = 283 - (283 * s.gpa / 4); }, 200);
    document.getElementById('gcDone').textContent = s.hours;
    document.getElementById('gcLeft').textContent = s.total - s.hours;
    document.getElementById('gcGrade').textContent = s.grade;
    document.getElementById('gcRank').textContent = s.rank;
    let gb = '';
    s.courses.forEach(function (c) {
        gb += '<tr><td>' + sanitize(c.n) + '</td><td>' + c.c + '</td><td>' + c.h + '</td><td>' + c.w + '</td><td>' + c.f + '</td><td><strong>' + c.t + '</strong></td><td><span class="grade-badge ' + c.gc + '">' + c.g + '</span></td></tr>';
    });
    document.getElementById('gradesBody').innerHTML = gb;

    // Monthly
    let mg = '';
    s.monthly.forEach(function (m) {
        const cl = m.s >= 90 ? '#10b981' : m.s >= 80 ? '#3b82f6' : m.s >= 70 ? '#f59e0b' : '#ef4444';
        const gl = m.s >= 90 ? 'ممتاز' : m.s >= 80 ? 'جيد جداً' : m.s >= 70 ? 'جيد' : 'مقبول';
        const gc = m.s >= 90 ? 'grade-a' : m.s >= 80 ? 'grade-b' : m.s >= 70 ? 'grade-c' : 'grade-d';
        mg += '<div class="month-card"><div class="m-name">' + m.m + '</div><span class="m-score" style="color:' + cl + '">' + m.s + '%</span><span class="m-grade ' + gc + '">' + gl + '</span><div class="m-bar"><div class="m-bar-fill" style="width:' + m.s + '%;background:' + cl + '"></div></div></div>';
    });
    document.getElementById('monthGrid').innerHTML = mg;

    let ch = '';
    s.monthly.forEach(function (m) {
        const cl = m.s >= 90 ? '#10b981' : m.s >= 80 ? '#3b82f6' : m.s >= 70 ? '#f59e0b' : '#ef4444';
        ch += '<div class="chart-bar" style="height:100%"><div class="chart-val">' + m.s + '</div><div class="chart-bar-fill" style="height:' + m.s + '%;background:' + cl + '"></div><div class="chart-lbl">' + m.m + '</div></div>';
    });
    document.getElementById('chartBox').innerHTML = ch;

    // Schedule
    let sb = '';
    ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"].forEach(function (d) {
        let row = '<tr><td><strong>' + d + '</strong></td>';
        (s.sched[d] || ["", "", "", ""]).forEach(function (sl) {
            row += sl ? '<td class="has">' + sanitize(sl) + '</td>' : '<td>-</td>';
        });
        sb += row + '</tr>';
    });
    document.getElementById('schedBody').innerHTML = sb;

    // Attendance
    const a = s.att;
    const ac = a.pct >= 85 ? 'att-good' : a.pct >= 75 ? 'att-warn' : 'att-bad';
    const am = a.pct >= 85 ? '✅ نسبة حضور ممتازة' : a.pct >= 75 ? '⚡ حافظ على حضورك' : '⚠️ تحذير: نسبة حضور منخفضة!';
    let ah = '<div class="att-overview"><div class="att-circle ' + ac + '"><span>' + a.pct + '%</span><small>نسبة الحضور</small></div><div class="att-stats"><div class="att-s"><span class="att-n att-green">' + a.present + '</span><small>حضور</small></div><div class="att-s"><span class="att-n att-redx">' + a.absent + '</span><small>غياب</small></div><div class="att-s"><span class="att-n att-yellowx">' + a.excused + '</span><small>عذر</small></div><div class="att-s"><span class="att-n">' + a.total + '</span><small>إجمالي</small></div></div></div>';
    ah += '<div class="att-msg ' + ac + '">' + am + '</div>';
    ah += '<table class="data-table"><thead><tr><th>التاريخ</th><th>المادة</th><th>الحالة</th></tr></thead><tbody>';
    a.details.forEach(function (d) {
        const sc = d.st === 'حاضر' ? 'st-present' : d.st === 'غائب' ? 'st-absent' : 'st-excused';
        ah += '<tr><td>' + d.d + '</td><td>' + sanitize(d.sub) + '</td><td><span class="status-b ' + sc + '">' + d.st + '</span></td></tr>';
    });
    ah += '</tbody></table>';
    document.getElementById('attContent').innerHTML = ah;

    // Tabs reset
    document.querySelectorAll('.rtab').forEach(function (t, i) { t.classList.toggle('active', i === 0); t.setAttribute('aria-selected', i === 0); });
    document.querySelectorAll('.rcontent').forEach(function (c, i) { c.classList.toggle('active', i === 0); });

    r.scrollIntoView({ behavior: 'smooth' });
    showToast('تم تحميل بيانات ' + s.name, 'success');
}

function closeResult() {
    document.getElementById('studentResult').style.display = 'none';
    document.getElementById('gpaFill').style.strokeDashoffset = 283;
    currentStudentNid = null;
}

// Result tabs
document.querySelectorAll('.rtab').forEach(function (tab) {
    tab.addEventListener('click', function () {
        const id = this.getAttribute('data-rt');
        document.querySelectorAll('.rtab').forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        document.querySelectorAll('.rcontent').forEach(function (c) { c.classList.remove('active'); });
        document.getElementById('rt-' + id).classList.add('active');
        if (id === 'grades') {
            const v = +document.getElementById('gpaVal').textContent;
            document.getElementById('gpaFill').style.strokeDashoffset = 283;
            setTimeout(function () { document.getElementById('gpaFill').style.strokeDashoffset = 283 - (283 * v / 4); }, 100);
        }
    });
});

// Print
function printReport() {
    const w = window.open('', '_blank');
    w.document.write('<html dir="rtl"><head><title>تقرير الطالب</title><style>body{font-family:Arial,sans-serif;padding:20px;direction:rtl}h1{color:#1e3a5f;text-align:center}table{width:100%;border-collapse:collapse;margin:15px 0}th{background:#1e3a5f;color:#fff;padding:8px}td{padding:6px;border:1px solid #ddd}.result-tabs,.close-btn,.print-btn{display:none}img{border-radius:50%;width:60px;height:60px}</style></head><body><h1>🏛️ كلية علوم الرياضة - تقرير الطالب</h1>' + document.querySelector('.student-result').innerHTML + '</body></html>');
    w.document.close();
    w.print();
}

// ================================================
// ✏️ STUDENT PROFILE EDITING
// ================================================
function openEditProfile() {
    const nid = currentStudentNid || localStorage.getItem('ssc_login');
    if (!nid || !DB[nid]) { showToast('سجّل دخول أولاً', 'error'); return; }
    const s = DB[nid];

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'editProfileModal';
    modal.innerHTML = `
        <div class="modal" style="max-width:600px">
            <button class="mx" onclick="closeEditProfile()">✕</button>
            <div style="text-align:center;margin-bottom:20px">
                <div id="editAvatarPreview" style="width:100px;height:100px;border-radius:50%;margin:0 auto 10px;overflow:hidden;border:3px solid var(--gold);cursor:pointer;position:relative" onclick="document.getElementById('avatarUpload').click()">
                    ${getAvatarHTML(s)}
                    <div style="position:absolute;inset:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;opacity:0;transition:var(--t)" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0">
                        <span style="color:#fff;font-size:1.5rem">📷</span>
                    </div>
                </div>
                <input type="file" id="avatarUpload" accept="image/*" style="display:none" onchange="previewAvatar(this)">
                <small style="color:var(--gray)">اضغط على الصورة لتغييرها</small>
                <h3 style="margin-top:8px">✏️ تعديل البيانات الشخصية</h3>
            </div>
            <form id="editProfileForm" onsubmit="saveProfile(event)">
                <input type="hidden" id="editNid" value="${s.nid}">
                <div class="form-row">
                    <div class="form-group">
                        <label>👤 الاسم الكامل</label>
                        <input type="text" id="editName" value="${sanitize(s.name)}" required>
                    </div>
                    <div class="form-group">
                        <label>📧 البريد الإلكتروني</label>
                        <input type="email" id="editEmail" value="${sanitize(s.email)}" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>📱 رقم الهاتف</label>
                        <input type="tel" id="editPhone" value="${sanitize(s.phone)}" required>
                    </div>
                    <div class="form-group">
                        <label>🎂 تاريخ الميلاد</label>
                        <input type="date" id="editDob" value="${s.dob}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>👤 الجنس</label>
                        <select id="editGender">
                            <option value="male" ${s.gender === 'male' ? 'selected' : ''}>ذكر</option>
                            <option value="female" ${s.gender === 'female' ? 'selected' : ''}>أنثى</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>🏫 القسم</label>
                        <select id="editDept">
                            <option ${s.dept === 'التربية الرياضية' ? 'selected' : ''}>التربية الرياضية</option>
                            <option ${s.dept === 'التدريب الرياضي' ? 'selected' : ''}>التدريب الرياضي</option>
                            <option ${s.dept === 'الإدارة الرياضية' ? 'selected' : ''}>الإدارة الرياضية</option>
                            <option ${s.dept === 'علوم الحركة والصحة' ? 'selected' : ''}>علوم الحركة والصحة</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>🔑 تغيير كلمة المرور (اختياري)</label>
                    <input type="password" id="editPass" placeholder="اتركه فارغاً إذا لا تريد التغيير" minlength="6">
                </div>
                <div style="display:flex;gap:8px;margin-top:15px">
                    <button type="submit" class="submit-btn" style="flex:1">💾 حفظ التعديلات</button>
                    <button type="button" class="submit-btn" style="flex:0;background:var(--gray)" onclick="closeEditProfile()">إلغاء</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function previewAvatar(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        if (file.size > 2 * 1024 * 1024) { showToast('حجم الصورة كبير! الحد الأقصى 2MB', 'error'); return; }
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById('editAvatarPreview');
            preview.querySelector('img').src = e.target.result;
            preview.dataset.newAvatar = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function saveProfile(e) {
    e.preventDefault();
    const nid = document.getElementById('editNid').value;
    if (!DB[nid]) return;

    const name = document.getElementById('editName').value.trim();
    const email = document.getElementById('editEmail').value.trim();
    const phone = document.getElementById('editPhone').value.trim();
    const dob = document.getElementById('editDob').value;
    const gender = document.getElementById('editGender').value;
    const dept = document.getElementById('editDept').value;
    const pass = document.getElementById('editPass').value;
    const newAvatar = document.getElementById('editAvatarPreview').dataset.newAvatar;

    if (!name) { showToast('أدخل الاسم', 'error'); return; }
    if (!email || !email.includes('@')) { showToast('أدخل بريد صحيح', 'error'); return; }
    if (!phone) { showToast('أدخل رقم الهاتف', 'error'); return; }

    // Update DB
    DB[nid].name = name;
    DB[nid].email = email;
    DB[nid].phone = phone;
    DB[nid].dob = dob;
    DB[nid].gender = gender;
    DB[nid].dept = dept;
    if (newAvatar) DB[nid].avatar = newAvatar;

    // Update users
    if (users[nid]) {
        users[nid].name = name;
        users[nid].email = email;
        if (pass && pass.length >= 6) users[nid].pass = btoa(pass);
    }

    saveDB();
    saveUsers();

    // Update UI
    document.getElementById('userBarName').textContent = name;
    localStorage.setItem('ssc_name', name);

    closeEditProfile();
    showStudent(DB[nid]);
    showToast('تم حفظ التعديلات بنجاح! ✅', 'success');
}

function closeEditProfile() {
    const modal = document.getElementById('editProfileModal');
    if (modal) { modal.remove(); document.body.style.overflow = ''; }
}

// ================================================
// GPA CALCULATOR
// ================================================
function addCalcRow() {
    const d = document.createElement('div');
    d.className = 'calc-row';
    d.innerHTML = '<input placeholder="المقرر" aria-label="اسم المقرر"><select class="calc-hrs" aria-label="عدد الساعات"><option>3</option><option>2</option><option>4</option><option>1</option></select><select class="calc-gr" aria-label="التقدير"><option value="4.00">A+</option><option value="3.75">A</option><option value="3.50">B+</option><option value="3.00">B</option><option value="2.50">C+</option><option value="2.00">C</option><option value="1.50">D+</option><option value="1.00">D</option><option value="0.00">F</option></select><button class="del-row" onclick="this.parentElement.remove()" aria-label="حذف">✕</button>';
    document.getElementById('calcRows').appendChild(d);
}

function calcGPA() {
    const rows = document.querySelectorAll('.calc-row');
    let tp = 0, th = 0;
    rows.forEach(function (r) { const h = +r.querySelector('.calc-hrs').value; const p = +r.querySelector('.calc-gr').value; tp += h * p; th += h; });
    const gpa = th > 0 ? (tp / th).toFixed(2) : '0.00';
    const grade = gpa >= 3.75 ? 'ممتاز' : gpa >= 3 ? 'جيد جداً' : gpa >= 2 ? 'جيد' : gpa >= 1 ? 'مقبول' : 'راسب';
    document.getElementById('calcGpa').textContent = gpa;
    document.getElementById('calcGrade').textContent = 'التقدير: ' + grade;
    document.getElementById('calcRes').style.display = 'block';
    showToast('المعدل: ' + gpa + ' - ' + grade, 'success');
}

// ================================================
// LOGIN & REGISTER
// ================================================
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { document.getElementById('loginId').focus(); }, 300);
}

document.querySelectorAll('.lt').forEach(function (tab) {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.lt').forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        document.querySelectorAll('.lc').forEach(function (c) { c.classList.remove('active'); });
        document.getElementById('lt-' + this.getAttribute('data-lt')).classList.add('active');
    });
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('loginId').value.trim();
    const pass = document.getElementById('loginPass').value.trim();
    if (!id || !pass) { showToast('أدخل البيانات المطلوبة', 'error'); return; }

    let user = null, key = null;
    if (users[id]) { user = users[id]; key = id; }
    if (!user) { for (const k in users) { if (users[k].email === id) { user = users[k]; key = k; break; } } }
    if (!user) { for (const k2 in DB) { if (DB[k2].uid === id) { user = users[k2]; key = k2; break; } } }
    if (!user) { showToast('حساب غير موجود!', 'error'); return; }
    if (!checkPassword(pass, user.pass)) { showToast('كلمة المرور غير صحيحة!', 'error'); return; }

    closeModals();
    if (user.isAdmin) { openAdminPanel(); showSuccess('مرحباً بالمدير! ⚙️', 'تم الدخول للوحة التحكم'); return; }

    document.getElementById('userBar').style.display = 'block';
    document.getElementById('userBarName').textContent = user.name;
    navbar.style.top = '72px';
    localStorage.setItem('ssc_login', key);
    localStorage.setItem('ssc_name', user.name);
    currentStudentNid = key;
    if (DB[key]) { document.getElementById('nidInput').value = key; showStudent(DB[key]); }
    showSuccess('تسجيل دخول ناجح! 🎉', 'مرحباً ' + user.name);
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const nid = document.getElementById('regNid').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const pass = document.getElementById('regPass').value;
    const pass2 = document.getElementById('regPass2').value;
    const dept = document.getElementById('regDept').value;

    if (!name) { showToast('أدخل الاسم', 'error'); return; }
    if (!nid || nid.length !== 14 || !/^\d{14}$/.test(nid)) { showToast('أدخل رقم قومي صحيح', 'error'); return; }
    if (!email || !email.includes('@')) { showToast('أدخل بريد صحيح', 'error'); return; }
    if (!phone) { showToast('أدخل رقم الهاتف', 'error'); return; }
    if (!pass || pass.length < 6) { showToast('كلمة المرور 6 أحرف على الأقل', 'error'); return; }
    if (pass !== pass2) { showToast('كلمتا المرور غير متطابقتين!', 'error'); return; }
    if (users[nid]) { showToast('الرقم القومي مسجل بالفعل!', 'error'); return; }
    for (const k in users) { if (users[k].email === email) { showToast('البريد مسجل بالفعل!', 'error'); return; } }

    users[nid] = { nid: nid, name: name, email: email, pass: btoa(pass) };
    saveUsers();

    if (!DB[nid]) {
        DB[nid] = {
            name: name, nid: nid, uid: generateId(), year: 'السنة الأولى', dept: dept || 'غير محدد',
            status: 'مستجد', gpa: 0, grade: '-', hours: 0, total: 136, dob: '-', email: email,
            phone: phone, gender: 'male', rank: '-', avatar: '', courses: [], monthly: [],
            sched: { "الأحد": ["", "", "", ""], "الاثنين": ["", "", "", ""], "الثلاثاء": ["", "", "", ""], "الأربعاء": ["", "", "", ""], "الخميس": ["", "", "", ""] },
            att: { total: 0, present: 0, absent: 0, excused: 0, pct: 0, details: [] }
        };
        saveDB();
    }
    closeModals();
    this.reset();
    showSuccess('تم إنشاء حسابك! 🎉', 'مرحباً ' + name + '\n\nسجّل دخول بـ:\n📌 الرقم: ' + nid + '\n🔑 كلمة المرور اللي اخترتها');
});

function logoutUser() {
    document.getElementById('userBar').style.display = 'none';
    navbar.style.top = '36px';
    closeResult();
    currentStudentNid = null;
    localStorage.removeItem('ssc_login');
    localStorage.removeItem('ssc_name');
    showSuccess('تم الخروج 👋', 'نراك قريباً!');
}

function checkSession() {
    const id = localStorage.getItem('ssc_login');
    const name = localStorage.getItem('ssc_name');
    if (id && name) {
        document.getElementById('userBar').style.display = 'block';
        document.getElementById('userBarName').textContent = name;
        navbar.style.top = '72px';
        currentStudentNid = id;
    }
}

// ================================================
// MODALS
// ================================================
function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(function (m) { if (m.id !== 'editProfileModal' && m.id !== 'adminEditModal') m.classList.remove('active'); });
    document.body.style.overflow = '';
}

function showSuccess(t, m) {
    document.getElementById('successTitle').textContent = t;
    document.getElementById('successMsg').textContent = m;
    document.getElementById('successModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.querySelectorAll('.modal-overlay').forEach(function (m) {
    m.addEventListener('click', function (e) { if (e.target === m) closeModals(); });
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModals();
        closeEditProfile();
        closeAdminEdit();
        mobToggle.classList.remove('active');
        navLinksEl.classList.remove('active');
        document.getElementById('notifPanel').classList.remove('active');
        document.getElementById('cwPanel').classList.remove('active');
    }
});

// ================================================
// CONTACT FORM
// ================================================
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const msg = document.getElementById('contactMsg').value.trim();
    if (!name || !email || !msg) { showToast('أكمل الحقول المطلوبة', 'error'); return; }
    if (!email.includes('@')) { showToast('أدخل بريد صحيح', 'error'); return; }
    showSuccess('تم الإرسال! 📨', 'سنرد عليك قريباً');
    this.reset();
});

// ================================================
// CHAT WIDGET
// ================================================
function toggleChat() {
    const panel = document.getElementById('cwPanel');
    panel.classList.toggle('active');
    if (panel.classList.contains('active')) setTimeout(function () { document.getElementById('cwInput').focus(); }, 300);
}

function sendCW() {
    const input = document.getElementById('cwInput');
    const msg = input.value.trim();
    if (!msg) return;
    const msgs = document.getElementById('cwMsgs');
    const now = new Date();
    const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
    msgs.innerHTML += '<div class="msg msg-s"><div class="msg-b"><p>' + sanitize(msg) + '</p><small>' + time + '</small></div></div>';
    input.value = '';
    msgs.scrollTop = msgs.scrollHeight;
    setTimeout(function () {
        const replies = ['مرحباً! كيف أقدر أساعدك؟', 'تم تحويل استفسارك للقسم المختص', 'يمكنك زيارة شؤون الطلاب', 'هل تحتاج مساعدة أخرى؟', 'سيتم الرد خلال ساعات العمل'];
        msgs.innerHTML += '<div class="msg msg-r"><div class="msg-b"><p>' + replies[Math.floor(Math.random() * replies.length)] + '</p><small>المرشد - ' + time + '</small></div></div>';
        msgs.scrollTop = msgs.scrollHeight;
    }, 1200);
}

// ================================================
// ⚙️ ADMIN PANEL (FULL CRUD)
// ================================================
function openAdminPanel() {
    document.getElementById('adminModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    loadAdminStudents();
    updateDashboardStats();
}

function switchAdmin(panel, btn) {
    document.querySelectorAll('.ap').forEach(function (p) { p.classList.remove('active'); });
    document.querySelectorAll('.anav').forEach(function (b) { b.classList.remove('active'); });
    document.getElementById('ap-' + panel).classList.add('active');
    if (btn) btn.classList.add('active');
    if (panel === 'students') loadAdminStudents();
}

function updateDashboardStats() {
    let studentCount = Object.keys(DB).length;
    const dcs = document.querySelectorAll('.dc strong');
    if (dcs[0]) dcs[0].textContent = studentCount.toLocaleString();
}

// ============ ADMIN: LOAD STUDENTS TABLE ============
function loadAdminStudents() {
    const tb = document.getElementById('adminBody');
    if (!tb) return;
    tb.innerHTML = '';
    for (const k in DB) {
        const s = DB[k];
        const sc = (s.status === 'منتظم' || s.status === 'منتظمة') ? 'st-present' : (s.status === 'مستجدة' || s.status === 'مستجد') ? 'st-excused' : 'st-absent';
        const avatarUrl = s.avatar || (s.gender === 'female' ? REAL_IMAGES.avatars.female : REAL_IMAGES.avatars.male);
        tb.innerHTML += `
            <tr>
                <td>
                    <div style="display:flex;align-items:center;gap:8px">
                        <img src="${avatarUrl}" style="width:32px;height:32px;border-radius:50%;object-fit:cover" onerror="this.outerHTML='${s.gender === 'female' ? '👩‍🎓' : '👨‍🎓'}'">
                        <div>
                            <strong>${sanitize(s.name)}</strong>
                            <small style="display:block;color:var(--gray);font-family:monospace;font-size:.65rem">${s.nid}</small>
                        </div>
                    </div>
                </td>
                <td>${sanitize(s.dept)}</td>
                <td>${s.year}</td>
                <td><strong style="color:var(--p)">${s.gpa.toFixed(2)}</strong></td>
                <td><span class="status-b ${sc}">${s.status}</span></td>
                <td>
                    <div style="display:flex;gap:4px">
                        <button onclick="adminViewStudent('${s.nid}')" class="tbtn" style="padding:4px 8px;font-size:.7rem;background:var(--blue)">👁️</button>
                        <button onclick="adminEditStudent('${s.nid}')" class="tbtn" style="padding:4px 8px;font-size:.7rem;background:var(--gold);color:var(--dark)">✏️</button>
                        <button onclick="adminDeleteStudent('${s.nid}')" class="tbtn" style="padding:4px 8px;font-size:.7rem;background:var(--red)">🗑️</button>
                    </div>
                </td>
            </tr>`;
    }
}

function searchAdmin(q) {
    q = q.toLowerCase();
    document.querySelectorAll('#adminBody tr').forEach(function (r) {
        r.style.display = r.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
}

// ============ ADMIN: VIEW STUDENT ============
function adminViewStudent(nid) {
    if (!DB[nid]) return;
    closeModals();
    document.getElementById('nidInput').value = nid;
    showStudent(DB[nid]);
}

// ============ ADMIN: DELETE STUDENT ============
function adminDeleteStudent(nid) {
    if (!DB[nid]) return;
    const name = DB[nid].name;
    if (!confirm('⚠️ هل أنت متأكد من حذف الطالب:\n' + name + '\nرقم: ' + nid + '\n\nهذا الإجراء لا يمكن التراجع عنه!')) return;

    delete DB[nid];
    delete users[nid];
    saveDB();
    saveUsers();
    loadAdminStudents();
    updateDashboardStats();
    showToast('تم حذف الطالب: ' + name, 'warning');
}

// ============ ADMIN: EDIT STUDENT (Full Modal) ============
function adminEditStudent(nid) {
    const s = DB[nid];
    if (!s) return;

    // Remove old modal if exists
    closeAdminEdit();

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'adminEditModal';
    modal.innerHTML = `
        <div class="modal" style="max-width:900px;max-height:90vh;overflow-y:auto">
            <button class="mx" onclick="closeAdminEdit()">✕</button>
            <div style="display:flex;align-items:center;gap:15px;margin-bottom:20px;padding-bottom:15px;border-bottom:2px solid var(--gl)">
                <div id="adminEditAvatar" style="width:70px;height:70px;border-radius:50%;overflow:hidden;border:3px solid var(--p);cursor:pointer;flex-shrink:0" onclick="document.getElementById('adminAvatarUpload').click()">
                    ${getAvatarHTML(s)}
                </div>
                <input type="file" id="adminAvatarUpload" accept="image/*" style="display:none" onchange="adminPreviewAvatar(this)">
                <div>
                    <h3 style="margin:0">✏️ تعديل بيانات الطالب</h3>
                    <small style="color:var(--gray);font-family:monospace">${s.nid} | ${s.uid}</small>
                </div>
            </div>

            <form id="adminEditForm" onsubmit="saveAdminEdit(event,'${nid}')">

                <!-- Personal Info -->
                <h4 style="color:var(--p);margin-bottom:10px;padding-bottom:5px;border-bottom:1px solid var(--gl)">👤 البيانات الشخصية</h4>
                <div class="form-row">
                    <div class="form-group"><label>الاسم الكامل *</label><input type="text" id="ae_name" value="${sanitize(s.name)}" required></div>
                    <div class="form-group"><label>البريد الإلكتروني *</label><input type="email" id="ae_email" value="${sanitize(s.email)}" required></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>الهاتف *</label><input type="tel" id="ae_phone" value="${sanitize(s.phone)}" required></div>
                    <div class="form-group"><label>تاريخ الميلاد</label><input type="date" id="ae_dob" value="${s.dob}"></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>الجنس</label><select id="ae_gender"><option value="male" ${s.gender === 'male' ? 'selected' : ''}>ذكر</option><option value="female" ${s.gender === 'female' ? 'selected' : ''}>أنثى</option></select></div>
                    <div class="form-group"><label>الحالة</label><select id="ae_status"><option ${s.status === 'منتظم' ? 'selected' : ''}>منتظم</option><option ${s.status === 'منتظمة' ? 'selected' : ''}>منتظمة</option><option ${s.status === 'مستجد' ? 'selected' : ''}>مستجد</option><option ${s.status === 'مستجدة' ? 'selected' : ''}>مستجدة</option><option ${s.status === 'موقوف' ? 'selected' : ''}>موقوف</option><option ${s.status === 'متخرج' ? 'selected' : ''}>متخرج</option></select></div>
                </div>

                <!-- Academic Info -->
                <h4 style="color:var(--p);margin:20px 0 10px;padding-bottom:5px;border-bottom:1px solid var(--gl)">🎓 البيانات الأكاديمية</h4>
                <div class="form-row">
                    <div class="form-group"><label>القسم</label><select id="ae_dept"><option ${s.dept === 'التربية الرياضية' ? 'selected' : ''}>التربية الرياضية</option><option ${s.dept === 'التدريب الرياضي' ? 'selected' : ''}>التدريب الرياضي</option><option ${s.dept === 'الإدارة الرياضية' ? 'selected' : ''}>الإدارة الرياضية</option><option ${s.dept === 'علوم الحركة والصحة' ? 'selected' : ''}>علوم الحركة والصحة</option></select></div>
                    <div class="form-group"><label>السنة الدراسية</label><select id="ae_year"><option ${s.year === 'السنة الأولى' ? 'selected' : ''}>السنة الأولى</option><option ${s.year === 'السنة الثانية' ? 'selected' : ''}>السنة الثانية</option><option ${s.year === 'السنة الثالثة' ? 'selected' : ''}>السنة الثالثة</option><option ${s.year === 'السنة الرابعة' ? 'selected' : ''}>السنة الرابعة</option></select></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>المعدل (GPA)</label><input type="number" id="ae_gpa" value="${s.gpa}" min="0" max="4" step="0.01"></div>
                    <div class="form-group"><label>الساعات المكتملة</label><input type="number" id="ae_hours" value="${s.hours}" min="0"></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>إجمالي الساعات</label><input type="number" id="ae_total" value="${s.total}" min="0"></div>
                    <div class="form-group"><label>الترتيب</label><input type="text" id="ae_rank" value="${sanitize(s.rank)}"></div>
                </div>

                <!-- Courses -->
                <h4 style="color:var(--p);margin:20px 0 10px;padding-bottom:5px;border-bottom:1px solid var(--gl)">📚 المقررات الدراسية</h4>
                <div id="ae_courses">
                    ${s.courses.map(function (c, i) {
        return `<div class="calc-row" style="grid-template-columns:2fr 1fr .7fr .7fr .7fr 1fr auto;gap:4px;margin-bottom:4px;font-size:.75rem">
                            <input value="${sanitize(c.n)}" placeholder="المقرر" class="ae_cn">
                            <input value="${c.c}" placeholder="الرمز" class="ae_cc">
                            <input type="number" value="${c.h}" placeholder="س" class="ae_ch" min="1" max="4">
                            <input type="number" value="${c.w}" placeholder="أعمال" class="ae_cw" min="0" max="60">
                            <input type="number" value="${c.f}" placeholder="نهائي" class="ae_cf" min="0" max="60">
                            <select class="ae_cg">
                                <option value="A+" ${c.g === 'A+' ? 'selected' : ''}>A+</option>
                                <option value="A" ${c.g === 'A' ? 'selected' : ''}>A</option>
                                <option value="B+" ${c.g === 'B+' ? 'selected' : ''}>B+</option>
                                <option value="B" ${c.g === 'B' ? 'selected' : ''}>B</option>
                                <option value="C+" ${c.g === 'C+' ? 'selected' : ''}>C+</option>
                                <option value="C" ${c.g === 'C' ? 'selected' : ''}>C</option>
                                <option value="D+" ${c.g === 'D+' ? 'selected' : ''}>D+</option>
                                <option value="D" ${c.g === 'D' ? 'selected' : ''}>D</option>
                                <option value="F" ${c.g === 'F' ? 'selected' : ''}>F</option>
                            </select>
                            <button type="button" class="del-row" onclick="this.parentElement.remove()" style="width:24px;height:24px;font-size:.7rem">✕</button>
                        </div>`;
    }).join('')}
                </div>
                <button type="button" onclick="addAdminCourseRow()" class="tbtn" style="margin:8px 0;font-size:.75rem">➕ إضافة مقرر</button>

                <!-- Password -->
                <h4 style="color:var(--p);margin:20px 0 10px;padding-bottom:5px;border-bottom:1px solid var(--gl)">🔑 كلمة المرور</h4>
                <div class="form-group"><label>كلمة مرور جديدة (اختياري)</label><input type="password" id="ae_pass" placeholder="اتركه فارغاً للإبقاء على القديمة" minlength="6"></div>

                <!-- Action Buttons -->
                <div style="display:flex;gap:8px;margin-top:20px;padding-top:15px;border-top:2px solid var(--gl)">
                    <button type="submit" class="submit-btn" style="flex:1">💾 حفظ جميع التعديلات</button>
                    <button type="button" class="submit-btn" style="flex:0 0 auto;background:var(--gray)" onclick="closeAdminEdit()">❌ إلغاء</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function adminPreviewAvatar(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        if (file.size > 2 * 1024 * 1024) { showToast('حجم الصورة كبير!', 'error'); return; }
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById('adminEditAvatar');
            preview.querySelector('img').src = e.target.result;
            preview.dataset.newAvatar = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function addAdminCourseRow() {
    const container = document.getElementById('ae_courses');
    const row = document.createElement('div');
    row.className = 'calc-row';
    row.style.cssText = 'grid-template-columns:2fr 1fr .7fr .7fr .7fr 1fr auto;gap:4px;margin-bottom:4px;font-size:.75rem';
    row.innerHTML = `
        <input placeholder="المقرر" class="ae_cn">
        <input placeholder="الرمز" class="ae_cc">
        <input type="number" placeholder="س" class="ae_ch" min="1" max="4" value="3">
        <input type="number" placeholder="أعمال" class="ae_cw" min="0" max="60" value="0">
        <input type="number" placeholder="نهائي" class="ae_cf" min="0" max="60" value="0">
        <select class="ae_cg"><option value="A+">A+</option><option value="A">A</option><option value="B+">B+</option><option value="B">B</option><option value="C+">C+</option><option value="C">C</option><option value="D+">D+</option><option value="D">D</option><option value="F">F</option></select>
        <button type="button" class="del-row" onclick="this.parentElement.remove()" style="width:24px;height:24px;font-size:.7rem">✕</button>
    `;
    container.appendChild(row);
}

function getGradeClass(g) {
    if (g === 'A+' || g === 'A') return 'grade-a';
    if (g === 'B+' || g === 'B') return 'grade-b';
    if (g === 'C+' || g === 'C') return 'grade-c';
    if (g === 'D+' || g === 'D') return 'grade-d';
    return 'grade-f';
}

function getGradeText(gpa) {
    if (gpa >= 3.75) return 'ممتاز';
    if (gpa >= 3.5) return 'جيد جداً مرتفع';
    if (gpa >= 3.0) return 'جيد جداً';
    if (gpa >= 2.5) return 'جيد مرتفع';
    if (gpa >= 2.0) return 'جيد';
    if (gpa >= 1.0) return 'مقبول';
    return 'راسب';
}

function saveAdminEdit(e, nid) {
    e.preventDefault();
    if (!DB[nid]) return;

    const newAvatar = document.getElementById('adminEditAvatar').dataset.newAvatar;

    // Update personal info
    DB[nid].name = document.getElementById('ae_name').value.trim();
    DB[nid].email = document.getElementById('ae_email').value.trim();
    DB[nid].phone = document.getElementById('ae_phone').value.trim();
    DB[nid].dob = document.getElementById('ae_dob').value;
    DB[nid].gender = document.getElementById('ae_gender').value;
    DB[nid].status = document.getElementById('ae_status').value;

    // Update academic info
    DB[nid].dept = document.getElementById('ae_dept').value;
    DB[nid].year = document.getElementById('ae_year').value;
    DB[nid].gpa = parseFloat(document.getElementById('ae_gpa').value) || 0;
    DB[nid].hours = parseInt(document.getElementById('ae_hours').value) || 0;
    DB[nid].total = parseInt(document.getElementById('ae_total').value) || 136;
    DB[nid].rank = document.getElementById('ae_rank').value;
    DB[nid].grade = getGradeText(DB[nid].gpa);

    // Update avatar
    if (newAvatar) DB[nid].avatar = newAvatar;

    // Update courses
    const courseRows = document.querySelectorAll('#ae_courses .calc-row');
    DB[nid].courses = [];
    courseRows.forEach(function (row) {
        const name = row.querySelector('.ae_cn').value.trim();
        const code = row.querySelector('.ae_cc').value.trim();
        if (!name && !code) return;
        const h = parseInt(row.querySelector('.ae_ch').value) || 3;
        const w = parseInt(row.querySelector('.ae_cw').value) || 0;
        const f = parseInt(row.querySelector('.ae_cf').value) || 0;
        const g = row.querySelector('.ae_cg').value;
        DB[nid].courses.push({
            n: name, c: code, h: h, w: w, f: f, t: w + f, g: g, gc: getGradeClass(g)
        });
    });

    // Update password
    const newPass = document.getElementById('ae_pass').value;
    if (newPass && newPass.length >= 6) {
        if (users[nid]) users[nid].pass = btoa(newPass);
    }

    // Update user info
    if (users[nid]) {
        users[nid].name = DB[nid].name;
        users[nid].email = DB[nid].email;
    }

    saveDB();
    saveUsers();
    closeAdminEdit();
    loadAdminStudents();
    updateDashboardStats();
    showToast('تم حفظ تعديلات: ' + DB[nid].name + ' ✅', 'success');
}

function closeAdminEdit() {
    const modal = document.getElementById('adminEditModal');
    if (modal) { modal.remove(); }
}

// ============ ADMIN: ADD NEW STUDENT ============
function adminAddStudent() {
    closeAdminEdit();

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'adminEditModal';
    modal.innerHTML = `
        <div class="modal" style="max-width:600px">
            <button class="mx" onclick="closeAdminEdit()">✕</button>
            <div style="text-align:center;margin-bottom:20px">
                <span style="font-size:3rem">➕</span>
                <h3>إضافة طالب جديد</h3>
            </div>
            <form onsubmit="saveNewStudent(event)">
                <div class="form-row">
                    <div class="form-group"><label>الاسم الكامل *</label><input type="text" id="an_name" required placeholder="الاسم الكامل"></div>
                    <div class="form-group"><label>الرقم القومي (14 رقم) *</label><input type="text" id="an_nid" required maxlength="14" inputmode="numeric" oninput="this.value=this.value.replace(/[^0-9]/g,'')" placeholder="14 رقم"></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>البريد *</label><input type="email" id="an_email" required placeholder="email@example.com"></div>
                    <div class="form-group"><label>الهاتف *</label><input type="tel" id="an_phone" required placeholder="+966 5X XXX XXXX"></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>تاريخ الميلاد</label><input type="date" id="an_dob"></div>
                    <div class="form-group"><label>الجنس</label><select id="an_gender"><option value="male">ذكر</option><option value="female">أنثى</option></select></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>القسم</label><select id="an_dept"><option>التربية الرياضية</option><option>التدريب الرياضي</option><option>الإدارة الرياضية</option><option>علوم الحركة والصحة</option></select></div>
                    <div class="form-group"><label>السنة الدراسية</label><select id="an_year"><option>السنة الأولى</option><option>السنة الثانية</option><option>السنة الثالثة</option><option>السنة الرابعة</option></select></div>
                </div>
                <div class="form-group"><label>كلمة المرور *</label><input type="password" id="an_pass" required minlength="6" placeholder="6 أحرف على الأقل"></div>
                <button type="submit" class="submit-btn" style="margin-top:10px">➕ إضافة الطالب</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function saveNewStudent(e) {
    e.preventDefault();
    const nid = document.getElementById('an_nid').value.trim();
    const name = document.getElementById('an_name').value.trim();
    const email = document.getElementById('an_email').value.trim();
    const phone = document.getElementById('an_phone').value.trim();
    const dob = document.getElementById('an_dob').value;
    const gender = document.getElementById('an_gender').value;
    const dept = document.getElementById('an_dept').value;
    const year = document.getElementById('an_year').value;
    const pass = document.getElementById('an_pass').value;

    if (!nid || nid.length !== 14) { showToast('أدخل رقم قومي صحيح (14 رقم)', 'error'); return; }
    if (!name) { showToast('أدخل الاسم', 'error'); return; }
    if (!email) { showToast('أدخل البريد', 'error'); return; }
    if (!pass || pass.length < 6) { showToast('كلمة المرور 6 أحرف على الأقل', 'error'); return; }
    if (DB[nid]) { showToast('هذا الرقم القومي مسجل بالفعل!', 'error'); return; }

    const uid = generateId();
    DB[nid] = {
        name: name, nid: nid, uid: uid, year: year, dept: dept,
        status: gender === 'female' ? 'مستجدة' : 'مستجد',
        gpa: 0, grade: '-', hours: 0, total: 136,
        dob: dob || '-', email: email, phone: phone,
        gender: gender, rank: '-', avatar: '',
        courses: [], monthly: [],
        sched: { "الأحد": ["", "", "", ""], "الاثنين": ["", "", "", ""], "الثلاثاء": ["", "", "", ""], "الأربعاء": ["", "", "", ""], "الخميس": ["", "", "", ""] },
        att: { total: 0, present: 0, absent: 0, excused: 0, pct: 0, details: [] }
    };

    users[nid] = { nid: nid, name: name, email: email, pass: btoa(pass) };
    saveDB();
    saveUsers();
    closeAdminEdit();
    loadAdminStudents();
    updateDashboardStats();
    showToast('تم إضافة الطالب: ' + name + ' ✅', 'success');
}

// ============ ADMIN: EXPORT ============
function exportStudents() {
    let csv = 'الرقم القومي,الاسم,القسم,السنة,GPA,الحالة,البريد,الهاتف\n';
    for (const k in DB) {
        const s = DB[k];
        csv += s.nid + ',' + s.name + ',' + s.dept + ',' + s.year + ',' + s.gpa + ',' + s.status + ',' + s.email + ',' + s.phone + '\n';
    }
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'students_' + new Date().toISOString().split('T')[0] + '.csv';
    link.click();
    showToast('تم تصدير بيانات الطلاب 📥', 'success');
}

// ============ ADMIN: ATTENDANCE ============
function loadAtt() {
    const tb = document.getElementById('attBody');
    tb.innerHTML = '';
    let i = 0;
    for (const k in DB) {
        const s = DB[k];
        i++;
        tb.innerHTML += `<tr>
            <td>${i}</td>
            <td>${sanitize(s.name)}</td>
            <td><input type="radio" name="a${i}" value="present" checked></td>
            <td><input type="radio" name="a${i}" value="absent"></td>
            <td><input type="radio" name="a${i}" value="excused"></td>
        </tr>`;
    }
    showToast('تم تحميل كشف الحضور', 'info');
}

function saveAttendance() {
    showSuccess('تم الحفظ! ✅', 'تم حفظ كشف الحضور بنجاح');
}

// Admin Chat
function selectChat(el, name) {
    document.querySelectorAll('.ach-user').forEach(function (u) { u.classList.remove('active'); });
    el.classList.add('active');
    document.getElementById('achName').textContent = name;
    document.getElementById('achInput').focus();
}

function sendAch() {
    const input = document.getElementById('achInput');
    const msg = input.value.trim();
    if (!msg) return;
    const msgs = document.getElementById('achMsgs');
    const now = new Date();
    const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
    msgs.innerHTML += '<div class="msg msg-s"><div class="msg-b"><p>' + sanitize(msg) + '</p><small>' + time + '</small></div></div>';
    input.value = '';
    msgs.scrollTop = msgs.scrollHeight;
    setTimeout(function () {
        const replies = ['تم الاطلاع ✅', 'شكراً لك 🙏', 'سأراجع وأرد قريباً', 'حسناً، سأتابع الموضوع'];
        msgs.innerHTML += '<div class="msg msg-r"><div class="msg-b"><p>' + replies[Math.floor(Math.random() * replies.length)] + '</p><small>' + time + '</small></div></div>';
        msgs.scrollTop = msgs.scrollHeight;
    }, 1500);
}
