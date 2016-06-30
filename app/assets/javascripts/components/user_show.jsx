var UserShow = React.createClass({
  userPreferences: function() {
    if (this.props.userPreferences.length === 0) {
      console.log('no pref')
      return <SetPreferencesForm onAction={this.props.onAction} />
    } else {
      console.log('has pref')
      return <ShowUserPreferences />
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
