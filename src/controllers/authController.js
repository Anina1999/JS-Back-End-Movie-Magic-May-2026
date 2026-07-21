import { Router } from 'express';
import authService from '../services/authService.js';
import { isAuth, isGuest } from '../middlewares/authMiddleware.js';

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

authController.post('/register', isGuest, async (req, res) => {
    const { email, password, repeatPassword } = req.body;

    const token = await authService.register({ email, password, repeatPassword });

    res.cookie('auth', token, { httpOnly: true });
    res.redirect('/');
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