/**
 * Default time slots for opening hours 12:00 PM to 10:00 PM.
 * 30-min: 12:00, 12:30, ... 21:30 (last slot ends at 10 PM)
 * 60-min: 12:00, 13:00, ... 21:00 (last slot ends at 10 PM)
 */

const OPEN_HOUR = 12;  // 12 PM
const CLOSE_HOUR = 22; // 10 PM

export interface TimeSlotOption {
  value: string;
  label: string;
  enabled: boolean;
}

function timeToDisplay(h: number, m: number): string {
  if (h === 0 && m === 0) return '12:00 AM';
  if (h === 12 && m === 0) return '12:00 PM';
  if (h < 12) return `${h}:${m === 0 ? '00' : m.toString().padStart(2, '0')} AM`;
  return `${h - 12}:${m === 0 ? '00' : m.toString().padStart(2, '0')} PM`;
}

/** 30-min slot: label as "11 AM to 11:30 AM", "11:30 AM to 12 PM", etc. */
export function getDefaultTimeSlots30Min(): TimeSlotOption[] {
  const slots: TimeSlotOption[] = [];
  for (let h = OPEN_HOUR; h < CLOSE_HOUR; h++) {
    slots.push({
      value: `${h.toString().padStart(2, '0')}:00`,
      label: `${timeToDisplay(h, 0)} to ${timeToDisplay(h, 30)}`,
      enabled: true,
    });
    slots.push({
      value: `${h.toString().padStart(2, '0')}:30`,
      label: `${timeToDisplay(h, 30)} to ${timeToDisplay(h + 1, 0)}`,
      enabled: true,
    });
  }
  return slots;
}

/** 60-min slot: label as "11 AM to 12 PM", "12 PM to 1 PM", etc. */
export function getDefaultTimeSlots60Min(): TimeSlotOption[] {
  const slots: TimeSlotOption[] = [];
  for (let h = OPEN_HOUR; h < CLOSE_HOUR; h++) {
    const endH = h + 1;
    const endDisplay = timeToDisplay(endH, 0);
    slots.push({
      value: `${h.toString().padStart(2, '0')}:00`,
      label: `${timeToDisplay(h, 0)} to ${endDisplay}`,
      enabled: true,
    });
  }
  return slots;
}
