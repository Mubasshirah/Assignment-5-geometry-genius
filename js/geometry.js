document.getElementById('trianglrBtn').addEventListener('click',function(){
    const triangleBInput=document.getElementById('triangleB');
    const triangleBInputString=triangleBInput.value;
    const triangleBInputFloat=parseFloat(triangleBInputString);

    const triangleHInput=document.getElementById('triangleH');
    const triangleHInputString=triangleHInput.value;
    const triangleHInputFloat=parseFloat(triangleHInputString);

    const areaOfTriangle= .5* triangleBInputFloat * triangleHInputFloat;
    console.log(areaOfTriangle);
    

})