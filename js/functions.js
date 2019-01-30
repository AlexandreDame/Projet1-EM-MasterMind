$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
    	items: 4,
    	nav : false,
    	margin: 20,
    	loop: true,
    	navText: [  
            '<button class="btn-carousel slide-prev"><i class="fas fa-chevron-left"></i></button>',
            '<button class="btn-carousel slide-next"><i class="fas fa-chevron-right"></i></button>'
        ],
    	responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }}
    });
        

$(".prev").on("click", function () {
        $(".slide-prev").click();
    });

    $(".next").on("click", function () {
        $(".slide-next").click();
    });
});


function navFunction() {
  var x = document.getElementById("NavbarNav");
  if (x.className === "navbar-nav") {
    x.className += " responsive";
  } else {
    x.className = "navbar-nav";
  }
}