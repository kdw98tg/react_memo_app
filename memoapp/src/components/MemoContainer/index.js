import './index.css';
function MemoContainer() {
  return (
    <div className="MemoContainer">
      <input type="text" className="MemoContainer__title" />
      <textarea className="MemoContainer__content"></textarea>
    </div>
  );
}

export default MemoContainer;
