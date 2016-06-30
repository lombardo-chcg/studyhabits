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
    this.setState({view: newView});
    this.setState(options);
  },

  showContent: function() {
    switch (this.state.view) {
      case 'splash':
        return <SplashPage onAction={this.changeView} />
      case 'login':
        return <Login onAction={this.changeView} />
      case 'register':
        return <Register onAction={this.changeView} />
      case 'post-registration':
        return <PostRegistration />
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
      case "logout":
        this.logout()
    }
  },

  logout: function() {
    this.logoutServer();
    window.location.href = "http://localhost:3000";
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
        {this.showContent()}
      </div>
    )
  }
})
