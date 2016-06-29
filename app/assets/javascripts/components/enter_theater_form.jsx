var EnterTheaterForm = React.createClass({
  handleFormSubmit: function(event) {
    event.preventDefault();
    var intervalRequest = $(event.target).serialize()
    minutes = Number(intervalRequest.replace('interval=', ''))
    userIntervalInMs = (minutes * 60) * 1000
    this.props.onAction('theater', {studyInterval: userIntervalInMs})
  },

  render: function() {
    return (
      <div className="row">
        <SubmitButton text={'start classic pomodora session (25min)'}/>
        <form onSubmit={this.handleFormSubmit} className="col s12">

          <p>or enter custom study interval</p>

          <div className="row">
            <div className="input-field col s8">
              <input name="interval" type="text" />
              <label htmlFor="interval">Interval</label>
            </div>
          </div>

          <SubmitButton text={"go"}/>
        </form>
        <ShowUserPreferences preferences={this.props.userPreferences} />
      </div>
    )
  }
})
