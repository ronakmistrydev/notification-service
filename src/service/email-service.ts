export interface EmailService {
  send(body: string, from: string, to: string): Promise<void>;
}
