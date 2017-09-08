function loadTodos(){
  $.get("/todos")
    .then(function(data){
      $('ul').empty();
      data.forEach(function(item){
        $("ul").append(`
          <li class="list-group-item">
            ${item.task}
          </li>
        `)		
      });
    });
}


$("#form").on("click", ".btn-primary", function(){
	$.post("/todos", { task: $('#taskName').val() })
    .then(function(){
      loadTodos();
	  });
});

loadTodos();
