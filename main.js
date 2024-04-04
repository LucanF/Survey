document.addEventListener('DOMContentLoaded', function() {
    const firebaseConfig = {
        apiKey: "AIzaSyA_qe4MuK9nrQ-30ODWRKq21_vRX-3W5h8",
        authDomain: "survey-database-f25c1.firebaseapp.com",
        databaseURL: "https://survey-database-f25c1-default-rtdb.firebaseio.com",
        projectId: "survey-database-f25c1",
        storageBucket: "survey-database-f25c1.appspot.com",
        messagingSenderId: "982355123087",
        appId: "1:982355123087:web:c97dcf7384f323d61109fa",
        measurementId: "G-FPPPEGMEMN"
    };

    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    // Access the form element
    const surveyForm = document.getElementById('survey-form');

    // Check if the form element exists
    if (surveyForm) {
        // Attach event listener to the form
        surveyForm.addEventListener("submit", submitForm);
    } else {
        console.error("Form element with ID 'survey-form' not found.");
    }

    // Define submitForm function
    function submitForm(e) {
        e.preventDefault();

        var name = getElementByIdValue('name');
        var emailID = getElementByIdValue('email');
        var age = getElementByIdValue('number');
        var dropdown = getElementByIdValue('dropdown');
        var gender = getElementByIdValue('dropdown-gender');
        var interest = getElementByIdValue('Interests-dropdown');
        var message = getElementByIdValue('message');
        console.log(name, emailID, age, dropdown, gender, interest, message);

        // Save data to Firebase database
        saveMessages(name, emailID, age, dropdown, gender, interest, message);
    }

    // Save data to Firebase database
    function saveMessages(name, emailID, age, dropdown, gender, interest, message) {
        var newSurveyFormRef = database.ref('Survey-FormData').push(); // Create a new reference under 'Survey-FormData'
        newSurveyFormRef.set({
            name: name,
            emailID: emailID,
            age: age,
            dropdown: dropdown,
            gender: gender,
            interest: interest,
            message: message
        }).then(function() {
            console.log("Data saved successfully.");
        }).catch(function(error) {
            console.error("Error saving data: ", error);
        });
    }

    // Define getElementByIdValue function
    function getElementByIdValue(id) {
        return document.getElementById(id).value;
    }
});
