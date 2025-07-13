import { NotificationChannel } from "../core/interfaces";
import { User } from "../models/User";

export class NotificationService {
  private channels: NotificationChannel[] = [];

  addChannel(channel: NotificationChannel): void {
    this.channels.push(channel);
  }

  notify(user: User, message: string): void {
    this.channels.forEach(channel => channel.send(user, message));
  }
}
