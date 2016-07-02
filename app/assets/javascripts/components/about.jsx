var About = React.createClass({
  render: function() {
    return (
      <section className='about-section'>
        <div className="section">
          <h5 className='center-align'>about study habits</h5>
          <div className="divider"></div>
          <p>Study Habits is here to help you concentrate. It combines the concept of work interval (such as the <a href='https://en.wikipedia.org/wiki/Pomodoro_Technique' target="_blank">Pomodoro Technique</a>) along with a carefully selected and constantly expanding selection of audio.</p>
        </div>
        <div className="section">
          <h5 className='center-align'>how do i use it?</h5>
          <div className="divider"></div>
          <p>Pop open a new browser tab, grab some headphones, log on and set your study interval.</p>
        </div>
        <div className="section">
          <h5 className='center-align'>fork it</h5>
          <div className="divider"></div>
          <a href='https://github.com/lombardo-chcg/studyhabits' target="_blank">
            <img className='github-icon' src='http://lombardo-chcg.github.io/imgs/github.png' />
          </a>
      </div>
      </section>
    )
  }
})
