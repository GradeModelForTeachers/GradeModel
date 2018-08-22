import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RubricSection from './rubric_section';
import { fetchRubric } from '../actions/index';
import { getSectionScores } from '../utils/rubric_scores_helper';

class RubricScores extends Component {
  componentDidMount() {
    this.props.fetchRubric();
  }

  render() {
    return (this.props.show === false ? null
      : (
        <RubricSection
          score={getSectionScores(this.props.section, this.props.rubric)}
          handleRubricTextChange={this.props.handleRubricTextChange}
          handleScoreChange={this.props.handleScoreChange}
          section={this.props.section}
          handleTextAndScoreChange={this.props.handleTextAndScoreChange}
        />
      )
    );
  }
}

function mapStateToProps({ rubric }) {
  return { rubric };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRubric }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RubricScores);
