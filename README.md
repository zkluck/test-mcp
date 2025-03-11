# 天气MCP服务

这是一个基于Model Context Protocol (MCP)的天气服务，提供天气预报和天气警报功能。

## 功能

- **获取天气预报**: 根据经纬度获取详细的天气预报信息
- **获取天气警报**: 根据美国州代码获取当前活跃的天气警报

## 安装

### 方法1: 从npm安装（发布后）

```bash
npm install -g test-mcp
```

### 方法2: 从GitHub安装

```bash
git clone https://github.com/你的用户名/test-mcp.git
cd test-mcp
npm install
npm run build
npm link
```

### 方法3: 使用npx（无需安装）

无需安装，直接通过npx使用：

```bash
npx test-mcp start
```

## 在Windsurf中配置使用

要在Windsurf中使用此MCP服务，您需要在Windsurf的MCP配置文件中添加以下配置：

1. 打开Windsurf的MCP配置文件（通常位于`~/.codeium/windsurf/mcp_config.json`）
2. 根据您选择的安装方式，添加相应配置：


### 如果您从源代码安装（方法1）

```json
{
  "mcpServers": {
    "weather": {
      "command": "node",
      "args": [
        "路径/到/test-mcp/build/index.js"
      ]
    }
  }
}
```

### 如果您想使用npx而不安装（方法2）

```json
{
  "mcpServers": {
    "weather": {
      "command": "npx",
      "args": [
        "test-mcp",
        "start"
      ]
    }
  }
}
```

## 可用工具

此MCP服务提供以下工具：

### 1. 获取天气预报

```
get-forecast
```

参数:
- `latitude`: 纬度 (-90 到 90)
- `longitude`: 经度 (-180 到 180)

### 2. 获取天气警报

```
get-alerts
```

参数:
- `state`: 两字母州代码 (例如: CA, NY)

## 开发

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 运行服务
npm start
```

## 许可证

ISC
