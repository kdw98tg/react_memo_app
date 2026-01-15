import './App.css';
import SideBar from './components/SideBar';
import MemoContainer from './components/MemoContainer';
import { useState, useCallback } from 'react';

function App() {
  const [memoArray, setMemoArray] = useState([
    {
      title: 'Memo 1',
      content: '메모 1 입니다.',
      createdAt: 1767835382477, //시간 값
      updatedAt: 1767835384242, //시간 값
    },
    {
      title: 'Memo 2',
      content: '메모 2 입니다.',
      createdAt: 1767835407111, //시간 값
      updatedAt: 1767835408193, //시간 값
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  //왼쪽 메모 리스트의 메모 아이템 선택했을 때 작동하는 기능
  const onMemoClicked = (memoIndex) => {
    setSelectedMemoIndex(memoIndex);
  };

  //메모 추가 기능
  const addMemo = () => {
    const date = new Date();
    const memosCopy = [
      ...memoArray,
      {
        title: 'Untitled',
        content: '',
        createdAt: date.getTime(),
        updatedAt: date.getTime(),
      },
    ];

    setMemoArray(memosCopy);
    setSelectedMemoIndex(memosCopy.length - 1);
  };

  //메모 업데이트 기능
  const updateMemo = (newMemo) => {
    const memoArrayCopy = [...memoArray];
    memoArrayCopy[selectedMemoIndex] = newMemo;
    setMemoArray(memoArrayCopy);
  };

  //메모를 삭제하는 기능
  const deleteMemo = (index) => {
    const memosCopy = [...memoArray];
    memosCopy.splice(index, 1);
    setMemoArray(memosCopy);
    if (index === selectedMemoIndex) {
      setSelectedMemoIndex(0);
      return 0;
      //가장 최신의 값을 전달받을 수 있음
      //현재 랜더링 시점의 state가 아니라, React가 보관하고 있는 가장 최신의 state를 받음
      //이게 왜 필요하냐면, React의 setState는 즉시 값을 바꾸지 않음
      // 여러 개가 한번에 batch 처리되어서, 한번에 바뀜
      //같은 state에 대해 여러 번 호출 될 수 있음.
      // setSelectedMemoIndex((state) => {
      //   if (memosCopy.length === 0) return 0;
      //   if (index < state) return state - 1;
      //   if (index === state) return Math.max(0, state - 1);
      //   return state;
      // });
      // (선택사항) 삭제한 메모가 선택된 메모보다 앞에 있으면 인덱스가 당겨지므로 보정
    }
    if (index < selectedMemoIndex) {
      setSelectedMemoIndex(selectedMemoIndex - 1);
    }
  };

  return (
    <div className="App">
      <SideBar
        memoArray={memoArray}
        selectedMemoIndex={selectedMemoIndex}
        onMemoClicked={onMemoClicked}
        onAddMemoButtonClicked={addMemo}
        onDeleteMemoButtonClicked={deleteMemo}
      />
      <MemoContainer
        memo={memoArray[selectedMemoIndex]}
        onMemoUpdated={updateMemo}
      />
    </div>
  );
}

export default App;
