$(document).ready(function() {
  // --- our code goes here ---
  const tweetSize = 140;
  let count = $("output.counter");

  $("#tweet-text").on('input', (event) => {
    const currCounter = tweetSize - event.target.value.length;
    if (currCounter < 0) {
      $("#error2").slideDown(700);
      $("#error1").slideUp(700);
      count.addClass('redCounter');
    } else if (currCounter === 140) {
      $("#error1").slideDown(700);
      $("#error2").slideUp(700);

    } else {
      $("#error2").slideUp(700);
      $("#error1").slideUp(700);
      count.removeClass('redCounter');
    }
    count.text(currCounter);
  });

});
