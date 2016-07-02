var UserShow = React.createClass({
  userPreferences: function() {
    if (this.props.userPreferences.length === 0) {
      return (
        <div>
          <h5 className='center-align'>audio preferences</h5>
          <p className='center-align'><a onClick={this.handleClick.bind(null, "updateUserPreferences")}>update</a></p>
          <ul className="collection" id='preference-list'>
            <li className="collection-item teal lighten-2">none selected</li>
          </ul>
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

  showButton: function() {
      if (this.props.userPreferences.length === 0) {
        return (
          <div className='start-study-button'>
            <p>welcome to study habits.  please set your audio preferences to proceed</p>
            <a onClick={this.handleClick.bind(null, "updateUserPreferences")}>
              <button className="btn red accent-1 waves-effect waves-light">
                set preferences
                <i className="material-icons right">school</i>
              </button>
            </a>
          </div>
        )
      } else {
          return (
            <div className='start-study-button'>
              <a onClick={this.handleClick.bind(null, "enterTheaterForm")}>
                <button className="btn red accent-1 waves-effect waves-light">
                  start a study session
                  <i className="material-icons right">school</i>
                </button>
              </a>
            </div>
          )
      }
  },

  render: function() {
    return (
      <div>
        <div className='welcome-user'>
          <h2 className='center-align'>welcome {this.props.userName}</h2>
        </div>

        {this.showButton()}

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
