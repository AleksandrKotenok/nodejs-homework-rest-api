const { randomUUID } = require("crypto");
const { readFile, writeFile } = require("./db");

const listContacts = async () => {
  return await readFile();
};

const getContactById = async (contactId) => {
  const contacts = await readFile();
  const [contact] = contacts.filter((contact) => contact.id === contactId);
  return contact;
};

const addContact = async (body) => {
  const contacts = await readFile();
  const newContact = {
    id: randomUUID(),
    ...body,
  };
  contacts.push(newContact);
  await writeFile(contacts);
  return newContact;
};

const removeContact = async (contactId) => {
  const contacts = await readFile();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index !== -1) {
    const [contact] = contacts.splice(index, 1);
    await writeFile(contacts);
    return contact;
  }
  return null;
};

const updateContact = async (contactId, body) => {
  const contacts = await readFile();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...body };
    await writeFile(contacts);
    return contacts[index];
  }
  return null;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
