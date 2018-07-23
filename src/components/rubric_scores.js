import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Summary from './summary'
import RubricSection from  './rubric_section'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchRubric} from '../actions/index';
import {getSectionScores} from '../utils/rubric_scores_helper'

class RubricScores extends Component {

  componentDidMount(){
    this.props.fetchRubric()
  }

  render() {
    return (this.props.show === false ? null :
      <RubricSection
        score={getSectionScores(this.props.section, this.props.rubric)}
        handleRubricTextChange={this.props.handleRubricTextChange}
        handleScoreChange={this.props.handleScoreChange}
        section={this.props.section}
        handleTextAndScoreChange={this.props.handleTextAndScoreChange}
      />
    )}
}
RubricScores.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

function mapStateToProps({rubric}){
  return {rubric};
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchRubric}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(RubricScores);
