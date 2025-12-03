const langSwitcher = document.getElementById('lang-switcher');
const langOptions = langSwitcher.querySelectorAll('.lang-option');
  

let theme = document.getElementById('theme');
// let fontFamily = document.getElementById('fontFamily');
// let fontFamily2 = document.getElementById('fontFamily2');

let Home_Menu =  document.getElementById('Home_Menu');
let About_Menu =  document.getElementById('About_Menu');
let Portfolio_Menu =  document.getElementById('Portfolio_Menu');


function ArabicLanguages(){

theme.setAttribute('href', 'assets/css/about_ar.css');
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
theme.setAttribute('href', 'assets/css/about.css');
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

// About Page

About : "About",
Learn : "Learn More About Me",
Summary : "Summary",
Summary_Data : "Web Developer with a strong passion for detail and clean architecture, specializing in building and maintaining modern, high-performance, and dynamic web applications. Proficient in HTML5, CSS3, and JavaScript, focused on crafting responsive, user-centric UIs. I possess an expert command of PHP and SQL for robust back-end logic, with proven hands-on experience using the Laravel framework to deliver secure and scalable solutions. My work is guided by solid OOP principles, ensuring a commitment to clean code, performance optimization, and continuous technical growth.",
Exp_Years : "2+ Years",
Bachelor : "Bachelor of Arts",
Diploma : "Diploma in Web Development (Full Stack)",
City : "Cairo - Egypt",
Skills : "Skills",
JavaScript : "JavaScript",
JavaScript_Skill : "Developing interactive, dynamic user interfaces and client-side logic.",
JQuery : "JQuery",
JQuery_Skill : "Accelerating and simplifying interactive front-end development by streamlining complex DOM and AJAX tasks.",
PHP : "PHP",
PHP_Skill : "Generating dynamic content and handling complex server-side logic to manage core data and functionalities.",
SQL : "SQL",
SQL_Skill : "Database design, optimization, and efficient query management.",
OOP : "OOP",
OOP_Skill : "Applying the OOP methodology to design organized, maintainable code using Classes and Objects.",
API : "API",
API_Skill : "Building robust data connectors (APIs) to enable seamless and reliable interaction across distinct systems.",
WordPress : "WordPress",
WordPress_Skill : "Custom theme development, plugin integration, and site optimization.",
Laravel : "Laravel",
Laravel_Skill : "I use the Laravel framework, known for its power and elegant syntax, to ensure the design and building of modern and reliable web applications.",
Work_Experiences : "Work Experience",
Web_Developer : "Web Developer",
Marketing_Company : "Marketing & VR Company",
Date_Company1 : "2022 - 2023",
Work_Company1_1 : "1- Developed custom websites tailored to meet individual client requirements.",
Work_Company1_2 : "2- Utilized expertise in HTML, CSS, JavaScript, and WordPress to deliver high-quality, efficient code across a range of projects.",
Work_Company1_3 : "3- Integrated augmented reality features by creating interactive elements that enhance user engagement and leverage AR technology.",
Software_Company : "Software Company",
Date_Company2 : "2024 - 2025",
Work_Company2_1 : "1- Maintained MySQL databases to store and manage dynamic content for websites.",
Work_Company2_2 : "2- Developed secure and reliable web-based solutions tailored to meet client needs.",
Work_Company2_3 : "3- Utilized PHP and content creation tools to design, build, and maintain high-performing websites.",
Work_Company2_4 : "4- Established and implemented structured procedures for continuous website updates and improvements.",
Work_Company2_5 : "5- Debugged and optimized websites by identifying and resolving functionality and performance issues.",




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

// About Page 

About : "من أنا",
Learn : "تعرف عليّ أكثر",
Summary : "ملخص مهني",
Summary_Data : "مطور ويب يتمتع بشغف عالٍ وتركيز دقيق على التفاصيل، متخصص في تصميم وتطوير وصيانة مواقع وتطبيقات الويب الحديثة والديناميكية. أتقن لغات HTML5، CSS3، وJavaScript لبناء واجهات مستخدم سريعة الاستجابة وذات أداء عالٍ. وللواجهة الخلفية، لدي إجادة في PHP و SQL مع خبرة عملية معمقة في استخدام إطار عمل Laravel لتسريع عملية التطوير وتقديم حلول قوية وقابلة للتوسع. أطبق مبادئ البرمجة الشيئية (OOP) لضمان كتابة شفرة مصدرية نظيفة وقابلة للصيانة، وملتزم بتحسين أداء التطبيقات والمواكبة المستمرة لأحدث التقنيات.",
Exp_Years : " خبرة أكثر من سنتين",
Bachelor : "ليسانس آداب",
Diploma : "دبلومة في تطوير الويب (Full Stack)",
City : "القاهرة - مصر",
Skills : "المهارات",
JavaScript : "Javascript",
JavaScript_Skill : "بناء واجهات أمامية (Front-End) تفاعلية وديناميكية وتنفيذ المنطق البرمجي للواجهة الأمامية.",
JQuery : "JQuery",
JQuery_Skill : "تسريع وتبسيط تطوير الواجهة الأمامية التفاعلية من خلال تبسيط مهام DOM وAJAX المعقدة.",
PHP : "PHP",
PHP_Skill : "إنشاء محتوى ديناميكي ومعالجة منطق معقد على جانب الخادم لإدارة البيانات والوظائف الأساسية.",
SQL : "SQL",
SQL_Skill : "تصميم قاعدة البيانات وتحسينها وإدارة الاستعلامات الفعالة.",
OOP : "OOP",
OOP_Skill : "تطبيق منهجية البرمجة الشيئية (OOP) لتصميم كود منظَّم وقابل للصيانة بإستخدام الفئات والكائنات.",
API : "API",
API_Skill : "بناء روابط بيانات قوية (واجهات برمجة التطبيقات - APIs) لتمكين تفاعل سلس وموثوق به بين الأنظمة المختلفة.",
WordPress : "Wordpress",
WordPress_Skill : "تطوير القوالب المخصصة، ودمج الإضافات (Plugins)، وتحسين أداء الموقع.",
Laravel : "Laravel",
Laravel_Skill : "أستخدم إطار عمل Laravel، المعروف بقوته وأناقة تركيبه البرمجي، لضمان تصميم وبناء تطبيقات ويب عصرية وموثوقة",
Work_Experiences : "الخبرات المهنية",
Web_Developer : "مطور ويب",
Marketing_Company : "شركة تسويق وواقع افتراضي (VR)",
Date_Company1 : " 2022 - 2023",
Work_Company1_1 : "1- تطوير مواقع ويب مخصصة مصممة لتلبية المتطلبات الفردية للعملاء. ",
Work_Company1_2 : "2- توظيف الخبرة في HTML، وCSS، وJavaScript، وWordPress لتقديم كود عالي الجودة وفعّال عبر مجموعة من نماذج أعمالي.",
Work_Company1_3 : "3- دمج ميزات الواقع المعزز (Augmented Reality) من خلال إنشاء عناصر تفاعلية تعزز من مشاركة المستخدم وتستفيد من تقنية الواقع المعزز.",

Software_Company : "شركة برمجة",
Date_Company2 : " 2024 - 2025",
Work_Company2_1 : "1- صيانة وإدارة قواعد بيانات MySQL لتخزين ومعالجة المحتوى الديناميكي للمواقع الإلكترونية.",
Work_Company2_2 : "2- بناء وإطلاق حلول ويب قوية وآمنة، مصممة لتخصيصها وفقاً لمتطلبات العميل المحددة.",
Work_Company2_3 : "3- توظيف لغة PHP وأدوات إنشاء المحتوى لتصميم وبناء وصيانة مواقع ويب ذات أداء عالٍ.",
Work_Company2_4 : "4- تأسيس وتنفيذ طرق عمل منهجية لضمان التطوير والارتقاء المستمر بمنصة الويب.",
Work_Company2_5 : "5- معالجة وتصحيح المشاكل البرمجية وتحسين سرعة وكفاءة المواقع عبر تشخيص دقيق للمشكلات الوظيفية ومشكلات الأداء.",


},
};
