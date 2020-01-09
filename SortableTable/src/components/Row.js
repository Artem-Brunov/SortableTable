import React from "react"
import './css/row.css'
export default class Row extends React.Component {
  render() {

    let row = [];
    for(let i in this.props.data){
      row.push(<div className = "cell"> {this.props.data[i]} </div>);
    }


    return (
      <div className = "row">
        {row}
      </div>
    );
  }
}
