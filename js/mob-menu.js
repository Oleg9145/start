function calculateTotalSalary(boxesMade, hoursSpent, normalRate, workedHours) {
  if (hoursSpent === 0) {
    return "Час не може дорівнювати нулю!";
  }

  const boxesPerHour = boxesMade / hoursSpent;
  const percentageOfNormal = (boxesPerHour / normalRate) * 100;
  
  let salaryMultiplier = 0;
  if (percentageOfNormal >= 130) {
    salaryMultiplier = 32.5;
  } else if (percentageOfNormal >= 125) {
    salaryMultiplier = 31.5;
  } else if (percentageOfNormal >= 120) {
    salaryMultiplier = 30.5;
  } else if (percentageOfNormal >= 115) {
    salaryMultiplier = 29.5;
  } else if (percentageOfNormal >= 110) {
    salaryMultiplier = 28.5;
  } else if (percentageOfNormal >= 105) {
    salaryMultiplier = 27.5;
  } else if (percentageOfNormal >= 100) {
    salaryMultiplier = 27;
  } else if (percentageOfNormal >= 95) {
    salaryMultiplier = 26;
  } else if (percentageOfNormal >= 90) {
    salaryMultiplier = 25;
  } else if (percentageOfNormal >= 85) {
    salaryMultiplier = 23.5;
  }

  const salaryPerHour = salaryMultiplier;
  const totalSalary = salaryPerHour * workedHours;
  
  return `Ви зробили ${boxesMade} ящиків, що становить приблизно ${boxesPerHour.toFixed(2)} ящиків на годину. Це приблизно ${percentageOfNormal.toFixed(2)}% від норми. Зарплата за годину: ${salaryPerHour.toFixed(2)} годин. Загальна зарплата за години: ${totalSalary.toFixed(2)} злотих.`;
}

const totalBoxes = 1350;  // Загальна кількість ящиків, які ви зробили
const hoursSpent = 8;   // Загальна кількість годин, яку ви витратили
const normalRate = 170;  // Норма: 170 ящиків на годину
const workedHours = 7.75;   // Кількість відпрацьованих годин

const result = calculateTotalSalary(totalBoxes, hoursSpent, normalRate, workedHours);
console.log(result);
