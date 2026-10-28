// Rani Ortho Care: prototype content.
// Every fact shown in the prototype lives here, so it can be updated without touching the layout.
// Each text field is { en, ta }. When the Tamil is empty, the English is shown.
// Sources: docs/business-context.md and docs/business-model.md. Keep these in step with those files.

window.CONTENT = {
  updated: "2026-10-28",

  clinic: {
    name: { en: "Rani Ortho Care", ta: "ராணி ஆர்த்தோ கேர்" },
    tagline: { en: "Your Mobility, Our Mission", ta: "உங்கள் இயக்கம், எங்கள் நோக்கம்" },
    philosophy: { en: "Life is movement, movement is life", ta: "வாழ்க்கையே இயக்கம், இயக்கமே வாழ்க்கை" },
    type: { en: "Orthopaedic clinic in Karaikudi, Tamil Nadu", ta: "காரைக்குடியில் உள்ள எலும்பியல் சிகிச்சை மையம்" },
    intro: {
      en: "Rani Ortho Care treats bone, joint and spine problems for people of all ages in Karaikudi and the surrounding region. Care starts with relieving pain, then finding and treating the root cause, so patients can move again. The clinic also runs free medical camps for the community.",
      ta: "ராணி ஆர்த்தோ கேர், காரைக்குடி மற்றும் சுற்றுவட்டாரப் பகுதி மக்களுக்கு எலும்பு, மூட்டு மற்றும் முதுகுத் தண்டு பிரச்சனைகளுக்குச் சிகிச்சை அளிக்கிறது. முதலில் வலி நிவாரணம், பிறகு மூல காரணத்தைக் கண்டறிந்து சிகிச்சை, அதன் மூலம் நோயாளிகள் மீண்டும் இயல்பாக நடமாட உதவுகிறோம். சமூகத்திற்காக இலவச மருத்துவ முகாம்களும் நடத்துகிறோம்.",
    },
  },

  doctor: {
    name: { en: "Dr. N. Manikandan", ta: "Dr. நா. மணிகண்டன்" },
    qualifications: "M.B.B.S., M.S. (Ortho)",
    roles: [
      { en: "Government Doctor", ta: "அரசு மருத்துவர்" },
      { en: "Consultant Orthopaedic Surgeon", ta: "எலும்புமுறிவு மற்றும் முடநீக்கியல் அறுவைசிகிச்சை நிபுணர்" },
    ],
    note: {
      en: "Runs Rani Ortho Care and leads all patient care. Approves all website content and medical wording.",
      ta: "ராணி ஆர்த்தோ கேர் மையத்தை நடத்தி, அனைத்து சிகிச்சைகளுக்கும் தலைமை வகிக்கிறார். இணையதள உள்ளடக்கம் மற்றும் மருத்துவ வாசகங்கள் அனைத்தும் இவரது ஒப்புதலுடன் வெளியிடப்படும்.",
    },
    community: {
      en: "Runs free medical camps. When a camp patient needs surgery or physiotherapy, the clinic takes care of it.",
      ta: "இலவச மருத்துவ முகாம்களை நடத்துகிறார். முகாமில் வரும் நோயாளிகளுக்கு அறுவை சிகிச்சை அல்லது பிசியோதெரபி தேவைப்பட்டால், அதையும் மையமே கவனித்துக்கொள்கிறது.",
    },
  },

  contact: {
    phone: { display: "+91 94445 53070", tel: "+919444553070", whatsapp: "919444553070" },
    landline: { display: "04565 233070", tel: "04565233070" },
    address: {
      en: "No. 2, M.M. Complex, 1st Beat, Koviloor Road, near Indian Bank, Karaikudi, Tamil Nadu 630001",
      ta: "எண் 2, எம்.எம். காம்ப்ளக்ஸ், 1வது பீட், கோவிலூர் சாலை, இந்தியன் வங்கி அருகில், காரைக்குடி, தமிழ்நாடு 630001",
    },
    // Source of truth: Google Business Profile.
    hours: [
      { days: { en: "Monday to Saturday", ta: "திங்கள் முதல் சனி வரை" }, time: "9:00 AM – 10:00 PM" },
      { days: { en: "Sunday", ta: "ஞாயிறு" }, time: "10:00 AM – 12:00 PM" },
    ],
    hoursSource: { en: "As listed on Google", ta: "Google பட்டியலின்படி" },
  },

  online: [
    { label: { en: "Website", ta: "இணையதளம்" }, value: "raniorthocare.com", status: { en: "Domain owned. Website being built.", ta: "டொமைன் எங்களுடையது. இணையதளம் உருவாக்கப்படுகிறது." } },
    { label: { en: "Google Business Profile", ta: "Google வணிகப் பக்கம்" }, value: "4.9 ★ · 59 reviews", status: { en: "Live. Hours and phone match.", ta: "செயலில் உள்ளது." } },
    { label: { en: "Instagram", ta: "இன்ஸ்டாகிராம்" }, value: "@rani_ortho_care", href: "https://www.instagram.com/rani_ortho_care/", status: { en: "Live. About 85 followers.", ta: "செயலில் உள்ளது." } },
  ],

  // As printed on the clinic's services sheet (back cover).
  services: [
    { en: "Treatment for broken bones (fractures)", ta: "எலும்புமுறிவு சிகிச்சை" },
    { en: "Knee, shoulder and joint pain relief", ta: "முழங்கால், தோள்பட்டை, மூட்டு வலி நிவாரணம்" },
    { en: "Back pain and neck pain treatment", ta: "முதுகு வலி, கழுத்து வலி சிகிச்சை" },
    { en: "Spine surgery for disc problems and nerve compression", ta: "டிஸ்க் பிரச்சனை மற்றும் நரம்பு அழுத்த சிகிச்சைக்கான முதுகுத் தண்டு அறுவை சிகிச்சை" },
    { en: "Arthritis care (joint swelling and pain)", ta: "ஆர்த்ரைட்டிஸ் (மூட்டு வீக்கம்) பராமரிப்பு" },
    { en: "Ligament and meniscus injury treatment", ta: "லிகமென்ட் (தசைநார்) மற்றும் மெனிஸ்கஸ் சவ்வு கிழிவு சிகிச்சை" },
    { en: "Sprains, sports injuries and muscle tears", ta: "சுளுக்கு, விளையாட்டு காயங்கள், தசை கிழிவு" },
    { en: "Joint replacement surgery (knee, hip)", ta: "மூட்டு மாற்று அறுவை சிகிச்சை (முழங்கால், இடுப்பு)" },
    { en: "Clubfoot treatment for children", ta: "குழந்தைகளுக்கான கிளப் பாதம் சிகிச்சை" },
    { en: "Digital X-ray facility", ta: "டிஜிட்டல் எக்ஸ்ரே வசதி" },
    { en: "Physiotherapy for pain relief and recovery", ta: "பிசியோதெரபி: வலி குறைத்தல் மற்றும் மீட்பு" },
    { en: "Plaster, dressing and minor ortho procedures", ta: "பிளாஸ்டர், டிரஸ்ஸிங் மற்றும் சிறு சிகிச்சைகள்" },
    { en: "Specialist consultation", ta: "நிபுணர் ஆலோசனை" },
  ],

  // Business model: docs/business-model.md
  journey: [
    { step: "1", title: { en: "Relieve the pain", ta: "வலி நிவாரணம்" }, text: { en: "Comfort comes first. Pain is managed before anything else.", ta: "முதலில் நிம்மதி. மற்ற எதற்கும் முன் வலியைக் குறைக்கிறோம்." } },
    { step: "2", title: { en: "Find the root cause", ta: "மூல காரணம் கண்டறிதல்" }, text: { en: "Once the patient is comfortable, we diagnose why the pain started.", ta: "நோயாளி நிம்மதியான பின், வலிக்கான காரணத்தைக் கண்டறிகிறோம்." } },
    { step: "3", title: { en: "Restore movement", ta: "இயக்கத்தை மீட்டெடுத்தல்" }, text: { en: "Treating the cause so patients who arrive on a stretcher or wheelchair can walk out.", ta: "ஸ்ட்ரெச்சரிலோ சக்கர நாற்காலியிலோ வருபவர்கள் நடந்தே செல்லும் வகையில் சிகிச்சை." } },
    { step: "4", title: { en: "Safely, always", ta: "எப்போதும் பாதுகாப்பாக" }, text: { en: "Every treatment is chosen to be safe and do no harm.", ta: "ஒவ்வொரு சிகிச்சையும் பாதுகாப்பானதாகவும் தீங்கற்றதாகவும் இருக்கும்." } },
  ],

  pillars: [
    {
      no: "01", title: { en: "Pain management & root-cause relief", ta: "வலி நிவாரணம் மற்றும் மூல காரண சிகிச்சை" },
      points: [
        { en: "Relieve the patient's pain first, before focusing on the cause.", ta: "காரணத்தைத் தேடும் முன், முதலில் நோயாளியின் வலியைக் குறைத்தல்." },
        { en: "Then diagnose and treat the root cause for lasting relief.", ta: "பிறகு மூல காரணத்தைக் கண்டறிந்து நீண்டகால நிவாரணத்திற்கான சிகிச்சை." },
      ],
    },
    {
      no: "02", title: { en: "Mobility & functional restoration", ta: "இயக்கம் மற்றும் செயல்திறன் மீட்பு" },
      points: [
        { en: "Patients who arrive on stretchers or in wheelchairs should walk out.", ta: "ஸ்ட்ரெச்சர், சக்கர நாற்காலியில் வருபவர்கள் நடந்தே செல்ல வேண்டும்." },
        { en: "Core philosophy: \"Life is movement, movement is life.\"", ta: "அடிப்படைத் தத்துவம்: \"வாழ்க்கையே இயக்கம், இயக்கமே வாழ்க்கை.\"" },
      ],
    },
    {
      no: "03", title: { en: "Preventive orthopaedics", ta: "தடுப்பு எலும்பியல்" },
      points: [
        { en: "\"I work in IT, but I shouldn't get neck pain.\" \"I ride for hours, but I shouldn't get back pain.\"", ta: "\"நான் ஐடி வேலை செய்கிறேன், ஆனால் கழுத்து வலி வரக்கூடாது.\" \"நீண்ட நேரம் வண்டி ஓட்டுகிறேன், ஆனால் முதுகு வலி வரக்கூடாது.\"" },
        { en: "Posture, ergonomic chairs, morning and evening exercises, early warning signs.", ta: "சரியான உட்காரும் முறை, நாற்காலி, காலை மற்றும் மாலை பயிற்சிகள், ஆரம்ப அறிகுறிகள்." },
        { en: "Coaching for IT companies, worksites and individuals.", ta: "ஐடி நிறுவனங்கள், தொழிலாளர் பணியிடங்கள் மற்றும் தனிநபர்களுக்குப் பயிற்சி." },
      ],
    },
    {
      no: "04", title: { en: "Routine & advanced orthopaedics", ta: "வழக்கமான மற்றும் மேம்பட்ட எலும்பியல்" },
      points: [
        { en: "Fractures, arthritis, knee replacement (TKR), hip replacement (THR), spine surgery.", ta: "எலும்பு முறிவு, மூட்டு வீக்கம், முழங்கால் மற்றும் இடுப்பு மூட்டு மாற்று, முதுகுத் தண்டு அறுவை சிகிச்சை." },
        { en: "Children's orthopaedics: clubfoot, leg deformities from bone nutrient deficiency.", ta: "குழந்தைகள் எலும்பியல்: கிளப் பாதம், எலும்புச் சத்துக் குறைபாட்டால் கால் வளைவு." },
        { en: "Acute trauma and accident care.", ta: "விபத்து மற்றும் அவசர காயச் சிகிச்சை." },
      ],
    },
    {
      no: "05", title: { en: "Physiotherapy & rehabilitation", ta: "பிசியோதெரபி மற்றும் மறுவாழ்வு" },
      points: [
        { en: "Physiotherapy alongside treatment to strengthen muscles and speed recovery.", ta: "தசைகளை வலுப்படுத்தி விரைவில் குணமடைய சிகிச்சையுடன் பிசியோதெரபி." },
        { en: "After surgery, after a stroke (CVA), and coordination support for children with cerebral palsy.", ta: "அறுவை சிகிச்சைக்குப் பின், பக்கவாதத்திற்குப் பின், மூளை முடக்குவாதம் உள்ள குழந்தைகளுக்கு ஒருங்கிணைப்புப் பயிற்சி." },
      ],
    },
    {
      no: "06", title: { en: "Regenerative therapies", ta: "மீளுருவாக்க சிகிச்சைகள்" },
      points: [
        { en: "PRP, GFC, BMAC and molecular therapeutics for chronic pain and rheumatoid arthritis.", ta: "நாள்பட்ட வலி, முடக்கு வாதத்திற்கு PRP, GFC, BMAC மற்றும் மாலிகுலர் தெரபியூடிக்ஸ்." },
        { en: "Cartilage regeneration as an option before joint replacement, after individual assessment.", ta: "தனிப்பட்ட மதிப்பீட்டிற்குப் பின், மூட்டு மாற்றுக்கு முன் குருத்தெலும்பு மீளுருவாக்க சிகிச்சை." },
      ],
    },
    {
      no: "07", title: { en: "Non-surgical management", ta: "அறுவை சிகிச்சையற்ற சிகிச்சை" },
      points: [
        { en: "Structured non-surgical care for fractures, spine problems and arthritis.", ta: "எலும்பு முறிவு, முதுகுத் தண்டு, மூட்டு வீக்கத்திற்கு அறுவை சிகிச்சையற்ற முறைகள்." },
        { en: "For patients who want to avoid or safely postpone surgery.", ta: "அறுவை சிகிச்சையைத் தவிர்க்க அல்லது பாதுகாப்பாகத் தள்ளிப்போட விரும்புவோருக்கு." },
      ],
    },
    {
      no: "08", title: { en: "Patient safety first", ta: "நோயாளி பாதுகாப்பே முதன்மை" },
      points: [
        { en: "Medicines, physiotherapy or regenerative care: only methods that are safe and do no harm.", ta: "மருந்து, பிசியோதெரபி, மீளுருவாக்க சிகிச்சை எதுவானாலும், தீங்கற்ற பாதுகாப்பான முறைகள் மட்டுமே." },
      ],
    },
  ],

  goals: [
    { title: { en: "Regional reach", ta: "பிராந்திய அளவில் சென்றடைதல்" }, text: { en: "Be found by people in Karaikudi and the surrounding towns when they search for bone, joint or spine care, in English and in Tamil.", ta: "காரைக்குடி மற்றும் சுற்றுவட்டார மக்கள் எலும்பு, மூட்டு, முதுகுத் தண்டு சிகிச்சையைத் தேடும்போது, ஆங்கிலத்திலும் தமிழிலும் எங்களைக் கண்டறிய வேண்டும்." } },
    { title: { en: "Brand recognition", ta: "பிராண்ட் அடையாளம்" }, text: { en: "Make Rani Ortho Care and Dr. N. Manikandan familiar and trusted across the region.", ta: "ராணி ஆர்த்தோ கேர் மற்றும் Dr. நா. மணிகண்டன் பெயர் பிராந்தியம் முழுவதும் அறியப்பட்டு நம்பிக்கை பெற வேண்டும்." } },
    { title: { en: "Community care", ta: "சமூக சேவை" }, text: { en: "Tell the story of the free medical camps, where camp patients who need surgery or physiotherapy are taken care of.", ta: "இலவச மருத்துவ முகாம்கள் மற்றும் அங்கு வரும் நோயாளிகளுக்கு அளிக்கப்படும் அறுவை சிகிச்சை, பிசியோதெரபி உதவி பற்றி மக்களுக்குத் தெரிவித்தல்." } },
    { title: { en: "Easy to reach", ta: "எளிதில் தொடர்பு" }, text: { en: "Call, WhatsApp or directions in one tap from any phone.", ta: "எந்த மொபைலிலிருந்தும் ஒரே தொடுதலில் அழைப்பு, வாட்ஸ்அப் அல்லது வழி." } },
  ],

  // Assets: files live in brand-assets/ (relative to this folder: ../brand-assets/).
  logos: [
    { name: { en: "Stacked · English", ta: "அடுக்கு · ஆங்கிலம்" }, file: "Rani Ortho Care V1-1", use: { en: "Footer, sharing image, print", ta: "அடிக்குறிப்பு, பகிர்வுப் படம், அச்சு" } },
    { name: { en: "Horizontal · English", ta: "கிடைமட்டம் · ஆங்கிலம்" }, file: "Rani Ortho Care V2-1", use: { en: "Website header", ta: "இணையதளத் தலைப்பு" } },
    { name: { en: "Stacked · Tamil", ta: "அடுக்கு · தமிழ்" }, file: "Rani Ortho Care V1", use: { en: "Tamil pages, print", ta: "தமிழ்ப் பக்கங்கள், அச்சு" } },
    { name: { en: "Horizontal · Tamil", ta: "கிடைமட்டம் · தமிழ்" }, file: "Rani Ortho Care V2", use: { en: "Tamil website header", ta: "தமிழ் இணையதளத் தலைப்பு" } },
  ],

  print: [
    { name: { en: "Visiting card · English", ta: "விசிட்டிங் கார்டு · ஆங்கிலம்" }, preview: "previews/visiting-card-en.jpg", file: "visiting-card/Visiting card -Eng.pdf", shape: "wide" },
    { name: { en: "Visiting card · Tamil", ta: "விசிட்டிங் கார்டு · தமிழ்" }, preview: "previews/visiting-card-ta.jpg", file: "visiting-card/tamil.pdf", shape: "wide" },
    { name: { en: "Prescription pad", ta: "மருந்துச் சீட்டு" }, preview: "previews/prescription.jpg", file: "prescription/Prescription.pdf", shape: "tall" },
    { name: { en: "Cover · front (doctor)", ta: "அட்டை · முன் (மருத்துவர்)" }, preview: "previews/cover-front-doctor.jpg", file: "cover/Front - Doctor Image.pdf", shape: "tall" },
    { name: { en: "Cover · front (knee)", ta: "அட்டை · முன் (முழங்கால்)" }, preview: "previews/cover-front-knee.jpg", file: "cover/Font Cover.pdf", shape: "tall" },
    { name: { en: "Cover · back (services)", ta: "அட்டை · பின் (சேவைகள்)" }, preview: "previews/cover-back.jpg", file: "cover/Back.pdf", shape: "tall" },
  ],

  colours: [
    { name: { en: "Brand blue", ta: "பிராண்ட் நீலம்" }, hex: "#3C59A8", from: { en: "The R and the wordmark", ta: "R எழுத்து மற்றும் பெயர்" } },
    { name: { en: "Spine green", ta: "முதுகெலும்பு பச்சை" }, hex: "#3DB54A", from: { en: "The spine in the R", ta: "R-இல் உள்ள முதுகெலும்பு" } },
    { name: { en: "Deep navy", ta: "அடர் நீலம்" }, hex: "#1B2A55", from: { en: "Print footer bars", ta: "அச்சு அடிப்பட்டைகள்" } },
    { name: { en: "Sky blue", ta: "வான் நீலம்" }, hex: "#7FD0F0", from: { en: "Cover shield and waves", ta: "அட்டையின் கேடயம், அலைகள்" } },
  ],

  needed: [
    { en: "Photos of Dr. N. Manikandan, the clinic and the team (to discuss later)", ta: "மருத்துவர், மையம் மற்றும் குழுவின் புகைப்படங்கள் (பின்னர் பேசலாம்)" },
    { en: "Free medical camp details: dates, places, photos", ta: "இலவச மருத்துவ முகாம் விவரங்கள்: தேதிகள், இடங்கள், புகைப்படங்கள்" },
    { en: "Google Business Profile link and owner access", ta: "Google வணிகப் பக்க இணைப்பு மற்றும் அணுகல்" },
    { en: "Doctor's approval of the website wording for medical claims", ta: "மருத்துவ வாசகங்களுக்கு மருத்துவரின் ஒப்புதல்" },
    { en: "Mood board and design system (next step)", ta: "மூட் போர்டு மற்றும் வடிவமைப்பு முறை (அடுத்த கட்டம்)" },
  ],
};
