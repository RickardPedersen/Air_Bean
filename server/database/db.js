const mongoose = require('mongoose')

async function connect() {
    try {
        switch (process.env.ENVIRONMENT) {
            case 'dev':
                await mongoose.connect('mongodb://localhost:27017/Air_Bean_dev', { useNewUrlParser: true, useUnifiedTopology: true })
                break;

            case 'prod':
                await mongoose.connect('mongodb://localhost:27017/Air_Bean_prod', { useNewUrlParser: true, useUnifiedTopology: true })
                break;

            case 'test':
                await mongoose.connect('mongodb://localhost:27017/Air_Bean_test', { useNewUrlParser: true, useUnifiedTopology: true })
                break;
            
            default:
                await mongoose.connect('mongodb://localhost:27017/Air_Bean_dev', { useNewUrlParser: true, useUnifiedTopology: true })
        }
    } catch (error) {
        console.error(error)
    }
}

async function disconnect() {
    try {
        await mongoose.connection.close(() => {
            console.log('Database connection closed')
        })
    } catch (error) {
        console.error(error)
    }
}

mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', function() {
  console.log(`Connected to ${process.env.ENVIRONMENT} database`)
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
)

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
  },
  { timestamps: true }
)

const user = mongoose.model('user', userSchema)
const product = mongoose.model('product', productSchema);

module.exports = {connect, disconnect, user, product}
