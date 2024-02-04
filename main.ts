// When a Rectangle object is created, it should be initialized with width and height attributes. The class should also contain the following methods:

class Rectangle {
  width: number
  height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  print(): string {
    return `Rectangle(width=${this.width}, height=${this.height})`
  }

  set_width(width: number): void {
    this.width = width
  }
  set_height(height: number): void {
    this.height = height
  }
  get_area(): number {
    return this.width * this.height
  }
  get_perimeter(): number {
    return 2 * (this.width + this.height)
  }
  get_diagonal(): number {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2))
  }
  get_picture(): string {
    if (50 < this.width || 50 < this.height) return 'Too big for picture'

    const line = `${'*'.repeat(this.width)}\n`
    let out = ''

    for (let i = 0; i < this.height; i++) {
      out += line
    }

    return out
  }

  get_amount_inside(rect: Rectangle): number {
    return Math.floor(this.get_area() / rect.get_area())
  }
}

class Square extends Rectangle {
  side: number
  constructor(side: number) {
    super(side, side)
    this.side = side
  }

  set_side(side: number): void {
    this.side = side
    this.width = side
    this.height = side
  }
  set_height(height: number): void {
    this.side = height
    this.width = height
    this.height = height
  }
  set_width(width: number): void {
    this.side = width
    this.width = width
    this.height = width
  }
}

const rect = new Rectangle(10, 5)
console.log(rect.get_area())
rect.set_height(3)
console.log(rect.get_perimeter())
console.log(rect.print())
console.log(rect.get_picture())

const sq = new Square(9)
console.log(sq.get_area())
sq.set_side(4)
console.log(sq.get_diagonal())
console.log(sq.print())
console.log(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
console.log(rect.get_amount_inside(sq))
