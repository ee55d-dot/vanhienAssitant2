
import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const CourseRegistrationCard: React.FC = () => {
  return (
    <Card title="Đăng ký học phần">
      <form className="space-y-6">
        <div>
          <label htmlFor="major" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Chọn ngành học</label>
          <select id="major" className="w-full p-3 bg-white/50 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
            <option>Công nghệ thông tin</option>
            <option>Thương mại điện tử</option>
            <option>Quản trị kinh doanh</option>
          </select>
        </div>
        <div>
          <label htmlFor="course" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Chọn học phần</label>
          <select id="course" className="w-full p-3 bg-white/50 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
            <option>Lập trình web nâng cao</option>
            <option>An toàn thông tin</option>
            <option>Hệ quản trị cơ sở dữ liệu</option>
          </select>
        </div>
        <div>
          <label htmlFor="class" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Chọn lớp học phần</label>
          <select id="class" className="w-full p-3 bg-white/50 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
            <option>231IT1011 - Sáng thứ 2</option>
            <option>231IT1012 - Chiều thứ 4</option>
            <option>231IT1013 - Sáng thứ 6</option>
          </select>
        </div>
        <div className="flex justify-end pt-4">
          <Button type="submit">
            Đăng ký
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CourseRegistrationCard;
