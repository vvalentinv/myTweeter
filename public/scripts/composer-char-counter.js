$(document).ready(function() {
  // --- our code goes here ---
  const tweetSize = 140;
  console.log("let's count!");
  const txtArea = $("#tweet-text");
  let count = $("output.counter");
  txtArea.on('keyup', (event) => {

    const currCounter = tweetSize - event.target.value.length;
    if (currCounter < 0) {
      count.attr('style', 'color: red;');
    }
    count.text(currCounter);

  });

});
