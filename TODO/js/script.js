/* Styling list elements when clicking */

/* $('li').on('click', function() {                             
	if ($(this).css('color') === 'rgb(128, 128, 128)') {
		$(this).css({
			color: 'black',
			textDecoration: 'none'
		});
	} else {
		$(this).css({
			color: 'grey',
			textDecoration: 'line-through'
		});
	}
}); */

// It is easier to create a class and toggle it with .toggleClass()

$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

/* Click the spam to delete the TODO */

$('ul').on('click', 'span', function(e) {
	e.stopPropagation();
	$(this).parent().fadeOut(1000, function() {
		$(this).remove();
	});
});

$('input').on('keypress', function(e) {
	if (event.which === 13) {
		inputText = $('input').val();
		$('input').val('');
		$('#list').append('<li>' + '<span><i class="fas fa-trash-alt"></i></span> ' + inputText + '</li>');
	}
});

$('.fa-plus').on('click', function() {
	$('input').fadeToggle();
});
