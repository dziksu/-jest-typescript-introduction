function work(){
  console.log('--WORK--');
  return '8h';
}

function sleep(){
  console.log('--SLEEP--');
  return '8h';
}

function rest(){
  console.log('--REST--');
  return '8h';
}

export default {
  work,
  sleep,
  rest
}
