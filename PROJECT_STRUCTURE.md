# 项目结构说明

## 概述
这是一个基于 Taro 3 + React + MobX + TailwindCSS 的幼儿园应用项目，支持微信小程序、H5、支付宝小程序等多端开发。

## 目录结构

```
src/
├── components/           # 全局组件
│   └── Header/          # 顶部导航组件
│       ├── index.tsx    # 组件逻辑
│       └── index.scss   # 组件样式
│
├── pages/               # 页面目录
│   ├── home/           # 首页（家长中心）
│   │   ├── index.tsx
│   │   ├── index.scss
│   │   └── index.config.ts
│   ├── tasks/          # 任务页面
│   │   ├── index.tsx
│   │   ├── index.scss
│   │   └── index.config.ts
│   ├── courses/        # 课程页面
│   │   ├── index.tsx
│   │   ├── index.scss
│   │   └── index.config.ts
│   ├── stars/          # 星星页面
│   │   ├── index.tsx
│   │   ├── index.scss
│   │   └── index.config.ts
│   └── profile/        # 我的页面
│       ├── index.tsx
│       ├── index.scss
│       └── index.config.ts
│
├── shared/             # 共享资源
│   ├── components/     # 共享组件
│   ├── store/          # MobX 状态管理
│   ├── utils/          # 工具函数
│   └── server/         # API 接口
│
├── assets/             # 静态资源
│   └── icons/          # TabBar 图标
│
├── app.tsx             # 应用入口
└── app.config.ts       # 应用配置（包含 TabBar 配置）
```

## 核心组件

### Header 组件
位置：`src/components/Header/index.tsx`

功能：
- 显示应用标题和 logo
- 显示用户信息（头像和姓名）
- 响应式设计，适配不同设备

属性：
- `title`: 应用标题（默认：睿式幼儿园）
- `userName`: 用户名（默认：张女士）

### 页面结构

#### 1. 首页 (Home)
路径：`src/pages/home/index.tsx`

功能：
- 家长中心卡片展示
- 学生信息卡片（头像、姓名、班级）
- 学习统计（已完成、待完成、完成率）
- 星星徽章展示
- 最近活动列表

#### 2. 任务页面 (Tasks)
路径：`src/pages/tasks/index.tsx`
功能：待开发

#### 3. 课程页面 (Courses)
路径：`src/pages/courses/index.tsx`
功能：待开发

#### 4. 星星页面 (Stars)
路径：`src/pages/stars/index.tsx`
功能：待开发

#### 5. 我的页面 (Profile)
路径：`src/pages/profile/index.tsx`
功能：待开发

## TabBar 配置

位置：`src/app.config.ts`

包含 5 个Tab：
1. 首页 - home
2. 任务 - tasks
3. 课程 - courses
4. 星星 - stars
5. 我的 - profile

TabBar 图标位置：`src/assets/icons/`

当前使用占位图标，需要替换为实际设计图标（尺寸：81px × 81px）

## 路径别名配置

项目配置了以下路径别名：

- `@/*` → `src/*` （所有 src 目录下的文件）
- `@shared/*` → `src/shared/*` （共享资源）

示例：
```typescript
import Header from '@/components/Header';
import { GlobalStore } from '@shared/store';
```

## 技术栈

- **框架**: Taro 3.6.23
- **UI**: React 17
- **状态管理**: MobX 6
- **样式**:
  - SCSS
  - TailwindCSS (weapp-tailwindcss)
  - NutUI React Taro
- **构建工具**: Webpack 5
- **测试**: Jest

## 开发命令

```bash
# 安装依赖
npm install --force

# 微信小程序开发模式
npm run dev:weapp

# H5 开发模式
npm run dev:h5

# 支付宝小程序开发模式
npm run dev:alipay

# 构建微信小程序
npm run build:weapp

# 运行测试
npm test
```

## 样式规范

### 尺寸单位
- 使用 `rpx` 作为主要单位（750px 设计稿）
- NutUI 组件使用 375px 设计稿（已配置自动转换）

### 颜色规范
- 主色调：`#4a90e2`（蓝色）
- 背景色：`#f5f7fa`（浅灰）
- 文字颜色：
  - 主文字：`#333333`
  - 次要文字：`#999999`
- 边框颜色：`#f0f0f0`

### 圆角规范
- 小圆角：`8rpx`
- 中圆角：`16rpx`
- 大圆角：`24rpx`
- 圆形：`50%`

## 下一步开发建议

1. **替换 TabBar 图标**
   - 设计或下载符合应用风格的图标
   - 尺寸：81px × 81px
   - 格式：PNG，透明背景
   - 位置：`src/assets/icons/`

2. **完善页面功能**
   - 任务页面：学习任务列表、任务详情
   - 课程页面：课程列表、课程播放
   - 星星页面：星星历史、兑换商城
   - 我的页面：个人信息、设置、帮助

3. **添加 API 接口**
   - 用户信息接口
   - 学生信息接口
   - 任务数据接口
   - 课程数据接口

4. **状态管理**
   - 完善 GlobalStore
   - 添加 UserStore
   - 添加 TaskStore
   - 添加 CourseStore

5. **优化建议**
   - 添加骨架屏（loading 状态）
   - 添加错误处理
   - 添加埋点统计
   - 优化性能（图片懒加载等）

## 注意事项

1. **图标资源**
   - 当前使用的是占位图标
   - 需要替换为实际设计图标

2. **路径别名**
   - 使用 `@/` 引用 src 目录下的文件
   - 使用 `@shared/` 引用共享资源

3. **自定义导航栏**
   - 所有页面都使用 `navigationStyle: "custom"`
   - 需要自己实现顶部导航（已有 Header 组件）

4. **样式适配**
   - TailwindCSS 已配置 weapp-tailwindcss 适配
   - 可以直接使用 Tailwind 类名
   - SCSS 也可以正常使用

## 问题反馈

如有问题，请查看：
- Taro 文档：https://taro-docs.jd.com/
- TailwindCSS 文档：https://tailwindcss.com/
- MobX 文档：https://mobx.js.org/
