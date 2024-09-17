import express from 'express';
import {
  createHealthRecord,
  getHealthRecords,
  getHealthRecordById,
  updateHealthRecord,
  deleteHealthRecord
} from '../controllers/healthRecordsController.js';

const router = express.Router();

router.post('/', createHealthRecord);
router.get('/', getHealthRecords);
router.get('/:id', getHealthRecordById);
router.put('/:id', updateHealthRecord);
router.delete('/:id', deleteHealthRecord);

export default router;
