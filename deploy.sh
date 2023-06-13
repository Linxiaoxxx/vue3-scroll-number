#!/bin/bash
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Linxiaoxxx/vue3-scroll-number.git master:gh-pages

cd -