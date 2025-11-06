import React, { useState } from 'react';
import Card from './ui/Card';
import { motion } from 'framer-motion';

const Switch: React.FC<{ enabled: boolean; setEnabled: (enabled: boolean) => void }> = ({ enabled, setEnabled }) => {
    // FIX: Add 'as const' to ensure TypeScript infers the 'type' property
    // as the literal "spring" instead of the general string type.
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    } as const;

    return (
        <div 
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${enabled ? 'bg-indigo-500 justify-end' : 'bg-slate-300 dark:bg-slate-600 justify-start'}`}
            onClick={() => setEnabled(!enabled)}
        >
            <motion.div
                className="w-6 h-6 bg-white rounded-full"
                layout
                transition={spring}
            />
        </div>
    );
};

const SettingsCard: React.FC = () => {
    const [notifications, setNotifications] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(false);
    const [darkModeSync, setDarkModeSync] = useState(true);

    return (
        <Card title="Cài đặt">
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
                <div className="py-4 flex items-center justify-between">
                    <div>
                        <p className="font-semibold">Bật thông báo</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Nhận thông báo về lịch học và điểm số.</p>
                    </div>
                    <Switch enabled={notifications} setEnabled={setNotifications} />
                </div>
                <div className="py-4 flex items-center justify-between">
                     <div>
                        <p className="font-semibold">Cập nhật qua Email</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Gửi thông báo quan trọng đến email của bạn.</p>
                    </div>
                    <Switch enabled={emailUpdates} setEnabled={setEmailUpdates} />
                </div>
                <div className="py-4 flex items-center justify-between">
                     <div>
                        <p className="font-semibold">Đồng bộ giao diện tối</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Tự động chuyển đổi theo cài đặt hệ thống.</p>
                    </div>
                    <Switch enabled={darkModeSync} setEnabled={setDarkModeSync} />
                </div>
            </div>
        </Card>
    );
};

export default SettingsCard;