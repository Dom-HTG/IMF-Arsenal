import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Status } from "./interface";

@Entity()
export class Gadget {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.AVAILABLE  // Set default status of gadget to available.
    })
    status!: Status;

    @Column()
    decommissionedAt!: Date | null; // Nullable field.
};