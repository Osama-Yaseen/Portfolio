
$(function () {
    
    "use strict";

    // init the validator
    $('#contact-form').validator();
    
    // when the form is submitted
    $('#contact-form').submit(function (e) {
        
            e.preventDefault();
        
                 if($('#InputEmail').val()!= '' && $('#InputSubject').val() != '' && $('#InputMessage').val() != ''){

                    Email.send({
                        Host: "smtp.gmail.com",
                        Username: $('#InputEmail').val(),
                        Password: "As1d2f3@",
                        To: 'osama.shehdeh.yaseen@gmail.com',
                        From: $('#InputEmail').val(),
                        Subject: $('#InputSubject').val(),
                        Body: $('#InputMessage').val(),
                      
                      })
                        .then(function (message) {
                          alert("Mail has been sent successfully");
                          location.reload();
                        });

                 }

                  
                   
    })
});



