import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  render() {
    const { name, isVisible } = this.props;
    const { date } = this.state;

    return (
      <div className="App__clock">
        <h1>{`React clock #${name}`}</h1>
        <p style={{ visibility: `${isVisible}` }}>
          Current time:
          {' '}
          {date.toLocaleTimeString()}
        </p>
      </div>
    )
  }
}

Clock.propTypes = {
  isVisible: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
}
