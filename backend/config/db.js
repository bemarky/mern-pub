const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://marky-db-2022:YNdLh240JHnQYE5G@vtaclp.mydupdy.mongodb.net/mearnapp?retryWrites=true&w=majority')
    //const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
