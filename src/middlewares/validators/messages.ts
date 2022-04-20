export const minLength = (value: string, length: number) => `${value} debe contener minimo ${length} caracteres.`;
export const maxLength = (value: string, length: number) => `${value} debe contener maximo ${length} caracteres.`;
export const string = (value: string) => `${value} debe ser un texto.`;
export const int = (value: string) => `${value} debe ser un entero.`;
export const used = (value: string) => `Este ${value} ya esta en uso.`;
