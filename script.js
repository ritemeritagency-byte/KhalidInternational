const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwG4oExl7PlSNBWggjIV6qJQs0fWcCAZNNJEYkiWj93fa8RUdvx3rHVPNjfYSjv0Ukplw/exec';
const IS_LOCALHOST =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname === '::1';
const LOCAL_API_URL = IS_LOCALHOST ? 'http://localhost:3000/applications' : '';
const COMPANY_WHATSAPP_NUMBER = '639183787311';

const LANG_STORAGE_KEY = 'k_lang';

const repContacts = {
  Abby: '639858931972',
  Jhenny: '639565189578',
  Maricon: '639622721617',
};

const repLinks = {
  Abby: document.getElementById('abbyLink'),
  Jhenny: document.getElementById('jhennyLink'),
  Maricon: document.getElementById('mariconLink'),
};

const mobileNavToggle = document.getElementById('mobileNavToggle');
const mobileNavClose = document.getElementById('mobileNavClose');
const mobileNav = document.getElementById('mobileNav');
const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

const applyModal = document.getElementById('applyModal');
const openApplyModal = document.getElementById('openApplyModal');
const openApplyFromHero = document.getElementById('openApplyFromHero');
const openCallRequest = document.getElementById('openCallRequest');
const installAppButton = document.getElementById('installAppButton');
const companyWhatsappFloating = document.getElementById('companyWhatsappFloating');
const openApplyBottom = document.getElementById('openApplyBottom');
const closeApplyModal = document.getElementById('closeApplyModal');
const applicationForm = document.getElementById('applicationForm');
const positionField = document.getElementById('position');
const positionOtherWrap = document.getElementById('positionOtherWrap');
const positionOtherField = document.getElementById('positionOther');
const countryField = document.getElementById('country');
const countryOtherWrap = document.getElementById('countryOtherWrap');
const countryOtherField = document.getElementById('countryOther');
const callDateField = document.getElementById('callDate');
const chatBottomCta = document.getElementById('chatBottomCta');
const statusToast = document.getElementById('statusToast');

let deferredInstallPrompt = null;

const langSwitch = document.getElementById('langSwitch');
const langToggle = document.getElementById('langToggle');
const langCurrent = document.getElementById('langCurrent');
const langOptions = document.querySelectorAll('.lang-option');
const i18nNodes = document.querySelectorAll('[data-i18n]');
const i18nPlaceholderNodes = document.querySelectorAll('[data-i18n-placeholder]');

const TRANSLATIONS = {
  EN: {
    lang_label: 'English',
    mobile_menu: 'Menu',
    nav_about: 'About',
    nav_positions: 'Positions',
    nav_process: 'Process',
    nav_support: 'Support',
    nav_contact: 'Contact',
    apply_now: 'Apply Now',
    hero_kicker: '100% Free Placement',
    hero_title: 'Apply in Minutes, Start Your Overseas Journey Faster.',
    hero_desc: 'We guide applicants from registration to deployment for UAE, Qatar, and Kuwait opportunities.',
    start_application: 'Start Application',
    receive_call: 'Receive a Call',
    install_app: 'Download App',
    view_positions: 'View Positions',
    hero_panel_kicker: 'Latest Deployment',
    hero_panel_title: 'Jan 28, 2026 Success',
    hero_panel_note: 'Real applicant deployment with complete processing guidance.',
    trust_dmw: 'DMW Licensed Agency',
    trust_zero_fee: 'No Placement Fee Collection',
    trust_since: 'Serving Since 1999',
    mission_kicker: 'MISSION & VISION',
    mission_heading: 'Building Safer and Faster Overseas Careers',
    mission_title: 'Our Mission',
    mission_desc:
      'Our mission is to guide every applicant through legal and ethical recruitment, clear requirements, and hands-on support from application up to deployment.',
    vision_title: 'Our Vision',
    vision_desc:
      'Our vision is to help the Filipino community bridge toward possible work abroad so they can achieve their goals in life and support their families with dignity.',
    positions_kicker: 'AVAILABLE POSITIONS',
    positions_title: 'Choose a Role You Can Start With Confidence',
    country_all_hiring: 'Qatar / UAE / Kuwait',
    tag_most_applied: 'Most Applied',
    tag_urgent: 'Urgent',
    tag_immediate: 'Immediate',
    tag_priority: 'Priority',
    meta_fast_lane: 'Processing: Fast lane',
    meta_priority: 'Processing: Priority',
    meta_standard: 'Processing: Standard',
    meta_last_updated_today: 'Last updated: Today',
    apply_role: 'Apply for this role',
    deployments_kicker: 'RECENT DEPLOYMENTS',
    deployments_title: 'Real Applicant Success Highlights',
    caption_batch_success: 'Batch Success',
    caption_airport_sendoff: 'Airport Send-Off',
    caption_2026_milestone: '2026 Milestone',
    caption_new_deployment_team: 'New Deployment Team',
    testimonials_kicker: 'APPLICANT TESTIMONIES',
    testimonials_title: 'What Our Deployed Applicants Say',
    materials_kicker: 'DEPLOYED WORKERS',
    materials_title: 'Featured Deployed Worker Highlights',
    mat1_caption: 'Deployed Worker Highlight 1',
    mat2_caption: 'Deployed Worker Highlight 2',
    videos_kicker: 'SUCCESS VIDEOS',
    videos_title: 'Watch Real Applicant Stories',
    process_kicker: 'HOW IT WORKS',
    process_title: 'Simple Steps From Application to Deployment',
    step1_title: 'Apply Online',
    step1_desc: 'Fill out your profile and choose your preferred role.',
    step2_title: 'Specialist Review',
    step2_desc: 'Our team checks your profile and gives requirements guidance.',
    step3_title: 'Schedule Call',
    step3_desc: 'Coordinate with your selected specialist for next actions.',
    step4_title: 'Deployment Prep',
    step4_desc: 'Get final assistance until your deployment schedule.',
    support_kicker: 'SUPPORT TEAM',
    support_title: 'Message a Specialist Directly',
    specialist_role: 'Support Specialist',
    message_abby: 'Message Abby',
    message_jhenny: 'Message Jhenny',
    message_maricon: 'Message Maricon',
    floating_whatsapp: 'WhatsApp Us',
    floating_apply: 'Apply',
    mobile_apply_now: 'Apply Now',
    mobile_chat_specialist: 'Chat Specialist',
    modal_title: 'Quick Application Form',
    modal_kicker: 'No Placement Fee • Guided Process',
    modal_subtitle: 'Submit your details and continue to WhatsApp with your specialist.',
    form_group_personal: 'Personal Info',
    form_group_application: 'Application Details',
    form_group_support: 'Support & Notes',
    label_full_name: 'Full Name',
    label_phone: 'Phone Number',
    label_age: 'Age',
    label_location: 'Current Location',
    label_position: 'Position Applying For',
    opt_select_position: 'Select position',
    opt_household_worker: 'Household Worker',
    opt_house_cook: 'House Cook',
    opt_nanny: 'Nanny',
    opt_lady_driver: 'Lady Driver',
    opt_position_other: 'OTHER',
    label_position_other: 'Preferred Position (Specify)',
    position_other_placeholder: 'Type your preferred position',
    label_country: 'Preferred Country',
    opt_select_country: 'Select preferred country',
    opt_country_uae_dubai: 'UAE DUBAI',
    opt_country_qatar: 'QATAR',
    opt_country_kuwait: 'KUWAIT',
    opt_country_other: 'OTHER',
    label_country_other: 'Preferred Country (Specify)',
    country_other_placeholder: 'Type your preferred country',
    label_passport: 'Passport Status',
    opt_select_passport: 'Select passport status',
    opt_valid_passport: 'Valid Passport',
    opt_expired_passport: 'Expired Passport',
    opt_no_passport: 'No Passport Yet',
    opt_renewal: 'For Renewal',
    label_call_date: 'Preferred Call Date',
    label_call_time: 'Preferred Call Time',
    label_notes: 'Additional Notes',
    notes_placeholder: 'Optional message',
    label_representative: 'Choose Specialist',
    opt_select_specialist: 'Select specialist',
    form_trust_line: 'No placement fee • DMW Licensed: 088-LB-052424-R',
    submit_whatsapp: 'Send via WhatsApp',
    footer_brand_desc: 'Ethical recruitment support for Filipino workers with free placement processing and specialist guidance.',
    footer_quick_links: 'Quick Links',
    footer_link_positions: 'Available Positions',
    footer_link_process: 'Application Process',
    footer_link_support: 'Specialist Support',
    footer_link_privacy: 'Privacy Policy',
    footer_link_terms: 'Terms & Conditions',
    footer_license_title: 'DMW Licensed',
    footer_license_desc: 'This agency is DMW licensed and compliant for overseas recruitment.',
    footer_verify_dmw: 'Verify at DMW',
    footer_copy: '© 2026 Khalid International Recruitment Agency',
    contact_kicker: 'CONTACT US',
    contact_title: 'Visit or Message Our Office',
    contact_office_label: 'Office Location',
    contact_office_value: '2269 Nakar St., San Andres Bukid, Manila, Philippines',
    contact_hours_label: 'Office Hours',
    contact_hours_value: 'Monday to Saturday, 9:00 AM to 6:00 PM',
    contact_phone_label: 'WhatsApp / Phone',
    contact_open_map: 'Open in Google Maps',
    support_greeting: 'Hello {name}, I would like to ask about overseas application with Khalid International.',
    company_whatsapp_greeting: 'Hello, I would like to ask about overseas application opportunities with Khalid International.',
    toast_submit_success: 'Application saved. Opening WhatsApp...',
    toast_install_started: 'Install prompt opened.',
    toast_app_installed: 'App installed successfully.',
    install_not_supported: 'App install is not supported on this browser yet.',
    install_ios_hint: 'On iPhone: tap Share, then Add to Home Screen.',
    invalid_specialist: 'Please select a valid specialist.',
    alert_connection: 'Connection error. Please check your internet connection.',
    wa_header: 'Khalid International Application',
    wa_specialist: 'Specialist',
    wa_name: 'Name',
    wa_phone: 'Phone Number',
    wa_age: 'Age',
    wa_location: 'Location',
    wa_position: 'Position Applying For',
    wa_country: 'Preferred Country',
    wa_passport: 'Passport Status',
    wa_call_date: 'Preferred Call Date',
    wa_call_time: 'Preferred Call Time',
    wa_notes: 'Notes',
    wa_no_notes: 'No additional notes',
  },
  TL: {
    lang_label: 'Tagalog',
    mobile_menu: 'Menu',
    nav_about: 'Tungkol',
    nav_positions: 'Trabaho',
    nav_process: 'Proseso',
    nav_support: 'Suporta',
    nav_contact: 'Contact',
    apply_now: 'Mag-Apply',
    hero_kicker: '100% Libreng Placement',
    hero_title: 'Mag-Apply sa Ilang Minuto, Simulan ang Abroad Journey Mo.',
    hero_desc: 'Ginagabayan namin ang aplikante mula registration hanggang deployment para sa UAE, Qatar, at Kuwait.',
    start_application: 'Simulan ang Application',
    receive_call: 'Makatanggap ng Tawag',
    install_app: 'I-download ang App',
    view_positions: 'Tingnan ang Positions',
    hero_panel_kicker: 'Pinakabagong Deployment',
    hero_panel_title: 'Tagumpay noong Jan 28, 2026',
    hero_panel_note: 'Tunay na deployment ng aplikante na may kumpletong gabay sa proseso.',
    trust_dmw: 'DMW Licensed Agency',
    trust_zero_fee: 'Walang Placement Fee',
    trust_since: 'Naglilingkod Mula 1999',
    mission_kicker: 'MISYON AT BISYON',
    mission_heading: 'Mas Ligtas at Mas Mabilis na Overseas Career',
    mission_title: 'Aming Misyon',
    mission_desc:
      'Ang misyon namin ay gabayan ang bawat aplikante sa legal at etikal na recruitment, malinaw na requirements, at tuloy-tuloy na suporta mula application hanggang deployment.',
    vision_title: 'Aming Bisyon',
    vision_desc:
      'Ang bisyon namin ay tulungan ang Filipino community na magkaroon ng tulay sa mga posibleng trabaho abroad upang maabot nila ang kanilang goals sa buhay at masuportahan ang kanilang pamilya nang may dignidad.',
    positions_kicker: 'MGA AVAILABLE NA POSITIONS',
    positions_title: 'Pumili ng Trabahong Maaasahan Mo',
    country_all_hiring: 'Qatar / UAE / Kuwait',
    tag_most_applied: 'Pinaka Inapplyan',
    tag_urgent: 'Urgent',
    tag_immediate: 'Agarang Hiring',
    tag_priority: 'Priority',
    meta_fast_lane: 'Proseso: Fast lane',
    meta_priority: 'Proseso: Priority',
    meta_standard: 'Proseso: Standard',
    meta_last_updated_today: 'Huling update: Ngayon',
    apply_role: 'Mag-apply sa role na ito',
    deployments_kicker: 'MGA BAGONG DEPLOYMENT',
    deployments_title: 'Mga Tagumpay ng Ating Aplikante',
    caption_batch_success: 'Tagumpay na Batch',
    caption_airport_sendoff: 'Airport Send-Off',
    caption_2026_milestone: '2026 Milestone',
    caption_new_deployment_team: 'Bagong Deployment Team',
    testimonials_kicker: 'MGA TESTIMONYA NG APLIKANTE',
    testimonials_title: 'Sabi ng Mga Na-Deploy Naming Aplikante',
    materials_kicker: 'MGA NA-DEPLOY NA WORKER',
    materials_title: 'Mga Tampok na Highlight ng Na-Deploy na Worker',
    mat1_caption: 'Highlight ng Na-Deploy na Worker 1',
    mat2_caption: 'Highlight ng Na-Deploy na Worker 2',
    videos_kicker: 'MGA SUCCESS VIDEOS',
    videos_title: 'Panoorin ang Tunay na Applicant Stories',
    process_kicker: 'PAANO GUMAGANA',
    process_title: 'Simpleng Hakbang Mula Application Hanggang Deployment',
    step1_title: 'Mag-Apply Online',
    step1_desc: 'Punan ang profile at piliin ang gustong role.',
    step2_title: 'Review ng Specialist',
    step2_desc: 'Susuriin ng team ang profile mo at ibibigay ang requirements.',
    step3_title: 'Mag-Schedule ng Tawag',
    step3_desc: 'Makipag-coordinate sa specialist para sa susunod na steps.',
    step4_title: 'Deployment Prep',
    step4_desc: 'May gabay ka hanggang sa final deployment schedule.',
    support_kicker: 'SUPPORT TEAM',
    support_title: 'Direktang Mag-Message sa Specialist',
    specialist_role: 'Support Specialist',
    message_abby: 'I-message si Abby',
    message_jhenny: 'I-message si Jhenny',
    message_maricon: 'I-message si Maricon',
    floating_whatsapp: 'WhatsApp Kami',
    floating_apply: 'Apply',
    mobile_apply_now: 'Mag-Apply',
    mobile_chat_specialist: 'Chat Specialist',
    modal_title: 'Mabilis na Application Form',
    modal_kicker: 'Walang Placement Fee • May Gabay sa Proseso',
    modal_subtitle: 'I-submit ang details mo at ituloy sa WhatsApp kasama ang specialist.',
    form_group_personal: 'Personal na Impormasyon',
    form_group_application: 'Detalye ng Application',
    form_group_support: 'Suporta at Mensahe',
    label_full_name: 'Buong Pangalan',
    label_phone: 'Numero ng Telepono',
    label_age: 'Edad',
    label_location: 'Kasalukuyang Lokasyon',
    label_position: 'Ina-applyang Position',
    opt_select_position: 'Pumili ng position',
    opt_household_worker: 'Household Worker',
    opt_house_cook: 'House Cook',
    opt_nanny: 'Nanny',
    opt_lady_driver: 'Lady Driver',
    opt_position_other: 'IBA',
    label_position_other: 'Preferred na Position (Ilagay)',
    position_other_placeholder: 'I-type ang preferred na position',
    label_country: 'Preferred na Bansa',
    opt_select_country: 'Pumili ng preferred na bansa',
    opt_country_uae_dubai: 'UAE DUBAI',
    opt_country_qatar: 'QATAR',
    opt_country_kuwait: 'KUWAIT',
    opt_country_other: 'IBA',
    label_country_other: 'Preferred na Bansa (Ilagay)',
    country_other_placeholder: 'I-type ang preferred na bansa',
    label_passport: 'Passport Status',
    opt_select_passport: 'Pumili ng passport status',
    opt_valid_passport: 'Valid Passport',
    opt_expired_passport: 'Expired Passport',
    opt_no_passport: 'Wala Pang Passport',
    opt_renewal: 'For Renewal',
    label_call_date: 'Preferred na Petsa ng Tawag',
    label_call_time: 'Preferred na Oras ng Tawag',
    label_notes: 'Karagdagang Mensahe',
    notes_placeholder: 'Optional na mensahe',
    label_representative: 'Pumili ng Specialist',
    opt_select_specialist: 'Pumili ng specialist',
    form_trust_line: 'Walang placement fee • DMW Licensed: 088-LB-052424-R',
    submit_whatsapp: 'Ipadala sa WhatsApp',
    footer_brand_desc: 'Etikal na recruitment support para sa Filipino workers na may libreng placement at gabay ng specialist.',
    footer_quick_links: 'Quick Links',
    footer_link_positions: 'Available na Positions',
    footer_link_process: 'Proseso ng Application',
    footer_link_support: 'Suporta ng Specialist',
    footer_link_privacy: 'Privacy Policy',
    footer_link_terms: 'Terms and Conditions',
    footer_license_title: 'DMW Licensed',
    footer_license_desc: 'Ang ahensyang ito ay DMW licensed at compliant para sa overseas recruitment.',
    footer_verify_dmw: 'I-verify sa DMW',
    footer_copy: '© 2026 Khalid International Recruitment Agency',
    contact_kicker: 'CONTACT US',
    contact_title: 'Bumisita o Mag-Message sa Aming Office',
    contact_office_label: 'Lokasyon ng Office',
    contact_office_value: '2269 Nakar St., San Andres Bukid, Manila, Philippines',
    contact_hours_label: 'Oras ng Office',
    contact_hours_value: 'Lunes hanggang Sabado, 9:00 AM hanggang 6:00 PM',
    contact_phone_label: 'WhatsApp / Telepono',
    contact_open_map: 'Buksan sa Google Maps',
    support_greeting: 'Hello {name}, gusto ko po magtanong tungkol sa overseas application sa Khalid International.',
    company_whatsapp_greeting: 'Hello, gusto ko po magtanong tungkol sa overseas application opportunities sa Khalid International.',
    toast_submit_success: 'Na-save ang application. Bubuksan ang WhatsApp...',
    toast_install_started: 'Nabuksan ang install prompt.',
    toast_app_installed: 'Matagumpay na na-install ang app.',
    install_not_supported: 'Hindi pa supported ang app install sa browser na ito.',
    install_ios_hint: 'Sa iPhone: i-tap ang Share, tapos Add to Home Screen.',
    invalid_specialist: 'Pumili ng tamang specialist.',
    alert_connection: 'May error sa koneksyon. Paki-check ang internet mo.',
    wa_header: 'Khalid International Application',
    wa_specialist: 'Specialist',
    wa_name: 'Pangalan',
    wa_phone: 'Phone Number',
    wa_age: 'Edad',
    wa_location: 'Lokasyon',
    wa_position: 'Ina-applyang Position',
    wa_country: 'Preferred na Bansa',
    wa_passport: 'Passport Status',
    wa_call_date: 'Preferred na Petsa ng Tawag',
    wa_call_time: 'Preferred na Oras ng Tawag',
    wa_notes: 'Mensahe',
    wa_no_notes: 'Walang dagdag na mensahe',
  },
  CEB: {
    lang_label: 'Cebuano',
    mobile_menu: 'Menu',
    nav_about: 'About',
    nav_positions: 'Trabaho',
    nav_process: 'Proseso',
    nav_support: 'Suporta',
    nav_contact: 'Contact',
    apply_now: 'Apply Karon',
    hero_kicker: '100% Libre nga Placement',
    hero_title: 'Pag-apply sa Pipila ka Minuto, Sugdi ang Imong Abroad Journey.',
    hero_desc: 'Giyaan namo ang aplikante gikan sa registration hangtod deployment para sa UAE, Qatar, ug Kuwait.',
    start_application: 'Sugdi ang Application',
    receive_call: 'Makadawat og Tawag',
    install_app: 'I-download ang App',
    view_positions: 'Tan-awa ang Positions',
    hero_panel_kicker: 'Pinakabag-ong Deployment',
    hero_panel_title: 'Kalampusan Jan 28, 2026',
    hero_panel_note: 'Tinuod nga deployment sa aplikante uban sa kompleto nga giya sa proseso.',
    trust_dmw: 'DMW Licensed Agency',
    trust_zero_fee: 'Walay Placement Fee',
    trust_since: 'Nagsilbi Sukad 1999',
    mission_kicker: 'MISYON UG BISYON',
    mission_heading: 'Mas Luwas ug Mas Paspas nga Overseas Career',
    mission_title: 'Among Misyon',
    mission_desc:
      'Among misyon mao ang paggiya sa matag aplikante pinaagi sa legal ug ethical nga recruitment, klaro nga requirements, ug hands-on nga suporta gikan sa application hangtod deployment.',
    vision_title: 'Among Bisyon',
    vision_desc:
      'Among bisyon mao ang pagtabang sa Filipino community nga maka-bridge ngadto sa posibleng trabaho sa abroad aron maabot nila ang ilang goals sa kinabuhi ug masuportahan ang ilang pamilya nga adunay dignidad.',
    positions_kicker: 'AVAILABLE NGA POSITIONS',
    positions_title: 'Pilia ang Role nga Masaligan Nimo',
    country_all_hiring: 'Qatar / UAE / Kuwait',
    tag_most_applied: 'Pinaka Daghan Apply',
    tag_urgent: 'Urgent',
    tag_immediate: 'Dali nga Hiring',
    tag_priority: 'Priority',
    meta_fast_lane: 'Proseso: Fast lane',
    meta_priority: 'Proseso: Priority',
    meta_standard: 'Proseso: Standard',
    meta_last_updated_today: 'Last update: Karon',
    apply_role: 'Apply niining role',
    deployments_kicker: 'BAG-ONG DEPLOYMENTS',
    deployments_title: 'Tinuod nga Kalampusan sa Aplikante',
    caption_batch_success: 'Batch Success',
    caption_airport_sendoff: 'Airport Send-Off',
    caption_2026_milestone: '2026 Milestone',
    caption_new_deployment_team: 'Bag-ong Deployment Team',
    testimonials_kicker: 'TESTIMONYA SA APLIKANTE',
    testimonials_title: 'Giingon sa Among mga Na-Deploy nga Aplikante',
    materials_kicker: 'MGA NA-DEPLOY NGA WORKER',
    materials_title: 'Featured Highlight sa mga Na-Deploy nga Worker',
    mat1_caption: 'Highlight sa Na-Deploy nga Worker 1',
    mat2_caption: 'Highlight sa Na-Deploy nga Worker 2',
    videos_kicker: 'SUCCESS VIDEOS',
    videos_title: 'Tan-awa ang Tinuod nga Applicant Stories',
    process_kicker: 'UNSAON PAGLIHOK',
    process_title: 'Yano nga Lakang Gikan Application hangtod Deployment',
    step1_title: 'Apply Online',
    step1_desc: 'Pun-a ang profile ug pilia ang gusto nga role.',
    step2_title: 'Review sa Specialist',
    step2_desc: 'Susihon sa team ang imong profile ug requirements.',
    step3_title: 'Schedule og Tawag',
    step3_desc: 'Makig-coordinate sa specialist para sa sunod nga steps.',
    step4_title: 'Deployment Prep',
    step4_desc: 'Naa kay giya hangtod sa final deployment schedule.',
    support_kicker: 'SUPPORT TEAM',
    support_title: 'Diretso nga Message sa Specialist',
    specialist_role: 'Support Specialist',
    message_abby: 'Message Abby',
    message_jhenny: 'Message Jhenny',
    message_maricon: 'Message Maricon',
    floating_whatsapp: 'WhatsApp Namo',
    floating_apply: 'Apply',
    mobile_apply_now: 'Apply Karon',
    mobile_chat_specialist: 'Chat Specialist',
    modal_title: 'Paspas nga Application Form',
    modal_kicker: 'Walay Placement Fee • Naay Giya sa Proseso',
    modal_subtitle: 'I-submit ang imong details ug dayon sa WhatsApp uban sa specialist.',
    form_group_personal: 'Personal nga Impormasyon',
    form_group_application: 'Detalye sa Application',
    form_group_support: 'Suporta ug Notes',
    label_full_name: 'Kumpletong Ngalan',
    label_phone: 'Numero sa Telepono',
    label_age: 'Edad',
    label_location: 'Karon nga Lokasyon',
    label_position: 'Position nga Gi-applyan',
    opt_select_position: 'Pilia ang position',
    opt_household_worker: 'Household Worker',
    opt_house_cook: 'House Cook',
    opt_nanny: 'Nanny',
    opt_lady_driver: 'Lady Driver',
    opt_position_other: 'UBAN',
    label_position_other: 'Preferred nga Position (Isulat)',
    position_other_placeholder: 'Isulat ang preferred nga position',
    label_country: 'Preferred nga Nasod',
    opt_select_country: 'Pilia ang preferred nga nasod',
    opt_country_uae_dubai: 'UAE DUBAI',
    opt_country_qatar: 'QATAR',
    opt_country_kuwait: 'KUWAIT',
    opt_country_other: 'UBAN',
    label_country_other: 'Preferred nga Nasod (Isulat)',
    country_other_placeholder: 'Isulat ang preferred nga nasod',
    label_passport: 'Passport Status',
    opt_select_passport: 'Pilia ang passport status',
    opt_valid_passport: 'Valid Passport',
    opt_expired_passport: 'Expired Passport',
    opt_no_passport: 'Wala pay Passport',
    opt_renewal: 'For Renewal',
    label_call_date: 'Preferred nga Petsa sa Tawag',
    label_call_time: 'Preferred nga Oras sa Tawag',
    label_notes: 'Dugang nga Notes',
    notes_placeholder: 'Optional nga mensahe',
    label_representative: 'Pilia ang Specialist',
    opt_select_specialist: 'Pilia ang specialist',
    form_trust_line: 'Walay placement fee • DMW Licensed: 088-LB-052424-R',
    submit_whatsapp: 'Ipadala sa WhatsApp',
    footer_brand_desc: 'Ethical nga recruitment support para sa Filipino workers nga libre placement ug specialist guidance.',
    footer_quick_links: 'Quick Links',
    footer_link_positions: 'Available nga Positions',
    footer_link_process: 'Proseso sa Application',
    footer_link_support: 'Suporta sa Specialist',
    footer_link_privacy: 'Privacy Policy',
    footer_link_terms: 'Terms and Conditions',
    footer_license_title: 'DMW Licensed',
    footer_license_desc: 'Kini nga ahensya DMW licensed ug compliant para sa overseas recruitment.',
    footer_verify_dmw: 'I-verify sa DMW',
    footer_copy: '© 2026 Khalid International Recruitment Agency',
    contact_kicker: 'CONTACT US',
    contact_title: 'Bisitaha o I-message ang Among Office',
    contact_office_label: 'Lokasyon sa Office',
    contact_office_value: '2269 Nakar St., San Andres Bukid, Manila, Philippines',
    contact_hours_label: 'Oras sa Office',
    contact_hours_value: 'Lunes hangtod Sabado, 9:00 AM hangtod 6:00 PM',
    contact_phone_label: 'WhatsApp / Telepono',
    contact_open_map: 'Ablihi sa Google Maps',
    support_greeting: 'Hello {name}, mangutana ko bahin sa overseas application sa Khalid International.',
    company_whatsapp_greeting: 'Hello, mangutana ko bahin sa overseas application opportunities sa Khalid International.',
    toast_submit_success: 'Na-save na ang application. Ablihan ang WhatsApp...',
    toast_install_started: 'Naablihan na ang install prompt.',
    toast_app_installed: 'Malampuson nga na-install ang app.',
    install_not_supported: 'Dili pa supported ang app install sa kini nga browser.',
    install_ios_hint: 'Sa iPhone: i-tap ang Share, unya Add to Home Screen.',
    invalid_specialist: 'Palihug pili ug sakto nga specialist.',
    alert_connection: 'Naay connection error. Palihug i-check ang internet.',
    wa_header: 'Khalid International Application',
    wa_specialist: 'Specialist',
    wa_name: 'Ngalan',
    wa_phone: 'Phone Number',
    wa_age: 'Edad',
    wa_location: 'Lokasyon',
    wa_position: 'Position nga Gi-applyan',
    wa_country: 'Preferred nga Nasod',
    wa_passport: 'Passport Status',
    wa_call_date: 'Preferred nga Petsa sa Tawag',
    wa_call_time: 'Preferred nga Oras sa Tawag',
    wa_notes: 'Notes',
    wa_no_notes: 'Walay dugang nga mensahe',
  },
};

let currentLang = 'EN';

function getTranslation(lang, key) {
  const selected = TRANSLATIONS[lang] || TRANSLATIONS.EN;
  return selected[key] || TRANSLATIONS.EN[key] || key;
}

function t(key) {
  return getTranslation(currentLang, key);
}

function createWhatsAppUrl(number, message) {
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
}

function setMobileNavState(isOpen) {
  if (!mobileNav || !mobileNavBackdrop) return;
  mobileNav.classList.toggle('open', isOpen);
  mobileNavBackdrop.classList.toggle('open', isOpen);
  mobileNav.setAttribute('aria-hidden', String(!isOpen));
  if (mobileNavToggle) mobileNavToggle.setAttribute('aria-expanded', String(isOpen));

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else if (!applyModal || !applyModal.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function toggleOtherField(controller, wrapper, input) {
  if (!controller || !wrapper || !input) return;

  const isOther = controller.value === 'OTHER';
  wrapper.classList.toggle('show', isOther);
  input.required = isOther;

  if (!isOther) {
    input.value = '';
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function getTodayIsoDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function showToast(message) {
  if (!statusToast || !message) return;
  statusToast.textContent = message;
  statusToast.classList.add('show');

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    statusToast.classList.remove('show');
  }, 1800);
}

function isIosDevice() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isAppInstalled() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}

function updateInstallAppCta() {
  if (!installAppButton) return;

  if (isAppInstalled()) {
    installAppButton.hidden = true;
    return;
  }

  if (deferredInstallPrompt || isIosDevice()) {
    installAppButton.hidden = false;
    return;
  }

  installAppButton.hidden = true;
}

async function handleInstallApp() {
  if (isAppInstalled()) {
    installAppButton.hidden = true;
    return;
  }

  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    updateInstallAppCta();
    showToast(t('toast_install_started'));
    return;
  }

  if (isIosDevice()) {
    window.alert(t('install_ios_hint'));
    return;
  }

  window.alert(t('install_not_supported'));
}

function closeLangMenu() {
  if (!langSwitch || !langToggle) return;
  langSwitch.classList.remove('open');
  langToggle.setAttribute('aria-expanded', 'false');
}

function openLangMenu() {
  if (!langSwitch || !langToggle) return;
  langSwitch.classList.add('open');
  langToggle.setAttribute('aria-expanded', 'true');
}

function setSupportLinks() {
  Object.entries(repLinks).forEach(([name, link]) => {
    if (!link) return;
    const greeting = t('support_greeting').replace('{name}', name);
    link.href = createWhatsAppUrl(repContacts[name], greeting);
  });

  if (chatBottomCta) {
    const defaultRep = 'Abby';
    const greeting = t('support_greeting').replace('{name}', defaultRep);
    chatBottomCta.href = createWhatsAppUrl(repContacts[defaultRep], greeting);
  }

  if (companyWhatsappFloating) {
    const greeting = t('company_whatsapp_greeting');
    companyWhatsappFloating.href = createWhatsAppUrl(COMPANY_WHATSAPP_NUMBER, greeting);
  }
}

function applyLanguage(lang) {
  currentLang = TRANSLATIONS[lang] ? lang : 'EN';
  localStorage.setItem(LANG_STORAGE_KEY, currentLang);

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) return;
    node.textContent = t(key);
  });

  i18nPlaceholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (!key) return;
    node.setAttribute('placeholder', t(key));
  });

  if (langCurrent) langCurrent.textContent = t('lang_label');

  langOptions.forEach((option) => {
    option.classList.toggle('active', option.dataset.lang === currentLang);
  });

  document.documentElement.lang = currentLang === 'EN' ? 'en' : currentLang === 'TL' ? 'tl' : 'ceb';
  setSupportLinks();
}

async function submitToGoogleSheets(payload) {
  if (!GOOGLE_SCRIPT_URL) return true;

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (error) {
    console.error('Failed to submit to Google Sheets:', error);
    return false;
  }
}

async function submitToJsonServer(payload) {
  if (!LOCAL_API_URL) return false;

  try {
    const response = await fetch(LOCAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`json-server rejected application with status ${response.status}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to submit to json-server:', error);
    return false;
  }
}

function setModalState(isOpen) {
  if (!applyModal) return;
  applyModal.classList.toggle('open', isOpen);
  applyModal.setAttribute('aria-hidden', String(!isOpen));
  document.body.style.overflow =
    isOpen || (mobileNav && mobileNav.classList.contains('open')) ? 'hidden' : '';
}

function initCardReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = [
    '.mission-card',
    '.position-card',
    '.success-photo',
    '.testimonial-card',
    '.material-card',
    '.video-card',
    '.process-grid article',
    '.specialist-card',
    '.contact-card',
    '.contact-map',
  ];

  const uniqueTargets = new Set();
  revealTargets.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => uniqueTargets.add(element));
  });

  if (reduceMotion || uniqueTargets.size === 0) return;

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  Array.from(uniqueTargets).forEach((element, index) => {
    element.classList.add('reveal-card');
    element.style.setProperty('--reveal-delay', `${Math.min(index * 40, 360)}ms`);
    observer.observe(element);
  });
}

const preferredLang = localStorage.getItem(LANG_STORAGE_KEY);
if (preferredLang && TRANSLATIONS[preferredLang]) currentLang = preferredLang;
applyLanguage(currentLang);
initCardReveal();

if (langToggle) {
  langToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    if (langSwitch && langSwitch.classList.contains('open')) closeLangMenu();
    else openLangMenu();
  });
}

if (mobileNavToggle) {
  mobileNavToggle.addEventListener('click', () => {
    const isOpen = mobileNav && mobileNav.classList.contains('open');
    setMobileNavState(!isOpen);
  });
}

if (mobileNavClose) {
  mobileNavClose.addEventListener('click', () => setMobileNavState(false));
}

if (mobileNavBackdrop) {
  mobileNavBackdrop.addEventListener('click', () => setMobileNavState(false));
}

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => setMobileNavState(false));
});

if (positionField && positionOtherWrap && positionOtherField) {
  positionField.addEventListener('change', () => {
    toggleOtherField(positionField, positionOtherWrap, positionOtherField);
  });
}

if (countryField && countryOtherWrap && countryOtherField) {
  countryField.addEventListener('change', () => {
    toggleOtherField(countryField, countryOtherWrap, countryOtherField);
  });
}

toggleOtherField(positionField, positionOtherWrap, positionOtherField);
toggleOtherField(countryField, countryOtherWrap, countryOtherField);
updateInstallAppCta();

if (installAppButton) {
  installAppButton.addEventListener('click', handleInstallApp);
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallAppCta();
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  updateInstallAppCta();
  showToast(t('toast_app_installed'));
});

langOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const selectedLang = option.dataset.lang || 'EN';
    applyLanguage(selectedLang);
    closeLangMenu();
  });
});

document.addEventListener('click', (event) => {
  if (!langSwitch) return;
  if (!langSwitch.contains(event.target)) closeLangMenu();
});

document.querySelectorAll('[data-rep-card]').forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    const repName = card.getAttribute('data-rep-card');
    if (!repName || !repLinks[repName] || !repLinks[repName].href) return;
    window.open(repLinks[repName].href, '_blank', 'noopener,noreferrer');
  });
});

if (openApplyModal) openApplyModal.addEventListener('click', () => setModalState(true));
if (openApplyFromHero) openApplyFromHero.addEventListener('click', () => setModalState(true));
if (openCallRequest) openCallRequest.addEventListener('click', () => setModalState(true));
if (openApplyBottom) openApplyBottom.addEventListener('click', () => setModalState(true));
if (closeApplyModal) closeApplyModal.addEventListener('click', () => setModalState(false));

if (applyModal) {
  applyModal.addEventListener('click', (event) => {
    if (event.target === applyModal) setModalState(false);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setModalState(false);
    closeLangMenu();
    setMobileNavState(false);
  }
});

document.querySelectorAll('.apply-position').forEach((button) => {
  button.addEventListener('click', () => {
    const selectedPosition = button.getAttribute('data-position');
    if (positionField && selectedPosition) {
      positionField.value = selectedPosition;
    }
    setModalState(true);
  });
});

if (applicationForm) {
  if (callDateField) {
    callDateField.min = getTodayIsoDate();
  }

  applicationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(applicationForm);
    const values = Object.fromEntries(formData.entries());

    const selectedRep = values.representative;
    const repNumber = repContacts[selectedRep];

    if (!repNumber) {
      window.alert(t('invalid_specialist'));
      return;
    }

    const message = [
      t('wa_header'),
      '',
      `${t('wa_specialist')}: ${selectedRep}`,
      `${t('wa_name')}: ${values.fullName}`,
      `${t('wa_phone')}: ${values.phoneNumber}`,
      `${t('wa_age')}: ${values.age}`,
      `${t('wa_location')}: ${values.location}`,
      `${t('wa_position')}: ${values.position === 'OTHER' ? values.positionOther : values.position}`,
      `${t('wa_country')}: ${values.country === 'OTHER' ? values.countryOther : values.country}`,
      `${t('wa_passport')}: ${values.passportStatus}`,
      `${t('wa_call_date')}: ${values.callDate}`,
      `${t('wa_call_time')}: ${values.callTime}`,
      `${t('wa_notes')}: ${values.notes || t('wa_no_notes')}`,
    ].join('\n');
    const whatsappUrl = createWhatsAppUrl(repNumber, message);
    const whatsappWindow = window.open('about:blank', '_blank');
    if (whatsappWindow) whatsappWindow.opener = null;

    const sheetPayload = {
      fullName: values.fullName,
      phoneNumber: values.phoneNumber,
      position: values.position === 'OTHER' ? values.positionOther : values.position,
      targetCountry: values.country === 'OTHER' ? values.countryOther : values.country,
      age: values.age,
      currentLocation: values.location,
      appointmentDate: values.callDate || 'N/A',
      appointmentTime: values.callTime || 'N/A',
      passportStatus: values.passportStatus,
      assignedAgent: selectedRep,
      notes: `[SPECIALIST: ${selectedRep}] ${values.notes || 'No message'}`,
    };

    const localPayload = {
      ...sheetPayload,
      submittedAt: new Date().toISOString(),
    };

    const [jsonServerSaved, sheetSaved] = await Promise.all([
      submitToJsonServer(localPayload),
      submitToGoogleSheets(sheetPayload),
    ]);

    if (!jsonServerSaved && !sheetSaved) {
      if (whatsappWindow && !whatsappWindow.closed) whatsappWindow.close();
      window.alert(t('alert_connection'));
      return;
    }

    showToast(t('toast_submit_success'));
    await wait(650);

    if (whatsappWindow && !whatsappWindow.closed) {
      whatsappWindow.location.replace(whatsappUrl);
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    applicationForm.reset();
    toggleOtherField(positionField, positionOtherWrap, positionOtherField);
    toggleOtherField(countryField, countryOtherWrap, countryOtherField);
    setModalState(false);
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    if (IS_LOCALHOST) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      });

      if ('caches' in window) {
        caches.keys().then((keys) => {
          keys.forEach((key) => caches.delete(key));
        });
      }
      return;
    }

    navigator.serviceWorker.register('./service-worker.js').catch((error) => {
      console.error('Service worker registration failed:', error);
    });
  });
}
