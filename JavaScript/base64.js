const Data = 'b a b a n g';

const enc = btoa(Data);
console.info(enc);

const dec = atob(enc);
console.info(dec)

