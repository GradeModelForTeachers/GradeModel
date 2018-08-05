import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Summary from './summary';
import RubricSection from './rubric_section';

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    if (this.props.section == 'thesis') {
      return (
        <RubricSection
          score1="Topic sentence partially addresses the prompt and may misinterpret some of the prompt or present superfluous claims. Topic sentence is an opinion, stated in the 1st person."
          score2="Clear and focused topic sentence generally addresses the prompt and purpose.The topic sentence states a relevant claim in the third person."
          score3="Thesis statement largely attempts to address all the parts of the prompt, but may lack clarity or specificity and/or may parrot the prompt."
          score4="5th Grade and 6th Grade: Clear, defensible thesis statement addresses all the parts of the prompt. The thesis states a claim in third person.May list assertions in the thesis statement."
          score5="Clear, defensible, comprehensive thesis statement addresses all the parts of the prompt.The thesis states a claim in third person. May list assertions in the thesis statement."
          score6="7th Grade: Clear, defensible, comprehensive, and focused thesis statement addresses all parts of the prompt. The thesis states a claim in the third person.May list assertions in the thesis statement."
          score7="8th Grade: Clear, defensible, comprehensive, focused, and analytical thesis statement completely addresses the prompt. The thesis states a claim in the third person."
          score8="Clear, defensible, comprehensive, focused, analytical, and nuanced thesis statement completely addresses the prompt. Thesis supports assertions. The thesis states a claim in the third person."
          handleRubricTextChange={this.props.handleRubricTextChange}
          handleScoreChange={this.props.handleScoreChange}
          section={this.props.section}
          handleTextAndScoreChange={this.props.handleTextAndScoreChange}
        />
      );
    }
    if (this.props.section == 'evidence') {
      return (
        <RubricSection
          score1="Generally body paragraphs contain topic sentences that frame each paragraph. Some topic sentences are related to the topic of the paper."
          score2="Most topic sentences are relevant to the topic of the paper."
          score3="All topic sentences are directly relevant to the topic of the paper."
          score4="Each topic sentence is directly relevant to the thesis statement and some topic sentences are assertions. Sequence of assertions may be random."
          score5="Each topic sentence is directly relevant to the thesis and most topic sentences are assertions.Sequence of assertions is attempted."
          score6="Each topic sentence is an assertion that supports the thesis statement.Sequence of assertions is mostly intentional but may not effectively advance the argument."
          score7="Each assertion provides defensible and relevant support for the larger argument of the thesis statement. Some assertions are clarified in scope. Sequence of assertions is intentional and sometimes advances the argument."
          score8="ach assertion provides defensible and relevant support for the larger argument of the thesis statement.Assertions are mostly clarified in scope. Sequence of assertions is intentional and mostly advances the argument."
          handleRubricTextChange={this.props.handleRubricTextChange}
          handleScoreChange={this.props.handleScoreChange}
          section={this.props.section}
          handleTextAndScoreChange={this.props.handleTextAndScoreChange}
        />
      );
    }
  }
}

Modal.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
