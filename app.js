const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./api/routes/user');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://root:' + process.env.MONGO_ATLAS_PW +
      '@cluster-api.j51ouqk.mongodb.net/restapi?retryWrites=true&w=majority'
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

connectDB();
app.use('/uploads', express.static('uploads'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
app.use((req, res , next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

// 404
app.use((req, res , next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// Global error
app.use((error, req, res , next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;