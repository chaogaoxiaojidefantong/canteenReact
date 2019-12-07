import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFormData } from '../../store/home/action';
import PropTypes from 'prop-types';
class Home extends Component{
  static propTypes = {
    formData: PropTypes.object.isRequired
  }
    render(){
      return (
        <div>
        <h2>Home</h2>
      </div>)
    }
}
// export default connect(state => ({
// }, {
//   saveFormData
// }))(Home);
const stateProp=((state)=>{
  return {formData: state.formData,
    proData: state.proData}
})
export default connect(stateProp,{saveFormData})(Home);