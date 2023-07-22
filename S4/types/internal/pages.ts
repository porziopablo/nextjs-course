export enum APP_PAGES {
  HOME = '/',
  EVENTS = '/events',
  EVENT_DETAIL = '/events/[eventId]',
  EVENT_FILTER = '/events/[...slug]',
}

export enum API_ROUTES {
  COMMENTS = '/api/events/[eventId]/comments',
  NEWSLETTER = '/api/newsletter',
}

export enum API_PARAMS {
  EVENT_ID = '[eventId]',
}
