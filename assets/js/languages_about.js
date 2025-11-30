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
Home_Menu.setAttribute('data-text', 'الرئيسبة');
About_Menu.setAttribute('data-text', 'عني');
Portfolio_Menu.setAttribute('data-text', 'نماذج');
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
Summary_Data : "Passionate and detail-oriented Web Developer specializing in building and maintaining modern, dynamic websites and web applications. Skilled in HTML, CSS, and JavaScript for crafting responsive and user-friendly interfaces, with a strong grasp of OOP principles to ensure scalable and maintainable code. Proficient in PHP and SQL for back-end development and database integration, with hands-on experience in Laravel to deliver efficient and secure solutions. Committed to clean code, performance optimization, and continuous learning in the ever-evolving web landscape.",
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
Work_Experiences : "Work Experiences",
Web_Developer : "Web Developer",
Marketing_Company : "Marketing & VR Company",
Date_Company1 : "Sep 2022 - Nov 2023",
Work_Company1 : "Developed custom websites tailored to meet individual client requirements. Utilized expertise in HTML, CSS, JavaScript, and WordPress to deliver high-quality, efficient code across a range of projects. Integrated augmented reality features by creating interactive elements that enhance user engagement and leverage AR technology.",
Software_Company : "Software Company",
Date_Company2 : "Jan 2024 - Jun 2025",
Work_Company2_1 : "Maintained MySQL databases to store and manage dynamic content for websites.",
Work_Company2_2 : "Developed secure and reliable web-based solutions tailored to meet client needs.",
Work_Company2_3 : "Utilized PHP and content creation tools to design, build, and maintain high-performing websites.",
Work_Company2_4 : "Established and implemented structured procedures for continuous website updates and improvements.",
Work_Company2_5 : "Debugged and optimized websites by identifying and resolving functionality and performance issues.",




},

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Arabic : {   

// Pages Title

Home_Page_title : "عبدالله فؤاد | مطور ويب",



// Menu

EN : "EN",
AR : "AR",
Home_Menu : "الرئيسية",
Portfolio_Menu : "نماذج",
About_Menu : "عني",
Download : "تحميل السيرة الذاتية",

// About Page 

About : "من أنا",
Learn : "تعرف عليّ أكثر",
Summary : "ملخص مهني",
Summary_Data : "مطور ويب شغوف ومدقق للتفاصيل، متخصص في بناء وصيانة المواقع والتطبيقات  الحديثة. أمتلك مهارات متقدمة في HTML، وCSS، وجافاسكريبت (JavaScript) لتصميم واجهات مستخدم متجاوبة (Responsive) وسهلة الاستخدام، مع فهم عميق لمبادئ البرمجة الشيئية (OOP) لضمان كتابة شفرة برمجية قابلة للتوسع والصيانة. لدي إتقان لـ PHP وSQL لتطوير الواجهة الخلفية (Back-End) وتكامل قواعد البيانات، بالإضافة إلى خبرة عملية في إطار عمل Laravel لتقديم حلول فعالة وآمنة. ملتزم بتطبيق معايير الشفرة النظيفة (Clean Code)، وتحسين الأداء، والتعلم المستمر لمواكبة التطورات المتسارعة في مجال الويب.",
Exp_Years : " خبرة أكثر من سنتين",
Bachelor : "ليسانس آداب",
Diploma : "دبلومة في تطوير الويب (Full Stack)",
City : "القاهرة - مصر",
Skills : "المهارات",
JavaScript : "Javascript",
JavaScript_Skill : "بناء واجهات أمامية (Front-End) تفاعلية وديناميكية وتنفيذ المنطق البرمجي للواجهة الأمامية.",
JQuery : "Jquery",
JQuery_Skill : "تسريع وتبسيط تطوير الواجهة الأمامية التفاعلية من خلال تبسيط مهام DOM وAJAX المعقدة.",
PHP : "PHP",
PHP_Skill : "إنشاء محتوى ديناميكي ومعالجة منطق معقد على جانب الخادم لإدارة البيانات والوظائف الأساسية.",
SQL : "SQL",
SQL_Skill : "تصميم قاعدة البيانات وتحسينها وإدارة الاستعلامات الفعالة.",
OOP : "OOP",
OOP_Skill : "تطبيق منهجية البرمجة الشيئية (OOP) لتصميم كود منظَّم وقابل للصيانة باستخدام الفئات والكائنات.",
API : "API",
API_Skill : "بناء روابط بيانات قوية (واجهات برمجة التطبيقات - APIs) لتمكين تفاعل سلس وموثوق به بين الأنظمة المختلفة.",
WordPress : "Wordpress",
WordPress_Skill : "تطوير القوالب المخصصة، ودمج الإضافات (Plugins)، وتحسين أداء الموقع.",
Laravel : "Laravel",
Laravel_Skill : "أستخدم إطار عمل Laravel، المعروف بقوته وأناقة تركيبه البرمجي، لضمان تصميم وبناء تطبيقات ويب عصرية وموثوقة",
Work_Experiences : "الخبرات المهنية",
Web_Developer : "مطور ويب",
Marketing_Company : "شركة تسويق وواقع افتراضي (VR)",
Date_Company1 : "سبتمبر 2022 - نوفمبر 2023",
Work_Company1 : "تطوير مواقع ويب مخصصة مصممة لتلبية المتطلبات الفردية للعملاء. توظيف الخبرة في HTML، وCSS، وJavaScript، وWordPress لتقديم كود عالي الجودة وفعّال عبر مجموعة من نماذج أعمالي. دمج ميزات الواقع المعزز (Augmented Reality) من خلال إنشاء عناصر تفاعلية تعزز من مشاركة المستخدم وتستفيد من تقنية الواقع المعزز.",
Software_Company : "شركة برمجة",
Date_Company2 : "يناير 2024 - يونيو 2025",
Work_Company2_1 : "صيانة وإدارة قواعد بيانات MySQL لتخزين ومعالجة المحتوى الديناميكي للمواقع الإلكترونية.",
Work_Company2_2 : "بناء وإطلاق حلول ويب قوية وآمنة، مصممة لتخصيصها وفقاً لمتطلبات العميل المحددة.",
Work_Company2_3 : "توظيف لغة PHP وأدوات إنشاء المحتوى لتصميم وبناء وصيانة مواقع ويب ذات أداء عالٍ.",
Work_Company2_4 : "تأسيس وتنفيذ عمليات عمل منهجية لضمان التطوير والارتقاء المستمر بمنصة الويب.",
Work_Company2_5 : "معالجة وتصحيح المشاكل البرمجية وتحسين سرعة وكفاءة المواقع عبر تشخيص دقيق للمشكلات الوظيفية ومشكلات الأداء.",


},
};
