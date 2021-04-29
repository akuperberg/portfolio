$(document).ready(function() {
    formAutorization();
});

function firstNameError() {
    let firstName = $("#inputName").val();
    if (firstName.length < 4) {
        $("#inputName").css("border", "#00a3a3 solid 3px");
        $("#mistakeFirstName").html("Please, insert your name.");
        return false;
    }
}

function secondNameError() {
    let secondName = $("#inputSurname").val();
    if (secondName.length < 2) {
        $("#inputSurname").css("border", "#00a3a3 solid 3px");
        $("#mistakeSurname").html("Please, insert your last name.");
        return false;
    }
}

function emailError() {
    let email = $("#inputEmail1").val();
    let regexx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    let trueEmail = regexx.test(email);
    if (!trueEmail) {
        $("#inputEmail1").css("border", "#00a3a3 solid 3px");
        $("#mistakeEmail").html("Please, insert your email.");
        return false;
    }
}

function messageError() {
    let message = $("#message").val();
    if (message.length > 500) {
        $("#mistakeMessage").html(
            "Your message should include 500 characters maximum"
        );
        $("#message").css("border", "#00a3a3 solid 3px");
        return false;
    } else if (message.length < 5) {
        $("#message").css("border", "#00a3a3 solid 3px");
        $("#mistakeMessage").html("Please, write your message here.");
    }
}

function formAutorization() {
    $("#forma").submit(firstNameError);
    $("#forma").submit(secondNameError);
    $("#forma").submit(emailError);
    $("#forma").submit(messageError);
}