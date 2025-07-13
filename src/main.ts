import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";

const user = new User("user@example.com", "+1234567890", "device-token-123");

const logger = new Logger();

const email = new EmailNotification(logger);
const sms = new SMSNotification(logger);
const push = new PushNotification(logger);

const notificationService = new NotificationService();
notificationService.addChannel(email);
notificationService.addChannel(sms);
notificationService.addChannel(push);

notificationService.notify(user, "Ваш платіж оброблено успішно!");
