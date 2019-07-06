
document.getElementById('getPound').addEventListener('input', function(e){
    document.getElementById('output').style.visibility= "visible"; 
   let lbs = e.target.value;

   document.getElementById('gramsOutput').innerHTML = (lbs/0.0022046).toFixed(3);
   document.getElementById('kgOutput').innerHTML = (lbs/2.2046).toFixed(3);
   document.getElementById('ouncesOutput').innerHTML = (lbs*16).toFixed(3);

   if(document.getElementById('getPound').value.length === 0)
{
    document.getElementById('output').style.visibility= "hidden"; 
}
});