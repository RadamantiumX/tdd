import { useState, useEffect } from "react"

export const Notes = () => {
    const [notes, setNotes] = useState([])
    
    

  useEffect(()=> {
    fetch('http://localhost:1234/notes')
    .then(response => response.json())
    .then(result =>
      {
       
         setNotes(result)
        })
  },[])

    return(
        <>
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
        
        <ul>
            {notes.map(note=>(
                <li key={note.id}>{note.note} <button key={note.id}>make not important</button></li>
            ))}
        </ul>
        </div>
        </>
    )
}