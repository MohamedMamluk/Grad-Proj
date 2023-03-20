
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
          "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do":"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do",
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
          "Welcome to Our Website! Study with us":"Welcome to Our Website! Study with us",
          "At any time and in any place, discover the unknown":"At any time and in any place, discover the unknown",
          "On the main page there are elements on time management":"On the main page there are elements on time management",
          "Greetings,":"Greetings,",
          "Email Address":"Email Address",
          "Enter a valid email":"Enter a valid email",
          "Password":"Password",
          "Enter a valid password":"Enter a valid password",
          "Sign In":"Sign In",
          "Forgot password?":"Forgot password?",
          "Don't have an account? Sign Up":"Don't have an account? Sign Up",
          "Sign up":"Sign up",
          "First Name":"First Name",
          "Last Name must be provided":"Last Name must be provided",
          "First Name must be provided":"First Name must be provided",
          "Enter a stronger password":"Enter a stronger password",
          "Phone Number":"Phone Number",
          "Enter a valid phone number":"Enter a valid phone number",
          "Student":"Student",
          "Instructor":"Instructor",
          "Level Of Experience":"Level Of Experience",
          "Already have an account? Sign in":"Already have an account? Sign in",
          "choose your role":"choose your role",
          "Last Name":"Last Name",
          "Remember me":"Remember me",
          "We hope you enjoy your courses":"We hope you enjoy your courses",
          "student":"student",
          "Update Profile":"Update Profile",
          "Update Your Profile Picture":"Update Your Profile Picture",
          "Upload":"Upload",
          "Uploaded ✔":"Uploaded ✔",
          "Uploading...":"Uploading...",
          "Courses Enrolled":"Courses Enrolled",
          "Main":"Main",
          "Created Courses":"Created Courses",
          "All Users":"All Users",
          "Balance":"Balance",
          "Profile":"Profile",
          "Sign Out":"Sign Out",
          "Viewed lessons":"Viewed lessons",
          "Courses completed":"Courses completed",
          "Learning progress":"Learning progress",
          "Course duration":"Course duration",
          "Progress On Final Course That you Enrolled in":"Progress On Final Course That you Enrolled in",
          "10 hours":"10 hours",
          "Course":"Course",
          "starts":"started",
          "Add Your Tasks":"Add Your Tasks",
          "Add Task":"Add Task",
          "No Tasks...":"No Tasks..."
          
          
          




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
          "Learn On":"تعلم علي",
          "Welcome to Our Website! Study with us":"مرحبا بك في موقعنا! اتعلم معنا",
          "At any time and in any place, discover the unknown":"اكتشف المجهول في أي وقت وفي أي مكان",
          "On the main page there are elements on time management":"في الصفحة الرئيسية توجد عناصر تتعلق بإدارة الوقت",
          "Greetings,":"مرحبا",
          "Email Address":"البريد الالكتروني",
          "Enter a valid email":"ادخل بريد الاكتروني صحيح",
          "Password":"رمز الادخال",
          "Enter a valid password":"ادخل كلمة المرور الصحيحة",
          "Sign In":"تسجيل الدخول",
          "Forgot password?":"نسيت كلمة المرور",
          "Don't have an account? Sign Up":" ليس لديك حساب؟ اشترك",
          "Sign up":"اشترك",
          "First Name":"الاسم الاول",
          "Last Name must be provided":"يجب تقديم اسم العائلة",
          "First Name must be provided":"يجب تقديم الاسم الاول الخاص بك",
          "Enter a stronger password":"ادخل كلمة مرور اكثر صعوبة",
          "Phone Number":"رقم الهاتف",
          "Enter a valid phone number":"ادخل رقم هاتف صحيح",
          "Student":"طالب",
          "Instructor":"مدرب",
          "Level Of Experience":"مستوي الخبرة",
          "Already have an account? Sign in":"هل لديك حساب؟ تسجيل الدخول",
          "choose your role":"اختار مهمتك",
          "Last Name":"اسم العائلة",
          "Remember me":"تذكري",
          "We hope you enjoy your courses":"نتمنى أن تستمتع بدوراتك",
          "student":"طالب",
          "Update Profile":"تعديل الملف الشخصي",
          "Update Your Profile Picture":"تعديل علي صورة الملف الشخصي",
          "Upload":"ارفق الملف",
          "Uploaded ✔":"✔تم ارفاق الملف",
          "Uploading...":"...جاري الارفاق",
          "Courses Enrolled":"الدورات المسجل بها",
          "Main":"الصفحة الرئيسية",
          "Created Courses":"الدورات التي تم إنشاؤها",
          "All Users":"جميع المستخدمين",
          "Balance":"رصيد حسابك",
          "Profile":"الملف الشخصي",
          "Sign Out":"الخروج",
          "Viewed lessons":"الدروس التي تم رؤيتها",
          "Courses completed":"الدورات التي تم انهاؤها",
          "Learning progress":"مستوي التقدم في التعلم",
          "Course duration":"مدة الدورة",
          "Progress On Final Course That you Enrolled in":"مستوي التقدم في الدورة التدريبية النهائية التي قمت بالتسجيل بها",
          "10 hours":"١٠ ساعات",
          "Course":"دورة ",
          "starts":"تبدا",
          "Add Your Tasks":"اضف مهامك",
          "Add Task":"اضف المهمة",
          "No Tasks...":"...لا يوجد مهام"

          

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
