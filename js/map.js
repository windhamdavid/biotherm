materialKitDemo = {

     initContactUs2Map: function(){
         var lat = 38.342138;
         var long = -122.715815;
         var centerLong = long - 0.025;
         var myLatlng = new google.maps.LatLng(lat,long);
         var centerPosition = new google.maps.LatLng(lat, centerLong);
         var mapOptions = {
           zoom: 9,
			  center: {lat: 37.999138, lng: -123.415815},
    		  disableDefaultUI: true,
           
           styles:
			  [
			  	{
			  		"featureType": "water",
			  		"stylers": [
			  			{
			  				"saturation": 100
			  			},
			  			{
			  				"lightness": 0
			  			},
			  			{
			  				"hue": "#4284c5"
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "road",
			  		"elementType": "geometry.fill",
			  		"stylers": [
			  			{
			  				"hue": "#ff0000"
			  			},
			  			{
			  				"saturation": -100
			  			},
			  			{
			  				"lightness": 99
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "road",
			  		"elementType": "geometry.stroke",
			  		"stylers": [
			  			{
			  				"color": "#808080"
			  			},
			  			{
			  				"lightness": 54
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "landscape.man_made",
			  		"elementType": "geometry.fill",
			  		"stylers": [
			  			{
			  				"color": "#ece2d9"
			  			},
			  			{
			  				"lightness": 54
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "poi.park",
			  		"elementType": "geometry.fill",
			  		"stylers": [
			  			{
			  				"color": "#ccdca1"
			  			},
			  			{
			  				"lightness": 54
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "road",
			  		"elementType": "labels.text.fill",
			  		"stylers": [
			  			{
			  				"color": "#767676"
			  			},
			  			{
			  				"lightness": 54
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "road",
			  		"elementType": "labels.text.stroke",
			  		"stylers": [
			  			{
			  				"color": "#ffffff"
			  			},
			  			{
			  				"lightness": 54
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "poi",
			  		"stylers": [
			  			{
			  				"visibility": "off"
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "landscape.natural",
			  		"elementType": "geometry.fill",
			  		"stylers": [
			  			{
			  				"visibility": "on"
			  			},
			  			{
			  				"color": "#6FC177"
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "poi.park",
			  		"stylers": [
			  			{
			  				"visibility": "on"
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "poi.sports_complex",
			  		"stylers": [
			  			{
			  				"visibility": "on"
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "poi.medical",
			  		"stylers": [
			  			{
			  				"visibility": "on"
			  			}
			  		]
			  	},
			  	{
			  		"featureType": "poi.business",
			  		"stylers": [
			  			{
			  				"visibility": "off"
			  			}
			  		]
			  	}
			  ],
           scrollwheel: false,
        };
         var map = new google.maps.Map(document.getElementById("contactUs2Map"), mapOptions);
			
			
			
         var marker = new google.maps.Marker({
             position: myLatlng,
             title:"BioTherm"
         });
         marker.setMap(map);
     },

     presentationAnimations: function(){
         $(function() {

           var $window           = $(window),
               isTouch           = Modernizr.touch;

           if (isTouch) { $('.add-animation').addClass('animated'); }

           $window.on('scroll', revealAnimation);

           function revealAnimation() {
             // Showed...
             $(".add-animation:not(.animated)").each(function () {
               var $this     = $(this),
                   offsetTop = $this.offset().top,
                   scrolled = $window.scrollTop(),
                   win_height_padded = $window.height();
               if (scrolled + win_height_padded > offsetTop) {
                   $this.addClass('animated');
               }
             });
             // Hidden...
            $(".add-animation.animated").each(function (index) {
               var $this     = $(this),
                   offsetTop = $this.offset().top;
                   scrolled = $window.scrollTop(),
                   windowHeight = $window.height();

                   win_height_padded = windowHeight * 0.8;
               if (scrolled + win_height_padded < offsetTop) {
                 $(this).removeClass('animated')
               }
             });
           }

           revealAnimation();
         });

     }
};


$(document).ready(function() {
	
	materialKitDemo.initContactUs2Map();

}); 