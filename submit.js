$(document).ready({
  $("#sendMessage").on("click", function() {
    $.ajax({
        url: "//formspree.io/jerrodstorm.comics@gmail.com",
        method: "POST",
        data: {message: "hello!"},
        dataType: "json"
    });
  });
})
