
// function getSelectValue (){
//     var selectValue = document.getElementById('selectWeight').value;
//     console.log(selectValue);
// }
// document.getElementById('getPound').addEventListener('input', function(e){
//     document.getElementById('output').style.visibility= "visible"; 
//    let lbs = e.target.value;

//    document.getElementById('gramsOutput').innerHTML = (lbs/0.0022046).toFixed(3);
//    document.getElementById('kgOutput').innerHTML = (lbs/2.2046).toFixed(3);
//    document.getElementById('ouncesOutput').innerHTML = (lbs*16).toFixed(3);

//    if(document.getElementById('getPound').value.length === 0)
// {
//     document.getElementById('output').style.visibility= "hidden"; 
// }
// });
function getSelectValue (){
    var selectValue = document.getElementById('selectWeight').value;
    document.getElementById('getValue').addEventListener('input', function(e){

        document.getElementById('output').style.visibility ='visible';
        let tValue = e.target.value;

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

    
    });

}

