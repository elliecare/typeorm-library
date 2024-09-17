import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class AlertConfiguration {
	@PrimaryColumn("uuid")
	user_id: string;

	@Column("simple-json")
	configuration: {
		[key: string]: string;
	};
}
