import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
    const token = req.cookies.auth;

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, 'SECRET');
        req.user = decodedToken;
    } catch (err) { 
        console.error('Invalid token:', err);
        res.status(401).send('Unauthorized: Invalid token');  
    }

    next();
}