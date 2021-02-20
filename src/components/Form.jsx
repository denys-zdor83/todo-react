import React from 'react'
import { AlertContext } from './context/alert/alertContext'

function Form() {
  const [state, setState] = React.useState('')
  const { show } = React.useContext(AlertContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.trim()) {
      show('success', 'Your message was added')
      setState('')
    } else {
      show('warning', 'Please enter smth in the field')
    }

  }

  return (
   <form onSubmit={ handleSubmit }>
     <input 
      type="text" 
      className="form-control" 
      onChange={ e => setState(e.target.value) }
      value={state}
     />
   </form>
  );
}

export default Form;
