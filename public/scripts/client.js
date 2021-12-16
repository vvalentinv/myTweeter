/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweet, article) => {
  const time = timeago.format(tweetData.created_at);
  console.log(time);
  const $tweet = $(`<article class="tweet">
  <header>
    <div>
    <div>
    <img src="${tweetData.user.avatars}"><span>${tweetData.user.name}</span>
    </div>
    <div>${tweetData.user.handle}</div></div>
  </header>
  <p>${tweetData.content.text}</p>
  <footer>
    <div class="arrange-to-top">
    <span class="timeago" datetime="${timeago.format(tweetData.created_at)}"></span>
      <div><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div>
    </div>
    </footer>
</article>`);
  return $tweet;
}

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}
jQuery(document).ready(function() {


  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  timeago.render(document.querySelectorAll('.timeago'));
});
