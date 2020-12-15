
$(function () {
  //eat burger button
  $(".devoured").on("click", function (event) {
    var id = $(this).data("id");

    var devouredState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function () {
        console.log("change devoured to true",);
        location.reload();
      }
    );
  });
  //create a button to create burger
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0 // aka false
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("create a new burger");
        location.reload();
      }
    );
  });

});