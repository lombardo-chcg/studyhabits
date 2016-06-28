var Theater = React.createClass({
  getInitialState: function() {
    return {
      errors: [],
      playlist: [],
      videoCounter: 0,
      currentVideoUrl: undefined,
      currentVideoDuration: undefined,
      currentVideoTitle: undefined,
    }
  },

  videoTimeout: undefined,
  redirectTimeout: undefined,

  componentDidMount: function() {
    this.getContent();
    this.startRedirectTimer();
  },

  getContent: function() {
    var request = $.ajax({
      url: '/theaters/serve',
      type: 'get'
    });
    request.done(function(response) {
      if (response.errors) {
        this.setState({ errors: response.errors })
      } else {
        this.setState({ playlist: response.playlistData })
        $('#timer').animate({ width: '100%'}, this.props.studyInterval)
        this.playVideo()
      }
    }.bind(this));
  },

  playVideo: function() {
    if (this.state.playlist != undefined) {
      console.log('inside if for playvideo')
      counter = this.state.videoCounter;
      this.setState({
          currentVideoUrl: this.state.playlist[counter].url,
          currentVideoTitle: this.state.playlist[counter].title,
          currentVideoDuration: (this.state.playlist[counter].duration * 1050)
      });
      this.startVideoTimer();
    }
  },

  startVideoTimer: function() {
    if (this.state.playlist != undefined) {
      console.log('inside if for start vid time')
      counter = this.state.videoCounter;
      var loadNextVideo = function() {
        this.setState({videoCounter: (this.state.videoCounter + 1)})
        this.playVideo()
      }.bind(this);
      this.videoTimeout = setTimeout(loadNextVideo, this.state.currentVideoDuration);
      this.videoTimeout
    }
  },

  startRedirectTimer: function() {
    var handleTimerExpire = function() {
      return this.props.onAction('user-show')
    }.bind(this)
    this.redirectTimeout = setTimeout(this.goBack, this.props.studyInterval);
    this.redirectTimeout
  },

  skipVideo: function() {
    console.log(' hi from skippy'    )
    this.setState({
      videoCounter: (this.state.videoCounter + 1)},
      this.playVideo
    );
  },

  goBack: function() {
    this.setState({ playlist: [] }, this.clearTimersAndLeavePage)
  },

  clearTimersAndLeavePage: function() {
    clearTimeout(this.videoTimeout)
    clearTimeout(this.redirectTimeout)
    this.props.onAction('user-show')
  },

  render: function() {
    if (this.state.playlist.length === 0) {
      return <div>
        <ShapesSpinner />
        <p>fetching you some awesome content...this might take a moment.</p>
      </div>
    } else {
      return (
        <div className="row">
          <div className="col s3">
            <div className="video-container">
              <iframe width="100"
                      height="100"
                      src={this.state.currentVideoUrl}>
              </iframe>
            </div>
          </div>
          <p>{this.state.currentVideoTitle}</p>
          <p>{this.state.currentVideoDuration}</p>
          <a onClick={this.skipVideo}><SubmitButton text={'skip this video'} /></a>
          <a onClick={this.goBack}><SubmitButton text={'stop and go back'} /></a>
          <br />  <br />  <br />  <br />
            <div id='timer'></div>
        </div>
      )
    }
  },
})
