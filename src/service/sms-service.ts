export interface SmsService {
  send(body: string, from: string, to: string): Promise<void>;
}
