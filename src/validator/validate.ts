export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^\d{10}$/;
export const postalCodeRegex = /^\d{5}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function isDateInPast(dateString: string): boolean {
  const [day, month, year] = dateString.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  return birthDate < today && (today.getFullYear() - birthDate.getFullYear() > 0 || (today.getFullYear() === birthDate.getFullYear() && today.getMonth() > birthDate.getMonth()) || (today.getFullYear() === birthDate.getFullYear() && today.getMonth() === birthDate.getMonth() && today.getDate() > birthDate.getDate()));
}
