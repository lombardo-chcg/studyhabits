var App = React.createClass({
  getInitialState: function() {
    return {
      view: 'splash',
      studyInterval: undefined,
    }
  },

  changeView: function(newView, options = {}) {
    this.setState({view: newView});
    this.setState(options);
  },

  showContent: function() {
    switch (this.state.view) {
      case 'splash':
        return <SplashPage onAction={this.changeView}/>
      case 'login':
        return <Login />
      case 'register':
        return <Register onAction={this.changeView} />
      case 'post-registration':
        return <PostRegistration />
      case 'theater':
          return <Theater studyInterval={this.state.studyInterval} />
      case 'user-show':
            return <UserShow onAction={this.changeView} />
    }
  },


  render: function() {
    return (
      <div>
        <NavBar onAction={this.changeView}/>
        {this.showContent()}
      </div>
    )
  }
})
