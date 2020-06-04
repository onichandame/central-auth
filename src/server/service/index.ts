import { connection } from "../nats"

export const subject = process.env.AUTH_SUBJECT || "nats-auth"

export const service = async () => {
  const nc = await connection
  nc.subscribe(subject, async _ => {})
}
