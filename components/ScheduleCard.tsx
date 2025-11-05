
import React from 'react';
import Card from './ui/Card';
import { motion } from 'framer-motion';
import { SCHEDULE_DATA } from '../constants';
import { Clock } from 'lucide-react';

const ScheduleCard: React.FC = () => {
    return (
        <Card title="Lịch học - Lịch thi">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {Object.entries(SCHEDULE_DATA).map(([day, events], index) => (
                    <motion.div 
                        key={day}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl p-4 min-h-[200px]"
                    >
                        <h3 className="font-bold text-center mb-4">{day}</h3>
                        <div className="space-y-3">
                            {events.length > 0 ? (
                                events.map((event, eventIndex) => (
                                    <motion.div
                                        key={eventIndex}
                                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)' }}
                                        className="bg-white dark:bg-slate-700 p-3 rounded-xl shadow-md cursor-pointer border-l-4 border-indigo-500"
                                    >
                                        <p className="font-bold text-sm text-slate-800 dark:text-white">{event.subject}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1"><Clock size={12}/>{event.time}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Phòng: {event.room}</p>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center text-sm text-slate-400 dark:text-slate-500 pt-8">Không có lịch</div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Card>
    );
};

export default ScheduleCard;
