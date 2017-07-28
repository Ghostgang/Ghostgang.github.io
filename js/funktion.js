var config = {
	apiKey: "AIzaSyC_5hEPf8RPKraS84i-yI0egzJwncytstM",
	authDomain: "project1-c63bb.firebaseapp.com",
	databaseURL: "https://project1-c63bb.firebaseio.com",
	projectId: "project1-c63bb",
	storageBucket: "project1-c63bb.appspot.com",
	messagingSenderId: "652946816997"
};
firebase.initializeApp(config);

var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
	var ref = firebase.database().ref().child("kommentarer");
	return $firebaseArray(ref);
});


app.controller("kommentarControl", function($scope, kommentarer)  {
	$scope.kommentarer = kommentarer;


	$scope.kommentar = {
		text: "",
		skribent: "",
		time: ""
	};
	$scope.addComment = function() {
		var currentdate = new Date();
var datetime = currentdate.getHours() + ":" 
+ currentdate.getMinutes();
$scope.kommentar.time = datetime;
console.log($scope.kommentar);
$scope.kommentarer.$add($scope.kommentar);

// Tömmer texten i kommentarfältet
$scope.kommentar = {
	text: "",
	skribent: "",
	time: ""
};
};

});
