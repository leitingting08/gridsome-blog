# Gridsome-Blog

![](https://img.shields.io/github/languages/top/leitingting08/gridsome-blog.svg?style=flat)
![](https://img.shields.io/github/stars/leitingting08/gridsome-blog.svg?style=social)

## 目录
- [简介](#简介)
- [演示地址](#演示地址)
- [项目特点](#项目特点)
- [使用的组件](#使用的组件)
- [快速使用](#快速使用)
- [开发](#开发)
- [License](#License)

## 简介

博客可搭建在 GitHub Pages 上,
文章数据储存于gist 中, 通过Github API 与数据进行交互, 实现无后台、可动态发布文章的博客系统

## 演示地址
https://leitingting08.github.io/gridsome-blog/

## 项目特点

- [x] 基于 GitHub Pages 无需服务器
- [x] github Actions 持续集成部署
- [x] 包含电脑端和移动端
- [x] gridsome实现的预渲染应用

## 使用的组件

- Element (电脑端)
- Vant (移动端)

## 快速使用

搭建博客只需2步
- 点击github头像旁边的 "+" 号 选择 ```Import repository ```克隆地址填 ```https://github.com/leitingting08/leitingting08.github.io ```项目名填 ```你的用户名.github.io ```
- 克隆完成后 修改文件 ```/static/configuration.json``` 中的 ```githubUsername``` 为自己的github用户名

类似演示地址其中 leitingting08 为我的用户名


现在 ```https://你的用户名.github.io``` 就是你的个人博客了,例如[https://leitingting08.github.io][1]

#### 安装 运行 构建

```bash
npm install
# or
yarn install

npm run dev
# or
yarn dev

npm run build
# or
yarn build
```

#### 获取Token

在 ```github > settings > Developer settings > Personal access tokens```  勾选```gist``` 和 ```repo```权限 获取```Token```

#### 开发注意事项

- 配置文件读取的总是与 ```index.html``` 同级的 ```./static/configuration.json```, 所以本地 ```npm run dev``` 的时候会出现修改配置无效的情况, 如果需要修改的话修改本地的配置文件就行, 发布到 github 之后不影响, 因为修改配置的时候是通过 ```github-api``` 修改 ```你的用户名.github.io``` 下的 ```/static/configuration.json ```
## License

Code licensed under the [Mozilla](LICENSE).

------

[参考](https://leitingting08.github.io)