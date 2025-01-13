// const values = [23, 34, 4, 5];
// const valuesCopy = [...values];

// console.log('values:', values);
// console.log('valuesCopy:', valuesCopy);
//* -----------------------------------------------------------------------------
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// // const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
// const allTemps = [100, ...lastWeekTemps, 200, ...currentTemps, 300, ...nextWeekTemps, 400];

// console.log('lastWeekTemps:', lastWeekTemps);
// console.log('currentTemps:', currentTemps);
// console.log('nextWeekTemps:', nextWeekTemps);
// console.log('allTemps:', allTemps);
//* -----------------------------------------------------------------------------
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const minTemp = Math.min(...temps);
// const maxTemp = Math.max(...temps);

// console.log('temps: ', temps);
// console.log('minTemp: ', minTemp);
// console.log('maxTemp: ', maxTemp);
//* -----------------------------------------------------------------------------
// const obj = { x: 1, y: 2 };
// const objCopy = { ...obj };

// console.log('obj: ', obj);
// console.log('objCopy: ', objCopy);
//* -----------------------------------------------------------------------------
// console.log(...'Hello');
//* -----------------------------------------------------------------------------
// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {
//   ...objA,
//   ...objB,
// };

// console.log('objA: ', objA);
// console.log('objB: ', objB);
// console.log('objC: ', objC);
//* -----------------------------------------------------------------------------
// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   theme: 'dark',
//   showNotifications: false,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log('defaultSettings:', defaultSettings);
// console.log('userSettings:', userSettings);
// console.log('finalSettings:', finalSettings);
//* -----------------------------------------------------------------------------
// const sum = function (...args) {
//   let total = 0;

//   console.log(args);

//   for (const num of args) {
//     total += num;
//   }
//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 40, 60));
// console.log(sum(10, 40, 60, 100, 200, 300, 4000, 5));
