// ============================================
// STUDENT DATABASE (Simulated)
// ============================================
var studentsDB = {
    "29901011234567": {
        name: "أحمد محمد العلي", nationalId: "29901011234567", uniId: "SSC-2022-0451",
        year: "السنة الثالثة", yearNum: 3, dept: "التدريب الرياضي", status: "منتظم",
        gpa: 3.45, grade: "جيد جداً مرتفع", hours: 96, totalHours: 140,
        dob: "01/01/1999", email: "ahmed.ali@ssc.edu.sa", phone: "+966 50 123 4567",
        gender: "male", rank: "12/280",
        courses: [
            {name:"تدريب رياضي متقدم",code:"SPE 305",hours:3,work:35,final:50,total:85,grade:"B+",gradeClass:"grade-b"},
            {name:"البحث العلمي في الرياضة",code:"SPE 306",hours:3,work:38,final:52,total:90,grade:"A",gradeClass:"grade-a"},
            {name:"الإصابات الرياضية",code:"SPE 301",hours:3,work:32,final:46,total:78,grade:"C+",gradeClass:"grade-c"},
            {name:"القياس والتقويم",code:"SPE 302",hours:3,work:40,final:55,total:95,grade:"A+",gradeClass:"grade-a"},
            {name:"رياضات الماء المتقدمة",code:"SPE 307",hours:2,work:28,final:35,total:63,grade:"D",gradeClass:"grade-d"},
            {name:"اللياقة البدنية والصحة",code:"SPE 308",hours:2,work:30,final:40,total:70,grade:"C",gradeClass:"grade-c"}
        ],
        monthly: [
            {month:"سبتمبر",score:78},{month:"أكتوبر",score:82},{month:"نوفمبر",score:85},{month:"ديسمبر",score:88}
        ],
        schedule: {
            "الأحد":    ["تدريب رياضي متقدم","","البحث العلمي",""],
            "الاثنين":  ["","الإصابات الرياضية","القياس والتقويم",""],
            "الثلاثاء": ["تدريب رياضي متقدم","","رياضات الماء",""],
            "الأربعاء": ["","البحث العلمي","","اللياقة البدنية"],
            "الخميس":   ["القياس والتقويم","الإصابات الرياضية","",""]
        }
    },
    "30001151234567": {
        name: "سارة خالد الشمري", nationalId: "30001151234567", uniId: "SSC-2023-0892",
        year: "السنة الثانية", yearNum: 2, dept: "التربية الرياضية", status: "منتظمة",
        gpa: 3.72, grade: "ممتاز", hours: 62, totalHours: 136,
        dob: "15/01/2000", email: "sara.shamri@ssc.edu.sa", phone: "+966 55 987 6543",
        gender: "female", rank: "5/350",
        courses: [
            {name:"طرق تدريس التربية الرياضية",code:"SPE 205",hours:3,work:40,final:52,total:92,grade:"A",gradeClass:"grade-a"},
            {name:"كرة اليد (1)",code:"SPE 206",hours:2,work:35,final:43,total:78,grade:"C+",gradeClass:"grade-c"},
            {name:"فسيولوجيا الجهد البدني",code:"SPE 207",hours:3,work:38,final:50,total:88,grade:"B+",gradeClass:"grade-b"},
            {name:"التغذية الرياضية",code:"SPE 208",hours:2,work:42,final:55,total:97,grade:"A+",gradeClass:"grade-a"},
            {name:"علم النفس الرياضي",code:"SPE 201",hours:3,work:36,final:49,total:85,grade:"B+",gradeClass:"grade-b"}
        ],
        monthly: [
            {month:"سبتمبر",score:88},{month:"أكتوبر",score:91},{month:"نوفمبر",score:89},{month:"ديسمبر",score:93}
        ],
        schedule: {
            "الأحد":    ["طرق التدريس","","فسيولوجيا",""],
            "الاثنين":  ["","كرة اليد","التغذية الرياضية",""],
            "الثلاثاء": ["علم النفس الرياضي","طرق التدريس","",""],
            "الأربعاء": ["","فسيولوجيا","","كرة اليد"],
            "الخميس":   ["التغذية الرياضية","علم النفس","",""]
        }
    },
    "29805201234567": {
        name: "عمر حسن الدوسري", nationalId: "29805201234567", uniId: "SSC-2021-0234",
        year: "السنة الرابعة", yearNum: 4, dept: "الإدارة الرياضية", status: "منتظم",
        gpa: 3.15, grade: "جيد جداً", hours: 118, totalHours: 132,
        dob: "20/05/1998", email: "omar.dossari@ssc.edu.sa", phone: "+966 54 111 2233",
        gender: "male", rank: "22/300",
        courses: [
            {name:"التدريب الميداني (2)",code:"SPE 405",hours:4,work:38,final:42,total:80,grade:"B",gradeClass:"grade-b"},
            {name:"مشروع التخرج (2)",code:"SPE 406",hours:4,work:40,final:48,total:88,grade:"B+",gradeClass:"grade-b"},
            {name:"الإعلام الرياضي",code:"SPE 407",hours:2,work:30,final:35,total:65,grade:"D+",gradeClass:"grade-d"},
            {name:"رياضة ذوي الاحتياجات",code:"SPE 408",hours:2,work:35,final:40,total:75,grade:"C+",gradeClass:"grade-c"}
        ],
        monthly: [
            {month:"سبتمبر",score:72},{month:"أكتوبر",score:75},{month:"نوفمبر",score:80},{month:"ديسمبر",score:78}
        ],
        schedule: {
            "الأحد":    ["تدريب ميداني","تدريب ميداني","",""],
            "الاثنين":  ["مشروع التخرج","","الإعلام الرياضي",""],
            "الثلاثاء": ["تدريب ميداني","تدريب ميداني","",""],
            "الأربعاء": ["","مشروع التخرج","ذوي الاحتياجات",""],
            "الخميس":   ["","","",""]
        }
    },
    "30103081234567": {
        name: "نور عبدالله القحطاني", nationalId: "30103081234567", uniId: "SSC-2024-1205",
        year: "السنة الأولى", yearNum: 1, dept: "علوم الحركة والصحة", status: "مستجدة",
        gpa: 3.88, grade: "ممتاز", hours: 28, totalHours: 138,
        dob: "08/03/2001", email: "noor.qahtani@ssc.edu.sa", phone: "+966 56 444 5566",
        gender: "female", rank: "3/270",
        courses: [
            {name:"مدخل إلى التربية الرياضية",code:"SPE 101",hours:3,work:42,final:53,total:95,grade:"A+",gradeClass:"grade-a"},
            {name:"تشريح وظيفي",code:"SPE 102",hours:3,work:38,final:50,total:88,grade:"B+",gradeClass:"grade-b"},
            {name:"كرة القدم (1)",code:"SPE 103",hours:2,work:40,final:50,total:90,grade:"A",gradeClass:"grade-a"},
            {name:"ألعاب القوى (1)",code:"SPE 104",hours:2,work:35,final:45,total:80,grade:"B",gradeClass:"grade-b"},
            {name:"اللغة العربية",code:"GEN 101",hours:3,work:40,final:55,total:95,grade:"A+",gradeClass:"grade-a"},
            {name:"اللغة الإنجليزية (1)",code:"GEN 102",hours:3,work:36,final:48,total:84,grade:"B",gradeClass:"grade-b"}
        ],
        monthly: [
            {month:"سبتمبر",score:90},{month:"أكتوبر",score:92},{month:"نوفمبر",score:88},{month:"ديسمبر",score:95}
        ],
        schedule: {
            "الأحد":    ["مدخل تربية رياضية","","تشريح وظيفي",""],
            "الاثنين":  ["كرة القدم","","اللغة العربية",""],
            "الثلاثاء": ["","ألعاب القوى","","تشريح وظيفي"],
            "الأربعاء": ["اللغة الإنجليزية","مدخل تربية رياضية","",""],
            "الخميس":   ["","اللغة العربية","كرة القدم",""]
        }
    }
};

// ============================================
// LOADING
// ============================================
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 1500);
    // Start hero counters
    setTimeout(function() {
        document.querySelectorAll('.h-counter').forEach(function(el) { animateCounter(el); });
    }, 2000);
    // Duplicate ticker for seamless loop
    var tc = document.getElementById('tickerContent');
    tc.innerHTML += tc.innerHTML;
});

// ============================================
// NAVBAR
// ============================================
var navbar = document.getElementById('navbar');
var scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
    updateActiveNav();
});

function updateActiveNav() {
    document.querySelectorAll('section[id]').forEach(function(s) {
        var top = s.offsetTop - 200, h = s.offsetHeight, id = s.id;
        if (window.scrollY >= top && window.scrollY < top + h) {
            document.querySelectorAll('.nav-links a').forEach(function(a) {
                a.classList.toggle('active', a.getAttribute('href') === '#' + id);
            });
        }
    });
}

// Mobile Menu
var mobileToggle = document.getElementById('mobileToggle');
var navLinks = document.getElementById('navLinks');
mobileToggle.addEventListener('click', function() {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { mobileToggle.classList.remove('active'); navLinks.classList.remove('active'); });
});

// Scroll top
scrollTopBtn.addEventListener('click', function() { window.scrollTo({top:0,behavior:'smooth'}); });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        var t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({behavior:'smooth'});
    });
});

// ============================================
// DARK MODE
// ============================================
var darkToggle = document.getElementById('darkToggle');
var isDark = localStorage.getItem('darkMode') === 'true';
if (isDark) { document.body.classList.add('dark-mode'); darkToggle.textContent = '☀️'; }
darkToggle.addEventListener('click', function() {
    isDark = !isDark;
    document.body.classList.toggle('dark-mode');
    darkToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
});

// ============================================
// INTERSECTION OBSERVER
// ============================================
var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, {threshold:0.1});
document.querySelectorAll('.fade-up').forEach(function(el) { obs.observe(el); });

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'));
    var dur = 2000, step = target / (dur / 16), cur = 0;
    var t = setInterval(function() {
        cur += step;
        if (cur >= target) { el.textContent = target.toLocaleString() + '+'; clearInterval(t); }
        else el.textContent = Math.floor(cur).toLocaleString() + '+';
    }, 16);
}

// ============================================
// GALLERY FILTER
// ============================================
document.querySelectorAll('.gal-filter').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.gal-filter').forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        var f = this.getAttribute('data-filter');
        document.querySelectorAll('.gallery-item').forEach(function(item) {
            if (f === 'all' || item.getAttribute('data-category') === f) {
                item.classList.remove('hidden');
                item.style.opacity = '0'; item.style.transform = 'scale(0.8)';
                setTimeout(function() { item.style.opacity = '1'; item.style.transform = 'scale(1)'; item.style.transition = 'all 0.3s'; }, 50);
            } else {
                item.style.opacity = '0'; item.style.transform = 'scale(0.8)';
                setTimeout(function() { item.classList.add('hidden'); }, 300);
            }
        });
    });
});

// Like photo
function likePhoto(btn) {
    btn.classList.toggle('liked');
    var span = btn.querySelector('span');
    var num = parseInt(span.textContent);
    span.textContent = btn.classList.contains('liked') ? num + 1 : num - 1;
}

// Image lightbox
function openImageModal(item) {
    var img = item.querySelector('.gallery-img');
    var title = item.querySelector('.gallery-overlay h4').textContent;
    var date = item.querySelector('.gallery-overlay p').textContent;
    var emoji = item.querySelector('.gallery-img > span').textContent;
    document.getElementById('lightboxImg').innerHTML = '<span style="font-size:8rem">' + emoji + '</span>';
    document.getElementById('lightboxImg').style.background = img.style.background;
    document.getElementById('lightboxTitle').textContent = title;
    document.getElementById('lightboxDate').textContent = date;
    document.getElementById('imageModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================
// STUDENT PORTAL - SEARCH
// ============================================
function fillTestId(id) {
    document.getElementById('nationalIdInput').value = id;
    searchStudent();
}

function searchStudent() {
    var id = document.getElementById('nationalIdInput').value.trim();
    if (id.length !== 14 || !/^\d{14}$/.test(id)) {
        alert('❌ يرجى إدخال رقم قومي صحيح مكون من 14 رقم');
        return;
    }
    var student = studentsDB[id];
    if (!student) {
        alert('❌ لم يتم العثور على بيانات لهذا الرقم القومي\n\nجرب أحد الأرقام التجريبية المتاحة');
        return;
    }
    displayStudent(student);
}

function displayStudent(s) {
    document.getElementById('studentResult').style.display = 'block';
    document.getElementById('studentAvatar').textContent = s.gender === 'female' ? '👩‍🎓' : '👨‍🎓';
    document.getElementById('studentName').textContent = s.name;
    document.getElementById('studentIdDisplay').textContent = 'الرقم القومي: ' + s.nationalId + ' | ' + s.uniId;
    document.getElementById('studentYear').textContent = s.year;
    document.getElementById('studentDept').textContent = s.dept;
    document.getElementById('studentStatus').textContent = s.status;
    // Info tab
    document.getElementById('infoName').textContent = s.name;
    document.getElementById('infoNationalId').textContent = s.nationalId;
    document.getElementById('infoUniId').textContent = s.uniId;
    document.getElementById('infoYear').textContent = s.year;
    document.getElementById('infoDept').textContent = s.dept;
    document.getElementById('infoGpa').textContent = s.gpa.toFixed(2);
    document.getElementById('infoGrade').textContent = s.grade;
    document.getElementById('infoHours').textContent = s.hours + ' / ' + s.totalHours;
    document.getElementById('infoDob').textContent = s.dob;
    document.getElementById('infoEmail').textContent = s.email;
    document.getElementById('infoPhone').textContent = s.phone;
    document.getElementById('infoEnrollment').textContent = s.status;
    // Grades
    document.getElementById('gpaValue').textContent = s.gpa.toFixed(2);
    var pct = (s.gpa / 4) * 100;
    var offset = 283 - (283 * pct / 100);
    setTimeout(function() { document.getElementById('gpaFill').style.strokeDashoffset = offset; }, 100);
    document.getElementById('gsCompleted').textContent = s.hours;
    document.getElementById('gsRemaining').textContent = s.totalHours - s.hours;
    document.getElementById('gsGrade').textContent = s.grade;
    document.getElementById('gsRank').textContent = s.rank;
    // Grades table
    var tbody = document.getElementById('gradesTableBody');
    tbody.innerHTML = '';
    s.courses.forEach(function(c) {
        tbody.innerHTML += '<tr><td>' + c.name + '</td><td>' + c.code + '</td><td>' + c.hours + '</td><td>' + c.work + '</td><td>' + c.final + '</td><td><strong>' + c.total + '</strong></td><td><span class="grade-badge ' + c.gradeClass + '">' + c.grade + '</span></td></tr>';
    });
    // Monthly
    var mg = document.getElementById('monthlyGrid');
    mg.innerHTML = '';
    s.monthly.forEach(function(m) {
        var gc = m.score >= 90 ? '#10b981' : m.score >= 80 ? '#3b82f6' : m.score >= 70 ? '#f59e0b' : '#ef4444';
        var gl = m.score >= 90 ? 'ممتاز' : m.score >= 80 ? 'جيد جداً' : m.score >= 70 ? 'جيد' : 'مقبول';
        var glc = m.score >= 90 ? 'grade-a' : m.score >= 80 ? 'grade-b' : m.score >= 70 ? 'grade-c' : 'grade-d';
        mg.innerHTML += '<div class="month-card"><div class="month-name">' + m.month + '</div><span class="month-score" style="color:' + gc + '">' + m.score + '%</span><span class="month-grade ' + glc + '">' + gl + '</span><div class="month-bar"><div class="month-bar-fill" style="width:' + m.score + '%;background:' + gc + '"></div></div></div>';
    });
    // Chart
    var chart = document.getElementById('chartContainer');
    chart.innerHTML = '';
    s.monthly.forEach(function(m) {
        var gc = m.score >= 90 ? '#10b981' : m.score >= 80 ? '#3b82f6' : m.score >= 70 ? '#f59e0b' : '#ef4444';
        chart.innerHTML += '<div class="chart-bar" style="height:100%"><div class="chart-value">' + m.score + '</div><div class="chart-bar-fill" style="height:' + m.score + '%;background:' + gc + '"></div><div class="chart-label">' + m.month + '</div></div>';
    });
    // Schedule
    var sb = document.getElementById('scheduleBody');
    sb.innerHTML = '';
    var days = ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس"];
    days.forEach(function(day) {
        var row = '<tr><td><strong>' + day + '</strong></td>';
        var slots = s.schedule[day] || ["","","",""];
        slots.forEach(function(slot) {
            if (slot) row += '<td class="has-class">' + slot + '</td>';
            else row += '<td>-</td>';
        });
        row += '</tr>';
        sb.innerHTML += row;
    });
    // Scroll to result
    document.getElementById('studentResult').scrollIntoView({behavior:'smooth',block:'start'});
    // Reset tabs
    document.querySelectorAll('.result-tab').forEach(function(t,i) { t.classList.toggle('active', i===0); });
    document.querySelectorAll('.result-content').forEach(function(c,i) { c.classList.toggle('active', i===0); });
}

function closeResult() {
    document.getElementById('studentResult').style.display = 'none';
    document.getElementById('gpaFill').style.strokeDashoffset = 283;
}

// Result tabs
document.querySelectorAll('.result-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        var id = this.getAttribute('data-rtab');
        document.querySelectorAll('.result-tab').forEach(function(t) { t.classList.remove('active'); });
        this.classList.add('active');
        document.querySelectorAll('.result-content').forEach(function(c) { c.classList.remove('active'); });
        document.getElementById('rtab-' + id).classList.add('active');
        // Animate GPA circle when grades tab is shown
        if (id === 'grades') {
            var gpa = parseFloat(document.getElementById('gpaValue').textContent);
            var pct = (gpa / 4) * 100;
            var offset = 283 - (283 * pct / 100);
            document.getElementById('gpaFill').style.strokeDashoffset = 283;
            setTimeout(function() { document.getElementById('gpaFill').style.strokeDashoffset = offset; }, 100);
        }
    });
});

// ============================================
// GPA CALCULATOR
// ============================================
function addCalcRow() {
    var div = document.createElement('div');
    div.className = 'calc-row';
    div.innerHTML = '<input type="text" placeholder="اسم المقرر"><select><option>3</option><option>2</option><option>4</option><option>1</option></select><select><option value="4.00">A+ (4.00)</option><option value="3.75">A (3.75)</option><option value="3.50">B+ (3.50)</option><option value="3.00">B (3.00)</option><option value="2.50">C+ (2.50)</option><option value="2.00">C (2.00)</option><option value="1.50">D+ (1.50)</option><option value="1.00">D (1.00)</option><option value="0.00">F (0.00)</option></select><button class="remove-row" onclick="this.parentElement.remove()">✕</button>';
    document.getElementById('calcCourses').appendChild(div);
}

function calculateGPA() {
    var rows = document.querySelectorAll('.calc-row');
    var totalPoints = 0, totalHours = 0;
    rows.forEach(function(row) {
        var selects = row.querySelectorAll('select');
        var hours = parseInt(selects[0].value);
        var points = parseFloat(selects[1].value);
        totalPoints += hours * points;
        totalHours += hours;
    });
    var gpa = totalHours > 0 ? (totalPoints / totalHours).toFixed(2) : '0.00';
    var grade = gpa >= 3.75 ? 'ممتاز' : gpa >= 3.00 ? 'جيد جداً' : gpa >= 2.00 ? 'جيد' : gpa >= 1.00 ? 'مقبول' : 'راسب';
    document.getElementById('calcGpaResult').textContent = gpa;
    document.getElementById('calcGradeResult').textContent = 'التقدير: ' + grade;
    document.getElementById('calcResult').style.display = 'block';
}

// ============================================
// LOGIN / REGISTER
// ============================================
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.querySelectorAll('.login-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        var id = this.getAttribute('data-ltab');
        document.querySelectorAll('.login-tab').forEach(function(t) { t.classList.remove('active'); });
        this.classList.add('active');
        document.querySelectorAll('.login-content').forEach(function(c) { c.classList.remove('active'); });
        document.getElementById('ltab-' + id).classList.add('active');
    });
});

function handleLogin(e) {
    e.preventDefault();
    var id = document.getElementById('loginId').value.trim();
    var pass = document.getElementById('loginPass').value;
    if (pass !== '123456') { alert('❌ كلمة المرور غير صحيحة\nكلمة المرور الافتراضية: 123456'); return; }
    var student = studentsDB[id];
    if (!student) {
        // Try by uniId
        for (var key in studentsDB) { if (studentsDB[key].uniId === id) { student = studentsDB[key]; break; } }
    }
    if (!student) { alert('❌ لم يتم العثور على حساب بهذا الرقم\nجرب أحد الأرقام التجريبية'); return; }
    // Login success
    closeAllModals();
    document.getElementById('userBar').style.display = 'block';
    document.getElementById('userBarName').textContent = student.name;
    navbar.style.top = '76px';
    // Show student data
    document.getElementById('nationalIdInput').value = student.nationalId;
    displayStudent(student);
    showSuccess('تسجيل دخول ناجح! 🎉', 'مرحباً ' + student.name + '، تم تسجيل دخولك بنجاح');
}

function handleRegister(e) {
    e.preventDefault();
    closeAllModals();
    showSuccess('تم إنشاء الحساب! 📝', 'تم إنشاء حسابك بنجاح. يمكنك الآن تسجيل الدخول');
}

function logoutUser() {
    document.getElementById('userBar').style.display = 'none';
    navbar.style.top = '40px';
    closeResult();
    showSuccess('تم تسجيل الخروج', 'تم تسجيل خروجك بنجاح. نراك قريباً! 👋');
}

// ============================================
// MODALS
// ============================================
function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(function(m) { m.classList.remove('active'); });
    document.body.style.overflow = '';
}

function showSuccess(title, msg) {
    document.getElementById('successTitle').textContent = title;
    document.getElementById('successMsg').textContent = msg;
    document.getElementById('successModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(function(m) {
    m.addEventListener('click', function(e) { if (e.target === m) closeAllModals(); });
});

// Close on Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeAllModals(); mobileToggle.classList.remove('active'); navLinks.classList.remove('active'); }
});

// ============================================
// CONTACT FORM
// ============================================
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showSuccess('تم الإرسال! 📨', 'تم استلام رسالتك بنجاح. سنرد عليك قريباً');
    this.reset();
});

// ============================================
// NATIONAL ID INPUT - NUMBERS ONLY
// ============================================
document.getElementById('nationalIdInput').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Enter key search
document.getElementById('nationalIdInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchStudent();
});

// ============================================
// STAGGERED ANIMATIONS
// ============================================
function stagger(sel, d) { document.querySelectorAll(sel).forEach(function(el, i) { el.style.transitionDelay = (i * d) + 's'; }); }
stagger('.gallery-item', 0.05);
stagger('.dept-card', 0.1);
stagger('.news-card', 0.1);
