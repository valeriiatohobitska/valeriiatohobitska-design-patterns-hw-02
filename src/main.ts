import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";

// Створюємо користувача
const user = new User("user@example.com", "+1234567890", "device-token-123");

const logger = new Logger();

// Створюємо канали сповіщень
const email = new EmailNotification(logger);
const sms = new SMSNotification(logger);
const push = new PushNotification(logger);

// Створюємо NotificationService і додаємо канали
const notificationService = new NotificationService();
notificationService.addChannel(email);
notificationService.addChannel(sms);
notificationService.addChannel(push);

// Відправляємо сповіщення
notificationService.notify(user, "Ваш платіж оброблено успішно!");
