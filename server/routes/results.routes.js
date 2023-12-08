import express from 'express';
import resultCtrl from '../controllers/results.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/results/:userId')
  .get(resultCtrl.resultsByUserID)

router.route('/api/results')
  .post(resultCtrl.create);

router.route('/api/results/:resultId')
  .get(authCtrl.requireSignin, resultCtrl.read)
  .put(authCtrl.requireSignin, resultCtrl.update)
  .delete(authCtrl.requireSignin, resultCtrl.remove);

router.param('resultId', resultCtrl.resultByID);
export default router;
