var EnterTheaterForm = React.createClass({
  handleFormSubmit: function(event) {
    event.preventDefault();
    var intervalRequest = $(event.target).serialize()
    minutes = Number(intervalRequest.replace('interval=', ''))
    userIntervalInMs = (minutes * 60) * 1000
    this.props.onAction('theater', {studyInterval: userIntervalInMs})
  },

  render: function() {
    if (this.props.userPreferences.length === 0) {
      return ( <NoPreferencesMessage onAction={this.props.onAction} /> )
    } else {
    return (
        <div className="row center-text enterTheaterForm">

          <div className="col s10 m5 startSession">
            <form onSubmit={this.handleFormSubmit} className="col s12">
              <h5>classic pomodoro session</h5>
              <br />
              <p className='center-align'>25 minutes</p>
              <div className="row">
                <div className="input-field col s8">
                  <input name="interval" type="hidden" value='25' />
                </div>
              </div>

              <SubmitButton text={"start"}/>
            </form>
          </div>


          <div className="col s10 m5 offset-m2 startSession">
            <form onSubmit={this.handleFormSubmit} className="col s12">
              <h5>enter a custom study interval</h5>
              <div className="row">
                <div className="input-field col s12">
                  <input name="interval" type="text" />
                  <label htmlFor="interval">enter minutes</label>
                </div>
              </div>

              <SubmitButton text={"start"}/>
            </form>
          </div>
        </div>
      )
    }
  }
})
