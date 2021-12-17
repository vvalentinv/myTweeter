# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Functional Requirements
A client-side Single Page App (SPA)
Communicates with a server via AJAX

List of Tweets:

displays tweets in reverse-chronological order (that is, by creation time descending)

<strong>Behaviour</strong>
Individual Tweets
When the user hovers over a tweet, that tweet should display a box shadow.
Action Icons
When the user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon should change colour.
Character Counter
When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)

Compose Tweet
When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed

When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)

Stretch
Navigation Bar
When a user clicks the Compose button in the Navigation Bar:
if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused

##Screenshots

!["CSS Features"](https://github.com/vvalentinv/myTweeter/blob/master/docs/CssFeatures.png)
!["Error Slide On empty Tweet Submission"](https://github.com/vvalentinv/myTweeter/blob/master/docs/errorSlideOnEmptyTweet.png)
!["Error Slide On Maximum Number Of Allowed Characters Reached"](https://github.com/vvalentinv/myTweeter/blob/master/docs/errorSlideOnMaxCharacterLimitReached.png)
!["Page Layout For Screens Wider Than 1024"](https://github.com/vvalentinv/myTweeter/blob/master/docs/over1024screenWidth.png)
!["Page Layout For Screens Under 1024 Width"](https://github.com/vvalentinv/myTweeter/blob/master/docs/under1024screenWidth.png)
