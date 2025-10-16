'use client';

import React from 'react';
import type { Doctor } from '@/types';
import { getAppointmentsByDoctorAndDateRange } from '@/data/mockData';
import { AppointmentCard } from './ui/AppointmentCard';

interface WeekViewProps {
  doctor: Doctor;
  startDate: Date; // Monday of the week
}

export function WeekView({ doctor, startDate }: WeekViewProps) {
  // 6 days ka week array (Monday to Saturday)
  const days = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    return d;
  });

  // Time slots 8:00 - 17:30, 30 minute interval
  const slots: string[] = [];
  for (let h = 8; h < 18; h++) {
    slots.push(`${h.toString().padStart(2, '0')}:00`);
    slots.push(`${h.toString().padStart(2, '0')}:30`);
  }

  return (
    <div className="p-2">
      <h2 className="text-lg font-bold mb-2">
        {doctor.name} - {doctor.specialty.replace('-', ' ')}
      </h2>

      <div className="grid grid-cols-7 border border-gray-300">
        {/* Header row */}
        {days.map((day) => (
          <div
            key={day.toDateString()}
            className="border-b border-r p-1 text-center font-semibold bg-gray-100 text-[12px]"
          >
            {day.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
          </div>
        ))}

        {/* Slots */}
        {slots.map((slot) =>
          days.map((day) => {
            const appointments = getAppointmentsByDoctorAndDateRange(doctor.id, day, day);
            const slotAppointments = appointments.filter((apt) => {
              const aptHourMin = new Date(apt.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
              return aptHourMin === slot;
            });

            return (
              <div
                key={day.toDateString() + slot}
                className="border-b border-r p-0.5 min-h-[40px] flex flex-col"
              >
                <div className="text-[10px] text-gray-600 mb-0.5">{slot}</div>
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
