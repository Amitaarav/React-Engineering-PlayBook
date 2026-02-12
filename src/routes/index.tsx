import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DemoWithNotes from '../components/DemoWithNotes';

// @ts-ignore
import paginationReadme from '../Machine-Coding/pagination/README.md?raw';
// @ts-ignore
import solidReadme from '../SOLID/README.md?raw';

// Lazy load components for performance
// @ts-ignore
const WaterfallDashboard = lazy(() => import('../Design-patterns/day-16/suspense-patterns/waterfall/Dashboard'));
// @ts-ignore
const SuspenseDashboard = lazy(() => import('../Design-patterns/day-16/suspense-patterns/suspense/Dashboard'));
// @ts-ignore
const PaginationDemo = lazy(() => import('../Machine-Coding/pagination/App'));
// @ts-ignore
const RenderTrackerDemo = lazy(() => import('../performance/rerenders/RenderTrackerDemo'));

// Loading component
const Loading = () => (
    <div className="flex items-center justify-center min-h-[400px] w-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
        <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
            <p className="text-sm font-medium text-gray-400 dark:text-gray-500 animate-pulse">Initializing concept...</p>
        </div>
    </div>
);


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/design-patterns/suspense-waterfall" replace />,
            },
            {
                path: 'design-patterns',
                children: [
                    {
                        path: 'suspense-waterfall',
                        element: (
                            <Suspense fallback={<Loading />}>
                                <DemoWithNotes
                                    title="Suspense Patterns"
                                    description="Comparing Waterfall vs. Suspense patterns in React 19."
                                    notes={`# Suspense Patterns in React 19\n\n- **Waterfall**: Sequential fetching where components wait for each other.\n- **Suspense**: Declarative loading states that allow components to fetch data in parallel.`}
                                    demo={
                                        <div className="grid gap-8">
                                            <section>
                                                <h2 className="text-xl font-semibold mb-4 text-indigo-700">Waterfall Pattern</h2>
                                                <WaterfallDashboard />
                                            </section>
                                            <section>
                                                <h2 className="text-xl font-semibold mb-4 text-indigo-700">Suspense Pattern</h2>
                                                <SuspenseDashboard />
                                            </section>
                                        </div>
                                    }
                                />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: 'machine-coding',
                children: [
                    {
                        path: 'pagination',
                        element: (
                            <Suspense fallback={<Loading />}>
                                <DemoWithNotes
                                    title="Pagination"
                                    description="A robust pagination component implementation."
                                    notes={paginationReadme}
                                    demo={<PaginationDemo />}
                                />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: 'solid',
                element: (
                    <div className="space-y-8">
                        <DemoWithNotes
                            title="SOLID Principles"
                            description="Core architectural principles for writing maintainable React components."
                            notes={solidReadme}
                            demo={<div className="p-8 text-center text-gray-500">SOLID Code Examples Coming Soon...</div>}
                        />
                    </div>
                ),
            },
            {
                path: 'performance',
                children: [
                    {
                        path: 'rerenders',
                        element: (
                            <Suspense fallback={<Loading />}>
                                <DemoWithNotes
                                    title="Render Tracker"
                                    description="Visualize component re-renders to optimize performance."
                                    notes={`# Performance Optimization\n\nUse tools like the Render Tracker to identify unnecessary re-renders in your React components. Key hooks for optimization include:\n- \`useMemo\`\n- \`useCallback\`\n- \`React.memo\``}
                                    demo={<RenderTrackerDemo />}
                                />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
    },
]);
