import MemoItem from '../MemoItem';
import './index.css';
function MemoList({
  memoArray,
  selectedMemoIndex,
  onMemoClicked,
  onDeleteMemoButtonClicked,
}) {
  return (
    <div>
      {memoArray.map((memo, index) => (
        <MemoItem
          key={index}
          isSelected={index === selectedMemoIndex}
          onMemoClicked={() => {
            onMemoClicked(index);
          }}
          onDeleteMemoButtonClicked={() => {
            onDeleteMemoButtonClicked(index);
          }}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
