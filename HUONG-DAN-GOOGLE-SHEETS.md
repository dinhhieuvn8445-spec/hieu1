# ✅ HƯỚNG DẪN THIẾT LẬP GOOGLE SHEETS CHO FORM ĐĂNG KÝ

## 🎯 Mục tiêu
Kết nối form đăng ký trên website với Google Sheets để tự động lưu dữ liệu khách hàng.

## 📋 BƯỚC 1: Chia sẻ Google Sheet

### Thực hiện:
1. **Mở Google Sheet của bạn**: 
   👉 https://docs.google.com/spreadsheets/d/1Iup0DGtYbPQVAfK2DBuUvqo2qhZxnTAaQKHwb77heyA/edit

2. **Nhấn nút "Chia sẻ"** (Share) ở góc trên bên phải

3. **Thêm email service account**:
   - Dán email này vào ô "Thêm người và nhóm": 
   ```
   kingaihpt@make-gg-drive-vs2-455801.iam.gserviceaccount.com
   ```

4. **Cấp quyền Editor**:
   - Chọn "Editor" (Người chỉnh sửa) từ dropdown
   - Bỏ tích "Thông báo cho mọi người" 
   - Nhấn "Chia sẻ"

---

## 🔧 BƯỚC 2: Bật Google Sheets API

### Thực hiện:
1. **Truy cập Google Cloud Console**:
   👉 https://console.cloud.google.com/apis/library/sheets.googleapis.com?project=make-gg-drive-vs2-455801

2. **Nhấn nút "ENABLE"** (Bật)

3. **Đợi thông báo "API enabled"**

---

## 🧪 BƯỚC 3: Kiểm tra kết nối

Sau khi hoàn thành 2 bước trên:

1. **Vào website và thử đăng ký** một khóa học
2. **Kiểm tra Google Sheet** - dữ liệu sẽ tự động xuất hiện!

### 📊 Cấu trúc dữ liệu trong Sheet:
| Cột | Nội dung |
|-----|----------|
| A   | ID đăng ký |
| B   | Họ và tên |
| C   | Email |
| D   | Số điện thoại |
| E   | Khóa học đã chọn |
| F   | Ghi chú |
| G   | Ngày đăng ký |

---

## ❗ QUAN TRỌNG:

### ✅ Phải làm:
- ✅ Email service account PHẢI có quyền **Editor**
- ✅ Google Sheets API PHẢI được **Enable**
- ✅ Sheet ID đã cấu hình: `1Iup0DGtYbPQVAfK2DBuUvqo2qhZxnTAaQKHwb77heyA`

### ❌ Lỗi thường gặp:
- ❌ Quên chia sẻ sheet với service account
- ❌ Cấp quyền Viewer thay vì Editor
- ❌ Chưa bật Google Sheets API

---

## 🆘 Hỗ trợ
Nếu gặp vấn đề, hãy kiểm tra:
1. Sheet đã được chia sẻ với đúng email?
2. API đã được bật trong Google Cloud Console?
3. Thử đăng ký test trên website và xem sheet có cập nhật không?