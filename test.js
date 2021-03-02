var responses = [
    'I can neither confirm nor deny',
    'only wake the dreamer knows'
];
  randomNumber = Math.floor(Math.random()*responses.length);
  resp = responses[randomNumber]
  console.log(resp)