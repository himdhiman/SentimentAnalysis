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
            document.getElementById("pos").innerHTML = "Positive : " + json.positive;
            document.getElementById("neg").innerHTML = "Negative : " + json.negative;
            document.getElementById("neu").innerHTML = "Neutral : " + json.neutral;
        },
        failure : function(data){
            alert("Error Occured");
        },
    
    });
});




