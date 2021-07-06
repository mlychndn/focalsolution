function fizzbuzz(num=100){
    for(let i=0;i<=num; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log('FizBuzz');
        }else if(i%3 === 0){
            console.log('Fizz');
        }else if(i%5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }
}

// fizzbuzz();

