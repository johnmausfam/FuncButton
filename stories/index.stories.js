import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import FuncButton,{FuncButtonIcon,FuncButtonStyle} from '../src/index'

storiesOf('FuncButton', module)
  .add('Normal', () => <FuncButton text={"測試按鈕"} />)
  .add('Disabled', () => <FuncButton text={"測試按鈕"} enable={false} />)
  .add('Disable After Click', () => <FuncButton text={"測試按鈕"} disableAfterClick={true} />)
  .add('With Button Style', () => Object.keys(FuncButtonStyle).map(styleNameKey=>{
    let styleName = FuncButtonStyle[styleNameKey];
    return [<FuncButton key={styleName} text={"測試按鈕("+styleName+")"} buttonStyle={styleName} />,<FuncButton key={"d_" + styleName} text={"Disable按鈕("+styleName+")"} buttonStyle={styleName} enable={false} />]
  }))
  .add('With icon', () => Object.keys(FuncButtonIcon).map(iconNameKey=>{
    let iconName = FuncButtonIcon[iconNameKey];
    return [<FuncButton key={iconName} text={"測試按鈕("+iconName+")"} iconName={iconName} />,<FuncButton key={"d"+iconName} text={"Disable按鈕("+iconName+")"} iconName={iconName} enable={false} />]
  }))