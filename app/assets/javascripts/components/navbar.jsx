var NavBar = React.createClass({
  hamburger: function() {
    $(".button-collapse").sideNav()
  },
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Study Habits </a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to='/login'>login</Link></li>
            <li><Link to='/register'>register</Link></li>
          </ul>
          <ul className="side-nav navtext" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
          </ul>
        </div>
      </nav>
    )
  }
})
