import { NotificationChannel } from "../core/interfaces";
import { User } from "../models/User";
import { Logger } from "./Logger";

export class PushNotification implements NotificationChannel {
  constructor(private logger: Logger) {}

  send(user: User, message: string): void {
    this.logger.log(`Sending PUSH to ${user.deviceToken}`);
    console.log(`Push sent to ${user.deviceToken}: ${message}`);
  }
}
