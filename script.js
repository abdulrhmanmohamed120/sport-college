// ================================================
// UTILITY FUNCTIONS
// ================================================
function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function showToast(msg, type) {
    type = type || 'info';
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    toast.className = 'toast toast-' + type;
    toast.innerHTML = '<span>' + (icons[type] || '') + '</span><span>' + sanitize(msg) + '</span>';
    container.appendChild(toast);
    setTimeout(function () { toast.remove(); }, 3000);
}

// ================================================
// STUDENT DATABASE
// ================================================
const DB = {
    "29901011234567": {
        name: "أحمد محمد العلي", nid: "29901011234567", uid: "SSC-2022-0451",
        year: "السنة الثالثة", dept: "التدريب الرياضي", status: "منتظم",
        gpa: 3.45, grade: "جيد جداً مرتفع", hours: 96, total: 140,
        dob: "01/01/1999", email: "ahmed.ali@ssc.edu.sa", phone: "+966 50 123 4567",
        gender: "male", rank: "12/280",
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
        dob: "15/01/2000", email: "sara.shamri@ssc.edu.sa", phone: "+966 55 987 6543",
        gender: "female", rank: "5/350",
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
        dob: "20/05/1998", email: "omar.dossari@ssc.edu.sa", phone: "+966 54 111 2233",
        gender: "male", rank: "22/300",
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
        dob: "08/03/2001", email: "noor.qahtani@ssc.edu.sa", phone: "+966 56 444 5566",
        gender: "female", rank: "3/270",
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
    catch (e) { return input === stored; }  // fallback للباسوردات القديمة
}

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

function markRead(id) {
    notifs.forEach(function (n) { if (n.id === id) n.read = true; });
    updateBadge();
    renderNotifications();
}

function markAllRead() {
    notifs.forEach(function (n) { n.read = true; });
    updateBadge();
    renderNotifications();
}

function updateBadge() {
    const c = notifs.filter(function (n) { return !n.read; }).length;
    const b = document.getElementById('notifBadge');
    b.textContent = c;
    b.style.display = c > 0 ? 'flex' : 'none';
}

// Close notifications when clicking outside
document.addEventListener('click', function (e) {
    const panel = document.getElementById('notifPanel');
    const btn = document.querySelector('.notif-btn');
    if (panel.classList.contains('active') && !panel.contains(e.target) && !btn.contains(e.target)) {
        panel.classList.remove('active');
    }
});

// ================================================
// LOADING
// ================================================
window.addEventListener('load', function () {
    setTimeout(function () { document.getElementById('loadingScreen').classList.add('hidden'); }, 1200);
    const tc = document.getElementById('tickerContent');
    tc.innerHTML += tc.innerHTML;
    setTimeout(function () { document.querySelectorAll('.h-num').forEach(animateNum); }, 1800);
    setTimeout(checkSession, 2000);
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
// NAVBAR & SCROLL (with throttle)
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
        document.querySelectorAll('.gf').forEach(function (b) {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
        });
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
    if (s) {
        const n = +s.textContent;
        s.textContent = btn.classList.contains('liked') ? n + 1 : n - 1;
    }
}

function openLightbox(item) {
    const emoji = item.querySelector('.g-img > span').textContent;
    const bg = item.querySelector('.g-img').style.background;
    const title = item.querySelector('.g-over h4').textContent;
    const date = item.querySelector('.g-over p').textContent;
    document.getElementById('lbImg').innerHTML = '<span style="font-size:7rem">' + emoji + '</span>';
    document.getElementById('lbImg').style.background = bg;
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
    if (id.length !== 14 || !/^\d{14}$/.test(id)) {
        showToast('أدخل رقم قومي صحيح (14 رقم)', 'error');
        return;
    }
    const s = DB[id];
    if (!s) {
        showToast('لم يتم العثور على بيانات لهذا الرقم', 'error');
        return;
    }
    showStudent(s);
}

function showStudent(s) {
    const r = document.getElementById('studentResult');
    r.style.display = 'block';
    document.getElementById('sAvatar').textContent = s.gender === 'female' ? '👩‍🎓' : '👨‍🎓';
    document.getElementById('sName').textContent = s.name;
    document.getElementById('sIdDisplay').textContent = s.nid + ' | ' + s.uid;
    document.getElementById('sYear').textContent = s.year;
    document.getElementById('sDept').textContent = s.dept;
    document.getElementById('sStatus').textContent = s.status;

    // Info
    const fields = [
        ['الاسم', s.name], ['الرقم القومي', s.nid], ['الرقم الجامعي', s.uid],
        ['السنة', s.year], ['القسم', s.dept], ['GPA', s.gpa.toFixed(2), 'gpa-val'],
        ['التقدير', s.grade], ['الساعات', s.hours + '/' + s.total], ['الميلاد', s.dob],
        ['البريد', s.email], ['الهاتف', s.phone], ['الحالة', s.status]
    ];
    let ig = '';
    fields.forEach(function (f) {
        ig += '<div class="info-card"><span class="info-lbl">' + f[0] + '</span><span class="info-val ' + (f[2] || '') + '">' + sanitize(f[1]) + '</span></div>';
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
    w.document.write('<html dir="rtl"><head><title>تقرير الطالب - كلية علوم الرياضة</title><style>body{font-family:Arial,sans-serif;padding:20px;direction:rtl}h1{color:#1e3a5f;text-align:center}table{width:100%;border-collapse:collapse;margin:15px 0}th{background:#1e3a5f;color:#fff;padding:8px}td{padding:6px;border:1px solid #ddd}.result-tabs,.close-btn,.print-btn{display:none}</style></head><body><h1>🏛️ كلية علوم الرياضة - تقرير الطالب</h1>' + document.querySelector('.student-result').innerHTML + '</body></html>');
    w.document.close();
    w.print();
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
    rows.forEach(function (r) {
        const h = +r.querySelector('.calc-hrs').value;
        const p = +r.querySelector('.calc-gr').value;
        tp += h * p;
        th += h;
    });
    const gpa = th > 0 ? (tp / th).toFixed(2) : '0.00';
    const grade = gpa >= 3.75 ? 'ممتاز' : gpa >= 3 ? 'جيد جداً' : gpa >= 2 ? 'جيد' : gpa >= 1 ? 'مقبول' : 'راسب';
    document.getElementById('calcGpa').textContent = gpa;
    document.getElementById('calcGrade').textContent = 'التقدير: ' + grade;
    document.getElementById('calcRes').style.display = 'block';
    showToast('المعدل التراكمي: ' + gpa + ' - ' + grade, 'success');
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

    // Validation
    if (!name) { showToast('أدخل الاسم', 'error'); return; }
    if (!nid || nid.length !== 14 || !/^\d{14}$/.test(nid)) { showToast('أدخل رقم قومي صحيح (14 رقم)', 'error'); return; }
    if (!email || !email.includes('@')) { showToast('أدخل بريد صحيح', 'error'); return; }
    if (!phone) { showToast('أدخل رقم الهاتف', 'error'); return; }
    if (!pass || pass.length < 6) { showToast('كلمة المرور 6 أحرف على الأقل', 'error'); return; }
    if (pass !== pass2) { showToast('كلمتا المرور غير متطابقتين!', 'error'); return; }
    if (users[nid]) { showToast('الرقم القومي مسجل بالفعل! جرب تسجيل الدخول', 'error'); return; }
    for (const k in users) { if (users[k].email === email) { showToast('البريد مسجل بالفعل!', 'error'); return; } }

    users[nid] = { nid: nid, name: name, email: email, pass: btoa(pass) };
    saveUsers();
    if (!DB[nid]) {
        DB[nid] = {
            name: name, nid: nid, uid: 'SSC-2025-' + Math.floor(Math.random() * 9000 + 1000),
            year: 'السنة الأولى', dept: dept || 'غير محدد', status: 'مستجد',
            gpa: 0, grade: '-', hours: 0, total: 136, dob: '-', email: email, phone: phone,
            gender: 'male', rank: '-', courses: [], monthly: [],
            sched: { "الأحد": ["", "", "", ""], "الاثنين": ["", "", "", ""], "الثلاثاء": ["", "", "", ""], "الأربعاء": ["", "", "", ""], "الخميس": ["", "", "", ""] },
            att: { total: 0, present: 0, absent: 0, excused: 0, pct: 0, details: [] }
        };
    }
    closeModals();
    this.reset();
    showSuccess('تم إنشاء حسابك! 🎉', 'مرحباً ' + name + '\n\nسجّل دخول بـ:\n📌 الرقم: ' + nid + '\n🔑 كلمة المرور اللي اخترتها');
});

function logoutUser() {
    document.getElementById('userBar').style.display = 'none';
    navbar.style.top = '36px';
    closeResult();
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
    }
}

// ================================================
// MODALS
// ================================================
function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(function (m) { m.classList.remove('active'); });
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
    if (panel.classList.contains('active')) {
        setTimeout(function () { document.getElementById('cwInput').focus(); }, 300);
    }
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
        const replies = ['مرحباً! كيف أقدر أساعدك؟', 'تم تحويل استفسارك للقسم المختص', 'يمكنك زيارة شؤون الطلاب', 'هل تحتاج مساعدة أخرى؟'];
        msgs.innerHTML += '<div class="msg msg-r"><div class="msg-b"><p>' + replies[Math.floor(Math.random() * replies.length)] + '</p><small>المرشد - ' + time + '</small></div></div>';
        msgs.scrollTop = msgs.scrollHeight;
    }, 1200);
}

// ================================================
// ADMIN PANEL
// ================================================
function openAdminPanel() {
    document.getElementById('adminModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    loadAdminStudents();
}

function switchAdmin(panel, btn) {
    document.querySelectorAll('.ap').forEach(function (p) { p.classList.remove('active'); });
    document.querySelectorAll('.anav').forEach(function (b) { b.classList.remove('active'); });
    document.getElementById('ap-' + panel).classList.add('active');
    if (btn) btn.classList.add('active');
}

function loadAdminStudents() {
    const tb = document.getElementById('adminBody');
    if (!tb) return;
    tb.innerHTML = '';
    for (const k in DB) {
        const s = DB[k];
        const sc = (s.status === 'منتظم' || s.status === 'منتظمة') ? 'st-present' : (s.status === 'مستجدة' || s.status === 'مستجد') ? 'st-excused' : 'st-absent';
        tb.innerHTML += '<tr><td style="font-family:monospace;font-size:.75rem">' + s.nid + '</td><td><strong>' + sanitize(s.name) + '</strong></td><td>' + sanitize(s.dept) + '</td><td>' + s.year + '</td><td><strong style="color:var(--p)">' + s.gpa.toFixed(2) + '</strong></td><td><span class="status-b ' + sc + '">' + s.status + '</span></td></tr>';
    }
}

function searchAdmin(q) {
    q = q.toLowerCase();
    document.querySelectorAll('#adminBody tr').forEach(function (r) {
        r.style.display = r.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
}

function exportStudents() {
    let csv = 'الرقم القومي,الاسم,القسم,السنة,GPA,الحالة\n';
    for (const k in DB) {
        const s = DB[k];
        csv += s.nid + ',' + s.name + ',' + s.dept + ',' + s.year + ',' + s.gpa + ',' + s.status + '\n';
    }
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'students_' + new Date().toISOString().split('T')[0] + '.csv';
    link.click();
    showToast('تم تصدير بيانات الطلاب', 'success');
}

function loadAtt() {
    const tb = document.getElementById('attBody');
    tb.innerHTML = '';
    const students = [
        { n: 'أحمد محمد العلي', id: 'SSC-2022-0451' },
        { n: 'سارة خالد الشمري', id: 'SSC-2023-0892' },
        { n: 'عمر حسن الدوسري', id: 'SSC-2021-0234' },
        { n: 'نور عبدالله القحطاني', id: 'SSC-2024-1205' }
    ];
    students.forEach(function (s, i) {
        tb.innerHTML += '<tr><td>' + (i + 1) + '</td><td>' + sanitize(s.n) + '</td><td><input type="radio" name="a' + i + '" value="present" checked></td><td><input type="radio" name="a' + i + '" value="absent"></td><td><input type="radio" name="a' + i + '" value="excused"></td></tr>';
    });
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
