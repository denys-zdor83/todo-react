import React from 'react'
import { firebaseContext } from './context/firebase/firebaseContext';

function Notes() {
  const { fetchNotes } = React.useContext(firebaseContext)


  return (
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">An item</li>
      <li className="list-group-item">An item</li>
    </ul>
  );
}

export default Notes;