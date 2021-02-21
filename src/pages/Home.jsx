import React from 'react'
import Form from '../components/Form'
import Notes from '../components/Notes'
import Loader from '../components/Loader';
import { firebaseContext } from '../components/context/firebase/firebaseContext';


function Home() {
  const { firebase, fetchNotes } = React.useContext(firebaseContext)
  
  React.useEffect(() => {
    fetchNotes()
  }, [])
  return (
    <div className="container">
      <Form />
      <hr/>
      {
        firebase.isLoading
        ? <Loader/>
        : <Notes />
      }
    </div>
  );
}

export default Home;
