import { NotificationChannel } from "../core/interfaces";
import { User } from "../models/User";
import { Logger } from "./Logger";

export class SMSNotification implements NotificationChannel {
  constructor(private logger: Logger) {}

  send(user: User, message: string): void {
    this.logger.log(`Sending SMS to ${user.phone}`);
    console.log(`SMS sent to ${user.phone}: ${message}`);
  }
}
