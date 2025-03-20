export const defaultFillPatterns = [
    // Diagonal stripes (right)
    'M -2 -2 L 12 12 M -12 -2 L 2 12 M -2 -12 L 12 2',

    // Diagonal stripes (left)
    'M -2 12 L 12 -2 M -12 12 L 2 -2 M -2 22 L 12 8',

    // Vertical stripes
    'M 5 0 L 5 10',

    // Horizontal stripes
    'M 0 5 L 10 5',

    // Grid (Crosshatch)
    'M 0 5 L 10 5 M 5 0 L 5 10',

    // Dots
    'M 2,2 h1 v1 h-1 z M 7,7 h1 v1 h-1 z',

    // Waves
    'M 0 5 Q 2.5 0, 5 5 T 10 5',

    // Diamonds
    'M 5 0 L 10 5 L 5 10 L 0 5 Z',

    // Crosses
    'M 2 5 L 8 5 M 5 2 L 5 8',

    // Thiccc bars
    'M 0 2 L 10 2 M 0 8 L 10 8',

    // Triangles
    'M 0 10 L 5 0 L 10 10 Z',

    // Concentric circles
    'M 5,5 m -3,0 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0',
];