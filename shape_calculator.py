class Rectangle:
  def __init__(self, width, height):
    self.width = width
    self.height = height

  def __str__(self):
    return f'Rectangle(width={self.width}, height={self.height})'

  def set_width(self, width):
    self.width = width

  def set_height(self, height):
    self.height = height

  def get_area(self):
    return self.width * self.height 
  
  def get_perimeter(self):
    return 2 * (self.width + self.height)
  
  def get_diagonal(self):
    return (self.width ** 2 + self.height ** 2) ** 0.5

  def get_picture(self):
    if 50 < self.width or 50 < self.height: 
      return 'Too big for picture.'

    line = '*' * self.width + '\n'
    return line * self.height
  
  def get_amount_inside(self, rect):
    return self.get_area() // rect.get_area()
  
class Square(Rectangle):
  def __init__(self, side):
    super().__init__(side, side)
    self.side = side

  def __str__(self):
    return f'Square(side={self.side})'

  def set_side(self, side):
    self.side = side
    self.width = side
    self.height = side

  def set_width(self, width):
    self.side = width
    self.width = width
    self.height = width
    
  def set_width(self, width):
    self.side = width
    self.width = width
    self.height = width
