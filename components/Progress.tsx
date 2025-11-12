import React from 'react';
import Card from './Card';
import { ChartBarIcon, CheckCircleIcon, ExclamationIcon, BadgeCheckIcon } from './icons';

const progressData = {
    summary: {
        modulesCompleted: '1/4',
        overallAccuracy: 50.0,
        totalAttempts: 18,
        currentLevel: 'Beginner',
    },
    byConcept: [
        { concept: 'Iterator Interface', correct: 1, total: 2, accuracy: 50.0, status: 'Needs Review' },
        { concept: 'Concrete Iterator', correct: 1, total: 5, accuracy: 20.0, status: 'Needs Review' },
        { concept: 'Aggregate Interface', correct: 2, total: 2, accuracy: 100.0, status: 'Mastered' },
        { concept: 'Cpp Polymorphism', correct: 1, total: 3, accuracy: 33.3, status: 'Needs Review' },
        { concept: 'Pattern Application', correct: 0, total: 2, accuracy: 0.0, status: 'Needs Review' },
        { concept: 'Pattern Analysis', correct: 4, total: 4, accuracy: 100.0, status: 'Mastered' },
    ],
    bloomLevels: [
        { level: 'APPLY', percentage: 55.6, description: 'Ability to implement Iterator Pattern for given scenarios' },
        { level: 'ANALYZE', percentage: 44.4, description: 'Ability to evaluate implementations and identify issues' },
    ],
    badges: [
        { name: 'First Steps: Completed first module' },
    ]
};

const StatCard: React.FC<{ title: string; value: string; color: string; }> = ({ title, value, color }) => (
    <div className={`p-4 rounded-lg text-white ${color}`}>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm opacity-90">{title}</p>
    </div>
);

const Progress: React.FC = () => {
    const getStatus = (status: string) => {
        if (status === 'Mastered') {
            return <span className="flex items-center text-green-600"><CheckCircleIcon className="h-5 w-5 mr-1" /> Mastered</span>;
        }
        return <span className="flex items-center text-yellow-600"><ExclamationIcon className="h-5 w-5" /> <span className="ml-1">Needs Review</span></span>;
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                Your Learning Progress <ChartBarIcon className="ml-2 h-7 w-7 text-blue-500" />
            </h2>
            
            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard title="Modules Completed" value={progressData.summary.modulesCompleted} color="bg-blue-500" />
                <StatCard title="Overall Accuracy" value={`${progressData.summary.overallAccuracy}%`} color="bg-green-500" />
                <StatCard title="Total Attempts" value={`${progressData.summary.totalAttempts}`} color="bg-purple-500" />
                <StatCard title="Current Level" value={progressData.summary.currentLevel} color="bg-orange-500" />
            </div>

            {/* Performance By Concept */}
            <Card title="Performance by Concept" padding="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Concept</th>
                                <th scope="col" className="px-6 py-3 text-right">Correct</th>
                                <th scope="col" className="px-6 py-3 text-right">Total</th>
                                <th scope="col" className="px-6 py-3 text-right">Accuracy</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {progressData.byConcept.map(item => (
                                <tr key={item.concept} className="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.concept}</th>
                                    <td className="px-6 py-4 text-right">{item.correct}</td>
                                    <td className="px-6 py-4 text-right">{item.total}</td>
                                    <td className="px-6 py-4 text-right">{item.accuracy.toFixed(1)}%</td>
                                    <td className="px-6 py-4 text-xs font-semibold">{getStatus(item.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

             {/* Bloom's Taxonomy */}
            <Card title="Bloom's Taxonomy Skill Levels">
                <div className="space-y-4">
                    {progressData.bloomLevels.map(level => (
                         <div key={level.level}>
                            <p className="text-sm font-semibold">
                                <span className="text-orange-600">{level.level} Level:</span>
                                <span className="text-blue-600 ml-2">{level.percentage}% -- In Progress</span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{level.description}</p>
                         </div>
                    ))}
                </div>
            </Card>
            
            {/* Achievement Badges */}
            <Card title="Achievement Badges">
                <div className="space-y-2">
                    {progressData.badges.map((badge, index) => (
                        <div key={index} className="flex items-center text-sm text-blue-700">
                            <BadgeCheckIcon className="h-5 w-5" />
                            <span className="ml-2">{badge.name}</span>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Progress;