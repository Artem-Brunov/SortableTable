import React from 'react'
import PropTypes from 'prop-types'
import './css/row.css'

export default class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(event) {
    const normalRow = event.target.textContent.slice(0,-2);
    return this.props.sortColumn(normalRow);
  }

  render() {
    const {data, flag, headForSort} = this.props;
    const buttonsRow = [];
    let indicator = '';

    for(let i in data){
      indicator = '▼';
      if(headForSort === data[i]){
        if(flag === 0){
          indicator = '▲';
        }
      }
      buttonsRow.push(
        <button  className = 'btn' key = {i} onClick={this.onBtnClick}>
          {data[i] + ' ' + indicator}
        </button>
      );
    }

    return (
      <div id = 'headerButt' className = 'btns'>
        {buttonsRow}
      </div>
    );
  }
}

Sort.propTypes = {
  data: PropTypes.array,
  flag: PropTypes.number,
  headForSort: PropTypes.string,
  sortColumn: PropTypes.func
};
