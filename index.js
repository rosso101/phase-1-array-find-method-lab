// code your solution here
function superbowlWin(record) {
    const winningYearObject = record.find(game => game.result === "W");
    return winningYearObject ? winningYearObject.year : undefined;
  }

  const superBowlRecords = [
    { year: 2020, result: "L" },
    { year: 2021, result: "W" },
    { year: 2022, result: "L" },
  ];
  
  const winningYear = superbowlWin(superBowlRecords);
  console.log(winningYear); // Output: 2021
    