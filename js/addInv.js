(function($) {
    "use strict";

    var opt = $("#inputMType option:selected").val();

    if(opt == "0"){
    	$("#ifOpt1").hide();
    	$("#ifOpt2").hide();
    } else {
    	if(opt=="ifOpt1"){
	    	$("#"+opt).show();
	    	$("#ifOpt2").hide();
		} else if(opt=="ifOpt2"){
			$("#"+opt).show();
	    	$("#ifOpt1").hide();
		}
   	}

    $("#inputMType").change(function(){
    	
    	if(opt == "0"){
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
    	}
    	
    })
    

})(jQuery);