import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const removeAllContacts = async () => {
  try {
    const remove = '[]';
    await fs.writeFile(PATH_DB, remove, 'utf-8');
  } catch (error) {
    console.error('Помилка запису у файл:', error);
  }
};

await removeAllContacts();
