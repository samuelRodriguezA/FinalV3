import mongoose from 'mongoose';

const ResultsSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
  },
  quiz_name: {
    type: String,
    min: 1,
    max: 10,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  attemptNo: {
    type: Number,
    required: true,
  },
  question1: {
    type: String,
    maxlength: 1,
    required: true,
  },
  question2: {
    type: String,
    maxlength: 1,
    required: true,
  },
  question3: {
    type: String,
    maxlength: 1,
    required: true,
  },
  question4: {
    type: String,
    maxlength: 1,
    required: true,
  },
  question5: {
    type: String,
    maxlength: 1,
    required: true,
  },
  question6: {
    type: String,
    maxlength: 1,
    required: true,
  },
  question7: {
    type: String,
    maxlength: 1,
    required: true,
  },
  question8: {
    type: String,
    maxlength: 1,
    required: true,
  },
  question9: {
    type: String,
    maxlength: 1,
    required: true,
  },
  question10: {
    type: String,
    maxlength: 1,
    required: true,
  },
});

export default mongoose.model('Results', ResultsSchema);