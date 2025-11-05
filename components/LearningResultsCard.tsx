
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Card from './ui/Card';
import { LEARNING_RESULTS } from '../constants';

const COLORS = ['#6366F1', '#A855F7', '#EC4899', '#3B82F6', '#14B8A6'];

const LearningResultsCard: React.FC = () => {
  const totalCredits = LEARNING_RESULTS.reduce((acc, course) => acc + course.credits, 0);
  const totalScore = LEARNING_RESULTS.reduce((acc, course) => acc + course.score * course.credits, 0);
  const gpa = totalScore / totalCredits;

  const pieData = [
    { name: 'Hoàn thành', value: totalCredits },
    { name: 'Còn lại', value: 120 - totalCredits },
  ];

  return (
    <Card title="Kết quả học tập">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-4">Điểm các môn học</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b border-slate-300 dark:border-slate-600">
                    <tr>
                        <th className="p-3">Môn học</th>
                        <th className="p-3 text-center">Số tín chỉ</th>
                        <th className="p-3 text-center">Điểm</th>
                    </tr>
                    </thead>
                    <tbody>
                    {LEARNING_RESULTS.map((course, index) => (
                        <tr key={index} className="border-b border-slate-200 dark:border-slate-700 hover:bg-black/5 dark:hover:bg-white/5">
                        <td className="p-3 font-semibold">{course.name}</td>
                        <td className="p-3 text-center">{course.credits}</td>
                        <td className="p-3 text-center font-bold text-indigo-500 dark:text-indigo-400">{course.score.toFixed(1)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Điểm trung bình tích lũy</h3>
              <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">{gpa.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Tiến độ học tập</h3>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-4 rounded-full" 
                  style={{width: `${(totalCredits/120)*100}%`}}
                ></div>
              </div>
              <p className="text-right mt-1 text-sm font-semibold">{totalCredits} / 120 Tín chỉ</p>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-2">Phân bổ điểm</h3>
                 <div style={{ width: '100%', height: 200 }}>
                    <ResponsiveContainer>
                        <BarChart data={LEARNING_RESULTS} margin={{ top: 5, right: 0, left: -25, bottom: 5 }}>
                            <XAxis dataKey="name" tick={false} />
                            <YAxis />
                            <Tooltip contentStyle={{ background: 'rgba(30,41,59,0.8)', border: 'none', borderRadius: '1rem', color: 'white' }} />
                            <Bar dataKey="score" fill="#8884d8" radius={[10, 10, 0, 0]}>
                                {LEARNING_RESULTS.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      </div>
    </Card>
  );
};

export default LearningResultsCard;
