var NavBar = React.createClass({
  handleClick: function(destination) {
    this.props.onAction(destination);
    $('.button-collapse').sideNav('hide')
  },

  showNavBar: function() {
    if (this.props.userLoggedIn === true) {
      return(
        <div>
          <li><a onClick={this.handleClick.bind(null, "user-show")}>profile</a></li>
          <li><a onClick={this.handleClick.bind(null, "enterTheaterForm")}>new study session</a></li>
          <li><a onClick={this.handleClick.bind(null, "about")}>about</a></li>
          <li><a onClick={this.handleClick.bind(null, "logout")}>logout</a></li>
        </div>
      )
    } else {
      return (
        <div>
          <li><a onClick={this.handleClick.bind(null, "login")}>login</a></li>
          <li><a onClick={this.handleClick.bind(null, "register")}>register</a></li>
          <li><a onClick={this.handleClick.bind(null, "about")}>about</a></li>
        </div>
      )
    }
  },

  render: function() {
    return (
      <nav className='teal lighten-2'>
        <div className="nav-wrapper container">
          <a onClick={this.handleClick.bind(null, "splash")} className="brand-logo">study habits </a>
          <a data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            {this.showNavBar()}
          </ul>
          <ul className="side-nav navtext" id="mobile-demo">
            {this.showNavBar()}
          </ul>
        </div>
      </nav>
    )
  }
})
