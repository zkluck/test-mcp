#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

// Create server instance
const server = new McpServer({
  name: 'weather',
  version: '1.0.0',
});

// 获取全世界的天气预报
server.tool('get-world-weather', '获取全世界的天气预报', {
  latitude: z.number().min(-90).max(90).describe('纬度'),
  longitude: z
    .number()
    .min(-180)
    .max(180)
    .describe('经度'),
}, async ({ latitude, longitude }) => {
  try {

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&forecast_days=16&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min`);

    // 检查响应状态
    if (!response.ok) {
      console.error(`HTTP错误! 状态: ${response.status}`);
      throw new Error(`HTTP错误! 状态: ${response.status}`);
    }

    const data = await response.json();

    return {
      content: [
        {
          type: 'text',
          text: `天气预报详情: ${JSON.stringify(data, null, 2)}`,
        },
      ],
    };
  } catch (error:any) {
    return {
      content: [
        {
          type: 'text',
          text: `获取天气信息时发生错误: ${error.message}`,
        },
      ],
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Weather MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
