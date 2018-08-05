import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import Modal from './modal';

export default class RubricSection extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: null,
    };
  }

  handleSelectRadioButton(e) {
    this.setState({
      selectedOption: e.target.id,
    });
  }

  render() {
    return (
      <div className="rubric-container">
        <table className="col-md-12 rubric">
          <tr>
            <td className="rubric-number rubric-section">
1
              <input
                checked={this.state.selectedOption === '1'}
                className="radio-section-button"
                type="radio"
                value="1"
                onChange={this.props.handleTextAndScoreChange}
                onClick={this.handleSelectRadioButton.bind(this)}
                value={this.props.score1}
                title={this.props.section}
                id="1"
              />
            </td>
            <td className="rubric-number rubric-section">
              {' '}
2
              <input
                checked={this.state.selectedOption === '2'}
                onClick={this.handleSelectRadioButton.bind(this)}
                onChange={this.props.handleTextAndScoreChange}
                className="radio-section-button"
                type="radio"
                value="2"
                value={this.props.score2}
                title={this.props.section}
                id="2"
              />
            </td>
            <td className="rubric-number rubric-section">
              {' '}
3
              <input
                checked={this.state.selectedOption === '3'}
                onClick={this.handleSelectRadioButton.bind(this)}
                onChange={this.props.handleTextAndScoreChange}
                className="radio-section-button"
                type="radio"
                value="3"
                value={this.props.score2}
                title={this.props.section}
                id="3"
              />
            </td>
            <td className="rubric-number rubric-section">
              {' '}
4
              <input
                checked={this.state.selectedOption === '4'}
                onClick={this.handleSelectRadioButton.bind(this)}
                onChange={this.props.handleTextAndScoreChange}
                className="radio-section-button"
                type="radio"
                value="4"
                value={this.props.score2}
                title={this.props.section}
                id="4"
              />
            </td>
            <td className="rubric-number rubric-section">
              {' '}
5
              <input
                checked={this.state.selectedOption === '5'}
                onClick={this.handleSelectRadioButton.bind(this)}
                onChange={this.props.handleTextAndScoreChange}
                className="radio-section-button"
                type="radio"
                value="5"
                value={this.props.score2}
                title={this.props.section}
                id="5"
              />
            </td>
            <td className="rubric-number rubric-section">
              {' '}
6
              <input
                checked={this.state.selectedOption === '6'}
                onClick={this.handleSelectRadioButton.bind(this)}
                onChange={this.props.handleTextAndScoreChange}
                className="radio-section-button"
                type="radio"
                value="6"
                value={this.props.score2}
                title={this.props.section}
                id="6"
              />
            </td>
            <td className="rubric-number rubric-section">
              {' '}
7
              <input
                checked={this.state.selectedOption === '7'}
                onClick={this.handleSelectRadioButton.bind(this)}
                onChange={this.props.handleTextAndScoreChange}
                className="radio-section-button"
                type="radio"
                value="7"
                value={this.props.score2}
                title={this.props.section}
                id="7"
              />
            </td>
            <td className="rubric-number rubric-section">
              {' '}
8
              <input
                checked={this.state.selectedOption === '8'}
                onClick={this.handleSelectRadioButton.bind(this)}
                onChange={this.props.handleTextAndScoreChange}
                className="radio-section-button"
                type="radio"
                value="8"
                value={this.props.score2}
                title={this.props.section}
                id="8"
              />
            </td>
          </tr>

          <tr>
            <td className="rubric-section">
              {' '}
              {this.props.score1}
            </td>
            <td className="rubric-section">
              {' '}
              {this.props.score2}
              {' '}
            </td>
            <td className="rubric-section">
              {' '}
              {this.props.score3}
            </td>
            <td className="rubric-section">
              {this.props.score4}
            </td>
            <td className="rubric-section">
              {' '}
              {this.props.score1}
            </td>
            <td className="rubric-section">
              {' '}
              {this.props.score2}
              {' '}
            </td>
            <td className="rubric-section">
              {' '}
              {this.props.score3}
            </td>
            <td className="rubric-section">
              {this.props.score4}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
