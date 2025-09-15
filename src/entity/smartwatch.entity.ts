import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import {
  PhoneNumber,
  SmartwatchColors,
  SmartwatchMarks,
  SmartwatchModels,
  SmartwatchSizes,
  SmartwatchStatus,
} from "../types";
import { CompanyClient } from "./company_client.entity";
import { SupportNetwork } from "./support_network.entity";
import { Tracking } from "./tracking.entity";
import { Config } from "./config.entity";
import { PhoneLine } from "./phone_line.entity";

@Entity()
export class Smartwatch {
  @PrimaryColumn()
  id: string;

  @Column({
    type: "enum",
    enum: SmartwatchStatus,
  })
  status: string;

  @Column({
    type: "enum",
    enum: SmartwatchMarks,
  })
  mark: string;

  @Column({
    type: "enum",
    enum: SmartwatchModels,
  })
  model: string;

  @Column({
    type: "enum",
    enum: SmartwatchSizes,
  })
  size: string;

  @Column({
    type: "enum",
    enum: SmartwatchColors,
    default: SmartwatchColors.BLACK,
  })
  color: string;

  @Column({ default: true })
  LTE: boolean;

  @Column({ default: false })
  device_check: boolean;

  @Column({ default: false })
  software_check: boolean;

  @Column({ default: false })
  knox: boolean;

  @OneToOne(() => PhoneLine, { eager: true, nullable: true })
  @JoinColumn({ name: "phone_number_1" })
  phone_number_1: PhoneLine;

  @OneToOne(() => PhoneLine, { eager: true, nullable: true })
  @JoinColumn({ name: "phone_number_2" })
  phone_number_2: PhoneLine;

  @ManyToOne(() => CompanyClient, { eager: true })
  @JoinColumn({ name: "company_client_id" })
  company_client: CompanyClient;

  @OneToOne(() => SupportNetwork, { eager: true })
  @JoinColumn({ name: "support_network_id" })
  support_network: SupportNetwork;

  @ManyToOne(() => Tracking, (tracking) => tracking.id)
  tracking: Tracking;

  @OneToOne(() => Config, { eager: true })
  @JoinColumn({ name: "config_id" })
  config: Config;

  @Column({ default: null })
  commercial_owner: string;

  @Column({ default: false })
  out_of_date: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
