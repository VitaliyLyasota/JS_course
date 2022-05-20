function findShort(s){
  let convert = s.split(' ').map(element => element.length)
  return Math.min(...convert);
    
  }
  let str = 'Добрый вечер я боун флэтчер';
  
  console.log();