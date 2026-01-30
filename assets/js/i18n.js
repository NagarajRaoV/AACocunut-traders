// i18n.js - Internationalization for language switching
class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.translations = {
      en: {
        "nav": {
          "home": "Home",
          "about": "About Us",
          "services": "Our Services",
          "gallery": "Gallery",
          "products": "Products",
          "contact": "Contact",
          "freshCoconuts": "Fresh Coconuts",
          "huskedCoconuts": "Husked Coconuts",
          "semiHusked": "Semi-Husked",
          "tenderCoconuts": "Tender Coconuts",
          "copra": "Copra"
        },
        "hero": {
          "title1": "Premium Quality Pollachi Coconuts",
          "subtitle1": "Direct from the rich red soil of Zamin Uthukuli. We supply high-quality fresh coconuts known for their sweet water and thick meat.",
          "btn1": "Order Now",
          "title2": "High Grade Copra & Oil",
          "subtitle2": "Sun-dried, hygienic, and sulphur-free Copra perfect for oil extraction and culinary uses.",
          "btn2": "View Products",
          "title3": "Fresh Tender Coconuts",
          "subtitle3": "Experience the natural sweetness and health benefits of our carefully harvested tender coconuts.",
          "btn3": "Contact Us"
        },
        "services": {
          "title": "OUR SPECIALTIES",
          "subtitle": "Why AA Coconut Traders is the Best Choice",
          "freshCoconuts": {
            "title": "Fresh Coconuts",
            "desc": "We supply semi-husked and fully husked coconuts graded by size (12 inches, 13 inches+) for wholesale."
          },
          "qualityCopra": {
            "title": "Quality Copra",
            "desc": "Our copra is dried naturally to ensure high oil content, suitable for milling and edible purposes."
          },
          "tenderCoconuts": {
            "title": "Tender Coconuts",
            "desc": "Hand-picked tender coconuts packed with electrolytes and natural sweetness."
          },
          "logistics": {
            "title": "Logistics",
            "desc": "We handle transport arrangements to ensure safe and timely delivery across India."
          }
        },
        "about": {
          "whoWeAre": "Who We Are",
          "trustedSuppliers": "Trusted Suppliers from",
          "aboutDesc1": "AA Coconut Traders has established itself as a reliable name in the coconut industry. Sourcing directly from the fertile lands of Pollachi, we ensure that every nut we supply meets the highest standards of quality.",
          "aboutDesc2": "Our coconuts are preferred for their size, weight, and the sweetness of their water. Whether you need bulk supply for retail, oil mills, or export, we are your best partner.",
          "natureBest": "Nature's Best from Pollachi",
          "natureDesc": "Our farm management practices ensure that the coconuts are harvested at the right maturity level. This guarantees:",
          "benefits": {
            "thickKernel": "Thicker Kernel (Meat)",
            "higherOil": "Higher Oil Content",
            "sweeterWater": "Sweeter Water",
            "longerShelf": "Longer Shelf Life"
          },
          "enquiryBtn": "Place an Enquiry"
        },
        "process": {
          "title": "Our Process",
          "subtitle": "From Farm to Your Doorstep",
          "step1": "Harvesting",
          "step2": "De-Husking",
          "step3": "Grading",
          "step4": "Packing"
        },
        "gallery": {
          "title": "GALLERY",
          "subtitle": "Our Products and Operations"
        },
        "heroImage": {
          "title": "Premium Quality Guaranteed",
          "subtitle": "Direct sourcing from Pollachi's finest farms",
          "btn": "Learn More"
        },
        "cta": {
          "title": "Get Daily Market Price Updates",
          "subtitle": "Subscribe to know the daily rates of Pollachi coconuts, copra, and tender coconuts.",
          "emailPlaceholder": "Enter your e-mail",
          "subscribeBtn": "Subscribe",
          "loading": "Loading",
          "error": "Error",
          "sent": "Your subscription request has been sent. Thank you!"
        },
        "footer": {
          "links": {
            "useful": "Useful Links",
            "home": "Home",
            "about": "About us",
            "services": "Services",
            "terms": "Terms of service",
            "privacy": "Privacy policy"
          }
        },
        "modals": {
          "freshCoconuts": {
            "title": "Fresh Coconuts",
            "desc1": "We supply semi-husked and fully husked coconuts graded by size (12 inches, 13 inches+) for wholesale.",
            "desc2": "Direct from the rich red soil of Zamin Uthukuli, known for their sweet water and thick meat.",
            "desc3": "Perfect for retail, processing, and export markets."
          },
          "huskedCoconuts": {
            "title": "Husked Coconuts",
            "desc1": "Fully husked coconuts ready for immediate use or further processing.",
            "desc2": "Graded by size to meet wholesale and retail demands.",
            "desc3": "Ensures freshness and quality for all your coconut needs."
          },
          "semiHusked": {
            "title": "Semi-Husked Coconuts",
            "desc1": "Semi-husked coconuts with partial husk to maintain freshness longer.",
            "desc2": "Ideal for markets requiring extended shelf life.",
            "desc3": "High-quality coconuts from Pollachi's fertile lands."
          },
          "tenderCoconuts": {
            "title": "Tender Coconuts",
            "desc1": "Hand-picked tender coconuts packed with electrolytes and natural sweetness.",
            "desc2": "Experience the natural health benefits and refreshing taste.",
            "desc3": "Harvested at the perfect maturity for maximum flavor."
          },
          "copra": {
            "title": "Copra",
            "desc1": "High-grade copra dried naturally for superior oil content.",
            "desc2": "Suitable for milling and edible purposes, sulphur-free.",
            "desc3": "Perfect for oil extraction and culinary uses.",
            "desc4": "Our copra is sun-dried, hygienic, and ensures high oil yield.",
            "desc5": "Trusted by mills and manufacturers for consistent quality."
          }
        }
      },
      ta: {
        "nav": {
          "home": "முகப்பு",
          "about": "எங்களைப் பற்றி",
          "services": "எங்கள் சேவைகள்",
          "gallery": "கேலரி",
          "products": "தயாரிப்புகள்",
          "contact": "தொடர்பு",
          "freshCoconuts": "புதிய தேங்காய்கள்",
          "huskedCoconuts": "உரித்த தேங்காய்கள்",
          "semiHusked": "அரை உரித்த",
          "tenderCoconuts": "மென்மையான தேங்காய்கள்",
          "copra": "கோப்ரா"
        },
        "hero": {
          "title1": "பிரீமியம் தரமான பொல்லாச்சி தேங்காய்கள்",
          "subtitle1": "ஜாமின் உத்துகுளியின் செம்மண் மண்ணில் இருந்து நேரடியாக. இனிப்பு நீர் மற்றும் தடித்த மாமிசம் ஆகியவற்றிற்கு பெயர் பெற்ற உயர் தரமான புதிய தேங்காய்களை வழங்குகிறோம்.",
          "btn1": "இப்போது ஆர்டர் செய்ய",
          "title2": "உயர் தரமான கோப்ரா & எண்ணெய்",
          "subtitle2": "எண்ணெய் பிரித்தெடுப்பு மற்றும் சமையல் பயன்பாடுகளுக்கு ஏற்ற சூரிய ஒளியில் உலர்ந்த, சுகாதாரமான மற்றும் சல்பர் இல்லாத கோப்ரா.",
          "btn2": "தயாரிப்புகளைப் பார்க்க",
          "title3": "புதிய மென்மையான தேங்காய்கள்",
          "subtitle3": "எங்கள் கவனமாக சேகரிக்கப்பட்ட மென்மையான தேங்காய்களின் இயற்கையான இனிப்பு மற்றும் ஆரோக்கிய நன்மைகளை அனுபவிக்கவும்.",
          "btn3": "எங்களைத் தொடர்பு கொள்ள"
        },
        "services": {
          "title": "எங்கள் சிறப்புகள்",
          "subtitle": "ஏன் AA தேங்காய் வர்த்தகர்கள் சிறந்த தேர்வு",
          "freshCoconuts": {
            "title": "புதிய தேங்காய்கள்",
            "desc": "மொத்த விற்பனைக்கு அளவு (12 அங்குலம், 13 அங்குலம்+) மூலம் தரப்படுத்தப்பட்ட அரை உரித்த மற்றும் முழுமையாக உரித்த தேங்காய்களை வழங்குகிறோம்."
          },
          "qualityCopra": {
            "title": "தரமான கோப்ரா",
            "desc": "எங்கள் கோப்ரா இயற்கையாக உலர்ந்து உயர் எண்ணெய் உள்ளடக்கத்தை உறுதி செய்கிறது, மில்லிங் மற்றும் உண்ணக்கூடிய நோக்கங்களுக்கு ஏற்றது."
          },
          "tenderCoconuts": {
            "title": "மென்மையான தேங்காய்கள்",
            "desc": "எலக்ட்ரோலைட்ஸ் மற்றும் இயற்கையான இனிப்பு நிறைந்த கையால் தேர்ந்தெடுக்கப்பட்ட மென்மையான தேங்காய்கள்."
          },
          "logistics": {
            "title": "லாஜிஸ்டிக்ஸ்",
            "desc": "இந்தியா முழுவதும் பாதுகாப்பான மற்றும் துரிதமான விநியோகத்தை உறுதி செய்ய இயக்க ஏற்பாடுகளை நாங்கள் கையாளுகிறோம்."
          }
        },
        "about": {
          "whoWeAre": "நாங்கள் யார்",
          "trustedSuppliers": "ஜாமின் உத்துகுளியில் இருந்து நம்பகமான வழங்குநர்கள்",
          "aboutDesc1": "AA தேங்காய் வர்த்தகர்கள் தேங்காய் தொழிலில் நம்பகமான பெயரை நிறுவியுள்ளனர். பொல்லாச்சியின் வளமான நிலங்களில் இருந்து நேரடியாக மூலம் பெறுதல், நாங்கள் வழங்கும் ஒவ்வொரு கொட்டையும் உயர் தரத்தின் மிக உயர் தரநிலைகளை பூர்த்தி செய்கிறது.",
          "aboutDesc2": "எங்கள் தேங்காய்கள் அவற்றின் அளவு, எடை மற்றும் நீரின் இனிப்பு ஆகியவற்றிற்கு விரும்பப்படுகின்றன. உங்களுக்கு மொத்த வழங்கல் தேவையா, சில்லறை விற்பனை, எண்ணெய் ஆலைகள் அல்லது ஏற்றுமதிக்கு, நாங்கள் உங்கள் சிறந்த துணை.",
          "natureBest": "பொல்லாச்சியில் இருந்து இயற்கையின் சிறந்தவை",
          "natureDesc": "எங்கள் பண்ணை மேலாண்மை நடைமுறைகள் தேங்காய்கள் சரியான முதிர்ச்சி நிலையில் அறுவடை செய்யப்படுவதை உறுதி செய்கின்றன. இது உத்தரவாதம் அளிக்கிறது:",
          "benefits": {
            "thickKernel": "தடிமனான கர்னல் (மாமிசம்)",
            "higherOil": "அதிக எண்ணெய் உள்ளடக்கம்",
            "sweeterWater": "இனிப்பான நீர்",
            "longerShelf": "நீண்ட அடுக்கு வாழ்க்கை"
          },
          "enquiryBtn": "விசாரணை செய்யுங்கள்"
        },
        "process": {
          "title": "எங்கள் செயல்முறை",
          "subtitle": "பண்ணையில் இருந்து உங்கள் வாசலுக்கு",
          "step1": "சேகரித்தல்",
          "step2": "உரித்தல்",
          "step3": "தரப்படுத்தல்",
          "step4": "பேக்கிங்"
        },
        "gallery": {
          "title": "கேலரி",
          "subtitle": "எங்கள் தயாரிப்புகள் மற்றும் செயல்பாடுகள்"
        },
        "heroImage": {
          "title": "பிரீமியம் தரம் உத்தரவாதம்",
          "subtitle": "பொல்லாச்சியின் சிறந்த பண்ணைகளில் இருந்து நேரடி மூலம்",
          "btn": "மேலும் அறிக"
        },
        "cta": {
          "title": "தினசரி சந்தை விலை புதுப்பிப்புகளைப் பெறுங்கள்",
          "subtitle": "பொல்லாச்சி தேங்காய்கள், கோப்ரா மற்றும் மென்மையான தேங்காய்களின் தினசரி விலைகளை அறிய குழுசேரவும்.",
          "emailPlaceholder": "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
          "subscribeBtn": "குழுசேர்",
          "loading": "ஏற்றுகிறது",
          "error": "பிழை",
          "sent": "உங்கள் சந்தா கோரிக்கை அனுப்பப்பட்டது. நன்றி!"
        },
        "footer": {
          "links": {
            "useful": "பயனுள்ள இணைப்புகள்",
            "home": "முகப்பு",
            "about": "எங்களைப் பற்றி",
            "services": "சேவைகள்",
            "terms": "சேவை விதிமுறைகள்",
            "privacy": "தனியுரிமை கொள்கை"
          }
        },
        "modals": {
          "freshCoconuts": {
            "title": "புதிய தேங்காய்கள்",
            "desc1": "மொத்த விற்பனைக்கு அளவு (12 அங்குலம், 13 அங்குலம்+) மூலம் தரப்படுத்தப்பட்ட அரை உரித்த மற்றும் முழுமையாக உரித்த தேங்காய்களை வழங்குகிறோம்.",
            "desc2": "இனிப்பு நீர் மற்றும் தடித்த மாமிசத்திற்கு பெயர் பெற்ற ஜாமின் உத்துகுளியின் செம்மண் மண்ணில் இருந்து நேரடியாக.",
            "desc3": "சில்லறை, செயலாக்கம் மற்றும் ஏற்றுமதி சந்தைகளுக்கு ஏற்றது."
          },
          "huskedCoconuts": {
            "title": "உரித்த தேங்காய்கள்",
            "desc1": "உடனடி பயன்பாடு அல்லது மேலும் செயலாக்கத்திற்கு தயாராக முழுமையாக உரித்த தேங்காய்கள்.",
            "desc2": "மொத்த மற்றும் சில்லறை தேவைகளை பூர்த்தி செய்ய அளவு அடிப்படையில் தரப்படுத்தப்பட்டவை.",
            "desc3": "உங்கள் அனைத்து தேங்காய் தேவைகளுக்கும் புத்துணர்ச்சி மற்றும் தரத்தை உறுதி செய்கிறது."
          },
          "semiHusked": {
            "title": "அரை உரித்த தேங்காய்கள்",
            "desc1": "நீண்ட காலம் புத்துணர்ச்சியை பராமரிக்க பகுதி உமி கொண்ட அரை உரித்த தேங்காய்கள்.",
            "desc2": "நீட்டிக்கப்பட்ட அடுக்கு வாழ்க்கை தேவைப்படும் சந்தைகளுக்கு ஏற்றது.",
            "desc3": "பொல்லாச்சியின் வளமான நிலங்களில் இருந்து உயர் தரமான தேங்காய்கள்."
          },
          "tenderCoconuts": {
            "title": "மென்மையான தேங்காய்கள்",
            "desc1": "எலக்ட்ரோலைட்ஸ் மற்றும் இயற்கையான இனிப்பு நிறைந்த கையால் தேர்ந்தெடுக்கப்பட்ட மென்மையான தேங்காய்கள்.",
            "desc2": "இயற்கையான ஆரோக்கிய நன்மைகள் மற்றும் புத்துணர்ச்சி சுவையை அனுபவிக்கவும்.",
            "desc3": "அதிகபட்ச சுவைக்கான சரியான முதிர்ச்சியில் அறுவடை செய்யப்பட்டது."
          },
          "copra": {
            "title": "கோப்ரா",
            "desc1": "உயர்ந்த எண்ணெய் உள்ளடக்கத்திற்காக இயற்கையாக உலர்த்தப்பட்ட உயர் தரம் கோப்ரா.",
            "desc2": "அரைத்தல் மற்றும் உண்ணக்கூடிய நோக்கங்களுக்கு ஏற்றது, சல்பர் இல்லாதது.",
            "desc3": "எண்ணெய் பிரித்தெடுப்பு மற்றும் சமையல் பயன்பாடுகளுக்கு சரியானது.",
            "desc4": "எங்கள் கோப்ரா சூரிய ஒளியில் உலர்த்தப்பட்டது, சுகாதாரமானது மற்றும் அதிக எண்ணெய் விளைச்சலை உறுதி செய்கிறது.",
            "desc5": "நிலையான தரத்திற்காக ஆலைகள் மற்றும் உற்பத்தியாளர்களால் நம்பப்படுகிறது."
          }
        }
      }
    };
    this.init();
  }

  init() {
    this.setupLanguageSelector();
    this.applyTranslations();
  }

  setupLanguageSelector() {
    // Setup event listeners for dropdown items using data-lang attribute
    document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.target.getAttribute('data-lang');
        if (lang) {
          this.switchLanguage(lang);
        }
      });
    });
  }

  switchLanguage(lang) {
    if (lang === this.currentLang) return;

    this.currentLang = lang;
    localStorage.setItem('language', lang);
    this.applyTranslations();

    // Update dropdown text
    const dropdownButtons = document.querySelectorAll('#languageDropdown .language-selector span');
    const langNames = {
      'en': 'English',
      'ta': 'தமிழ் (Tamil)'
    };
    
    dropdownButtons.forEach(button => {
      button.textContent = langNames[lang] || 'English';
    });
  }

  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.dataset.i18n;
      const translation = this.getTranslation(key);

      if (translation) {
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = translation;
        } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
  }

  getTranslation(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];

    for (const k of keys) {
      if (value === undefined || value === null) {
        return key; // Return key if translation not found
      }
      value = value[k];
    }

    return value !== undefined && value !== null ? value : key;
  }

  t(key) {
    return this.getTranslation(key);
  }
}

// Global function for Google Translate integration
function translatePage(lang) {
  if (window.google && window.google.translate) {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    }
  }
  // Also update our custom i18n system
  if (window.i18n) {
    window.i18n.switchLanguage(lang);
  }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
});
