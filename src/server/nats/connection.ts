import { connect as natsConnect, Payload } from "ts-nats"

const url = process.env.NATS_ADDR || "localhost"

const connect = () =>
  natsConnect({ url: `nats://${url}`, payload: Payload.JSON, reconnect: true })

export const connection = connect()
