$(document).ready(function () {
    $("#sign_up").click(function () {
        alert("inside click event");
        $("#dialog").dialog({modal: true, height: 590, width: 1005 });
    });
});

function reset(){
//    $("#submit_code").empty();
    location.reload();
//    $("#ta_parent").text('');
//    $("#ta_parent").focus();
//    $("#validation_response").html('');
//    $("#compile_status").html('');
//    $("#output_response").html('');
//    $("#errors").text('');
//    alertify.set({ delay: 1200 });
//    alertify.success("Cleared")

}

function submit_value(){
    if ($('#submit_code').val().length <= 0)
    {
        $("#errors").fadeIn();
        alertify.set({ delay: 1200 });
        alertify.error('Code area can not be blank!');
//        $("#errors").text('Warning: Code area can not be blank!')
        $("#submit_code").focus();
//        $("#errors").fadeOut(2500);
        return;
    }
    $("#errors").text('');
    var val = $('#submit_code').val();
    var mode_val = $("#select_id").val()
    $.ajax({
        url: '/submit',
        data: {text_code :val,
            mode : mode_val},
        type: "POST",
        success: function(response){
            $("#validation_response").html(response.output);
            $("#compile_status").html(response.status);
            $("#output_response").html(response.exec_output);
            if(response.output.length > 0)
            {
                alertify.success("Compiled Successfully!<br>See the output Below");
//                alertify.alert("Compiled Successfully!<br>See the output Below")
//                alertify.prompt("message");
            }
            else
            {
                alertify.error("Compilation Errors!!<br>See the errors Below")
            }
        }
    });
}

function type_benchmark(){
    var val = $("#type_benchmark").attr('id');
    $("#select_id").text($("#type_benchmark").text());
    $("#select_id").val(1);
    $("#mode").val(val);
}

function type_best_practices(){
    var val = $("#type_best_practices").attr('id');
    $("#select_id").text($("#type_best_practices").text());
    $("#select_id").val(2);
    $("#mode").val(val);



//    alertify.log("Notification", type, wait);
//    alertify.success("Success notification");
//    alertify.error("Error notification");
    // alert dialog
//    alertify.alert("Message");
// confirm dialog
//    alertify.confirm("Message", function (e) {
//        if (e) {
//            // user clicked "ok"
//        } else {
//            // user clicked "cancel"
//        }
//    });
// prompt dialog
//    alertify.prompt("Message", function (e, str) {
//        // str is the input text
//        if (e) {
//            // user clicked "ok"
//        } else {
//            // user clicked "cancel"
//        }
//    }, "Default Value");

}
