function initMap() {
    // McDonald's at Times Square
    const mcdonalds = { lat: 40.758896, lng: -73.985130 };
  
    const map = new google.maps.Map(document.getElementById('map'), {
      center: mcdonalds,
      zoom: 15
    });
  
    new google.maps.Marker({
      position: mcdonalds,
      map,
      title: "McDonald's"
    });
  }
  window.initMap = initMap;
  
  //  slideshow logic
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
  }
  document.getElementById('next').addEventListener('click', () => {
    idx = (idx + 1) % slides.length;
    showSlide(idx);
  });
  document.getElementById('prev').addEventListener('click', () => {
    idx = (idx - 1 + slides.length) % slides.length;
    showSlide(idx);
  });
  showSlide(idx);  