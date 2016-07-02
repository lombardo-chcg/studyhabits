var UserShow = React.createClass({
  userPreferences: function() {
    if (this.props.userPreferences.length === 0) {
      return <UpdateUserPreferences
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
        <h2 className='center-align'>welcome {this.props.userName}</h2>
          <div className="row">

            <div className="col s12 m12 l4">
              {this.userPreferences()}
            </div>
            <div className="col s12 m12 l4">
              <h4 className="center-align">your favorites</h4>
            </div>
            <div className="col s12 m12 l4">
              <h4 className="center-align">your stats</h4>
            </div>

          </div>
      </div>
    )
  }
})
