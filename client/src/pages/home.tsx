import { Navigation } from "@/components/navigation";
import { CountdownTimer } from "@/components/countdown-timer";
import { CourseCard } from "@/components/course-card";
import { InstructorCard } from "@/components/instructor-card";
import { RegistrationForm } from "@/components/registration-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  BookOpen, 
  GraduationCap, 
  Settings, 
  Headphones,
  Building2,
  Clock,
  Users,
  ShieldCheck,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import hoangAnhTuImage from "@assets/vietnamese_young_man_1754217683188.png";
import thanhHaiImage from "@assets/vietnamese_young_man_3_1754218068630.png";
import hptImage from "@assets/thịnh công tử_1754217233670.png";

export default function Home() {
  const scrollToRegistration = () => {
    const element = document.getElementById('dang-ky');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courses = [
    {
      title: "PHẦN I – AI MASTER",
      subtitle: "Nền tảng ChatGPT căn bản",
      price: "3.000.000đ",
      features: [
        "Làm quen ChatGPT: khái niệm, cách vận hành",
        "Kỹ năng quản lý session hiệu quả",
        "5 phương pháp ra lệnh chuẩn",
        "Thực hành cơ bản: tóm tắt, dịch thuật, viết bài"
      ],
      gradient: "bg-gradient-to-r from-blue-500 to-primary",
      buttonColor: "bg-primary hover:bg-blue-700"
    },
    {
      title: "PHẦN II – AI AUTOMATION",
      subtitle: "Tự động hóa & xây dựng chatbot",
      price: "3.000.000đ",
      features: [
        "Cá nhân hóa ChatGPT nâng cao",
        "Xây dựng chatbot tự động",
        "Kết nối fanpage, Zalo",
        "Tạo video với ChatGPT"
      ],
      gradient: "bg-gradient-to-r from-green-500 to-secondary",
      buttonColor: "bg-secondary hover:bg-green-600"
    },
    {
      title: "PHẦN III – AI IN REAL WORK",
      subtitle: "Ứng dụng thực tế Word & Excel",
      price: "4.000.000đ",
      features: [
        "ChatGPT hỗ trợ xử lý văn bản Word",
        "Sử dụng ChatGPT với Excel",
        "Tự động hóa công việc văn phòng",
        "Bài tập thực hành trực tiếp"
      ],
      gradient: "bg-gradient-to-r from-orange-500 to-accent",
      buttonColor: "bg-accent hover:bg-yellow-500"
    }
  ];

  const instructors = [
    {
      name: "Hoàng Anh Tú",
      title: "Chuyên gia đào tạo",
      expertise: "Canva, ChatGPT, Capcut, YouTube, Tiktok",
      description: "Tôi đã giảng dạy về các công cụ hỗ trợ Marketing, các công cụ AI như Leonardo AI, KlingAI, Digen, HeyGen, D-ID, Video-Gen và các công cụ hỗ trợ viết content...",
      imageUrl: hoangAnhTuImage
    },
    {
      name: "Thanh Hải",
      title: "Chuyên gia Automation",
      expertise: "Make, N8N, Rapier, Fchat, ManyChat, PrenyChat",
      description: "Tôi đã giảng dạy về các công cụ hỗ trợ Marketing, các công cụ Automations hỗ trợ xây dựng quy trình tự động hóa cho nhiều cá nhân và doanh nghiệp...",
      imageUrl: thanhHaiImage
    },
    {
      name: "HPT",
      title: "Chuyên gia Lập trình AI",
      expertise: "Open Hand, Devin, OpenAI, Lập trình OOP",
      description: "Tôi đã giảng dạy về các công cụ mã nguồn mở, các công cụ AI và lập trình mã nguồn mở, lập trình hướng đối tượng...",
      imageUrl: hptImage
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-accent/20 border border-accent/30 rounded-full px-6 py-2 inline-block mb-6">
              <p className="text-sm font-medium">Dành riêng cho 200 người đăng kí đầu tiên</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-accent">0 VNĐ</span>
            </h1>
            

            
            <p className="text-lg mb-8 opacity-90">
              (Áp dụng các khóa học Online + Offline của Giảng viên HDT AI)
            </p>

            <CountdownTimer />

            <Button 
              onClick={scrollToRegistration}
              className="bg-accent hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              ĐĂNG KÍ NHẬN ƯU ĐÃI
            </Button>
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section id="gioi-thieu" className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Video giới thiệu về HDT AI</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Các bài giảng trong khóa học được thiết kế ngắn gọn, dễ hiểu, kèm ví dụ thực tiễn. Bạn có thể học từ căn bản đến nâng cao, tùy theo mục tiêu công việc: từ tạo nội dung, xử lý file Word & Excel, đến xây dựng chatbot và cá nhân hóa trợ lý ảo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/69FYCcXnWhs?si=Hnsn3whixBoU6xP_"
                  title="Video giới thiệu khóa học HDT AI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  data-testid="video-course-intro"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Bài giảng mẫu - ChatGPT trong công việc thực tế</h3>
                <p className="text-gray-600">
                  Trong bài giảng này, bạn sẽ trải nghiệm cách ChatGPT hỗ trợ soạn thảo, tóm tắt, dịch thuật, lập kế hoạch và tự động hóa công việc văn phòng. Bạn sẽ học cách ra lệnh chuẩn, chia session hiệu quả, cũng như hiểu rõ các ứng dụng thực tế.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Thế mạnh/Điểm mạnh</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mô tả chung về khóa học chúng tôi cung cấp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Nội dung toàn diện, thực tế</h3>
                <p className="text-gray-600 text-sm">
                  Khóa học được xây dựng từ nền tảng căn bản đến nâng cao, giúp bạn hiểu cách làm việc thực sự với ChatGPT từ quản lý session đến ứng dụng thực tế.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="text-secondary h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Phương pháp đào tạo khoa học</h3>
                <p className="text-gray-600 text-sm">
                  Áp dụng 5 phương pháp ra lệnh độc quyền: mô tả rõ ràng, đặt vai trò, chia bước, dùng mẫu định dạng và phản hồi từng vòng.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Bộ prompt mẫu độc quyền</h3>
                <p className="text-gray-600 text-sm">
                  Hàng chục prompt mẫu chất lượng cao, template sẵn dùng, cùng các ví dụ minh họa thực chiến từng bước.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="text-purple-600 h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Hỗ trợ cá nhân hóa</h3>
                <p className="text-gray-600 text-sm">
                  Mentoring 1:1, nhóm hỗ trợ riêng, cập nhật liên tục theo công nghệ mới nhất và xu hướng AI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="khoa-hoc" className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Khóa Học Chuyên Nghiệp</h2>
            <p className="text-lg text-gray-600">Lộ trình học từ cơ bản đến nâng cao</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                {...course}
                onRegister={scrollToRegistration}
              />
            ))}
          </div>

          {/* Full Combo Package */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">COMBO ĐẶC BIỆT</h3>
              <p className="text-xl mb-6">Học full combo 3 khóa + 365 ngày support</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl line-through opacity-70">10.000.000đ</span>
                <span className="text-4xl font-bold">9.000.000đ</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Giảm 10%</span>
              </div>
              <p className="mb-8 opacity-90">Đăng ký trước ngày 30/10/2025</p>
              <Button 
                onClick={scrollToRegistration}
                className="bg-white text-purple-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors"
              >
                NHANH TAY LÊN! ĐĂNG KÍ COMBO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Người chắp cánh đam mê</h2>
            <p className="text-lg text-gray-600">Thông tin nổi bật về đội ngũ nhân sự của HDT</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <InstructorCard key={index} {...instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="dang-ky">
        <RegistrationForm />
      </section>

      {/* Contact Section */}
      <section id="lien-he" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Liên Hệ</h2>
            <p className="text-lg text-gray-600">Kết nối với chúng tôi để được hỗ trợ tốt nhất</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Office Information */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Building2 className="text-primary mr-3 h-5 w-5" />
                  ĐỊA CHỈ VĂN PHÒNG
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600 flex items-start">
                    <MapPin className="text-primary mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                    203 Bế Văn Đàn - Quang Trung - Đống Đa - Hà Nội
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Phone className="text-primary mr-2 h-4 w-4" />
                    +84 33 473 4875
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Mail className="text-primary mr-2 h-4 w-4" />
                    gattsvn@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="text-secondary mr-3 h-5 w-5" />
                  THỜI GIAN LÀM VIỆC
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Thứ 2 - Thứ 6:</span> 8AM đến 5PM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Thứ 7:</span> 8AM đến 11AM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Chủ nhật:</span> Nghỉ
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Community Groups */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="text-accent mr-3 h-5 w-5" />
                  HỘI NHÓM
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://zalo.me/g/ylfdge520" 
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Users className="mr-3 h-4 w-4" />
                    Nhóm Zalo HDT AI
                  </a>
                  <p className="text-gray-600 flex items-center">
                    <Users className="mr-3 h-4 w-4" />
                    Nhóm Telegram: (đang cập nhật)
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Users className="mr-3 h-4 w-4" />
                    Fanpage FB: (đang cập nhật)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Privacy Policy */}
          <div className="mt-12 text-center">
            <Card className="p-6 max-w-3xl mx-auto bg-gray-50">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-3 flex items-center justify-center">
                  <ShieldCheck className="text-primary mr-2 h-5 w-5" />
                  CHÍNH SÁCH & BẢO MẬT
                </h3>
                <p className="text-gray-600 mb-2">Cập nhật lần cuối: 02/07/2025</p>
                <p className="text-sm text-gray-500">
                  Chúng tôi cam kết bảo vệ thông tin cá nhân và quyền riêng tư của khách hàng. 
                  Tất cả dữ liệu được thu thập và xử lý tuân thủ nghiêm ngặt các quy định pháp luật hiện hành.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">HDT AI</h3>
              <p className="text-gray-300 mb-4">
                Công ty cổ phần thương mại điện tử HDT AI
              </p>
              <p className="text-gray-400 text-sm">
                Công nghệ AI Tự động hóa – Giáo dục
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h4>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('gioi-thieu')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Giới thiệu</button></li>
                <li><button onClick={() => document.getElementById('khoa-hoc')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Khóa học</button></li>
                <li><button className="text-gray-300 hover:text-white transition-colors">Tin tức</button></li>
                <li><button onClick={() => document.getElementById('lien-he')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Liên hệ</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Khóa Học Khác</h4>
              <ul className="space-y-2">
                <li><a href="https://www.kingai.com.vn/canva" className="text-gray-300 hover:text-white transition-colors">Canva</a></li>
                <li><a href="https://www.kingai.com.vn/chatgpt" className="text-gray-300 hover:text-white transition-colors">ChatGPT</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 HDT AI. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
