function validateForm() {
    var name = document.getElementById('name').value;
    var comments = document.getElementById('comment').value;
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;

    if (name === '') {
        alert('All fields are compulsory');
        document.getElementById('name').focus();
        return false;
    } else if (comments === '') {
        alert('All fields are compulsory');
        document.getElementById('comment').focus();
        return false;
    } else if (!male && !female) {
        alert('All fields are compulsory');
        document.getElementById('male').focus();
        return false;
    } else {
        alert('Form submitted successfully!');
        // Here you can add the code to submit the form if needed
    }
}