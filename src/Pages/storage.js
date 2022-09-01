const firebaseConfig = {
  apiKey: "AIzaSyCTxzOWsfYy9ChKMFyUzgzUeuSbWgSiuFs",
  authDomain: "admission-portal-21ea9.firebaseapp.com",
  databaseURL: "https://admission-portal-21ea9-default-rtdb.firebaseio.com",
  projectId: "admission-portal-21ea9",
  storageBucket: "admission-portal-21ea9.appspot.com",
  messagingSenderId: "444647914260",
  appId: "1:444647914260:web:e64e312c33f8dc800d2001",
  measurementId: "G-8WW4F0R7HZ",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var admissionFormDB = firebase.database().ref("admissionForm");

document.getElementById("admissionForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstName = getElementVal("firstName");
  var lastName = getElementVal("lastName");
  var date_of_birth = getElementVal("date_of_birth");
  var place_of_birth = getElementVal("place_of_birth");
  var level = getElementVal("level");
  var denomination = getElementVal("denomination");
  var firstNameGuard = getElementVal("firstNameGuard");
  var lastNameGuard = getElementVal("lastNameGuard");
  var residence = getElementVal("residence");
  var occupation = getElementVal("occupation");
  var marital_status = getElementVal("marital_status");
  var telephone = getElementVal("telephone");

  saveMessages(
    firstName,
    lastName,
    date_of_birth,
    place_of_birth,
    level,
    denomination,
    firstNameGuard,
    lastNameGuard,
    residence,
    occupation,
    marital_status,
    telephone
  );
}

const saveMessages = (
  firstName,
  lastName,
  date_of_birth,
  place_of_birth,
  level,
  denomination,
  firstNameGuard,
  lastNameGuard,
  residence,
  occupation,
  marital_status,
  telephone
) => {
  var newAdmissionForm = admissionFormDB.push();

  newAdmissionForm.set({
    firstName: firstName,
    lastName: lastName,
    date_of_birth: date_of_birth,
    place_of_birth: place_of_birth,
    level: level,
    denomination: denomination,
    firstNameGuard: firstNameGuard,
    lastNameGuard: lastNameGuard,
    residence: residence,
    occupation: occupation,
    marital_status: marital_status,
    telephone: telephone,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
