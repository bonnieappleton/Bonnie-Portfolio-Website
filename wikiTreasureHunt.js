var main = function(){
	

	
	$('.btn').click(function(){
		var currentQuestion = $('.active-question');
		var nextQuestion = $('.active-question').next();
		var correctAnswer = 'abc';
		
		//Answers
		
		if ($('.active-question').attr('id') == 'question1'){
			correctAnswer = "squirrel";
		}
		else if ($('.active-question').attr('id') == 'question2'){
			correctAnswer = "thumb";
		}
		else if ($('.active-question').attr('id') == 'question3'){
			correctAnswer = "walk";
		}
		else if ($('.active-question').attr('id') == 'question4'){
			correctAnswer = "robot";
		}
		else if ($('.active-question').attr('id') == 'question5'){
			correctAnswer = "theatre";
		}
		else if ($('.active-question').attr('id') == 'question6'){
			correctAnswer = "dionysus";
		}
		else if ($('.active-question').attr('id') == 'question7'){
			correctAnswer = "pine cone";		
		}
		else if ($('.active-question').attr('id') == 'question8'){
			correctAnswer = "fibonacci number";
		}
		else if ($('.active-question').attr('id') == 'question9'){
			correctAnswer = "the art of computer programming";
		}
		else if ($('.active-question').attr('id') == 'question10'){
			correctAnswer = "algorithms";
		}
		else if ($('.active-question').attr('id') == 'question11'){
			correctAnswer = "alan turing";
		}
		else if ($('.active-question').attr('id') == 'question12'){
			correctAnswer = "bletchley park";
		}
		
		
		
		//Result
		
		if ($('.active-question .answer-box').val() == correctAnswer){
						
			$('<p>').text("That's right, the answer is: " + correctAnswer).appendTo('.active-question .correct-answer');
			nextQuestion.removeClass('hidden');
			currentQuestion.addClass('disabled');
			currentQuestion.removeClass('active-question');
			nextQuestion.addClass('active-question');
		} 
		else if ($('.active-question .answer-box').val() == ''){
			$('.answer-box').focus();	
		}
		else {
			$('<p>').text('Nope, try again!').appendTo('.active-question .correct-answer');
		};
		
		$('.answer-box').val('');
		
	});
	
	
	
    $('.answer-box').keypress(function(e){
           if(e.which == 13){//Enter key pressed
               $('.btn').click();//Trigger search button click event
           }
    });











};

$(document).ready(main);