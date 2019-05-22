        $(document).ready(function () {
                $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });
    $('#about').on('click', function () {
        // add the class selected to make it change color
        $('#home').removeClass('selected');
        $('#about').addClass('selected');
        $('#portfolio').removeClass('selected');
        $('#contact').removeClass('selected');
       
    });
    $('#home').on('click', function () {
        // add the class selected to make it change color
        $('#home').addClass('selected');
        $('#about').removeClass('selected');
        $('#portfolio').removeClass('selected');
        $('#contact').removeClass('selected');
        });
    $('#btn1').on('click', function () {
                        // add the class selected to make it change color
                        $('#about').addClass('selected');
                        $('p').addClass('slideUp');
                        $('h5').addClass('slideUp');
                        $('button').addClass('slideUp');
                        $('#home').removeClass('selected');
                       
                        var elmnt = document.getElementById("aboutSubmenu");
                         elmnt.scrollIntoView();
                    });
                    $('#btn2').on('click', function () {
                        // add the class selected to make it change color
                        $('#home').addClass('selected');
                        $('#about').removeClass('selected');
                        $('#portfolio').removeClass('selected');
                        $('#contact').removeClass('selected');
                        var elmnt = document.getElementById("homesubmenu");
                        elmnt.scrollIntoView();
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
  //anime p tag
  anime.timeline({loop: true})
  .add({
      targets: 'a',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
    // When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollbar();};


function scrollbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if (scrolled>50) {
    $('#about').addClass('selected');
    $('#home').removeClass('selected');
  }
  else if
      (scrolled<50){
          $('#about').removeClass('selected');
      $('#home').addClass('selected');
  }
}

           