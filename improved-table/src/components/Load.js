import React from 'react'
import PropTypes from 'prop-types'

export default class Load extends React.Component {
  constructor(props) {
    super(props);
    this.load = this.load.bind(this);
    this.bigLoad = this.bigLoad.bind(this);

  }

  load() {
    return this.props.loadData('https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
  }

  bigLoad() {
    return this.props.loadData('https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
  }

  render() {
    return (
      <div className = 'mainBtns'>
        <button className = 'mainBtn' onClick={this.bigLoad}>Большой набор данных</button>
        <button className = 'mainBtn' onClick={this.load}>Маленький набор данных</button>
      </div>
    );
  }
}

Load.propTypes = {
  loadData: PropTypes.func
};
