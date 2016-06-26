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

## Views & Components
* Register (create user)
* * register form
* Login (session new)
* * login form
* Set Preferences
* * preferences selection
* Profile (show user)
* Theater

## Component Library

### Forms
```
<div class="row">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s6">
        <input placeholder="Placeholder" id="first_name" type="text" class="validate">
        <label for="first_name">First Name</label>
      </div>
      <div class="input-field col s6">
        <input id="last_name" type="text" class="validate">
        <label for="last_name">Last Name</label>
      </div>
    </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="password" type="password" class="validate">
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="email" type="email" class="validate">
        <label for="email">Email</label>
      </div>
    </div>
  </form>
</div>
```

### Submit Button
```
<button class="btn waves-effect waves-light" type="submit" name="action">Submit
  <i class="material-icons right">send</i>
</button>
```

### Button
```
<a class="waves-effect waves-light btn-large">Button</a>
```

### Checkbox
```
<form action="#">
  <p>
    <input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
    <label for="filled-in-box">Filled in</label>
  </p>
</form>
```
