$(document).ready(function () {
    var regName = /^[a-zA-Z\- ]+$/;
    var regNum = /[0-9]{3}[-][0-9]{3}[-][0-9]{4}/;
    var regEmail = /^\w+?\w+@\w+\.[a-z]{3}$/;
    var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&:)(|\$]).{8,}$/;
    var check_agree = $("#agreeTerms");
    
    function validationInput(sel, regEexpression) {
        $(sel).keyup(function () {
            var regexp = regEexpression;
            if ((!(regexp.test($(sel).val()))) || $(sel).val() == '') {
                $(sel).closest(".row").addClass('borderRed');
                $(sel).closest(".row").removeClass('borderGreen');
    
            } else {
                $(sel).closest(".row").addClass('borderGreen');
            }
        });
    }
    check_agree.click(function() {
        if ($(this).is(":checked")) {
            $("#newAcoount").removeAttr("disabled");
            validationInput("#name", regName);
            validationInput("#phoneNum", regNum);
            validationInput("#email", regEmail);
            validationInput("#password", regPassword);
        } else {
            $("#newAcoount").attr("disabled", "disabled");
        }
    });
});