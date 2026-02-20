const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_resume: "Resume",

        hero_greeting: "Hi, I'm",
        hero_title: "Geomatician, Data Scientist, Developer & Vibe Coder",
        hero_subtitle: "Specializing in Digital S&E, GIS & Data Management",
        hero_text: "I combine advanced GIS mastery with web development to create interactive dashboards and reliable data collection systems for impact-driven projects.",
        hero_cta_projects: "View Projects",
        hero_cta_contact: "Contact Me",
        hero_scroll: "Scroll Down",

        about_title: "About Me",
        about_text_1: "Geomatician and Data Scientist living at the intersection of spatial analysis and digital innovation. I transform complex data into strategic insights by combining advanced GIS expertise with modern web solutions.",
        about_text_2: "My mission is to drive decision-making through rigorous analysis, creative problem-solving, and the deployment of scalable digital systems like XamLeydi and Boundou Portal.",
        about_role_1: "Supervisor SIG/SIF at BET PLUS - BOUNDOU",
        about_role_desc_1: "Supervision of geomatics team, coordination of GIS projects, and advanced management of NAS servers and PostgreSQL databases.",
        about_role_2: "Data & GIS Operations Manager at SONAGED",
        about_role_desc_2: "Development of Python routines for spatial analysis, creation of dashboards, and management of digital survey forms.",

        skills_title: "Technical Skills",
        skill_python: "Data Analysis, ML, Talend, Excel",
        skill_react: "React, APIs, Google API",
        skill_js: "ES6+, DOM Manipulation",
        skill_web: "HTML5, CSS3, PHP, Supabase",
        skill_db: "PostgreSQL, SQLite, Neon DB, Railway",
        skill_gis: "QGIS, ArcGIS, SuperMap, DroneDeploy",
        skill_mobile: "KoboCollect, ODK",
        skill_viz: "Tableau, PowerBI",

        projects_title: "Featured Projects",
        project_BOUNDOU_desc: "Interactive dashboard for monitoring real-time land operations and performance metrics.",
        project_SUIVI_desc: "Web platform for tracking operational workflows and ensuring data integrity in post-processing.",
        project_PORTAIL_desc: "Centralized professional portal for the PROCASEF Boundou project information system.",
        project_XAMLEYDI_desc: "Developed for the PROCASEF project to modernize public display. Features QR code scanning, parcel search, geometry visualization, and digital complaint management via Supabase or local export (CSV/JSON).",
        project_SIF_desc: "Advanced Geoportal for the Boundou region, keeping track of land data and integrating spatial analysis for efficient territory management.",
        project_LAND_desc: "Automated application for managing land files, streamlining the digitization, verification, and archiving of land tenure documents.",
        project_LAND_detail: `<p><strong>Windows desktop application automating land file creation for Senegalese local authorities.</strong></p>

<h4>Problem Solved</h4>
<p>Traditionally, creating land files requires manually reading hundreds of cadastral plan pages, identifying NICAD numbers (parcel IDs), matching each plan with its corresponding deliberation, and manually assembling documents. This process is <strong>long, tedious, and error-prone</strong>.</p>

<h4>Solution Provided</h4>
<p>The application fully automates this process by:</p>
<ul>
    <li><strong>Extracting</strong> automatically NICAD numbers from cadastral plans (PDF) and deliberations (Word/PDF)</li>
    <li><strong>Matching</strong> intelligently NICADs between different sources</li>
    <li><strong>Creating</strong> automatically one PDF folder per NICAD containing the corresponding deliberation and plan</li>
    <li><strong>Generating</strong> a detailed report of successful and failed matches</li>
</ul>

<h4>Benefits</h4>
<ul>
    <li>⚡ <strong>Time Saving</strong>: Processing 1000+ pages in ~25 minutes</li>
    <li>✅ <strong>Reliability</strong>: Automatic extraction without manual entry errors</li>
    <li>📊 <strong>Traceability</strong>: Detailed report of all processing</li>
    <li>🔄 <strong>Robustness</strong>: Intelligent handling of scanned PDFs via OCR</li>
</ul>

<h4>How it Works (6-Step Pipeline)</h4>
<ol>
    <li><strong>Deliberation Preparation</strong>: Direct use of PDFs or high-fidelity automated conversion of Word files (PowerShell/COM).</li>
    <li><strong>Cadastral Plan Extraction</strong>: 2-pass strategy. Native text extraction (PyMuPDF) or smart OCR (Tesseract) with targeted clipping for optimized speed (~1.5s/page).</li>
    <li><strong>Deliberation Extraction</strong>: Intelligent page grouping by NICAD.</li>
    <li><strong>Matching</strong>: Cross-referencing plans and deliberations.</li>
    <li><strong>Folder Creation</strong>: Merging documents into <code>[NICAD].pdf</code>.</li>
    <li><strong>Report Generation</strong>: Comprehensive statistics and logs.</li>
</ol>`,
        project_NICAD_desc: "Specialized tool for matching and validating NICAD (National Cadastral Identification Numbers), ensuring data consistency across cadastral databases.",
        project_NICAD_detail: `<p><strong>Professional desktop application automating the matching between cadastral PDF files (CIC and Plans) and Excel lists containing NICAD numbers.</strong></p>

<h4>Objective</h4>
<p>For each line in an Excel file containing a NICAD, the application checks if this NICAD appears in the associated PDFs and adds columns for CIC status, Plan status, and source file names.</p>

<h4>Key Features</h4>
<ul>
    <li><strong>Smart Association</strong>: Matches PDF files to Excel files based on significant keywords (e.g., "NETTEBOULOU") while ignoring common stop words.</li>
    <li><strong>Dual Extraction Strategy</strong>:
        <ul>
            <li><strong>CIC Pages</strong>: Extracts data from structured tables.</li>
            <li><strong>Plan Pages</strong>: Extracts text using OCR/Text mining to find NICADs located on maps/images.</li>
        </ul>
    </li>
    <li><strong>Validation Logic</strong>: Validates NICADs based on strict rules (exactly 16 digits, valid SYSCOL code prefix for 548 communes).</li>
    <li><strong>Excel Update</strong>: Automatically detects NICAD columns, normalizes values, enriches data, and saves the updated file.</li>
</ul>

<h4>Safety & Logs</h4>
<ul>
    <li>Timestamped backups in "backups/" folder.</li>
    <li>Automatic generation of log files.</li>
    <li>On-screen synthesis report.</li>
</ul>`,


        btn_live: "Live Demo",
        btn_github: "GitHub",

        contact_title: "Get In Touch",
        contact_text: "I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to download my resume or reach out directly.",
        btn_download_cv: "Download Resume",

        footer_rights: "All rights reserved."
    },
    fr: {
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_contact: "Contact",
        nav_resume: "CV",

        hero_greeting: "Salut, je suis",
        hero_title: "Géomaticien, Data Scientist, Développeur & Vibe Coder",
        hero_subtitle: "Spécialiste S&E Digital, SIG & Gestion de Données",
        hero_text: "Je combine une maîtrise avancée des SIG et du développement web pour créer des tableaux de bord interactifs et fiabiliser les systèmes de collecte de données.",
        hero_cta_projects: "Voir Projets",
        hero_cta_contact: "Me Contacter",
        hero_scroll: "Défiler",

        about_title: "À Propos",
        about_text_1: "Géomaticien et Data Scientist à la convergence de l'analyse spatiale et de l'innovation numérique. Je transforme des données complexes en outils stratégiques en alliant une expertise SIG avancée à des solutions web modernes.",
        about_text_2: "Ma mission : éclairer la prise de décision par une analyse rigoureuse, une résolution créative des problèmes et le déploiement de systèmes digitaux évolutifs tels que XamLeydi et le Portail Boundou.",
        about_role_1: "Superviseur SIG/SIF chez BET PLUS - BOUNDOU",
        about_role_desc_1: "Supervision de l'équipe géomatique, coordination des projets SIG, et gestion avancée des serveurs NAS et bases de données PostgreSQL.",
        about_role_2: "Chargé d’Exploitation Données & SIG chez SONAGED",
        about_role_desc_2: "Développement de routines Python pour l'analyse spatiale, création de tableaux de bord, et gestion des formulaires d'enquête numériques.",

        skills_title: "Compétences Techniques",
        skill_python: "Analyse de Données, ML, Talend, Excel",
        skill_react: "React, APIs, Google API",
        skill_js: "ES6+, Manipulation DOM",
        skill_web: "HTML5, CSS3, PHP, Supabase",
        skill_db: "PostgreSQL, SQLite, Neon DB, Railway",
        skill_gis: "QGIS, ArcGIS, SuperMap, DroneDeploy",
        skill_mobile: "KoboCollect, ODK",
        skill_viz: "Tableau, PowerBI",

        projects_title: "Projets Phares",
        project_BOUNDOU_desc: "Tableau de bord interactif pour le suivi en temps réel des opérations foncières et des métriques de performance.",
        project_SUIVI_desc: "Plateforme web pour le suivi des flux opérationnels et l'intégrité des données en post-traitement.",
        project_PORTAIL_desc: "Portail professionnel centralisé pour le système d'information du projet PROCASEF Boundou.",
        project_XAMLEYDI_desc: "Application développée pour le projet PROCASEF permettant de moderniser l'affichage public : scan de QR codes, recherche parcellaire, visualisation géométrique et gestion numérique des plaintes via Supabase ou export local (CSV/JSON).",
        project_SIF_desc: "Géoportail avancé pour la région du Boundou, intégrant le suivi des données foncières et l'analyse spatiale pour une gestion efficace du territoire.",
        project_LAND_desc: "Application automatisée pour la gestion des dossiers fonciers, facilitant la numérisation, la vérification et l'archivage des documents fonciers.",
        project_LAND_detail: `<p><strong>Application de bureau Windows automatisant la constitution de dossiers fonciers pour les collectivités locales du Sénégal.</strong></p>

<h4>Problème Résolu</h4>
<p>Traditionnellement, la création de dossiers fonciers nécessite de :</p>
<ul>
    <li>Lire manuellement des centaines de pages de plans cadastraux</li>
    <li>Identifier les numéros NICAD (identifiants de parcelles)</li>
    <li>Apparier chaque plan avec sa délibération correspondante</li>
    <li>Assembler manuellement les documents</li>
</ul>
<p>Ce processus est <strong>long, fastidieux et sujet aux erreurs</strong>.</p>

<h4>Solution Apportée</h4>
<p>L'application automatise entièrement ce processus en :</p>
<ul>
    <li><strong>Extrayant</strong> automatiquement les numéros NICAD des plans cadastraux (PDF) et des délibérations (Word/PDF)</li>
    <li><strong>Appariant</strong> intelligemment les NICAD entre les différentes sources</li>
    <li><strong>Créant</strong> automatiquement un dossier PDF par NICAD contenant la délibération et le plan correspondant</li>
    <li><strong>Générant</strong> un rapport détaillé des appariements réussis et échoués</li>
</ul>

<h4>Bénéfices</h4>
<ul>
    <li>⚡ <strong>Gain de temps</strong> : Traitement de 1000+ pages en ~25 minutes</li>
    <li>✅ <strong>Fiabilité</strong> : Extraction automatique sans erreur de saisie manuelle</li>
    <li>📊 <strong>Traçabilité</strong> : Rapport détaillé de tous les traitements</li>
    <li>🔄 <strong>Robustesse</strong> : Gestion intelligente des PDF scannés via OCR</li>
</ul>

<h4>Fonctionnement (Pipeline en 6 Étapes)</h4>
<ol>
    <li><strong>Préparation</strong> : Utilisation directe de PDF ou conversion Word haute fidélité (PowerShell/COM).</li>
    <li><strong>Extraction Plans</strong> : Stratégie à 2 passes. Extraction texte natif (PyMuPDF) ou OCR intelligent (Tesseract) avec ciblage de zone (~1.5s/page).</li>
    <li><strong>Extraction Délibérations</strong> : Regroupement intelligent des pages par NICAD.</li>
    <li><strong>Appariement</strong> : Croisement des plans et délibérations trouvés.</li>
    <li><strong>Création Dossiers</strong> : Fusion des documents dans <code>[NICAD].pdf</code>.</li>
    <li><strong>Rapport</strong> : Génération de statistiques complètes et logs.</li>
</ol>`,
        project_NICAD_desc: "Outil spécialisé pour le matching et la validation des NICAD (Numéros d'Identification Cadastrale), assurant la cohérence des données cadastrales.",
        project_NICAD_detail: `<p><strong>Application de bureau professionnelle qui automatise le croisement (matching) entre des fichiers PDF cadastraux (CIC et Plans) et des listes Excel contenant des numéros NICAD.</strong></p>

<h4>Objectif</h4>
<p>Pour chaque ligne d'un fichier Excel contenant un NICAD, l'application vérifie si ce NICAD apparaît dans les PDF associés et enrichit le fichier avec les résultats de la recherche (Présence CIC/Plan, Source PDF).</p>

<h4>Fonctionnalités Clés</h4>
<ul>
    <li><strong>Association Intelligente</strong> : Apparie les PDF aux fichiers Excel par détection de mots-clés (ex: "NETTEBOULOU") en ignorant les mots vides.</li>
    <li><strong>Stratégie d'Extraction Double</strong> :
        <ul>
            <li><strong>Pages CIC</strong> : Extraction depuis les tableaux structurés.</li>
            <li><strong>Pages Plan</strong> : Extraction plein texte (OCR) pour les cartes/images.</li>
        </ul>
    </li>
    <li><strong>Logic de Validation</strong> : Vérifie que les NICADs ont 16 chiffres et correspondent aux codes SYSCOL valides des communes du Sénégal.</li>
    <li><strong>Mise à jour Excel</strong> : Détection auto de la colonne NICAD, normalisation, et ajout des résultats.</li>
</ul>

<h4>Sécurité et Logs</h4>
<ul>
    <li>Backup horodaté automatique dans "backups/".</li>
    <li>Génération de logs détaillés.</li>
    <li>Rapport de synthèse à l'écran.</li>
</ul>`,


        btn_live: "Démo Live",
        btn_github: "GitHub",

        contact_title: "Me Contacter",
        contact_text: "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités. N'hésitez pas à télécharger mon CV ou à me contacter directement.",
        btn_download_cv: "Télécharger CV",

        footer_rights: "Tous droits réservés."
    }
};
