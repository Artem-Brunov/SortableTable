import React from 'react'
import PropTypes from 'prop-types'
import './css/row.css'

export default class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

  }

  next() {
    return this.props.selectList(this.props.listNumber + 1);
  }

  prev() {
    return this.props.selectList(this.props.listNumber - 1);
  }

  render() {
    const {dataSize, tableHeight, listNumber, numberOfRows} = this.props;
    const disablePrev = listNumber > 1 ? false : true;
    const disableNext = (listNumber * tableHeight < dataSize) && (numberOfRows === tableHeight) ? false : true;

    return (
      <div className = 'mainBtns'>
        <button className = 'mainBtn' onClick={this.prev} disabled = {disablePrev}>↢ Prev</button>
        <button className = 'mainBtn' onClick={this.next} disabled = {disableNext}>Next ↣</button>
      </div>
    );
  }
}

Paginator.propTypes = {
  dataSize: PropTypes.number,
  tableHeight: PropTypes.number,
  listNumber: PropTypes.number,
  numberOfRows: PropTypes.number,
  selectList: PropTypes.func
};
