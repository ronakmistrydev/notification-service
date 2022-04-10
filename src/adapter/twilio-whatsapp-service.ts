import twilio, { Twilio } from 'twilio';

export class TwilioWhatsappService {
  private client: Twilio;

  constructor(private accountId: string, private authToken: string) {
    this.client = twilio(accountId, authToken);
  }

  async send(body: string, from: string, to: string): Promise<void> {
    await this.client.messages.create({ body, from, to });
  }
}
