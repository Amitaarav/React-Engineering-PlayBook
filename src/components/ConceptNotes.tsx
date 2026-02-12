import ReactMarkdown from 'react-markdown';

interface ConceptNotesProps {
    content: string;
}

const ConceptNotes: React.FC<ConceptNotesProps> = ({ content }) => {
    return (
        <div className="prose prose-indigo dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-li:text-gray-600 dark:prose-li:text-gray-400 bg-white dark:bg-gray-900 p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-none transition-all duration-300">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default ConceptNotes;
