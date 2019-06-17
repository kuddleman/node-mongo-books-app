const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim, true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: Number
})

const Store = mongoose.model('Store', storeSchema);

model.exports = {Store}