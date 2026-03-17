# Quiz App - React + Vite

Đây là một ứng dụng trắc nghiệm (Quiz) đơn giản được xây dựng bằng React và Vite, giúp người dùng kiểm tra kiến thức về lập trình JavaScript và cấu trúc dữ liệu cơ bản.

## 🚀 Tính năng chính

* **Bộ câu hỏi đa dạng**: Bao gồm 12 câu hỏi về JavaScript (kiểu dữ liệu, toán tử, JSON...), thuật toán (Big O, Merge Sort) và cấu trúc dữ liệu (Stack, Queue).
* **Phản hồi tức thì**: Hiển thị thông báo đúng/sai ngay sau khi người dùng chọn đáp án.
* **Điều hướng linh hoạt**: Cho phép người dùng quay lại câu hỏi trước đó hoặc chuyển sang câu kế tiếp.
* **Kết quả chi tiết**: Hiển thị tổng số câu trả lời đúng sau khi hoàn thành bài thi.
* **Tùy chọn làm lại**: Người dùng có thể chọn "Xem lại" để kiểm tra các câu đã làm hoặc "Làm lại" để bắt đầu lượt mới.
* **Giao diện thân thiện**: Sử dụng CSS tùy chỉnh với thiết kế hiện đại, hỗ trợ hiệu ứng khi di chuột và phản hồi màu sắc cho các tùy chọn.

## 🛠️ Công nghệ sử dụng

* **Frontend**: React 19.
* **Công cụ build**: Vite.
* **Ngôn ngữ**: JavaScript (JSX).
* **Styling**: CSS.
* **Linting**: ESLint.

## 📂 Cấu trúc dự án tiêu biểu

* `src/components/Quiz.jsx`: Chứa dữ liệu câu hỏi và logic chính của bài trắc nghiệm.
* `src/components/Result.jsx`: Thành phần hiển thị kết quả cuối cùng và các nút điều hướng.
* `src/App.jsx`: Thành phần bao bọc chính của ứng dụng.
* `src/index.css`: Các định nghĩa kiểu dáng toàn cục cho ứng dụng.

## 💻 Hướng dẫn cài đặt và chạy

1.  **Cài đặt các gói phụ thuộc**:
    ```bash
    npm install
    ```
    *(Dựa trên cấu trúc file `package.json`).*

2.  **Chạy ứng dụng ở chế độ phát triển**:
    ```bash
    npm run dev
    ```
   .

3.  **Xây dựng dự án cho sản xuất**:
    ```bash
    npm run build
    ```
   .
