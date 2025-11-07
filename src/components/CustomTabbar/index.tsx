import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { Tabbar, TabbarItem } from "@nutui/nutui-react-taro";
import { Home, Checklist, Book, Star, User } from "@nutui/icons-react-taro";
import "./index.scss";

const CustomTabbar = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // 获取当前页面路径并设置激活的tab
    const pages = Taro.getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const route = currentPage?.route || "";

    if (route.includes("home")) {
      setActive(0);
    } else if (route.includes("tasks")) {
      setActive(1);
    } else if (route.includes("courses")) {
      setActive(2);
    } else if (route.includes("stars")) {
      setActive(3);
    } else if (route.includes("profile")) {
      setActive(4);
    }
  }, []);

  const handleSwitch = (value: number) => {
    setActive(value);

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
      Taro.switchTab({
        url: targetPath,
      });
    }
  };

  return (
    <Tabbar value={active} onSwitch={handleSwitch}>
      <TabbarItem title="首页" icon={<Home size={20} />} />
      <TabbarItem title="任务" icon={<Checklist size={20} />} />
      <TabbarItem title="课程" icon={<Book size={20} />} />
      <TabbarItem title="星星" icon={<Star size={20} />} />
      <TabbarItem title="我的" icon={<User size={20} />} />
    </Tabbar>
  );
};

export default CustomTabbar;
