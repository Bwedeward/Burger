$(function () {
  $(".eatBurger").on("click", function (event) {
    var id = $(this).data("id");
    var devouredB = $(this).data("devoured");

    var newDevouredState = {
      devoured: devouredB,
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed to devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bn").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new food");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
