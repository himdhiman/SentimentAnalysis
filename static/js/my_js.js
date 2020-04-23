$(document).on('submit', "#sent_form" , function(e){
    e.preventDefault();
    var text = $("#my_input").val();
    var token = $(":input[name='csrfmiddlewaretoken']").val();
    var run_data = {
        sentiment : text,
        csrfmiddlewaretoken : token,
    };
    $.ajax({
        url: "/",
        type : "POST",
        data : run_data,
        success : function(json){
            document.getElementById("pos").innerHTML = json.positive;
            document.getElementById("neg").innerHTML = json.negative;
            document.getElementById("neu").innerHTML = json.neutral;
        },
        failure : function(data){
            alert("Error Occured");
        },
    
    });
});




