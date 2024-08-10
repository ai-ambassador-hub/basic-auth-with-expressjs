import { Request, Response, NextFunction } from 'express'

// Middleware for Basic Authentication
const basicAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) {
        res.setHeader('WWW-Authenticate', 'Basic')
        return res.status(401).send('Authentication required.')
    }

    const base64Credentials = authHeader.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    const [username, password] = credentials.split(':')

    // Check credentials against environment variables
    const validUsername = process.env.BASIC_AUTH_USERNAME
    const validPassword = process.env.BASIC_AUTH_PASSWORD

    if (username === validUsername && password === validPassword) {
        next()
    } else {
        return res.status(401).send('Invalid credentials.')
    }
};

export default basicAuth
