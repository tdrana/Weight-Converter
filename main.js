

function setValue(selectValue, tValue){


         if(tValue.length == 0){
            document.getElementById('output').style.visibility ='hidden';   
         }
        else{
            document.getElementById('output').style.visibility ='visible';  
        }
         if(selectValue == 0)
         {
             document.getElementById('output').style.visibility ='hidden';  
         }
         else if(selectValue == 'pound'){
            document.getElementById('pounds').style.display = 'none';
            document.getElementById('gramsOutput').innerHTML = (tValue/0.0022046).toFixed(3);
            document.getElementById('kgOutput').innerHTML = (tValue/2.2046).toFixed(3);
            document.getElementById('ouncesOutput').innerHTML = (tValue*16).toFixed(3);

 
         }
         else if(selectValue == 'kilogram'){
                document.getElementById('kgs').style.display = 'none';
                document.getElementById('gramsOutput').innerHTML = tValue*1000;
                document.getElementById('poundOutput').innerHTML = (tValue*2.2046).toFixed(3);
                document.getElementById('ouncesOutput').innerHTML = (tValue*35.27396195).toFixed(3);

 
         }
         else if(selectValue == 'ounces'){
            document.getElementById('ounces').style.display = 'none';
            document.getElementById('gramsOutput').innerHTML = tValue*28.35;
            document.getElementById('poundOutput').innerHTML = (tValue/16).toFixed(3);
            document.getElementById('kgOutput').innerHTML = (tValue*0.02835).toFixed(3);

 
         }
}

function getSelectValue(){

    var selectValue = document.getElementById('selectWeight').value;
    document.getElementById('pounds').style.display = 'block';
    document.getElementById('kgs').style.display = 'block';
    document.getElementById('ounces').style.display = 'block';
    document.getElementById('grams').style.display = 'block';
    
    setValue( selectValue, document.getElementById('getValue').value);


}

   document.getElementById('getValue').addEventListener('input', function(e){

    setValue(document.getElementById('selectWeight').value, e.target.value);
          
});

