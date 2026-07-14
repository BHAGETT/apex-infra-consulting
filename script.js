/* ── Mobile nav ── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

window.closeMobileNav = function() {
    mobileNav.classList.remove('open');
};

/* ── Navbar scroll shadow ── */
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
        nav.style.background = 'rgba(6,8,15,0.97)';
    } else {
        nav.style.background = 'rgba(6,8,15,0.8)';
    }
});

/* ── Translations ── */
const translations = {
    en: {
        navHome: "Home", navServices: "Services", navAbout: "About",
        navAcademy: "Academy", navProducts: "Products", navResources: "Resources",
        navCta: "Get in Touch",
        heroBadge: "22+ Years Enterprise IT Experience",
        heroH1: "Enterprise IT\nInfrastructure.\nSecured.",
        heroP: "Global cloud migrations across 45 countries. Zero-trust architectures for Deutsche Bank, KONE GmbH, and Johnson & Johnson.",
        heroBtn: "Book Free Consultation",
        assessmentBtn: "15-Min Assessment →",
        servicesTitle: "Expertise & Services",
        srv1H: "Cloud Transitions & M365",
        srv1P: "Strategic migration paths for Microsoft 365 tenants, Azure AD integrations, SSO environments, and automated user lifecycle frameworks.",
        srv2H: "Endpoint Management",
        srv2P: "Device provisioning via Microsoft Autopilot, zero-trust compliance policies, and full fleet management with Intune and SCCM/MECM.",
        srv3H: "Infrastructure Hardening",
        srv3P: "MFA policies, Conditional Access, BitLocker encryption, resilient VDI architectures, and ZScaler secure remote access gateways.",
        srv4H: "Enterprise Networking",
        srv4P: "Secure Multi-VLAN switching, RADIUS infrastructure, AAA frameworks, and enterprise-grade Cisco and Aruba ecosystems.",
        srv5H: "IT Support — Onsite & Remote",
        srv5P: "1st, 2nd, and 3rd level helpdesk, on-site troubleshooting, scalable remote administration, and continuous uptime monitoring.",
        srv6H: "Citrix VDI & VMware",
        srv6P: "Citrix Virtual DaaS and VMware Horizon architectures for secure, centralized workspaces with datacenter hypervisor optimization.",
        productsTitle: "Templates & IT Checklists",
        p1Title: "Enterprise Zero-Trust Deployment Checklist",
        p1Desc: "Professional checklist for planning and validating Zero-Trust security deployments in enterprise environments.",
        p1Btn: "Buy Now →",
        p2Title: "Microsoft Intune Configuration Templates",
        p2Desc: "Ready-to-use endpoint management templates for Intune policies, compliance and configuration.",
        p2Btn: "Buy Now →",
        p3Title: "ISO 27001 Security Audit Spreadsheet",
        p3Desc: "Security audit workbook to help companies organize compliance checks and documentation.",
        p3Btn: "Buy Now →",
        academyTitle: "Apex IT Academy",
        academySub: "Hands-on IT labs with real enterprise equipment in Oestrich-Winkel. Learn from 22 years of field experience.",
        aboutTitle: "Senior IT Infrastructure Consultant",
        aboutP: "I am Faiz Ahmed Bhagett — Senior IT Infrastructure Consultant with a global track record across Germany, Sweden, Belgium, and the USA. Managing migrations across 45 countries for KONE GmbH, and engineering systems for Deutsche Bank and Johnson & Johnson. I build enterprise architectures focused on zero-trust, elite stability, and maximum uptime.",
        contactTitle: "Let's Build Something Secure.",
        lblName: "Your Name / Company",
        lblEmail: "Email Address",
        lblSolution: "Required Solution",
        lblMsg: "Message",
        btnSubmit: "Send Message →"
    },
    de: {
        navHome: "Startseite", navServices: "Dienstleistungen", navAbout: "Über mich",
        navAcademy: "Academy", navProducts: "Produkte", navResources: "Ressourcen",
        navCta: "Kontakt aufnehmen",
        heroBadge: "22+ Jahre Enterprise IT Erfahrung",
        heroH1: "Enterprise IT\nInfrastruktur.\nAbgesichert.",
        heroP: "Globale Cloud-Migrationen in 45 Ländern. Zero-Trust-Architekturen für Deutsche Bank, KONE GmbH und Johnson & Johnson.",
        heroBtn: "Kostenlose Beratung buchen",
        assessmentBtn: "15-Min Erstgespräch →",
        servicesTitle: "Expertise & Dienstleistungen",
        srv1H: "Cloud-Migrationen & M365",
        srv1P: "Strategische Migrationspfade für Microsoft 365-Mandanten, Azure AD-Integrationen und automatisierte Benutzerlebenszyklen.",
        srv2H: "Endpoint Management",
        srv2P: "Gerätebereitstellung via Autopilot, Zero-Trust-Richtlinien und Fleet-Management mit Intune und SCCM/MECM.",
        srv3H: "Infrastruktur-Härtung",
        srv3P: "MFA-Richtlinien, Conditional Access, BitLocker, VDI-Architekturen und ZScaler-Gateways.",
        srv4H: "Enterprise-Netzwerke",
        srv4P: "Multi-VLAN-Switching, RADIUS, AAA-Frameworks sowie Cisco- und Aruba-Ökosysteme.",
        srv5H: "IT-Support — Vor Ort & Remote",
        srv5P: "1st-, 2nd- und 3rd-Level Helpdesk, Vor-Ort-Troubleshooting und skalierbare Fernverwaltung.",
        srv6H: "Citrix VDI & VMware",
        srv6P: "Citrix Virtual DaaS und VMware Horizon für sichere, zentralisierte Arbeitsplätze und Hypervisor-Optimierung.",
        productsTitle: "Vorlagen & IT Checklisten",
        p1Title: "Enterprise Zero-Trust Deployment Checkliste",
        p1Desc: "Professionelle Checkliste zur Planung und Validierung von Zero-Trust-Deployments.",
        p1Btn: "Jetzt kaufen →",
        p2Title: "Microsoft Intune Konfigurationstemplates",
        p2Desc: "Sofort einsatzbereite Templates für Intune-Richtlinien und Compliance.",
        p2Btn: "Jetzt kaufen →",
        p3Title: "ISO 27001 Sicherheitsaudit-Tabellenblatt",
        p3Desc: "Audit-Arbeitsmappe zur Organisation von Compliance-Prüfungen und Dokumentation.",
        p3Btn: "Jetzt kaufen →",
        academyTitle: "Apex IT Academy",
        academySub: "Praxislabore mit echter Enterprise-Hardware in Oestrich-Winkel. 22 Jahre Felderfahrung.",
        aboutTitle: "Senior IT-Infrastruktur-Consultant",
        aboutP: "Ich bin Faiz Ahmed Bhagett — Senior IT-Infrastruktur-Consultant mit globalem Track Record in Deutschland, Schweden, Belgien und den USA. Migrationen in 45 Ländern für KONE GmbH, Systeme für Deutsche Bank und Johnson & Johnson.",
        contactTitle: "Lassen Sie uns etwas Sicheres bauen.",
        lblName: "Ihr Name / Unternehmen",
        lblEmail: "E-Mail-Adresse",
        lblSolution: "Gewünschte Lösung",
        lblMsg: "Nachricht",
        btnSubmit: "Nachricht senden →"
    }
};

window.setLanguage = function(lang) {
    const t = translations[lang];
    if (!t) return;
    const s = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

    s('nav-home', t.navHome);
    s('nav-services', t.navServices);
    s('nav-about', t.navAbout);
    s('nav-academy', t.navAcademy);
    s('nav-products', t.navProducts);
    s('nav-resources', t.navResources);
    s('nav-cta', t.navCta);
    s('hero-badge', t.heroBadge);
    s('hero-p', t.heroP);
    s('hero-btn', t.heroBtn);
    s('assessment-btn', t.assessmentBtn);
    s('services-title', t.servicesTitle);
    s('srv1-h', t.srv1H); s('srv1-p', t.srv1P);
    s('srv2-h', t.srv2H); s('srv2-p', t.srv2P);
    s('srv3-h', t.srv3H); s('srv3-p', t.srv3P);
    s('srv4-h', t.srv4H); s('srv4-p', t.srv4P);
    s('srv5-h', t.srv5H); s('srv5-p', t.srv5P);
    s('srv6-h', t.srv6H); s('srv6-p', t.srv6P);
    s('products-title', t.productsTitle);
    s('p1-title', t.p1Title); s('p1-desc', t.p1Desc); s('p1-btn', t.p1Btn);
    s('p2-title', t.p2Title); s('p2-desc', t.p2Desc); s('p2-btn', t.p2Btn);
    s('p3-title', t.p3Title); s('p3-desc', t.p3Desc); s('p3-btn', t.p3Btn);
    s('academy-title', t.academyTitle);
    s('academy-sub', t.academySub);
    s('about-title', t.aboutTitle);
    s('about-p', t.aboutP);
    s('contact-title', t.contactTitle);
    s('lbl-name', t.lblName);
    s('lbl-email', t.lblEmail);
    s('lbl-solution', t.lblSolution);
    s('lbl-msg', t.lblMsg);
    s('btn-submit', t.btnSubmit);
};

/* ── Scroll reveal ── */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
        if (el.isIntersecting) {
            el.target.style.opacity = '1';
            el.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.svc-card, .ac-card, .prod-card, .res-card, .stat-card, .tech-pill').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
