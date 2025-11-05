
import React from 'react';
import Card from './ui/Card';
import { PERSONAL_INFO } from '../constants';
import { User, Hash, Calendar, Users, Book, Building, Star, Mail } from 'lucide-react';

const icons: { [key: string]: React.ElementType } = {
    'Họ và tên': User,
    'Mã sinh viên': Hash,
    'Ngày sinh': Calendar,
    'Lớp': Users,
    'Ngành': Book,
    'Khoa': Building,
    'Giới tính': Star,
    'Email': Mail,
};

const PersonalInfoCard: React.FC = () => {
    return (
        <Card title="Thông tin cá nhân">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {Object.entries(PERSONAL_INFO).map(([key, value]) => {
                    const Icon = icons[key];
                    return (
                        <div key={key} className="flex items-center gap-4 group">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 group-hover:from-indigo-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                                <Icon className="w-6 h-6 text-indigo-500 dark:text-indigo-300" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{key}</p>
                                <p className="font-bold text-slate-800 dark:text-white">{value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};

export default PersonalInfoCard;
