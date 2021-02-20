import React from 'react'

function Alert({alert}) {
  if (!alert) return null
  return (
    <div className={`alert alert-${ alert.title || 'warning'} alert-dismissible fade show`} role="alert">
      <strong>Attention</strong> 
      &nbsp; {alert.text}
      <button type="button" className="close">&times;</button>
    </div>
  );
}

export default Alert;