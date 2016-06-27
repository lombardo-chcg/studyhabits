var Theater = React.createClass({
  getInitialState: function() {
    return {
      errors: [],
      video: undefined
    }
  },

  componentDidMount: function() {
    this.getVideoId()
    this.startTimer();
  },

  getVideoId: function() {
    var request = $.ajax({
      url: '/theaters/serve',
      type: 'get'
    });
    request.done(function(response) {
      if (response.errors) {
        this.setState({ errors: response.errors })
      } else {
        this.setState({ video: response.video })
      }
    }.bind(this))
  },

  startTimer: function() {
    var handleTimerExpire = function() {
      return this.props.onAction('user-show')
    }.bind(this)
    setTimeout(handleTimerExpire, this.props.studyInterval)
  },

  videoUrl: 'https://www.youtube.com/embed/',
  autoPlay: '?autoplay=1',

  render: function() {
    if (this.state.video === undefined) {
      return <LoadingSpinner />
    } else {
      return (
        <div className="row">
          <div className="col s3">
            <div className="video-container">
              <iframe width="100"
                      height="100"
                      src={this.videoUrl+this.state.video.videoId+this.autoPlay}>
              </iframe>
            </div>
          </div>
          <p>{this.state.video.title}</p>
          <p>{this.props.studyInterval}</p>
        </div>
      )
    }
  },
})
