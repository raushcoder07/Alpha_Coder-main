import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  coins: String,
  cash: String,
  transitonhistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TransHistory' }]
});

const User =  mongoose.models.User || mongoose.model('User', userSchema);


export default User;