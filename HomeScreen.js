import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Nếu dùng Expo

// Hằng số cho màu sắc, kích thước và khoảng cách
const COLORS = {
  primary: '#007AFF',
  secondary: '#8E8E93',
  background: '#F9FAFB',
  text: '#555',
  headerText: '#7B61FF',
};

const SIZES = {
  avatar: 50,
  cardWidth: '48%',
  cardPadding: 40,
  bottomNavHeight: 100,
  headerPadding: 20,
  margin: 10,
  insightTitleSize: 18,
  greetingSize: 24,
  usernameSize: 16,
  imageWidth: 120, // Chiều rộng cho các ảnh trong Explore More
  imageHeight: 90, // Chiều cao cho các ảnh trong Explore More
};

export default function HomeScreen({ route }) {
  const { phoneNumber } = route.params || {}; // Nhận phoneNumber từ route.params

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>{phoneNumber || 'Christie Doe'}</Text>
        </View>
        <Image
          style={styles.avatar}
          source={require('./assets/Mask Group.png')} // Lấy ảnh từ thư mục assets
        />
      </View>

      <Text style={styles.insights}>Your Insights</Text>

      <View style={styles.grid}>
        <View style={styles.card}>
          <Ionicons name="scan-outline" size={24} color={COLORS.headerText} />
          <Text>Scan new</Text>
          <Text>Scanned 483</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="alert-outline" size={24} color="#FF6D61" />
          <Text>Counterfeits</Text>
          <Text>Counterfeited 32</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#34D399" />
          <Text>Success</Text>
          <Text>Checkouts 8</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="calendar-outline" size={24} color="#60A5FA" />
          <Text>Directory</Text>
          <Text>History 26</Text>
        </View>
      </View>

      <View style={styles.exploreContainer}>
        <Text style={styles.insights}>Explore More</Text>
        <Ionicons name="chevron-forward-outline" size={24} color={COLORS.primary} />
      </View>

      <View style={styles.grid}>
        <Image
          style={styles.image}
          source={require('./assets/Rectangle 31.png')} // Lấy ảnh từ thư mục assets
        />
        <Image
          style={styles.image}
          source={require('./assets/Rectangle 45.png')} // Lấy ảnh từ thư mục assets
        />
        <Image
          style={styles.image}
          source={require('./assets/Rectangle 45 (1).png')} // Lấy ảnh từ thư mục assets
        />
      </View>

      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={24} color={COLORS.primary} />
        <Ionicons name="notifications-outline" size={24} color={COLORS.secondary} />
        <Ionicons name="scan-outline" size={24} color={COLORS.secondary} />
        <Ionicons name="time-outline" size={24} color={COLORS.secondary} />
        <Ionicons name="cart-outline" size={24} color={COLORS.secondary} />
      </View>
    </View>
  );
}

// Styles cho giao diện
const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ không gian của màn hình
    backgroundColor: '#fff', // Màu nền trắng
    padding: 20, // Khoảng cách xung quanh
    justifyContent: 'flex-start', // Căn chỉnh nội dung từ trên xuống
  },
  header: {
    flexDirection: 'row', // Sắp xếp theo hàng
    justifyContent: 'space-between', // Căn chỉnh khoảng cách giữa các phần tử
    alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
    paddingVertical: SIZES.headerPadding, // Khoảng cách dọc cho header
  },
  greeting: {
    fontSize: SIZES.greetingSize, // Kích thước chữ cho lời chào
    fontWeight: 'bold', // Đậm chữ
  },
  username: {
    fontSize: SIZES.usernameSize, // Kích thước chữ cho tên người dùng
    color: COLORS.text, // Màu chữ
  },
  avatar: {
    width: SIZES.avatar, // Chiều rộng ảnh đại diện
    height: SIZES.avatar, // Chiều cao ảnh đại diện
    borderRadius: SIZES.avatar / 2, // Đường tròn cho ảnh
  },
  image: {
    width: SIZES.imageWidth, // Chiều rộng cho ảnh
    height: SIZES.imageHeight * (4 / 3), // Chiều cao cho ảnh theo tỷ lệ 4/3
    borderRadius: 10, // Bo góc cho ảnh
    marginRight: SIZES.margin, // Khoảng cách bên phải ảnh
    marginBottom: SIZES.margin, // Khoảng cách dưới ảnh
  },
  insights: {
    fontSize: SIZES.insightTitleSize, // Kích thước chữ cho tiêu đề thông tin
    marginVertical: SIZES.headerPadding, // Khoảng cách dọc trên và dưới
  },
  exploreContainer: {
    flexDirection: 'row', // Sắp xếp theo hàng
    justifyContent: 'space-between', // Căn chỉnh khoảng cách giữa tiêu đề và mũi tên
    alignItems: 'center', // Căn giữa các nội dung theo chiều dọc
  },
  grid: {
    flexDirection: 'row', // Sắp xếp theo hàng
    flexWrap: 'wrap', // Cho phép các thẻ bọc nếu không đủ không gian
    justifyContent: 'space-between', // Căn chỉnh khoảng cách giữa các thẻ
  },
  card: {
    width: SIZES.cardWidth, // Chiều rộng mỗi thẻ
    padding: SIZES.cardPadding, // Khoảng cách bên trong thẻ
    backgroundColor: COLORS.background, // Màu nền cho thẻ
    borderRadius: 10, // Bo góc cho thẻ
    marginBottom: SIZES.margin, // Khoảng cách dưới thẻ
    alignItems: 'center', // Căn giữa nội dung bên trong thẻ
  },
  bottomNav: {
    flexDirection: 'row', // Sắp xếp theo hàng
    justifyContent: 'space-around', // Căn chỉnh khoảng cách giữa các biểu tượng
    alignItems: 'center', // Căn giữa các biểu tượng theo chiều dọc
    paddingVertical: 10, // Khoảng cách dọc trên và dưới
    borderTopWidth: 1, // Đường viền trên
    borderTopColor: '#ccc', // Màu đường viền
    position: 'absolute', // Đặt vị trí tuyệt đối
    bottom: 0, // Cố định ở dưới cùng
    left: 0, // Cố định bên trái
    right: 0, // Cố định bên phải
    height: SIZES.bottomNavHeight, // Độ cao của thanh điều hướng
  },
});
