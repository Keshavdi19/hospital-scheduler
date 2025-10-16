'use client';

import React from 'react';
import { APPOINTMENT_TYPE_CONFIG, type Appointment, type AppointmentType } from '@/types';
import { MOCK_PATIENTS } from '@/data/mockData';

interface AppointmentCardProps {
  appointment: Appointment;
  compact?: boolean; // optional for week view
}

export function AppointmentCard({ appointment, compact = false }: AppointmentCardProps) {
  // Appointment type ke hisaab se color
  const color = APPOINTMENT_TYPE_CONFIG[appointment.type as AppointmentType]?.color || '#ccc';

  // Patient ka name
  const patient = MOCK_PATIENTS.find(p => p.id === appointment.patientId);

  return (
    <div
      className={`rounded mb-1 text-white font-semibold overflow-hidden ${
        compact ? 'text-[10px] p-0.5' : 'text-xs p-1'
      }`}
      style={{ backgroundColor: color }}
    >
      <div className="truncate">{patient?.name || appointment.patientId}</div>
      {!compact && (
        <div className="mt-0.5">
          <div className="capitalize">{appointment.type.replace('-', ' ')}</div>
          <div className="text-[10px] mt-0.5">
            {new Date(appointment.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} -{' '}
            {new Date(appointment.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
          </div>
        </div>
      )}
    </div>
  );
}
