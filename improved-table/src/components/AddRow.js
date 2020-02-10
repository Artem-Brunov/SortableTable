import React from 'react'
import PropTypes from 'prop-types'
import headerStructure from '../headerStructure'
import './css/tableTools.css'


export default class AddRow extends React.Component {
  constructor(props) {
    super(props);
    this.addBtn = this.addBtn.bind(this);
    this.formBtn = this.formBtn.bind(this);
    this.checkFunc = this.checkFunc.bind(this);
    this.state = {disable: true}
  }

  checkFunc(){
    let checker = true;
    for(let i of headerStructure){
      checker = checker &&  !!document.getElementById(i).value;
    }
    if(checker){
      this.setState({disable: false});
      return;
    }
    this.setState({disable: true});
  }

  formBtn() {
    document.getElementById('bigPctr').hidden = false;
    document.getElementById('butt').type = 'hidden';
    document.getElementById('searchInput').type = 'hidden';
    document.getElementById('searchButt').type = 'hidden';
  }

  addBtn() {
    this.setState({disable: true});
    document.getElementById('bigPctr').hidden = true;
    document.getElementById('butt').type = 'button';
    document.getElementById('searchInput').type = 'text';
    document.getElementById('searchButt').type = 'button';

    const rowInfo = {}
    for(let i of headerStructure){
      rowInfo[i] = document.getElementById(i).value;
      document.getElementById(i).value = null;
    }
    return this.props.addRow(rowInfo)
  }

  render() {
    const newRow = [];

    for(let i of headerStructure){
      newRow.push(
        <input id = {i} type = 'text' className = 'input2'
          key = {i} onChange = {this.checkFunc}
          placeholder = {' ' + i}
        />
      );
    }

    return (
      <div  className = 'search'>
          <div id = 'bigPctr' className = 'bigPctr'  hidden >
              {newRow}
              <input id='butt2' type='button' className = 'btn2'
                value='Добавить в таблицу' disabled = {this.state.disable}
                onClick = {this.addBtn}
              />
          </div>
          <input id='butt' type='button' className = 'btn1'
            value='Добавить' onClick = {this.formBtn}
          />
      </div>
    );
  }
}

AddRow.propTypes = {
  addRow: PropTypes.func
};
