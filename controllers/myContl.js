(function(){
	
	var ccc=angular.module ('app');
	ccc.controller('myContl',myContl);
	
	function myContl ($scope,$http) {
	
	 $scope.chabad = [

        {
        	id: 1,
        	
            name: 'הרב  דובי גינצבורג ',
            
            address:'נורדאו 30, חיפה 33124, ישראל ',

            tel: '04-8674932',

            img: 'B1-41.DSCF0585 (Small).JPG'
       },

        {
			id: 2,
			
            name: ' הרב ישי קלי',
            
            address:'הקלעים 4, בת גלים, חיפה 3501405, ישראל',

            tel: '0544251770',

            img: '21-03-2016-10-19-58-4-740x416.jpg'

        },

        {
        	id:3,
        	
            name: 'יהודה דונין',
            
            address:'חורב 15, אחוזה כרמל, חיפה 33000, ישראל ',

            tel: '04-8112770',

            img:  'הורד.jpg'
            
         },

        {

             name:' הרב שאול דוד בורשטיין(דוברי רוסית ',
            
            address:'הרצל 56, חיפה, ישראל',

            tel: '0777010356',

            img: 'הורד.jpg'

        },

        {
        	name: 'הרב שלמה חיים ליסון',
            
            address:'אילנות 2 כרמל מערבי חיפה 34324  ישראל ',

            tel: '04-8382623',

            img: 'images.jpg'
            },

        {

            name: 'הרב יהודה גינזבורג',
            
            address:'בית לחם , כרמל צרפתי, חיפה, ישראל ',

            tel: '052-2547709',

            img: 'הורד (1).jpg'

        },

        {
        	name: 'הרב אברהם רוזנבלט',
            
            address:'חניתה (מאחורי סופר יש) 64, נוה שאנן, חיפה 33000, ישראל',

            tel: '052-7427770',

            img: 'הורד 3).jpg'
},
        {

            name: 'הרב נתן לירנובוי',
            
            address:'המלך יהושפט 17, נוה דוד, חיפה 33000, ישראל ',

            tel: '077-4030026',

            img:  'הורד.jpg'
        },

        {
            name: 'הרב יוסף ליפש',
            
            address:'קרית אליעזר, חיפה 33000, ישראל',

            tel: '04-8511515',

            img: 'images (1).jpg'

        },

        {

             name: 'הרב לוי יצחק ארנשטיין',
             
            address:'   מרסיי 24, חיפה,   3584819          שער העלייה',

            tel: '054-2097709',

            img: 'בשורת_הגאולה_בחיפה.jpg'
        },

        {

          

             name: 'הרב שלמה גרוס',
             
            address:'   יד לבנים 68, נוה יוסף, חיפה 33000, ישראל',

            tel: '04-8225605',

            img: 'בשורת_הגאולה_בחיפה.jpg'       
            
          },

        {

            name: 'הרב יוסף יצחק רוזנברג',

            address:'  שדרות שיקגו קרית הטכניון חיפה 32000 ישראל',

            tel: '04-8222268',

            img: 'הורד (2).jpg' 

        },
        
      

];

$scope.display = function(id){
	console.log(id);
	$scope.details = id;
}

$scope.findOnMap = function(address){
	var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

}
	}

)();

