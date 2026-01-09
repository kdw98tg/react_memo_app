import './index.css';
function MemoContainer({ memo, onMemoUpdated }) {
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
