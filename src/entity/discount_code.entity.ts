import { DiscountCodeType } from "src/types";
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export class DiscountCode {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	code: string;

	@Column({
		type: "enum",
		enum: DiscountCodeType,
		default: "percentage",
	})
	discount_type: DiscountCodeType;

	@Column()
	discount_percentage: number;

	@Column({ default: true })
	is_active: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
