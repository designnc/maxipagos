export const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .normalize('NFD') // Normaliza el texto y separa los acentos
      .replace(/[\u0300-\u036f]/g, '') // Remueve los acentos
      .replace(/[^a-z0-9 ]/g, '') // Elimina caracteres especiales
      .trim()
      .replace(/\s+/g, '-'); // Reemplaza espacios por guiones
  };
  