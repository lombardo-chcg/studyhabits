var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

this.Routes = (
  <Route handler={App}>
    <DefaultRoute handler={SplashPage} />
    <Route handler={Login} path='/login' />
    <Route handler={Register} path='/register' />
    <Route handler={PostRegistration} path='/post-registration' />
  </Route>
);
