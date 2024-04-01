import Region, { RegionDocument } from "../models/regionModel";

const regionService = {
    async getAllRegions(): Promise<RegionDocument[]> {
        try {
          const regions = await Region.find();
          return regions;
        } catch (error) {
          throw new Error('Erro ao buscar regiões');
        }
    },

    async getRegionById(regionId: string): Promise<RegionDocument | null> {
        try {
          const region = await Region.findById(regionId);
          return region;
        } catch (error) {
          throw new Error('Erro ao buscar região');
        }
    },

    async createRegion(regionData: Partial<RegionDocument>): Promise<RegionDocument> {
        try {
          const newRegion = new Region(regionData);
          await newRegion.save();
          return newRegion;
        } catch (error) {
          throw new Error('Erro ao criar região');
        }
    },

    async updateRegion(regionId: string, regionData: Partial<RegionDocument>): Promise<RegionDocument | null> {
        try {
          const updatedRegion = await Region.findByIdAndUpdate(regionId, regionData, { new: true });
          return updatedRegion;
        } catch (error) {
          throw new Error('Erro ao atualizar região');
        }
    },

    async deleteRegion(regionId: string): Promise<void> {
        try {
          await Region.findByIdAndDelete(regionId);
        } catch (error) {
          throw new Error('Erro ao excluir região');
        }
    },
}

export default regionService;