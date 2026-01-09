import './App.css';
import SideBar from './components/SideBar';
import MemoContainer from './components/MemoContainer';
import { useState } from 'react';

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

  const onMemoClicked = (memoIndex) => {
    setSelectedMemoIndex(memoIndex);
    console.log(memoIndex);
  };

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

  const deleteMemo = (index) => {
    const memosCopy = [...memoArray];
    memosCopy.splice(index, 1);
    setMemoArray(memosCopy);
  };

  return (
    <div className="App">
      <SideBar
        memoArray={memoArray}
        onMemoClicked={onMemoClicked}
        onAddMemoButtonClicked={addMemo}
        onDeleteMemoButtonClicked={deleteMemo}
      />
      <MemoContainer />
    </div>
  );
}

export default App;
