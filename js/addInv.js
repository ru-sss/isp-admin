(function($) {
    "use strict";

    $("#inputMType").change(function(){
    	var opt = $("#inputMType option:selected").val();

    	if(opt=="ifOpt1"){
    		$("#"+opt).slideDown("slow");
    		$("#ifOpt2").hide();
	    } else if(opt=="ifOpt2"){
	    	$("#"+opt).slideDown("slow");
    		$("#ifOpt1").hide();
	    }
    })
    

})(jQuery);