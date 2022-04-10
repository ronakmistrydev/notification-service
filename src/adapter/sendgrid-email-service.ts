import sendgrid from '@sendgrid/mail';
import { EmailDto } from '../dto/email-dto';

export class SendgridEmailService {
  constructor(apiKey: string) {
    sendgrid.setApiKey(apiKey);
  }

  async send(dto: EmailDto): Promise<void> {
    await sendgrid.send(dto);
  }
}
