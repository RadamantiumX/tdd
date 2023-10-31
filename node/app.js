import { readJSONUsers, readJSONNotes } from "./src/utils.js"
import express from 'express'
import { validateUser } from "./src/schemas/users.js"
import { validateNote } from "./src/schemas/notes.js"
import cors from 'cors'

const users = readJSONUsers('./users.json')
const notes = readJSONNotes('./notes.json')

const app = express()
app.use(express.json())

app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            'http://localhost:5173',
            'http://localhost:8080',
            'http://localhost:3000'
        ]

        if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
        }

        if(!origin) {
            return callback(null, true)
        }

        return callback(new Error('Not allowed by CORS'))
    }
}))

app.disable('x-powered-by')

app.get('/notes', (req, res) => {
  return res.json(notes)
})

app.post('/new-note', (req, res) => {
  const result = validateNote(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const newNote = {id: crypto.randomUUID(), ...result.data}
  notes.push(newNote)

  return res.status(201).json({ message: 'Note created succesfully' })
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    const user = users.find( user =>{ 
     if (user.username === username && user.password === password) {
      return res.json({ message: `Bienvenido ${username}`, token: crypto.randomUUID(), user: username }) 
     }
     if (user.username !== username || user.password !== password){
       return res.json({ message: 'Wrong credentials' })
     }
    })
    
    if (!user) {
      return res.status(400).json({ error: JSON.parse({  message: 'Wrong credentials' }) })
    }
      
   
})

app.post('/user', (req, res) => {
  const result = validateUser(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newUser = result.data
  users.push(newUser)

  return res.status(201).json({ message: 'User created' })
})

/*app.post('/reset', async (req, res) => {
  await 
})*/

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening in port http://localhost:${PORT}`)
})