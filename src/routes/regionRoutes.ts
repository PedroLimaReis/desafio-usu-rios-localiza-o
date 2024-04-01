import express from 'express';
import RegionController from '../controllers/regionController';

const router = express.Router();

router.get('/regions', RegionController.getAllRegions);
router.get('/regions/:id', RegionController.getRegionById);
router.post('/regions', RegionController.createRegion);
router.put('/regions/:id', RegionController.updateRegion);
router.delete('/regions/:id', RegionController.deleteRegion);

export default router;