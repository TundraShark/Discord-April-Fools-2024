async function Sleep(milliseconds) {await new Promise((done) => {return setTimeout(done, milliseconds);});}
const items = {};

async function Main () {
  while (true) {
    const response = await PASTE_THE_CLIPBOARD_HERE

    const body = await response.json();

    if (body.opened_item in items) {
      items[body.opened_item]++;
    } else {
      items[body.opened_item] = 1;
    }

    console.log(items);
    await Sleep(5000);
  }
}

Main();
