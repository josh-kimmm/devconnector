const express = require('express');
const connectDB = require('./config/db');
const UsersRoutes = require('./routes/api/users');
const AuthRoutes = require('./routes/api/auth')
const ProfileRoutes = require('./routes/api/profile');
const PostsRoutes = require('./routes/api/posts');

const app = express();

// COnnect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', UsersRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/profile', ProfileRoutes);
app.use('/api/posts', PostsRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



