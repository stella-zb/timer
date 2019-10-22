// work with Michelle
const time = process.argv.slice(2);
for (const input of time) {
  if (input > 0) {
    setTimeout (() => {
      process.stdout.write('\x07');
    }, input*1000);
  }
}

