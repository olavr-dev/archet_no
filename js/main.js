// * Font Awesome SVG Fix - Enables styling of the i element instead of having to style the svg
FontAwesomeConfig = {
  autoReplaceSvg: 'nest'
};

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

// * Form Success Message
jQuery(function($) {
  $('body').on('submit.frontSubmit', function(e) {
    $('#success').show();
  });
});
