# Sum ImgHub

一个 Web 端本地优先生图工具。用户填写 OpenAI 兼容 API 的 `Base URL` 和
`API Key`。文本和模型列表会直接请求中转站；生图请求默认通过内置 Python
服务端转成后台任务，避免 4K 等慢请求在浏览器长连接里断开。

## 在线测试

默认中转站：<https://api.clawopen.top/>

用户可以直接打开该地址测试和体验工具。

## 特性

- Vite + React + TypeScript
- 可作为普通 Web App 使用，也支持浏览器安装为 PWA
- 设置和图库保存在当前浏览器 IndexedDB
- API Key 默认不保存；只有勾选后才写入当前浏览器本地存储
- 支持导出 / 导入 JSON 备份，备份不会包含 API Key
- 服务端会先接收生成任务并后台处理，结果会短暂写入服务器缓存，再同步到浏览器图库
- 支持 URL 和 `b64_json` 两种图片返回格式

## 内置提示词工程

本项目内置可复用的图像提示词优化模板，用于快速生成、高级生成、工作流节点
和电商主题等场景。提示词优化会调用用户在控制台配置的文本模型，不需要额外
部署 Prompt Optimizer 服务。

部分提示词工程思路和模板结构参考并改写自
[`linshenkx/prompt-optimizer`](https://github.com/linshenkx/prompt-optimizer)，
该项目采用 GNU AGPLv3 许可证。本项目保留来源说明并继续以
`AGPL-3.0-or-later` 开源，详见 [NOTICE](./NOTICE)。

## 开发运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 预览生产构建

```bash
npm run preview
```

## 宝塔部署

```bash
npm install
npm run build
npm start
```

`npm start` 会用 `server/server.py` 托管 `dist`，并启用 `/api/openai/...`
生图任务代理。宝塔项目端口默认是 `19080`，也可以用环境变量 `PORT` 修改。
如果只做纯静态部署，页面仍可打开，但 4K 生图可能因为浏览器直连接口超时或断连而失败。

## Docker 部署

```bash
git clone https://github.com/wangsaiqi2004/Sum-ImgHub.git
cd Sum-ImgHub
docker compose up -d --build
```

容器默认只把服务映射到宿主机 `127.0.0.1:19080`，适合让宝塔或 Nginx 反代：

```txt
目标 URL: http://127.0.0.1:19080
```

容器里的临时生图缓存、任务记录和 SQLite 数据库会写到 Docker volume
`sum-imghub-data`。更新代码时执行：

```bash
git pull
docker compose up -d --build
```

## 本地数据说明

- 图片、提示词、模型、生成参数保存在浏览器 IndexedDB。未完成的生成任务会在浏览器重新打开后继续轮询服务器缓存结果。
- 清理浏览器站点数据会删除本地图库。
- 建议用户定期使用“导出备份”保存 JSON 备份文件。
- 导入备份会恢复设置和图库，但不会恢复 API Key。

## 风格库

- 风格素材不放入 Git 仓库，默认从仓库外读取。
- Windows 默认路径：`D:\tmp\image-tool-lib\风格`
- Linux 默认路径：`/opt/image-tool-lib/风格`
- 可用 `IMAGE_TOOLS_STYLE_LIBRARY_DIR` 覆盖路径。
- 每个分类目录里的 `*Json.xlsx` 提供风格协议，`*-风格.jpg/png` 用作节点预览示例图。

## 默认参数

- Base URL: `https://api.clawopen.top`
- 推荐模型: `gpt-image-2`
- 默认价格不会在工具内计费，实际扣费由 API 站点处理。

## 开源协议

本项目采用 GNU Affero General Public License v3.0 or later
（`AGPL-3.0-or-later`）开源，完整协议见 [LICENSE](./LICENSE)。

如果你修改本项目并发布修改版，或将修改版作为网络服务提供给用户使用，
你需要按照 AGPLv3 的要求向这些用户提供对应的完整源代码，并让衍生作品继续
在兼容的 AGPL 条款下开放。

本项目包含参考并改写自 `linshenkx/prompt-optimizer` 的提示词模板内容，相关
来源和许可证说明见 [NOTICE](./NOTICE)。
