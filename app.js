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

$("#add-train-btn").on("click", function (event) {
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
  var trainDes = $("#destination-input").val().trim();
  var ftt = moment($("#ftt-input").val().trim(), "HH:mm").subtract(10, "years").format("X");
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {
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

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#ftt-input").val("");
  $("#frequency-input").val("");


});

database.ref().on("child_added", function (childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var trainDes = childSnapshot.val().destination;
  var ftt = childSnapshot.val().firstTrainTime;
  var frequency = childSnapshot.val().frequency;

  var diffTime = moment().diff(moment.unix(ftt), "minutes");
  var timeRemainder = moment().diff(moment.unix(ftt), "minutes") % frequency;
  var min = frequency - timeRemainder;
  var nextTrain = moment().add(min, "m").format("hh:mm a");

  console.log("------------------")
  console.log(trainName);
  console.log(trainDes);
  console.log(ftt);
  console.log(frequency);
  console.log(min);
  console.log(nextTrain);
  console.log(moment().format("X"));
  console.log(moment().format("hh:mm a"));

  $("#train-table > tbody").append("<tr><td>" + trainName +
    "</td><td>" + trainDes +
    "</td><td>" + frequency +
    "</td><td>" + nextTrain +
    "</td><td>" + min + "</td></tr>");





});