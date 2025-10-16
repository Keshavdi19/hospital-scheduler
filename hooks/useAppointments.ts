// hooks/useAppointments.ts
import { useState, useEffect } from 'react';
import { appointmentService } from '@/services/appointmentService';
import type { Appointment } from '@/types';

export function useAppointments(doctorId: string, date?: Date, endDate?: Date) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    let data: Appointment[] = [];
    if (doctorId) {
      if (date && endDate) {
        // Week view
        data = appointmentService.getAppointmentsByDoctorAndDateRange(doctorId, date, endDate);
      } else if (date) {
        // Day view
        data = appointmentService.getAppointmentsByDoctorAndDate(doctorId, date);
      } else {
        // All appointments of doctor
        data = appointmentService.getAppointmentsByDoctor(doctorId);
      }
    }
    setAppointments(data);
  }, [doctorId, date, endDate]);

  return appointments;
}
