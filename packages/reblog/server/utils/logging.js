const chalk = require('chalk');
const log = console.log;

const info = (msg) => log(chalk.green('[info] ' + msg));
const error = (msg) => log(chalk.red('[info] ' + msg));
const warn = (msg) => log(chalk.yellow('[info] ' + msg));
const debug = (msg, component) => {
    const printDebug = require('debug')(`${process.env.NAMESPACE || 'reblog'}:${component || ''}`);
    printDebug((chalk.blue('[debug] ' + msg)));
}

module.exports = {
    info,
    error,
    warn,
    debug,
}