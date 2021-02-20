import React from 'react';
import { HIDE_ALERT, SHOW_ALERT } from '../keys';
import { AlertContext } from './alertContext';
import { alertReducer } from './alertReducer';

function AlertState({children}) {
  const initialState = {
    vizible: false
  }
  const [state, dispatch] = React.useReducer(alertReducer, initialState)

  const show = (title, text) => {
    dispatch({ type: SHOW_ALERT, payload: {title, text} })
  }

  const hide = () => {
    dispatch({ type: HIDE_ALERT })
  }
  
  return (
    <AlertContext.Provider value={{
      alert: state,
      show,
      hide
    }}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlertState;