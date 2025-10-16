'use client';

import React from 'react';
import type { Doctor } from '@/types';
import { getAppointmentsByDoctorAndDate } from '@/data/mockData';
import { AppointmentCard } from './ui/AppointmentCard';

interface DayViewProps {
  doctor: Doctor;
  date: Date;
}

export function DayView({ doctor, date }: DayViewProps) {
  const appointments = getAppointmentsByDoctorAndDate(doctor.id, date);

  // Generate 30 min time slots from 8:00 to 18:00
  const slots: string[] = [];
  for (let h = 8; h < 18; h++) {
    slots.push(`${h.toString().padStart(2, '0')}:00`);
    slots.push(`${h.toString().padStart(2, '0')}:30`);
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">
        {doctor.name} - {doctor.specialty}
      </h2>
      <div className="grid grid-cols-6 border">
        {slots.map((slot) => {
          const slotAppointments = appointments.filter((apt) => {
            const aptHourMin = new Date(apt.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return aptHourMin === slot;
          });
          return (
            <div key={slot} className="border p-1 min-h-[40px]">
              <div className="text-xs font-semibold">{slot}</div>
              {slotAppointments.map((apt) => (
                <AppointmentCard key={apt.id} appointment={apt} compact />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
