var Theater = React.createClass({
  getInitialState: function() {
    return {
      errors: [],
      video: {}
    }
  },

  componentWillMount: function() {
    console.log('comonent will mount')
    this.getVideoId()
  },

  getVideoId: function() {
    console.log('making ajax request')
    var request = $.ajax({
      url: '/theaters/serve',
      type: 'get'
    });
    request.done(function(response) {
      console.log(response.video)
      if (response.errors) {
        this.setState({ errors: response.errors })
      } else {
        this.setState({ video: response.video })
        console.log('here', response.video.videoId)
        console.log(this.state.video)
      }
    }.bind(this))
  },

  videoUrl: 'https://www.youtube.com/embed/',
  autoPlay: '?autoplay=1',

  render: function() {
    if (this.state.video === {}) {
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
        </div>
      )
    }
  },
})
