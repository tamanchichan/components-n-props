function Dialog(props) { 
  return (
    <>
      <div>
        <button
          type='button'
          className={props.isOpen ? 'open hide' : 'open'}
          onClick={props.handleDialog}
        >
          Open Dialog
        </button>
      </div>
      {props.isOpen && (
        <dialog open>
          <button
            type='button'
            className='close'
            onClick={props.handleDialog}
          >
            Close Dialog
          </button>
        </dialog>
      )}
    </>
  );
}

export default Dialog;
