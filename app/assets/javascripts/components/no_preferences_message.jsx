var NoPreferencesMessage = React.createClass({
  handleClick: function(destination) {
      this.props.onAction(destination)
  },

  render: function() {
    return (
      <div className="row">
        <br/>
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <h3 className="card-title center-align">preferences needed</h3>
              <p className='center-align'>our records indicate you have not set any preferences yet.  please set at least one preference to proceed.</p>
            </div>
            <div className="card-action">
              <p className='center-align'>
                <a onClick={this.handleClick.bind(null, "updateUserPreferences")}>set your preferences</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
