// Translation Dictionary
const translations = {
  en: {
    // Navigation
    nav_about: "About Us",
    nav_services: "Services",
    nav_contact: "Contact",
    btn_track: "Track Cargo",
    btn_quote: "Get a Quote",

    // Hero
    hero_title: "Driving Global Trade Through Integrated Logistics",
    hero_subtitle:
      "Integrated supply chain solutions that connect businesses to markets worldwide — air, sea, and land.",
    hero_btn_services: "Explore Services",
    hero_btn_quote: "Get a Quote",

    // About
    about_title: "About Us",
    about_subtitle: "Your trusted global logistics partner",
    about_intro_1:
      "COMO Logistics is a global logistics partner delivering integrated supply chain solutions that connect businesses to markets worldwide. We specialize in complex international logistics operations, enabling the seamless movement of goods across borders through reliable transportation, advanced planning, and operational excellence.",
    about_intro_2:
      "With a strong international presence and a commitment to precision, we help customers navigate the challenges of global trade while maintaining efficiency, visibility, and control at every stage of the supply chain.",
    about_tab_services: "Integrated Services",
    about_tab_network: "Global Network",
    about_tab_value: "Customer Value",
    about_tab_sustainability: "Sustainability",
    about_tab_vision: "Our Vision",
    about_services_title: "Integrated International Logistics Services",
    about_services_intro:
      "Our service portfolio is designed to meet the demands of global commerce and evolving supply chains:",
    about_svc_freight:
      "Global Freight Forwarding — Air, ocean, and multimodal transportation solutions optimized for reliability and performance.",
    about_svc_transport:
      "International Transport Management — End-to-end coordination of cross-border shipments across key trade lanes.",
    about_svc_warehouse:
      "Global Warehousing & Distribution — Strategically located facilities supporting international inventory management and fulfillment.",
    about_svc_supply:
      "Supply Chain Solutions — Data-driven planning, monitoring, and optimization for enhanced operational efficiency.",
    about_svc_customs:
      "Customs & Trade Compliance — Expert management of global regulations, documentation, and risk mitigation.",
    about_svc_project:
      "Project & Specialized Logistics — Tailored solutions for complex, oversized, or high-value international cargo.",
    about_services_outro:
      "We combine industry expertise, digital technology, and operational discipline to deliver consistent results across global markets.",
    about_network_title: "International Partners & Worldwide Network",
    about_network_intro:
      "Our global network is built on strong partnerships with international carriers, regional logistics specialists, port operators, and supply chain stakeholders. This collaborative ecosystem enables us to provide reliable coverage across major trade routes and emerging markets.",
    about_network_deliver: "Through this international network, we deliver:",
    about_net_multi: "Seamless multi-country logistics execution",
    about_net_quality: "Standardized global service quality",
    about_net_local: "Local expertise backed by global coordination",
    about_net_visibility: "Enhanced visibility and supply chain resilience",
    about_network_outro:
      "Our network-driven approach ensures that customers benefit from both global scale and regional insight.",
    about_value_title: "Delivering Customer Value",
    about_value_intro:
      "At COMO Logistics, we view logistics as a strategic advantage — not just a service. Our focus is on creating measurable value through performance-driven solutions.",
    about_value_rely: "Our customers rely on us for:",
    about_val_excellence:
      "Operational Excellence — Consistent execution and high service reliability",
    about_val_visibility:
      "Supply Chain Visibility — Transparent tracking and proactive communication",
    about_val_scalable:
      "Scalable Solutions — Logistics strategies aligned with business growth",
    about_val_risk:
      "Risk Management — Secure, compliant, and resilient global operations",
    about_val_partnership:
      "Strategic Partnership — Long-term collaboration focused on shared success",
    about_value_outro:
      "We work closely with customers to transform logistics into a competitive advantage in global markets.",
    about_sustain_title: "Sustainability & Green Logistics",
    about_sustain_intro:
      "Sustainability is a core pillar of our global strategy. We are committed to reducing the environmental impact of international logistics while supporting responsible growth across the supply chain.",
    about_sustain_key: "Key initiatives include:",
    about_sus_carbon:
      "Network and route optimization to reduce carbon emissions",
    about_sus_fuel:
      "Collaboration with carriers investing in alternative fuels and energy-efficient fleets",
    about_sus_digital:
      "Digitalization of processes to reduce paper usage and operational waste",
    about_sus_packaging:
      "Sustainable packaging and resource optimization programs",
    about_sus_standards:
      "Continuous improvement aligned with global environmental standards",
    about_sustain_outro:
      "By integrating sustainable practices into our logistics operations, we help customers achieve their environmental goals while maintaining efficiency and reliability.",
    about_vision_title: "Our Vision",
    about_vision_text:
      "To be recognized as a leading global logistics partner — delivering integrated, sustainable, and innovative supply chain solutions that enable international trade and long-term growth.",
    about_mission_text:
      "Our mission is simple: to make international logistics efficient, transparent, and dependable for every customer we serve.",

    // Stats
    stat_countries: "Countries",
    stat_satisfaction: "Customer Satisfaction",
    global_reach_tagline: "Connecting continents, delivering worldwide",

    // Services
    services_title: "Our Services",
    services_subtitle:
      "Integrated international transportation solutions designed to support global supply chains with reliability, efficiency, and transparency.",
    service_air: "Air Cargo",
    service_air_desc:
      "We offer fast and reliable air cargo solutions for time-sensitive shipments across international markets. Our global airline partnerships and optimized routing allow us to ensure secure handling, reduced transit times, and consistent delivery performance.",
    service_sea: "Maritime Shipments",
    service_sea_desc:
      "We provide comprehensive maritime shipping solutions that connect major ports worldwide, supporting efficient and cost-effective global freight movement. Through strategic partnerships with leading carriers, we offer reliable ocean freight options tailored to customer requirements.",
    service_land: "Road Transportation",
    service_land_desc:
      "We offer international road transportation services that ensure flexible and efficient cargo movement across Europe and cross-border routes. Our network of trusted transport partners allows us to deliver dependable ground logistics aligned with global supply chains.",
    air_feat_1: "Priority and express shipping options",
    air_feat_2: "Consolidated and direct air freight solutions",
    air_feat_3: "Real-time tracking and shipment visibility",
    air_feat_4: "Specialized handling for sensitive or high-value cargo",
    air_routes_title: "Our Strongest Routes",
    air_import_title: "Import to Turkey (IST-ADB)",
    air_import_routes:
      "China (PVG, PEK, SZX, CAN) · Japan (HND, NRT, CTS) · Taiwan (TPE) · Korea (ICN) · America (JFK, ATL, DEN) · Dubai (DXB)",
    air_export_title: "Export from Turkey (IST-ADB)",
    air_export_routes:
      "Dubai (DXB, DWC) · England (BHX, LHR, MAN) · Germany (MUC, HAM, BER, DUS) · America (JFK, ATL, DEN) · Canada (YUL, YYZ) · Kenya (NBO) · Azerbaijan (BAK) · Mexico (MEX, MTY)",
    sea_feat_1:
      "Full Container Load (FCL) and Less than Container Load (LCL) services",
    sea_feat_2: "Global port-to-port and door-to-door coordination",
    sea_feat_3: "Cargo planning and documentation management",
    sea_feat_4: "Flexible schedules aligned with international trade routes",
    road_feat_1: "Cross-border freight transportation across Europe",
    road_feat_2:
      "Full Truck Load (FTL) and Less than Truck Load (LTL) solutions",
    road_feat_3: "Reliable pickup and delivery coordination",
    road_feat_4: "Integrated tracking and route optimization",

    // Quote Form
    quote_title: "Get a Quick Quote",
    quote_subtitle:
      "Fill in your details and we'll get back to you within 24 hours",
    form_name: "Full Name *",
    form_email: "Email Address *",
    form_phone: "Phone Number *",
    form_service_type: "Service Type *",
    form_select_service: "Select a service",
    form_submit: "Submit Quote Request",
    form_success:
      "Thank you! Your quote request has been submitted successfully. We'll contact you within 24 hours.",

    // Footer
    footer_desc:
      "COMO Logistics is your trusted partner for integrated supply chain solutions. We connect businesses to markets worldwide with reliable, efficient, and innovative logistics services.",
    footer_quick_links: "Quick Links",
    footer_contact: "Contact Info",
    footer_address: "Istanbul, Turkey",
    footer_copyright: "© 2024 COMO Logistics. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",

    // Tracking Modal
    track_title: "Track Your Cargo",
    track_desc:
      "Enter your tracking number to get real-time updates on your shipment.",
    track_placeholder: "Enter tracking number...",
    track_btn: "Track",
    track_info: "Tracking Information",
    track_received: "Shipment Received",
    track_received_desc: "Package received at origin facility",
    track_transit: "In Transit",
    track_transit_desc: "Package is in transit to destination",
    track_delivery: "Out for Delivery",
    track_delivery_desc: "Package is out for delivery",
    track_expected: "Expected",

    // Validation Messages
    val_name_required: "Please enter your full name",
    val_name_min: "Name must be at least 2 characters",
    val_email_required: "Please enter your email address",
    val_email_invalid: "Please enter a valid email address",
    val_phone_required: "Please enter your phone number",
    val_phone_invalid: "Please enter a valid phone number",
    val_service_required: "Please select a service type",

    // Notifications
    lang_changed: "Language changed to English",
  },
  tr: {
    // Navigation
    nav_about: "Hakkımızda",
    nav_services: "Hizmetler",
    nav_contact: "İletişim",
    btn_track: "Kargo Takip",
    btn_quote: "Teklif Al",

    // Hero
    hero_title: "Entegre Lojistik ile Küresel Ticareti Yönlendiriyoruz",
    hero_subtitle:
      "İşletmeleri dünya pazarlarına bağlayan entegre tedarik zinciri çözümleri — hava, deniz ve kara.",
    hero_btn_services: "Hizmetleri Keşfet",
    hero_btn_quote: "Teklif Al",

    // About
    about_title: "Hakkımızda",
    about_subtitle: "Güvenilir küresel lojistik ortağınız",
    about_intro_1:
      "COMO Logistics, işletmeleri dünya pazarlarına bağlayan entegre tedarik zinciri çözümleri sunan küresel bir lojistik ortağıdır. Güvenilir taşımacılık, ileri planlama ve operasyonel mükemmellik ile sınır ötesi malların sorunsuz hareketini sağlayan karmaşık uluslararası lojistik operasyonlarında uzmanız.",
    about_intro_2:
      "Güçlü uluslararası varlığımız ve hassasiyete olan bağlılığımızla, tedarik zincirinin her aşamasında verimlilik, görünürlük ve kontrol sağlayarak müşterilerimizin küresel ticaret zorluklarını aşmalarına yardımcı oluyoruz.",
    about_tab_services: "Entegre Hizmetler",
    about_tab_network: "Küresel Ağ",
    about_tab_value: "Müşteri Değeri",
    about_tab_sustainability: "Sürdürülebilirlik",
    about_tab_vision: "Vizyonumuz",
    about_services_title: "Entegre Uluslararası Lojistik Hizmetleri",
    about_services_intro:
      "Hizmet portföyümüz, küresel ticaretin ve gelişen tedarik zincirlerinin gereksinimlerini karşılamak üzere tasarlanmıştır:",
    about_svc_freight:
      "Küresel Yük Taşımacılığı — Güvenilirlik ve performans için optimize edilmiş hava, deniz ve multimodal taşımacılık çözümleri.",
    about_svc_transport:
      "Uluslararası Taşıma Yönetimi — Ana ticaret güzergahlarında sınır ötesi gönderilerin uçtan uca koordinasyonu.",
    about_svc_warehouse:
      "Küresel Depolama & Dağıtım — Uluslararası envanter yönetimi ve sipariş karşılamayı destekleyen stratejik konumlu tesisler.",
    about_svc_supply:
      "Tedarik Zinciri Çözümleri — Gelişmiş operasyonel verimlilik için veri odaklı planlama, izleme ve optimizasyon.",
    about_svc_customs:
      "Gümrük & Ticaret Uyumu — Küresel düzenlemeler, dokümantasyon ve risk azaltma konusunda uzman yönetim.",
    about_svc_project:
      "Proje & Özel Lojistik — Karmaşık, büyük boyutlu veya yüksek değerli uluslararası kargolar için özelleştirilmiş çözümler.",
    about_services_outro:
      "Küresel pazarlarda tutarlı sonuçlar sunmak için sektör uzmanlığını, dijital teknolojiyi ve operasyonel disiplini bir araya getiriyoruz.",
    about_network_title: "Uluslararası Ortaklar & Dünya Çapında Ağ",
    about_network_intro:
      "Küresel ağımız, uluslararası taşıyıcılar, bölgesel lojistik uzmanları, liman operatörleri ve tedarik zinciri paydaşlarıyla güçlü ortaklıklar üzerine kurulmuştur. Bu işbirlikçi ekosistem, ana ticaret güzergahları ve gelişmekte olan pazarlarda güvenilir kapsam sağlamamıza olanak tanır.",
    about_network_deliver: "Bu uluslararası ağ aracılığıyla sunuyoruz:",
    about_net_multi: "Sorunsuz çok ülkeli lojistik yürütme",
    about_net_quality: "Standartlaştırılmış küresel hizmet kalitesi",
    about_net_local: "Küresel koordinasyonla desteklenen yerel uzmanlık",
    about_net_visibility:
      "Gelişmiş görünürlük ve tedarik zinciri dayanıklılığı",
    about_network_outro:
      "Ağ odaklı yaklaşımımız, müşterilerin hem küresel ölçekten hem de bölgesel içgörüden faydalanmasını sağlar.",
    about_value_title: "Müşteri Değeri Sunma",
    about_value_intro:
      "COMO Logistics'te lojistiği sadece bir hizmet değil, stratejik bir avantaj olarak görüyoruz. Odağımız, performans odaklı çözümlerle ölçülebilir değer yaratmaktır.",
    about_value_rely: "Müşterilerimiz bize şunlar için güvenir:",
    about_val_excellence:
      "Operasyonel Mükemmellik — Tutarlı uygulama ve yüksek hizmet güvenilirliği",
    about_val_visibility:
      "Tedarik Zinciri Görünürlüğü — Şeffaf takip ve proaktif iletişim",
    about_val_scalable:
      "Ölçeklenebilir Çözümler — İş büyümesiyle uyumlu lojistik stratejileri",
    about_val_risk:
      "Risk Yönetimi — Güvenli, uyumlu ve dayanıklı küresel operasyonlar",
    about_val_partnership:
      "Stratejik Ortaklık — Ortak başarıya odaklanan uzun vadeli işbirliği",
    about_value_outro:
      "Küresel pazarlarda lojistiği rekabet avantajına dönüştürmek için müşterilerimizle yakın çalışıyoruz.",
    about_sustain_title: "Sürdürülebilirlik & Yeşil Lojistik",
    about_sustain_intro:
      "Sürdürülebilirlik, küresel stratejimizin temel bir direğidir. Tedarik zinciri genelinde sorumlu büyümeyi desteklerken uluslararası lojistiğin çevresel etkisini azaltmaya kararlıyız.",
    about_sustain_key: "Temel girişimler:",
    about_sus_carbon:
      "Karbon emisyonlarını azaltmak için ağ ve rota optimizasyonu",
    about_sus_fuel:
      "Alternatif yakıtlara ve enerji verimli filolara yatırım yapan taşıyıcılarla işbirliği",
    about_sus_digital:
      "Kağıt kullanımını ve operasyonel atığı azaltmak için süreçlerin dijitalleştirilmesi",
    about_sus_packaging:
      "Sürdürülebilir ambalaj ve kaynak optimizasyonu programları",
    about_sus_standards:
      "Küresel çevre standartlarıyla uyumlu sürekli iyileştirme",
    about_sustain_outro:
      "Sürdürülebilir uygulamaları lojistik operasyonlarımıza entegre ederek, müşterilerimizin verimlilik ve güvenilirliği korurken çevresel hedeflerine ulaşmalarına yardımcı oluyoruz.",
    about_vision_title: "Vizyonumuz",
    about_vision_text:
      "Uluslararası ticareti ve uzun vadeli büyümeyi mümkün kılan entegre, sürdürülebilir ve yenilikçi tedarik zinciri çözümleri sunan lider bir küresel lojistik ortağı olarak tanınmak.",
    about_mission_text:
      "Misyonumuz basit: Hizmet verdiğimiz her müşteri için uluslararası lojistiği verimli, şeffaf ve güvenilir kılmak.",

    // Stats
    stat_countries: "Ülke",
    stat_satisfaction: "Müşteri Memnuniyeti",
    global_reach_tagline: "Kıtaları birleştiren, dünya genelinde teslimat",

    // Services
    services_title: "Hizmetlerimiz",
    services_subtitle:
      "Güvenilirlik, verimlilik ve şeffaflık ile küresel tedarik zincirlerini destekleyen entegre uluslararası taşımacılık çözümleri.",
    service_air: "Hava Kargo",
    service_air_desc:
      "Uluslararası pazarlarda zamana duyarlı gönderiler için hızlı ve güvenilir hava kargo çözümleri sunuyoruz. Küresel havayolu ortaklıklarımız ve optimize edilmiş rotalarımız ile güvenli elleçleme, kısa transit süreleri ve tutarlı teslimat performansı sağlıyoruz.",
    service_sea: "Deniz Taşımacılığı",
    service_sea_desc:
      "Dünya genelindeki büyük limanları birbirine bağlayan kapsamlı deniz taşımacılığı çözümleri sunuyoruz. Önde gelen taşıyıcılarla stratejik ortaklıklarımız sayesinde müşteri gereksinimlerine göre özelleştirilmiş güvenilir okyanus yük seçenekleri sunuyoruz.",
    service_land: "Kara Taşımacılığı",
    service_land_desc:
      "Avrupa genelinde ve sınır ötesi güzergahlarda esnek ve verimli kargo hareketi sağlayan uluslararası karayolu taşımacılığı hizmetleri sunuyoruz. Güvenilir taşıma ortaklarımız ağı ile küresel tedarik zincirleriyle uyumlu güvenilir kara lojistiği sağlıyoruz.",
    air_feat_1: "Öncelikli ve ekspres gönderim seçenekleri",
    air_feat_2: "Konsolide ve direkt hava kargo çözümleri",
    air_feat_3: "Gerçek zamanlı takip ve gönderi görünürlüğü",
    air_feat_4: "Hassas veya yüksek değerli kargolar için özel elleçleme",
    air_routes_title: "En Güçlü Rotalarımız",
    air_import_title: "Türkiye'ye İthalat (IST-ADB)",
    air_import_routes:
      "Çin (PVG, PEK, SZX, CAN) · Japonya (HND, NRT, CTS) · Tayvan (TPE) · Kore (ICN) · Amerika (JFK, ATL, DEN) · Dubai (DXB)",
    air_export_title: "Türkiye'den İhracat (IST-ADB)",
    air_export_routes:
      "Dubai (DXB, DWC) · İngiltere (BHX, LHR, MAN) · Almanya (MUC, HAM, BER, DUS) · Amerika (JFK, ATL, DEN) · Kanada (YUL, YYZ) · Kenya (NBO) · Azerbaycan (BAK) · Meksika (MEX, MTY)",
    sea_feat_1:
      "Tam Konteyner Yükü (FCL) ve Parsiyel Konteyner Yükü (LCL) hizmetleri",
    sea_feat_2: "Küresel limandan limana ve kapıdan kapıya koordinasyon",
    sea_feat_3: "Kargo planlama ve dokümantasyon yönetimi",
    sea_feat_4: "Uluslararası ticaret güzergahlarıyla uyumlu esnek programlar",
    road_feat_1: "Avrupa genelinde sınır ötesi yük taşımacılığı",
    road_feat_2:
      "Tam Kamyon Yükü (FTL) ve Parsiyel Kamyon Yükü (LTL) çözümleri",
    road_feat_3: "Güvenilir yükleme ve teslimat koordinasyonu",
    road_feat_4: "Entegre takip ve rota optimizasyonu",

    // Quote Form
    quote_title: "Hızlı Teklif Alın",
    quote_subtitle: "Bilgilerinizi doldurun, 24 saat içinde size dönüş yapalım",
    form_name: "Ad Soyad *",
    form_email: "E-posta Adresi *",
    form_phone: "Telefon Numarası *",
    form_service_type: "Hizmet Türü *",
    form_select_service: "Hizmet seçiniz",
    form_submit: "Teklif Talebi Gönder",
    form_success:
      "Teşekkürler! Teklif talebiniz başarıyla gönderildi. 24 saat içinde sizinle iletişime geçeceğiz.",

    // Footer
    footer_desc:
      "COMO Logistics, entegre tedarik zinciri çözümleri için güvenilir ortağınızdır. İşletmeleri güvenilir, verimli ve yenilikçi lojistik hizmetleriyle dünya pazarlarına bağlıyoruz.",
    footer_quick_links: "Hızlı Bağlantılar",
    footer_contact: "İletişim Bilgileri",
    footer_address: "İstanbul, Türkiye",
    footer_copyright: "© 2024 COMO Logistics. Tüm hakları saklıdır.",
    footer_privacy: "Gizlilik Politikası",
    footer_terms: "Kullanım Koşulları",

    // Tracking Modal
    track_title: "Kargonuzu Takip Edin",
    track_desc:
      "Gönderi durumunuzu gerçek zamanlı takip etmek için takip numaranızı girin.",
    track_placeholder: "Takip numarasını girin...",
    track_btn: "Takip Et",
    track_info: "Takip Bilgileri",
    track_received: "Gönderi Teslim Alındı",
    track_received_desc: "Paket çıkış tesisinde teslim alındı",
    track_transit: "Yolda",
    track_transit_desc: "Paket varış noktasına doğru yolda",
    track_delivery: "Dağıtıma Çıktı",
    track_delivery_desc: "Paket dağıtıma çıktı",
    track_expected: "Tahmini",

    // Validation Messages
    val_name_required: "Lütfen adınızı ve soyadınızı girin",
    val_name_min: "İsim en az 2 karakter olmalıdır",
    val_email_required: "Lütfen e-posta adresinizi girin",
    val_email_invalid: "Lütfen geçerli bir e-posta adresi girin",
    val_phone_required: "Lütfen telefon numaranızı girin",
    val_phone_invalid: "Lütfen geçerli bir telefon numarası girin",
    val_service_required: "Lütfen bir hizmet türü seçin",

    // Notifications
    lang_changed: "Dil Türkçe olarak değiştirildi",
  },
};

// Current language (default: English)
let currentLang = "en";

// Apply translations to all elements with data-i18n attribute
function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] === undefined) return;

    // For elements that contain child icons, preserve them
    const icons = el.querySelectorAll("i.fas, i.fab");
    if (icons.length > 0) {
      const iconClones = Array.from(icons).map((i) => i.cloneNode(true));
      el.textContent = dict[key] + " ";
      iconClones.forEach((icon) => el.appendChild(icon));
    } else {
      el.textContent = dict[key];
    }
  });

  // Update page title
  document.title =
    lang === "tr"
      ? "COMO Logistics - Entegre Lojistik ile Küresel Ticaret"
      : "COMO Logistics - Driving Global Trade Through Integrated Logistics";

  // Store preference
  localStorage.setItem("preferred_lang", lang);
}

// DOM Elements
const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const quoteForm = document.getElementById("quoteForm");
const formSuccess = document.getElementById("formSuccess");
const trackCargoBtn = document.getElementById("trackCargoBtn");
const languageSelect = document.getElementById("languageSelect");

// About Tabs
const tabBtns = document.querySelectorAll(".about-tabs__btn");
const tabPanels = document.querySelectorAll(".about-tab-panel");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetTab = btn.getAttribute("data-tab");

    // Remove active from all
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabPanels.forEach((p) => p.classList.remove("active"));

    // Activate clicked tab
    btn.classList.add("active");
    const panel = document.getElementById(targetTab);
    if (panel) panel.classList.add("active");
  });
});

// Mobile Menu Toggle
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// Sticky Header on Scroll
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add scrolled class to header
  if (scrollTop > 100) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }

  lastScrollTop = scrollTop;
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Form Validation and Submission
quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(quoteForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const phone = formData.get("phone").trim();
  const serviceType = formData.get("serviceType");

  // Validation
  let isValid = true;
  let errorMessage = "";

  // Reset previous error states
  document.querySelectorAll(".form-input, .form-select").forEach((field) => {
    field.classList.remove("error");
  });

  const t = translations[currentLang];

  // Name validation
  if (!name) {
    showError("name", t.val_name_required);
    isValid = false;
  } else if (name.length < 2) {
    showError("name", t.val_name_min);
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    showError("email", t.val_email_required);
    isValid = false;
  } else if (!emailRegex.test(email)) {
    showError("email", t.val_email_invalid);
    isValid = false;
  }

  // Phone validation
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (!phone) {
    showError("phone", t.val_phone_required);
    isValid = false;
  } else if (!phoneRegex.test(phone) || phone.length < 10) {
    showError("phone", t.val_phone_invalid);
    isValid = false;
  }

  // Service type validation
  if (!serviceType) {
    showError("serviceType", t.val_service_required);
    isValid = false;
  }

  if (isValid) {
    // Show success message
    quoteForm.style.display = "none";
    formSuccess.style.display = "block";

    // Log form data (in a real application, this would be sent to a server)
    console.log("Form submitted:", {
      name,
      email,
      phone,
      serviceType,
      timestamp: new Date().toISOString(),
    });

    // Reset form after 5 seconds
    setTimeout(() => {
      quoteForm.reset();
      quoteForm.style.display = "block";
      formSuccess.style.display = "none";
    }, 5000);
  }
});

// Show error for form field
function showError(fieldName, message) {
  const field = document.getElementById(fieldName);
  field.classList.add("error");

  // Create or update error message
  let errorElement = field.parentNode.querySelector(".error-message");
  if (!errorElement) {
    errorElement = document.createElement("span");
    errorElement.className = "error-message";
    errorElement.style.color = "#ef4444";
    errorElement.style.fontSize = "0.875rem";
    errorElement.style.marginTop = "0.25rem";
    errorElement.style.display = "block";
    field.parentNode.appendChild(errorElement);
  }
  errorElement.textContent = message;

  // Remove error on input
  field.addEventListener(
    "input",
    () => {
      field.classList.remove("error");
      if (errorElement) {
        errorElement.remove();
      }
    },
    { once: true },
  );
}

// Counter Animation for Stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200; // Animation speed

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / speed;
    let current = 0;

    const updateCounter = () => {
      current += increment;

      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

// Intersection Observer for counter animation
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

// Start observing global reach banner for counter animation
const globalReachBanner = document.querySelector(".global-reach-banner");
if (globalReachBanner) {
  statsObserver.observe(globalReachBanner);
}

// Track Cargo Button
trackCargoBtn.addEventListener("click", () => {
  // Create a simple tracking modal
  const modal = createTrackingModal();
  document.body.appendChild(modal);

  // Show modal with animation
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
});

// Language Selector
languageSelect.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  applyLanguage(selectedLang);
  showNotification(translations[selectedLang].lang_changed);
});

// Create Tracking Modal
function createTrackingModal() {
  const modal = document.createElement("div");
  modal.className = "tracking-modal";
  const t = translations[currentLang];
  modal.innerHTML = `
        <div class="tracking-modal__overlay"></div>
        <div class="tracking-modal__content">
            <button class="tracking-modal__close">&times;</button>
            <h3>${t.track_title}</h3>
            <p>${t.track_desc}</p>
            <form class="tracking-form">
                <input type="text" placeholder="${t.track_placeholder}" class="tracking-input" required>
                <button type="submit" class="btn btn--primary">${t.track_btn}</button>
            </form>
            <div class="tracking-result" style="display: none;">
                <h4>${t.track_info}</h4>
                <div class="tracking-status">
                    <div class="status-item active">
                        <div class="status-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="status-content">
                            <h5>${t.track_received}</h5>
                            <p>${t.track_received_desc}</p>
                            <span class="status-date">2024-01-15 10:30 AM</span>
                        </div>
                    </div>
                    <div class="status-item active">
                        <div class="status-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="status-content">
                            <h5>${t.track_transit}</h5>
                            <p>${t.track_transit_desc}</p>
                            <span class="status-date">2024-01-16 02:15 PM</span>
                        </div>
                    </div>
                    <div class="status-item">
                        <div class="status-icon">
                            <i class="fas fa-truck"></i>
                        </div>
                        <div class="status-content">
                            <h5>${t.track_delivery}</h5>
                            <p>${t.track_delivery_desc}</p>
                            <span class="status-date">${t.track_expected}: 2024-01-17</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Add styles for modal
  const style = document.createElement("style");
  style.textContent = `
        .tracking-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .tracking-modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .tracking-modal__overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }
        
        .tracking-modal__content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 2rem;
            border-radius: 1rem;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .tracking-modal__close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #64748b;
            transition: color 0.3s ease;
        }
        
        .tracking-modal__close:hover {
            color: #1e293b;
        }
        
        .tracking-form {
            display: flex;
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .tracking-input {
            flex: 1;
            padding: 0.75rem;
            border: 1px solid #cbd5e1;
            border-radius: 0.5rem;
            font-size: 1rem;
        }
        
        .tracking-result {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid #e2e8f0;
        }
        
        .status-item {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            opacity: 0.5;
            transition: opacity 0.3s ease;
        }
        
        .status-item.active {
            opacity: 1;
        }
        
        .status-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #f1f5f9;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #64748b;
            flex-shrink: 0;
        }
        
        .status-item.active .status-icon {
            background-color: #22c55e;
            color: white;
        }
        
        .status-content h5 {
            margin-bottom: 0.25rem;
            color: #1e293b;
        }
        
        .status-content p {
            color: #64748b;
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
        }
        
        .status-date {
            color: #94a3b8;
            font-size: 0.75rem;
        }
        
        @media (max-width: 480px) {
            .tracking-modal__content {
                padding: 1.5rem;
            }
            
            .tracking-form {
                flex-direction: column;
            }
        }
    `;
  document.head.appendChild(style);

  // Handle modal close
  const closeBtn = modal.querySelector(".tracking-modal__close");
  const overlay = modal.querySelector(".tracking-modal__overlay");

  const closeModal = () => {
    modal.classList.remove("active");
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 300);
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  // Handle tracking form submission
  const trackingForm = modal.querySelector(".tracking-form");
  trackingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const trackingInput = modal.querySelector(".tracking-input");
    const trackingResult = modal.querySelector(".tracking-result");

    if (trackingInput.value.trim()) {
      // Show tracking result (mock data)
      trackingResult.style.display = "block";
      trackingForm.style.display = "none";

      console.log("Tracking number:", trackingInput.value);
    }
  });

  return modal;
}

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification--${type}`;
  notification.textContent = message;

  // Add styles for notification
  const style = document.createElement("style");
  style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: #1e293b;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 3000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        }
        
        .notification--info {
            background-color: #0ea5e9;
        }
        
        .notification--success {
            background-color: #22c55e;
        }
        
        .notification--error {
            background-color: #ef4444;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        @media (max-width: 480px) {
            .notification {
                right: 10px;
                left: 10px;
                max-width: none;
            }
        }
    `;

  if (!document.querySelector("style[data-notifications]")) {
    style.setAttribute("data-notifications", "true");
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  console.log("COMO Logistics website loaded successfully");

  // Restore saved language preference, default to English
  const savedLang = localStorage.getItem("preferred_lang") || "en";
  languageSelect.value = savedLang;
  applyLanguage(savedLang);

  // Add loading animation removal
  document.body.classList.add("loaded");

  // Lazy loading for images (if needed)
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add("loaded");
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img").forEach((img) => {
      imageObserver.observe(img);
    });
  }
});

// Add loading styles
const loadingStyles = document.createElement("style");
loadingStyles.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    img.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyles);
