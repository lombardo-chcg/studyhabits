# Study Habits
![Travis Build](https://travis-ci.org/lombardo-chcg/studyhabits.svg?branch=matchers "Travis Build")

[See it live on Heroku](http://studyhabits.herokuapp.com/)

This app combines the focused study idea of the Pomodoro technique with the concept of "background sounds" to increase concentration.  Users can create an account, set their preferences, and enter a time.  Users are then provided with background sounds for the requested amount of time.

## Cool things I learned during this project
### Validating email addresses in Rails
I love using Regular Expressions and was tempted to do so in the User model to validate email addresses.  But a RegEx leaves possible cracks, and also can overreach and disallow valida addresses.  Having users click on a validation email is a better experience.  During the implementation of this feature  I got to learn a bit about ActionMailer and how to automate account validation.

### Ruby #send method
At one point I had an array of strings, and I needed to use the strings as method calls on an object.  The ruby #send method allowed me to send the message to the object, in the form of a method, and see how it responded.  

### Ruby Fullscreen/yt Gem
This is a great gem that gave me easy access to the YouTube API interface for videos and playlists. A fun part of this project was selecting the content, and once I decided on YouTube this gem allowed me to turn videos and playlists into Ruby objects with many convenient method calls available.  

It would have been straightforward to embed youtube `iframe` elements and pipe in videos directly from YouTube.  But I found that to be a poor user experience.  For example, some videos can't be played when embedded.  So I used the API interface to create my own collections of videos, filtering out bad data and creating a better user experience.

## Challenges
### React + Rails
My goal for this project was to build a front-end React application.  I love the philosophy of React.  I also felt the way it handles state was perfect for creating a seamless user experience, despite all the asynchronous data calls the app makes to YouTube thru the backend API.  I decided to use the React-Rails gem, and incorporate my React components inside the Rails assets pipeline.  This is a design decision that I would not recommend for others building React apps, for several reasons:
* React is a front-end library and can stand on its own
* * I did not use Rails to render React components.  At this time I don't see a need for server side rendering of React. kind goes against the React philosophy, doesn't it?  As far as React was concerned, Rails was just an API it used for data.  There was no need for these two to exist within the same ecosystem.  In fact the Rails ecosystem held me back from using some technologies I wanted to use.
* React-Router Gem, using Redux within a Rails application
* * I started out using the React-Router gem.  I had a hard time passing state to my components and getting components to mount properly.  After a spike into using Redux or Flux within a Rails app to manage my state, I decided to shift.  I changed to an 'App' component, containing a case statement, to ct as the backbone of the application.  For my next React app, I plan on building an Express server to host the React application, bringing in all the power of the npm ecosystem.

### Rendering a checkbox form using React
Not as easy as it sounds!  Checked or Unchecked is a matter of state, and components must be aware of the state of checkboxes.  I was able to render a list but it took some careful planning and lots of time in the sand box.

## Outstanding slices
* Testing React Components
* Feature: users can add favorites
* Feature: users can access their states
* Create a scheduled task to delete unactivated accounts after a certain length of time

## User Stories
* user registers
* user activates account
* user logs in
* user can view and edit profile
* user can set preferences for their favorite genres
* user can edit their preferences
* user can "favorite" a song they like and view their past favorites
* user enters a time block and is provided with music for that length of time
* while in theater, user has access to some kind of timer that shows time remaining
