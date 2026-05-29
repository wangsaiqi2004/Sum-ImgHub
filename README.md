# SumAPI 生图工作台

基于上游最新版代码整理的 SumAPI 版本，保留原项目的工作台、无限画布、广场、Agent 模式与管理员后台能力，只做以下定制：

- 站点品牌统一为 `SumAPI`
- API 地址固定为 `https://api.clawopen.top/`
- 用户自己填写 API Key
- `image-2` 系列模型开放 `1K / 2K / 4K`
- 模型列表优先按当前 API Key 实时读取，不再长期常驻默认模型

## 功能概览

- 批量生图工作台
- 无限画布 Canvas
- 提示词分析 / 优化 / 风格增强
- 参考图上传与多图参考
- 广场展示与管理员后台
- 本地优先存储：历史记录和图片默认保存在浏览器本地

## 技术栈

- React 19
- TypeScript
- Vite
- lucide-react
- Vite 中间件内置 `/api/*` 代理与后台接口

## 接口说明

默认只允许使用：

```text
https://api.clawopen.top/
```

前端页面不再允许切换到其他 API URL。

当前保留的主要协议：

- `custom-openai`
- `openai-images`
- `openai-responses`
- `gemini-native`
- `gemini-openai`
- `google-imagen`
- `stability-core`

其中 OwlAI / NewAPI 这类：

```bash
POST /v1/images/generations
```

的 OpenAI 兼容协议，直接走 `custom-openai` 或 `openai-images` 即可。

## 分辨率规则

本项目中，`image-2` 系列模型统一支持：

- `1K`
- `2K`
- `4K`

不会再限制只有 `gpt-image-2-pro` 才能选 2K / 4K。

为了避免上游报 `size 不合法`，发送请求时会把比例换算成像素尺寸，例如：

- `1:1 -> 1024x1024`
- `16:9 -> 1792x1024`
- `9:16 -> 1024x1792`
- `2K / 4K` 会使用对应高分辨率尺寸表

## 本地开发

```bash
npm install
npm run dev
```

默认访问：

```text
http://localhost:8877
```

管理员默认账号：

- 用户名：`admin`
- 初始密码：`admin123456`

可通过环境变量覆盖。

## 生产部署

这个项目的后端接口在 `vite.config.ts` 的 Vite 中间件里，所以不能只部署静态 `dist`。

建议直接用 Docker 运行 `npm run dev`。

### 1. 复制环境变量

```bash
cp .env.example .env
```

### 2. 启动容器

```bash
docker compose up -d --build
```

### 3. 宝塔反向代理

把站点反代到：

```text
http://127.0.0.1:3010
```

## 环境变量

见 `.env.example`，常用项：

```env
PORT=8877
SUM_IMAGE_HOST_PORT=3010
PUBLIC_REFERENCE_BASE_URL=
ADMIN_USERNAME=admin
ADMIN_INITIAL_PASSWORD=请改成你自己的密码
```

## 数据与隐私

- 不保存完整 API Key
- 不保存生成图片原始文件到服务器
- 管理员后台只记录请求元数据
- 广场与后台数据保存在 `.data/`

请确保以下目录不要提交到 GitHub：

- `node_modules`
- `dist`
- `.data`
- `.env`

## 来源说明

本项目说明：

- 已获授权进行 SumAPI 定制开发

当前仓库为 SumAPI 定制版，仅做品牌、接口策略和分辨率策略适配。
