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
        <h5 className='center-align'>audio preferences</h5>
        <p className='center-align'><a onClick={this.handleClick.bind(null, "updateUserPreferences")}>update</a></p>
        <PreferenceList userPreferences={this.state.userPreferences}/>
      </div>
    )
  }
})
