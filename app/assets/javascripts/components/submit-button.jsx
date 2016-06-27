var SubmitButton = React.createClass({
  render: function() {
    return (
      <button className="btn waves-effect waves-light" type="submit" name="action">{this.props.text}
        <i className="material-icons right">send</i>
      </button>
    )
  }
})
