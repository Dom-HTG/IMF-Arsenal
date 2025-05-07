import { DataSource, UpdateResult } from "typeorm";
import { AppDataSource } from "../store/datasource";
import { Gadget } from "../interfaces/gadget";
import { Status } from "../interfaces/interface";

export class GadgetRepository {
    private AppDataSource: DataSource = AppDataSource;

    // constructor() { this.AppDataSource = AppDataSource };

    public async RetriveGadgets(): Promise<Gadget[]> {
        const gadgets = await this.AppDataSource.getRepository(Gadget).find();
        return gadgets;
    };

    public async AddGadget(gadget: Gadget): Promise<Gadget> {
        const addedGadget = await this.AppDataSource.getRepository(Gadget).save(gadget);
        return addedGadget;
    };

    public async UpdateGadget(gadget: Gadget, gadgetId: string): Promise<UpdateResult> {
        const updatedGadget = await this.AppDataSource.getRepository(Gadget).update(gadgetId, gadget);
        if (updatedGadget.affected === 0) {
            throw new Error("Gadget not found");
        } else {
            return updatedGadget;
        }
    };

    public async RemoveGadget(gadgetId: string): Promise<boolean> {
        if (typeof gadgetId !== "string") throw new Error("Gadget not found");
        const gadget = await this.AppDataSource.getRepository(Gadget).findOneBy({ id: gadgetId });
        if (!gadget) {
            throw new Error("Gadget not found");
        } else {
            const _ = await this.AppDataSource.getRepository(Gadget).update(gadgetId, {
                status: Status.DECOMMISSIONED,
                decommissionedAt: new Date()
            });
            return true; // returns true if decommissioned successfully and false if not.
        };
    };

    public async SelfDestructGadget(gadgetId: string): Promise<boolean> {
        if (typeof gadgetId !== "string") throw new Error("Gadget not found");
        const destructedGadget = await this.AppDataSource.getRepository(Gadget).delete({ id: gadgetId });
        if (destructedGadget.affected === 0) {
            throw new Error("Gadget not found");
        } else {
            return true; // returns true if gadget is destroyed successfully and false if not.
        };
    };

};