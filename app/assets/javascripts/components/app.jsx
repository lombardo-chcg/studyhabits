var App = React.createClass({
  getInitialState: function() {
    return {
      view: 'splash',
      studyInterval: undefined,
      userLoggedIn: false,
      userId: undefined,
      userName: undefined,
      userPreferences: []
    }
  },

  changeView: function(newView, options = {}) {
    this.setState(options);
    this.setState({view: newView});
  },

  showContent: function() {
    switch (this.state.view) {
      case 'splash':
        if (this.state.userLoggedIn) {
          return <UserShow
            onAction={this.changeView}
            userName={this.state.userName}
            userPreferences={this.state.userPreferences} />
        } else {
          return <SplashPage onAction={this.changeView} />
        }
      case 'login':
        return <Login onAction={this.changeView} />
      case 'register':
        return <Register onAction={this.changeView} />
      case 'post-registration':
        return <PostRegistration onAction={this.changeView} />
      case 'enterTheaterForm':
        return <EnterTheaterForm
          onAction={this.changeView}
          userPreferences={this.state.userPreferences} />
      case 'theater':
        return <Theater
          onAction={this.changeView}
          studyInterval={this.state.studyInterval} />
      case 'user-show':
        return <UserShow
          onAction={this.changeView}
          userName={this.state.userName}
          userPreferences={this.state.userPreferences} />
      case "setPreferencesForm":
        return <SetPreferencesForm
          onAction={this.changeView}
          userId={this.state.userId}
          userPreferences={this.state.userPreferences} />
        case "updateUserPreferences":
        return <UpdateUserPreferences onAction={this.changeView} />
      case "logout":
        this.logout()
    }
  },

  logout: function() {
    this.logoutServer();
    window.location.href = "http://studyhabits.herokuapp.com/";
  },

  logoutServer: function() {
    $.ajax({
      url: '/sessions/destroy',
      type: 'get'
    }).done(function(response) {console.log(response)})
  },

  render: function() {
    return (
      <div>
        <NavBar
          onAction={this.changeView}
          userName={this.state.userName}
          userLoggedIn={this.state.userLoggedIn}
        />
        <div className="container">
          {this.showContent()}
        </div>
      </div>
    )
  }
})
