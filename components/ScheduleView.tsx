'use client';

import React, { useState } from 'react';
import CalendarViewComponent from './CalendarView';
import { WeekView } from './WeekView';
import { getDoctorById } from '@/data/mockData';
import type { CalendarView, CalendarView as ViewType } from '@/types';
import type { Doctor } from '@/types';
import { AppointmentCard } from './ui/AppointmentCard';
import { DayView } from './DayView';
import { getAppointmentsByDoctorAndDate } from '@/data/mockData';
import { getAppointmentsByDoctorAndDateRange } from '@/data/mockData';
import { appointmentService } from '@/services/appointmentService';
import type { Appointment } from '@/types';
import type { Patient } from '@/types';
import { MOCK_PATIENTS } from '@/data/mockData';
import { MOCK_APPOINTMENTS } from '@/data/mockData';
import { MOCK_DOCTORS } from '@/data/mockData';

interface ScheduleViewProps {
  selectedDoctorId: string | null;
  selectedDate: Date;
  view: CalendarView;
  onDoctorChange: (id: string) => void;
  onDateChange: (date: Date) => void;
  onViewChange: (view: CalendarView) => void;
}

export default function SchedulePage() {
  const [selectedDoctorId, setSelectedDoctorId] = useState(MOCK_DOCTORS[0].id);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState<ViewType>('day'); // 'day' or 'week'

  const doctor = getDoctorById(selectedDoctorId);

  if (!doctor) return <div>Doctor not found!</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Schedule</h1>

      {/* Doctor selection */}
      <div className="mb-4 flex gap-4 items-center">
        <label className="font-semibold">Select Doctor:</label>
        <select
          value={selectedDoctorId}
          onChange={(e) => setSelectedDoctorId(e.target.value)}
          className="border p-1 rounded"
        >
          {MOCK_DOCTORS.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name} ({doc.specialty})
            </option>
          ))}
        </select>

        {/* Date picker */}
        <label className="font-semibold">Select Date:</label>
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="border p-1 rounded"
        />

        {/* View toggle */}
        <div className="ml-auto">
          <button
            onClick={() => setView('day')}
            className={`px-2 py-1 border rounded-l ${view === 'day' ? 'bg-blue-500 text-white' : ''}`}
          >
            Day
          </button>
          <button
            onClick={() => setView('week')}
            className={`px-2 py-1 border rounded-r ${view === 'week' ? 'bg-blue-500 text-white' : ''}`}
          >
            Week
          </button>
        </div>
      </div>

      {/* Calendar / Week View */}
      <div>
        {view === 'day' ? (
          <CalendarViewComponent
            doctor={doctor}
            date={selectedDate}
            view="day"
            onDateChange={setSelectedDate}
          />
        ) : (
          <WeekView doctor={doctor} startDate={getMonday(selectedDate)} />
        )}
      </div>
    </div>
  );
}

/**
 * Helper to get Monday of current week based on any date
 */
function getMonday(date: Date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when Sunday
  return new Date(d.setDate(diff));
}
