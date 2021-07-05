const express = require('express');
const connectDB = require('./config/db');
const UsersRoutes = require('./routes/api/users');
const AuthRoutes = require('./routes/api/auth')
const ProfileRoutes = require('./routes/api/profile');
const PostsRoutes = require('./routes/api/posts');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Resolve CORS issues
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
    next();
});

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', UsersRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/profile', ProfileRoutes);
app.use('/api/posts', PostsRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



