// ES6 or Vanilla JavaScript
function servicetypesearch() {

$('#nhsuk-footer').css("display","none");


var labels = $('#service-list-container label');  // cache this for better performance

$('input#servicetype').keypress(function() {
      $('#service-list-container').css("visibility","visible");
      $('html').css("height","100%");
      $(this).focus();
    });

$('#servicetype').keyup(function() {
  var valThis = $(this).val().toLowerCase();

  
  if (valThis == "") {
    labels.parent().hide();          // show all lis
  } else {
    labels.each(function() {
      var label = $(this);                    // cache this
      var text = label.text().toLowerCase();
      if (text.indexOf(valThis) > -1) {
      	//label.addClass('vis');
        label.parents('li').show()           // show all li parents up the ancestor tree
      } else {
       //label.removeClass('vis');
       label.parent().hide();                // hide current li as it doesn't match
      }
    });
  };
});


 
};