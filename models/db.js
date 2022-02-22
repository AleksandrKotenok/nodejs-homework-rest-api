const fs = require("fs/promises");
const { join } = require("path");

const contactsPath = join(__dirname, "contacts.json");
const readFile = async () => {
  const result = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(result);
};
const writeFile = async (data) => {
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
};
module.exports = {
  readFile,
  writeFile,
};
