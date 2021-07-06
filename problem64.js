// let str1 = 'There are twenty-four hours in a day, 30 days in a month, and 12 months in a calendar year'
// let str2 = 'There are Twenty-Four hours in a day, A year has 14 months'


// function for converting string to array
function arrConvert(str){
    let newStr = str.toLowerCase();
    let arr1 = newStr.split(' ');
    return arr1;
}

// function to check if there any numeric value in string
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

// console.log(isNumeric(a));
// console.log(isNumeric(b));

// function to calculate highest correctness value
function calculate(arr1){
    let sum = 0;
    for(let i=0; i<arr1.length; i++){
        
       if(isNumeric(arr1[i])){
         sum = sum + 4;
       }else if(arr1[i].length >=7){
           sum = sum+3;
       }else if(arr1[i].length >=5 && arr1[i].length<7){
           sum = sum+1;
       }else{
           sum = sum + 0;
       }
       
   }
   return sum;
}


// function to check pointsScored
function matchString(str1, str2){
    let newArr = [];
   let original = arrConvert(str1);
    
   let copied =  arrConvert(str2);
    
 // assuming that words should be available anywhere in copied string  
   for(let i=0; i< original.length; i++){
      for(let j=0; j<copied.length; j++){
          if(original[i] === copied[j]){
              newArr.push(copied[j]);
          }
      }
   }
  
   const result = calculate(newArr);
   const totalValue = calculate(original);

   const pointsScored = (result/totalValue)*100;
   return pointsScored;

}



console.log(matchString('There are twenty-four hours in a day, 30 days in a month, and 12 months in a calendar year','There are Twenty-Four hours in a day, A year has 14 months'));