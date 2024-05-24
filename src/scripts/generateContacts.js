import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    //   const contacts = [];
    const readContact = await fs.readFile(PATH_DB);
    const json = readContact.toString('utf-8');
    const contactsDb = JSON.parse(json);
    for (let i = 0; i < number; i++) {
      const user = createFakeContact();
      contactsDb.push(user);
    }
    const jsonData = JSON.stringify(contactsDb);
    console.log(jsonData);

    await fs.writeFile(PATH_DB, jsonData, 'utf8');
  } catch (error) {
    console.error('Помилка запису у файл:', error);
  }
};
await generateContacts(5);
