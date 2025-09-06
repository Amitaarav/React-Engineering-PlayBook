Refine: Pure Function:
1. It returns same output/value always
2. No access to any variable or functions outside of its scope
3. No modification in outside ariables. // Should not cause `Side Effect`

Idemponent:
Idempotent refers to operation or functions that can be applied/called multiple times without changing the result beyond the initial application.

- Example: Elevator
```
let flag = false;
function show(){
    if(flag){
        // Do something
    }
}
show();
```

### Difference b/w pure and idempotent function
```
Aspect                Pure Function                                        Idempotent Function
Focus:            No side effects + Deterministic output           Outcomes stablity across repeated calls
Side Effect:      Forbidden                                         Allowed, but must not accumulate.
Return Value:     Must always be same for same input                May return different values(e.g. network api call)
React Example:    A component rerendering based on props/state        setState(5) called multiple times
```


Visual Analogy

Pure Function
--------------
Input ---> [ Function ] ---> Output
(same input always gives same output, no external changes)

Idempotent Function
-------------------
Press Button ---> [ Action ] ---> Elevator arrives
Press Again  ---> [ Action ] ---> Elevator still arrives (no extra effect)
Quick Recap
Pure Function → Predictability & Isolation

Idempotent Function → Repeatability without unintended accumulation

### Overlap In React
- Pure Functions are often idempotent
A pure react component( eg. <Greeting name="Amit">) is idempotent because rerendering it with the same props/state produces the same result. However not all idempotent operations are same.

Idempotent without purity:

```
let initialized = false;
const initializedApp = () => {
    if(!initalized){
        setup();
        initialized = true; // Side Effect, but subsequent calls do nothing
    }
}
```
This function is idempotent(calling it repeatedly has the same effect calling it once) but impure (it mutates external state)

### Pure React Components:
- A component is pure if:
--- It returns same jsx for the same inputs.
--- It has no side effects(e.g. no mutations of external state, network calls, or DOM changes).
--- React components are designed to behave like a pure functions with respect to their props and state. Given the same props/state, they should render the same UI.

```
// Pure component (Same props --> Same UI)
const Greeting = ({name}) => <hi>Hello, {name}!</h1>
```

### Why It Matters:
--- *Predictability*: Idempotent ensures that repeated operations (e.g. rerenders, state updates) do not cause `unitendent` behavior. it helps in testing.
--- *Performance*: By `batching` or `skipping redundant updates`, React optimizes performance.

```
// Non Idempotent
let count = 0;
function Component(){
    useEffect(()=>{
        count++; //non idempotent: Running this effect multiple times.
    })
    return <div>{count}</div>
}
```

In react, idempotence ensures that repeated operations (rendering, state, updates, effects) produce the same outcomes as if they were applied once. This principle is foundational to react/s efficiency and reliability.

- **Pure Components** : Ensures predictable UI rendering
- **Idempotent effect**: Prevent bugs when effect re-run( eg. due to re-renders or strict-mode double-invocation);
- **State Updates**: Idempotence in `setState` avoids unnecessary re-renders.
## Issues if we do not write idempotent React


