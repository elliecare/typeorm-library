import {Plans} from './src/entity/plans.entity';
import {Steps} from './src/entity/steps.entity'
import {PatientAgentContact} from './src/entity/patient_agent_contact.entity';
import {Plans_audit} from './src/entity/plans_audit.entity';
import {AccessCode} from './src/entity/access_code.entity';
import {Alert} from './src/entity/alert.entity';
import {AlertConfiguration} from './src/entity/alert_configuration.entity';
import {AlertLogs} from './src/entity/alert_logs.entity';
import {Battery} from './src/entity/battery.entity';
import {Config} from './src/entity/config.entity';
import {Config_audit} from './src/entity/config_audit.entity';
import {DiscountCode} from './src/entity/discount_code.entity';
import {EventEntity} from './src/entity/event.entity';
import {Gateway} from './src/entity/gateway.entity';
import {Gateway_audit} from './src/entity/gateway_audit.entity';
import {HealthSystem} from './src/entity/health_system.entity';
import {Health_system_audit} from './src/entity/health_system_audit.entity';
import {HeartRate} from './src/entity/heart_rate.entity';
import {InviteCode} from './src/entity/invite_code.entity';
import {LineProvider} from './src/entity/line_provider.entity';
import {Location} from './src/entity/location.entity';
import {Measurement} from './src/entity/measurement.entity';
import {Message} from './src/entity/message.entity';
import {Notification} from './src/entity/notification.entity';
import {OffBody} from './src/entity/off_body.entity';
import {OperationalRole} from './src/entity/operational_role.entity';
import {PlansDescription} from './src/entity/plans_description.entity';
import {Purchase} from './src/entity/purchase.entity';
import {Role_SupportNetwork} from './src/entity/role_support_network.entity';
import {Role_support_network_audit} from './src/entity/role_support_network_audit.entity';
import {Sensors} from './src/entity/sensors.entity';
import {Smartwatch} from './src/entity/smartwatch.entity';
import {Smartwatch_audit} from './src/entity/smartwatch_audit.entity';
import {SupportNetwork} from './src/entity/support_network.entity';
import {Support_network_audit} from './src/entity/support_network_audit.entity';
import {Tracking} from './src/entity/tracking.entity';
import {Tracking_audit} from './src/entity/tracking_audit.entity';
import {User} from './src/entity/user.entity';
import {User_audit} from './src/entity/user_audit.entity';
import {UserOperationalRole} from './src/entity/user_operational_role.entity';
import {UserSmartwatch} from './src/entity/user_smartwatch.entity';
import {Users_smartwatches_audit} from './src/entity/user_smartwatch_audit.entity';
import {CompanyClient} from './src/entity/company_client.entity';
import {Alert_audit} from './src/entity/alert_audit.entity';
import { PasswordResetToken } from './src/entity/password_reset_token.entity';
import {PhoneLine} from './src/entity/phone_line.entity';


export const Entities = [PasswordResetToken, Steps,Alert_audit,CompanyClient,InviteCode,Config_audit,Health_system_audit,Config,Gateway_audit,EventEntity,DiscountCode, Gateway,HealthSystem,HeartRate,LineProvider,Battery,Location,Measurement,Message,Notification,OffBody,OperationalRole,PlansDescription,Purchase,Role_SupportNetwork,User_audit,User,Smartwatch_audit,Smartwatch,Role_support_network_audit, Sensors,Tracking,Support_network_audit,SupportNetwork, Tracking_audit, Users_smartwatches_audit, UserSmartwatch, Plans, PatientAgentContact, UserOperationalRole, Plans_audit, AccessCode, Alert, AlertConfiguration, AlertLogs]

export { Plans };
export { PatientAgentContact };
export { Plans_audit };
export { AccessCode };
export { Alert };
export { Alert_audit };
export { AlertConfiguration };
export { AlertLogs };
export { Battery };
export { Config };
export { Config_audit };
export { DiscountCode };
export { EventEntity };
export { Gateway };
export { Gateway_audit };
export { HealthSystem };
export { Health_system_audit };
export { HeartRate };
export { InviteCode };
export { LineProvider };
export { Location };
export { Measurement };
export { Message };
export { Notification };
export { OffBody };
export { OperationalRole };
export { PlansDescription };
export { Purchase };
export { Role_SupportNetwork };
export { Role_support_network_audit };
export { Sensors };
export { Smartwatch };
export { Smartwatch_audit };
export { SupportNetwork };
export { Support_network_audit };
export { Tracking };
export { Tracking_audit };
export { User };
export { User_audit };
export { UserOperationalRole };
export { UserSmartwatch };
export { Users_smartwatches_audit };
export { CompanyClient };
export { Steps };
export { PasswordResetToken };
export {PhoneLine };