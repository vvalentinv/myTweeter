/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const URL = 'http://localhost:8080/tweets';

const createTweetElement = (tweet) => {

  const $tweet = $(`<article class="tweet">
  <header>
    <div>
    <div>
    <img src="${tweet.user.avatars}"><span>${tweet.user.name}</span>
    </div>
    <div>${tweet.user.handle}</div></div>
  </header>
  <p>${tweet.content.text}</p>
  <footer>
    <div class="arrange-to-top">
    <span class="timeago">${timeago.format(tweet.created_at)}</span>
      <div><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div>
    </div>
    </footer>
</article>`);
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
  $('#tweet-text').focus();
  getTweets('GET', URL);//load tweets onpage load;

  // event listener for for form submit
  $('.new-tweet form').on('submit', function(event) {
    // prevent the default behavior of the form submission
    event.preventDefault();

    const tweetSize = $('#tweet-text').val();
    //prevent the post of an invalid tweet
    if (tweetSize.length < 1 || tweetSize.length > 140) {
      $('#tweet-text').val('');
      return alert("the tweet must contain at least one character and no more than 140");

    }

    // const tweetSize = $('#tweet-text').val();

    const data = $(this).serialize();

    $.post(URL, data, () => {
      getTweets('GET', URL);//retrieve twets after post of new tweet completed
    });
  });

});
