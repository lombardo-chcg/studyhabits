var App = React.createClass({
  getInitialState: function() {
    return {
      view: 'splash',
    }
  },

  changeView: function(newView, options = {}) {
    this.setState({view: newView});
    this.setState(options);
  },

  showContent: function() {
    switch (this.state.view) {
      case 'splash':
        return <SplashPage />
      case 'login':
        return <Login />
      case 'register':
        return <Register onAction={this.changeView}/>
      case 'post-registration':
        return <PostRegistration />
      case 'theater':
          return <Theater />
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
