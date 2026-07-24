import * as z from "zod";  

export const createArtistSchema = z.object({
    name: z.string()
        .min(5, { message: 'Name must be at least 5 characters long'})
        .regex(/^[A-Za-z ]+$/, { message: "Name can only contain letters and spaces" }),
    age: z.coerce.number()
        .min(1, { message: "Age must be at least 1" })
        .max(120, { message: "Age must be at most 120" }),
    born: z.string()
        .min(10, { message: "Born place must be at least 10 characters long" })
        .regex(/^[A-Za-z0-9 ]+$/, { message: "Born place can only contain letters, numbers, and spaces" }),
    imageUrl: z.string()
        .regex(/^(https?:\/\/)/, { message: "Image URL must start with http:// or https://" }),
})