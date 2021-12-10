const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const readContacts = async () => {
  const contactsOll = await fs.readFile(
    path.join(__dirname, "db", "contacts.json"),
    "utf8"
  );
  const result = JSON.parse(contactsOll);
  return result;
};

const listContacts = async () => {
  return await readContacts();
  // ...твой код
};

const getContactById = async (contactId) => {
  const contacts = await readContacts();
  const [contact] = contacts.filter((contact) => contact.id === contactId);
  return contact;
};

const removeContact = async (contactId) => {
  // ...твой код
};

const addContact = async (name, email, phone) => {
  const contacts = await readContacts();
  const addContacts = { name, email, phone, id: crypto.randomUUID() };
  contacts.push(addContacts);
  await fs.writeFile(
    path.join(__dirname, "db", "contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
  return addContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
