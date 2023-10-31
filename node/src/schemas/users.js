import z from 'zod'

const userSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    password: z.string()
})

export function validateUser(object) {
    return userSchema.safeParse(object)
}