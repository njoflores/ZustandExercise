# Zustand Store Exercise

1. What does create() do in Zustand?

create() is used to build a global store in Zustand. It initializes the state and defines the functions that can update that state. It returns a custom hook that components can use to access and modify the store.

2. What is selective subscription?

Selective subscription means accessing only specific pieces of state from the store instead of the entire store. For example:

const count = useCounterStore((state) => state.count);

This ensures that the component only re-renders when count changes.

3. Why is subscribing to the entire store considered bad practice?

Subscribing to the entire store causes the component to re-render whenever any state changes, even if the component does not use that data. This leads to unnecessary re-renders and reduced performance.

4. What is one advantage of Zustand over Context API?

One advantage of Zustand over the Context API is that it is simpler and does not require wrapping components with providers. It also allows more efficient state updates because components can subscribe only to the specific data they need.