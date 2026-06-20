const translations = {
    en: {
        navHome: "Home", navServices: "Services", navAbout: "About", navContact: "Contact",
        heroH1: "Secure & Modern IT Infrastructure Services",
        heroP: "22+ Years of Enterprise IT Experience managing global cloud migrations across 45 countries for KONE GmbH via Remedyforce, Deutsche Bank, and Johnson & Johnson.",
        heroBtn: "Book Free Consultation", servicesTitle: "Expertise & Services",
        srv1H: "Cloud Transitions & M365", srv1P: "Strategic migration paths tailored for complex Microsoft 365 tenants and hybrid setups. Implement robust Azure AD (Entra ID) integrations to guarantee secure, single-sign-on (SSO) environments across your enterprise. Build automated user lifecycle frameworks to minimize administrative overhead while maximizing cloud ROI and data compliance.",
        srv2H: "Endpoint Management", srv2P: "Streamline device provisioning using advanced modern frameworks like Microsoft Autopilot and automated imaging. We engineer and enforce zero-trust compliance, configuration, and app protection policies across your entire fleet. Seamlessly manage, patch, and monitor corporate endpoints using tailored Microsoft Intune and SCCM/MECM hybrid technologies.",
        srv3H: "Infrastructure Hardening", srv3P: "Thoroughly evaluate and fortify your entire digital footprint against modern, sophisticated cyber threats. Implement strict Multi-Factor Authentication (MFA) policies, Conditional Access rules, and full-disk BitLocker mechanisms. Design resilient, encrypted virtual desktop infrastructures (VDI) and secure remote access gateways like ZScaler.",
        srv4H: "Enterprise Networking", srv4P: "Design and deploy highly secure, modern Multi-VLAN switches and robust RADIUS system infrastructures. Implement strict AAA frameworks to ensure only authorized users and compliant devices gain entry. Leverage proven, enterprise-grade hardware and software frameworks utilizing Cisco and Aruba technology ecosystems.",
        srv5H: "IT-Support Onsite and Remote", srv5P: "Fast-response 1st, 2nd, and 3rd level corporate helpdesk architectures optimized for immediate issue resolution. We provide reliable on-site troubleshooting for local office operations alongside highly scalable remote administration suites, ensuring maximum operational uptime and continuous data protection baseline audits.",
        srv6H: "Citrix Administration VDI and VM-Ware", srv6P: "Advanced virtualization architecture design utilizing Citrix Virtual DaaS and VMware Horizon systems. We specialize in engineering secure, centralized digital workspaces that segment access and prevent data exfiltration, combined with elite datacenter virtualization performance optimization for hypervisors.",
        aboutTitle: "About Me",
        aboutP: "I am <strong>Faiz Ahmed Bhagett</strong>, a Senior IT Infrastructure Consultant with a global track record across Germany, Sweden, Belgium, and the USA. Having managed massive global client migrations across 45 countries via Remedyforce for KONE GmbH, and engineered systems for high-stakes environments like Deutsche Bank and Johnson & Johnson, I build enterprise architectures focused strictly on elite stability, zero-trust layouts, and maximum uptime durability.",
        contactTitle: "Connect With Me", infoTitle: "Contact Information",
        lblName: "Your Name / Company", lblEmail: "Email Address", lblSolution: "Required Solution",
        optCloud: "Cloud Migration & M365", optSecurity: "IT Security Hardening", optNetwork: "Network Optimization", optGeneral: "General Inquiry",
        lblMsg: "Message", btnSubmit: "Send Message", whatsappText: "Chat Direct with Faiz",
        installBtn: "Install App"
    },
    de: {
        navHome: "Startseite", navServices: "Dienstleistungen", navAbout: "Über mich", navContact: "Kontakt",
        heroH1: "Sichere & moderne IT-Infrastruktur-Services",
        heroP: "Über 22 Jahre internationale Konzernerfahrung mit globalen Cloud-Migrationen in 45 Ländern für KONE GmbH via Remedyforce, Deutsche Bank und Johnson & Johnson.",
        heroBtn: "Kostenlose Beratung buchen", servicesTitle: "Expertise & Dienstleistungen",
        srv1H: "Cloud-Migrationen & M365", srv1P: "Strategische Migrationspfade, maßgeschneidert für komplexe Microsoft 365 Mandanten und Hybrid-Setups. Implementierung robuster Azure AD (Entra ID) Integrationen zur Gewährleistung von Single-Sign-On (SSO).",
        srv2H: "Endpoint-Management", srv2P: "Optimierung der Gerätebereitstellung durch moderne Frameworks like Microsoft Autopilot und automatisierte Bereitstellung. Wir entwickeln und erzwingen Zero-Trust-Compliance- und Konfigurationsrichtlinien.",
        srv3H: "Infrastruktur-Härtung", srv3P: "Sorgfältige Bewertung und Stärkung Ihres gesamten digitalen Fußabdrucks gegen moderne Cyber-Bedrohungen. Implementierung strenger MFA-Richtlinien, Bedingungen für bedingten Zugriff und BitLocker-Verschlüsselungen.",
        srv4H: "Unternehmensnetzwerke", srv4P: "Design und Bereitstellung hochsicherer, moderner Multi-VLAN-Switches und robuster RADIUS-Systeminfrastrukturen. Implementierung strenger AAA-Frameworks, um den Zugriff nur für konforme Geräte zu erlauben.",
        srv5H: "IT-Support Vor-Ort und Remote", srv5P: "Schnell reagierende Helpdesk-Architekturen, die auf sofortige Problemlösung optimiert sind. Zuverlässige Fehlerbehebung vor Ort für den lokalen Betrieb sowie hochgradig skalierbare Remote-Administration.",
        srv6H: "Citrix-Administration VDI und VMware", srv6P: "Erweiterte Virtualisierungsarchitektur mit Citrix Virtual DaaS und VMware Horizon Systemen. Spezialisiert auf die Entwicklung sicherer digitaler Arbeitsbereiche zur Verhinderung von Datenabfluss.",
        aboutTitle: "Über Mich",
        aboutP: "Ich bin <strong>Faiz Ahmed Bhagett</strong>, ein Senior IT-Infrastrukturberater mit internationaler Erfahrung in Deutschland, Schweden, Premium-Belgien und den USA. Ich habe globale Client-Migrationen über 45 Länder via Remedyforce for KONE GmbH geleitet und Systeme für hochkarätige Umgebungen wie die Deutsche Bank und Johnson & Johnson entwickelt.",
        contactTitle: "Kontaktieren Sie Mich", infoTitle: "Kontaktinformationen",
        lblName: "Ihr Name / Unternehmen", lblEmail: "E-Mail-Adresse", lblSolution: "Gewünschte Lösung",
        optCloud: "Cloud-Migration & M365", optSecurity: "IT-Sicherheitshärtung", optNetwork: "Netzwerkoptimierung", optGeneral: "Allgemeine Anfrage",
        lblMsg: "Nachricht", btnSubmit: "Nachricht senden", whatsappText: "Direkt mit Faiz chatten",
        installBtn: "App installieren"
    }
};

window.setLanguage = function(lang) {
    if (!translations[lang]) return;

    const t = translations[lang];

    // Helper functions map check karne ke liye
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };
    const setHtml = (id, html) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    };

    // Navigation & Buttons
    setText("nav-home", t.navHome);
    setText("nav-services", t.navServices);
    setText("nav-about", t.navAbout);
    setText("nav-contact", t.navContact);
    setText("install-btn", t.installBtn);

    // Hero Section
    setText("hero-h1", t.heroH1);
    setText("hero-p", t.heroP);
    setText("hero-btn", t.heroBtn);

    // Services Section Title
    setText("services-title", t.servicesTitle);

    // Service Cards Headers & Paragraphs
    setText("srv1-h", t.srv1H); setText("srv1-p", t.srv1P);
    setText("srv2-h", t.srv2H); setText("srv2-p", t.srv2P);
    setText("srv3-h", t.srv3H); setText("srv3-p", t.srv3P);
    setText("srv4-h", t.srv4H); setText("srv4-p", t.srv4P);
    setText("srv5-h", t.srv5H); setText("srv5-p", t.srv5P);
    setText("srv6-h", t.srv6H); setText("srv6-p", t.srv6P);

    // About Section (Yahan .innerHTML use hoga kyunki <strong> tag hai)
    setText("about-title", t.aboutTitle);
    setHtml("about-p", t.aboutP);

    // Contact Form & Info
    setText("contact-title", t.contactTitle);
    setText("info-title", t.infoTitle);
    
    // Labels & Form Elements
    setText("lbl-name", t.lblName);
    setText("lbl-email", t.lblEmail);
    setText("lbl-solution", t.lblSolution);
    setText("opt-general", t.optGeneral);
    setText("opt-cloud", t.optCloud);
    setText("opt-security", t.optSecurity);
    setText("opt-network", t.optNetwork);
    setText("lbl-msg", t.lblMsg);
    setText("btn-submit", t.btnSubmit);

    // Dynamic WhatsApp Native Tooltip text translator
    const waFloat = document.querySelector(".whatsapp-float");
    if (waFloat) {
        waFloat.setAttribute("title", t.whatsappText);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.academy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.academy-card');
            const courseName = card.querySelector('h3').innerText;
            alert(`Thank you for your interest in ${courseName}! Registration details will be sent to your email.`);
        });
    });
});

