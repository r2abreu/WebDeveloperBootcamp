/*  Correctly include jQuery */

/* Select all divs and give them a purple backgrund */

$('div').css('backgroundColor', 'purple');

/* Select the divs with the class = highlight and give them a width of 200px */

$('div.highlight').css('width', '200px');

/* Select the div with the id #third and give it an orange border */

$('#third').css('border', '2px solid orange');

/* Select the first div and give it a pink font color */

$('div:first-of-type').css('color', 'pink'); // Also works: (div).first() or (div:first)
