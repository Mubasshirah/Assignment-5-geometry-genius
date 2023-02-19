


document.getElementById('trianglrBtn').addEventListener('click',function(){
   const firstInputTriangle= getInputValueById('triangleB');
   const secondInputTriangle= getInputValueById('triangleH');
   const areaOfTriangle= .5* getCommonAreaPart(firstInputTriangle,secondInputTriangle);
   
 if(firstInputTriangle <0 || secondInputTriangle<0 ||  (typeof firstInputTriangle!=='number') ||secondInputTriangle==''|| (typeof secondInputTriangle!=='number') || firstInputTriangle==''){
 alert('input positive number');
 return;
   }
   else{
 const calculationAreaField=document.getElementById('calculationArea');
  
  const p=document.createElement('p');
  p.innerText='Triangle: ';
  const span=document.createElement('span');
  span.innerText=areaOfTriangle;
  p.appendChild(span);
  const span2=document.createElement('span');
  span2.innerHTML=`cm<sup>2</sup?`;
  p.appendChild(span2);
  const button=document.createElement('button')
  button.innerText='convert to m^2';
  p.appendChild(button);
  calculationAreaField.appendChild(p);
 
    
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
            const calculationAreaField=document.getElementById('calculationArea');
  
            const p=document.createElement('p');
            p.innerText='Rectangle: ';
            const span=document.createElement('span');
            span.innerText=areaOfRectangle;
            p.appendChild(span);
            const span2=document.createElement('span');
            span2.innerHTML=`cm<sup>2</sup?`;
            p.appendChild(span2);
            const button=document.createElement('button')
            button.innerText='convert to m^2';
            p.appendChild(button);
            calculationAreaField.appendChild(p);
           
              
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
            const calculationAreaField=document.getElementById('calculationArea');
  
            const p=document.createElement('p');
            p.innerText='Parallelogram: ';
            const span=document.createElement('span');
            span.innerText=areaOfParallelogram;
            p.appendChild(span);
            const span2=document.createElement('span');
            span2.innerHTML=`cm<sup>2</sup?`;
            p.appendChild(span2);
            const button=document.createElement('button')
            button.innerText='convert to m^2';
            p.appendChild(button);
            calculationAreaField.appendChild(p);
           
              
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
            const calculationAreaField=document.getElementById('calculationArea');
  
            const p=document.createElement('p');
            p.innerText='Rhombus: ';
            const span=document.createElement('span');
            span.innerText=areaOfRhombus;
            p.appendChild(span);
            const span2=document.createElement('span');
            span2.innerHTML=`cm<sup>2</sup?`;
            p.appendChild(span2);
            const button=document.createElement('button')
            button.innerText='convert to m^2';
            p.appendChild(button);
            calculationAreaField.appendChild(p);
           
              
             }
            
    
})
document.getElementById('pentagonBtn').addEventListener('click',function(){
    const firstInputPentagon=getInputValueById('pentagonP')
    const secondInputPentagon=getInputValueById('pentagonB');
    const areaOfPentagon=.5 * getCommonAreaPart(firstInputPentagon,secondInputPentagon);
    if(firstInputPentagon <0 || secondInputPentagon<0){
        alert('input positive number');
        return;
          }
          else{
            const calculationAreaField=document.getElementById('calculationArea');
  
            const p=document.createElement('p');
            p.innerText='Pentagon: ';
            const span=document.createElement('span');
            span.innerText=areaOfPentagon;
            p.appendChild(span);
            const span2=document.createElement('span');
            span2.innerHTML=`cm<sup>2</sup?`;
            p.appendChild(span2);
            const button=document.createElement('button')
            button.innerText='convert to m^2';
            p.appendChild(button);
            calculationAreaField.appendChild(p);
           
              
             }
    
})
document.getElementById('ellipseBtn').addEventListener('click',function(){
    const firstInputEllipse=getInputValueById('ellipseA')
    const secondInputEllipse=getInputValueById('ellipseB');
    const piString=(Math.PI).toFixed(2);
    const piFloat=parseFloat(piString);
    const areaOfEllipse=piFloat * getCommonAreaPart(firstInputEllipse, secondInputEllipse);
    if(firstInputEllipse <0 || secondInputEllipse<0){
        alert('input positive number');
        return;
          }
          else{
            const calculationAreaField=document.getElementById('calculationArea');
  
            const p=document.createElement('p');
            p.innerText='Ellipse: ';
            const span=document.createElement('span');
            span.innerText=areaOfEllipse;
            p.appendChild(span);
            const span2=document.createElement('span');
            span2.innerHTML=`cm<sup>2</sup?`;
            p.appendChild(span2);
            const button=document.createElement('button')
            button.innerText='convert to m^2';
            p.appendChild(button);
            calculationAreaField.appendChild(p);
           
              
             }
    
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