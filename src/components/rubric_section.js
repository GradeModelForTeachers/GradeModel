import React, { Component } from 'react';
import Sticky from 'react-stickynode';

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
    for (const score of this.props.score) {
      scores.push(<td className="rubric-section">
        {' '}
        {Object.values(score)}
      </td>);
    }
    return scores;
  }

  displaySEctionBoxesAndInputs() {
    const sectionBoxesAndInput = [];
    const iterator = this.props.score.keys();
    for (const score of this.props.score) {
      for (const key of iterator) {
        const keyAsString = key.toString();
        sectionBoxesAndInput.push(<td className="rubric-number rubric-section">
          {key}
          <input
            checked={this.state.selectedOption === keyAsString}
            className="radio-section-button"
            type="radio"
            value={keyAsString}
            onChange={this.props.handleTextAndScoreChange}
            onClick={this.handleSelectRadioButton.bind(this)}
            value={Object.values(score)}
            title={this.props.section}
            id={keyAsString}
          />
                                  </td>);
      }
    }
    return sectionBoxesAndInput;
  }

  render() {
    return (
      <div className="rubric-container">
        <table className="col-md-12 rubric">
          <tr>
            {this.displaySEctionBoxesAndInputs()}
          </tr>
          <tr>
            {this.displayRubricScoreAndCriteria()}
          </tr>
        </table>
      </div>
    );
  }
}
