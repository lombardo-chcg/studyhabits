var CheckBox = React.createClass({
    getInitialState: function() {
        return {
            isChecked: false
        };
    },

    componentDidMount: function() {
      if (this.props.isChecked) {
        this.setState({isChecked: this.props.isChecked})
      }
    },

    handleCheckboxChange: function(event) {
        this.setState({isChecked: event.target.checked});
    },

    toggleIsChecked: function() {
        this.setState({isChecked: !this.state.isChecked});
    },

    render: function() {
        return (
          <div className='preferences-checkbox'>
            <input type="checkbox"
              className="filled-in"
              id={this.props.tag}
              name={'preferences[' + this.props.tag +']'}
              onChange={this.handleCheckboxChange}
              checked={this.state.isChecked}
            />
          <label className="black-text" htmlFor={this.props.tag}>{this.props.label}</label>
          </div>
        );
    }
});
