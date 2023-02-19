


document.getElementById('trianglrBtn').addEventListener('click',function(){
   const firstInputTriangle= getInputValueById('triangleB');
   const secondInputTriangle= getInputValueById('triangleH');
   const areaOfTriangle= .5* getCommonAreaPart(firstInputTriangle,secondInputTriangle);
   
 if(firstInputTriangle <0 || secondInputTriangle<0){
 alert('input positive number');
 return;
   }
   else{
    console.log(areaOfTriangle);
   }
 
    // console.log(areaOfTriangle);
})

document.getElementById('rectangleBtn').addEventListener('click',function(){
    const firstInputRectangle=getInputValueById('rectangleW')
    const secondInputRectangle=getInputValueById('rectangleL');
    const areaOfRectangle=getCommonAreaPart(firstInputRectangle,secondInputRectangle);
    if(firstInputRectangle <0 || secondInputRectangle<0){
        alert('input positive number');
        return;
          }
          else{
           console.log(areaOfRectangle);
          }
    
    
})
document.getElementById('parallelogramBtn').addEventListener('click',function(){
    const firstInputParallelogram=getInputValueById('parallelogramB')
    const secondInputParallelogram=getInputValueById('parallelogramH');
    const areaOfParallelogram=getCommonAreaPart(firstInputParallelogram, secondInputParallelogram);
    if(firstInputParallelogram <0 || secondInputParallelogram<0){
        alert('input positive number');
        return;
          }
          else{
           console.log(areaOfParallelogram);
          }
    
})
document.getElementById('rhombusBtn').addEventListener('click',function(){
    const firstInputRhombus=getInputValueById('rhombusD1')
    const secondInputRhombus=getInputValueById('rhombusD2');
    const areaOfRhombus=.5 * getCommonAreaPart(firstInputRhombus, secondInputRhombus);
    if(firstInputRhombus <0 || secondInputRhombus<0){
        alert('input positive number');
        return;
          }
          else{
           console.log(areaOfTriangle);
          }
    
})
document.getElementById('pentagonBtn').addEventListener('click',function(){
    const firstInputPentagon=getInputValueById('pentagonP')
    const secondInputPentagon=getInputValueById('pentagonB');
    const areaOfPentagon=.5 * getCommonAreaPart(firstInputPentagon,secondInputPentagon);
    console.log(areaOfPentagon);
    
})
document.getElementById('ellipseBtn').addEventListener('click',function(){
    const firstInputEllipse=getInputValueById('ellipseA')
    const secondInputEllipse=getInputValueById('ellipseB');
    const piString=(Math.PI).toFixed(2);
    const piFloat=parseFloat(piString);
    console.log(piFloat);
    const areaOfEllipse=piFloat * getCommonAreaPart(firstInputEllipse, secondInputEllipse);
    console.log(areaOfEllipse);
    
})



document.getElementById('triangleColorChange').addEventListener('mouseover',function(){
    const triangleArea=document.getElementById('triangleColorChange');
    triangleArea.style.backgroundColor=getRandomColor();
    
})
document.getElementById('triangleColorChange').addEventListener('mouseout',function(){
    const triangleArea=document.getElementById('triangleColorChange');
    triangleArea.style.backgroundColor='white';
})
document.getElementById('rectangleColorChange').addEventListener('mouseover',function(){
    const rectangleArea=document.getElementById('rectangleColorChange');
    rectangleArea.style.backgroundColor=getRandomColor();
    
})
document.getElementById('rectangleColorChange').addEventListener('mouseout',function(){
    const rectangleArea=document.getElementById('rectangleColorChange');
    rectangleArea.style.backgroundColor='white';
})