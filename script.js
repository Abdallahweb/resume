$(function () {

  
  const SKILLS = [
    { ext: "js",   name: "JavaScript", desc: "Developing interactive, dynamic user interfaces and client-side logic." },
    { ext: "jq",   name: "jQuery",     desc: "Accelerating and simplifying interactive front-end development by streamlining complex DOM and AJAX tasks." },
    { ext: "php",  name: "PHP",        desc: "Generating dynamic content and handling complex server-side logic to manage core data and functionalities." },
    { ext: "sql",  name: "SQL",        desc: "Database design, optimization, and efficient query management." },
    { ext: "oop",  name: "OOP",        desc: "Applying the OOP methodology to design organized, maintainable code using classes and objects." },
    { ext: "api",  name: "API",        desc: "Building robust data connectors (APIs) to enable seamless, reliable interaction across distinct systems." },
    { ext: "wp",   name: "WordPress",  desc: "Custom theme development, plugin integration, and site optimization." },
    { ext: "lrv",  name: "Laravel",    desc: "Using Laravel's power and elegant syntax to design and build modern, reliable web applications." }
  ];

  const EXPERIENCE = [
    {
      hash: "",
      role: "Web Developer",
      company: "Marketing & VR Company",
      duration: "1 Year 6 Months",
      lines: [
        "Developed 5 websites using WordPress tailored to diverse client requirements.",
        "Utilized HTML, CSS, JavaScript and WordPress to deliver high-quality, efficient code across projects.",
        "Designed and customized UIs to reflect each brand's identity, integrating AR features to showcase business services."
      ]
    },
    {
      hash: "",
      role: "Web Developer",
      company: "Software Company",
      duration: "1 Year 3 Months",
      lines: [
        "Maintained MySQL databases to store and manage dynamic content for websites.",
        "Built a fully integrated PHP/MySQL dashboard with secure auth, user and role management.",
        "Enhanced and maintained an e-commerce platform with new features and system updates.",
        "Built and integrated RESTful APIs to support front-end functionality and third-party services.",
        "Diagnosed and resolved functional and performance issues to improve site speed and efficiency."
      ]
    }
  ];

  const PROJECTS = [
    { title:"Quran App Using API", cat:"api", tags:["API","JavaScript","JQuery"], desc:"A web-based Quran app enabling users to listen to recitations, access Tafsir, and stream live Quran radio.", img:"./img/portfolio/Quran.webp", url:"https://abdallahweb.github.io/Quran/" },
    { title:"Virtual Tour Platform", cat:"wordpress", tags:["WordPress","PHP","JavaScript"], desc:"A web platform allowing users to explore real estate, cars, malls, and shops through interactive virtual tours.", img:"./img/portfolio/VrealTour.webp", url:"https://vrealtour.com/" },
    { title:"Car Showcase & Listing Website", cat:"wordpress", tags:["WordPress","PHP","JavaScript"], desc:"A car listing website showcasing vehicles with detailed information and images for dealerships.", img:"./img/portfolio/VrealCar.webp", url:"https://vrealcar.com/" },
    { title:"Laravel E-commerce Platform", cat:"laravel", tags:["Laravel","SQL","Bootstrap"], desc:"A Laravel e-commerce platform for browsing products, managing carts and completing secure transactions.", img:"./img/portfolio/Ecommerce.webp", url:"https://ecomlaravel.42web.io/" },
    { title:"AI Chatbot For Medical Consultations", cat:"ai", tags:["AI","PHP","JavaScript"], desc:"An AI-powered medical chatbot that provides instant, reliable health guidance through interactive Q&A.", img:"./img/portfolio/AI.webp", url:"https://chatbotai.42web.io/index.php?i=1" },
    { title:"PHP Chat Application", cat:"php", tags:["PHP","SQL","JavaScript","AJAX"], desc:"A PHP chat app demonstrating backend logic, database interaction and AJAX-based real-time messaging.", img:"./img/portfolio/ChatApp.webp", url:"https://chatappphp.42web.io/index.php" },
    { title:"AI Chatbot for Legal Consultations", cat:"ai", tags:["AI","PHP","JavaScript"], desc:"An AI-powered legal chatbot delivering instant, reliable legal guidance through real-time responses.", img:"./img/portfolio/legalai.webp", url:"https://chatbotai.42web.io/legal/" },
    { title:"Laravel-based Multi-Store System", cat:"laravel", tags:["Laravel","SQL","Bootstrap","AJAX"], desc:"A multi-store Laravel system letting vendors manage stores, products and orders across roles.", img:"./img/portfolio/MultiStore.webp", url:"https://storelaravel.infinityfreeapp.com/view_stores?i=1" },
    { title:"Blogging Platform Using Laravel", cat:"laravel", tags:["Laravel","SQL","Bootstrap"], desc:"A modern Laravel blogging platform letting writers and admins publish and organize articles via MVC.", img:"./img/portfolio/articles.webp", url:"https://storelaravel.infinityfreeapp.com/articles/" },
    { title:"E-commerce Project Using PHP", cat:"php", tags:["PHP","SQL","JavaScript"], desc:"A PHP/MySQL e-commerce project for browsing products, managing carts and placing orders.", img:"./img/portfolio/EcommercePhp.webp", url:"https://storelaravel.infinityfreeapp.com/shop/index.php" },
    { title:"E-commerce Project Using WordPress", cat:"wordpress", tags:["WordPress","PHP","JavaScript"], desc:"A responsive fashion e-commerce site with categories, brands, color filters and product details.", img:"./img/portfolio/EcommerceWordpress.webp", url:"https://chatapp.freehosting.dev/wp/" },
    { title:"Real Estate Management Website", cat:"wordpress", tags:["WordPress","PHP","JavaScript"], desc:"A real estate website enabling property listing management and display with dynamic data.", img:"./img/portfolio/Rrstate.webp", url:"https://rrstate.com/" },
    { title:"Software Company Website", cat:"php", tags:["PHP","JavaScript","AJAX"], desc:"A professional company website showcasing services and projects with a responsive UI.", img:"./img/portfolio/cibs.webp", url:"https://cibssoft.com/" },
    { title:"CRUD Management System", cat:"php", tags:["PHP","SQL","AJAX"], desc:"A full PHP CRUD system for creating, reading, updating and deleting data with a responsive interface.", img:"./img/portfolio/CrudPhp.webp", url:"https://crudajax.infinityfreeapp.com/ajax/" },
    { title:"CRUD System Using Laravel", cat:"laravel", tags:["Laravel","SQL","Bootstrap"], desc:"A CRUD management system built with Laravel, demonstrating Create/Read/Update/Delete via MVC.", img:"./img/portfolio/school.webp", url:"https://abdallah.42web.io/system/" },
    { title:"Prayer Times Application", cat:"api", tags:["API","JavaScript"], desc:"A web app retrieving daily prayer times by country and city using an external API in real time.", img:"./img/portfolio/adan-api.webp", url:"https://abdallahweb.github.io/Adan-Api/" },
    { title:"Countries Information App Using API", cat:"api", tags:["API","JavaScript"], desc:"An application fetching and displaying country information like name and flag via a public REST API.", img:"./img/portfolio/api.webp", url:"https://abdallahweb.github.io/Country-Api/" },
    { title:"OOP Project — Snake Game", cat:"oop", tags:["OOP","JavaScript","JQuery"], desc:"A classic Snake game implemented with OOP, featuring keyboard controls, scoring and movement logic.", img:"./img/portfolio/Snake.webp", url:"https://abdallahweb.github.io/Snake/" },
    { title:"Interactive Boxing Game Using OOP", cat:"oop", tags:["OOP","JavaScript","JQuery"], desc:"A boxing game implementing OOP concepts, user interaction, event handling and timing.", img:"./img/portfolio/Boxing.webp", url:"https://abdallahweb.github.io/Boxing/" },
    { title:"CRUD Management System (JavaScript)", cat:"javascript", tags:["JavaScript","JQuery"], desc:"A web app demonstrating full CRUD functionality with dynamic DOM updates and real-time data management.", img:"./img/portfolio/CrudJavaScript.webp", url:"https://abdallahweb.github.io/Crud/" },
    { title:"VR Project", cat:"javascript", tags:["PHP","JavaScript"], desc:"A web VR project using JavaScript and WebVR/WebXR to explore 3D environments with interactive graphics.", img:"./img/portfolio/Javascript.webp", url:"https://vrealtour.com/plan" },
    { title:"Tic Tac Toe Game", cat:"javascript", tags:["JavaScript","JQuery"], desc:"A classic Tic Tac Toe game built with JavaScript demonstrating game logic and DOM manipulation.", img:"./img/portfolio/X-O Game.webp", url:"https://abdallahweb.github.io/Game-X-O/" },
    { title:"JavaScript Alarm Clock", cat:"javascript", tags:["JavaScript","JQuery"], desc:"A simple alarm clock app allowing users to set alarms and receive notifications at scheduled times.", img:"./img/portfolio/alarm.webp", url:"https://abdallahweb.github.io/Alarm" },
    { title:"Squid Game Using JavaScript", cat:"javascript", tags:["JavaScript","JQuery"], desc:"A browser game inspired by Squid Game, showcasing DOM manipulation, event handling and game logic.", img:"./img/portfolio/Squid.webp", url:"https://abdallahweb.github.io/Squid/" },
    { title:"Photo Filter Project", cat:"javascript", tags:["JavaScript","JQuery"], desc:"A web app enabling users to apply image filters in real time, demonstrating dynamic styling.", img:"./img/portfolio/PhotoFilter.webp", url:"https://abdallahweb.github.io/Filter/" },
    { title:"Game Project", cat:"javascript", tags:["JavaScript","JQuery"], desc:"A browser game inspired by the classic Dinosaur game — collisions, scoring and event handling.", img:"./img/portfolio/hunter.webp", url:"https://abdallahweb.github.io/hunter" },
    { title:"Personal Portfolio", cat:"Design", tags:["Html" , "Css","JavaScript","JQuery"], desc:"A responsive personal portfolio website built with HTML, CSS, JavaScript, and jQuery to showcase my skills, projects, and contact information.", img:"./img/portfolio/portfolio.webp", url:"https://abdallahweb.github.io/portfolio" }

  
  ];

  const FILTERS = [
    { key:"all", label:"All", count: PROJECTS.length },
    { key:"wordpress", label:"WordPress" },
    { key:"laravel", label:"Laravel" },
    { key:"php", label:"PHP" },
    { key:"ai", label:"AI" },
    { key:"javascript", label:"JavaScript" },
    { key:"api", label:"API" },
    { key:"oop", label:"OOP" },
    { key:"Design", label:"Design" }

  ].map(f => f.key === "all" ? f : { ...f, count: PROJECTS.filter(p => p.cat === f.key).length });


  (function boot(){
    let pct = 0;
    const $bar = $("#bootProgress"), $pct = $("#bootPct"), $boot = $("#boot");
    const timer = setInterval(function(){
      pct += Math.random() * 22 + 8;
      if (pct >= 100) {
        pct = 100;
        clearInterval(timer);
        setTimeout(function(){ $boot.addClass("is-hidden"); }, 220);
      }
      $bar.css("width", pct + "%");
      $pct.text(Math.floor(pct) + "%");
    }, 130);
  })();


  const $skillsGrid = $("#skillsGrid");
  SKILLS.forEach(s => {
    $skillsGrid.append(
      $("<div class='skill-card reveal'>").append(
        $("<div class='skill-card__head'>").append(
          $("<span class='skill-card__ext'>").text("." + s.ext),
          $("<span class='skill-card__name'>").text(s.name)
        ),
        $("<p class='skill-card__desc'>").text(s.desc)
      )
    );
  });


  const $commits = $("#commits");
  EXPERIENCE.forEach((job, i) => {
    const $diff = $("<ul class='commit__diff'>");
    job.lines.forEach(l => $diff.append($("<li>").text(l)));
    $commits.append(
      $("<article class='commit reveal'>").append(
        $("<p class='commit__meta'>").append(
          $("<span class='commit__hash'>").text("#" + job.hash),
          $("<span>").text(job.duration)
        ),
        $("<h3 class='commit__role'>").text(job.role),
        $("<p class='commit__company'>").text(job.company),
        $diff
      )
    );
  });

  
  const $filters = $("#filters");
  FILTERS.forEach((f, i) => {
    $filters.append(
      $("<button type='button' class='filter-btn'>")
        .toggleClass("is-active", i === 0)
        .attr("data-filter", f.key)
        .text(f.label + " (" + f.count + ")")
    );
  });

  const $projectsGrid = $("#projectsGrid");
  PROJECTS.forEach(p => {
    const $tags = $("<div class='project-card__tags'>");
    p.tags.forEach(t => $tags.append($("<span>").text("#" + t)));

    $projectsGrid.append(
      $("<article class='project-card reveal'>")
        .attr("data-cat", p.cat)
        .append(
          $("<div class='project-card__thumb'>").append(
            $("<img loading='lazy' alt=''>").attr("src", p.img).attr("alt", p.title),
            $("<span class='project-card__cat'>").text(p.cat)
          ),
          $("<div class='project-card__body'>").append(
            $("<h3 class='project-card__title'>").text(p.title),
            $("<p class='project-card__desc'>").text(p.desc),
            $tags,
            $("<a class='project-card__link' target='_blank' rel='noopener'>")
              .attr("href", p.url)
              .html("Live Preview &nbsp;↗")
          )
        )
    );
  });

  $filters.on("click", ".filter-btn", function () {
    const key = $(this).data("filter");
    $filters.find(".filter-btn").removeClass("is-active");
    $(this).addClass("is-active");
    $projectsGrid.find(".project-card").each(function () {
      const match = key === "all" || $(this).data("cat") === key;
      $(this).toggleClass("is-hidden", !match);
    });
  });

  const $term = $("#terminalBody");
  const outputLines = [
    { label: "name",     value: "Abdallah Fouad" },
    { label: "location", value: "Cairo, Egypt" },
    { label: "email",    value: "abdallahforweb@gmail.com", href: "mailto:abdallahforweb@gmail.com" },
    { label: "phone",    value: "01156460836", href: "tel:01156460836" },
    { label: "whatsapp", value: "chat now →", href: "https://api.whatsapp.com/send?phone=2001156460836" }
  ];
  let li = 0;
  function typeNextLine(){
    if (li >= outputLines.length) {
      $term.append("<p><span class='tprompt'>guest@portfolio</span>:<span class='tpath'>~</span>$ <span class='cursor' style='background:var(--mint)'>&nbsp;</span></p>");
      return;
    }
    const item = outputLines[li];
    const $p = $("<p>");
    const text = item.label + ": ";
    if (item.href) {
      $p.append(text, $("<a class='out'>").attr("href", item.href).attr("target", item.href.startsWith("http") ? "_blank" : null).attr("rel","noopener").text(item.value));
    } else {
      $p.append(text, $("<span class='out'>").text(item.value));
    }
    $term.append($p);
    li++;
    setTimeout(typeNextLine, 260);
  }
  const termObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(typeNextLine, 400);
        termObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  termObserver.observe(document.getElementById("contact"));

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    const name = $("#cf-name").val().trim();
    const email = $("#cf-email").val().trim();
    const message = $("#cf-message").val().trim();
    const $hint = $("#cfHint");

    if (!name || !email || !message) {
      $hint.text("Please fill in every field before sending.").css("color", "var(--pink)");
      return;
    }
    const subject = encodeURIComponent("Portfolio inquiry from " + name);
    const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
    window.location.href = "mailto:abdallahforweb@gmail.com?subject=" + subject + "&body=" + body;
    $hint.text("Opening your email app…").css("color", "var(--mint)");
  });

  
  (function typeName(){
    const full = "Abdallah Fouad";
    const $el = $("#typedName");
    let i = 0;
    (function step(){
      if (i <= full.length) {
        $el.html(full.slice(0, i) + "<span class='cursor'>&nbsp;</span>");
        i++;
        setTimeout(step, 70);
      }
    })();
  })();

  
  $("a[data-target]").on("click", function (e) {
    e.preventDefault();
    const target = document.getElementById($(this).data("target"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    $("#tabs").removeClass("is-open");
    $("#menuToggle").attr("aria-expanded", "false");
  });

  $("#menuToggle").on("click", function () {
    const open = $("#tabs").toggleClass("is-open").hasClass("is-open");
    $(this).attr("aria-expanded", open ? "true" : "false");
  });

  const sections = $(".pane").toArray();
  const $tabLinks = $(".tab[data-target]");
  const $sideLinks = $(".sidebar__tree a[data-target]");

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        $tabLinks.removeClass("is-active");
        $tabLinks.filter("[data-target='" + id + "']").addClass("is-active");
        $sideLinks.removeClass("is-active");
        $sideLinks.filter("[data-target='" + id + "']").addClass("is-active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  sections.forEach(s => spy.observe(s));

  
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  
  $("#year").text(new Date().getFullYear());
  $("#toTop").on("click", function () {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });

});
