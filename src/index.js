import $ from 'jquery';
import 'bootstrap';

import './index.scss';

$('#click-button').on('click', () => {
  $('#important-text').append('<p>Hello World!</p>');
});

console.log('Hey You, Where You Going?');
