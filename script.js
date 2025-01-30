let slideIndex = 0;
        const slides = document.querySelectorAll(".slide");
        function showSlides() {
            for (let slide of slides) {
                slide.style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) slideIndex = 1;
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 5000);
        }
        
        document.getElementById("start").addEventListener("click", function() {
            document.querySelector(".slideshow-container").style.display = "block";
            this.style.display = "none";
            showSlides();
            
            const audio = document.getElementById("bg-music");
            audio.play().catch(error => console.log("Autoplay blocked:", error));
            
            setTimeout(() => {
                document.querySelector(".slideshow-container").style.display = "none";
                document.querySelector(".container").style.display = "block";
                typeWriter();
            }, 50000);
        });
        const text = "hello hope you're fine Will You Be My Valentine? ❤️";
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                document.getElementById("valentine-text").innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        
        let noClicks = 0;
        document.getElementById("no").addEventListener("click", function() {
            if (noClicks < 2) {
                ale("Are you sure you don't want to be my Valentine? 😢");
                noClicks++;
            } else {
                alert("Oh no! 😭 But I’ll still cherish you!");
            }
        });
        
        document.getElementById("yes").addEventListener("click", function() {
            const audio = document.getElementById("bg-music");
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0;
            }, 50000);
            
            window.location.href = "https://wa.me/254743714202?text=I%20said%20YES!%20You%20are%20my%20Valentine%20%F0%9F%92%96";
        });
        //pre-message
        document.getElementById("start").addEventListener("click", function() {
            document.getElementById("pre-message").style.display = "none";
            this.style.display = "none";
        });