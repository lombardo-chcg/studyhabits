var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1> hi </h1>
        <Link to='/'>splash</Link>
        <Link to='/login'>login</Link>
        <RouteHandler {...this.props}/>
      </div>
    )
  }
})
