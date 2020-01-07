import EventData from '../data/event.json'

export default function contextFactory() {
  // TODO: Manage Language

  const domain = {event: EventData}

  return Promise.resolve({
    domain
  })
}
