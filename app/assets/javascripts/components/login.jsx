var Login = React.createClass({
  render: function() {
    console.log(this.props)
    return (
      <div>
        <h3>your credentials, please</h3>
        <LoginForm onAction={this.props.onAction} />
      </div>
    );
  }
});
