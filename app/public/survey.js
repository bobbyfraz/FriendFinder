$('#submit').on("click", function(){
	let servername = location.origin;
	let formFilled = true;
	$('.form-control').each(function(e){
		if(!$(this).val()){
			formFilled = false
		}
	});
	if(formFilled){
		let newFriend = {
			"name": $('#name').val() ,
			"photo": $('#photo').val() ,
			"scores": [
						$('#Q1').val(),
						$('#Q2').val(),
						$('#Q3').val(),
						$('#Q4').val(),
						$('#Q5').val(),
						$('#Q6').val(),
						$('#Q7').val(),
						$('#Q8').val(),
						$('#Q9').val(),
						$('#Q10').val()
					]
		};
		$.post(servername + "/api/friends", newFriend)
		.done(function(res){
			console.log(res);
			$("#matchName").text(res.name);
			$('#matchImg').attr("src", res.photo);
			$("#resultsModal").modal('toggle');
		});
	}
	else{
		$("#matchName").text("Please fill out my survery!");
		$('#matchImg').attr("src", "http://www.mayersmemorial.com/pictures/content/122253.jpg");
		$("#resultsModal").modal('toggle');
	}
});