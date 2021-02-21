import React from 'react'
import { firebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import axios from 'axios';
import { ADD_NOTE, FETCH_NOTES, SHOW_LOADER } from '../keys';

function FirebaseState({children}) {
  const url = 'https://todo-list-24ba3-default-rtdb.europe-west1.firebasedatabase.app';

  const initialState = {
    notes: [],
    isLoading: false
  }
  const [state, dispatch] = React.useReducer(firebaseReducer, initialState)
  
  const showLoader = () => {
    dispatch({ type: SHOW_LOADER })
  }

  const fetchNotes = async () => {
    showLoader()
    const res = await axios.get(`${url}/notes.json`);
    const result = () => {
      if (!!res.data) {
        return Object.keys(res.data).map(elem => {
          return ({
            ...res.data[elem],
            id: elem
          })
        })
      } else {
        return []
      }
    }
    console.log(result())
    dispatch({ type: FETCH_NOTES, payload: result() })

  }
  const addNote = async (text) => {
    const note = {
      title: text,
      date: new Date().toDateString()
    }
    const res = await axios.post(`${url}/notes.json`, note);
    const payload = {
      ...note,
      id: res.data.name
    }
    dispatch({ type: ADD_NOTE, payload })
  }

  return (
    <firebaseContext.Provider value={{
      firebase: state,
      fetchNotes,
      addNote
    }}>
      {children}
    </firebaseContext.Provider>
  );
}

export default FirebaseState;