var PreferenceList = React.createClass({
  renderPreferenceListItems: function() {
    if (this.props.userPreferences.length > 0) {
      children = []
      this.props.userPreferences.map(function(preference, index) {
        children.push(<li key={index} className="collection-item">{preference}</li>)
      })
      return children
    } else {
      console.log('hi')
      return <li><SubmitButton text={'set your preferences'} /></li>
    }
  },

  render: function() {
    return (
      <ul className="collection">
        {this.renderPreferenceListItems()}
      </ul>
    )
  },
})
