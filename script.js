$(function () {
  /* ---------- DATA ---------- */
  const skills = [
    { name: "JavaScript", tag: '<i class="devicon-javascript-plain colored"  style="color: #f0b429 !important;"></i>' },
    { name: "PHP", tag: '<i class="devicon-php-plain colored" style="color: #f0b429 !important;"></i>' },
    { name: "Laravel", tag: '<i class="devicon-laravel-original colored"  style="color: #f0b429 !important;"></i>' },
    { name: "MySQL", tag: '<i class="devicon-mysql-original colored"  style="color: #f0b429 !important;"></i>' },
    { name: "WordPress", tag: '<i class="devicon-wordpress-plain colored"  style="color: #f0b429 !important;"></i>' },
    { name: "OOP", tag: '<i class="fa-solid fa-cubes"  style="color: #f0b429 !important;"></i>' },
    { name: "REST API", tag: '<i class="fa-solid fa-code"  style="color: #f0b429 !important;"></i>' },
  ];

  const projects = [
{ img: "Quran.webp", cat: "API", name: "Quran App Using API", desc: "A web-based Quran app enabling users to listen to recitations, access Tafsir, and stream live Quran radio.", tags: ["API", "JavaScript", "jQuery"], link: "https://abdallahweb.github.io/Quran/" },
{ img: "VrealTour.webp", cat: "WordPress", name: "Virtual Tour Platform", desc: "A web platform allowing users to explore real estate, cars, malls, and shops through interactive virtual tours.", tags: ["WordPress", "PHP", "JavaScript"], link: "https://vrealtour.com/" },
{ img: "VrealCar.webp", cat: "WordPress", name: "Car Showcase & Listing Website", desc: "A car listing website showcasing vehicles with detailed information and images for dealerships and automotive businesses.", tags: ["WordPress", "PHP", "JavaScript"], link: "https://vrealcar.com/" },
{ img: "Ecommerce.webp", cat: "Laravel", name: "Laravel E-commerce Platform", desc: "A Laravel e-commerce platform for browsing products, managing carts, and completing secure transactions, showcasing MVC, database design, and authentication.", tags: ["Laravel", "SQL", "Bootstrap"], link: "https://ecomlaravel.42web.io/" },
{ img: "AI.webp", cat: "AI", name: "AI Chatbot For Medical Consultations", desc: "An AI-powered medical chatbot that provides instant, reliable health guidance by understanding user questions and responding interactively.", tags: ["AI", "PHP", "JavaScript"], link: "https://chatbotai.42web.io/index.php?i=1" },
{ img: "ChatApp.webp", cat: "PHP", name: "PHP Chat Application", desc: "A PHP chat app demonstrating backend logic, database interaction, and AJAX-based real-time messaging between users.", tags: ["PHP", "SQL", "JavaScript", "AJAX"], link: "https://chatappphp.42web.io/index.php" },
{ img: "legalai.webp", cat: "AI", name: "AI Chatbot for Legal Consultations", desc: "An AI-powered legal chatbot that delivers instant, reliable legal guidance by understanding legal questions and providing interactive, real-time responses.", tags: ["AI", "PHP", "JavaScript"], link: "https://chatbotai.42web.io/legal/" },
{ img: "MultiStore.webp", cat: "Laravel", name: "Laravel-based Multi-Store System", desc: "A multi-store Laravel system allowing vendors to manage stores, products, and orders, demonstrating roles, MVC, and database relationships.", tags: ["Laravel", "SQL", "Bootstrap", "AJAX"], link: "https://storelaravel.infinityfreeapp.com/view_stores?i=1" },
{ img: "articles.webp", cat: "Laravel", name: "Blogging Platform Using Laravel", desc: "A modern blogging platform built with Laravel that allows writers and administrators to publish, manage and organize articles efficiently, following the MVC architecture.", tags: ["Laravel", "SQL", "Bootstrap"], link: "https://storelaravel.infinityfreeapp.com/articles/" },
{ img: "EcommercePhp.webp", cat: "PHP", name: "E-commerce Project Using PHP", desc: "A PHP/MySQL e-commerce project enabling browsing products, managing carts, and placing orders, showcasing server-side programming and a responsive interface.", tags: ["PHP", "SQL", "JavaScript"], link: "https://storelaravel.infinityfreeapp.com/shop/index.php" },
{ img: "EcommerceWordpress.webp", cat: "WordPress", name: "E-commerce Project Using WordPress", desc: "A modern responsive fashion e-commerce website featuring categories, brands, filters, product details, and shopping cart functionality for seamless shopping.", tags: ["WordPress", "PHP", "JavaScript"], link: "https://chatapp.freehosting.dev/wp/" },
{ img: "Rrstate.webp", cat: "WordPress", name: "Real Estate Management Website", desc: "A real estate website enabling property listing management and display with dynamic data and an organized backend structure.", tags: ["WordPress", "PHP", "JavaScript"], link: "https://rrstate.com/" },
{ img: "cibs.webp", cat: "PHP", name: "Software Company Website", desc: "A professional company website showcasing services, projects, and information with a modern design and responsive, user-friendly interface.", tags: ["PHP", "JavaScript", "AJAX"], link: "https://cibssoft.com/" },
{ img: "CrudPhp.webp", cat: "PHP", name: "CRUD Management System", desc: "A full PHP CRUD system for creating, reading, updating and deleting data with a responsive interface.", tags: ["PHP", "SQL", "AJAX"], link: "https://crudajax.infinityfreeapp.com/ajax/" },
{ img: "school.webp", cat: "Laravel", name: "CRUD System Using Laravel", desc: "A CRUD management system developed with Laravel that demonstrates the implementation of Create, Read, Update and Delete operations using the MVC architecture.", tags: ["Laravel", "SQL", "Bootstrap"], link: "https://abdallah.42web.io/system/" },
{ img: "adan-api.webp", cat: "API", name: "Prayer Times Application", desc: "A web app retrieving daily prayer times by country and city using an external API with real-time updates.", tags: ["API", "JavaScript"], link: "https://abdallahweb.github.io/Adan-Api/" },
{ img: "api.webp", cat: "API", name: "Countries Information App Using API", desc: "An application fetching and displaying country information like name and flag using a public REST API.", tags: ["API", "JavaScript"], link: "https://abdallahweb.github.io/Country-Api/" },
{ img: "Snake.webp", cat: "OOP", name: "OOP Project - Snake Game", desc: "A classic Snake game implemented with OOP, featuring keyboard controls, scoring, and dynamic movement logic.", tags: ["OOP", "JavaScript", "jQuery"], link: "https://abdallahweb.github.io/Snake/" },
{ img: "Boxing.webp", cat: "OOP", name: "Interactive Boxing Game Using OOP", desc: "A boxing game implementing OOP concepts, user interaction, event handling, and timing for an engaging experience.", tags: ["OOP", "jQuery"], link: "https://abdallahweb.github.io/Boxing/" },
{ img: "CrudJavaScript.webp", cat: "JavaScript", name: "CRUD Management System", desc: "A web app demonstrating full CRUD functionality with JavaScript, dynamic DOM updates, and real-time data management.", tags: ["JavaScript", "jQuery"], link: "https://abdallahweb.github.io/Crud/" },
{ img: "Javascript.webp", cat: "JavaScript", name: "VR Project", desc: "A web VR project using JavaScript and WebVR/WebXR to explore 3D environments and interactive graphics.", tags: ["WordPress", "JavaScript"], link: "https://vrealtour.com/plan" },
{ img: "X-O Game.webp", cat: "JavaScript", name: "Tic Tac Toe Game", desc: "A classic Tic Tac Toe game built with JavaScript, demonstrating game logic, DOM manipulation, and event handling.", tags: ["JavaScript", "jQuery"], link: "https://abdallahweb.github.io/Game-X-O/" },
{ img: "alarm.webp", cat: "JavaScript", name: "JavaScript Alarm Clock", desc: "A simple alarm clock app allowing users to set alarms and receive notifications at scheduled times.", tags: ["JavaScript", "jQuery"], link: "https://abdallahweb.github.io/Alarm" },
{ img: "Squid.webp", cat: "JavaScript", name: "Squid Game Using JavaScript", desc: "A browser game inspired by Squid Game, showcasing DOM manipulation, event handling, and game logic.", tags: ["JavaScript", "jQuery"], link: "https://abdallahweb.github.io/Squid/" },
{ img: "PhotoFilter.webp", cat: "JavaScript", name: "Photo Filter Project", desc: "A web app enabling users to apply image filters using JavaScript, demonstrating DOM manipulation and dynamic styling.", tags: ["JavaScript", "jQuery"], link: "https://abdallahweb.github.io/Filter/" },
{ img: "hunter.webp", cat: "JavaScript", name: "Game Project", desc: "A browser game inspired by the classic Dinosaur game, using JavaScript to showcase collision detection, event handling, and game logic.", tags: ["JavaScript", "jQuery"], link: "https://abdallahweb.github.io/hunter" },
{ img: "Portfolio.webp", cat: "Design", name: "Personal Portfolio", desc: "A responsive personal portfolio website built with HTML, CSS, JavaScript, and jQuery to showcase my skills, projects, and contact information.", tags: ["Html" , "Css" ,"JavaScript", "jQuery"], link: "https://abdallahweb.github.io/portfolio" },
  ];

  const filterOrder = ["All", "WordPress", "Laravel", "PHP", "AI", "JavaScript", "API", "OOP","Design"];

  /* ---------- EXPERIENCE / TIMELINE DATA ---------- */
  /* Edit this array: add/remove entries, most recent first is recommended. */
  const experience = [
    {
      role: "Web Developer",
      company: "Marketing & VR Company",
      period: "1 Year 6 Months",
      desc: [
        "Developed 5 websites using WordPress tailored to meet diverse client requirements.",
        "Utilized expertise in HTML, CSS, JavaScript, and WordPress to deliver high-quality, efficient code across a range of projects.",
        "Designed and customized user interfaces to reflect each company’s brand identity , Integrated Augmented Reality (AR) features to create interactive elements that effectively showcase business services and objectives.",
      ],
    },
    {
      role: "Web Developer",
      company: "Software Company",
      period: "1 Year 3 Months",
      desc: [
        "Maintained MySQL databases to store and manage dynamic content for websites.",
        "Developed and implemented a fully integrated dashboard using PHP and MySQL, featuring secure user registration, authentication, and comprehensive user and role management.",
               "Enhanced and maintained an e-commerce platform by implementing new features and system updates.",
        "Built and integrated RESTful APIs to support front-end functionality and third-party services.",
               "Troubleshoot and debug application issues while improving website speed and efficiency through accurate diagnosis of functional and performance problems.",
      ],
    },
  ];

  const roles = [
    "Full Stack Web Developer",
    "Laravel Developer",
    "PHP Backend Developer",
    "JavaScript Enthusiast",
  ];

  /* ---------- RENDER SKILLS ---------- */
  const $skillsGrid = $("#skillsGrid");
  skills.forEach(function (s) {
    $skillsGrid.append(`
      <div class="skill-card">
        <div class="skill-icon">${s.tag}</div>
        <div class="skill-name">${s.name}</div>
      </div>
    `);
  });

  /* ---------- RENDER TIMELINE ---------- */
  const $timelineList = $("#timelineList");
  experience.forEach(function (e) {
    $timelineList.append(`
      <div class="timeline-item">
        <span class="timeline-dot"></span>
        <div class="timeline-content">
          <div class="timeline-top">
            <div class="timeline-role">${e.role} <span class="timeline-company">@ ${e.company}</span></div>
            <span class="timeline-period">${e.period}</span>
          </div>
          <div class="timeline-desc">
            <ul>
              ${e.desc.map((d) => `<li>${d}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `);
  });

  /* ---------- RENDER FILTER BAR ---------- */
  const $filterBar = $("#filterBar");
  filterOrder.forEach(function (cat, i) {
    const count = cat === "All" ? projects.length : projects.filter((p) => p.cat === cat).length;
    $filterBar.append(
      `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${cat}">${cat} <span>(${count})</span></button>`
    );
  });

  /* ---------- RENDER PROJECTS ---------- */
  const $projectsGrid = $("#projectsGrid");
  const $loadMoreBtn = $("#loadMoreBtn");
  const PAGE_SIZE = 9;
  let currentFilter = "All";
  let visibleCount = PAGE_SIZE;

  function cardHtml(p) {
    return `
      <div class="project-card">
        <a class="project-thumb" href="${p.link}" target="_blank" rel="noopener" aria-label="Open ${p.name} live preview">
          <span class="project-badge">${p.cat}</span>
          <img src="assets/projects/${p.img}" alt="${p.name}" loading="lazy">
          <span class="thumb-overlay">
            <span class="thumb-overlay-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17 17 7M9 7h8v8"/></svg>
            </span>
          </span>
        </a>
        <div class="project-info">
          <h4>${p.name}</h4>
          <p>${p.desc}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <a class="project-link" href="${p.link}" target="_blank" rel="noopener">
            Live Preview
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </a>
        </div>
      </div>
    `;
  }

  function renderProjects() {
    const filtered = currentFilter === "All" ? projects : projects.filter((p) => p.cat === currentFilter);
    const slice = filtered.slice(0, visibleCount);
    $projectsGrid.html(slice.map(cardHtml).join(""));
    $loadMoreBtn.toggle(visibleCount < filtered.length);
  }
  renderProjects();

  $filterBar.on("click", ".filter-btn", function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
    currentFilter = $(this).data("filter");
    visibleCount = PAGE_SIZE;
    renderProjects();
  });

  $loadMoreBtn.on("click", function () {
    visibleCount += PAGE_SIZE;
    renderProjects();
  });

  /* ---------- TYPING EFFECT ---------- */
  let roleIndex = 0, charIndex = 0, deleting = false;
  const $typed = $("#typedRole");

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      $typed.text(current.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      $typed.text(current.slice(0, charIndex - 1));
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 40 : 80);
  }
  typeLoop();

  /* ---------- MOBILE NAV ---------- */
  $("#burger").on("click", function () {
    $("#navLinks").toggleClass("open");
  });
  $(".nav-links a").on("click", function () {
    $("#navLinks").removeClass("open");
  });

  /* ---------- SCROLL SPY ---------- */
  const $sections = $("main section[id]");
  const $navA = $(".nav-links a");

  function onScroll() {
    const scrollPos = $(window).scrollTop() + 120;

    $sections.each(function () {
      const top = $(this).offset().top;
      const bottom = top + $(this).outerHeight();
      const id = $(this).attr("id");
      if (scrollPos >= top && scrollPos < bottom) {
        $navA.removeClass("active");
        $navA.filter(`[data-section="${id}"]`).addClass("active");
      }
    });

    if ($(window).scrollTop() > 500) {
      $("#backTop").addClass("show");
    } else {
      $("#backTop").removeClass("show");
    }
  }
  $(window).on("scroll", onScroll);
  onScroll();

  /* ---------- FADE-UP ON VIEW ---------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

  /* ---------- THEME TOGGLE ---------- */
  const $root = $("html");
  const savedTheme = "dark";
  $root.attr("data-theme", savedTheme);

  $("#themeToggle").on("click", function () {
    const now = $root.attr("data-theme") === "dark" ? "light" : "dark";
    $root.attr("data-theme", now);
  });

  /* ---------- CONTACT FORM (demo only) ---------- */
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    $("#formNote").text("Message received! (Demo form — connect it to a real backend or email service.)");
    this.reset();
  });

  /* ---------- YEAR ---------- */
  $("#year").text(new Date().getFullYear());
});
