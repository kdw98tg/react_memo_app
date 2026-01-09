import './index.css';
function MemoItem({ children, onMemoClicked, onDeleteMemoButtonClicked }) {
  return (
    <div onClick={onMemoClicked}>
      {children} <button onClick={onDeleteMemoButtonClicked}>x</button>
    </div>
  );
}

export default MemoItem;
