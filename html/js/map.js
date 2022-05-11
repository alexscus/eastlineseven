var pins = [
	['EastLineSeven', 55.681767, 37.516575, 'html/pin/pin0.png','html/pin/pin0.png']
];

function setMarkers(map) {
	for (var i = 0; i < pins.length; i++) {
		var pin = pins[i];
		var marker = new google.maps.Marker({
			position: {lat: pin[1], lng: pin[2]},
			map: map,
			icon: pin[3],
			title: pin[0]
		});

		pinMessage(marker, pin[5]);
		pinHover(marker, pin[3], pin[4]);
	}
}

function pinMessage(marker, secretMessage) {
	var infowindow = new google.maps.InfoWindow({
		content: '<div class="map-popup">'+secretMessage+'</div>'
	});

	/*marker.addListener('click', function() {
		infowindow.open(marker.get('map'), marker);
	});*/
}

function pinHover(marker, img, imgHover) {
	google.maps.event.addListener(marker, 'mouseout', function() {
		marker.setIcon(img);
	});

	google.maps.event.addListener(marker, 'mouseover', function() {
		marker.setIcon(imgHover);
	});
}

function initialize() {
	var 
		mapCanvas = document.getElementById('map'),

		styleArray = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#313030"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "-33"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2b3032"
            },
            {
                "lightness": 17
            }
        ]
    }
];		

		mapOptions = {
			zoom: 15,
			scrollwheel: false,
			styles: styleArray
		},
		map = new google.maps.Map(mapCanvas, mapOptions);
	setMarkers(map);
	centerMap(map);
}

function centerMap() {
	var 
		widthWindow = $(window).width(),
		mapCenter;

	if(widthWindow < 1460 && widthWindow > 1200) {
		mapCenter = {lat: 55.681999, lng: 37.516575};
	}
	if(widthWindow < 800) {
		mapCenter = {lat: 55.681999, lng: 37.516575};
	}
	if(widthWindow < 760) {
		mapCenter = {lat: 55.681999, lng: 37.516575};
	}
	else {
		mapCenter = {lat: 55.681999, lng: 37.516575};
	}
	map.setCenter(mapCenter); 
}

google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.trigger(map, "resize", centerMap);