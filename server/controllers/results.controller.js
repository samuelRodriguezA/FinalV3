import Results from '../models/results.model.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
  const result = new Results(req.body);
  try {
    await result.save();
    return res.status(200).json({ message: 'Result saved successfully!' });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    let results = await Results.find().select(
      'userid quiz_name score attemptNo question1 question2 question3 question4 question5 question6 question7 question8 question9 question10'
    );
    res.json(results);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const resultsByUserID = async (req, res) => {
  try {
    const userID = req.params.userId;
    const results = await Results.find({ userid: userID }).select(
      'userid quiz_name score attemptNo question1 question2 question3 question4 question5 question6 question7 question8 question9 question10'
    );
    res.json(results);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const resultByID = async (req, res, next, id) => {
  try {
    let result = await Results.findById(id);
    if (!result) return res.status(400).json({ error: 'Result not found' });

    req.result = result;
    next();
  } catch (err) {
    return res.status(400).json({ error: 'Could not retrieve result' });
  }
};

const read = (req, res) => {
  return res.json(req.result);
};

const update = async (req, res) => {
  try {
    let result = req.result;
    result.set(req.body);
    result.updated = Date.now();
    await result.save();
    res.json(result);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    const result = req.result;
    await result.remove();
    res.json({ message: 'Result deleted successfully!' });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, list, resultsByUserID, resultByID, read, update, remove };
