import React, {useState} from 'react';
import './App.css';


import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';

function App( props) {

  const[notes, setNotes]= useState ([])

  function addNote (newNote){
    setNotes ((prevValue) => {
      return [...prevValue, newNote];
    });
  }

 function deleteNotes (id){
   setNotes(preValue => {
    return [...preValue.filter((note, index)=> index !==id )];
   });
   }




  return (
    <div className="App" >
    <Header />
    <CreateArea onAdd={addNote} />

    { notes.map((note, index) => (
      <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNotes}
          />
    ) )}
    
  <footer>  sushan prasad___notepad </footer>
    </div>
  );
}

export default App;
