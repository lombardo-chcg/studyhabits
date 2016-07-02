var SplashPage = React.createClass({
  getInitialState: function() {
      return {
        errors: []
      }
  },

  handleClick: function(destination) {
      this.props.onAction(destination)
  },

  render: function() {
    return (
      <div className="splash-page">
        <h2> <i className="material-icons splash-icon">headset</i> </h2>
        <h4>audio for concentration</h4>

        <LoginForm onAction={this.props.onAction} />

        <a text={"register for an account"} onClick={this.handleClick.bind(null, 'register')}> register for an account</a>
      </div>
    )
  }
})
