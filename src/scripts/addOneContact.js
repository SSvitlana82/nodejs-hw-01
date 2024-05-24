import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const readContact = await fs.readFile(PATH_DB);
    const json = readContact.toString('utf-8');
    const contactsDb = JSON.parse(json);
    const contact = createFakeContact();
    contactsDb.push(contact);
    const jsonData = JSON.stringify(contactsDb);

    await fs.writeFile(PATH_DB, jsonData, 'utf-8');
  } catch (error) {
    console.error('Помилка запісу у файл:', error);
  }
};

await addOneContact();
