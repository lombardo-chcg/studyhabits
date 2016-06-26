var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <RouteHandler {...this.props}/>
      </div>
    )
  }
})
