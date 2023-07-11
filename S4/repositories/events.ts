// vendors
import useSWR from 'swr';

// types
import { Event } from '@/types/entities/events';

/*
 * NOTE: since this is not a Firebase course, and we only have a few
 * events, we will retrieve all of them from the API and filter them locally.
 * In a real-world application, we would use a database query to retrieve
 * only the events we need.
 */

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

export async function getEventById(id: string): Promise<Event | null> {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id) || null;
}

export interface DateFilter {
  year: number;
  month: number;
}

export async function getFilteredEvents(dateFilter: DateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  const filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function useFilteredEvents(dateFilter: DateFilter) {
  return useSWR<Event[]>(process.env.NEXT_PUBLIC_EVENTS_API, () =>
    getFilteredEvents(dateFilter)
  );
}
