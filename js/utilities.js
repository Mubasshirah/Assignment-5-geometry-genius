function getInputValueById(elementId){
    const inputValue=document.getElementById(elementId);
    
    const inputValueString=inputValue.value;
    const inputValueFloat=parseFloat(inputValueString);
    inputValue.value='';
    
    return inputValueFloat;
    
}
  function getCommonAreaPart(firstInput,secondInput){
    const commonAreaPart=firstInput*secondInput;
    return commonAreaPart;
  }

  function getRandomColor(){
    const letters = '0123456789abcdefABCDEF';
    const splittedLetters=letters.split('');
    let color='#';
    
    for (let i = 0; i < 6; i++) {
        const element=splittedLetters[i];
        console.log(element)
        color=color+ letters[Math.floor(Math.random() * 22)];

        
        
    }
    return color;
       }