// types
import { Event } from '@/types/entities/events';

export async function getAllEvents(): Promise<Event[]> {
  const response = await fetch(process.env.NEXT_PUBLIC_EVENTS_API || '');
  const rawData = await response.json();

  const events: Event[] = [];

  for (const id in rawData) events.push({ id, ...rawData[id] });

  return events;
}

export async function getFeaturedEvents(): Promise<Event[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
