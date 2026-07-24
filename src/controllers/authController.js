import { Router } from 'express';
import authService from '../services/authService.js';
import { isAuth, isGuest } from '../middlewares/authMiddleware.js';
import { createUserSchema } from '../schemas/userSchema.js';
import { getErrorMessage } from '../utils/errorUtils.js';

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

authController.post('/register', isGuest, async (req, res) => {
    try {
        const userData = await createUserSchema.parseAsync(req.body);
        const token = await authService.register(userData);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        const err = getErrorMessage(error);
        res.render('auth/register', { error: err, ...req.body }); 
    }


});

authController.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

authController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;
    
    const token = await authService.login({ email, password });
    
    res.cookie('auth', token, { httpOnly: true });
    res.redirect('/');
});

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export default authController;