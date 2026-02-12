// @ts-ignore
import React, { ReactNode } from 'react';
import ConceptNotes from './ConceptNotes';
import { BookOpen, Play } from 'lucide-react';

interface DemoWithNotesProps {
    demo: ReactNode;
    notes: string;
    title: string;
    description?: string;
}

const DemoWithNotes: React.FC<DemoWithNotesProps> = ({ demo, notes, title, description }) => {
    const [activeTab, setActiveTab] = React.useState<'demo' | 'notes'>('demo');

    return (
        <div className="space-y-8">
            <header className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">{title}</h1>
                {description && <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{description}</p>}
            </header>

            <div className="flex bg-gray-100/80 dark:bg-gray-800/80 p-1.5 rounded-2xl w-fit border border-gray-200 dark:border-gray-700 shadow-inner backdrop-blur-sm transition-colors duration-300">
                <button
                    onClick={() => setActiveTab('demo')}
                    className={`
            flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm
            ${activeTab === 'demo'
                            ? 'bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-md ring-1 ring-black/5 dark:ring-white/5'
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}
          `}
                >
                    <Play size={16} fill={activeTab === 'demo' ? 'currentColor' : 'none'} />
                    Live Demo
                </button>
                <button
                    onClick={() => setActiveTab('notes')}
                    className={`
            flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm
            ${activeTab === 'notes'
                            ? 'bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-md ring-1 ring-black/5 dark:ring-white/5'
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}
          `}
                >
                    <BookOpen size={16} />
                    Concept Notes
                </button>
            </div>

            <div className="relative min-h-[400px]">
                {activeTab === 'demo' ? (
                    <div className="animate-in fade-in zoom-in-95 duration-500 fill-mode-both">
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-black/5 dark:shadow-none transition-colors duration-300">
                            {demo}
                        </div>
                    </div>
                ) : (
                    <div className="animate-in fade-in zoom-in-95 duration-500 fill-mode-both">
                        <ConceptNotes content={notes} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DemoWithNotes;
