// const fs = require("fs").promises;
const chalk = require("chalk");
const { Command } = require("commander");
const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require("./contacts.js");
const log = console.log;
log(chalk.black.bgRed.bold("Hello world!"));

const program = new Command();
program
  .requiredOption("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      // log.table(contacts);
      break;

    case "get":
      const contactById = await getContactById(id);
      if (contactById) {
        log(chalk.black.bgGreen(`Contact found: ${id} `));
        console.log(contactById);
      } else {
        log(chalk.black.bgRed(`Contact not found `));
      }
      break;

    case "add":
      const contact = await addContact(name, email, phone);
      log(chalk.green.bgCyan(`Add new contact: ${contact}`));
      break;

    case "remove":
      const removeById = await removeContact(id);
      if (removeById) {
        log(chalk.black.bgGreen(`Contact deleete: ${id} `));
        console.table(removeById);
      } else { 
           log(chalk.black.bgRed(`Сontact does not exist `));
      }
    break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv).then(() => log(chalk.white.bgGreen("Operation success")));
