import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/rubric_section.css';

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

  displayRubricScoreAndCriteria() {
    const scores = [];
    this.props.score.forEach((score) => {
      scores.push(
        <td className="rubric-section">
          {' '}
          {Object.values(score)}
        </td>,
      );
    });
    return scores;
  }

  displaySectionBoxesAndInputs() {
    const sectionBoxesAndInput = [];
    let index = 0;
    this.props.score.forEach((score) => {
      sectionBoxesAndInput.push(
        <td className="rubric-number">
          {index}
          <input
            checked={this.state.selectedOption === index.toString()}
            className="radio-section-button"
            type="radio"
            onChange={this.props.handleTextAndScoreChange}
            onClick={this.handleSelectRadioButton.bind(this)}
            value={Object.values(score)}
            title={this.props.section}
            id={index.toString()}
          />
        </td>,
      );
      index += 1;
    });

    return sectionBoxesAndInput;
  }

  render() {
    return (
      <div className="rubric-container">
        <table className="rubric">
          <tr>
            {this.displaySectionBoxesAndInputs()}
          </tr>
          <tr>
            {this.displayRubricScoreAndCriteria()}
          </tr>
        </table>
      </div>
    );
  }
}

RubricSection.propTypes = {
  score: PropTypes.array.isRequired,
  handleTextAndScoreChange: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
};
