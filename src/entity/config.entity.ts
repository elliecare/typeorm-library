import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
	Unique,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
} from "typeorm";
import { User } from "./user.entity";
@Entity()
@Unique(["user"])
export class Config {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User)
	@JoinColumn({ name: "user_id" })
	user: User;

	@Column({ type: "double precision", default: 3.5 })
	fallthresholdfactor: string;

	@Column({ default: 900000 })
	measuring_service_update_interval: string;

	@Column({ default: 0 })
	heartrate_value_min: number;

	@Column({ default: 1000 })
	heartrate_value_max: number;

	@Column({ default: 900000 })
	heartrate_service_update_interval: number;

	@Column({ default: 5 })
	heartrate_sample_size: number;

	@Column({ default: 10 })
	heartrate_sample_delta: number;

	@Column({ default: 25 })
	skin_temperature_value_min: number;

	@Column({ default: 39 })
	skin_temperature_value_max: number;

	@Column({ default: 900000 })
	skin_temperature_service_interval: number;

	@Column({ default: 5 })
	battery_min: number;

	@Column({ default: 12 })
	steps_sending_interval: number;

	@Column({ default: 12 })
	measurements_sending_interval: number;

	@Column({ default: 900000 })
	location_service_update_interval: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;

	getUnlockedData(input: Partial<Config>): Partial<Config> {
		const _data = {
			fallthresholdfactor: input.fallthresholdfactor,
			measuring_service_update_interval:
				input.measuring_service_update_interval,
			heartrate_value_min: input.heartrate_value_min,
			heartrate_value_max: input.heartrate_value_max,
			heartrate_service_update_interval:
				input.heartrate_service_update_interval,
			heartrate_sample_size: input.heartrate_sample_size,
			heartrate_sample_delta: input.heartrate_sample_delta,
			skin_temperature_value_min: input.skin_temperature_value_min,
			skin_temperature_value_max: input.skin_temperature_value_max,
			skin_temperature_service_interval:
				input.skin_temperature_service_interval,
			battery_min: input.battery_min,
			steps_sending_interval: input.steps_sending_interval,
			measurements_sending_interval: input.measurements_sending_interval,
			location_service_update_interval: input.location_service_update_interval,
		};

		for (const key in _data) {
			if (_data[key] === undefined || _data[key] === null) delete _data[key];
		}

		return _data;
	}
}
