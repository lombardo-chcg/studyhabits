var SplashPage = React.createClass({
  getInitialState: function() {
      return {
        errors: []
      }
  },

  onAction: function() {
      this.props.onAction('register')
  },

  render: function() {
    return (
      <div>
        <h1> Study Habits</h1>
        <h3>Audio for concentration</h3>
        <div className="input-field col s8">
          <ErrorsList errors={this.state.errors} />
        </div>

        <p>please login to continue</p>
        <LoginForm onAction={this.props.onAction} />
        <CreateAccountButton onAction={this.onAction} />
      </div>
    )
  }
})
