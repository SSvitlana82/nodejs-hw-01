import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const readContacts = await fs.readFile(PATH_DB);
    const json = readContacts.toString('utf-8');
    const contactsDb = JSON.parse(json);
    return contactsDb;
  } catch (error) {
    console.error('Помилка запису у файл:', error);
  }
};

console.log(await getAllContacts());
