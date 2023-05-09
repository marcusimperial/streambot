import { SlashCommandBuilder } from '@discordjs/builders';

const spaceCommand = new SlashCommandBuilder().setName('pause')
.setDescription('Pauses and plays whatever you are watching :)')

const rewindCommand = new SlashCommandBuilder().setName('rewind')
.setDescription('Rewinds whatever you are watching :)')
.addNumberOption(option => option.setName('count').setDescription('How many times?'))

const forwardCommand = new SlashCommandBuilder().setName('forward')
.setDescription('Forwards whatever you are watching :)')
.addNumberOption(option => option.setName('count').setDescription('How many times?'))

export const space = spaceCommand.toJSON();
export const rewind = rewindCommand.toJSON();
export const forward = forwardCommand.toJSON();