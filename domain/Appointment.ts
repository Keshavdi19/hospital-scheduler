// domain/Appointment.ts
import { TimeSlot } from "./TimeSlot";

export function appointmentToSlot(apt: { startTime: string; endTime: string }) {
  return new TimeSlot(new Date(apt.startTime), new Date(apt.endTime));
}
