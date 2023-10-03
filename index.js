// Implementing the saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Implementing the mondayWork function
  function mondayWork(work = "go to the office") {
    return `On Monday, I need to ${work}.`;
  }
  
  // Implementing the wrapAdjective function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage
  const saturdayActivity = saturdayFun();
  console.log(saturdayActivity); // Output: "This Saturday, I want to roller-skate!"
  
  const customSaturdayActivity = saturdayFun("play tennis");
  console.log(customSaturdayActivity); // Output: "This Saturday, I want to play tennis!"
  
  const mondayTask = mondayWork();
  console.log(mondayTask); // Output: "On Monday, I need to go to the office!"
  
  const customMondayTask = mondayWork("work from home");
  console.log(customMondayTask); // Output: "On Monday, I need to work from home!"
  
  const wrapStar = wrapAdjective();
  console.log(wrapStar("a dedicated programmer")); // Output: "You are *a dedicated programmer*!"
  
  const wrapExclamation = wrapAdjective("!!!");
  console.log(wrapExclamation("an amazing chef")); // Output: "You are !!!an amazing chef!!!"
  
