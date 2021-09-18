# npm-shrinkwrap.json、package-lock.json和yarn.lock

## 初始
锁版本的起始
npm v1.1.2 版本， 2012年2月25号 https://github.com/npm/cli/commit/d54ce3154dfe5283fcfeffc13d4e003bbade6370#diff-160056e00187b4f9fa30cb1ccf52d15febbae3f425abb1cf72a5e56b388d2a67
这个commit 开始 添加了 npm shrinkwrap
[v1.1.2 npm-shrinkwrap 解释文档](https://github.com/npm/cli/blob/v1.1.2/doc/cli/shrinkwrap.md)；

```
By default, "npm install" recursively installs the target's dependencies (as specified in package.json), choosing the latest available version that satisfies the dependency's semver pattern.
```

```
When "npm install" installs a package with a npm-shrinkwrap.json file in the package root, the shrinkwrap file (rather than package.json files) completely drives the installation of that package and all of its dependencies (recursively). 
```
使用方法

1. npm i 递归安装package.json 中记载的依赖，依赖版本选择符合 semver 版本的最新版。
2. 通过 npm shrinkwrap 生成 npm-shrinkwrap.json 文件来保存当前依赖的版本信息
3. 当 npm-shrinkwrap.json 文件存在时,按照此文件中记载的依赖版本，进行安装
