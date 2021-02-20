import React from 'react'
import { AlertContext } from './context/alert/alertContext';

function Alert() {
  const { alert, hide } = React.useContext(AlertContext)

  if (!alert.vizible) return null
  return (
    <div className={`alert alert-${ alert.title || 'warning'} alert-dismissible fade show`} role="alert">
      <strong>Attention</strong> 
      &nbsp; {alert.text}
      <button 
        type="button" 
        className="close"
        onClick={ hide }
      >
        &times;
      </button>
    </div>
  );
}

export default Alert;