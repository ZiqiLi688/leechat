# Leechat Web

一款基于 Vue 3 的即时通讯 Web 端应用，为 Leechat 聊天系统提供轻量、流畅的交互界面。系统深度融合 WebSocket 与 WebRTC 技术，不仅支持实时消息传递，更实现了语音通话、视频通话、点对点文件传输等丰富功能，让沟通突破文本限制，更加立体高效。

<br>

## 项目简介

Leechat Web 是 Leechat 即时通讯系统的官方 Web 客户端，采用现代化的前端技术栈构建。系统以简洁直观的交互设计为核心，提供稳定的消息收发体验，适用于团队协作、社区交流、兴趣群组等多种社交场景。

<br>

## 环境要求

- **Node.js**：v20.12.2
- **npm**：10.5.0

<br>

## 技术栈

- **Vite**：下一代前端构建工具，提供极速的冷启动和热重载，让开发体验更流畅
- **Vue 3**：渐进式 JavaScript 框架，组合式 API 让逻辑复用更优雅
- **TailwindCSS**：原子化 CSS 框架，快速构建自定义界面
- **WebSocket**：全双工通信协议，实现消息的实时推送与低延迟传输
- **Axios**：基于 Promise 的 HTTP 客户端，处理 API 请求

<br>

## 核心功能

### 1. 实时消息系统
- **在线聊天**：基于 WebSocket 实现消息的实时收发
- **心跳保活**：维持客户端与服务器的连接有效性，异常时自动重连
- **消息记录**：本地缓存聊天历史，支持会话切换

### 2. 音视频通话
- **语音通话**：基于 WebRTC 实现点对点语音通信
- **视频通话**：支持高清视频通话，画面流畅稳定
- **信令交互**：借助 WebSocket 完成 WebRTC 连接的信令协商

### 3. 文件传输
- **点对点传输**：基于 WebRTC DataChannel 实现文件直传
- **大文件分片**：支持大文件分片传输，提高传输成功率

### 4. 界面体验
- **主题切换**：支持浅色/深色模式自由切换
- **动画过渡**：主题切换时通过图形展开/收缩动画平滑过渡

<br>

## 项目效果

<img width="800" alt="image" src="https://github.com/user-attachments/assets/b2346f22-5fba-490c-8030-a2f53320d336">
<br>
<img width="800" alt="image" src="https://github.com/user-attachments/assets/19465227-a016-4c40-8f6d-7b8034f5b57e">
<br>
<img width="800" alt="image" src="https://github.com/user-attachments/assets/73db97e6-d845-401e-9348-f5ddb68b3557">
<br>
<img width="800" alt="image" src="https://github.com/user-attachments/assets/a96f48c3-0b4a-4cdd-8251-d68ef10dfbbb">
<br>
<img width="800" alt="image" src="https://github.com/user-attachments/assets/9404c665-1a47-40d2-9e05-c2cda8eeb485">
<br>
<img width="800" alt="image" src="https://github.com/user-attachments/assets/e00a84f9-e38b-4f39-af41-115277243ca6">
<br>

## 安装与运行

```bash
# 克隆仓库
git clone https://github.com/ZiqiLi688/leechat.git

# 进入项目目录
cd leechat

# 安装依赖
npm install

# 运行
npm run dev

# 打包
npm run build
