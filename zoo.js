const Elephant = 5;
const Tiger = 2;
const Panda = 4;

const Animals = Elephant + Tiger + Panda;

console.log(`Total animals in the zoo: ${Animals}`);

let zooOpen = true;

zooOpen = !zooOpen;

if (zooOpen === true)
{
    console.log("Buy Tickets before entering!")
}
else
{
    console.log("Go Away, We are Closed!")
}