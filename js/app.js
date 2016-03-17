
$(document).foundation();


//manage animation on scroll
$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;


    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;


      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
            $this.removeClass('revealOnScrollHide');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
          $this.removeClass('revealOnScrollHide');
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated bounceInUp flipInX lightSpeedIn')
     $this.addClass('revealOnScrollHide');
      }
    });
  }

  revealOnScroll();
});


// add class on hover
var projectEffect = 'animated pulse';
$('.projectImg').hover(
       function(){ $(this).addClass(projectEffect) },
       function(){ $(this).removeClass(projectEffect) }
)
