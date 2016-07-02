var UpdateUserPreferences = React.createClass({
  getInitialState: function() {
    return {
      userPreferences: [],
      dataLoaded: false
    }
  },

  componentDidMount: function() {
    $.ajax({
      method: 'get',
      url: '/users/preferences'
    })
    .done(function(response) {
      this.setState({
        dataLoaded: true,
        userPreferences: response.preferences })
    }.bind(this))
  },

  generateUpdatePreferenceForm: function() {
    console.log('generateUpdatePreferenceForm')
    var counter = 0
    var children = []
    for (var index in this.state.userPreferences) {
      children.push(
        <div key={counter} className="row">
          <div className="col s12 m12">
            <div className="card grey lighten-2">
              <div className="card-content black-text">
                <span className="card-title">{index}</span>
                <br />
                {this.giveMeListItems(this.state.userPreferences[index])}
              </div>
            </div>
          </div>
        </div>
      )
      counter ++
    }
    return children
  },

  handleFormSubmit: function(event) {
    console.log('form submit')
    event.preventDefault()
    formData = $(event.target).serialize()
    $.ajax({
      url: '/users/preferences',
      method: 'post',
      data: formData
    })
    .done(function(response) {
      if (response.errors) {
        this.setState({ errors: response.errors })
      } else {
        this.props.onAction('user-show', {userPreferences: response.userPreferences})
      }
    }.bind(this))
  },

  giveMeListItems: function(tag_collection) {
    children = []
    tag_collection.map(function(tag, index) {
      children.push(
        <CheckBox key={index} isChecked={tag.isChecked} label={tag.description} tag={tag.sku} />
      )
    })
    return children
  },

  render: function() {
    if (this.state.dataLoaded == false) {
      return ( <LoadingSpinner />)
    } else {
      return (
        <div>
          <div className='update-pref-heading'>
            <h3>your preferences</h3>
            <p>use this form to select your preferred study sounds</p>
            <p>select "skip this step" and we will provide you with random audio selections</p>
          </div>
          <form onSubmit={this.handleFormSubmit}>
            {this.generateUpdatePreferenceForm()}
            <SubmitButton text={"submit my preferences"} />
          </form>
        </div>
      )
    }
  }
})
