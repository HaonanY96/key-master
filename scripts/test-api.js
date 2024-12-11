
const testEndpoints = async () => {
  const BASE_URL = 'http://localhost:3000/api';
  
  const endpoints = [
    '/shortcuts',
    '/shortcuts/categories',
    '/shortcuts/windows/system',
    '/shortcuts/windows/system/categories',
  ];

  const testCases = [
    // 基本路由测试
    { url: '/shortcuts' },
    { url: '/shortcuts/categories' },
    
    // 带参数的测试
    { 
      url: '/shortcuts',
      params: { platform: 'windows', appType: 'system' }
    },
    { 
      url: '/shortcuts',
      params: { category: 'text-editing' }
    },
    {
      url: '/shortcuts',
      params: { query: 'copy' }
    }
  ];

  for (const test of testCases) {
    const url = new URL(BASE_URL + test.url);
    if (test.params) {
      Object.entries(test.params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    console.log(`\nTesting ${url.toString()}`);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Status:', response.status);
      console.log('Response:', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
};

// 当直接运行脚本时执行测试
if (require.main === module) {
  console.log('Starting API tests...');
  testEndpoints().catch(console.error);
} 