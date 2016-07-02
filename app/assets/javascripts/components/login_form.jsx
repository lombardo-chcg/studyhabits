var LoginForm = React.createClass ({
  getInitialState: function() {
    return {
      errors: [],
    }
  },

  handleForgotPasswordClick: function() {
    alert('that feature is coming soon')
  },

  handleFormSubmit: function(event) {
      event.preventDefault()
      formData = $(event.target).serialize()
      $.ajax({
        url: 'sessions',
        method: 'post',
        data: formData
      })
      .done(function(response) {
        if (response.errors) {
          this.setState({ errors: response.errors })
        } else {
          console.log(response)
          this.props.onAction('user-show', { userId: response.userId,
                                             userName: response.userName,
                                             userLoggedIn: true,
                                             userPreferences: response.userPreferences
                                           })
        }
      }.bind(this))
  },

  render: function() {
    return (
      <div className="row">


          <ErrorsList errors={this.state.errors} />


        <form onSubmit={this.handleFormSubmit} className="col s12">

          <div className="row">
            <div className="input-field col s12 m6">
              <input name="login" type="text" />
              <label htmlFor="email">Email or Username</label>
            </div>

            <div className="input-field col s12 m6">
              <input name="password" type="password" />
              <label htmlFor="password">Password</label>
              </div>
          </div>
          <p className='right-align forgot-password'><a onClick={this.handleForgotPasswordClick}>forgot your password?</a></p>
          <SubmitButton text="login"/>
        </form>
      </div>
    )
  }
})
