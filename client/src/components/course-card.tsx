import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface CourseCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  gradient: string;
  buttonColor: string;
  onRegister: () => void;
}

export function CourseCard({ title, subtitle, price, features, gradient, buttonColor, onRegister }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className={`${gradient} text-white p-6`}>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="opacity-90">{subtitle}</p>
      </div>
      <div className="p-6">
        <div className="text-3xl font-bold text-primary mb-4">{price}</div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-secondary mt-1 mr-3 h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          onClick={onRegister}
          className={`w-full ${buttonColor} font-semibold py-3 px-6 rounded-lg transition-colors`}
        >
          Đăng Ký Ngay
        </Button>
      </div>
    </div>
  );
}
