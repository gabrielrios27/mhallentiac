import { AdminService } from './admin.service';
import { UserService } from './user.service';

export const services = [UserService, AdminService];

export * from './user.service';
export * from './admin.service';
