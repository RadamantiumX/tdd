import z from 'zod'

const notesSchema = z.object({
    note: z.string({
        required_error: 'Note is required'
    }),
    important: z.boolean()
})

export function validateNote(object) {
    return notesSchema.safeParse(object)
}