import mongoose from 'mongoose';

const transchema = new mongoose.Schema({
  company: String,
  stockprize: Number,
  stockpurchase: Number,
  transitonhistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TransHistory' }]
});

const TransHistory =  mongoose.models.User || mongoose.model('Transhistory', transchema);


export default TransHistory;