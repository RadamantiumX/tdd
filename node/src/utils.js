import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
export const readJSONUsers = (path) => require('../users.json') 
export const readJSONNotes = (path) => require('../notes.json')