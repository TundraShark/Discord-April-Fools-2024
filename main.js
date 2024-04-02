async function Sleep(milliseconds) {await new Promise((done) => {return setTimeout(done, milliseconds);});}
const nameMap = JSON.parse('{"1214340999644446720":"Buster Blade","1214340999644446721":"Cute Plushie","1214340999644446722":"Wump Shell","1214340999644446723":"Speed Boost","1214340999644446724":"⮕⬆⬇⮕⬆⬇","1214340999644446725":"Power Helmet","1214340999644446726":"Quack!!","1214340999644446727":"OHHHHH BANANA","1214340999644446728":"Dream Hammer"}');
const items = {};

async function Main () {
  while (true) {
    const response = await PASTE_THE_CLIPBOARD_HERE

    const body = await response.json();

    const itemName = nameMap[body.opened_item];
    if (itemName in items) {
      items[itemName]++;
    } else {
      items[itemName] = 1;
    }

    console.log(items);
    await Sleep(5000);
  }
}

Main();
