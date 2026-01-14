import './index.css';
function MemoContainer({ memo, onMemoUpdated }) {
  if (memo == undefined) {
    return (
      <div>
        <h1>메모가 없습니다.</h1>
        <h2>새로운 메모를 추가해주세요.</h2>
      </div>
    );
  }

  return (
    <div className="MemoContainer">
      <input
        type="text"
        className="MemoContainer__title"
        value={memo.title}
        onChange={(event) =>
          onMemoUpdated({
            ...memo,
            title: event.target.value,
            updatedAt: new Date().getTime(),
          })
        }
      />
      <textarea
        className="MemoContainer__content"
        value={memo.content}
        onChange={(event) =>
          onMemoUpdated({
            ...memo,
            content: event.target.value,
            updatedAt: new Date().getTime(),
          })
        }
      ></textarea>
    </div>
  );
}

export default MemoContainer;
