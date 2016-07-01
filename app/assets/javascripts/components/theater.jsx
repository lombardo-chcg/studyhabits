var Theater = React.createClass({
  getInitialState: function() {
    return {
      errors: [],
      playlist: [],
      videoCounter: 0,
      currentVideoUrl: undefined,
      currentVideoDuration: undefined,
      currentVideoTitle: undefined,
      currentSessionTheme: undefined
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
      type: 'post',
      data: {session_length: this.props.studyInterval}
    });
    request.done(function(response) {
      if (response.errors) {
        this.setState({ errors: response.errors })
      } else {
        this.setState({
          playlist: response.playlistData,
          currentSessionTheme: response.currentSessionTheme})
        $('#timer').animate({ width: '100%'}, this.props.studyInterval)
        this.playVideo()
      }
    }.bind(this));
  },

  playVideo: function() {
    if (this.state.playlist != undefined) {
      counter = this.state.videoCounter;
      if (this.state.playlist[counter] === undefined) {
        counter = 0
        this.setState({videoCounter: 0})
      }
      this.setState({
          currentVideoUrl: this.state.playlist[counter].url,
          currentVideoTitle: this.state.playlist[counter].title,
          currentVideoDuration: (this.state.playlist[counter].duration * 1050),
      }, this.startVideoTimer());
    }
  },

  startVideoTimer: function() {
    if (this.state.playlist != undefined) {
      counter = this.state.videoCounter;
      var loadNextVideo = function() {

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
    if (this.state.videoCounter === this.state.playlist.length ) {
      console.log('this.state.videoCounter === this.state.playlist.length')
      this.setState({
        videoCounter: 0},
        this.playVideo()
      );
    } else {
      console.log('else')
      this.setState({videoCounter: (this.state.videoCounter + 1)}, this.playVideo());
    }
  },

  goBack: function() {
    this.setState({ playlist: [] }, this.clearTimersAndLeavePage)
  },

  clearTimersAndLeavePage: function() {
    clearTimeout(this.videoTimeout)
    clearTimeout(this.redirectTimeout)
    this.props.onAction('user-show')
  },

  showSkipButton: function() {
    if (this.state.playlist.length > 1) {
      return <a onClick={this.skipVideo}><SubmitButton text={'skip this video'} /></a>
    }
  },

  render: function() {
    if (this.state.playlist.length === 0) {
      return <div>
        <ShapesSpinner />
        <p>Scraping the internet to bring you the best content...this might take a moment.</p>
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
          <p>Session theme: {this.state.currentSessionTheme}</p>
          <p>{this.state.currentVideoTitle}</p>
          {this.showSkipButton()}
          <a onClick={this.goBack}><SubmitButton text={'end session'} /></a>
          <br />  <br />  <br />  <br />
            <div id='timer'></div>
        </div>
      )
    }
  },
})
