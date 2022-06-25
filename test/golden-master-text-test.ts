import { Item } from "../app/Item";
import { GildedRose } from "../app/gilded-rose";

const items = [
  new Item({ name: "+5 Dexterity Vest", quality: 10, sellIn: 20 }), //
  new Item({ name: "Aged Brie", quality: 2, sellIn: 0, isCurated: true }), //
  new Item({ name: "Elixir of the Mongoose", quality: 5, sellIn: 7 }), //
  new Item({
    name: "Sulfuras, Hand of Ragnaros",
    quality: 0,
    sellIn: 80,
    isLegendary: true,
  }), //
  new Item({
    name: "Sulfuras, Hand of Ragnaros",
    quality: -1,
    sellIn: 80,
    isLegendary: true,
  }),
  new Item({
    name: "Backstage passes to a TAFKAL80ETC concert",
    quality: 49,
    sellIn: 20,
    expires: true,
  }),
  new Item({
    name: "Backstage passes to a TAFKAL80ETC concert",
    quality: 49,
    sellIn: 9,
    expires: true,
  }),
  new Item({
    name: "Backstage passes to a TAFKAL80ETC concert",
    quality: 49,
    sellIn: 5,
    expires: true,
  }),
  new Item({
    name: "Backstage passes to a TAFKAL80ETC concert",
    quality: 49,
    sellIn: 0,
    expires: true,
  }),
  // this conjured item does not work properly yet
  new Item({ name: "Conjured Mana Cake", quality: 3, sellIn: 6 }),
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  items.forEach((element) => {
    console.log(
      element.name + " Q:" + element.quality + " S:" + element.sellIn
    );
  });
  gildedRose.updateQuality();
}
