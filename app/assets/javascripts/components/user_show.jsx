var UserShow = React.createClass({
  userPreferences: function() {
    if (this.props.userPreferences.length === 0) {
      return (
        <div className="col s12 m12 l4">
          <h5 className="center-align">audio preferences</h5>
          <p>no preferences detected.  choose some preferences to begin</p>
            <a onClick={this.handleClick.bind(null, "setPreferencesForm")}>
              <button className="btn red accent-1 waves-effect waves-light">
                go
                <i className="material-icons right">school</i>
              </button>
            </a>
        </div>
      )
    } else {
      return <ShowUserPreferences
        onAction={this.props.onAction}
        userPreferences={this.props.userPreferences}/>
    }
  },

  handleClick: function(destination) {
    this.props.onAction(destination);
  },

  render: function() {
    return (
      <div>
        <div className='welcome-user'>
          <h2 className='center-align'>welcome {this.props.userName}</h2>
        </div>

        <div className='start-study-button'>
          <a onClick={this.handleClick.bind(null, "enterTheaterForm")}>
            <button className="btn red accent-1 waves-effect waves-light">
              start a study session
              <i className="material-icons right">school</i>
            </button>
          </a>
        </div>

        <div className="row">

          <div className="col s12 m12 l4">
            {this.userPreferences()}
          </div>
          <div className="col s12 m12 l4">
            <h5 className="center-align">favorites</h5>
            <p className='center-align'>feature coming soon</p>
          </div>
          <div className="col s12 m12 l4">
            <h5 className="center-align">stats</h5>
            <p className='center-align'>feature coming soon</p>
          </div>

        </div>
      </div>
    )
  }
})
