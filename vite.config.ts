import { defineConfig } from 'vite'; //提供类型推导和更好的IntelliSense支持
import vue from '@vitejs/plugin-vue';//支持.vue文件
import path from 'path';
import VueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts';  // 用于生成类型声明文件

export default defineConfig({
    plugins: [
        vue(),
        dts({  // 生成类型声明文件
            insertTypesEntry: true,  // 自动插入类型声明入口
        }),
        VueJsx()],//指定要使用的vite插件
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './packages')
        }
    },
    //构建过程的相关配置
    build: {
        //配置库的构建
        lib: {
            entry: 'packages/components/index.ts',//入口文件，这个文件应该导出你的组件
            name: 'Go-Paradox-Vue',//库的名称，打包后可用作全局和变量
            fileName: (format) => `go-paradox-vue.${format}.js`,//自定义输出文件名的函数
            formats: ['es', 'cjs', 'umd']
        },
        rollupOptions: {
            external: ['vue'],//指定不需要打包的外部依赖
            //配置输出选项
            output: {
                //globals用于定义全局变量的映射
                globals: {
                    vue: 'Vue'//在UMD和IIFE格式中Vue将作为全局变量Vue可用，确保库被使用时，能够找到Vue
                }
            }
        }
    },
})