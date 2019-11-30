#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'bold'
}

const data = {
  name: chalk.magenta.bold('               Kirankumar Ambati'),
  work: chalk.cyan.bold('Senior Software Engineer @') + chalk.magenta.bold(' ValueLabs'),
  twitter: chalk.cyan.bold('https://twitter.com/') + chalk.magenta.bold('_sudo_user'),
  github: chalk.cyan.bold('https://github.com/') + chalk.magenta.bold('kirankumarambati'),
  linkedin: chalk.cyan.bold('https://linkedin.com/in/') + chalk.magenta.bold('ambatikirankumar'),
  web: chalk.magenta.bold('https://kirankumarambati.me'),
  npx: chalk.bold('npx kirankumarambati'),
  labelWork: chalk.yellow.bold('      Work:'),
  labelTwitter: chalk.yellow.bold('   Twitter:'),
  labelGitHub: chalk.yellow.bold('    GitHub:'),
  labelLinkedIn: chalk.yellow.bold('  LinkedIn:'),
  labelWeb: chalk.yellow.bold('       Web:'),
  labelCard: chalk.yellow.bold('      Card:')
}

const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.magenta.bold(boxen(output, options)))