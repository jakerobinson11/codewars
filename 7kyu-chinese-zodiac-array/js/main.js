//Given a year, return the element and animal that year represents ("Element Animal").

const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];

function chineseZodiac(year){
  //Starting year of 1984
  const referenceYear = 1984;
  //Calculate difference between input and reference year
  const yearDifference = year - referenceYear;
  //Calculate animal index
  const animalIndex = (yearDifference % 12 + 12) % 12;
  //Calculate element index
  const elementIndex = Math.floor((yearDifference % 10 + 10) / 2 % 5);

  return `${elements[elementIndex]} ${animals[animalIndex]}`
}

//Test
console.log(chineseZodiac(1988));
