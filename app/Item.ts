export class Item {
  name: string;
  sellIn: number;
  quality: number;
  isCurated?: boolean;
  isLegendary?: boolean;
  expires?: boolean;
  private degradation = 1;

  constructor({
    name,
    sellIn,
    quality,
    isCurated = false,
    isLegendary = false,
    expires = false,
  }) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.isCurated = isCurated;
    this.isLegendary = isLegendary;
    this.expires = expires;
  }
  public passOneDay() {
    if (this.sellIn < 0) this.degradation = 2;
    if (this.isLegendary) return;
    if (this.expires) {
      if (this.sellIn <= 0) {
        this.quality = 0;
      } else if (this.sellIn <= 3) {
        this.quality = this.quality + 3;
      } else if (this.sellIn <= 10) {
        this.quality = this.quality + 2;
      } else {
        this.quality++;
      }
      if (this.quality > 50) {
        this.quality = 50;
      }
      this.sellIn--;
      return;
    }

    if (this.isCurated) {
      this.quality++;
      if (this.quality > 50) this.quality = 50;
      this.sellIn--;
      return;
    }
    this.quality = this.quality - this.degradation;
    if (this.quality < 0) this.quality = 0;
    this.sellIn--;
    return;
  }
}
