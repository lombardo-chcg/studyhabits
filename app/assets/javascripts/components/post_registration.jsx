var PostRegistration = React.createClass({
  handleClick: function(destination) {
    this.props.onAction(destination);
  },

  render: function() {
    return (
      <div className="row">
        <br/>
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <h3 className="card-title center-align">Thank you for registering</h3>
              <p className='center-align'>please check your email and click on the link to confirm your account.</p>
              <p className='center-align'>it may take 3 or 5 minutes for the email to arrive</p>
            </div>
            <div className="card-action">
              <p className='center-align'>
                <a onClick={this.handleClick.bind(null, "login")}>return to login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
