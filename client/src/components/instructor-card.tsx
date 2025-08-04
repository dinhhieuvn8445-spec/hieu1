interface InstructorCardProps {
  name: string;
  title: string;
  expertise: string;
  description: string;
  imageUrl: string;
}

export function InstructorCard({ name, title, expertise, description, imageUrl }: InstructorCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
      <img 
        src={imageUrl} 
        alt={`Giảng viên ${name}`} 
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Giảng viên: {name}</h3>
      <p className="text-primary font-medium mb-3">{title}</p>
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <p className="text-sm text-gray-600 font-medium">Chuyên môn:</p>
        <p className="text-sm">{expertise}</p>
      </div>
      <p className="text-sm text-gray-600 italic">"{description}"</p>
    </div>
  );
}
