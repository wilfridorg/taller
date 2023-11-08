import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    goalscored: {
        type: Number,
        
        
    },
    gamesplayed: {
        type: Number,
        
    },
    averagegoals: {
        type: Number,
        
    }
  
})

export default mongoose.model('player', userModel);