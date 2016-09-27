
 var imdb= angular.module("imdb",[])

imdb.controller("gallery",gallery);


 function gallery($scope) {
 $scope.title=	"my imdb app";
	var title= "this is title"; 





var actors = [

        {

            name: 'Cameron Diaz',

            link: 'http://www.imdb.com/name/nm0000139/',

            img: 'Cameron Diaz.jpg'},

        {

            name: 'denzel washington',

            link: 'http://www.imdb.com/name/nm0000243/?ref_=fn_al_nm_1',

            img: 'denzel washington.jpg'

        },

        {name: 'Elden Henson',

            link: 'http://www.imdb.com/name/nm0711805/?ref_=fn_al_nm_1',

            img: 'Elden Henson.jpg'},

        {

            name: 'Johanna Braddy',

            link: 'http://www.imdb.com/name/nm1715189/?ref_=fn_al_nm_1',

            img: 'Johanna Braddy.jpg'

        },

        {name: 'Margot Robbie',

            link: 'http://www.imdb.com/name/nm3053338/?ref_=fn_al_nm_1',

            img: 'Margot Robbie.jpg'},

        {

            name: 'Michael Chiklis',

            link: 'http://www.imdb.com/name/nm0004821/?ref_=fn_al_nm_1',

            img: 'Michael Chiklis.jpg'

        },

        {name: 'Peggy Lipton',

            link: 'http://www.imdb.com/name/nm0005152/?ref_=fn_al_nm_1',

            img: 'Peggy Lipton.jpg'},

        {

            name: 'Timothy Bottoms',

            link: 'http://www.imdb.com/name/nm0000961/?ref_=fn_al_nm_1',

            img: 'Timothy Bottoms.jpg'

        },

        {

            name: 'Angelina Jolie Pitt',

            link: 'http://www.imdb.com/name/nm0001401/?ref_=nv_sr_2',

            img: 'Angelina Jolie Pitt.jpg'

        },

        {

            name: 'Will Smith',

            link: 'http://www.imdb.com/name/nm0000226/?ref_=nv_sr_1',

            img: 'Will Smith.jpg'

        },

        {

            name: 'Nicolas Cage',

            link: 'http://www.imdb.com/name/nm0000115/?ref_=nv_sr_2',

            img: 'Nicolas Cage.jpg'

        },

        {

            name: 'Brad Pitt',

            link: 'http://www.imdb.com/name/nm0000093/',

            img: 'Brad Pitt.jpg'


        }

];

$scope.sort=function(dir){
	if(dir=='up'){
	$scope.updown='name';
	}else{
	
		$scope.updown='name';
	
};
}

$scope.myActor=actors;
$scope.title="my imdb app";


}
