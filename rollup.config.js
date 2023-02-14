import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import del from 'rollup-plugin-delete' //
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const isProduction = process.env.NODE_ENV === 'production'
export default {
    input: './src/index.js',
    output: [
        {
            file: './dist/page-load-time.umd.js',
            format: 'umd',
            name: 'pageLoadTime',
        },
        {
            file: './demo/page-load-time.umd.js',
            format: 'umd',
            name: 'pageLoadTime',
        },
    ],
    plugins: [
        //源代码更改马上清空dist文件夹下面打包过的文件 防止代码冗余
        del({ targets: ['dist', 'test/index.umd.js'] }),
        isProduction && terser(),
        babel({
            exclude: 'node_modules/**',
        }),
        // 开启服务
        !isProduction &&
        serve({
            open: false,
            host: 'localhost',
            port: 9009,
            historyApiFallback: true,
            contentBase: 'demo',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        }),
        // 热更新
        !isProduction && livereload(),
    ],
}
