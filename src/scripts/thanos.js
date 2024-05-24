import { PATH_DB } from '../constants/contacts.js';

import fs from 'fs/promises';
export const thanos = async () => {
  try {
    const readContacts = await fs.readFile(PATH_DB);
    const json = readContacts.toString('utf-8');
    const contactsDb = JSON.parse(json);
    const updatecontactsDb = contactsDb.filter(() => {
      return Math.round(Math.random());
    });
    const jsonData = JSON.stringify(updatecontactsDb);
    await fs.writeFile(PATH_DB, jsonData, 'utf-8');
  } catch (error) {
    console.error('Помилка запису у файл:', error);
  }
};

await thanos();
