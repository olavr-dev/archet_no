// * Font Awesome SVG Fix - Enables styling of i element instead of svg
FontAwesomeConfig = {
  autoReplaceSvg: 'nest'
};

// * Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 58.969975, lng: 5.733107 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), { zoom: 15, center: loc });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// * Add Opacity to Navbar background on Scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

// * Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if (this.hash != '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
