var ErrorsList = React.createClass({
  render: function() {
    return <div>{this.renderList()}</div>
  },

  renderList: function() {
    if (this.props.errors.length < 1) {
      return <div></div>
    } else {
      var children = [];
      for (var index in this.props.errors) {
        var error = this.props.errors[index]

        children.push(
          <ErrorsListItem error={error} key={index} />
        )
      }
    return children;
    }
}
})
