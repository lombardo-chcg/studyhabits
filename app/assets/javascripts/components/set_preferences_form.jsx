var SetPreferencesForm = React.createClass({
  getInitialState: function() {
    return {
      errors: [],
    }
  },

  handleFormSubmit: function(event) {
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
        console.log(response)
        this.props.onAction('user-show', {userPreferences: response.userPreferences})
      }
    }.bind(this))
  },

  render: function() {
    return (
      <div>

        <div className="input-field col s8">
          <ErrorsList errors={this.state.errors} />
        </div>

        <form onSubmit={this.handleFormSubmit}>

          <div className="row">
            <div className="col s12 m12">
              <div className="card light-blue darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Skip This step</span>
                  <p>we will give you a variety of goodies</p>
                  <input type="hidden" name={"preferences[no_preferences]"} value="on" />
                    <SubmitButton text={"no preferences]"} />
                  </div>
                </div>
              </div>
            </div>

          </form>

        <h4>Or, make detailed selections:</h4>

        <form onSubmit={this.handleFormSubmit}>

          <div className="row">
            <div className="col s12 m12">
              <div className="card light-blue darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Classical Music</span>
                  <br />
                  <CheckBox isChecked={true} label={"I'm Not Picky"}           tag={"preferences[classical_notPicky]"}/>
                  <CheckBox label={"Strings & Chamber Music"} tag={"preferences[classical_quartets]"}/>
                  <CheckBox label={"Piano"}                   tag={"preferences[classical_piano]"}/>
                  <CheckBox label={"Piano + Strings together"}tag={"preferences[classical_concerto]"}/>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12">
              <div className="card light-blue darken-1">
                <div className="card-content white-text">
                  <span className="card-title">New Age & Modern Instrumental Music</span>
                  <br />
                  <CheckBox label={"I'm Not Picky"}           tag={"preferences[modern_notPicky]"}/>
                  <CheckBox label={"Dreamy Classical Piano"}  tag={"preferences[modern_dreamyClassical]"}/>
                  <CheckBox label={"New Age Piano"}           tag={"preferences[modern_newAge]"}/>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12">
              <div className="card light-blue darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Electronic Music</span>
                  <br />
                  <CheckBox label={"I'm Not Picky"}             tag={"preferences[electronic_notPicky]"}/>
                  <CheckBox label={"Active/High Energy/Groovy"} tag={"preferences[electronic_active]"}/>
                  <CheckBox label={"Dark, Atmospheric"}         tag={"preferences[electronic_dark]"}/>
                  <CheckBox label={"Uplifting"}                 tag={"preferences[electronic_uplifting]"}/>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12">
              <div className="card light-blue darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Non-musical Options</span>
                  <br />
                  <CheckBox label={"I'm Not Picky"}           tag={"preferences[sounds_notPicky]"}/>
                  <CheckBox label={"White Noise"}             tag={"preferences[sounds_whiteNoise]"}/>
                  <CheckBox label={"Rain Forest"}             tag={"preferences[sounds_rainForest]"}/>
                  <CheckBox label={"Ocean"}                   tag={"preferences[sounds_ocean]"}/>
                  <CheckBox label={"Rain & Storms"}           tag={"preferences[sounds_storm]"}/>
                  <CheckBox label={"Flowing Water / River"}   tag={"preferences[ounds_flowingWater]"}/>
                </div>
              </div>
            </div>
          </div>

          <SubmitButton text={"submit my wonderful preferences"} />
        </form>
      </div>
    )
  }
})
