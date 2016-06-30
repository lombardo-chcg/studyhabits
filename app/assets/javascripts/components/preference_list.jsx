var PreferenceList = React.createClass({
  renderPreferenceListItems: function() {
    children = []
    this.props.userPreferences.map(function(preference, index) {
      children.push(<li key={index} className="collection-item">{preference}</li>)
    })
    return children
  },

  render: function() {
    return (
      <ul className="collection">
        {this.renderPreferenceListItems()}
      </ul>
    )
  },
})
