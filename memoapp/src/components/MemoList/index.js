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
          onMemoClicked={(e) => {
            onMemoClicked(index);
          }}
          onDeleteMemoButtonClicked={(e) => {
            onDeleteMemoButtonClicked(index, e);
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
