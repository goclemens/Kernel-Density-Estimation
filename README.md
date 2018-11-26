# Kernel Density Estimation

## Summary

The KernelDensEst object can be used to dynamically calculate density estimations depending on choosen kernels in 1 and 2 dimensions. At the moment it is only possible to use a gaussline kernel which is 2D.

```js
new GaussLine(sigma, direction, origin)
```

## Usage

```js
    var kde = new KernelDensEst();

    var domain = [ [-10,-10] , [-5,5] ];
    var resolution = [200,100];


    var GaussLine = kde.kernels.GaussLine;

    kde.addKernel(new GaussLine(1, [1,1], [0,0]));
    kde.addKernel(new GaussLine(1.3, [1,2], [0,1]));
    kde.addKernel(new GaussLine(1.5, [2,1], [0,1]));

    var density2D = kde.evalDomain2D(domain,resolution);
```