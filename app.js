const chalk = require('chalk')
const cowsay = require('cowsay')
const figlet = require('figlet')

console.log(chalk.blue.bold("Full Name: "), chalk.redBright("Yusri Abdi"))
console.log(chalk.blue.bold("NIM (Student ID): "), chalk.redBright("F1D02310098"))

console.log(
    cowsay.say({
        text: chalk.blue(
            "Setiap langkah kecil yang kamu ambil hari ini, \nmembawa kamu lebih dekat pada versi terbaik dari dirimu. \nJangan takut untuk memulai, \nkarena perubahan besar selalu dimulai dari hal kecil."
        ),
        e: "^^",
        T: "U "
    })
);

figlet("YUSRI ABDI", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.cyan(data));
});