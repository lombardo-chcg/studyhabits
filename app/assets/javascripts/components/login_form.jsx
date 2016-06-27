var LoginForm = React.createClass ({
  getInitialState: function() {
    return {
      errors: [],
    }
  },

  render: function() {
    return (
      <div className="row">

        <div className="input-field col s8">
          <ErrorsList errors={this.state.errors} />
        </div>

        <form onSubmit={this.handleFormSubmit} className="col s12">

          <div className="row">
            <div className="input-field col s4">
              <input name="email" type="text" />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field col s4">
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
