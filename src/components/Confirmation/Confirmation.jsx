export function Confirmation({ children, onConfirmation, onCancellation }) {
  return (
    <div role="dialog">
      <h1>Confirm your choice</h1>

      <div>{children}</div>

      <button onClick={onConfirmation}>OK</button>
      <button onClick={onCancellation}>Cancel</button>
    </div>
  );
}
