const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const dbConnect = () => {
    const DB_MONGO_URI = process.env.DB_MONGO_URI
    mongoose.connect(DB_MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('**** CONEXION CORRECTA ****')
        } else {
            console.log('***** ERROR DE CONEXION ****')
        }
    })
}

module.exports = dbConnect