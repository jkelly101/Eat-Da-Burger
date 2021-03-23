$("#add-burger").on("click", function (event) {
  event.preventDefault();
  alert("hi");
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
  // var newSleep = $(this).data("newsleep");

  var newDevoured = {
    devoured: 1,
  };

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevoured,
  }).then(function () {
    console.log("Yum!");
    // Reload the page to get the updated list
    location.reload();
  });
});
