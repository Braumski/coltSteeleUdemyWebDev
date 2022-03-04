
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 85)

// Returns false because not every score is above or equal to 85

const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

words.some(word => word.length > 6);

// Returns true because there is at least a single word that has
//  a length of more than 6 "cupcake"