
import type { LucideProps } from 'lucide-react';
import type React from 'react';

export type Page = 
  | 'Thông tin cá nhân'
  | 'Lịch học'
  | 'Kết quả học tập'
  | 'Đăng ký học phần'
  | 'Trợ lý AI'
  | 'Cài đặt';

export interface NavItem {
  name: Page;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
