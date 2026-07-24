import * as z from "zod";  

export const createMovieSchema = z.object({
    title: z.string()
        .min(5, { message: "Title must be at least 5 characters long" })
        .regex(/^[A-Za-z0-9 ]+$/, { message: "Title can only contain letters, numbers, and spaces" }),
    category: z.enum(
        ['tv-show', 'animation', 'movie', 'documentary', 'short-film'], 
        { message: "You must choose category"}),
    genre: z.string()
        .min(5, { message: "Genre must be at least 5 characters long" })
        .regex(/^[A-Za-z0-9 ]+$/, { message: "Genre can only contain letters, numbers, and spaces" }),
    director: z.string()
        .min(5, { message: "Director must be at least 5 characters long" })
        .regex(/^[A-Za-z0-9 ]+$/, { message: "Director can only contain letters, numbers, and spaces" }),
    year: z.coerce.number()
        .min(1900, { message: "Year must be greater than or equal to 1900" })
        .max(new Date().getFullYear(), { message: `Year must be less than or equal to ${new Date().getFullYear()}`}),
    imageUrl: z.string()
        .regex(/^(https?:\/\/)/, { message: "Image URL must start with http:// or https://" }),
    rating: z.coerce.number()
        .min(0, { message: "Rating must be at least 0" })
        .max(10, { message: "Rating must be at most 10" }),
    description: z.string()
        .min(20, { message: "Description must be at least 20 characters long" })
        .regex(/^[A-Za-z0-9 ]+$/, { message: "Description can only contain letters, numbers, and spaces" }),
});