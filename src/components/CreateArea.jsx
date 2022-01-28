import React, { useState } from 'react';
import { FaPaperPlane } from "react-icons/fa";


function CreateArea( {submitButton, onAdd} ) {
 const [note, setNote] = useState({
     title: "",
     content: "",
 });

 

function handleChange(e){
    const {name, value} = e.target
    setNote((preValue) => {
                         return { ...preValue,
                                  [name]: value,        
                                };
    });
}


function submitButton(event) {
                             onAdd(note);
                             setNote({
                                    title: "",
                                    content: "",
    })
                             event.preventDefault();
    

}



    return (
        <div>

        <form>
            <input value={note.title} name="title"    placeholder="Title"   onChange={handleChange}/>
        <p>
<textarea value= {note.content}  name="content"  placeholder="Take a notes..."   onChange={handleChange} />

        </p>
    <button onClick={submitButton}> <FaPaperPlane /></button>
        </form>
            
        </div>
    )
}

export default CreateArea