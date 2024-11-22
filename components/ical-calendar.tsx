'use client'

import React, { useState, useEffect } from 'react'
import { addDays, format, isSameDay, parseISO } from 'date-fns'
import ICAL from 'ical.js'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

interface ICalEvent {
    id: string
    title: string
    start: Date
    end: Date
    description?: string
    location?: string
}

// Function to fetch and parse iCal feed
async function fetchAndParseICal(url: string): Promise<ICalEvent[]> {
    const response = await fetch(url)
    const data = await response.text()
    const jcalData = ICAL.parse(data)
    const comp = new ICAL.Component(jcalData)
    return comp.getAllSubcomponents('vevent').map(vevent => {
        const event = new ICAL.Event(vevent)
        return {
            id: event.uid,
            title: event.summary,
            start: event.startDate.toJSDate(),
            end: event.endDate.toJSDate(),
            description: event.description,
            location: event.location
        }
    })
}

export function IcalCalendar() {
    const [events, setEvents] = useState<ICalEvent[]>([])
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [selectedEvents, setSelectedEvents] = useState<ICalEvent[]>([])

    useEffect(() => {
        fetchAndParseICal('https://hopeforest.breezechms.com/events/feed/MjAxMzA4LzA%3D')
            .then(parsedEvents => setEvents(parsedEvents))
            .catch(error => console.error('Error fetching or parsing iCal feed:', error))
    }, [])

    useEffect(() => {
        // Update selected events when date changes
        const dayEvents = events.filter(event =>
            isSameDay(event.start, selectedDate)
        )
        setSelectedEvents(dayEvents)
    }, [selectedDate, events])

    // Create an array of dates that have events
    const eventDates = events.map(event => event.start)

    return (
        <div className="flex p-4 gap-4 max-w-[880px] mx-auto md:flex-row flex-col">
            <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className=""
                modifiers={{
                    event: (date) => eventDates.some(eventDate => isSameDay(eventDate, date))
                }}
                modifiersClassNames={{
                    event: "relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-1 before:bg-primary before:rounded-full"
                }}
            />

            <Card className="w-full">
                <CardHeader>
                    <div className='w-full flex justify-between'>
                        <CardTitle>Events for {format(selectedDate, 'MMMM d, yyyy')}</CardTitle>
                        <a href='/events/christmas-at-hope-forest' className='pb-2 text-primary'>See More</a>
                    </div>
                </CardHeader>

                <CardContent>
                    <ScrollArea className="h-96">
                        {selectedEvents.length > 0 ? (
                            <div className="space-y-4">
                                {selectedEvents.map(event => (
                                    <div key={event.id} className="space-y-2">
                                        <div className="flex sm:items-center sm:gap-2 gap-0 sm:flex-row flex-col items-start">
                                            <h3 className="text-lg font-semibold">{event.title}</h3>
                                            <Badge variant="secondary">
                                                {format(event.start, 'h:mm a')} - {format(event.end, 'h:mm a')}
                                            </Badge>
                                        </div>
                                        {event.location && (
                                            <p className="text-sm text-muted-foreground">
                                                <strong>Location:</strong> {event.location}
                                            </p>
                                        )}
                                        {event.description && (
                                            <div className="text-sm">
                                                <strong>Description:</strong>
                                                <p className="whitespace-pre-wrap text-muted-foreground">{event.description}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <CardDescription>No events scheduled for this day</CardDescription>
                        )}
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}