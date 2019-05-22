        $(document).ready(function () {
                $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });
    $('#btn1').on('click', function () {
                        // open or close navbar
                        $('#portfolio').addClass('selected');
                    });
    

                    $('#sidebarCollapse').on('click', function () {
                        // open or close navbar  $
                        $('#sidebarCollapse').toggleClass('sidebarcollapse1');
                        $('#sidebar').toggleClass('active');
                        $(this).toggleClass('active');
                    });
                });
               // Wrap every letter in a span
$('.ml3').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
           