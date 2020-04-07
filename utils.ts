export default class Color {
  public r: number;
  public g: number;
  public b: number;

  constructor(r, g, b) {
    this.r =  r;
    this.g = g;
    this.b = b;
  }

  public static fromHex(hex: string): Color {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return null;
    }
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return new Color(r, g, b);
  }

  public toHex(): string {
    return '#'+ [this.r, this.g, this.b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex
    }).join('');
  }
}