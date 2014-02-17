function submit_value(){
//    alertify.info('I the submit value function');
    if ($('#submit_website').val().length <= 0)
    {
//        $("#errors").fadeIn();
        alertify.set({ delay: 1200 });
        alertify.error('Code area can not be blank!');
//        $("#errors").text('Warning: Code area can not be blank!')
        $("#submit_website").focus();
//        $("#errors").fadeOut(2500);
        return;
    }
//    $("#errors").text('');
    var website = $('#submit_website').val();
//    var mode_val = $("#select_id").val()
    $.ajax({
        url: '/submit',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        data: {website :website},
//            mode : mode_val},
        type: "POST",
        success: function(response){
            alertify.set({ delay: 5200 });
//            mes = "The Input is :"+$('#submit_website').val();
//            alertify.alert(mes);
            output = "Alexa Rank US:"+response.alexa_us+"\Alexa Global:"+response.alexa_global;
            alertify.alert(output);
            $('.fancyInput').find(':input')[0].focus();
//            $("#validation_response").html(response.output);
//            $("#compile_status").html(response.status);
//            $("#output_response").html(response.exec_output);
//            if(response.output.length > 0)
//            {
//                alertify.success("Compiled Successfully!<br>See the output Below");
////                alertify.alert("Compiled Successfully!<br>See the output Below")
////                alertify.prompt("message");
//            }
//            else
//            {
//                alertify.error("Compilation Errors!!<br>See the errors Below")
//            }
        }
    });
}