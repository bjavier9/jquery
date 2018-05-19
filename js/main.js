$(document).ready(function(){
	//weidth 
	/*/$("button").click(function(){
		var texto = "";
		texto += $('#caja').width() +"px"+"<br/>";
		texto += $("#caja").height()+"px";
		$("#detalle").html(texto);
	});*/
/*$("button").click(function(){
$("input[type='text']").attr("id", "codigo");
});*/
$("button").click(function(){
	$("p").attr("id", function(index){
		return "p"+(index+1);
		});
	});
});