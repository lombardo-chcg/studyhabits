var ShowUserPreferences = React.createClass({
  getInitialState: function() {
    return {
      userPreferences: []
    }
  },

  render: function() {
    return (
      <div>
        <h3>Your current Preferences</h3>
        <a>update</a>
        <PreferenceList userPreferences={this.props.userPreferences}/>
      </div>
    )
  }
})
