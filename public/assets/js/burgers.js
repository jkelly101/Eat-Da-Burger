$("#add-burger").on("click", function (event) {
  event.preventDefault();
  var newBurger = {
    burger_name: $("#ca").val().trim(),
    devoured: 0,
  };
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
  }).then(function () {
    console.log("created new burger");
    location.reload();
  });
});

$(".devourIt").on("click", function (event) {
  var id = $(this).data("id");
  var newDevoured = {
    devoured: 1,
  };

  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevoured,
  }).then(function () {
    console.log("Yum!");
    location.reload();
  });
});
