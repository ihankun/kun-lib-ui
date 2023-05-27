import vue from 'rollup-plugin-vue'
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs';
import path from 'path';
import { babel } from '@rollup/plugin-babel';
import ts from "rollup-plugin-typescript2"
import { terser } from "rollup-plugin-terser"
import less from 'rollup-plugin-less';
import postcss from "rollup-plugin-postcss";
import scss from 'rollup-plugin-scss'
import css from 'rollup-plugin-css-only';
// import dts from "rollup-plugin-dts";
import autoprefixer from 'autoprefixer';
import json from '@rollup/plugin-json';
export default {
  input: 'src/main.ts',
  output: [
    {
            file: 'dist/bundle.es.min.js',
            format: 'esm',
            sourcemap: true,
            plugins: [terser()],
        },
        {
            file: 'dist/bundle.es.js',
            format: 'esm',
            sourcemap: true,
            // plugins:[postcss()]
        }, {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            sourcemap: true,
        }, {//iife
            file: 'dist/bundle.umd.js',
            format: 'umd',
            name: 'bundle',
            sourcemap: true
        }
    ],
      external: ['axios', 'vue','kun-lib-ui','moment','lodash'],
    //   extract:"dist/css/index.css",
    //   treeshake:true,
    //   external:['lodash'] //告诉rollup不要将此lodash打包，而作为外部依赖
    plugins: [
        cjs(),
        resolve(),
        alias({
          entries: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
          ],
        }),
          
        vue({
            css: false,
            // compileTemplate: false
        }),
        postcss({
            extensions:['.css','.scss','.less'],
            use:['sass',['less',{
                lessOptions: {
                    javascriptEnabled: true
                 }
            }]],
            plugins: [
              // 前缀
              autoprefixer(),
            ],
            // 把 css 拎出来
            extract: "css/index.css",
          }),
          ts(
            { tsconfig: './tsconfig.json'}
         ),
        babel({
            babelHelpers: 'bundled',
            exclude:['node_modules/**'],
            extensions :['.js', '.ts','.vue']
        }),
        json()
        
        // // typescript({
        // //   tsconfig: 'tsconfig.json',
        // //   declaration: true,
        // //   declarationDir: 'dist',
        // // }),
    ]
};
/**
 *  postcss({
        extensions: ['.css', '.scss', '.less'],
        use: ['sass', ['less', {
          lessOptions: {
             javascriptEnabled: true
          }
        }]],
    }),
 */