import MemoList from '../MemoList';
import SideBarFooter from '../SideBarFooter';
import SideBarHeader from '../SideBarHeader';
import './index.css';

function SideBar({
  memoArray,
  selectedMemoIndex,
  onMemoClicked,
  onAddMemoButtonClicked,
  onDeleteMemoButtonClicked,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memoArray={memoArray}
        selectedMemoIndex={selectedMemoIndex}
        onMemoClicked={onMemoClicked}
        onDeleteMemoButtonClicked={onDeleteMemoButtonClicked}
      />
      <SideBarFooter onAddMemoButtonClicked={onAddMemoButtonClicked} />
    </div>
  );
}

export default SideBar;
