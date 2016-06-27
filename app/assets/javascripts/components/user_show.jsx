var UserShow = React.createClass({
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
        <p>enter study interval</p>
        <form onSubmit={this.handleFormSubmit} className="col s12">

          <div className="row">
            <div className="input-field col s8">
              <input name="interval" type="text" />
              <label htmlFor="interval">Interval</label>
            </div>
          </div>

          <SubmitButton text={"go"}/>
        </form>
      </div>
    )
  }
})
