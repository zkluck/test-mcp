# 天气 MCP 服务

这是一个基于 Model Context Protocol (MCP)的天气服务，提供天气预报功能。

## 功能

- **获取天气预报**: 根据经纬度获取详细的天气预报信息

## 安装

### 方法 1: 从 npm 安装（发布后）

```bash
npm install -g test-mcp
```

### 方法 2: 从 GitHub 安装

```bash
git clone https://github.com/zkluck/test-mcp.git
cd test-mcp
npm install
npm run build
npm link
```

### 方法 3: 使用 npx（无需安装）

无需安装，直接通过 npx 使用：

```bash
npx test-mcp
```

## 在 Windsurf 中配置使用

要在 Windsurf 中使用此 MCP 服务，您需要在 Windsurf 的 MCP 配置文件中添加以下配置：

1. 打开 Windsurf 的 MCP 配置文件（通常位于`~/.codeium/windsurf/mcp_config.json`）
2. 根据您选择的安装方式，添加相应配置：

### 如果您从源代码安装（方法 1）

```json
{
  "mcpServers": {
    "weather": {
      "command": "node",
      "args": ["路径/到/test-mcp/build/index.js"]
    }
  }
}
```

### 如果您想使用 npx 而不安装（方法 2）

```json
{
  "mcpServers": {
    "weather": {
      "command": "npx",
      "args": ["-y", "test-mcp"]
    }
  }
}
```

## 可用工具

此 MCP 服务提供以下工具：

### 1. 获取全世界天气预报

```
get-world-weather
```

参数:

- `latitude`: 纬度 (-90 到 90)
- `longitude`: 经度 (-180 到 180)


## 开发

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 运行服务
npm dev
```

## 许可证

ISC
