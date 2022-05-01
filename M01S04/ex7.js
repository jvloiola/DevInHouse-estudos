var array=[ 0, 32, 45, 50, 75, 80, 99, 120 ];

var grau = array.forEach((Element)=>{
    fahrenheit = Math.round((Element*5/9)+32);
    console.log('celsius:',Element,'  fahrenheit:', fahrenheit)
});

/* 
fahrenheit = Math.round( ( Element - 32 ) * 5 / 9 );

array.forEach((Element)=>{
    
    console.log(Element, fahrenheit)
}); */