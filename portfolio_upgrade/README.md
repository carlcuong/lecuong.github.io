# Portfolio cá nhân

Website portfolio tĩnh gồm:
- Trang chủ giới thiệu bản thân.
- Trang Projects với 6 dự án sử dụng CSS Grid.
- Form liên hệ HTML tích hợp Formspree.
- Responsive theo hướng mobile-first.
- Hiệu ứng xuất hiện khi cuộn bằng Intersection Observer.
- Dark mode toggle bằng JavaScript.

## Chạy thử
Mở `index.html` bằng trình duyệt hoặc dùng Live Server.

## Trước khi deploy
1. Thay tên, thông tin cá nhân và email mẫu trong `index.html`.
2. Thay `images/avatar.svg` bằng ảnh của bạn (cập nhật đường dẫn ảnh nếu đổi tên).
3. Tạo form tại https://formspree.io và thay `YOUR_FORM_ID` trong thuộc tính `action` của form.

## Deploy
Có thể import repository này vào Netlify hoặc Vercel. Đây là website tĩnh nên không cần build command; thư mục publish/output là thư mục gốc `.` hoặc `/` tùy giao diện nền tảng.
