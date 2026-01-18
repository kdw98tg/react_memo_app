import './index.css';

function MemoItem({
  children,
  isSelected,
  onMemoClicked,
  onDeleteMemoButtonClicked,
}) {
  return (
    <div
      onClick={onMemoClicked}
      className={'MemoItem' + (isSelected ? ' selected' : '')}
    >
      {children}
      <button onClick={onDeleteMemoButtonClicked}>x</button>
    </div>
  );
}

export default MemoItem;
