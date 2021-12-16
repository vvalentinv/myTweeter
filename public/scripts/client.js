/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
    <span class="timeago" datetime="${timeago.format(tweet.created_at)}"></span>
      <div><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div>
    </div>
    </footer>
</article>`);
  return $tweet;
}

const renderTweets = (tweets) => {
  for (const tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
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

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

jQuery(document).ready(function() {

  renderTweets(data);

  timeago.render(document.querySelectorAll('.timeago'));
});
