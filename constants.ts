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

export const DETAILED_PERSONAL_INFO = {
    personal: [
        { label: 'Họ và tên', value: 'VG Văn Quốc Bảo', icon: 'User' },
        { label: 'Ngày sinh', value: '01/01/2005', icon: 'Calendar' },
        { label: 'Giới tính', value: 'Nam', icon: 'Venus' },
        { label: 'Dân tộc', value: 'Kinh', icon: 'Flag' },
        { label: 'Tôn giáo', value: 'Không', icon: 'Dove' },
        { label: 'Quốc gia', value: 'Việt Nam', icon: 'Globe' },
        { label: 'CMND/CCCD', value: '012345678910', icon: 'Fingerprint' },
    ],
    academic: [
        { label: 'Mã sinh viên', value: '231A290036', icon: 'Hash' },
        { label: 'Lớp', value: '231TMDT1011', icon: 'Users' },
        { label: 'Ngành', value: 'Thương mại điện tử', icon: 'Book' },
        { label: 'Khoa', value: 'Kinh tế - Quản trị', icon: 'Building' },
        { label: 'Khóa học', value: 'ĐH khóa 2023–2027', icon: 'GraduationCap' },
        { label: 'Hình thức đào tạo', value: 'Chính quy', icon: 'School' },
        { label: 'Đối tượng', value: 'THPT lớp 12', icon: 'Target' },
    ],
    contact: [
        { label: 'Số điện thoại di động', value: '0987 654 321', icon: 'Phone' },
        { label: 'Email', value: 'bao.vq.231a290036@vanhien.edu.vn', icon: 'Mail' },
        { label: 'Tỉnh thành', value: 'TP. Hồ Chí Minh', icon: 'Map' },
        { label: 'Phường/xã', value: 'Phường 1, Quận 1', icon: 'Home' },
    ],
    advisor: [
        { label: 'Cố vấn học tập', value: 'Trần Thanh Tú', icon: 'UserCheck' },
        { label: 'Email cố vấn học tập', value: 'tuhoatieu@gmail.com', icon: 'AtSign' },
    ],
    emergencyContact: [
        { label: 'Họ tên người liên hệ', value: 'VG Văn Quốc Anh', icon: 'UserSquare' },
        { label: 'Điện thoại người liên hệ', value: '0123 456 789', icon: 'Smartphone' },
        { label: 'Địa chỉ người liên hệ', value: '123 Đường ABC, Phường 1, Quận 1, TP. HCM', icon: 'MapPin' },
    ],
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