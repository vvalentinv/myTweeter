$(document).ready(function() {
  // --- our code goes here ---
  const tweetSize = 140;
  let count = $("output.counter");

  $("#tweet-text").on('keyup', (event) => {
    const currCounter = tweetSize - event.target.value.length;
    if (currCounter < 0) {
      count.attr('style', 'color: red;');
    }
    count.text(currCounter);
  });

});
