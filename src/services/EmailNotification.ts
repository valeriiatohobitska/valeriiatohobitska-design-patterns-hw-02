import { NotificationChannel } from "../core/interfaces";
import { User } from "../models/User";
import { Logger } from "./Logger";

export class EmailNotification implements NotificationChannel {
  constructor(private logger: Logger) {}

  send(user: User, message: string): void {
    this.logger.log(`Sending EMAIL to ${user.email}`);
    console.log(`Email sent to ${user.email}: ${message}`);
  }
}
