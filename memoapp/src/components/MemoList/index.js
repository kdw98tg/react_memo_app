import MemoItem from '../MemoItem';
import './index.css';
function MemoList({
  memoArray,
  onMemoClicked,
  onAddMemoButtonClicked,
  onDeleteMemoButtonClicked,
}) {
  return (
    <div>
      {memoArray.map((memo, index) => (
        <MemoItem
          key={index}
          onMemoClicked={() => {
            onMemoClicked(index);
          }}
          onDeleteMemoButtonClicked={onDeleteMemoButtonClicked}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
