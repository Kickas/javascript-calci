$(document).ready(function(){
	var number="";
	
	var newnumber="";
	var operator="";
	var totalanswer=$("#total");
	totalanswer.text("0");

    $("#numbers a").not("#clear,#clearall").click(function(e){
    	e.preventDefault();


    	
    	number+=$(this).text();
    	totalanswer.text(number);
    	

    });

    $("#operators  a").not("#equals").click(function(e){
    	e.preventDefault();
    	operator=$(this).text();
    	newnumber=number;
    	number="";
    	totalanswer.text("0");
    	});


    $("#equals").click(function(e){
    	e.preventDefault();
    	if(operator==="+")
    		number=(parseInt(newnumber,10)+parseInt(number,10)).toString(10);
    	else if(operator==="-")
    		number=(parseInt(newnumber,10)-parseInt(number,10)).toString(10);
    	else if(operator==="*")
    		number=(parseInt(newnumber,10)*parseInt(number,10)).toString(10);
    	else if(operator==="/")
    		number=(parseInt(newnumber,10)/parseInt(number,10)).toString(10);

    	totalanswer.text(number);
    	number="";
    	newnumber="";



    });


    $("#clear,#clearall").click(function(e){
    	e.preventDefault();
    	number="";
    	totalanswer.text("0");
    	if($(this).attr("id")==="clearall"){
    		newnumber="0";
    		operators="";
    	}

    	
    });







});