import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">HDT AI</h1>
              <p className="text-xs text-gray-600">Công nghệ AI Tự động hóa – Giáo dục</p>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('gioi-thieu')}
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Giới thiệu
              </button>
              <button 
                onClick={() => scrollToSection('khoa-hoc')}
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Khóa học
              </button>
              <button 
                onClick={() => scrollToSection('tin-tuc')}
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Tin tức
              </button>
              <button 
                onClick={() => scrollToSection('lien-he')}
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Liên hệ
              </button>
            </div>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('gioi-thieu')}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary w-full text-left"
              >
                Giới thiệu
              </button>
              <button 
                onClick={() => scrollToSection('khoa-hoc')}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary w-full text-left"
              >
                Khóa học
              </button>
              <button 
                onClick={() => scrollToSection('tin-tuc')}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary w-full text-left"
              >
                Tin tức
              </button>
              <button 
                onClick={() => scrollToSection('lien-he')}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary w-full text-left"
              >
                Liên hệ
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
