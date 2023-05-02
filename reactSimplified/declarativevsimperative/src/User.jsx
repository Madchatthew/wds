export function User({ name, age }) {
  return (
    <h1>
      {name}: <span style={{ color: "red" }}>{age}</span>
    </h1>
  )
}

// Declarative is what React uses - this is how things are going to look and we don't care what data goes in there
// Imperative is telling it what to do step by step and is what JS uses

// With React, think declarative not imperative
