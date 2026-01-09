import './index.css';
function SideBarFooter({ onAddMemoButtonClicked }) {
  return (
    <div className="SideBarFooter">
      <button
        className="SidBarFooter__button-add"
        onClick={onAddMemoButtonClicked}
      >
        +
      </button>
    </div>
  );
}

export default SideBarFooter;
