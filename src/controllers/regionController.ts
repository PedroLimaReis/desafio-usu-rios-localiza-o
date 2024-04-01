import { Request, Response } from "express"
import regionService from "../services/regionService";

const RegionController = {
    async getAllRegions(req: Request, res: Response){
        try {
            const regions = await regionService.getAllRegions();
            res.json(regions);
        } catch (error) {
            console.error('Erro ao buscar regiões:', error);
            res.status(500).json({ error: 'Erro ao buscar regiões' });
        }
    },

    async getRegionById(req: Request, res: Response){
        try {
            const { id } = req.params;
            const region = await regionService.getRegionById(id);

            if (!region) {
                res.status(404).json({ error: 'Região não encontrada' });
                return;
            }

            res.json(region);
        } catch (error) {
            console.error('Erro ao buscar região:', error);
            res.status(500).json({ error: 'Erro ao buscar região' });
        }
    },

    async createRegion(req: Request, res: Response){
        try {
            const { name, coordinates, userId } = req.body;
            const region = await regionService.createRegion(name, coordinates, userId);
            res.status(201).json(region);
        } catch (error) {
            console.error('Erro ao criar região:', error);
            res.status(500).json({ error: 'Erro ao criar região' });
        }
    },

    async updateRegion(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { name, coordinates, userId } = req.body;
            const updatedRegion = await regionService.updateRegion(id, name, coordinates, userId);
            if (!updatedRegion) {
                res.status(404).json({ error: 'Região não encontrada' });
                return;
            }
            res.json(updatedRegion);
        } catch (error) {
            console.error('Erro ao atualizar região:', error);
            res.status(500).json({ error: 'Erro ao atualizar região' });
        }
    },

    async deleteRegion(req: Request, res: Response){
        try {
            const { id } = req.params;
            const deletedRegion: any = await regionService.deleteRegion(id);
            
            if (!deletedRegion) {
                res.status(404).json({ error: 'Região não encontrada' });
                return;
            }
            res.json({ message: 'Região excluída com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir região:', error);
            res.status(500).json({ error: 'Erro ao excluir região' });
        }
    }
}

export default RegionController;