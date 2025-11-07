import { View, Text, Image } from "@tarojs/components";
import { useEffect } from "react";
import "./index.scss";

const Home = () => {
  useEffect(() => {
    console.log("Home page loaded");
  }, []);

  return (
    <View className="home-page">
      <View className="home-content">
        {/* 家长中心卡片 */}
        <View className="parent-center-card">
          <View className="card-bg">
            <Text className="card-title">家长中心</Text>
            <Text className="card-subtitle">陪伴孩子快乐学习</Text>
          </View>
        </View>

        {/* 学生信息卡片 */}
        <View className="student-card">
          <View className="student-avatar">
            <Text className="avatar-text">小</Text>
          </View>
          <View className="student-info">
            <Text className="student-name">小明</Text>
            <Text className="student-class">大班A班 - 大班</Text>
          </View>

          <View className="stats-container">
            <View className="stat-item">
              <Text className="stat-value">1</Text>
              <Text className="stat-label">已完成</Text>
            </View>
            <View className="stat-item">
              <Text className="stat-value">1</Text>
              <Text className="stat-label">待完成</Text>
            </View>
            <View className="stat-item">
              <Text className="stat-value">50%</Text>
              <Text className="stat-label">完成率</Text>
            </View>
          </View>

          {/* 星星数量 */}
          <View className="stars-badge">
            <Text className="star-icon">⭐</Text>
            <Text className="star-count">1</Text>
          </View>

          {/* 操作按钮 */}
          <View className="action-buttons">
            <View className="action-btn">
              <Text className="btn-icon">🏆</Text>
              <Text className="btn-text">徽章</Text>
            </View>
            <View className="action-btn">
              <Text className="btn-icon">📊</Text>
              <Text className="btn-text">报告</Text>
            </View>
          </View>
        </View>

        {/* 最近活动 */}
        <View className="recent-activity">
          <Text className="section-title">最近活动</Text>

          <View className="activity-list">
            <View className="activity-item">
              <View className="activity-icon">
                <Image
                  className="icon-img"
                  src="https://via.placeholder.com/80x80"
                  mode="aspectFit"
                />
              </View>
              <View className="activity-info">
                <Text className="activity-title">字母A学习打卡</Text>
                <Text className="activity-time">1小时前</Text>
              </View>
            </View>

            <View className="activity-item">
              <View className="activity-icon">
                <Image
                  className="icon-img"
                  src="https://via.placeholder.com/80x80"
                  mode="aspectFit"
                />
              </View>
              <View className="activity-info">
                <Text className="activity-title">字母B学习打卡</Text>
                <Text className="activity-time">1小时前</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
