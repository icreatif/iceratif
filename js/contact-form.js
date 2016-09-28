function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function postContactToGoogle(){
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var contactNumber = $('#contact-number').val();
    var email = $('#email').val();
    var courses = $('#courses').val();
    var contactMessage = $('#contact-message').val();
    if ((firstName !== "") && (email !== "") && (validateEmail(email))) {
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSeSWRBO-YX-hakMW9d6-bR-OW1Xwx-0K8uE6NTQduZzSp-Ruw/viewform",
            data: {
                "entry.1017619092" : firstName, 
                "entry.135799593" : lastName, 
                "entry.1646272127" : courses, 
                "entry.1678078975" : email, 
                "entry.1861929041": contactNumber, 
                "entry.754171305" : contactMessage
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function (){
                    $('#first-name').val("");
                    $('#last-name').val("");
                    $('#contact-number').val("");
                    $('#email').val("");
                    $('#courses').val("");
                    $('#contact-message').val("");
                    //Success message
                },
                200: function (){
                    $('#first-name').val("");
                    $('#last-name').val("");
                    $('#contact-number').val("");
                    $('#email').val("");
                    $('#courses').val("");
                    $('#contact-message').val("");
                    //Success Message
                }
            }
        });
    }
    else {
        console.log('Error Found');
    }
}
$(document).ready(function(){
    $('#form').submit(function() {
        postToGoogle();
        return false;
    });
});