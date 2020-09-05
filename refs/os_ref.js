const os = require('os');

// платформа
console.log(os.platform())
// архитектура
console.log(os.arch())
// информация о компьютере
console.log(os.cpus())
// свободная память
console.log(os.freemem())
// всего памяти
console.log(os.totalmem())
// корневая директория
console.log(os.homedir())
// время работы системы
console.log(os.uptime())