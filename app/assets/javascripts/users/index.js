import 'bootstrap';
import $ from 'jquery';
import './hello';
import './new_hello';

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
})
