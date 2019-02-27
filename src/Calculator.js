import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    freddy: 0,
    georgia: 0,
  };

  fullPriceDays = () => {
    return this.state.georgia * 70;
  }

  handleFreddyChange = (ev) => {
    ev.persist();
    this.setState(prevState => {
      return {
        freddy: ev.target.value,
        freddyCost: this.calculateFreddyCost(ev.target.value),
      }
    });
  }

  handleGeorgiaChange = (ev) => {
    ev.persist();
    this.setState(prevState => {
      return {
        georgia: ev.target.value,
        georgiaCost: this.calculateGeorgiaCost(ev.target.value),
      }
    });
  }

  calculateFreddyCost = (days) => {
    return days * 70;
  }

  calculateGeorgiaCost = (days) => {
    return days * 70;
  }

  render = () => {

    const { freddy, georgia, freddyCost, georgiaCost } = this.state;

    return (
      <div className="calculator">
        <div className="form-row">
          <label htmlFor="fred-days">
            Days Freddy attended
          </label>
          <input type="text" size="4" name="freddy" value={freddy} onChange={this.handleFreddyChange} />
        </div>
        <div className="form-row">
          <label htmlFor="fred-days">
            Days Georgia attended
          </label>
          <input type="text" size="4" name="georgia" value={georgia} onChange={this.handleGeorgiaChange} />
        </div>

        <table>
          <tbody>
            <tr>
              <td>Freddy</td>
              <td>{freddyCost}</td>
            </tr>
            <tr>
              <td>Georgia</td>
              <td>{georgiaCost}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
