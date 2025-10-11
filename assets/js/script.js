// Ensure jQuery is loaded before running this.
$(document).ready(function() {
    // 1. Menu Link Click Handler (Closing the burger menu on navigation)
    $(".link-menu").on('click', function() {
        $("#active").prop('checked', false);
    });

    // 2. Anime.js Animations
    // Animation for the main header (ml15)
    anime.timeline({ loop: false })
        .add({
            targets: '.ml15 .word',
            scale: [14, 1],
            opacity: [0, 1],
            easing: "easeOutCirc",
            duration: 800,
            delay: (el, i) => 400 * i
        }).add({
            targets: '.ml15',
            opacity: 1,
            duration: 100,
            easing: "easeOutExpo",
            delay: 100
        });

    // Preparing text for letter-by-letter animation (ml6)
    var textWrapper = document.querySelector('.ml6 h1'); // Target the h1 inside ml6
    // Check if the element exists and contains text to replace
    if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        // Animation for the name (ml6)
        anime.timeline({ loop: false })
            .add({
                targets: '.ml6 .letter',
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 1500,
                delay: (el, i) => 50 * i
            }).add({
                targets: '.ml6',
                opacity: 1,
                duration: 1500,
                easing: "easeOutExpo",
                delay: 1000
            });
    }

    // 3. WOW.js Initialization (for Animate.css on scroll)
    new WOW().init();

    // 4. Custom Cursor Initialization
    // Assumes kursor is a globally available function after cursor.js loads
    if (typeof kursor === 'function') {
        new kursor({
            type: 1,
            removeDefaultCursor: true,
            color: "rgb(255,255,255)"
        });
    }

    // 5. Anti-F12/Anti-Inspect/Anti-Copy/Anti-Right-Click Logic
    
    // Prevent Context Menu (Right-Click)
    document.addEventListener("contextmenu", function (e){
        e.preventDefault();
    }, false);

    // Prevent Key Combinations (Ctrl+C, Ctrl+V, Ctrl+U, F12, Ctrl+Shift+I, Ctrl+Key)
    document.addEventListener("keydown", function (event){
        // Prevents F12
        if (event.keyCode === 123) {
            event.preventDefault();
            return;
        }

        // Prevents Ctrl+Shift+I (Developer Tools)
        if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
            event.preventDefault();
            return;
        }
        
        // Prevents Ctrl+C (67), Ctrl+V (86), Ctrl+U (85)
        if (event.ctrlKey && (event.keyCode === 67 || event.keyCode === 86 || event.keyCode === 85)) {
            event.preventDefault();
            return;
        }

        // Prevent other general Ctrl key actions (like Ctrl+P, Ctrl+S)
        if (event.ctrlKey) {
            event.preventDefault();
        }
    });
    
    // Note: The original keypress/keydown logic was redundant and sometimes conflicting. 
    // This revised code streamlines the anti-debugging/anti-copy mechanisms.
    // The "u" keypress check was also removed as it was redundant with the general Ctrl check.
    
});

 $(".link-menu").click(function(){
            $("#active").prop('checked', false);
        });

        new kursor({
            type: 1,
            removeDefaultCursor:true,
            color:"rgb(255,255,255)"
        });
// Note: myFunction() that runs on body onload should be defined somewhere, 
// likely in query.js or another external script, as it's not present here.