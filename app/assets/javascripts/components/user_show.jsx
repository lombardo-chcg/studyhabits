var UserShow = React.createClass({
  userPreferences: function() {
    if (this.props.userPreferences.length === 0) {
      return <SetPreferencesForm
        onAction={this.props.onAction} />
    } else {
      return <ShowUserPreferences
        onAction={this.props.onAction}
        userPreferences={this.props.userPreferences}/>
    }
  },

  render: function() {
    return (
      <div>
        welcome {this.props.userName}
        {this.userPreferences()}
      </div>
    )
  }
})
