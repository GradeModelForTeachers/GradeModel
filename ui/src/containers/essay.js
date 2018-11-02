import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEssay } from '../actions/index';
import '../styles/essay.css';

export class Essay extends Component {
  componentDidMount() {
    this.props.fetchEssay();
  }

  render() {
    return (
      <div className="essay-box">
        <h2 data-testid="essay_title" className="essay-title">
          {this.props.essay.essayTitle}
        </h2>
        <div data-testid="essay_text" className="essay-text" dangerouslySetInnerHTML={{ __html: this.props.essay.essayText }} />
      </div>
    );
  }
}

Essay.propTypes = {
  fetchEssay: PropTypes.func.isRequired,
  essay: PropTypes.object.isRequired,
};

const mapStateToProps = ({ essay }) => ({ essay });

export default connect(mapStateToProps, { fetchEssay })(Essay);
