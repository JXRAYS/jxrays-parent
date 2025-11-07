/**
 * 创建TabBar占位图标
 * 使用纯色方块作为临时图标
 */

const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../src/assets/icons');

// 确保目录存在
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 简单的base64编码的1x1像素PNG图片（灰色）
const grayPixel = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// 简单的base64编码的1x1像素PNG图片（蓝色）
const bluePixel = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

const icons = [
  'home',
  'tasks',
  'courses',
  'stars',
  'profile'
];

// 创建占位图标
icons.forEach(icon => {
  const normalPath = path.join(iconsDir, `${icon}.png`);
  const activePath = path.join(iconsDir, `${icon}-active.png`);

  fs.writeFileSync(normalPath, Buffer.from(grayPixel, 'base64'));
  fs.writeFileSync(activePath, Buffer.from(bluePixel, 'base64'));

  console.log(`Created: ${icon}.png and ${icon}-active.png`);
});

console.log('\n✅ All placeholder icons created successfully!');
console.log('📝 Please replace them with actual icon images later.');
