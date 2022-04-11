export interface WhatsappService {
  send(body: string, from: string, to: string): Promise<void>;
}
