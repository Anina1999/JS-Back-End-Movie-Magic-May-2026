import jwt from 'jsonwebtoken';

export function generateAuthToken(user) {
    const payload = { id: user.id, email: user.email };
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    
    return token;
}