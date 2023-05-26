# 基于rollup的vue组件打包工具

大家在msun-core-business拆分的时候，可以随意fork本仓库，如果有其他好的建议，可以自行在本地修改并充分测试以后提一个MR我们通过评审后合入对应主干

基础技术栈
```
vue-version: ^2
rollup: ^3
typescript: ^4.9
```

|分支|技术栈|备注信息|发布状态|
|---|---|---|---|
|main|vue2 + rollup，example为调试项目，打包不会输出(下面其他分支入无特殊声明，均指代调试项目)|最基础的模块，适用于团队技术栈是vue js版本，且爱动手折腾的朋友，因为它没有添加除了vue以外的任何特性，你可以自由配置|v1.0.0|
|release-Typescript|vue2 + rollup + typescript|在main基础配置上添加打包配置和项目代码的typescript支持，会添加好基础的类型系统，后续添加的项目请补充合适的类型|v2.0.0|
|release-core-message|vue2 + rollup + msun-core-message已有代码|第一个实际迁移的项目，迁移成功后，对于接入方无感，但是支持esmodule，如果接入方的打包工具支持treeshaking，则会删除不需要的多余代码，起到减少打包文件体积的目的|待开始，预计2022.11.18~2022.11.22|
|release-business-all|vue2 + rollup + less + image + iconfont + etc.|大杂烩，将日常用到的各类前端资源全部都加进去，模拟我们开发可能会遇到的各种可能，提前踩踩坑，|待开始，预计2022.11.23~|