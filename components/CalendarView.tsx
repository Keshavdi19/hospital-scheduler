'use client';

import React from 'react';
import type { Doctor, CalendarView } from '@/types';
import { getAppointmentsByDoctorAndDate } from '@/data/mockData';
import { AppointmentCard } from './ui/AppointmentCard';

interface CalendarViewProps {
  doctor: Doctor;
  date: Date;
  view: CalendarView; // 'day' or 'week'
  onDateChange: (date: Date) => void;
}

const hours = Array.from({ length: 10 }, (_, i) => 8 + i); // 8 AM to 17 PM

export default function CalendarViewComponent({
  doctor,
  date,
  view,
  onDateChange,
}: CalendarViewProps) {
  // Generate days for week view (Monday to Saturday)
  const weekDays = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(date);
    d.setDate(d.getDate() - d.getDay() + 1 + i); // Monday + i
    return d;
  });

  if (view === 'day') {
    const appointments = getAppointmentsByDoctorAndDate(doctor.id, date);

    return (
      <div>
        <h2 className="text-lg font-bold mb-2">
          {doctor.name} - {doctor.specialty} ({date.toDateString()})
        </h2>

        <div className="grid grid-cols-1 border">
          {hours.map((h) => {
            const hourAppointments = appointments.filter((apt) => {
              const aptHour = new Date(apt.startTime).getHours();
              return aptHour === h;
            });

            return (
              <div key={h} className="border p-2 min-h-[50px]">
                <div className="text-xs font-semibold">{h}:00</div>
                {hourAppointments.map((apt) => (
                  <AppointmentCard key={apt.id} appointment={apt} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Week view
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">
        {doctor.name} - {doctor.specialty} (Week View)
      </h2>

      <div className="grid grid-cols-7 border">
        {/* Header */}
        {weekDays.map((d) => (
          <div key={d.toDateString()} className="border p-1 text-center font-semibold">
            {d.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
          </div>
        ))}

        {/* Time slots */}
        {hours.map((h) =>
          weekDays.map((d) => {
            const appointments = getAppointmentsByDoctorAndDate(doctor.id, d);
            const slotAppointments = appointments.filter(
              (apt) => new Date(apt.startTime).getHours() === h
            );

            return (
              <div key={d.toDateString() + h} className="border p-1 min-h-[40px]">
                <div className="text-xs font-semibold">{h}:00</div>
                {slotAppointments.map((apt) => (
                  <AppointmentCard key={apt.id} appointment={apt} compact />
                ))}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
