var UpdateUserPreferences = React.createClass({
  getInitialState: function() {
    return {
      userPreferences: []
    }
  },

  componentDidMount: function() {
    $.ajax({
      method: 'get',
      url: '/users/preferences'
    })
    .done(function(response) {
      console.log(response)
    })
  },

  render: function() {
    return (
      <div>hi</div>
    )
  }
})
