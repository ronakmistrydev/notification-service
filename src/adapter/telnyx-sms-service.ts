import telnyx from 'telnyx';

export class TelnyxSmsService {
  private client: any;

  constructor(apiKey: string) {
    this.client = telnyx(apiKey);
  }

  async send(body: string, from: string, to: string): Promise<void> {
    this.client.message.create({ to, from, text: body });
  }
}
