import React from 'react'
import PropTypes from 'prop-types'
import headerStructure from '../headerStructure'
import './css/row.css'

export default class Row extends React.Component {
  render() {
    const {data} = this.props;
    const row = [];

    for(let i of headerStructure){
      row.push(<div id = 'cell' className = 'cell' key = {i}> {data[i]} </div>);
    }

    return (
      <div className = 'row' onClick = {() => (this.props.showHiddenData(data))}>
        {row}
      </div>
    );
  }
}

Row.propTypes = {
  data: PropTypes.object,
  showHiddenData: PropTypes.func
};
