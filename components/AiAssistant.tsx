
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Heart, Cog, Lock } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import { Accordion, AccordionItem } from './ui/Accordion';
import AiChatModal from './AiChatModal';
import type { ChatMessage } from '../types';

type AiTopic = 'Học tập' | 'Cảm xúc' | 'Hành chính' | 'Bảo mật';

const aiFeatures = [
  {
    value: 'learning',
    title: 'Hỗ trợ học tập cá nhân hóa',
    icon: Book,
    color: 'green',
    description: 'Trợ lý AI cung cấp lộ trình học tập riêng, giải đáp thắc mắc, tóm tắt bài giảng và tạo câu hỏi ôn tập dựa trên năng lực và mục tiêu của bạn.',
    features: ['Giải đáp kiến thức 24/7', 'Tóm tắt bài giảng & tài liệu', 'Tạo flashcard và bài kiểm tra thử', 'Gợi ý tài liệu học tập liên quan'],
    buttonText: 'Chat với AI học tập',
  },
  {
    value: 'emotional',
    title: 'Hỗ trợ cảm xúc và sức khỏe tinh thần',
    icon: Heart,
    color: 'purple',
    description: 'Một người bạn đồng hành ảo, giúp bạn quản lý căng thẳng, lắng nghe và cung cấp các bài tập thư giãn để cải thiện sức khỏe tinh thần.',
    features: ['Không gian trò chuyện an toàn, riêng tư', 'Bài tập thiền và chánh niệm', 'Theo dõi tâm trạng và gợi ý tích cực', 'Kết nối với chuyên gia tư vấn khi cần'],
    buttonText: 'Chat với AI cảm xúc',
  },
  {
    value: 'admin',
    title: 'Tự động hóa thủ tục hành chính',
    icon: Cog,
    color: 'orange',
    description: 'Đơn giản hóa các quy trình phức tạp. AI sẽ hướng dẫn bạn từng bước, điền biểu mẫu tự động và theo dõi tiến độ hồ sơ.',
    features: ['Hướng dẫn đăng ký học phần, tín chỉ', 'Tự động điền thông tin vào biểu mẫu', 'Theo dõi trạng thái xử lý hồ sơ', 'Nhắc nhở các mốc thời gian quan trọng'],
    buttonText: 'Hỏi đáp thủ tục',
  },
  {
    value: 'security',
    title: 'Đảm bảo minh bạch & bảo mật dữ liệu',
    icon: Lock,
    color: 'teal',
    description: 'Sử dụng công nghệ blockchain để bảo vệ dữ liệu cá nhân và học tập của bạn, đảm bảo tính toàn vẹn và minh bạch tuyệt đối.',
    features: ['Mã hóa đầu cuối các cuộc trò chuyện', 'Quản lý quyền truy cập dữ liệu', 'Lưu trữ hồ sơ học tập an toàn', 'Minh bạch trong việc sử dụng dữ liệu'],
    buttonText: 'Tìm hiểu về bảo mật',
  },
];

const AiAssistant: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState<AiTopic>('Học tập');

  const openChat = (topic: AiTopic) => {
    setActiveTopic(topic);
    setModalOpen(true);
  };
  
  return (
    <>
      <Card title="Trợ lý AI đa năng">
        <p className="mb-6 text-slate-600 dark:text-slate-300">Khám phá các tính năng hỗ trợ thông minh được thiết kế riêng cho sinh viên Văn Hiến.</p>
        <Accordion>
          {aiFeatures.map((item, index) => {
            const Icon = item.icon;
            const colorClass = {
              green: 'text-green-500',
              purple: 'text-purple-500',
              orange: 'text-orange-500',
              teal: 'text-teal-500',
            }[item.color] || 'text-indigo-500';

            return (
              <AccordionItem
                key={item.value}
                value={item.value}
                trigger={
                  <div className="flex items-center gap-4">
                    <Icon className={colorClass} size={24} />
                    <span>{item.title}</span>
                  </div>
                }
              >
                <p>{item.description}</p>
                <ul className="list-disc list-inside my-4 space-y-1">
                  {item.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Button 
                  variant={item.color as any}
                  onClick={() => openChat(item.title.split(' ')[2] as AiTopic)}
                >
                  {item.buttonText}
                </Button>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Card>
      <AiChatModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        topic={activeTopic}
      />
    </>
  );
};

export default AiAssistant;
