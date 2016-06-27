var CreateAccountButton = React.createClass({
  handleClick: function() {
      this.props.onAction()
  },

  render: function() {
    return (
      <button onClick={this.handleClick} className="btn waves-effect waves-light" type="submit" name="action">register for an account
        <i className="material-icons right">send</i>
      </button>
    )
  }
})
