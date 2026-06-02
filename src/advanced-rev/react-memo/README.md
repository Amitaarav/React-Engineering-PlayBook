Higher order component in react that prevent unnecessary re-renders

- Improves the performance by caching the result of a component
- When props dont change, React skips the re-render
- use shallow comparision to check whether the props have changed

### Scenarios in which we should avoid
- Simple component without heavy computation that renders quickly
- when parent component rarely updates the props
- when we pass complex objects or functions as props
- when component is consuming values from React's context API
- when component has side effects