/* ============================================
   Mohamed Elsayed - Portfolio JavaScript
   Bilingual (EN/AR), Theme Toggle, Animations
   ============================================ */

// ---- Translations ----
const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Available for opportunities",
    "hero.greeting": "Hi, I'm",
    "hero.description": 'Passionate Frontend Developer with <strong>2+ years</strong> of experience building scalable web applications using <strong>Angular</strong>. I craft clean, performant, and user-friendly interfaces for complex business systems.',
    "hero.viewWork": "View My Work",
    "hero.getInTouch": "Get In Touch",
    "hero.downloadCV": "Download CV",
    "hero.stat1": "Years Experience",
    "hero.stat2": "Projects Delivered",
    "hero.stat3": "Performance Boost",
    "hero.scroll": "Scroll Down",

    // About
    "about.tag": "Get to know me",
    "about.titleStart": "About",
    "about.titleEnd": "Me",
    "about.p1": 'I\'m a <strong>Frontend Developer</strong> based in <strong>Cairo, Egypt</strong>, specializing in building scalable, high-performance web applications with <strong>Angular</strong> and modern frontend technologies.',
    "about.p2": 'With over <strong>2 years of professional experience</strong> at <strong>It Plus Programming Solutions</strong>, I\'ve delivered 9+ complex ERP and business systems. I\'m passionate about writing clean, maintainable code and optimizing performance &mdash; achieving a <strong>30% load time improvement</strong> through lazy loading and code optimization.',
    "about.p3": 'I also build <strong>backend systems using PHP</strong> with AI-assisted development. My prior background in <strong>accounting and financial auditing</strong> gives me a strong understanding of business logic &mdash; a real advantage when building ERP and financial systems.',
    "about.location": "Location",
    "about.locationVal": "Cairo, Egypt",
    "about.company": "Company",
    "about.background": "Background",
    "about.backgroundVal": "Finance → Tech",
    "about.specialty": "Specialty",
    "about.specialtyVal": "Angular / ERP Systems",

    // Skills
    "skills.tag": "What I work with",
    "skills.titleStart": "Technical",
    "skills.titleEnd": "Skills",
    "skills.frontend": "Frontend Development",
    "skills.tools": "Tools & Styling",
    "skills.concepts": "Concepts & Patterns",
    "skills.backend": "Backend (AI-Assisted)",
    "skills.responsive": "Responsive Design",
    "skills.lazy": "Lazy Loading",
    "skills.state": "State Management",
    "skills.component": "Component Architecture",
    "skills.routing": "Routing & Guards",
    "skills.performance": "Performance Optimization",
    "skills.clean": "Clean Code",
    "skills.modular": "Modular Architecture",
    "skills.uiux": "UI/UX Collaboration",
    "skills.agile": "Agile / Teamwork",
    "skills.aiDev": "AI-Assisted Dev",

    // Experience
    "exp.tag": "My journey",
    "exp.titleStart": "Work",
    "exp.titleEnd": "Experience",
    "exp.current": "Current Position",
    "exp.role": "Applications Developer",
    "exp.date": "September 2023 — Present",
    "exp.d1": "Developed responsive Angular applications and implemented state management using NgRx",
    "exp.d2": 'Improved load performance by <strong>30%</strong> through lazy loading and code optimization',
    "exp.d3": "Collaborated with backend and UI/UX teams to enhance ERP systems",
    "exp.d4": "Maintained clean, modular, and scalable code following best practices",
    "exp.d5": "Built backend REST APIs using PHP with AI-assisted development tools",
    "exp.prev": "Previous Career",
    "exp.accRole": "Accounting & Financial Auditing",
    "exp.accCompany": "Audit & Tax Accounting Firms",
    "exp.accDate": "2021 — 2023",
    "exp.accSummary": "Worked in corporate auditing, tax accounting, and e-invoicing with the Egyptian Tax Authority. This financial background strengthens my ability to build accurate, business-aware ERP and financial systems.",

    // Projects
    "proj.tag": "What I've built",
    "proj.titleStart": "Featured",
    "proj.titleEnd": "Projects",
    "proj.all": "All Projects",
    "proj.erp": "ERP Systems",
    "proj.web": "Websites",
    "proj.backend": "Backend",

    "proj.loom.cat": "Construction ERP",
    "proj.loom.desc": "Comprehensive construction management system covering HR, Projects, Clients, Contractors, Custodies, Invoices, and more. Full-stack with Angular frontend and PHP backend.",

    "proj.clm.cat": "Education Platform",
    "proj.clm.title": "CLM - Language Education System",
    "proj.clm.desc": "Comprehensive LMS/ERP supporting multi-role users with lecture scheduling, Zoom integration, and advanced educational content management.",

    "proj.testat.cat": "Education ERP",
    "proj.testat.title": "Testat App & Website",
    "proj.testat.desc": "Educational ERP system for product and resource management. Built as both a web application and companion website with full admin capabilities.",

    "proj.ataa.cat": "Operations Planning",
    "proj.ataa.title": "Ataa Website & Admin",
    "proj.ataa.desc": "ERP system for operational planning in education with comprehensive admin dashboard, PDF report generation, and strategic goal management.",

    "proj.yalla.cat": "E-Commerce Dashboard",
    "proj.yalla.title": "YallaEshtary Dashboard",
    "proj.yalla.desc": "Major ERP dashboard enhancements including advanced delivery tracking with mapping/geographical zones and dynamic product management system.",

    "proj.abis.cat": "E-Commerce & Supply Chain",
    "proj.abis.desc": "ERP system for e-commerce and supply chain management. Handles product catalogs, inventory, orders, and logistics for a hypermarket chain.",

    "proj.faainex.cat": "Corporate Website",
    "proj.faainex.desc": "Corporate ERP website with full admin tools for managing business operations, content, and corporate communications.",

    "proj.epm.cat": "Dynamic Portfolio",
    "proj.epm.title": "EPM - Printing Machinery",
    "proj.epm.desc": "Dynamic portfolio website integrated with an Admin Dashboard for managing equipment listings and project showcases for a printing machinery company.",

    "proj.stride.cat": "Construction CMS",
    "proj.stride.title": "Stride - Construction Finishes",
    "proj.stride.desc": "Administrative CMS specialized in tracking and managing construction finishes projects and workflows with detailed progress monitoring.",

    "proj.itplusbe.cat": "Backend Development",
    "proj.itplusbe.title": "It Plus Backend API",
    "proj.itplusbe.desc": "Laravel-based backend API with real-time features (WebSockets), email integration, and comprehensive testing suite for the It Plus ERP platform.",

    "proj.opsbe.cat": "Backend Development",
    "proj.opsbe.title": "Ops & Loom Backend APIs",
    "proj.opsbe.desc": "PHP backend systems with JWT authentication, RESTful endpoints, PDF generation (mPDF), notification systems, and comprehensive database management.",

    // Certifications
    "cert.tag": "Education & Certificates",
    "cert.titleStart": "Certifications &",
    "cert.titleEnd": "Education",
    "cert.degree": "Bachelor of Commerce",
    "cert.uni": "Helwan University",
    "cert.dept": "Accounting Department • Class of 2021",
    "cert.frontend": "Frontend Development",
    "cert.profCert": "Professional Certificate",
    "cert.angular": "Angular Development",
    "cert.specCert": "Specialized Certificate",

    // Contact
    "contact.tag": "Let's connect",
    "contact.titleStart": "Get In",
    "contact.titleEnd": "Touch",
    "contact.subtitle": "I'm always open to new opportunities and interesting projects. Feel free to reach out!",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.yourName": "Your Name",
    "contact.yourEmail": "Your Email",
    "contact.subject": "Subject",
    "contact.yourMessage": "Your Message",
    "contact.send": "Send Message",

    // Footer
    "footer.text": "Designed & Built by Mohamed Elsayed",
    "footer.rights": "All rights reserved."
  },

  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عني",
    "nav.skills": "المهارات",
    "nav.experience": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.contact": "تواصل معي",

    // Hero
    "hero.badge": "متاح لفرص العمل",
    "hero.greeting": "مرحباً، أنا",
    "hero.description": 'مطور واجهات أمامية شغوف بخبرة تزيد عن <strong>سنتين</strong> في بناء تطبيقات ويب قابلة للتوسع باستخدام <strong>Angular</strong>. أقوم بإنشاء واجهات نظيفة وسريعة وسهلة الاستخدام لأنظمة الأعمال المعقدة.',
    "hero.viewWork": "شاهد أعمالي",
    "hero.getInTouch": "تواصل معي",
    "hero.downloadCV": "تحميل السيرة الذاتية",
    "hero.stat1": "سنوات خبرة",
    "hero.stat2": "مشروع منجز",
    "hero.stat3": "تحسين الأداء",
    "hero.scroll": "اسحب لأسفل",

    // About
    "about.tag": "تعرف عليّ",
    "about.titleStart": "نبذة",
    "about.titleEnd": "عني",
    "about.p1": 'أنا <strong>مطور واجهات أمامية</strong> مقيم في <strong>القاهرة، مصر</strong>، متخصص في بناء تطبيقات ويب عالية الأداء وقابلة للتوسع باستخدام <strong>Angular</strong> وتقنيات الواجهات الأمامية الحديثة.',
    "about.p2": 'بخبرة تزيد عن <strong>سنتين من العمل المهني</strong> في <strong>It Plus Programming Solutions</strong>، قمت بتسليم أكثر من 9 أنظمة ERP وأنظمة أعمال معقدة. أنا شغوف بكتابة كود نظيف وقابل للصيانة وتحسين الأداء &mdash; حيث حققت <strong>تحسين 30% في وقت التحميل</strong> من خلال التحميل الكسول وتحسين الكود.',
    "about.p3": 'أقوم أيضاً ببناء <strong>أنظمة باك إند باستخدام PHP</strong> بمساعدة أدوات الذكاء الاصطناعي. خلفيتي السابقة في <strong>المحاسبة والمراجعة المالية</strong> تمنحني فهماً عميقاً لمنطق الأعمال &mdash; وهي ميزة حقيقية عند بناء أنظمة ERP والأنظمة المالية.',
    "about.location": "الموقع",
    "about.locationVal": "القاهرة، مصر",
    "about.company": "الشركة",
    "about.background": "الخلفية",
    "about.backgroundVal": "مالية ← تقنية",
    "about.specialty": "التخصص",
    "about.specialtyVal": "Angular / أنظمة ERP",

    // Skills
    "skills.tag": "ما أعمل به",
    "skills.titleStart": "المهارات",
    "skills.titleEnd": "التقنية",
    "skills.frontend": "تطوير الواجهات الأمامية",
    "skills.tools": "الأدوات والتصميم",
    "skills.concepts": "المفاهيم والأنماط",
    "skills.backend": "الباك إند (بمساعدة AI)",
    "skills.responsive": "تصميم متجاوب",
    "skills.lazy": "التحميل الكسول",
    "skills.state": "إدارة الحالة",
    "skills.component": "هيكلة المكونات",
    "skills.routing": "التوجيه والحراسة",
    "skills.performance": "تحسين الأداء",
    "skills.clean": "كود نظيف",
    "skills.modular": "هيكلة معيارية",
    "skills.uiux": "تعاون UI/UX",
    "skills.agile": "أجايل / عمل جماعي",
    "skills.aiDev": "تطوير بمساعدة AI",

    // Experience
    "exp.tag": "مسيرتي المهنية",
    "exp.titleStart": "الخبرة",
    "exp.titleEnd": "العملية",
    "exp.current": "المنصب الحالي",
    "exp.role": "مطور تطبيقات",
    "exp.date": "سبتمبر 2023 — حتى الآن",
    "exp.d1": "تطوير تطبيقات Angular متجاوبة وتطبيق إدارة الحالة باستخدام NgRx",
    "exp.d2": 'تحسين أداء التحميل بنسبة <strong>30%</strong> من خلال التحميل الكسول وتحسين الكود',
    "exp.d3": "التعاون مع فرق الباك إند و UI/UX لتحسين أنظمة ERP",
    "exp.d4": "الحفاظ على كود نظيف ومعياري وقابل للتوسع وفقاً لأفضل الممارسات",
    "exp.d5": "بناء واجهات REST APIs للباك إند باستخدام PHP بأدوات التطوير المدعومة بالذكاء الاصطناعي",
    "exp.prev": "المسيرة السابقة",
    "exp.accRole": "المحاسبة والمراجعة المالية",
    "exp.accCompany": "مكاتب مراجعة ومحاسبة ضريبية",
    "exp.accDate": "2021 — 2023",
    "exp.accSummary": "عملت في مراجعة حسابات الشركات والمحاسبة الضريبية والفاتورة الإلكترونية مع مصلحة الضرائب المصرية. هذه الخلفية المالية تعزز قدرتي على بناء أنظمة ERP ومالية دقيقة ومتوافقة مع متطلبات الأعمال.",

    // Projects
    "proj.tag": "ما بنيته",
    "proj.titleStart": "المشاريع",
    "proj.titleEnd": "المميزة",
    "proj.all": "كل المشاريع",
    "proj.erp": "أنظمة ERP",
    "proj.web": "مواقع ويب",
    "proj.backend": "باك إند",

    "proj.loom.cat": "نظام ERP للبناء",
    "proj.loom.desc": "نظام شامل لإدارة البناء يغطي الموارد البشرية والمشاريع والعملاء والمقاولين والعهد والفواتير وأكثر. Full-stack بواجهة Angular وباك إند PHP.",

    "proj.clm.cat": "منصة تعليمية",
    "proj.clm.title": "CLM - نظام تعليم اللغات",
    "proj.clm.desc": "نظام LMS/ERP شامل يدعم مستخدمين متعددي الأدوار مع جدولة المحاضرات وتكامل Zoom وإدارة محتوى تعليمي متقدم.",

    "proj.testat.cat": "نظام ERP تعليمي",
    "proj.testat.title": "تطبيق وموقع تستات",
    "proj.testat.desc": "نظام ERP تعليمي لإدارة المنتجات والموارد. تم بناؤه كتطبيق ويب وموقع مرافق مع إمكانيات إدارية كاملة.",

    "proj.ataa.cat": "تخطيط العمليات",
    "proj.ataa.title": "موقع وإدارة عطاء",
    "proj.ataa.desc": "نظام ERP للتخطيط التشغيلي في التعليم مع لوحة تحكم إدارية شاملة وإنشاء تقارير PDF وإدارة الأهداف الاستراتيجية.",

    "proj.yalla.cat": "لوحة تحكم تجارة إلكترونية",
    "proj.yalla.title": "لوحة تحكم يلا اشتري",
    "proj.yalla.desc": "تحسينات كبيرة للوحة تحكم ERP تشمل تتبع توصيل متقدم مع خرائط ومناطق جغرافية وإدارة منتجات ديناميكية.",

    "proj.abis.cat": "تجارة إلكترونية وسلسلة توريد",
    "proj.abis.desc": "نظام ERP للتجارة الإلكترونية وإدارة سلسلة التوريد. يتعامل مع كتالوجات المنتجات والمخزون والطلبات والخدمات اللوجستية لسلسلة هايبر ماركت.",

    "proj.faainex.cat": "موقع شركات",
    "proj.faainex.desc": "موقع ERP للشركات مع أدوات إدارة كاملة لإدارة العمليات التجارية والمحتوى والاتصالات المؤسسية.",

    "proj.epm.cat": "بورتفوليو ديناميكي",
    "proj.epm.title": "EPM - آلات الطباعة",
    "proj.epm.desc": "موقع بورتفوليو ديناميكي متكامل مع لوحة تحكم إدارية لإدارة قوائم المعدات وعرض المشاريع لشركة آلات طباعة.",

    "proj.stride.cat": "نظام CMS للبناء",
    "proj.stride.title": "سترايد - تشطيبات البناء",
    "proj.stride.desc": "نظام CMS إداري متخصص في تتبع وإدارة مشاريع تشطيبات البناء وسير العمل مع مراقبة تقدم مفصلة.",

    "proj.itplusbe.cat": "تطوير باك إند",
    "proj.itplusbe.title": "It Plus Backend API",
    "proj.itplusbe.desc": "واجهة API للباك إند مبنية على Laravel مع ميزات الوقت الفعلي (WebSockets) وتكامل البريد الإلكتروني ومجموعة اختبارات شاملة لمنصة It Plus ERP.",

    "proj.opsbe.cat": "تطوير باك إند",
    "proj.opsbe.title": "Ops & Loom Backend APIs",
    "proj.opsbe.desc": "أنظمة باك إند PHP مع مصادقة JWT ونقاط نهاية RESTful وإنشاء PDF (mPDF) وأنظمة إشعارات وإدارة قواعد بيانات شاملة.",

    // Certifications
    "cert.tag": "التعليم والشهادات",
    "cert.titleStart": "الشهادات و",
    "cert.titleEnd": "التعليم",
    "cert.degree": "بكالوريوس تجارة",
    "cert.uni": "جامعة حلوان",
    "cert.dept": "قسم المحاسبة • دفعة 2021",
    "cert.frontend": "تطوير الواجهات الأمامية",
    "cert.profCert": "شهادة احترافية",
    "cert.angular": "تطوير Angular",
    "cert.specCert": "شهادة متخصصة",

    // Contact
    "contact.tag": "تواصل معي",
    "contact.titleStart": "ابقَ على",
    "contact.titleEnd": "تواصل",
    "contact.subtitle": "أنا دائماً منفتح على فرص جديدة ومشاريع مثيرة. لا تتردد في التواصل!",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
    "contact.yourName": "اسمك",
    "contact.yourEmail": "بريدك الإلكتروني",
    "contact.subject": "الموضوع",
    "contact.yourMessage": "رسالتك",
    "contact.send": "إرسال الرسالة",

    // Footer
    "footer.text": "تصميم وبناء محمد السيد",
    "footer.rights": "جميع الحقوق محفوظة."
  }
};

// Typewriter phrases per language
const typewriterPhrases = {
  en: [
    "Frontend Developer",
    "Angular Specialist",
    "ERP Systems Builder",
    "UI/UX Enthusiast",
    "Performance Optimizer"
  ],
  ar: [
    "مطور واجهات أمامية",
    "متخصص Angular",
    "مطور أنظمة ERP",
    "مهتم بتجربة المستخدم",
    "محسّن الأداء"
  ]
};

// ---- State ----
let currentLang = localStorage.getItem('portfolio-lang') || 'en';
let currentTheme = localStorage.getItem('portfolio-theme') || 'dark';

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initNavbar();
  initMobileNav();
  initScrollAnimations();
  initSkillBars();
  initCountUp();
  initProjectFilters();
  initContactForm();
  initBackToTop();
  initParticles();
  initCursorGlow();
  initTypewriter();
  initBadgeRepel();
});

// ---- Theme ----
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('themeToggle').addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
    initParticles(); // Reinit particles with new colors
  });
}

// ---- Language ----
function initLang() {
  applyLanguage(currentLang);
  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('portfolio-lang', currentLang);
    applyLanguage(currentLang);
    // Restart typewriter
    initTypewriter();
  });
}

function applyLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update toggle button text
  const langBtn = document.getElementById('langToggle');
  langBtn.querySelector('.lang-text').textContent = lang === 'en' ? 'AR' : 'EN';

  // Apply translations
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// ---- Typewriter ----
let typewriterInterval = null;
function initTypewriter() {
  if (typewriterInterval) clearInterval(typewriterInterval);

  const el = document.getElementById('typewriter');
  const phrases = typewriterPhrases[currentLang];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 80;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      speed = 40;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      speed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 400;
    }

    typewriterInterval = setTimeout(type, speed);
  }

  el.textContent = '';
  type();
}

// ---- Navbar ----
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section, .hero');

  window.addEventListener('scroll', () => {
    // Navbar background
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu
        document.getElementById('navMenu').classList.remove('active');
        document.getElementById('navToggle').classList.remove('active');
      }
    });
  });
}

// ---- Mobile Nav ----
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      toggle.classList.remove('active');
      menu.classList.remove('active');
    }
  });
}

// ---- Scroll Animations ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- Skill Bars ----
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-progress');
        bars.forEach(bar => {
          const progress = bar.getAttribute('data-progress');
          bar.style.width = progress + '%';
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-category').forEach(el => observer.observe(el));
}

// ---- Count Up ----
function initCountUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-number');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-count'));
          let current = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, 30);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) observer.observe(statsEl);
}

// ---- Project Filters ----
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeUp 0.5s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// ---- Contact Form (Web3Forms Email + WhatsApp) ----
const WEB3FORMS_KEY = '4242e461-4080-407c-a1c9-4ac858fbed33';

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const btn = form.querySelector('.btn-submit');
    const originalText = btn.innerHTML;

    // Loading state
    btn.innerHTML = currentLang === 'ar'
      ? '<span>جاري الإرسال...</span> <i class="fas fa-spinner fa-spin"></i>'
      : '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    // 1) Send email via Web3Forms
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          subject,
          message,
          from_name: 'Portfolio Contact Form'
        })
      });
    } catch (err) {
      console.warn('Email send failed:', err);
    }

    // 2) Open WhatsApp with message
    const waText = `Hello Mohamed, I'm *${name}*\nEmail: ${email}\n\n*${subject}*\n${message}`;
    window.open(`https://wa.me/201156352207?text=${encodeURIComponent(waText)}`, '_blank');

    // Success feedback
    btn.innerHTML = currentLang === 'ar'
      ? '<span>تم الإرسال!</span> <i class="fas fa-check"></i>'
      : '<span>Message Sent!</span> <i class="fas fa-check"></i>';
    btn.style.background = 'linear-gradient(135deg, #34d399, #059669)';
    btn.disabled = false;

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ---- Back to Top ----
function initBackToTop() {
  const btn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- Particles ----
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const particleColor = isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(79, 70, 229, 0.15)';
  const lineColor = isDark ? 'rgba(99, 102, 241, 0.08)' : 'rgba(79, 70, 229, 0.05)';

  const particles = [];
  const particleCount = Math.min(60, Math.floor(window.innerWidth / 20));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1
    });
  }

  let animId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[j].x - p.x;
        const dy = particles[j].y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    animId = requestAnimationFrame(animate);
  }

  // Cancel previous animation if exists
  if (window._particleAnimId) cancelAnimationFrame(window._particleAnimId);
  animate();
  window._particleAnimId = animId;

  // Resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ---- Cursor Glow ----
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (window.innerWidth < 768) return;

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.classList.add('active');
  });

  document.addEventListener('mouseleave', () => {
    glow.classList.remove('active');
  });
}

// ---- Badge Repel Effect ----
function initBadgeRepel() {
  const badges = document.querySelectorAll('.floating-badge[data-repel]');
  if (window.innerWidth < 768 || !badges.length) return;

  const REPEL_RADIUS = 130;
  const REPEL_FORCE = 70;

  badges.forEach(badge => {
    badge._resetTimer = null;
  });

  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  heroSection.addEventListener('mousemove', (e) => {
    badges.forEach(badge => {
      const rect = badge.getBoundingClientRect();
      const badgeCenterX = rect.left + rect.width / 2;
      const badgeCenterY = rect.top + rect.height / 2;

      const dx = badgeCenterX - e.clientX;
      const dy = badgeCenterY - e.clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < REPEL_RADIUS) {
        const angle = Math.atan2(dy, dx);
        const force = (1 - distance / REPEL_RADIUS) * REPEL_FORCE;
        const moveX = Math.cos(angle) * force;
        const moveY = Math.sin(angle) * force;

        badge.classList.add('repelled');
        badge.style.translate = `${moveX}px ${moveY}px`;
        badge.style.scale = '1.2';

        if (badge._resetTimer) clearTimeout(badge._resetTimer);

        badge._resetTimer = setTimeout(() => {
          badge.style.translate = '0 0';
          badge.style.scale = '1';
          setTimeout(() => {
            badge.classList.remove('repelled');
          }, 350);
        }, 600);
      }
    });
  });
}
