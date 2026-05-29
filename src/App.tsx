import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import RenderTrackerDemo from './performance/rerenders/RenderTrackerDemo';
import { MemoizedProfileTracker } from './performance/rerenders/memoizations/memo/MemoizedProfileTracker';
import "./App.css";
import { MemoizedChild } from './performance/rerenders/memoizations/use-callback/Child';
import { ChildDemo } from './performance/rerenders/memoizations/use-callback/ChildDemo';
import { Cart } from './performance/derived-state/Cart';

function App() {
  // return <RouterProvider router={router} />;
  return (
    <Cart items={} />
  )
}

export default App;