import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { Tabbar, TabbarItem } from "@nutui/nutui-react-taro";
import { Home, Checklist, Book, Star, User } from "@nutui/icons-react-taro";
import "./index.scss";

const CustomTabbar = () => {
  const [active, setActive] = useState(0);

  // 获取当前应该激活的 tab 索引
  const getActiveIndex = () => {
    const pages = Taro.getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const route = currentPage?.route || "";

    if (route.includes("home")) {
      return 0;
    } else if (route.includes("tasks")) {
      return 1;
    } else if (route.includes("courses")) {
      return 2;
    } else if (route.includes("stars")) {
      return 3;
    } else if (route.includes("profile")) {
      return 4;
    }
    return 0;
  };

  // 更新当前激活的 tab（只在状态真正变化时才更新，避免闪烁）
  const updateActiveTab = () => {
    const newActive = getActiveIndex();
    setActive((prev) => {
      // 只有当状态真正变化时才更新
      if (prev !== newActive) {
        return newActive;
      }
      return prev;
    });
  };

  useEffect(() => {
    // 初始化时更新一次
    updateActiveTab();

    // 使用定时器定期检查路由变化
    const timer = setInterval(() => {
      updateActiveTab();
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSwitch = (value: number) => {
    // 页面路径映射
    const pathMap = [
      "/pages/home/index",
      "/pages/tasks/index",
      "/pages/courses/index",
      "/pages/stars/index",
      "/pages/profile/index",
    ];

    const targetPath = pathMap[value];
    if (targetPath) {
      // 先立即更新状态，避免延迟感
      setActive(value);

      // 然后进行页面跳转
      Taro.switchTab({
        url: targetPath,
      });
    }
  };

  return (
    <Tabbar
      value={active}
      onSwitch={handleSwitch}
      activeColor="#1890ff"
      inactiveColor="#999"
    >
      <TabbarItem title="首页" icon={<Home size={20} />} />
      <TabbarItem title="任务" icon={<Checklist size={20} />} />
      <TabbarItem title="课程" icon={<Book size={20} />} />
      <TabbarItem title="星星" icon={<Star size={20} />} />
      <TabbarItem title="我的" icon={<User size={20} />} />
    </Tabbar>
  );
};

export default CustomTabbar;
