import React from "react"
import './css/row.css'
export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(event) {
    return this.props.sortColumn(event.target.textContent);
  }

  render() {

    let buttonsRow = [];
    for(let i in this.props.data){
      buttonsRow.push(<button className = "btn" onClick={this.onBtnClick}>{this.props.data[i]}</button>);
    }


    return (
      <div className = "btns">
        {buttonsRow}
      </div>
    );
  }
}
