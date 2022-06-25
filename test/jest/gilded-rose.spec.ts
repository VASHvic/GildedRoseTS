import { GildedRose } from "@/gilded-rose";
import { Item } from "@/Item";

//TODO: Add COnjured Items that decay twice as fast

describe("Gilded Rose", () => {
  it("Should add Aged brie correctly", () => {
    const gildedRose = new GildedRose([
      new Item({ name: "Aged Brie", quality: 2, sellIn: 2, isCurated: true }),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toBe("Aged Brie");
    expect(gildedRose.items[0].quality).toBe(3);
    expect(gildedRose.items[0].sellIn).toBe(1);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(4);
    expect(gildedRose.items[0].sellIn).toBe(0);
  });
  it("Should Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new GildedRose([
      new Item({
        name: "Backstage passes to a TAFKAL80ETC concert",
        quality: 45,
        sellIn: 2,
        expires: true,
      }),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toBe(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(gildedRose.items[0].quality).toBe(48);
    expect(gildedRose.items[0].sellIn).toBe(1);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(50);
    expect(gildedRose.items[0].sellIn).toBe(0);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
    expect(gildedRose.items[0].sellIn).toBe(-1);
  });
  it("Should add Sulfuras correctly", () => {
    const gildedRose = new GildedRose([
      new Item({
        name: "Sulfuras, Hand of Ragnaros",
        quality: 80,
        sellIn: 100,
        isLegendary: true,
      }),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(gildedRose.items[0].quality).toBe(80);
    expect(gildedRose.items[0].sellIn).toBe(100);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(gildedRose.items[0].quality).toBe(80);
    expect(gildedRose.items[0].sellIn).toBe(100);
  });
  it("Should add Sangue & Yasha correctly", () => {
    const gildedRose = new GildedRose([
      new Item({
        name: "Sangue & Yasha",
        quality: 50,
        sellIn: 40,
      }),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toBe("Sangue & Yasha");
    expect(gildedRose.items[0].quality).toBe(49);
    expect(gildedRose.items[0].sellIn).toBe(39);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toBe("Sangue & Yasha");
    expect(gildedRose.items[0].quality).toBe(48);
    expect(gildedRose.items[0].sellIn).toBe(38);
  });
  it("SellIn date passed degrades twice", () => {
    const gildedRose = new GildedRose([
      new Item({
        name: "Gaspacho",
        quality: 5,
        sellIn: 0,
      }),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toBe("Gaspacho");
    expect(gildedRose.items[0].quality).toBe(4);
    expect(gildedRose.items[0].sellIn).toBe(-1);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(2);
    expect(gildedRose.items[0].sellIn).toBe(-2);
  });
  it("QUality of an item is never negative", () => {
    const gildedRose = new GildedRose([
      new Item({
        name: "Dentiles gelaes",
        quality: 0,
        sellIn: 0,
      }),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toBe("Dentiles gelaes");
    expect(gildedRose.items[0].quality).toBe(0);
    expect(gildedRose.items[0].sellIn).toBe(-1);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
    expect(gildedRose.items[0].sellIn).toBe(-2);
  });
});
