
         function showIdentityDetails() {
    document.getElementById('personalDetails').style.display = 'none';
    document.getElementById('identityDetails').style.display = 'block';
    document.getElementById('familyDetails').style.display = 'none';
    document.getElementById('addressDetails').style.display = 'none';
}

function showPersonalDetails() {
    document.getElementById('identityDetails').style.display = 'none';
    document.getElementById('personalDetails').style.display = 'block';
    document.getElementById('familyDetails').style.display = 'none';
    document.getElementById('addressDetails').style.display = 'none';
}

function showFamilyDetails() {
    document.getElementById('identityDetails').style.display = 'none';
    document.getElementById('familyDetails').style.display = 'block';
    document.getElementById('personalDetails').style.display = 'none';
    document.getElementById('addressDetails').style.display = 'none';
}

function showAddressDetails() {
    document.getElementById('familyDetails').style.display = 'none';
    document.getElementById('addressDetails').style.display = 'block';
    document.getElementById('personalDetails').style.display = 'none';
    document.getElementById('identityDetails').style.display = 'none';
}

function submitForm() {

    alert('Form submitted successfully!');
}

     