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
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.description": "<strong>Software Engineer &amp; Team Lead</strong> who started as an <strong>accountant</strong>. I lead the team and product behind <strong>Bonyan ERP</strong> &mdash; a multi-tenant SaaS with 160+ company workspaces &mdash; and designed its double-entry accounting core. Web, backend and mobile, for clients in Egypt and Saudi Arabia.",
    "hero.viewWork": "View My Work",
    "hero.getInTouch": "Get In Touch",
    "hero.downloadCV": "Download CV",
    "hero.stat1": "Years Experience",
    "hero.stat2": "Projects Delivered",
    "hero.stat3": "Companies on Bonyan",
    "hero.stat4": "Mobile Apps Shipped",
    "hero.scroll": "Scroll Down",

    // About
    "about.tag": "Get to know me",
    "about.titleStart": "About",
    "about.titleEnd": "Me",
    "about.p1": "I'm a <strong>Software Engineer and Team Lead</strong> based in <strong>Cairo, Egypt</strong>. At <strong>It Plus Programming Solutions</strong> I lead the development team and the product for <strong>Bonyan ERP</strong>: I talk to subscribers, turn what they need into specs, and ship it across the stack &mdash; Angular, PHP/Laravel and MySQL, with Flutter on mobile.",
    "about.p2": "I came to code from <strong>accounting</strong> &mdash; a Bachelor of Commerce in Accounting from Helwan University, then two years of audit, tax and e-invoicing work. That is why Bonyan's chart of accounts, general ledger, period closing and financial statements read the way an auditor expects.",
    "about.p3": "In 3+ years I've delivered <strong>15+</strong> ERP, education and e-commerce systems for clients in <strong>Egypt and Saudi Arabia</strong>, including two production Flutter apps for a Saudi education authority. I'm at my best where business rules are dense: money that must reconcile, permission matrices, and <strong>Arabic-first RTL</strong> interfaces.",
    "about.location": "Location",
    "about.locationVal": "Cairo, Egypt",
    "about.company": "Company",
    "about.background": "Background",
    "about.backgroundVal": "Finance → Tech",
    "about.specialty": "Specialty",
    "about.specialtyVal": "ERP &amp; Accounting Systems",

    // Skills
    "skills.tag": "What I work with",
    "skills.titleStart": "Technical",
    "skills.titleEnd": "Skills",
    "skills.frontend": "Frontend Development",
    "skills.mobile": "Mobile Development",
    "skills.tools": "Tools &amp; Workflow",
    "skills.concepts": "Concepts & Patterns",
    "skills.backend": "Backend Development",
    "skills.restJwt": "REST APIs &amp; JWT Auth",
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
    "skills.cleanArch": "Clean Architecture",
    "skills.rbac": "Multi-Role Authorization",
    "skills.rtl": "RTL &amp; Arabic i18n",
    "skills.ssr": "SSR &amp; Technical SEO",
    "skills.push": "Push Notifications",
    "skills.aiDev": "AI-Augmented Dev",
    "skills.domain": "ERP &amp; Accounting Domain",
    "skills.dm1": "Chart of Accounts",
    "skills.dm2": "Double-Entry General Ledger",
    "skills.dm3": "Financial Statements",
    "skills.dm4": "Period &amp; Year-End Closing",
    "skills.dm5": "Fixed Assets (IAS 16/36)",
    "skills.dm6": "Inventory Costing (IAS 2)",
    "skills.dm7": "Procure-to-Pay &amp; 3-Way Matching",
    "skills.dm8": "VAT &amp; Withholding Tax",
    "skills.dm9": "Payroll Accruals",
    "skills.dm10": "Multi-Tenant SaaS",
    "skills.lead": "Leadership &amp; Product",
    "skills.ld1": "Team Leadership",
    "skills.ld2": "Product Management",
    "skills.ld3": "Customer Feedback &amp; Discovery",
    "skills.ld4": "Specs &amp; Roadmaps",
    "skills.ld5": "Code Review",
    "skills.ld6": "Release Management",

    // Experience
    "exp.tag": "My journey",
    "exp.titleStart": "Work",
    "exp.titleEnd": "Experience",
    "exp.current": "Current Position",
    "exp.role": "Software Engineer &rarr; Team Lead &amp; Product Manager, Bonyan ERP",
    "exp.date": "September 2023 — Present",
    "exp.b1": "Lead the development team and own the product for <strong>Bonyan ERP</strong>, a multi-tenant SaaS (one database per company) with <strong>160+ company workspaces</strong> &mdash; roadmap, specs, code review and releases",
    "exp.b6": "Built <strong>bonyan-erp.com</strong>, the product's bilingual <strong>Next.js</strong> website where every customer starts: a tour of the real system, cloud and self-hosted pricing, free-trial sign-up and a public changelog of every release",
    "exp.b2": "Work directly with subscribers to collect feedback and feature requests, shipping them as per-company options so one product fits different activities and company structures",
    "exp.b3": "Designed and built Bonyan's accounting core: a <strong>5-level chart of accounts</strong>, a double-entry general ledger fed by ~50 automatic posting rules, and full financial statements &mdash; balance sheet, income statement, cash flow, equity changes and trial balance",
    "exp.b4": "Added period locking and atomic year-end close, IAS 16/36 fixed assets, IAS 2 weighted-average inventory, and procure-to-pay with three-way matching",
    "exp.b5": "Upgraded the frontend from <strong>Angular 8 to 21</strong> in 13 incremental steps with no broken routes, and built an MCP gateway that lets AI assistants work inside a company's data under OAuth 2.0 + PKCE and human approval",
    "exp.d2": "Shipped <strong>two production Flutter apps</strong> for a Saudi education authority using BLoC, clean architecture and Firebase push notifications",
    "exp.d3": "Improved load performance by <strong>30%</strong> through lazy loading and code optimization",
    "exp.d6": "Designed <strong>Arabic-first RTL</strong> interfaces and multi-role permission systems spanning 30+ distinct user roles",
    "exp.d7": "Led technical SEO on a multilingual site of <strong>~4,500 URLs</strong> &mdash; canonical/hreflang, Core Web Vitals, structured data and redirect strategy",
    "exp.prev": "Previous Career",
    "exp.accRole": "Accounting & Financial Auditing",
    "exp.accCompany": "Audit & Tax Accounting Firms",
    "exp.accDate": "2021 — 2023",
    "exp.accSummary": "Corporate auditing, tax accounting and e-invoicing with the Egyptian Tax Authority, after a B.Com in Accounting. It is the background I built Bonyan's accounting on &mdash; I know what an auditor looks for in a ledger because I used to be the one looking.",

    // Projects
    "proj.subtitle": "Web platforms, mobile apps and backend systems delivered at It Plus Programming Solutions",
    "proj.tag": "What I've built",
    "proj.titleStart": "Featured",
    "proj.titleEnd": "Projects",
    "proj.all": "All Projects",
    "proj.erp": "ERP Systems",
    "proj.web": "Websites",
    "proj.mobile": "Mobile Apps",
    "proj.backend": "Backend",
    "proj.tag.mobile": "Mobile App",
    "proj.tag.private": "Private System",
    "proj.tag.case": "Case study",
    "proj.tag.fb": "Facebook",
    "proj.tag.edu": "Education Platform",
    "proj.tag.live": "Live Site",
    "proj.qmsapp.cat": "Mobile App &mdash; Education Quality",
    "proj.qmsapp.title": "QMS Ataa &mdash; Quality Management App",
    "proj.qmsapp.desc": "Flutter app for a Saudi education authority's quality system. 18 feature modules covering school visits, standards, indicators, evaluations and corrective plans &mdash; with role-scoped access across a multi-membership matrix, Arabic-first RTL, push notifications, and comment threads carrying image, video and voice attachments.",
    "proj.opsapp.cat": "Mobile App &mdash; Operational Planning",
    "proj.opsapp.title": "OPS Ataa &mdash; Operational Plan App",
    "proj.opsapp.desc": "A second Flutter app on the same platform, sharing the QMS design system under fully separate branding. Covers the whole planning chain &mdash; strategic goals, sub-goals, work plans and indicators &mdash; plus quarterly and annual evaluations, PDF export, and approval states that resolve differently depending on who is looking.",
    "proj.itplusweb.cat": "Corporate Platform &mdash; SSR",
    "proj.itplusweb.title": "It Plus &mdash; Corporate Website",
    "proj.itplusweb.desc": "Angular 19 platform with server-side rendering behind Express and PM2, serving a multilingual catalog of services, hosting plans, domains and campaigns. I engineered the technical SEO across roughly 4,500 URLs &mdash; canonical and hreflang, structured data, redirect strategy &mdash; alongside an automated WebP pipeline and per-language prerendering.",
    "proj.orabi.cat": "Business Website &mdash; Accounting &amp; Tax",
    "proj.orabi.title": "Orabi Accounting Group",
    "proj.orabi.desc": "Bilingual Arabic-English website for Orabi Accounting Group, with responsive RTL/LTR design, technical SEO foundations, structured data, an optimized media archive, and deployment on a custom domain.",
    "proj.itplusdash.cat": "Admin Dashboard &mdash; Hosting &amp; Domains",
    "proj.itplusdash.title": "It Plus Dashboard",
    "proj.itplusdash.desc": "Back-office for the company's hosting and domain business: 40+ modules spanning orders, invoices, hosting plans, control panels, domains, products, coupons, currencies, payment methods, clients and ad campaigns &mdash; with ApexCharts reporting and rich-text content management throughout.",
    "proj.bonyan.cat": "SaaS Product &mdash; ERP &amp; Accounting",
    "proj.bonyan.desc": "Multi-tenant SaaS ERP for project-based companies, with 160+ company workspaces. I built its foundation and its website, bonyan-erp.com, now lead its team and product, and designed its accounting core &mdash; chart of accounts, double-entry ledger, period closing and financial statements &mdash; alongside fixed assets, inventory, purchasing and an AI (MCP) gateway.",

    "proj.loom.cat": "Construction ERP",
    "proj.loom.desc": "Construction management system I built from scratch &mdash; HR, projects, clients, contractors, custodies and invoices, with an Angular frontend and PHP backend. It became the foundation of Bonyan ERP.",

    "proj.clm.cat": "Education Platform",
    "proj.clm.title": "CLM - Language Education System",
    "proj.clm.desc": "Comprehensive LMS/ERP supporting multi-role users with lecture scheduling, Zoom integration, course management, payments, and subscription handling.",

    "proj.testat.cat": "Education ERP",
    "proj.testat.title": "Testat App & Website",
    "proj.testat.desc": "Educational ERP system for product/resource management. Enables teachers to create exams, print Bubble Sheets, and auto-grade with instant results and performance analytics.",

    "proj.ataa.cat": "Education Platform &mdash; Saudi Arabia",
    "proj.ataa.title": "Ataa Web Platform &amp; Admin",
    "proj.ataa.desc": "Dual-module platform for a Saudi education authority: a Quality Management System (QMS) for standards and school visits, and an Operational Planning System (OPS) with NgRx state management, admin dashboard, PDF reporting and strategic goal management. I later built both companion Flutter apps on top of it.",

    "proj.yalla.cat": "E-Commerce Dashboard",
    "proj.yalla.title": "YallaEshtary Dashboard",
    "proj.yalla.desc": "Major ERP dashboard enhancements, including advanced delivery tracking with mapping/geographical zones and dynamic product management.",

    "proj.abis.cat": "E-Commerce & Supply Chain",
    "proj.abis.desc": "ERP for e-commerce and supply chain management. Handles product catalogs, inventory, orders, and logistics for a hypermarket chain.",

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
    "proj.itplusbe.desc": "Laravel-based backend API with real-time features (WebSockets), email integration, and a comprehensive testing suite for the It Plus platform.",

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
    "cert.claude101": "Claude 101",
    "cert.claude101Detail": "AI Fundamentals • 2026",
    "cert.claudeCode": "Claude Code in Action",
    "cert.claudeCodeDetail": "AI-Assisted Development • 2026",

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
    "footer.text": "Designed & Built by Mohamed Mahmoud Elsayed Ahmed",
    "footer.lab": "Also on this domain: tools and games I built for fun",
    "footer.rights": "All rights reserved."
  },

  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عني",
    "nav.skills": "المهارات",
    "nav.experience": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.certifications": "الشهادات",
    "nav.contact": "تواصل معي",

    // Hero
    "hero.greeting": "مرحباً، أنا",
    "hero.description": "<strong>مهندس برمجيات وقائد فريق</strong> بدأ مسيرته <strong>محاسباً</strong>. أقود الفريق والمنتج خلف <strong>بنيان ERP</strong> &mdash; نظام SaaS متعدد الشركات بأكثر من 160 مساحة عمل &mdash; وصمّمت قلبه المحاسبي القائم على القيد المزدوج. ويب وباك إند وموبايل، لعملاء في مصر والسعودية.",
    "hero.viewWork": "شاهد أعمالي",
    "hero.getInTouch": "تواصل معي",
    "hero.downloadCV": "تحميل السيرة الذاتية",
    "hero.stat1": "سنوات خبرة",
    "hero.stat2": "مشروع منجز",
    "hero.stat3": "شركة على بنيان",
    "hero.stat4": "تطبيقات موبايل منشورة",
    "hero.scroll": "اسحب لأسفل",

    // About
    "about.tag": "تعرف عليّ",
    "about.titleStart": "نبذة",
    "about.titleEnd": "عني",
    "about.p1": "أنا <strong>مهندس برمجيات وقائد فريق</strong> مقيم في <strong>القاهرة، مصر</strong>. في <strong>It Plus Programming Solutions</strong> أقود فريق التطوير وأدير منتج <strong>بنيان ERP</strong>: أتواصل مع المشتركين، وأحوّل احتياجاتهم إلى مواصفات، وأنفّذها عبر كل الطبقات &mdash; Angular وPHP/Laravel وMySQL، وFlutter للموبايل.",
    "about.p2": "جئت إلى البرمجة من <strong>المحاسبة</strong> &mdash; بكالوريوس تجارة شعبة محاسبة من جامعة حلوان، ثم عامان في المراجعة والضرائب والفاتورة الإلكترونية. لهذا تُقرأ شجرة حسابات بنيان وأستاذه العام وإقفال فتراته وقوائمه المالية بالطريقة التي يتوقعها المراجع.",
    "about.p3": "خلال أكثر من 3 سنوات سلّمت <strong>أكثر من 15</strong> نظام ERP وتعليم وتجارة إلكترونية لعملاء في <strong>مصر والسعودية</strong>، من بينها تطبيقا Flutter في الإنتاج لجهة تعليمية سعودية. أكون في أفضل حالاتي حيث تتشابك قواعد العمل: أموال يجب أن تتطابق، ومصفوفات صلاحيات، وواجهات <strong>عربية أولاً بدعم RTL</strong>.",
    "about.location": "الموقع",
    "about.locationVal": "القاهرة، مصر",
    "about.company": "الشركة",
    "about.background": "الخلفية",
    "about.backgroundVal": "مالية ← تقنية",
    "about.specialty": "التخصص",
    "about.specialtyVal": "أنظمة ERP والمحاسبة",

    // Skills
    "skills.tag": "ما أعمل به",
    "skills.titleStart": "المهارات",
    "skills.titleEnd": "التقنية",
    "skills.frontend": "تطوير الواجهات الأمامية",
    "skills.mobile": "تطوير تطبيقات الموبايل",
    "skills.tools": "الأدوات وأسلوب العمل",
    "skills.concepts": "المفاهيم والأنماط",
    "skills.backend": "تطوير الباك إند",
    "skills.restJwt": "REST APIs ومصادقة JWT",
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
    "skills.cleanArch": "Clean Architecture",
    "skills.rbac": "صلاحيات متعددة الأدوار",
    "skills.rtl": "دعم RTL والعربية",
    "skills.ssr": "SSR وتحسين محركات البحث",
    "skills.push": "الإشعارات الفورية",
    "skills.aiDev": "تطوير معزّز بالذكاء الاصطناعي",
    "skills.domain": "مجال ERP والمحاسبة",
    "skills.dm1": "شجرة الحسابات",
    "skills.dm2": "الأستاذ العام والقيد المزدوج",
    "skills.dm3": "القوائم المالية",
    "skills.dm4": "إقفال الفترات ونهاية السنة",
    "skills.dm5": "الأصول الثابتة (IAS 16/36)",
    "skills.dm6": "تكلفة المخزون (IAS 2)",
    "skills.dm7": "دورة المشتريات والمطابقة الثلاثية",
    "skills.dm8": "ضريبة القيمة المضافة والخصم من المنبع",
    "skills.dm9": "استحقاق الرواتب",
    "skills.dm10": "SaaS متعدد الشركات",
    "skills.lead": "القيادة وإدارة المنتج",
    "skills.ld1": "قيادة الفريق",
    "skills.ld2": "إدارة المنتج",
    "skills.ld3": "ملاحظات العملاء واكتشاف احتياجاتهم",
    "skills.ld4": "المواصفات وخارطة الطريق",
    "skills.ld5": "مراجعة الكود",
    "skills.ld6": "إدارة الإصدارات",

    // Experience
    "exp.tag": "مسيرتي المهنية",
    "exp.titleStart": "الخبرة",
    "exp.titleEnd": "العملية",
    "exp.current": "المنصب الحالي",
    "exp.role": "مهندس برمجيات &larr; قائد فريق ومدير منتج، بنيان ERP",
    "exp.date": "سبتمبر 2023 — حتى الآن",
    "exp.b1": "أقود فريق التطوير وأدير منتج <strong>بنيان ERP</strong>، نظام SaaS متعدد الشركات (قاعدة بيانات لكل شركة) بأكثر من <strong>160 مساحة عمل</strong> &mdash; خارطة الطريق والمواصفات ومراجعة الكود والإصدارات",
    "exp.b6": "بنيت <strong>bonyan-erp.com</strong>، الموقع التعريفي للمنتج بـ<strong>Next.js</strong> باللغتين، ومنه يبدأ كل عميل: جولة في النظام الحقيقي، وأسعار السحابي والاستضافة الذاتية، والتسجيل في التجربة المجانية، وسجل عام لكل إصدار",
    "exp.b2": "أتواصل مباشرة مع المشتركين لجمع ملاحظاتهم وطلباتهم، وأنفّذها كخيارات قابلة للتخصيص لكل شركة ليناسب منتج واحد اختلاف الأنشطة وهياكل الشركات",
    "exp.b3": "صمّمت وبنيت القلب المحاسبي لبنيان: <strong>شجرة حسابات من 5 مستويات</strong>، وأستاذ عام بالقيد المزدوج تغذّيه نحو 50 قاعدة ترحيل تلقائي، وقوائم مالية كاملة &mdash; الميزانية وقائمة الدخل والتدفقات النقدية والتغير في حقوق الملكية وميزان المراجعة",
    "exp.b4": "أضفت إقفال الفترات وإقفال نهاية السنة، والأصول الثابتة وفق IAS 16/36، والمخزون بالمتوسط المرجّح وفق IAS 2، ودورة المشتريات بالمطابقة الثلاثية",
    "exp.b5": "رقّيت الواجهة من <strong>Angular 8 إلى 21</strong> في 13 خطوة متدرجة دون كسر أي مسار، وبنيت بوابة MCP تتيح لمساعدي الذكاء الاصطناعي العمل على بيانات الشركة بأمان عبر OAuth 2.0 + PKCE وموافقة بشرية",
    "exp.d2": "إطلاق <strong>تطبيقَي موبايل في الإنتاج</strong> بـFlutter لجهة تعليمية سعودية باستخدام BLoC وClean Architecture وإشعارات Firebase",
    "exp.d3": "تحسين زمن التحميل بنسبة <strong>30%</strong> عبر التحميل الكسول وتحسين الكود",
    "exp.d6": "تصميم واجهات <strong>عربية أولاً بدعم RTL</strong> وأنظمة صلاحيات تغطي أكثر من 30 دوراً مختلفاً",
    "exp.d7": "قيادة الـ<strong>SEO</strong> التقني لموقع متعدد اللغات بحوالي <strong>4,500 رابط</strong> &mdash; canonical وhreflang وCore Web Vitals والبيانات المنظمة واستراتيجية التحويلات",
    "exp.prev": "المسيرة السابقة",
    "exp.accRole": "المحاسبة والمراجعة المالية",
    "exp.accCompany": "مكاتب مراجعة ومحاسبة ضريبية",
    "exp.accDate": "2021 — 2023",
    "exp.accSummary": "مراجعة حسابات الشركات والمحاسبة الضريبية والفاتورة الإلكترونية مع مصلحة الضرائب المصرية، بعد بكالوريوس تجارة شعبة محاسبة. هذه هي الخلفية التي بنيت عليها محاسبة بنيان &mdash; أعرف ما يبحث عنه المراجع في الأستاذ العام لأنني كنت يوماً من يبحث.",

    // Projects
    "proj.subtitle": "منصات ويب وتطبيقات موبايل وأنظمة باك إند نُفّذت خلال عملي في It Plus Programming Solutions",
    "proj.tag": "ما بنيته",
    "proj.titleStart": "المشاريع",
    "proj.titleEnd": "المميزة",
    "proj.all": "كل المشاريع",
    "proj.erp": "أنظمة ERP",
    "proj.web": "مواقع ويب",
    "proj.mobile": "تطبيقات موبايل",
    "proj.backend": "باك إند",
    "proj.tag.mobile": "تطبيق موبايل",
    "proj.tag.private": "نظام خاص",
    "proj.tag.case": "دراسة حالة",
    "proj.tag.fb": "فيسبوك",
    "proj.tag.edu": "منصة تعليمية",
    "proj.tag.live": "الموقع المباشر",
    "proj.qmsapp.cat": "تطبيق موبايل &mdash; جودة التعليم",
    "proj.qmsapp.title": "QMS عطاء &mdash; تطبيق إدارة الجودة",
    "proj.qmsapp.desc": "تطبيق Flutter لنظام الجودة الخاص بجهة تعليمية سعودية. 18 وحدة وظيفية تغطي الزيارات المدرسية والمعايير والمؤشرات والتقييمات والخطط التصحيحية &mdash; مع صلاحيات مرتبطة بالدور عبر مصفوفة عضويات متعددة، وواجهة عربية أولاً بدعم RTL، وإشعارات فورية، وتعليقات تحمل مرفقات صور وفيديو وتسجيلات صوتية.",
    "proj.opsapp.cat": "تطبيق موبايل &mdash; التخطيط التشغيلي",
    "proj.opsapp.title": "OPS عطاء &mdash; تطبيق الخطة التشغيلية",
    "proj.opsapp.desc": "تطبيق Flutter ثانٍ على المنصة نفسها، يشارك QMS نظام التصميم مع هوية منفصلة تماماً. يغطي سلسلة التخطيط كاملة &mdash; الأهداف الاستراتيجية والأهداف الفرعية وخطط العمل والمؤشرات &mdash; بالإضافة إلى التقييمات الربعية والسنوية وتصدير PDF وحالات اعتماد تختلف نتيجتها باختلاف من ينظر إليها.",
    "proj.itplusweb.cat": "منصة شركات &mdash; SSR",
    "proj.itplusweb.title": "It Plus &mdash; الموقع المؤسسي",
    "proj.itplusweb.desc": "منصة Angular 19 بعرض من جانب الخادم (SSR) خلف Express وPM2، تقدّم كتالوجاً متعدد اللغات للخدمات وخطط الاستضافة والدومينات والحملات. تولّيت هندسة الـSEO التقني عبر حوالي 4,500 رابط &mdash; canonical وhreflang والبيانات المنظمة واستراتيجية التحويلات &mdash; إلى جانب خط إنتاج تلقائي لصور WebP وتوليد صفحات مسبق لكل لغة.",
    "proj.orabi.cat": "موقع أعمال &mdash; محاسبة وضرائب",
    "proj.orabi.title": "مجموعة عرابي المحاسبية",
    "proj.orabi.desc": "موقع ثنائي اللغة لمجموعة عرابي المحاسبية، بتصميم متجاوب يدعم العربية والإنجليزية، وتجهيزات SEO تقنية، وبيانات منظمة، وأرشيف لقاءات إعلامية محسن، مع نشره على دومين خاص.",
    "proj.itplusdash.cat": "لوحة تحكم &mdash; استضافة ودومينات",
    "proj.itplusdash.title": "لوحة تحكم It Plus",
    "proj.itplusdash.desc": "النظام الإداري لأعمال الاستضافة والدومينات في الشركة: أكثر من 40 وحدة تشمل الطلبات والفواتير وخطط الاستضافة ولوحات التحكم والدومينات والمنتجات والكوبونات والعملات وطرق الدفع والعملاء والحملات الإعلانية &mdash; مع تقارير ApexCharts وإدارة محتوى بمحررات نصية متقدمة.",
    "proj.bonyan.cat": "منتج SaaS &mdash; ERP ومحاسبة",
    "proj.bonyan.desc": "نظام ERP سحابي متعدد الشركات للشركات القائمة على المشاريع، بأكثر من 160 مساحة عمل. بنيت أساسه وموقعه التعريفي، وأقود اليوم فريقه وأدير منتجه، وصمّمت قلبه المحاسبي &mdash; شجرة الحسابات والأستاذ العام بالقيد المزدوج وإقفال الفترات والقوائم المالية &mdash; إلى جانب الأصول الثابتة والمخزون والمشتريات وبوابة ذكاء اصطناعي (MCP).",

    "proj.loom.cat": "نظام ERP للبناء",
    "proj.loom.desc": "نظام لإدارة شركات المقاولات بنيته من الصفر &mdash; الموارد البشرية والمشاريع والعملاء والمقاولون والعهد والفواتير، بواجهة Angular وباك إند PHP. وأصبح أساس بنيان ERP.",

    "proj.clm.cat": "منصة تعليمية",
    "proj.clm.title": "CLM - نظام تعليم اللغات",
    "proj.clm.desc": "نظام LMS/ERP شامل يدعم مستخدمين متعددي الأدوار مع جدولة المحاضرات وتكامل Zoom وإدارة الدورات والمدفوعات والاشتراكات.",

    "proj.testat.cat": "نظام ERP تعليمي",
    "proj.testat.title": "تطبيق وموقع تستات",
    "proj.testat.desc": "نظام ERP تعليمي لإدارة المنتجات والموارد. يمكّن المعلمين من إنشاء اختبارات وطباعة Bubble Sheets والتصحيح التلقائي مع نتائج فورية وتحليلات أداء.",

    "proj.ataa.cat": "منصة تعليمية &mdash; السعودية",
    "proj.ataa.title": "منصة عطاء والإدارة",
    "proj.ataa.desc": "منصة ثنائية الوحدات لجهة تعليمية سعودية: نظام إدارة الجودة (QMS) للمعايير والزيارات المدرسية، ونظام التخطيط التشغيلي (OPS) مع إدارة الحالة بـNgRx ولوحة تحكم إدارية وتقارير PDF وإدارة الأهداف الاستراتيجية. وقد بنيت لاحقاً تطبيقَي Flutter المرافقين لها.",

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
    "proj.itplusbe.desc": "واجهة API للباك إند مبنية على Laravel مع ميزات الوقت الفعلي (WebSockets) وتكامل البريد الإلكتروني ومجموعة اختبارات شاملة لمنصة It Plus.",

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
    "cert.claude101": "Claude 101",
    "cert.claude101Detail": "أساسيات الذكاء الاصطناعي • 2026",
    "cert.claudeCode": "Claude Code in Action",
    "cert.claudeCodeDetail": "التطوير بمساعدة الذكاء الاصطناعي • 2026",

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
    "footer.text": "تصميم وبناء محمد محمود السيد أحمد",
    "footer.lab": "على نفس الدومين: أدوات وألعاب صنعتها",
    "footer.rights": "جميع الحقوق محفوظة."
  }
};

// Typewriter phrases per language
const typewriterPhrases = {
  en: [
    "Software Engineer",
    "Team Lead & Product Manager",
    "Accountant turned Engineer",
    "ERP & Accounting Systems",
    "Web · Backend · Mobile"
  ],
  ar: [
    "مهندس برمجيات",
    "قائد فريق ومدير منتج",
    "من المحاسبة إلى البرمجة",
    "أنظمة ERP والمحاسبة",
    "ويب · باك إند · موبايل"
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
  initProjectModal();
  initImageFallbacks();
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

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
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
      scrollTicking = false;
    });
  }, { passive: true });

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

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      toggle.focus();
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

// ---- Project Modal ----
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDescription = document.getElementById('modalDescription');
  const modalTech = document.getElementById('modalTech');
  const modalLiveBtn = document.getElementById('modalLiveBtn');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const imageLoader = modal.querySelector('.modal-image-loader');
  const imageFallback = modal.querySelector('.modal-image-fallback');

  // Fallback text based on language
  function fallbackText() {
    return currentLang === 'ar' ? 'لا توجد معاينة' : 'No Preview Available';
  }

  function openModal(card) {
    const title = card.querySelector('.project-title')?.textContent || '';
    const category = card.querySelector('.project-category')?.textContent || '';
    const desc = card.querySelector('.project-description')?.textContent || '';
    const techSpans = card.querySelectorAll('.project-tech span');
    const img = card.querySelector('.project-image img');
    const liveUrl = card.dataset.live;

    // Populate modal
    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalDescription.textContent = desc;

    // Tech tags
    modalTech.innerHTML = '';
    techSpans.forEach(t => {
      const span = document.createElement('span');
      span.textContent = t.textContent;
      modalTech.appendChild(span);
    });

    // Live button
    if (liveUrl) {
      modalLiveBtn.href = liveUrl;
      modalLiveBtn.style.display = 'inline-flex';
      const isCaseStudy = /^projects\//.test(liveUrl);
      modalLiveBtn.querySelector('span').textContent = isCaseStudy
        ? (currentLang === 'ar' ? 'اقرأ دراسة الحالة' : 'Read the case study')
        : (currentLang === 'ar' ? 'زيارة الموقع' : 'Visit Live Site');
    } else {
      modalLiveBtn.style.display = 'none';
    }

    // Image handling
    imageLoader.classList.remove('hidden');
    imageFallback.classList.remove('visible');
    imageFallback.querySelector('span').textContent = fallbackText();
    modalImage.classList.remove('loaded', 'error');

    if (img && img.src && !img.classList.contains('img-error')) {
      modalImage.src = img.src;
      modalImage.alt = img.alt || title;

      modalImage.onload = () => {
        modalImage.classList.add('loaded');
        imageLoader.classList.add('hidden');
      };

      modalImage.onerror = () => {
        modalImage.classList.add('error');
        imageLoader.classList.add('hidden');
        imageFallback.classList.add('visible');
      };
    } else {
      // No image (placeholder card)
      modalImage.src = '';
      modalImage.classList.add('error');
      imageLoader.classList.add('hidden');
      imageFallback.classList.add('visible');
    }

    // Show modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Click on project cards
  document.querySelectorAll('.project-card[role="button"]').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open modal if clicking on a live site link
      if (e.target.closest('a.project-link-tag')) return;
      openModal(card);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  // Close modal
  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

// ---- Broken Image Handler ----
function initImageFallbacks() {
  document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('error', function() {
      this.classList.add('img-error');
      this.style.display = 'none';
      // Show the placeholder if exists as sibling
      const placeholder = this.parentElement.querySelector('.project-placeholder');
      if (placeholder) {
        placeholder.style.display = 'flex';
      } else {
        // Create inline fallback
        const fallback = document.createElement('div');
        fallback.className = 'project-placeholder';
        fallback.setAttribute('aria-hidden', 'true');
        fallback.innerHTML = '<i class="fas fa-image"></i>';
        this.parentElement.insertBefore(fallback, this);
      }
    });

    // If image was already broken before listener attached
    if (img.complete && img.naturalWidth === 0 && img.src) {
      img.dispatchEvent(new Event('error'));
    }
  });
}

// ---- Contact Form (Web3Forms Email) ----
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
    const botcheck = document.getElementById('botcheck').checked;
    const btn = form.querySelector('.btn-submit');
    const originalText = btn.innerHTML;

    // Loading state
    btn.innerHTML = currentLang === 'ar'
      ? '<span>جاري الإرسال...</span> <i class="fas fa-spinner fa-spin"></i>'
      : '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    // Send email via Web3Forms
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          subject,
          message,
          botcheck,
          from_name: 'Portfolio Contact Form'
        })
      });
      const data = await res.json();

      if (data.success) {
        btn.innerHTML = currentLang === 'ar'
          ? '<span>تم الإرسال بنجاح!</span> <i class="fas fa-check"></i>'
          : '<span>Message Sent!</span> <i class="fas fa-check"></i>';
        btn.style.background = 'linear-gradient(135deg, #34d399, #059669)';
        form.reset();
      } else {
        btn.innerHTML = currentLang === 'ar'
          ? '<span>حدث خطأ، حاول مرة أخرى</span> <i class="fas fa-times"></i>'
          : '<span>Error, try again</span> <i class="fas fa-times"></i>';
        btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
      }
    } catch (err) {
      btn.innerHTML = currentLang === 'ar'
        ? '<span>حدث خطأ، حاول مرة أخرى</span> <i class="fas fa-times"></i>'
        : '<span>Error, try again</span> <i class="fas fa-times"></i>';
      btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    }

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
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
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- Particles ----
let _particleResizeHandler = null;
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const particleColor = isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(79, 70, 229, 0.15)';
  const lineColor = isDark ? 'rgba(99, 102, 241, 0.08)' : 'rgba(79, 70, 229, 0.05)';

  const isMobile = window.innerWidth < 768;
  if (isMobile) { canvas.style.display = 'none'; return; }

  const particles = [];
  const particleCount = Math.min(40, Math.floor(window.innerWidth / 30));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1
    });
  }

  // Cancel previous animation if exists
  if (window._particleAnimId) cancelAnimationFrame(window._particleAnimId);

  let isVisible = true;
  function animate() {
    if (!isVisible) { window._particleAnimId = requestAnimationFrame(animate); return; }

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

    window._particleAnimId = requestAnimationFrame(animate);
  }

  animate();

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    isVisible = !document.hidden;
  });

  // Remove old resize handler, add new one
  if (_particleResizeHandler) window.removeEventListener('resize', _particleResizeHandler);
  _particleResizeHandler = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', _particleResizeHandler);
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
