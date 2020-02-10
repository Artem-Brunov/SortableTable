import React from 'react'
import PropTypes from 'prop-types'
import './css/row.css'

export default class ShowHiddenData extends React.Component {
  render() {
    const {hiddenData} = this.props;

    if(hiddenData['description']){
      return (
        <div className = 'show'>
          <p>
            Выбран пользователь <b>{hiddenData['firstName']} {hiddenData['lastName']}</b>
          </p>
          <p>
            Описание:
          </p>
          <textarea className = 'textarea' value = {hiddenData['description']}  cols = '42' rows = '7' readOnly/>
          <p>
            Адрес проживания: <b>{hiddenData['address']['streetAddress']}</b>
          </p>
          <p>
            Город: <b>{hiddenData['address']['city']}</b>
          </p>
          <p>
            Провинция/штат: <b>{hiddenData['address']['state']}</b>
          </p>
          <p>
            Индекс: <b>{hiddenData['address']['zip']}</b>
          </p>
        </div>
      );
    }
    return null;
  }
}

ShowHiddenData.propTypes = {
  hiddenData: PropTypes.object
};
