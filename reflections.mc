TO DO
# user can add favings
# user stats
# better timer


Cool Things I Learned
## How to validate email accounts in Ruby
* * complex regex?  nah.  just send them an email

## Ruby `#send` method
* * got stuck trying to use a string as a method call.  send allows it.

## Ruby YouTube Gem

## setting up my own API
it would have been fairly straightforward to use the youtube embed method and
just load up playlists.  but, I found that to be a bad user experience.
some videos won't play on embed and require user input to skip.  the point of this
application is to remove distractions.  so using the fantastic Ruby YouTube gem,
I was able to take the videos stored in a playlist and create my own collection.
this way I was able to filter out videos that were not available for embedding.
Also, I coudl remove songs I didn't like or just make my own playlists.
this way each song sent to the browser is going to play.
Also, I could set up tasks to clean the database of bad videos.  this is much
preferred than dependning on YouTube or its users to keep the videos uploaded.
the app became independent


Things I got stuck on
## rendering a checkbox form group in React


Things to improve
## address bar routing
## redux with rails
