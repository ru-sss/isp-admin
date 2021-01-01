(function($) {
    "use strict";

    $("#add_inv").click(function(){
        if($(this).is(":checked")){
            console.log("checke");
        }
    });

    var opt = $("#inputMType option:selected").val();

    if(opt !== "0") {
    	$("#"+opt).show();
    }

    $("#inputMType").change(function(){

    	var opt = $("#inputMType option:selected").val();

    	if(opt == "ifOpt1") {
    		$("#"+opt).slideDown("slow");
    		$("#ifOpt2").hide();
    	} else if(opt == "ifOpt2") {
    		$("#"+opt).slideDown("slow");
    		$("#ifOpt1").hide();
    	} else {
    		$("#ifOpt1").hide();
	    	$("#ifOpt2").hide();
	    }	
	});


})(jQuery);