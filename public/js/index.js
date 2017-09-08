$.get("/todo", function(data){
	// console.log("GET", data);
	data.forEach(function(item){
		$("ul").append(`
			<li class="list-group-item">
				${item.task}
			</li>
		`)		
	});
});

$("form").on("click", "btn-primary", function(){
	$.post("/todo", function(data){
		console.log("POST", data);
	});
});





