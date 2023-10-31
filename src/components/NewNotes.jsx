import { useRef, useState } from "react"
import { useStateContext } from "../context/ContextProvider"

export const NewNotes = () => {
    const { token } = useStateContext()
    const [message, setMessage] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const noteRef = useRef(null)
    
    const showNewNoteForm = () => {
       setShowForm(true)
    }

    const hideNotesForm = () => {
        setShowForm(false)
    }

    const handleSendNote = (e) => {
        const payload = {
            note: noteRef.current.value,
            important: false,
            token: token
        }
        fetch('http://localhost:1234/new-note',{
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then((result) => {
            setMessage(result.message)
        })
     } 
    return(
        <>
        {!showForm&&<button onClick={showNewNoteForm}>Create a new note</button>}
        {message !== null &&<p>Note created succefully</p>}
        {showForm&&<>
        <button onClick={hideNotesForm}>Hide notes form</button>
        <form onSubmit={handleSendNote}>
            <input type="text" placeholder="Write your note content" ref={noteRef}/>
            <button>save</button>
        </form></>}
        </>
    )
}