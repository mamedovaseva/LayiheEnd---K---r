const reviewsList = document.getElementById('reviews-list');
const reviewInput = document.getElementById('review-input');

// Sample random reviews
const sampleReviews = [
  { text: "Bakı çox gözəl şəhərdir, müasir və qədim mədəniyyətin qarışığı. Şəhərdən heyran qaldım!", stars: 5 },
  { text: "Quba dağları çox təsir edici! Təbiəti və havası inanılmazdır.", stars: 4 },
  { text: "Şəki bazarını ziyarət etdim, burada yerli məhsullar və ənənəvi qənnadı şirniyyatlarını çox bəyəndim.", stars: 5 },
  { text: "Gəncədəki Xanlar bağı çox gözəldir, səfalı və sakit bir yerdir.", stars: 3 },
  { text: "Mingəçevir gölü əsl cənnətdir, çimərliklər və su idmanı üçün ideal yerdir.", stars: 4 },
  { text: "Qazax şəhərindəki Qazax Qalası çox maraqlıdır, tarixi zənginliyi çox təsir edicidir.", stars: 4 },
  { text: "Lənkəran çox yaşıl və sakit bir yerdir. Xüsusən çay bağları ilə məşhurdur.", stars: 5 },
  { text: "Tovuzda yemək çox dadlıdır, xüsusən kəllə şorbası və ləzzətli şirniyyatları unudulmazdır.", stars: 4 },
  { text: "Şuşada olan tarixi abidələr, gözəl mənzərələr və sakinlər çox dostcanlıdır.", stars: 5 },
  { text: "Naftalan müalicəvi suları ilə məşhurdur, orada istirahət etmək həm rahatladıcı, həm də sağaldıcıdır.", stars: 5 }
];

// Function to add a new review
function addReview() {
  const reviewText = reviewInput.value.trim();
  const stars = getRandomStars(); // Generate a random star rating for new review
  
  if (reviewText === "") {
    alert("Zəhmət olmasa, rəyinizi daxil edin.");
    return;
  }

  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');
  reviewElement.innerHTML = `
    <p>${reviewText}</p>
    <div class="stars">${generateStars(stars)}</div>
    <div class="author">Müştəri</div>
  `;

  reviewsList.appendChild(reviewElement);
  reviewInput.value = ''; // Clear input field

  // Animate the review appearance
  setTimeout(() => {
    reviewElement.classList.add('show');
  }, 100);
}

// Function to generate random stars (1-5)
function getRandomStars() {
  return Math.floor(Math.random() * 5) + 1;
}

// Function to generate star icons based on rating
function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '⭐';
    } else {
      stars += '☆';
    }
  }
  return stars;
}

// Function to generate random reviews
function generateRandomReviews() {
  sampleReviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
      <p>${review.text}</p>
      <div class="stars">${generateStars(review.stars)}</div>
      <div class="author">Müştəri</div>
    `;
    reviewsList.appendChild(reviewElement);
    
    // Animate the review appearance
    setTimeout(() => {
      reviewElement.classList.add('show');
    }, 100);
  });
}

// Generate random reviews on page load
window.onload = generateRandomReviews;
