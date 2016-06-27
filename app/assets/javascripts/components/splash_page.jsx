var SplashPage = React.createClass({
  onAction: function() {
      this.props.onAction('register')
  },

  render: function() {
    return (
      <div>
        <h1> Study Habits</h1>
        <h3>Audio for concentration</h3>
        <p>please login to continue</p>
        <LoginForm />
        <CreateAccountButton onAction={this.onAction} />
      </div>
    )
  }
})
