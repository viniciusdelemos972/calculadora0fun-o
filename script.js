function bask(){
   let a = parsefloat(document.getElementById('a'));
   let a = parsefloat(document.getElementById('b'));
   let a = parsefloat(document.getElementById('c'));
   let delta = (b*b)*(-4*a*c);
   let rdelta = match.sqrt (delta);
   let x1 = (-b+rdelta)/(2*a);
   let x1 = (-b-rdelta)/(2*a);

   if (delta == 0){
    alert('sem resolução quandodelta é igual a 0');
   }else if (delta < 0){
    let x1 = (-b+rdelta/(2*a));
    let x1 = (-b)/(2*a);

   }else

}