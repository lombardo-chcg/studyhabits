var Register = React.createClass({
  getInitialState: function() {
    return {
      errors: [],
    }
  },

  handleFormSubmit: function(event) {
    event.preventDefault();
    formData = $(event.target).serialize();
    console.log(formData)
    var request = $.ajax({
      url: '/users',
      type: 'post',
      data: formData
    });
    request.done(function(response) {
      if (response.errors) {
        this.setState({ errors: response.errors })
      } else {
        this.props.onAction('post-registration')
      }
    }.bind(this))
  },

  render: function() {
    return (
      <div className="row">
        <div>
          <h3>Register</h3>
        </div>

        <div className="input-field col s8">
          <ErrorsList errors={this.state.errors} />
        </div>

        <form onSubmit={this.handleFormSubmit} className="col s12">

          <div className="row">
            <div className="input-field col s8">
              <input name="user[username]" type="text" />
              <label htmlFor="last_name">Name</label>
            </div>
          </div>


          <div className="row">
            <div className="input-field col s8">
              <input name="user[email]" type="text" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s8">
              <input name="user[password]" type="password" />
              <label htmlFor="password">Password</label>
              </div>
          </div>

          <div className="row">
            <div className="input-field col s8">
              <input name="user[password_confirmation]" type="password" />
              <label htmlFor="password">Confirm Password</label>
              </div>
          </div>

          <SubmitButton text="register"/>
        </form>
      </div>
    )
  }
})
