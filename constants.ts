
import { User, Calendar, BarChart3, BookOpen, Bot, Settings } from 'lucide-react';
import type { NavItem } from './types';

export const SIDEBAR_ITEMS: NavItem[] = [
  { name: 'Thông tin cá nhân', icon: User },
  { name: 'Lịch học', icon: Calendar },
  { name: 'Kết quả học tập', icon: BarChart3 },
  { name: 'Đăng ký học phần', icon: BookOpen },
  { name: 'Trợ lý AI', icon: Bot },
  { name: 'Cài đặt', icon: Settings },
];

export const PERSONAL_INFO = {
    'Họ và tên': 'VG Văn Quốc Bảo',
    'Mã sinh viên': '231A290036',
    'Ngày sinh': '01/01/2005',
    'Lớp': '231TMDT1011',
    'Ngành': 'Thương mại điện tử',
    'Khoa': 'Kinh tế - Quản trị',
    'Giới tính': 'Nam',
    'Email': 'bao.vq.231a290036@vanhien.edu.vn',
};

export const LEARNING_RESULTS = [
    { name: 'Toán cao cấp', credits: 3, score: 8.5 },
    { name: 'Lập trình cơ bản', credits: 4, score: 9.0 },
    { name: 'Kinh tế vi mô', credits: 3, score: 7.8 },
    { name: 'Tiếng Anh chuyên ngành', credits: 3, score: 8.2 },
    { name: 'Quản trị học', credits: 2, score: 9.5 },
];

export const SCHEDULE_DATA = {
    'Thứ 2': [{ time: '7:30 - 10:00', subject: 'Lập trình Web', room: 'C301' }],
    'Thứ 3': [{ time: '13:00 - 15:30', subject: 'Cơ sở dữ liệu', room: 'B205' }],
    'Thứ 4': [{ time: '9:00 - 11:30', subject: 'Pháp luật đại cương', room: 'A102' }],
    'Thứ 5': [],
    'Thứ 6': [{ time: '7:30 - 10:00', subject: 'Toán cao cấp', room: 'C301' }, { time: '13:00 - 15:30', subject: 'Quản trị mạng', room: 'B208' }],
    'Thứ 7': [],
    'Chủ nhật': [],
};
