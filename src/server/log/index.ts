import { connection } from "../nats"

const subject = process.env.LOG_SUBJECT || "nats-log"

export const logger = {
  warn: async (msg: string) => {
    const nc = await connection
    nc.publish(subject, msg)
  }
}
