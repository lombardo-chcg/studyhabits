var ErrorsListItem = React.createClass({
  render: function() {
    return <li key={this.props.key}>
      {this.props.error}
    </li>
  }
})
