// types.ts

/**
 * Working hours for a doctor on a specific day
 */
export type WorkingHours = {
  start: string; // "HH:MM" 24-hour format
  end: string;   // "HH:MM" 24-hour format
  // other type exports

 
};


/**
 * Doctor type
 */
export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  email: string;
  phone: string;
  
  workingHours: {
    monday?: WorkingHours;
    tuesday?: WorkingHours;
    wednesday?: WorkingHours;
    thursday?: WorkingHours;
    friday?: WorkingHours;
    saturday?: WorkingHours;
    sunday?: WorkingHours;
  };
};

/**
 * Patient type
 */
export type Patient = {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string; // "YYYY-MM-DD"
};

/**
 * Appointment type
 */
export type AppointmentType =
  | 'checkup'
  | 'consultation'
  | 'procedure'
  | 'follow-up';

/**
 * Appointment status
 */
export type AppointmentStatus = 'scheduled' | 'completed' | 'cancelled';

/**
 * Appointment type
 */
export type Appointment = {
  id: string;
  doctorId: string;
  patientId: string;
  type: AppointmentType;
  startTime: string; // ISO string
  endTime: string;   // ISO string
  status: AppointmentStatus;
};
// types.ts (ya alag file me define kar sakte ho)


export const APPOINTMENT_TYPE_CONFIG: Record<AppointmentType, { color: string }> = {
  checkup: { color: '#4CAF50' },       // green
  consultation: { color: '#2196F3' },  // blue
  'follow-up': { color: '#FF9800' },   // orange
  procedure: { color: '#F44336' },     // red
};
export type CalendarView = 'day' | 'week';
