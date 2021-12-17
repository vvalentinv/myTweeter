/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const URL = 'http://localhost:8080/tweets';
const tweetSize = 140;

const createTweetElement = (tweet) => {

  const $tweet = $(`<article class="tweet">
  <header>
    <div>
    <div>
    <img id="avatar" src=""><span id="username"></span>
    </div>
    <div id="handle"></div></div>
  </header>
  <p id="text"></p>
  <footer>
    <div class="arrange-to-top">
    <span class="timeago"></span>
      <div><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div>
    </div>
    </footer>
</article>`);

  //build the article and ensure the loading of sanitized data
  $tweet.find("#avatar").attr({ src: tweet.user.avatars });
  $tweet.find("#username").text(tweet.user.name);
  $tweet.find("#handle").text(tweet.user.handle);
  $tweet.find("#text").text(tweet.content.text);
  $tweet.find(".timeago").text(timeago.format(tweet.created_at));

  return $tweet;
}

const renderTweets = (tweets) => {
  //clear list first
  const tweetsList = $('#tweets-container').empty();
  for (const tweet of tweets) {
    tweetsList.prepend(createTweetElement(tweet));
  }
}

const getTweets = (method, url) => {
  // issue the request with jQuery Ajax

  $.ajax({
    method,
    url,
  })
    .done(function(result) {
      // Success. Getting the result from the request

      renderTweets(result);
      $('#tweet-text').focus();
    })
    .fail(function(error) {
      // Problem with the request
      console.log(`Error with the request: ${error.message}`);
    })
    .always(function() {
      // This will always run
      console.log('request completed');
    });
};




jQuery(document).ready(function() {
  //populate the divs with their respective error messages to avoid the delay caused by the error trigger
  $("#error1").text("The tweet must contain at least one character");
  $("#error2").text("The tweet cannot contain more than 140 characters");

  //focus on text area and render tweets
  $('#tweet-text').focus();
  getTweets('GET', URL);


  // event listener for for form submit
  $('.new-tweet form').on('submit', function(event) {

    // prevent the default behavior of the form submission
    event.preventDefault();

    const tweetSize = $('#tweet-text').val();
    //prevent the post of an invalid tweet
    //return alert("the tweet must contain at least one character and no more than 140");
    if (tweetSize.length < 1) {
      $("#error1").slideDown(700);
    } else if (tweetSize.length > 140) {
      $("#error2").slideDown(700);
    } else {
      const data = $(this).serialize();

      $.post(URL, data, () => {
        //retrieve twets after post of new tweet completed and clear the textarea and its counter
        getTweets('GET', URL);
        $('#tweet-text').val('');
        $('#counter1').text('140');
      });
    }
  });
});
