// Initialize Firebase
var config = {
    apiKey: "AIzaSyBlIxkFNeY0xKIdVWksvlLoUyMIweqf9xc",
    authDomain: "traintimes-21b0b.firebaseapp.com",
    databaseURL: "https://traintimes-21b0b.firebaseio.com",
    projectId: "traintimes-21b0b",
    storageBucket: "",
    messagingSenderId: "207276005813"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-train-btn").on("click", function(event){
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var trainDes = $("#destination-input").val().trim();
    var ftt = moment($("#ftt-input").val().trim(), "HH:mm").format("X");
    var frequency = $("#frequency-input").val().trim();

    var newTrain ={
      name: trainName,
      destination: trainDes,
      firstTrainTime: ftt,
      frequency: frequency
    };

    database.ref().push(newTrain);
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrainTime);
    console.log(newTrain.frequency);








      })