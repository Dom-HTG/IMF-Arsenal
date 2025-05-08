import { GadgetRepository } from "../repository/gadget.repository"
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


export class GadgetHandler {
    // Dependency.
    private gadgetRepository: GadgetRepository = new GadgetRepository();

    public async RetriveGadgets(_req: Request, res: Response) {
        try {
            const gadgets = await this.gadgetRepository.RetriveGadgets();
            res.status(StatusCodes.OK).json({
                message: "Gadgets retrieved successfully",
                payload: gadgets
            });
        } catch (e: any) {
           res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "An error occurred..",
            error: e.message
           }); 
        };
    };

    public async AddGadget(req: Request, res: Response) {
        try {
            const gadget = req.body;
            if (!gadget) throw new Error("Gadget not found");
            const addedGadget = await this.gadgetRepository.AddGadget(gadget);
            res.status(StatusCodes.CREATED).json({
                message: "Gadget added successfully",
                payload: addedGadget
            });
        } catch (e: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "An error occurred..",
                error: e.message
            });
            
        };
    };

    public async UpdateGadget(req: Request, res: Response) {
        try {
            const gadgetId = req.params.gadgetId;
            const gadget = req.body;
            if (!gadget || !gadgetId) throw new Error("Invalid request");
            const updatedGadget = await this.gadgetRepository.UpdateGadget(gadget, gadgetId);
            res.status(StatusCodes.OK).json({
                message: "Gadget updated successfully",
                payload: updatedGadget
            });
        } catch (e: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "An error occurred..",
                error: e.message
            }); 
        };
    };

    public async RemoveGadget(req: Request, res: Response) {
        try {
            const gadgetId = req.params.gadgetId;
            if (!gadgetId) throw new Error("Invalid request");
            const removedGadget = await this.gadgetRepository.RemoveGadget(gadgetId);
            res.status(StatusCodes.OK).json({
                message: "Gadget decommisioned successfully",
                payload: removedGadget
            });
        } catch (e: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "An error occurred..",
                error: e.message
            }); 
        };
    };

    public async SelfDestructGadget(req: Request, res: Response) {
        try {
            const gadgetId = req.params.gadgetId;
            if (!gadgetId) throw new Error("Invalid request");
            const destructedGadget = await this.gadgetRepository.SelfDestructGadget(gadgetId);
            res.status(StatusCodes.OK).json({
                message: "Gadget destroyed successfully",
                payload: destructedGadget
            });

        } catch (e: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "An error occurred..",
                error: e.message
            });  
        };
    };

    
}