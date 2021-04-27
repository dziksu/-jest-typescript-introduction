export function example1(){
  return 1;
}

export const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

export function functionThrowingError() {
  throw new Error('Hello, I\'m error');
}

export function fetchData(callback: (data: any) => void){
  setTimeout(() => {
    callback(true);
  }, 1000)
}

export function fetchDataPromise(shouldFall?: boolean){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(shouldFall){
        return reject('Error');
      }
      return resolve(true);
    }, 1000)
  });
}

let cities = null;

export async function initializeCityDatabase(){
  return Promise.resolve();
}

export async function initializeFoodDatabase(){
  return Promise.resolve();
}

export function isCity(city: string){
  return true;
}

export function isValidCityFoodPair(city: string, food: string){
  return true;
}

export async function doAsync(callback1, callback2){
  callback1('hello');
  callback2('there');
}


