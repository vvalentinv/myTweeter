/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const printEvent = (e) => {
//   console.log(e);
// }

$("#tweet-text");
$("#tweet-text").on('change', (event) => {
  console.log("change", event.target.value.length);
});
$("#tweet-text").on('keyup', (event) => {
  // keyup, keydown, keypress, change

});
// $("#tweet-text").on('keydown', (event) => {
//   // keyup, keydown, keypress, change
//   console.log("keydown", event.target.value);
// });
// $("#tweet-text").on('keypress', (event) => {
//   // keyup, keydown, keypress, change
//   console.log("keypress", event.target.value);
// });

//.on("input", printEvent());
// $("#tweet-text").on("keydown", printEvent);
// $("#tweet-text").on("keypress", printEvent);
// $("#tweet-text").on("keyup", printEvent);
