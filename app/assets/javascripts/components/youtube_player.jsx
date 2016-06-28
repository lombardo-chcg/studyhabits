var YouTubePlayer = React.createClass({

  componentDidMount: function() {
    var component = this;
    console.log("yt did mount")

    var player;
    function onYouTubeIframeAPIReady() {
      console.log('onYouTubeIframeAPIReady')
      player = new YT.Player('player', {
        videoId: component.props.currentVideoUrl,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    onYouTubeIframeAPIReady()

    function onPlayerReady(event) {
      console.log('onPlayerReady')
      event.target.playVideo();
    }

    var done = false;
    function onPlayerStateChange(event) {
      console.log('onPlayerStateChange')
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }
  },

  render: function() {
    return (
      <div id="player">
      </div>
    )
  }
})
