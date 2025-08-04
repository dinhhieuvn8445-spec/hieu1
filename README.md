# Hướng dẫn chạy dự án HDT AI trên Windows 10 với VS Code

Đây là hướng dẫn chi tiết để thiết lập và chạy dự án web HDT AI trên hệ điều hành Windows 10 sử dụng Visual Studio Code.

## 1. Yêu cầu hệ thống

Đảm bảo máy tính của bạn đã cài đặt các phần mềm sau:

*   **Node.js**: Phiên bản 18 trở lên (khuyến nghị phiên bản LTS). Bạn có thể tải xuống từ [nodejs.org](https://nodejs.org/).
*   **npm** (Node Package Manager): Thường được cài đặt kèm với Node.js.
*   **Visual Studio Code (VS Code)**: Trình soạn thảo mã nguồn miễn phí và mạnh mẽ. Tải xuống từ [code.visualstudio.com](https://code.visualstudio.com/).
*   **Git**: Để quản lý mã nguồn (tùy chọn, nếu bạn muốn clone dự án từ Git repository). Tải xuống từ [git-scm.com](https://git-scm.com/).

## 2. Thiết lập dự án

### 2.1. Tải xuống hoặc Clone dự án

Nếu bạn nhận được dự án dưới dạng tệp `.zip`:

1.  Giải nén tệp `hdtai_project_windows_modified_v5.zip` vào một thư mục mong muốn trên máy tính của bạn (ví dụ: `C:\Projects\hdtai_project`).

Nếu bạn clone dự án từ Git repository:

1.  Mở **Git Bash** hoặc **Command Prompt** (với quyền quản trị) hoặc **Terminal** trong VS Code.
2.  Điều hướng đến thư mục bạn muốn lưu dự án (ví dụ: `cd C:\Projects`).
3.  Sử dụng lệnh sau để clone dự án:
    ```bash
    git clone <đường_dẫn_repository_của_bạn>
    cd hdtai_project
    ```

### 2.2. Mở dự án trong VS Code

1.  Mở VS Code.
2.  Vào menu `File` > `Open Folder...` (hoặc `Mở thư mục...`).
3.  Điều hướng đến thư mục gốc của dự án đã giải nén hoặc clone (ví dụ: `C:\Projects\hdtai_project`) và nhấn `Select Folder` (hoặc `Chọn thư mục`).

## 3. Cài đặt các phụ thuộc

1.  Mở **Terminal** trong VS Code bằng cách vào menu `Terminal` > `New Terminal` (hoặc `Terminal` > `New Terminal`).
2.  Đảm bảo bạn đang ở thư mục gốc của dự án (ví dụ: `C:\Projects\hdtai_project`). Bạn sẽ thấy đường dẫn trong Terminal.
3.  Chạy lệnh sau để cài đặt tất cả các gói phụ thuộc cần thiết cho cả frontend và backend:
    ```bash
    npm install
    ```
    Quá trình này có thể mất vài phút tùy thuộc vào tốc độ mạng của bạn.

## 4. Cấu hình dự án (Quan trọng)

### 4.1. Cấu hình Google Sheets API (Nếu cần)

Dự án này có tích hợp với Google Sheets API. Để chức năng này hoạt động, bạn cần có tệp `service-account-key.json`.

*   **Nếu bạn đã có tệp này**: Đảm bảo tệp `service-account-key.json` nằm trong thư mục `server/` của dự án.
*   **Nếu bạn chưa có hoặc muốn tạo mới**: Bạn cần tạo một tài khoản dịch vụ Google Cloud và tải xuống tệp khóa JSON. Vui lòng tham khảo hướng dẫn `HUONG-DAN-GOOGLE-SHEETS.md` trong thư mục gốc của dự án để biết chi tiết.

**Lưu ý quan trọng**: Tệp `service-account-key.json` chứa thông tin nhạy cảm. Không chia sẻ tệp này công khai và không đưa vào các hệ thống kiểm soát phiên bản (như Git) trong môi trường sản phẩm.

### 4.2. Điều chỉnh cấu hình máy chủ (Nếu gặp lỗi truy cập)

Trong một số trường hợp, máy chủ có thể được cấu hình để chỉ lắng nghe trên `localhost` (127.0.0.1), điều này có thể gây ra vấn đề khi truy cập từ các thiết bị khác trong mạng hoặc trong môi trường ảo hóa.

Để đảm bảo ứng dụng có thể truy cập được, bạn có thể cần chỉnh sửa tệp `server/index.ts`:

1.  Mở tệp `server/index.ts` trong VS Code (nằm trong thư mục `server/`).
2.  Tìm dòng sau (khoảng dòng 66):
    ```typescript
    host: "127.0.0.1",
    ```
3.  Thay đổi nó thành:
    ```typescript
    host: "0.0.0.0",
    ```
    Thay đổi này cho phép máy chủ lắng nghe trên tất cả các giao diện mạng có sẵn.

## 5. Chạy dự án

Sau khi cài đặt các phụ thuộc và cấu hình (nếu cần), bạn có thể chạy dự án:

1.  Mở **Terminal** trong VS Code (nếu chưa mở).
2.  Đảm bảo bạn đang ở thư mục gốc của dự án.
3.  Chạy lệnh sau để khởi động cả frontend và backend ở chế độ phát triển:
    ```bash
    npm run dev
    ```
    Bạn sẽ thấy các thông báo trong Terminal cho biết máy chủ backend đang chạy (thường trên cổng 8080) và Vite đang biên dịch frontend.

## 6. Truy cập ứng dụng

1.  Mở trình duyệt web của bạn (Chrome, Firefox, Edge, v.v.).
2.  Nhập địa chỉ sau vào thanh địa chỉ:
    ```
    http://localhost:8080
    ```
    Hoặc nếu bạn đã thay đổi host thành `0.0.0.0` và muốn truy cập từ một thiết bị khác trong cùng mạng, bạn có thể sử dụng địa chỉ IP của máy tính Windows 10 của bạn (ví dụ: `http://<địa_chỉ_IP_của_bạn>:8080`).

Bạn sẽ thấy trang web HDT AI hiển thị trong trình duyệt.

## 7. Dừng dự án

Để dừng dự án đang chạy, quay lại Terminal trong VS Code và nhấn `Ctrl + C`.

Chúc bạn thành công!

