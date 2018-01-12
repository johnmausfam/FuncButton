import React from 'react'
import ReactDOM from 'react-dom'
import FuncButton from '../src/index'

class ExampleApp extends React.Component {
  constructor(props) {
    super(props);
  }

  //private methods
  _button_onClick(ev){
    alert(ev.value);
  }

  render() {
    return (
      <div>
        <FuncButton text={"測試按鈕"} value="button 1" onClick={this._button_onClick.bind(this)} />
        <FuncButton text={"測試按鈕 disableAfterClick"} value="button 2" disableAfterClick={true} onClick={this._button_onClick.bind(this)} />
        <FuncButton text={"測試按鈕 disable"} value="button 3" enable={false} onClick={this._button_onClick.bind(this)} />
      </div>
    );
  }
}

export default ExampleApp