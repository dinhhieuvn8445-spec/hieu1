import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface RegistrationData {
  fullname: string;
  email: string;
  phone: string;
  selectedCourse: string;
  notes: string;
}

export function RegistrationForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<RegistrationData>({
    fullname: "",
    email: "",
    phone: "",
    selectedCourse: "",
    notes: ""
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: RegistrationData) => {
      return await apiRequest("POST", "/api/registrations", data);
    },
    onSuccess: () => {
      toast({
        title: "Đăng ký thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.",
      });
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        selectedCourse: "",
        notes: ""
      });
    },
    onError: () => {
      toast({
        title: "Lỗi đăng ký",
        description: "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.phone || !formData.selectedCourse) {
      toast({
        title: "Thiếu thông tin",
        description: "Vui lòng điền đầy đủ thông tin bắt buộc.",
        variant: "destructive",
      });
      return;
    }
    registrationMutation.mutate(formData);
  };

  return (
    <div className="py-16 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark mb-4">ĐĂNG KÍ NHẬN ƯU ĐÃI</h2>
            <p className="text-gray-600">Chọn gói khóa học phù hợp với nhu cầu của bạn</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullname">Họ và tên *</Label>
                <Input
                  id="fullname"
                  type="text"
                  required
                  value={formData.fullname}
                  onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Số điện thoại *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="course">Chọn gói khóa học *</Label>
              <Select value={formData.selectedCourse} onValueChange={(value) => setFormData({...formData, selectedCourse: value})}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="-- Chọn sản phẩm --" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-master">PHẦN I – AI MASTER - 3.000K</SelectItem>
                  <SelectItem value="ai-automation">PHẦN II – AI AUTOMATION - 3.000K</SelectItem>
                  <SelectItem value="ai-real-work">PHẦN III – AI IN REAL WORK - 4.000K</SelectItem>
                  <SelectItem value="full-combo">Full combo + 365 ngày support - 9.000K</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="notes">Ghi chú (tùy chọn)</Label>
              <Textarea
                id="notes"
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="mt-2"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors"
              disabled={registrationMutation.isPending}
            >
              {registrationMutation.isPending ? "Đang xử lý..." : "Đăng Ký Gói"}
            </Button>
          </form>

          {/* Payment Information */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Thông tin chuyển khoản</h3>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Ngân hàng:</p>
                  <p className="font-semibold">Techcombank</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Chủ tài khoản:</p>
                  <p className="font-semibold">Hoang Anh Tu</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">Số tài khoản:</p>
                <p className="font-semibold text-lg">88043333333</p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Lưu ý quan trọng:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>1️⃣ Chỉ chuyển khoản sau khi đã hoàn tất bấm "Đăng ký gói"</li>
                  <li>2️⃣ Khi chuyển khoản, vui lòng ghi rõ HỌ TÊN + SỐ ĐIỆN THOẠI</li>
                  <li>3️⃣ Giữ lại biên lai/chụp màn hình giao dịch để đối chiếu</li>
                  <li>4️⃣ Trong vòng 24 giờ sẽ có nhân viên liên hệ xác nhận</li>
                  <li>5️⃣ Tuyệt đối không chuyển qua bất kỳ số tài khoản khác</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
