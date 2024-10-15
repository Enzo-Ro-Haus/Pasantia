//Modulos nativos de NodeJS que dan acceso al so, al explorador de archivos y a internet-
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Info del OS');
console.log('--------------------')
console.log(`Nombre del OS: ${platform()}`)
console.log(`Ver del OS: ${release()}`)
console.log(`Arq: ${arch()}`)
console.log(`CPUs: ${cpus()}`)
console.log(`Free Memory: ${freemem() / 1024/ 1024}`)
console.log(`Total Memory: ${totalmem() /1024 / 1024}`)
console.log(`PC time on: ${uptime() / 60}`)
