(function($) {
    "use strict";

    $("#inputMType").change(function(){

    	var opt = $("#inputMType option:selected").val();
    	
    	console.log(opt);

    	if(opt !== "0") {
    		console.log(opt);

    		$("#"+opt).slideDown("slow");
    	} else {
    		$("#ifOpt1").hide();
	    	$("#ifOpt2").hide();
    	}


/*	    if(opt == "0"){
	    	$("#ifOpt1").hide();
	    	$("#ifOpt2").hide();
	    } else {
	    	if(opt=="ifOpt1"){
		    	$("#"+opt).slideDown("slow");
		    	$("#ifOpt2").hide();
			} else if(opt=="ifOpt2"){
			    $("#"+opt).slideDown("slow");
		    	$("#ifOpt1").hide();
			}
	    }*/
	    	
	});

/*    if(opt!=="0"){
    	$("#"+opt).show();
    } else {
    	
    }    
*/


})(jQuery);