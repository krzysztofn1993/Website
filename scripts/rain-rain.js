var rain = (function(){
  // body...
  //variables
  let drops = [];
  let weight = 4;
  const rainColor ={
      r: 0,
      g: 0,
      b: 150
  };

  const getColor = function(){
    return rainColor;
  };
  const setColor = function(r,g,b){
    if(rainColor.r !== r && typeof(r) === 'number') rainColor.r = r;
    if(rainColor.g !== g && typeof(r) === 'number') rainColor.g = g;
    if(rainColor.b !== b && typeof(r) === 'number') rainColor.b = b;
  };

  const getWeight = function(){
    return weight;
  };
  const setWeight = function(w){
    if(weight !== w && typeof(w) === 'number')
    {
      weight = w;
    }
  };

  const getDrops = function(){
    return drops.length;
  };
  const setDrops = function(amount){
    if(drops.lenght !== amount && typeof(amount) === 'number'){
      while(drops.length < amount ){
        drops.push(new Drop());
      }
      while(drops.length > amount){
        drops.pop();
      }
    }
  };

  const Behave = function(){
    for( let drop of drops){
      drop.behave(weight,rainColor.r,rainColor.g,rainColor.b);
    }
  };

  const draw = function(w,r,g,b,a){
    setWeight(w);
    setColor(r,g,b);
    setDrops(a);
    Behave();
  };

  return {
    getColor:getColor,
    getDrops:getDrops,
    getWeight:getWeight,
    behave: Behave,
    draw: draw,
  };

})();
