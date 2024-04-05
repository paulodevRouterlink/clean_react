import { z } from 'zod'

export const schemaLogin = z.object({
  email: z.string().email({ message: 'Digite uma email válido' }),
  password: z.string().min(1, { message: 'Digite uma senha válida' }),
})

export type LoginProps = z.infer<typeof schemaLogin>
