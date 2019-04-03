//mapa
function initMap() {
  var uluru = {
    lat: 44.807237,
    lng: 20.47209
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

function addInfoWindow(marker, message) {
  var infoWindow = new google.maps.InfoWindow({
    content: message
  });
  google.maps.event.addListener(marker, 'click', function () {
    infoWindow.open(map, marker);
  });
}



$(document).ready(function() {

// sticky navigation
  $(".about-js").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px"
    }
  );


  //mobile navgation
  $('.icon-js').click(function(){
    var nav = $('.main-nav-js');
    var icon = $('.icon-js i');

    nav.slideToggle(200);
    if(icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
    } else {
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }
  });


  // o nama
    $(".fade-in-left").waypoint(
      function(direction) {
        $('.fade-in-left').addClass('animated fadeInLeft');
      }, {
        offset: '70%'
      });


  // oblasti rada
  $(".fade-up").waypoint(
    function(direction) {
      $('.fade-up').addClass('animated fadeInUp');
    }, {
      offset: '70%'
    });

 
});


