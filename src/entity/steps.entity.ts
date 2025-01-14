import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
} from "typeorm";

@Entity()
export class Steps {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    device_id: string;

    @Column()
    total: number;

	@Column({nullable:true})
	app_version: string;

    @Column()
    created_on_device: Date;

    @CreateDateColumn()
    created_at: Date;
}
