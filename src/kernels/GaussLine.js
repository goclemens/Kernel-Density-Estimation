function GaussLine(sig,dir,ori) {
  
  //#### Constructor ####
  var sig = sig || 1;
  var dir = checkDir(dir);
  var ori = ori || [0,0];
  var norm = 1/(sig*Math.sqrt(2*Math.PI));
  //#####################



  //#### methods ####

  this.eval = function(x,y) {
    return norm*Math.exp( -Math.pow(dir[1]*(x-ori[0])+dir[0]*(y-ori[1]),2)/(2*Math.pow(sig,2)) );
  }

  this.setSig = function(new_sig) {
    sig = new_sig;
  }
  this.setDir = function(new_dir) {
    dir = checkDir(new_dir);
  }
  this.setOr = function(new_ori) {
    ori = new_ori;
  }

  //#################

  //#### private functions ####
  function checkDir(dir) {

    if (!Array.isArray(dir)) {
      if (!isNaN(dir)) {
        return [Math.cos(dir),Math.sin(dir)];
      } else {
        return [1,0];
      }
    } else {
      let normDir = Math.sqrt(Math.pow(dir[0],2)+Math.pow(dir[1],2));
      return [dir[0]/normDir,dir[1]/normDir];
    }

  }
  //###########################

}

export default GaussLine;