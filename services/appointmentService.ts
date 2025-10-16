// services/appointmentService.ts
import {
  MOCK_DOCTORS,
  MOCK_PATIENTS,
  MOCK_APPOINTMENTS,
  getDoctorById,
  getPatientById,
  getAppointmentsByDoctor,
  getAppointmentsByDoctorAndDate,
  getAppointmentsByDoctorAndDateRange,
} from '@/data/mockData';
import type { Doctor, Patient, Appointment } from '@/types';

export const appointmentService = {
  // ✅ Get all doctors
  getAllDoctors(): Doctor[] {
    return MOCK_DOCTORS;
  },

  // ✅ Get a single doctor by ID
  getDoctorById(id: string): Doctor | undefined {
    return getDoctorById(id);
  },

  // ✅ Get all patients
  getAllPatients(): Patient[] {
    return MOCK_PATIENTS;
  },

  // ✅ Get single patient by ID
  getPatientById(id: string): Patient | undefined {
    return getPatientById(id);
  },

  // ✅ Get all appointments for a doctor
  getAppointmentsByDoctor(doctorId: string): Appointment[] {
    return getAppointmentsByDoctor(doctorId);
  },

  // ✅ Get appointments for a doctor on a specific date
  getAppointmentsByDoctorAndDate(doctorId: string, date: Date): Appointment[] {
    return getAppointmentsByDoctorAndDate(doctorId, date);
  },

  // ✅ Get appointments for a doctor in a date range (week view)
  getAppointmentsByDoctorAndDateRange(
    doctorId: string,
    startDate: Date,
    endDate: Date
  ): Appointment[] {
    return getAppointmentsByDoctorAndDateRange(doctorId, startDate, endDate);
  },
};
