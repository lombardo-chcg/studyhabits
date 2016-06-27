var NavBar = React.createClass({
  handleClick: function(destination) {
    this.props.onAction(destination);
    $('.button-collapse').sideNav('hide')
  },

  fuckOff: function() {
    console.log('fuck')
  },

  render: function() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a onClick={this.handleClick.bind(null, "splash")} className="brand-logo">Study Habits </a>
          <a data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a onClick={this.handleClick.bind(null, "login")}>login</a></li>
            <li><a onClick={this.handleClick.bind(null, "register")}>register</a></li>
            <li><a onClick={this.handleClick.bind(null, "user-show")}>profile</a></li>
          </ul>
          <ul className="side-nav navtext" id="mobile-demo">
            <li><a onClick={this.handleClick.bind(null, "login")}>login</a></li>
            <li><a onClick={this.handleClick.bind(null, "register")}>register</a></li>
            <li><a onClick={this.handleClick.bind(null, "user-show")}>profile</a></li>
          </ul>
        </div>
      </nav>
    )
  }
})
