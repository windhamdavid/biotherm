(function() {
  'use strict';
  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();


$("#contactForm").validator().on("submit", function (event) {
	if (event.isDefaultPrevented()) {
		formError();
		submitMSG(false, "Did you fill in the form properly?");
	} else {
		event.preventDefault();
		submitForm();
	}
});

function submitContactForm(){
	var name = $("#name").val();
	var email = $("#email").val();
	var email = $("#phone").val();
	var message = $("#message").val();

	$.ajax({
		type: "POST",
		url: "form/form.php",
		data: "name=" + name + "&email=" + email + "&phone=" + phone +"&message=" + message,
		success : function(text){
			if (text == "success"){
				formSuccess();
			} else {
				formError();
				submitMSG(false,text);
			}
		}
	});
}

function formSuccess(){
	$("#contactForm")[0].reset();
	submitMSG(true, "Message Submitted!")
}

function formError(){
	$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass();
	});
}

function submitMSG(valid, msg){
	if(valid){
		var msgClasses = "h3 text-center tada animated text-success";
	} else {
		var msgClasses = "h3 text-center text-danger";
	}
	$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}