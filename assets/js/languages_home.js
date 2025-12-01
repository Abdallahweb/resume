const langSwitcher = document.getElementById('lang-switcher');
const langOptions = langSwitcher.querySelectorAll('.lang-option');
  

let theme = document.getElementById('theme');
// let fontFamily = document.getElementById('fontFamily');
// let fontFamily2 = document.getElementById('fontFamily2');

let Home_Menu =  document.getElementById('Home_Menu');
let About_Menu =  document.getElementById('About_Menu');
let Portfolio_Menu =  document.getElementById('Portfolio_Menu');


function ArabicLanguages(){

theme.setAttribute('href', 'assets/css/style_ar.css');
localStorage.setItem("lang" , "arabic" );
langOptions.forEach(option => option.classList.remove('active'));
langSwitcher.querySelector('.lang-option[data-lang="AR"]').classList.add('active');

document.dir = "rtl";
Home_Menu.setAttribute('data-text', 'الرئيسبة');
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
theme.setAttribute('href', 'assets/css/style.css');
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

// Home Page
Abdallah : "Abdallah",
Fouad : "Fouad",
Im : "I'm a",
Web_Developer : "Web Developer",
With : " With ",
Two : "2+",
Years : "Years",
of : "of",
Experience : "Experience",
in : " in ",
Building : "Building",
Robust : "Robust ",
High_performance : "and High-performance",
websites : "Websites.",
Portfolio_Btn : "Portfolio",
About_Btn : "About Me",


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

// Home Page 

Abdallah : "عبدالله",
Fouad : "فؤاد",
Im : "أعمل",
Web_Developer : "كمطور ويب",
With : "و",
Two : "خبرة",
Years : "تتجاوز",
of : "أكثر من ",
Experience : "سنتين",
in : " في ",
Building : "بناء ",
Robust : "و ",
High_performance : "صيانة ",
websites : "المواقع الإلكترونية.",
Portfolio_Btn : "نماذج أعمالي",
About_Btn : "المزيد عني",






},
};
