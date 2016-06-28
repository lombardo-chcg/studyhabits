var App = React.createClass({
  getInitialState: function() {
    return {
      view: 'setPreferencesForm',
      studyInterval: undefined,
      userLoggedIn: false,
      userId: undefined,
      userName: undefined
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
      case 'theater':
          return <Theater studyInterval={this.state.studyInterval} />
      case 'user-show':
          return <UserShow onAction={this.changeView} />
      case "logout":
          this.logout()
      case "setPreferencesForm":
        return <SetPreferencesForm onAction={this.changeView} userId={this.state.userId} />
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
        <NavBar onAction={this.changeView} userName={this.state.userName} />
        {this.showContent()}
      </div>
    )
  }
})
