//Exapmle 01
enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
  }
  
  const today: Days = Days.Wednesday;
  
//   console.log(`Today is ${Days[today]}`);

  //Example 02
  enum Directions {
    up,
    down,
    right,
    left,
  }
  
  const direction: Directions = Directions.left;
  
  console.log(`Go ${Directions[direction]}`);
  