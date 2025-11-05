
import React from 'react';
import type { Page } from '../types';
import PersonalInfoCard from './PersonalInfoCard';
import LearningResultsCard from './LearningResultsCard';
import ScheduleCard from './ScheduleCard';
import CourseRegistrationCard from './CourseRegistrationCard';
import AiAssistant from './AiAssistant';
import SettingsCard from './SettingsCard';

interface MainContentProps {
  activePage: Page;
}

const MainContent: React.FC<MainContentProps> = ({ activePage }) => {
  const renderContent = () => {
    switch (activePage) {
      case 'Thông tin cá nhân':
        return <PersonalInfoCard />;
      case 'Kết quả học tập':
        return <LearningResultsCard />;
      case 'Lịch học':
        return <ScheduleCard />;
      case 'Đăng ký học phần':
        return <CourseRegistrationCard />;
      case 'Trợ lý AI':
        return <AiAssistant />;
      case 'Cài đặt':
        return <SettingsCard />;
      default:
        return <PersonalInfoCard />;
    }
  };

  return <div className="min-h-full">{renderContent()}</div>;
};

export default MainContent;
