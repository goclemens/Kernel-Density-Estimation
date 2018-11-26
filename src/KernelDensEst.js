import GaussLine from './kernels/GaussLine.js';


//#############################
// domain: [[x0,y0],[x1,y1]]]
// res (resolution): [res_x,res_y]
// ------------------------------
// dimensionality is given by the kernels
// input values are directly passed to the kernels and have to match their inputs
//#############################


function KernelDensEst() {

  this.curKernels = [];

}

KernalDensEst.prototype.kernels =
{
  "GaussLine": GaussLine
}

KernelDensEst.prototype.addKernel = function(kernel) {
  return registeredKernels.push(kernel);
}

KernelDensEst.prototype.eval = function(input) {
  if (curKernels.length == 0) {
    console.log("no kernels registered");
    return false;
  }

  var density = 0;
  for (var i = 0; i<curKernels.length;i++) {

    density += curKernels[i].eval(input);

  }

  return density;
}

KernelDensEst.prototype.evalDomain = function(domain,res) {
  if (curKernels.length == 0) {
    console.log("no kernels registered");
    return false;
  }

  var densityField = [];
  densityField.length = res
  densityField.fill(0);
  var dx = (domain[1]-domain[0])/res;

  for (let i=0; i<res[0]; i++) {
    for (var k = 0; k<curKernels.length;k++) {
        densityField[i] += curKernels[k].eval(i*dx);
    }
  }

  return densityField;
}

KernelDensEst.prototype.evalDomain2D = function(domain,res) {
  if (curKernels.length == 0) {
    console.log("no kernels registered");
    return false;
  }

  var densityField = [];
  densityField.length = res[0];
  for (let i = 0; i<res[0]; i++) {
    densityField[i] = [];
    densityField[i].length = res[1];
    densityField[i].fill(0);
  }

  var dx = (domain[1][0]-domain[0][0])/res[0];
  var dy = (domain[1][1]-domain[0][1])/res[1];
  for (let i=0; i<res[0]; i++) {
    for (let j=0; j<res[1]; j++) {

      for (var k = 0; k<curKernels.length;k++) {

        densityField[i][j] += curKernels[k].eval(i*dx,j*dy);

      }

    }
  }

  return densityField
}

export default KernelDensEst;