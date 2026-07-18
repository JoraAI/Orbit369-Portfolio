export type ClassValue = string | number | null | boolean | undefined | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (val: ClassValue) => {
    if (!val) return;
    if (Array.isArray(val)) {
      val.forEach(walk);
      return;
    }
    out.push(String(val));
  };
  walk(inputs as unknown as ClassValue);
  return out.join(' ');
}