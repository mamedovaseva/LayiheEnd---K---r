const reviewsList = document.getElementById('reviews-list');
const reviewInput = document.getElementById('review-input');
let selectedStars = 0;
document.querySelectorAll('.star-rating span').forEach(star => {
  star.addEventListener('click', () => {
    const starValue = parseInt(star.getAttribute('data-value'));
    if (selectedStars === starValue) {
      selectedStars = 0;
    } else {
      selectedStars = starValue;
    }
    highlightStars(selectedStars);
  });
});
function highlightStars(rating) {
  document.querySelectorAll('.star-rating span').forEach(star => {
    if (parseInt(star.getAttribute('data-value')) <= rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}
function addReview() {
  const reviewText = reviewInput.value.trim();
  if (reviewText === "") {
    alert("Zəhmət olmasa, rəyinizi daxil edin.");
    return;
  }
  if (selectedStars === 0) {
    alert("Zəhmət olmasa, ulduz reytinqi seçin.");
    return;
  }
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');
  reviewElement.innerHTML = `
    <p>${reviewText}</p>
    <div class="stars">${generateStars(selectedStars)}</div>
    <div class="author">Müştəri</div>
  `;
  reviewsList.appendChild(reviewElement);
  reviewInput.value = ''; 
  selectedStars = 0; 
  highlightStars(0); 
  setTimeout(() => {
    reviewElement.classList.add('show');
  }, 100);
}
function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += i < rating ? '⭐' : '☆';
  }
  return stars;
}
function generateRandomReviews() {
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
  sampleReviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
      <p>${review.text}</p>
      <div class="stars">${generateStars(review.stars)}</div>
      <div class="author">Müştəri</div>
    `;
    reviewsList.appendChild(reviewElement);
    setTimeout(() => {
      reviewElement.classList.add('show');
    }, 100);
  });
}
function sortReviews() {
  const sortType = document.getElementById('sort-reviews').value;
  const reviews = Array.from(document.querySelectorAll('.review'));

  reviews.sort((a, b) => {
    const starsA = a.querySelector('.stars').textContent.split('⭐').length - 1;
    const starsB = b.querySelector('.stars').textContent.split('⭐').length - 1;

    return sortType === "highest" ? starsB - starsA : starsA - starsB;
  });
  reviews.forEach(review => reviewsList.appendChild(review));
}
window.onload = generateRandomReviews;
