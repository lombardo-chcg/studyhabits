var ShowUserPreferences = React.createClass({
  getInitialState: function() {
    return {
      userPreferences: []
    }
  },

  handleClick: function(destination) {
    this.props.onAction(destination);
  },

  componentDidMount: function() {
    this.setState({userPreferences: this.props.userPreferences})
  },

  render: function() {
    return (
      <div>
        <h3>Your current Preferences</h3>
        <a onClick={this.handleClick.bind(null, "updateUserPreferences")}>update</a>
        <PreferenceList userPreferences={this.state.userPreferences}/>
      </div>
    )
  }
})
