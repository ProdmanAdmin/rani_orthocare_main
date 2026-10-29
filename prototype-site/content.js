// Rani Ortho Care: prototype content.
// Every fact shown in the prototype lives here, so it can be updated without touching the layout.
// Each text field is { en, ta }. When the Tamil is empty, the English is shown.
// Sources: docs/business-context.md and docs/business-model.md. Keep these in step with those files.

window.CONTENT = {
  updated: "2026-10-29",

  clinic: {
    name: { en: "Rani Ortho Care", ta: "ராணி ஆர்த்தோ கேர்" },
    tagline: { en: "Your Mobility, Our Mission", ta: "உங்கள் இயக்கம், எங்கள் நோக்கம்" },
    philosophy: { en: "Life is movement, movement is life", ta: "வாழ்க்கையே இயக்கம், இயக்கமே வாழ்க்கை" },
    type: { en: "Orthopaedic clinic in Karaikudi, Tamil Nadu", ta: "காரைக்குடியில் உள்ள எலும்பு, மூட்டு சிகிச்சை கிளினிக்" },
    intro: {
      en: "Rani Ortho Care treats bone, joint and spine problems for people of all ages in Karaikudi and the surrounding region. Care starts with relieving pain, then finding and treating the root cause, so patients can move again. The clinic also runs free medical camps for the community.",
      ta: "காரைக்குடி மற்றும் சுற்றியுள்ள ஊர்களில், எல்லா வயதினருக்கும் எலும்பு, மூட்டு, முதுகெலும்பு பிரச்சனைகளுக்கு ராணி ஆர்த்தோ கேர் சிகிச்சை தருகிறது. முதலில் வலியைக் குறைத்து, பிறகு வலிக்கான உண்மையான காரணத்தைக் கண்டுபிடித்து சிகிச்சை தருகிறோம். நோக்கம்: நோயாளிகள் மீண்டும் நன்றாக நடக்க வேண்டும். நம் ஊர் மக்களுக்காக இலவச மருத்துவ முகாம்களும் நடத்துகிறோம்.",
    },
  },

  doctor: {
    name: { en: "Dr. N. Manikandan", ta: "டாக்டர் நா. மணிகண்டன்" },
    qualifications: "M.B.B.S., M.S. (Ortho)",
    roles: [
      { en: "Government Doctor", ta: "அரசு மருத்துவர்" },
      { en: "Consultant Orthopaedic Surgeon", ta: "எலும்புமுறிவு மற்றும் முடநீக்கியல் அறுவைசிகிச்சை நிபுணர்" },
    ],
    note: {
      en: "Runs Rani Ortho Care and leads all patient care. Approves all website content and medical wording.",
      ta: "ராணி ஆர்த்தோ கேர் கிளினிக்கை நடத்துகிறார், எல்லா நோயாளிகளின் சிகிச்சையையும் அவரே பார்த்துக்கொள்கிறார். இணையதளத்தில் வரும் எல்லா விஷயங்களும், மருத்துவ வார்த்தைகளும் அவர் சரிபார்த்த பிறகே வெளியாகும்.",
    },
    community: {
      en: "Runs free medical camps. When a camp patient needs surgery or physiotherapy, the clinic takes care of it.",
      ta: "இலவச மருத்துவ முகாம்கள் நடத்துகிறார். முகாமுக்கு வருபவர்களுக்கு ஆபரேஷன் அல்லது பிசியோதெரபி தேவைப்பட்டால், அதையும் கிளினிக்கே பார்த்துக்கொள்கிறது.",
    },
  },

  contact: {
    phone: { display: "+91 94445 53070", tel: "+919444553070", whatsapp: "919444553070" },
    landline: { display: "04565 233070", tel: "04565233070" },
    address: {
      en: "No. 2, M.M. Complex, 1st Beat, Koviloor Road, near Indian Bank, Karaikudi, Tamil Nadu 630001",
      ta: "எண் 2, எம்.எம். காம்ப்ளக்ஸ், 1வது பீட், கோவிலூர் ரோடு, இந்தியன் பேங்க் அருகில், காரைக்குடி, தமிழ்நாடு 630001",
    },
    // Source of truth: Google Business Profile.
    hours: [
      { days: { en: "Monday to Saturday", ta: "திங்கள் முதல் சனி வரை" }, time: "9:00 AM – 10:00 PM" },
      { days: { en: "Sunday", ta: "ஞாயிறு" }, time: "10:00 AM – 12:00 PM" },
    ],
    hoursSource: { en: "As listed on Google", ta: "Google-ல் உள்ளபடி" },
  },

  online: [
    { label: { en: "Website", ta: "வெப்சைட்" }, value: "raniorthocare.com", status: { en: "Domain owned. Website being built.", ta: "டொமைன் எங்களுடையது. வெப்சைட் தயாராகிக்கொண்டிருக்கிறது." } },
    { label: { en: "Google Business Profile", ta: "Google பிசினஸ் பக்கம்" }, value: "4.9 ★ · 59 reviews", status: { en: "Live. Hours and phone match.", ta: "இப்போது இருக்கிறது. நேரமும் போன் நம்பரும் சரியாக உள்ளன." } },
    { label: { en: "Instagram", ta: "இன்ஸ்டாகிராம்" }, value: "@rani_ortho_care", href: "https://www.instagram.com/rani_ortho_care/", status: { en: "Live. About 85 followers.", ta: "இப்போது இருக்கிறது. சுமார் 85 ஃபாலோயர்கள்." } },
  ],

  // As printed on the clinic's services sheet (back cover).
  services: [
    { en: "Treatment for broken bones (fractures)", ta: "எலும்பு முறிவுக்கு சிகிச்சை" },
    { en: "Knee, shoulder and joint pain relief", ta: "முட்டி, தோள்பட்டை, மூட்டு வலிக்கு சிகிச்சை" },
    { en: "Back pain and neck pain treatment", ta: "முதுகு வலி, கழுத்து வலிக்கு சிகிச்சை" },
    { en: "Spine surgery for disc problems and nerve compression", ta: "டிஸ்க் பிரச்சனை, நரம்பு அழுத்தத்துக்கு முதுகெலும்பு ஆபரேஷன்" },
    { en: "Arthritis care (joint swelling and pain)", ta: "மூட்டு வீக்கம் (ஆர்த்ரைடிஸ்), மூட்டு வலிக்கு சிகிச்சை" },
    { en: "Ligament and meniscus injury treatment", ta: "ஜவ்வு கிழிவுக்கு சிகிச்சை (லிகமென்ட், மெனிஸ்கஸ்)" },
    { en: "Sprains, sports injuries and muscle tears", ta: "சுளுக்கு, விளையாட்டில் ஏற்படும் காயம், தசை கிழிவு" },
    { en: "Joint replacement surgery (knee, hip)", ta: "மூட்டு மாற்று ஆபரேஷன் (முட்டி, இடுப்பு)" },
    { en: "Clubfoot treatment for children", ta: "குழந்தைகளின் பாத வளைவுக்கு (கிளப் ஃபுட்) சிகிச்சை" },
    { en: "Digital X-ray facility", ta: "டிஜிட்டல் எக்ஸ்ரே வசதி" },
    { en: "Physiotherapy for pain relief and recovery", ta: "வலி குறையவும், சீக்கிரம் குணமாகவும் பிசியோதெரபி" },
    { en: "Plaster, dressing and minor ortho procedures", ta: "பிளாஸ்டர், கட்டு (டிரஸ்ஸிங்), சிறு சிகிச்சைகள்" },
    { en: "Specialist consultation", ta: "சிறப்பு டாக்டர் ஆலோசனை" },
  ],

  // Business model: docs/business-model.md
  journey: [
    { step: "1", title: { en: "Relieve the pain", ta: "வலியைக் குறைப்பது" }, text: { en: "Comfort comes first. Pain is managed before anything else.", ta: "முதலில் நிம்மதி. எதற்கும் முன் வலியைக் குறைக்கிறோம்." } },
    { step: "2", title: { en: "Find the root cause", ta: "காரணத்தைக் கண்டுபிடிப்பது" }, text: { en: "Once the patient is comfortable, we diagnose why the pain started.", ta: "வலி கொஞ்சம் குறைந்த பிறகு, வலி ஏன் வந்தது என்று கண்டுபிடிக்கிறோம்." } },
    { step: "3", title: { en: "Restore movement", ta: "மீண்டும் நடக்க வைப்பது" }, text: { en: "Treating the cause so patients who arrive on a stretcher or wheelchair can walk out.", ta: "ஸ்ட்ரெச்சரிலோ வீல்சேரிலோ வருபவர்கள், திரும்பிப் போகும்போது நடந்தே போக வேண்டும் என்பதே நோக்கம்." } },
    { step: "4", title: { en: "Safely, always", ta: "எப்போதும் பாதுகாப்பாக" }, text: { en: "Every treatment is chosen to be safe and do no harm.", ta: "எந்த சிகிச்சையும் உடம்புக்குக் கெடுதல் இல்லாமல், பாதுகாப்பாக இருக்க வேண்டும்." } },
  ],

  pillars: [
    {
      no: "01", title: { en: "Pain management & root-cause relief", ta: "வலியைக் குறைத்து, காரணத்துக்கு சிகிச்சை" },
      points: [
        { en: "Relieve the patient's pain first, before focusing on the cause.", ta: "காரணத்தைத் தேடும் முன், முதலில் நோயாளியின் வலியைக் குறைப்பது." },
        { en: "Then diagnose and treat the root cause for lasting relief.", ta: "பிறகு உண்மையான காரணத்தைக் கண்டுபிடித்து, வலி நீண்ட காலம் குறைந்திருக்க சிகிச்சை." },
      ],
    },
    {
      no: "02", title: { en: "Mobility & functional restoration", ta: "மீண்டும் நடக்க, வேலை செய்ய" },
      points: [
        { en: "Patients who arrive on stretchers or in wheelchairs should walk out.", ta: "ஸ்ட்ரெச்சரிலோ வீல்சேரிலோ வருபவர்கள் நடந்தே திரும்ப வேண்டும்." },
        { en: "Core philosophy: \"Life is movement, movement is life.\"", ta: "அடிப்படைத் தத்துவம்: \"வாழ்க்கையே இயக்கம், இயக்கமே வாழ்க்கை.\"" },
      ],
    },
    {
      no: "03", title: { en: "Preventive orthopaedics", ta: "வலி வரும் முன் தடுப்பது" },
      points: [
        { en: "\"I work in IT, but I shouldn't get neck pain.\" \"I ride for hours, but I shouldn't get back pain.\"", ta: "\"நான் ஐடி வேலை செய்கிறேன், ஆனால் கழுத்து வலி வரக்கூடாது.\" \"மணிக்கணக்கில் வண்டி ஓட்டுகிறேன், ஆனால் முதுகு வலி வரக்கூடாது.\"" },
        { en: "Posture, ergonomic chairs, morning and evening exercises, early warning signs.", ta: "சரியாக உட்காரும் முறை, சரியான சேர், காலை மற்றும் சாயங்காலப் பயிற்சிகள், ஆரம்ப அறிகுறிகள்." },
        { en: "Coaching for IT companies, worksites and individuals.", ta: "ஐடி கம்பெனிகள், தொழிலாளர்கள் வேலை செய்யும் இடங்கள், தனி நபர்களுக்குப் பயிற்சி." },
      ],
    },
    {
      no: "04", title: { en: "Routine & advanced orthopaedics", ta: "சாதாரண மற்றும் பெரிய எலும்பு சிகிச்சைகள்" },
      points: [
        { en: "Fractures, arthritis, knee replacement (TKR), hip replacement (THR), spine surgery.", ta: "எலும்பு முறிவு, மூட்டு வீக்கம், முட்டி மற்றும் இடுப்பு மூட்டு மாற்று ஆபரேஷன், முதுகெலும்பு ஆபரேஷன்." },
        { en: "Children's orthopaedics: clubfoot, leg deformities from bone nutrient deficiency.", ta: "குழந்தைகள் எலும்பு சிகிச்சை: பாத வளைவு (கிளப் ஃபுட்), எலும்புச் சத்துக் குறைவால் கால் வளைவு." },
        { en: "Acute trauma and accident care.", ta: "விபத்து மற்றும் அவசரக் காயங்களுக்கு சிகிச்சை." },
      ],
    },
    {
      no: "05", title: { en: "Physiotherapy & rehabilitation", ta: "பிசியோதெரபி, மீண்டும் பலம் பெற பயிற்சி" },
      points: [
        { en: "Physiotherapy alongside treatment to strengthen muscles and speed recovery.", ta: "தசைகளுக்குப் பலம் கொடுத்து சீக்கிரம் குணமாக, சிகிச்சையுடன் பிசியோதெரபி." },
        { en: "After surgery, after a stroke (CVA), and coordination support for children with cerebral palsy.", ta: "ஆபரேஷனுக்குப் பிறகு, பக்கவாதத்துக்குப் பிறகு, CP (மூளை முடக்குவாதம்) உள்ள குழந்தைகள் கை கால்களை ஒழுங்காக அசைக்கப் பயிற்சி." },
      ],
    },
    {
      no: "06", title: { en: "Regenerative therapies", ta: "PRP போன்ற ஊசி சிகிச்சைகள்" },
      points: [
        { en: "PRP, GFC, BMAC and molecular therapeutics for chronic pain and rheumatoid arthritis.", ta: "நீண்ட நாள் வலி, முடக்கு வாதத்துக்கு PRP, GFC, BMAC மற்றும் மாலிகுலர் தெரபியூடிக்ஸ்." },
        { en: "Cartilage regeneration as an option before joint replacement, after individual assessment.", ta: "மூட்டு மாற்று ஆபரேஷனுக்கு முன், மூட்டுக்குள் உள்ள ஜவ்வை (கார்ட்டிலேஜ்) மீண்டும் வளர வைக்கும் சிகிச்சை, பரிசோதனைக்குப் பிறகு பொருந்துபவர்களுக்கு." },
      ],
    },
    {
      no: "07", title: { en: "Non-surgical management", ta: "ஆபரேஷன் இல்லாத சிகிச்சை" },
      points: [
        { en: "Structured non-surgical care for fractures, spine problems and arthritis.", ta: "எலும்பு முறிவு, முதுகெலும்பு, மூட்டு வீக்கத்துக்கு ஆபரேஷன் இல்லாத சிகிச்சை முறைகள்." },
        { en: "For patients who want to avoid or safely postpone surgery.", ta: "ஆபரேஷனைத் தவிர்க்க அல்லது பாதுகாப்பாகத் தள்ளிப்போட நினைப்பவர்களுக்கு." },
      ],
    },
    {
      no: "08", title: { en: "Patient safety first", ta: "நோயாளியின் பாதுகாப்பு முதலில்" },
      points: [
        { en: "Medicines, physiotherapy or regenerative care: only methods that are safe and do no harm.", ta: "மருந்து, பிசியோதெரபி, ஊசி சிகிச்சை எதுவானாலும், கெடுதல் இல்லாத பாதுகாப்பான முறைகள் மட்டுமே." },
      ],
    },
  ],

  goals: [
    { title: { en: "Regional reach", ta: "சுற்றியுள்ள ஊர்களுக்கும் தெரிய வேண்டும்" }, text: { en: "Be found by people in Karaikudi and the surrounding towns when they search for bone, joint or spine care, in English and in Tamil.", ta: "காரைக்குடி மற்றும் சுற்றியுள்ள ஊர் மக்கள் எலும்பு, மூட்டு, முதுகெலும்பு சிகிச்சையை ஆங்கிலத்திலோ தமிழிலோ தேடும்போது, எங்களைப் பார்க்க வேண்டும்." } },
    { title: { en: "Brand recognition", ta: "பெயர் தெரிய வேண்டும், நம்பிக்கை வர வேண்டும்" }, text: { en: "Make Rani Ortho Care and Dr. N. Manikandan familiar and trusted across the region.", ta: "ராணி ஆர்த்தோ கேர், டாக்டர் நா. மணிகண்டன் என்ற பெயர் இந்தப் பகுதி முழுவதும் தெரிந்து, நம்பிக்கை வர வேண்டும்." } },
    { title: { en: "Community care", ta: "நம் ஊர் மக்களுக்கு சேவை" }, text: { en: "Tell the story of the free medical camps, where camp patients who need surgery or physiotherapy are taken care of.", ta: "இலவச மருத்துவ முகாம்கள் பற்றியும், அங்கு வருபவர்களுக்கு ஆபரேஷன், பிசியோதெரபி தேவைப்பட்டால் கிளினிக் உதவுவது பற்றியும் மக்களுக்குச் சொல்வது." } },
    { title: { en: "Easy to reach", ta: "எளிதாகத் தொடர்புகொள்ள" }, text: { en: "Call, WhatsApp or directions in one tap from any phone.", ta: "எந்த மொபைலிலிருந்தும் ஒரே டச்சில் போன், வாட்ஸ்அப் அல்லது வழி (மேப்)." } },
  ],

  // Assets: files live in brand-assets/ (relative to this folder: brand-assets/).
  logos: [
    { name: { en: "Stacked · English", ta: "மேல்-கீழ் · ஆங்கிலம்" }, file: "Rani Ortho Care V1-1", use: { en: "Footer, sharing image, print", ta: "வெப்சைட் அடிப்பகுதி (ஃபூட்டர்), ஷேர் செய்யும் படம், பிரிண்ட்" } },
    { name: { en: "Horizontal · English", ta: "அகலமான · ஆங்கிலம்" }, file: "Rani Ortho Care V2-1", use: { en: "Website header", ta: "வெப்சைட் மேல்பகுதி (ஹெடர்)" } },
    { name: { en: "Stacked · Tamil", ta: "மேல்-கீழ் · தமிழ்" }, file: "Rani Ortho Care V1", use: { en: "Tamil pages, print", ta: "தமிழ்ப் பக்கங்கள், பிரிண்ட்" } },
    { name: { en: "Horizontal · Tamil", ta: "அகலமான · தமிழ்" }, file: "Rani Ortho Care V2", use: { en: "Tamil website header", ta: "தமிழ் வெப்சைட் மேல்பகுதி (ஹெடர்)" } },
  ],

  print: [
    { name: { en: "Visiting card · English", ta: "விசிட்டிங் கார்டு · ஆங்கிலம்" }, preview: "previews/visiting-card-en.jpg", file: "visiting-card/Visiting card -Eng.pdf", shape: "wide" },
    { name: { en: "Visiting card · Tamil", ta: "விசிட்டிங் கார்டு · தமிழ்" }, preview: "previews/visiting-card-ta.jpg", file: "visiting-card/tamil.pdf", shape: "wide" },
    { name: { en: "Prescription pad", ta: "மருந்துச் சீட்டு" }, preview: "previews/prescription.jpg", file: "prescription/Prescription.pdf", shape: "tall" },
    { name: { en: "Cover · front (doctor)", ta: "கவர் · முன்பக்கம் (டாக்டர்)" }, preview: "previews/cover-front-doctor.jpg", file: "cover/Front - Doctor Image.pdf", shape: "tall" },
    { name: { en: "Cover · front (knee)", ta: "கவர் · முன்பக்கம் (முட்டி)" }, preview: "previews/cover-front-knee.jpg", file: "cover/Font Cover.pdf", shape: "tall" },
    { name: { en: "Cover · back (services)", ta: "கவர் · பின்பக்கம் (சேவைகள்)" }, preview: "previews/cover-back.jpg", file: "cover/Back.pdf", shape: "tall" },
  ],

  colours: [
    { name: { en: "Brand blue", ta: "பிராண்ட் நீலம்" }, hex: "#3C59A8", from: { en: "The R and the wordmark", ta: "R எழுத்து மற்றும் பெயர்" } },
    { name: { en: "Spine green", ta: "முதுகெலும்பு பச்சை" }, hex: "#3DB54A", from: { en: "The spine in the R", ta: "R-இல் உள்ள முதுகெலும்பு" } },
    { name: { en: "Deep navy", ta: "அடர் நீலம்" }, hex: "#1B2A55", from: { en: "Print footer bars", ta: "பிரிண்ட்டில் உள்ள அடிப்பட்டைகள்" } },
    { name: { en: "Sky blue", ta: "வான் நீலம்" }, hex: "#7FD0F0", from: { en: "Cover shield and waves", ta: "கவரில் உள்ள கேடயம், அலைகள்" } },
  ],

  needed: [
    { en: "Photos of Dr. N. Manikandan, the clinic and the team (to discuss later)", ta: "டாக்டர், கிளினிக், டீம் புகைப்படங்கள் (பிறகு பேசலாம்)" },
    { en: "Free medical camp details: dates, places, photos", ta: "இலவச மருத்துவ முகாம் விவரங்கள்: தேதிகள், இடங்கள், புகைப்படங்கள்" },
    { en: "Google Business Profile link and owner access", ta: "Google பிசினஸ் பக்க லிங்க் மற்றும் அக்சஸ்" },
    { en: "Doctor's approval of the website wording for medical claims", ta: "மருத்துவ வார்த்தைகளுக்கு டாக்டரின் ஒப்புதல்" },
    { en: "Approval of the design system (section 4) by Dr. N. Manikandan", ta: "டிசைன் சிஸ்டத்துக்கு (பகுதி 4) டாக்டரின் ஒப்புதல்" },
    { en: "A white version of the logo for dark backgrounds", ta: "அடர் நிறப் பின்னணிக்கு வெள்ளை லோகோ" },
  ],
};
