$(document).ready(function() {
  const aprospectivecoder = confirm("Interested what coding language matches your personality? Click ok for yes or cancel for no.")
    if (aprospectivecoder) {
      $("#interested").show();
    } else {
         $("#notinterested").show();
    }

    $("#formOne").submit(function(event){
      event.preventDefault();
      const entertainment = parseInt($("#entertainment").val());
      const beverage = parseInt($("#beverage").val());
      const app = parseInt($("#app").val());
      const animal = parseInt($("#animal").val());
      const computer = parseInt($("#computer").val());

      if (entertainment == 1) {
        if (beverage == 1) {
          if (app == 1) {
            if (animal == 1) {
              if (computer == 1) {
                $("#result").text("Java");
              } else if (computer == 2) {
                $("#result").text("C#");  
              }
            }
          }
        }
      }
      if (entertainment == 1) {
        if (beverage == 1) {
          if (app == 1) {
            if (animal == 2) {
              if (computer == 1) {
                $("#result").text("Ruby");
              } else if (computer == 2) {
                $("#result").text("C#");  
              }
            }
          }
        }
      }

      $(".hide").show("#result");
    })

    $("#java").click(function() {
      $(".java-hidden").toggle();
      $(".java-showing").toggle();
    })

    $("#c").click(function() {
      $(".c-hidden").toggle();
      $(".c-showing").toggle();
    })

    $("#ror").click(function() {
      $(".ruby-hidden").toggle();
      $(".ruby-showing").toggle();
    })
})

