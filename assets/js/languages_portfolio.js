const langSwitcher = document.getElementById('lang-switcher');
const langOptions = langSwitcher.querySelectorAll('.lang-option');
  

let theme = document.getElementById('theme');
// let fontFamily = document.getElementById('fontFamily');
// let fontFamily2 = document.getElementById('fontFamily2');

let Home_Menu =  document.getElementById('Home_Menu');
let About_Menu =  document.getElementById('About_Menu');
let Portfolio_Menu =  document.getElementById('Portfolio_Menu');


function ArabicLanguages(){

theme.setAttribute('href', 'assets/css/portfolio_ar.css');
localStorage.setItem("lang" , "arabic" );
langOptions.forEach(option => option.classList.remove('active'));
langSwitcher.querySelector('.lang-option[data-lang="AR"]').classList.add('active');

document.dir = "rtl";
Home_Menu.setAttribute('data-text', 'الرئيسية');
About_Menu.setAttribute('data-text', 'المزيد عني');
Portfolio_Menu.setAttribute('data-text', 'نماذج أعمالي');
langSwitcher.classList.remove('en-active'); 
 langSwitcher.classList.add('ar-active');

const elements = document.querySelectorAll("[data-lang]");
elements.forEach((element) => {
const translationsKey = element.getAttribute("data-lang");
element.textContent = translations['Arabic'][translationsKey]
});

}

function EnglishLanguages(){
theme.setAttribute('href', 'assets/css/portfolio.css');
// fontFamily.setAttribute('href', '');
// fontFamily2.setAttribute('href', '');
 langSwitcher.classList.remove('ar-active');
langSwitcher.classList.add('en-active'); 
langOptions.forEach(option => option.classList.remove('active'));
langSwitcher.querySelector('.lang-option[data-lang="EN"]').classList.add('active');

document.dir = "ltr";
Home_Menu.setAttribute('data-text', 'HOME');
About_Menu.setAttribute('data-text', 'ABOUT');
Portfolio_Menu.setAttribute('data-text', 'PORTFOLIO');

const elements = document.querySelectorAll("[data-lang]");
elements.forEach((element) => {
const translationsKey = element.getAttribute("data-lang");
element.textContent = translations['English'][translationsKey]
});


}


  function LanguagesFunction(){
if(localStorage.getItem("lang") == 'arabic'){
localStorage.setItem("lang" , "english" );
EnglishLanguages()

}else{
localStorage.setItem("lang" , "arabic" );
ArabicLanguages()
}
}


window.addEventListener('load', function() {
if(localStorage.getItem("lang") == 'arabic'){
ArabicLanguages();

}else{
EnglishLanguages();

}});








const translations ={
English :{ 

// Pages Title

Home_Page_title : "Abdallah Fouad | Web Developer",



// Menu

EN : "EN",
AR : "AR",
Home_Menu : "HOME",
Portfolio_Menu : "PORTFOLIO",
About_Menu : "ABOUT",
Download : "DOWNLOAD CV",

// Portfolio Page

Portfolio : "Portfolio",
My_Works : "My Works",
Live_Preview : "Live Preview",
All : "All (32)",
JavaScript : "JavaScript (6)",
JQuery : "JQuery (3)",
PHP : "PHP (4)",
OOP : "OOP (2)",
API : "API (2)",
Wordpress : "Wordpress (4)",
Ajax : "Ajax (1)",
Bootstrap : "Bootstrap (1)",
Visual_Basic : "Visual Basic / C# (5)",
Laravel : "Laravel (4)",



JavaScript_Tag : "#JavaScript",
JQuery_Tag : "#JQuery",
PHP_Tag : "#PHP",
SQL_Tag : "#SQL",
OOP_Tag : "#OOP",
API_Tag : "#API",
Wordpress_Tag : "#Wordpress",
Ajax_Tag : "#Ajax",
Bootstrap_Tag : "#Bootstrap",
Visual_Basic_Tag : "#Visual Basic",
C_Tag : "C#",
Laravel_Tag : "#Laravel",

// Projects Titles and Data
Project1 : "E-Commerce Website" ,
Project1_Data : "E-Commerce Project Using Laravel", 
Project2 : "Multi Store Project" ,
Project2_Data : "Multi Store Project Using Laravel", 
Project3 : "VReal Tour" ,
Project3_Data : "Website For VR Services Using Wordpress", 
Project4 : "VReal Car" ,
Project4_Data : "Website For Cars Services Using Wordpress", 
Project5 : "Rrstate" ,
Project5_Data : "Website For Real Estate Services Using Wordpress", 
Project6 : "Cibs Soft" ,
Project6_Data : "Website For Software Services Using PHP", 
Project7 : "Engineering House" ,
Project7_Data : "Website For Engineering Services Using Wordpress", 
Project8 : "Chat App Using Php" ,
Project8_Data : "Chat App Using Php", 
Project9 : "Crud Project Using Php" ,
Project9_Data : "Crud Project Using Php", 
Project10 : "E-commerce Project" ,
Project10_Data : "E-commerce Project Using PHP", 
Project11 : "Game Project" ,
Project11_Data : "X - O Game Using Javascript", 
Project12 : "Game Project" ,
Project12_Data : "Squid Game Using Javascript", 
Project13 : "Alarm Project" ,
Project13_Data : "Alarm Project Using JavaScript", 
Project14 : "Crud Project" ,
Project14_Data : "Crud Project Using JavaScript", 
Project15 : "Photo Filter Project" ,
Project15_Data : "Photo Filter Using Javascript", 
Project16 : "VR Project" ,
Project16_Data : "VR Project Using Javascript", 
Project17 : "Game Project" ,
Project17_Data : "Game Project Using JQuery", 
Project18 : "Sebha Project" ,
Project18_Data : "Sebha Using JQuery", 
Project19 : "Game Project" ,
Project19_Data : "Game Using JQuery", 
Project20 : "OOP Project" ,
Project20_Data : "Boxing Game Using OOP", 
Project21 : "OOP Project" ,
Project21_Data : "Snake Game Using OOP", 
Project22 : "Ajax Project Using PHP" ,
Project22_Data : "Crud And Search Using Ajax", 
Project23 : "API Project" ,
Project23_Data : "Prayer Timings Using API", 
Project24 : "API Project" ,
Project24_Data : "Country Details Using API", 
Project25 : "School System" ,
Project25_Data : "School System Using Laravel", 
Project26 : "Jobs Website Project" ,
Project26_Data : "Jobs Website Project Using Laravel", 
Project27 : "Store Program" ,
Project27_Data : "Store Program Using C#", 
Project28 : "Speaker Program" ,
Project28_Data : "Speaker Program Using Visual Basic", 
Project29 : "Screen Shot Program" ,
Project29_Data : "Screen Shot Program Using Visual Basic", 
Project30 : "Library Program" ,
Project30_Data : "Library Program Using C#", 
Project31 : "Vacation Program" ,
Project31_Data : "Vacation Program Using C#", 
Project32 : "Bootstrap Project" ,
Project32_Data : "Medical Website Using Bootstrap", 

},

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Arabic : {   

// Pages Title

Home_Page_title : "عبدالله فؤاد | مطور ويب",



// Menu

EN : "EN",
AR : "AR",
Home_Menu : "الرئيسية",
Portfolio_Menu : "نماذج أعمالي",
About_Menu : "المزيد عني",
Download : "تحميل السيرة الذاتية",

// Portfolio Page

Portfolio : "نماذج",
My_Works : "نماذج أعمالي",
Live_Preview : "عرض المشروع",
All : "جميع النماذج (32)",
JavaScript : "JavaScript (6)",
JQuery : "JQuery (3)",
PHP : "PHP (4)",
OOP : "OOP (2)",
API : "API (2)",
Wordpress : "Wordpress (4)",
Ajax : "Ajax (1)",
Bootstrap : "Bootstrap (1)",
Visual_Basic : "Visual Basic / C# (5)",
Laravel : "Laravel (4)",





JavaScript_Tag : "JavaScript#",
JQuery_Tag : "JQuery#",
PHP_Tag : "PHP#",
SQL_Tag : "SQL#",
OOP_Tag : "OOP#",
API_Tag : "API#",
Wordpress_Tag : "Wordpress#",
Ajax_Tag : "Ajax#",
Bootstrap_Tag : "Bootstrap#",
Visual_Basic_Tag : "Visual Basic#",
C_Tag : "#C",
Laravel_Tag : "Laravel#",

// Projects Titles and Data
Project1 : "موقع تجارة إلكترونية بإستخدام Laravel" ,
Project1_Data : "مشروع تجارة إلكترونية بإستخدام Laravel", 
Project2 : "مشروع متاجر متعددة" ,
Project2_Data : "مشروع متاجر متعددة بإستخدام Laravel", 
Project3 : "VReal Tour" ,
Project3_Data : "موقع إلكتروني لخدمات الواقع الافتراضي بإستخدام Wordpress", 
Project4 : "VReal Car" ,
Project4_Data : "موقع إلكتروني لخدمات السيارات بإستخدام Wordpress", 
Project5 : "Rrstate" ,
Project5_Data : "موقع إلكتروني لخدمات العقارات بإستخدام Wordpress", 
Project6 : "Cibs Soft" ,
Project6_Data : "موقع إلكتروني لخدمات البرمجيات بإستخدام PHP", 
Project7 : "Engineering House" ,
Project7_Data : "موقع إلكتروني لخدمات هندسية بإستخدام Wordpress", 
Project8 : "تطبيق دردشة بإستخدام PHP" ,
Project8_Data : "تطبيق دردشة بإستخدام PHP", 
Project9 : "مشروع Crud بإستخدام PHP" ,
Project9_Data : "مشروع Crud بإستخدام PHP", 
Project10 : "مشروع تجارة إلكترونية" ,
Project10_Data : "مشروع تجارة إلكترونية بإستخدام PHP", 
Project11 : "مشروع لعبة" ,
Project11_Data : "لعبة X - O بإستخدام Javascript", 
Project12 : "مشروع لعبة" ,
Project12_Data : "لعبة Squid Game بإستخدام Javascript", 
Project13 : "مشروع منبه" ,
Project13_Data : "مشروع منبه بإستخدام JavaScript", 
Project14 : "مشروع Crud" ,
Project14_Data : "مشروع Crud بإستخدام JavaScript", 
Project15 : "مشروع فلاتر صور" ,
Project15_Data : "فلتر صور بإستخدام Javascript", 
Project16 : "مشروع واقع افتراضي" ,
Project16_Data : "مشروع واقع افتراضي بإستخدام Javascript", 
Project17 : "مشروع لعبة" ,
Project17_Data : "مشروع لعبة بإستخدام JQuery", 
Project18 : "مشروع سبحة" ,
Project18_Data : "مشروع سبحة بإستخدام JQuery", 
Project19 : "مشروع لعبة" ,
Project19_Data : "مشروع لعبة بإستخدام JQuery", 
Project20 : "مشروع البرمجة الشيئية (OOP)" ,
Project20_Data : "لعبة Boxing بإستخدام OOP", 
Project21 : "مشروع البرمجة الشيئية (OOP)" ,
Project21_Data : "لعبة الثعبان (Snake Game) بإستخدام OOP", 
Project22 : "مشروع Ajax بإستخدام PHP" ,
Project22_Data : "Crud وبحث بإستخدام Ajax", 
Project23 : "مشروع واجهة برمجية (API)" ,
Project23_Data : "مواقيت الصلاة بإستخدام API", 
Project24 : "مشروع واجهة برمجية (API)" ,
Project24_Data : "تفاصيل الدول بإستخدام API", 
Project25 : "نظام مدرسة" ,
Project25_Data : "نظام مدرسة بإستخدام Laravel", 
Project26 : "مشروع موقع وظائف" ,
Project26_Data : "مشروع موقع وظائف بإستخدام Laravel", 
Project27 : "برنامج متجر" ,
Project27_Data : "برنامج متجر بإستخدام #C", 
Project28 : "برنامج ناطق الأصوات (Speaker)" ,
Project28_Data : "برنامج ناطق الأصوات بإستخدام Visual Basic", 
Project29 : "برنامج لقطة الشاشة" ,
Project29_Data : "برنامج لقطة شاشة بإستخدام Visual Basic", 
Project30 : "برنامج مكتبة" ,
Project30_Data : "برنامج مكتبة بإستخدام #C", 
Project31 : "برنامج اجازات" ,
Project31_Data : "برنامج اجازات بإستخدام #C", 
Project32 : "مشروع Bootstrap" ,
Project32_Data : "موقع طبي بإستخدام Bootstrap", 


},
};
