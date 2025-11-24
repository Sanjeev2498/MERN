import { User } from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
// import { errorHandler } from '../utils/error.js';


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    
    // Log incoming request
    console.log('Signup request received:', { username, email, password: password ? '***' : undefined });
    
    // Validate input
    if (!username || !email || !password) {
        return res.status(400).json({ 
            success: false, 
            message: "All fields are required" 
        });
    }
    
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    
    try {
        await newUser.save();  
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error('Signup error:', error);
        
        // Handle duplicate key error
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(400).json({
                success: false,
                message: `${field} already exists`
            });
        }
        
        next(error);
    }
}