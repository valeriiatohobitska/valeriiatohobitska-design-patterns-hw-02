import { User } from "../models/User";

export interface NotificationChannel {
  send(user: User, message: string): void;
}
