var SubmitButton = React.createClass({
  render: function() {
    return (
      <button className="btn red accent-1 waves-effect waves-light" type="submit" name="action">{this.props.text}
        <i className="material-icons right">school</i>
      </button>
    )
  }
})
