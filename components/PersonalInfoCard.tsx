import React from 'react';
import Card from './ui/Card';
import { DETAILED_PERSONAL_INFO } from '../constants';
import * as Icons from 'lucide-react';

// A type for our icon names to have better autocompletion and type safety.
type IconName = keyof typeof Icons;

// A helper component to dynamically render icons based on their string name.
const DynamicIcon = ({ name, ...props }: { name: IconName } & Icons.LucideProps) => {
    const IconComponent = Icons[name];
    if (!IconComponent) {
        // Provide a fallback icon if the specified one doesn't exist.
        return <Icons.HelpCircle {...props} />;
    }
    return <IconComponent {...props} />;
};

// A reusable component to render a section of information.
const InfoSection: React.FC<{ title: string; data: Readonly<Array<{ label: string; value: string; icon: string }>> }> = ({ title, data }) => (
    <div className="mb-8 last:mb-0">
        <h3 className="text-xl font-bold mb-6 pb-3 border-b border-white/20 dark:border-slate-700/50 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
            {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {data.map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                     <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 group-hover:from-indigo-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                        <DynamicIcon name={item.icon as IconName} className="w-6 h-6 text-indigo-500 dark:text-indigo-300" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                        <p className="font-bold text-slate-800 dark:text-white">{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const PersonalInfoCard: React.FC = () => {
    return (
        <Card title="Hồ sơ sinh viên">
            <InfoSection title="Thông tin cá nhân" data={DETAILED_PERSONAL_INFO.personal} />
            <InfoSection title="Thông tin học vấn" data={DETAILED_PERSONAL_INFO.academic} />
            <InfoSection title="Thông tin liên lạc" data={DETAILED_PERSONAL_INFO.contact} />
            <InfoSection title="Cố vấn học tập" data={DETAILED_PERSONAL_INFO.advisor} />
            <InfoSection title="Người liên hệ khẩn cấp" data={DETAILED_PERSONAL_INFO.emergencyContact} />
        </Card>
    );
};

export default PersonalInfoCard;