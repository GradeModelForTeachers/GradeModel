import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RubricSection from '../components/rubric_section';
import { fetchRubric } from '../actions/index';
import getSectionScores from '../utils/rubric_scores_helper';

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

RubricScores.propTypes = {
  fetchRubric: PropTypes.func.isRequired,
  handleScoreChange: PropTypes.func,
  handleRubricTextChange: PropTypes.func,
  handleTextAndScoreChange: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  rubric: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  show: PropTypes.bool.isRequired,
};

RubricScores.defaultProps = {
  handleScoreChange: () => {},
  handleRubricTextChange: () => {},
  rubric: [],
};

function mapStateToProps({ rubric }) {
  return { rubric };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRubric }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RubricScores);
