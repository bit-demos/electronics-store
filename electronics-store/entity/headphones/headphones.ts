import {
  Product,
  ProductFromApi
} from '@learn-bit-react/ecommerce.entity.product';

export type PlainHeadphones = {
  availableColors: string[];
} & ProductFromApi;

export class Headphones {
  constructor(
    readonly product: Product,
    /**
     * color of the shoe
     */
    readonly availableColors: string[]
  ) {}

  /**
   * return a serializable shoes object.
   */
  toObject() {
    return {
      ...this.product,
      availableColors: this.availableColors
    };
  }

  /**
   * serialize shoes.
   */
  toString() {
    return JSON.stringify(this.toObject());
  }

  /**
   * factory method for instantiating shoe objects.
   */
  static from(plainHeadphones: PlainHeadphones) {
    const headphones = new Headphones(
      Product.fromApiObject(plainHeadphones),
      plainHeadphones.availableColors
    );
    return headphones;
  }
}
