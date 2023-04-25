
$(document).ready(function() {

    $('#submit').click(function() {

        const name = $('#name').val();
        const email = $('#email').val();
        const phoneNumber = $('#phone').val();
        const message = $('#message');
        const form = $('#form');
        const labels = $('label')

        const required = [name, email, phoneNumber];

        for(let i = 0; i < required.length; i++) {
            if (required[i] === "") {
                message.text("Please Fill Out Required Fields").addClass('warning');
                $(labels[i]).addClass('warning');
            } else {
                $(labels[i]).removeClass('warning');            
            }
        }   

        if (!$('label.warning').length) {
          form.remove();
          $("h2").text("Thanks for your feedback!");
         }
    });
 });