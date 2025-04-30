import { DataSource, UpdateResult } from "typeorm";
import { AppDataSource } from "../store/datasource";
import { Gadget } from "../interfaces/gadget";

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
};


// // Updates an existing gadgets' information.
// app.put("/gadgets/:id", (req: Request, res: Response) => {

// });

// // Removes gadget from the inventory.
// // Marks the status of the gadget as decommissioned and adds a timestamp.
// app.delete("/gadgets/:id", (req: Request, res: Response) => {

// });

// // Self destruct.
// // Requires a randomly generated confirmation code.
// app.post("/gadget/:id/self-destruct", (req: Request, res: Response) => {

// });