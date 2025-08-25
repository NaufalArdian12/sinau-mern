import { ZodError } from 'zod'

export const validateRequest = (schema)=> async(req, res, next) => {
  try {
    schema.parse(req.body)
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMasages = error.issues.map((error => error.message))

      return res.status(500).json({error: 'Invalid request data', details: errorMasages})
    }
    res.status(500).json({error: 'Something went wrong'})
  }
}