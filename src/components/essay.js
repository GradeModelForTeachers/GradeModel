import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchEssay} from '../actions/index';

export class Essay extends Component {
  constructor(props){
    super (props);
  }

componentDidMount(){
  this.props.fetchEssay()
}
  render() {
    return (
    <div className='col-md-9 essay'>
      <h2 data-testid="essay_title" className="essay-title">
      {this.props.essay.essayTitle}
      </h2>
      <div data-testid="essay_text" className ='essay-text'>
        {this.props.essay.essayText}
      </div>
    </div>
    );
  }
}

function mapStateToProps({essay}){
  return {essay};
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchEssay}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Essay);
