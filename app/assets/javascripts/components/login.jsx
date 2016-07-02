var Login = React.createClass({
  render: function() {
    console.log(this.props)
    return (
      <div className='login-page'>
        <h4>your credentials, please</h4>
        <LoginForm onAction={this.props.onAction} />
      </div>
    );
  }
});
