$(document).ready(function () {
    $("#submitbutton").mouseenter(function () {
        $(this).css({ "background": "#94bde0" })
    })
    $("#submitbutton").mouseleave(function () {
        $(this).css({ "background": "#0275d8" })
    })

    $.validator.addMethod("alpha", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
    });

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value == '' || value.trim('').length >= 4;
    }, "At least four characters");

    $.validator.addMethod("isEmail", function (value, element) {
        return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
    });

    $('body').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $("#submit-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 4,
                alpha: true,
                noSpace: true
            },
            email: {
                required:true,
                isEmail:true
            },
            message: {
                required: true,
                minlength: 10
            },
            mobile:{
                required: true,
                minlength:10,
                maxlength:10,
                number: true
            },
        },
        messages:{
            name:{
                alpha:"Please enter letters only"
            },
            email:{
                isEmail:"Please enter a valid email address"
            },
            mobile:{
                number:"Please enter a valid mobile number",
                minlength:"Please enter a valid mobile number",
                maxlength:"Please enter a valid mobile number",
            },
        }, 

        submitHandler: function (form) {
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbxTV1PmFUqev5rPq_2W-KIRSA5GlvusggjJ7M_o/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function (response) {
                    alert("Message submitted successfully")
                    window.location.reload()
                },
                error: function (err) {
                    alert("Something Error")
                }
            })
        }
    })
})
