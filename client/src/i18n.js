
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "Courses":"Courses",
          "Login" : "Login",
          "Register":"Register",
          "Anytime , Anywhere":"Anytime , Anywhere",
          "Learn On":"Learn On",  
          "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do":"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do .",
          "Join Now":"Join Now",   
          "Check Our Roadmaps":"Check Our Roadmaps",
          "Why Our Website ?":"Why Our Website ?",
          "Educational Standards":"Educational Standards",
          "Our Website has the latest educational standards, easily accessible and interesting" :"Our Website has the latest educational standards, easily accessible and interesting",
          "Study System":"Study System",
          "Our material is very flexible. You can study at any time of the year":"Our material is very flexible. You can study at any time of the year",
          "Classes & Scheduling":"Classes & Scheduling",
          "You can choose the optimal time for yourself, morning or evening. It doesn't matter":"You can choose the optimal time for yourself, morning or evening. It doesn't matter",
          "Reach goals that matter":"Reach goals that matter",
          "One website, unlimited courses":"One website, unlimited courses",
          "Our Website has courses for almost everything":"Our Website has courses for almost everything",
          "For students":"For students",
          "Keep track of your progress":"Keep track of your progress",
          "Get detailed information about all your progress in all course and the progress in the latest course that you applied for":"Get detailed information about all your progress in all course and the progress in the latest course that you applied for",
          "For Instructors":"For Instructors",
          "Track your earnings and views":"Track your earnings and views",
          "Knowing how your content is performing is important to us as it is important to you, get detailed information with graphs about how your content is doing":"Knowing how your content is performing is important to us as it is important to you, get detailed information with graphs about how your content is doing",
          "Road maps":"Road maps",
          
          
          




        }
      },
      ar: {
        translation: {
          "Home": "الصفحة الرئيسية",
          "Courses":"الدورات",
          "Login":"تسجيل الدخول",
          " / Register":"/انشاء حساب",
          "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do":"النجاح ليس صدفة. إنما هو عمل شاق ، مثابرة ، تعلم ، دراسة ، تضحية ، والأهم من ذلك كله هو حب ما تفعله أو تعلم القيام به",
          "Road maps":"خرائط الطريق",
          "Check Our Roadmaps":"تحقق من خرائط الطريق الخاصة بنا",
          "Join Now":"انضم الان",
          "Reach goals that matter":"حقق أهدافًا مهمة",
          "Our Website has courses for almost everything":"يشمل موقعنا دورات عن اغلب الموضوعات ",
          "For students":"للطلبة",
          "Keep track of your progress":"تتبع الانجازات الخاصة بك",
          "Get detailed information about all your progress in all course and the progress in the latest course that you applied for":"احصل على معلومات مفصلة عن جميع انجازاتك في جميع الدورات التدريبية والتقدم الذي فعلته في الدورة التدريبية الأخيرة التي تقدمت لها",
          "For Instructors":"للمدربين",
          "Track your earnings and views":"تتبع ارباحك و نسب المشاهدة الخاصة بك",
          "Knowing how your content is performing is important to us as it is important to you, get detailed information with graphs about how your content is doing":"إن معرفة كيفية أداء المحتوى الخاص بك أمر مهم بالنسبة لنا لأنه مهم بالنسبة لك ، احصل على معلومات مفصلة مع الرسوم البيانية حول أداء المحتوى الخاص بك",
          "One website, unlimited courses":"موقع واحد ، دورات غير محدودة",
          "Why Our Website ?":"لماذا موقعنا بالتحديد ؟",
          "Educational Standards":"المعايير التعليمية",
          "Our Website has the latest educational standards, easily accessible and interesting":"يحتوي موقعنا على أحدث المعايير التعليمية التي يمكن الوصول إليها بسهولة كما انها شيقة للغاية",
          "Study System":"نظام التعلم",
          "Our System is so flexible. You can Take the Course at any time of the year also there is no limitation for a specific time to finish it":"النظام لدينا مرن للغاية . يمكنك اخد الدورة في اي وقت في عام و ايضا لا يوجد قيود لانهاء الدورة في وقت محدد ",
          "Classes & Scheduling":"الحصص والجدولة",
          "You can choose the optimal time for yourself, morning or evening. It doesn't matter":"يمكنك اختيار الوقت الأمثل لنفسك ، صباحًا أو مساءً. لا يهم",
          "Anytime , Anywhere":"اي وقت , اي مكان",
          "Learn On":"تعلم علي"


        }
      },

      lng: localStorage.getItem('i18nextLng') || 'en',

    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
      htmlTag: document.documentElement,
      checkWhitelist: true
    },
    react:{
        UseSuspense : false
    },

    },
    
  });
