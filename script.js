        const letters = [
            "Nutrition", "Sleep", "Exercise", "Mindfulness", "Balance", 
            "Connection", "Discovery", "Growth", "Thrive", "Heal", 
            "Love", "Live", "<span class='health'>Health <span class='together'>Together</span></span>"
        ];
        const intervals = [820, 760, 480, 320, 220, 200, 200, 280, 360, 420, 450, 520, 600]; // milliseconds for transitions

        let currentIndex = 0;
        const letterElement = document.getElementById("letter");
        const smallLogoElement = document.getElementById("smallLogo");
        const animationContainer = document.getElementById("animationContainer");
        const mainContent = document.getElementById("mainContent");

        function changeLetter() {
            if (currentIndex < letters.length) {
                // Hide the current letter
                letterElement.classList.remove("show");

                setTimeout(() => {
                    // Update the text content with HTML for "Health Together"
                    letterElement.innerHTML = letters[currentIndex];
                    // Show the new letter
                    letterElement.classList.add("show");

                    if (letters[currentIndex].includes('Health')) {
                        // Move "Health Together" down and show the logo above
                        setTimeout(() => {
                            letterElement.classList.add('health-together');
                            letterElement.style.transform = "translateY(3cm)";
                            smallLogoElement.classList.add("show");

                            // Keep it visible for 3 seconds, then transition to main website
                            setTimeout(() => {
                                animationContainer.classList.add("fade-out");

                                // Fade in the main website content
                                setTimeout(() => {
                                    mainContent.classList.add("fade-in");
                                }, 1000); // Match the fade-out duration
                            }, 3000); // Wait 3 seconds
                        }, 1000);
                    }

                    currentIndex++;

                    if (currentIndex < letters.length) {
                        setTimeout(changeLetter, intervals[currentIndex - 1]);
                    }
                }, 600); // Wait for the fade-out animation to complete
            }
        }

        // Start the letter transition
        changeLetter();