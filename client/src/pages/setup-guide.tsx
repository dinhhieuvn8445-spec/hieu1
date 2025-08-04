import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

export default function SetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔧 Hướng dẫn thiết lập Google Sheets
          </h1>
          <p className="text-xl text-gray-600">
            Kết nối form đăng ký với Google Sheets để tự động lưu dữ liệu khách hàng
          </p>
        </div>

        <div className="space-y-8">
          {/* Bước 1 */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                Chia sẻ Google Sheet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800 font-medium mb-2">
                  📧 Email Service Account (copy chính xác):
                </p>
                <code className="bg-white px-3 py-1 rounded border text-sm">
                  kingaihpt@make-gg-drive-vs2-455801.iam.gserviceaccount.com
                </code>
              </div>
              
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Mở Google Sheet của bạn</li>
                <li>Nhấn nút <strong>"Chia sẻ"</strong> ở góc trên bên phải</li>
                <li>Dán email service account vào ô "Thêm người và nhóm"</li>
                <li>Chọn quyền <strong>"Editor"</strong> (Người chỉnh sửa)</li>
                <li>Bỏ tích "Thông báo cho mọi người"</li>
                <li>Nhấn "Chia sẻ"</li>
              </ol>

              <Button asChild className="w-full mt-4">
                <a 
                  href="https://docs.google.com/spreadsheets/d/1Iup0DGtYbPQVAfK2DBuUvqo2qhZxnTAaQKHwb77heyA/edit" 
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Mở Google Sheet
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Bước 2 */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                Bật Google Sheets API
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Truy cập Google Cloud Console</li>
                <li>Nhấn nút <strong>"ENABLE"</strong> (Bật)</li>
                <li>Đợi thông báo "API enabled"</li>
              </ol>

              <Button asChild className="w-full mt-4">
                <a 
                  href="https://console.cloud.google.com/apis/library/sheets.googleapis.com?project=make-gg-drive-vs2-455801" 
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Mở Google Cloud Console
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Bước 3 */}
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                Kiểm tra kết nối
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">Cách kiểm tra:</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-green-700 ml-7">
                  <li>Vào trang chính của website</li>
                  <li>Thử đăng ký một khóa học</li>
                  <li>Kiểm tra Google Sheet - dữ liệu sẽ tự động xuất hiện!</li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">📊 Cấu trúc dữ liệu trong Sheet:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><strong>Cột A:</strong> ID đăng ký</div>
                  <div><strong>Cột B:</strong> Họ và tên</div>
                  <div><strong>Cột C:</strong> Email</div>
                  <div><strong>Cột D:</strong> Số điện thoại</div>
                  <div><strong>Cột E:</strong> Khóa học</div>
                  <div><strong>Cột F:</strong> Ghi chú</div>
                  <div><strong>Cột G:</strong> Ngày đăng ký</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lưu ý quan trọng */}
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-red-500" />
                Lưu ý quan trọng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">✅ Phải làm:</h4>
                  <ul className="space-y-1 text-sm text-green-600">
                    <li>• Email service account PHẢI có quyền Editor</li>
                    <li>• Google Sheets API PHẢI được Enable</li>
                    <li>• Sheet ID đã được cấu hình sẵn</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-700 mb-2">❌ Lỗi thường gặp:</h4>
                  <ul className="space-y-1 text-sm text-red-600">
                    <li>• Quên chia sẻ sheet với service account</li>
                    <li>• Cấp quyền Viewer thay vì Editor</li>
                    <li>• Chưa bật Google Sheets API</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a href="/">Quay về trang chủ</a>
          </Button>
        </div>
      </div>
    </div>
  );
}