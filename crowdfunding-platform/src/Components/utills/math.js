export function isNormalInteger(str) {
    const n = Number(str);
    return Number.isInteger(n) && n > 0;
  }
  
  export const percentCompleted = (raised, required) => 
    required > 0 ? (raised / required) * 100 : 0;
  
  export const compare = (a, b) => 
    Number(b.isActivated) - Number(a.isActivated);
  