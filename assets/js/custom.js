// Home banner auto scroll and image change code start here ------------------------------>

const featureButtons = document.querySelectorAll('.feature-item');
const sliderImages = document.querySelectorAll('.slider-img');
const textContents = document.querySelectorAll('.text-content');
let currentIndex = 0;
let autoSlideInterval; 

// Function to change the active slide
function changeSlide(index) {
    // Remove 'active' class from all buttons, images, and text contents
    featureButtons.forEach((btn, i) => {
        btn.classList.remove('active');
        sliderImages[i].classList.remove('active');
        textContents[i].classList.remove('active');
    });

    // Add 'active' class to the clicked button, corresponding image, and text
    featureButtons[index].classList.add('active');
    sliderImages[index].classList.add('active');
    textContents[index].classList.add('active');

    // Update current index
    currentIndex = index;
}

// Auto Slide every 7-8 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        changeSlide(currentIndex);
    }, 8000); // Change interval to 7-8 seconds
}

// Attach event listener to all buttons
featureButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Stop the auto-slide when a button is clicked
        changeSlide(index);
        startAutoSlide(); // Restart the auto-slide after manual interaction
    });
});

// Start the auto slide on page load
startAutoSlide();

// Home banner auto scroll and image change code start here ------------------------------>




// Tranforming Key Industires Section code start from here slider  ------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const featureButtonsTwo = document.querySelectorAll('.feature-item2');
    const sliderImagesTwo = document.querySelectorAll('.slider-img2');
    const textItemsTwo = document.querySelectorAll('.text-item2');
    let currentIndexTwo = 0;
    let autoSlideIntervalTwo;

    // Function to change the active slide
    function changeSlide(index) {
        // Remove 'active' class from all buttons, images, and text items
        featureButtonsTwo.forEach((btn, i) => {
            btn.classList.remove('active');
            sliderImagesTwo[i].classList.remove('active');
            textItemsTwo[i].classList.remove('active');
        });

        // Add 'active' class to the clicked button, corresponding image, and text
        featureButtonsTwo[index].classList.add('active');
        sliderImagesTwo[index].classList.add('active');
        textItemsTwo[index].classList.add('active');

        // Update current index
        currentIndexTwo = index;
    }

    // Auto Slide every 7-8 seconds
    function startAutoSlideTwo() {
        autoSlideIntervalTwo = setInterval(() => {
            currentIndexTwo = (currentIndexTwo + 1) % sliderImagesTwo.length;
            changeSlide(currentIndexTwo);
        }, 8000); // Change interval to 7-8 seconds
    }

    // Attach event listener to all buttons
    featureButtonsTwo.forEach((button, index) => {
        button.addEventListener('click', () => {
            clearInterval(autoSlideIntervalTwo); // Stop the auto-slide when a button is clicked
            changeSlide(index);
            startAutoSlideTwo(); // Restart the auto-slide after manual interaction
        });
    });

    // Start the auto slide on page load
    startAutoSlideTwo();
});



// Tranforming Key Industires Section code End from here slider -----------------------------------------




// Case study code start here ----------------------------------------------

function bringToFront(clickedCard) {
    // Get all cards
    const cards = document.querySelectorAll('.card-slider .card');

    // Remove 'active' class from all cards
    cards.forEach(card => card.classList.remove('active'));

    // Add 'active' class to the clicked card
    clickedCard.classList.add('active');

    // Adjust positions with a delay for smooth animation
    setTimeout(() => {
        animateCards(cards, clickedCard);
    }, 100);
}

function animateCards(cards, clickedCard) {
    // Convert NodeList to array
    const cardArray = Array.from(cards);

    // Get the index of the clicked card
    const clickedIndex = cardArray.indexOf(clickedCard);

    // Reorder the cards in circular motion
    const reorderedCards = [...cardArray.slice(clickedIndex), ...cardArray.slice(0, clickedIndex)];

    // Adjust card positions smoothly
    reorderedCards.forEach((card, index) => {
        if (index === 0) {
            card.style.transform = 'translateX(-150px) translateZ(0)';
            card.style.zIndex = 1;
            card.style.opacity = 0.5;
        } else if (index === 1) {
            card.style.transform = 'translateX(0) translateZ(150px)'; // Move forward without scaling
            card.style.zIndex = 2;
            card.style.opacity = 1;
        } else {
            card.style.transform = 'translateX(150px) translateZ(0)';
            card.style.zIndex = 1;
            card.style.opacity = 0.5;
        }
    });
}


// Case study code end here ----------------------------------------------------





  // parallex effect background images  start here -------------------------------------------


window.addEventListener('scroll', function(){
    var scrollPosition = window.pageYOffset;
    var bgParallax = document.getElementsByClassName('parallax-section')[0];
    var limit = bgParallax.offsetTop + bgParallax.offsetHeight;  
    if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit){
      bgParallax.style.backgroundPositionY = (50 - 10*scrollPosition/limit) + 'px';   
    }else{
      bgParallax.style.backgroundPositionY = '50%';    
    }
  });



  // parallex effect background images  End here -------------------------------------------