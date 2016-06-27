var LoginForm = React.createClass ({
  getInitialState: function() {
    return {
      errors: [],
    }
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
          this.props.onAction('user-show', { userId: response.userId,
                                             userName: response.userName,
                                             userLoggedIn: true
                                           })
        }
      }.bind(this))
  },

  render: function() {
    return (
      <div className="row">

        <div className="input-field col s8">
          <ErrorsList errors={this.state.errors} />
        </div>

        <form onSubmit={this.handleFormSubmit} className="col s12">

          <div className="row">
            <div className="input-field col s6">
              <input name="login" type="text" />
              <label htmlFor="email">Email or Username</label>
            </div>

            <div className="input-field col s6">
              <input name="password" type="password" />
              <label htmlFor="password">Password</label>
              </div>
          </div>

          <SubmitButton text="login"/>
        </form>
      </div>
    )
  }
})
