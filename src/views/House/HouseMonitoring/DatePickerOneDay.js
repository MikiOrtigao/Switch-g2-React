import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class DatePickerOneDay extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  getDay =() => {
    this.props.getDate(this.state.selectedDay)
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        {selectedDay && <h6>Day: {selectedDay.toLocaleDateString()}</h6>}
        {!selectedDay && <h6>Choose a day</h6>}
        <DayPickerInput onDayChange={this.handleDayChange}/>
      </div>
    );
  }
}
