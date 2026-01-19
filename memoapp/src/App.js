import './App.css';
import SideBar from './components/SideBar';
import MemoContainer from './components/MemoContainer';
import { useState, useCallback } from 'react';

function App() {
  console.log('app 진입점');

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
    console.log('memoClicked1');
    setSelectedMemoIndex(memoIndex);
    console.log('memoClicked2');
  };

  console.log('addMemo 새로 만듦');
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

  console.log('updateMemo 새로 만듦');
  //메모 업데이트 기능
  const updateMemo = useCallback((newMemo) => {
    const memoArrayCopy = [...memoArray];
    memoArrayCopy[selectedMemoIndex] = newMemo;
    console.log('updateMemo1');
    setMemoArray(memoArrayCopy);
    console.log('updateMemo2');
  }, [memoArray]);

  console.log('deleteMemo 새로 만듦');
  //메모를 삭제하는 기능
  const deleteMemo = (index) => {
    const memosCopy = [...memoArray];
    memosCopy.splice(index, 1);
    setMemoArray(memosCopy);
    console.log('deleteMemo1');
    if (selectedMemoIndex == index) {
      console.log('deleteMemo2');
      setSelectedMemoIndex(0);
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
