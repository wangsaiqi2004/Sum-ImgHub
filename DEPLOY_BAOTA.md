# 宝塔 Docker 部署

下面按 `img.clawopen.top` 反向代理到 `127.0.0.1:3010` 说明。

## 1. 上传项目

把项目上传到服务器，例如：

```bash
/www/wwwroot/sum-image
```

进入目录：

```bash
cd /www/wwwroot/sum-image
```

## 2. 配置环境变量

```bash
cp .env.example .env
nano .env
```

示例：

```env
SUM_IMAGE_HOST_PORT=3010
PUBLIC_REFERENCE_BASE_URL=https://img.clawopen.top
ADMIN_USERNAME=admin
ADMIN_INITIAL_PASSWORD=请改成你自己的强密码
```

## 3. 启动

```bash
docker compose up -d --build
```

查看状态：

```bash
docker compose ps
docker compose logs -f --tail=100
```

本机检查：

```bash
curl http://127.0.0.1:3010
```

## 4. 宝塔反向代理

在宝塔里添加网站 `img.clawopen.top`，然后设置反向代理：

```text
http://127.0.0.1:3010
```

再申请 SSL，开启 HTTPS。

## 5. 后续更新

上传新代码后，在项目目录执行：

```bash
cd /www/wwwroot/sum-image
docker compose up -d --build
```

如果遇到旧页面缓存，浏览器强刷或清理站点缓存即可。
