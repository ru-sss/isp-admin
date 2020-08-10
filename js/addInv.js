(function($) {
    "use strict";

    var opt = $("#inputMType option:selected").val();

    $("#inputMType").change(function(){

    	if(opt !== "0") {
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