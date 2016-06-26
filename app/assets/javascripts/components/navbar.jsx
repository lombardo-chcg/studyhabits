var NavBar = React.createClass({
  handleClick: function(destination) {
    this.props.onAction(destination);
    $('.button-collapse').sideNav('hide')
  },

  render: function() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Study Habits </a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a onClick={this.handleClick.bind(null, "login")}>login</a></li>
            <li><a onClick={this.handleClick.bind(null, "register")}>register</a></li>
          </ul>
          <ul className="side-nav navtext" id="mobile-demo">
            <li><a onClick={this.handleClick.bind(null, "login")}>login</a></li>
            <li><a onClick={this.handleClick.bind(null, "register")}>register</a></li>
          </ul>
        </div>
      </nav>
    )
  }
})
