import nodeResolve from "rollup-plugin-node-resolve";
import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-img';
export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
        {
            name:'showLoading',
            file: 'dist/index.js',
            format: 'umd',
        }
    ],
    plugins:[
        nodeResolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        image(),
    ]
}
