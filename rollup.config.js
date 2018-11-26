import uglify from 'rollup-plugin-uglify';

export default [
    {
        input: 'src/KernelDensEst.js',
        output: {
            format: 'umd',
            name: 'KernelDensEst',
            file: 'builds/KernelDensEst.js'
        }
    },
    {
        input: 'src/KernelDensEst.js',
        output: {
            format: 'umd',
            name: 'KernelDensEst',
            file: 'builds/KernelDensEst.min.js'
        },
        plugins: [
            uglify()
        ]
    }
];