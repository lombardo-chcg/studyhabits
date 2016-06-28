var CheckBox = React.createClass({
    getInitialState: function() {
        return {
            isChecked: false
        };
    },

    handleCheckboxChange: function(event) {
        console.log("checkbox changed!", event);
        this.setState({isChecked: event.target.checked});
    },

    toggleIsChecked: function() {
        console.log("toggling isChecked value!");
        this.setState({isChecked: !this.state.isChecked});
    },

    handleButtonClick: function(event) {
        console.log("button was pressed!", event);
        this.toggleIsChecked();
    },

    render: function() {
        return (
          <p>
            <input type="checkbox"
              className="filled-in"
              id={this.props.tag}
              name={this.props.tag}
              onChange={this.handleCheckboxChange}
              checked={this.state.isChecked}
            />
          <label htmlFor={this.props.tag}>{this.props.label}</label>
          </p>
        );
    }
});
