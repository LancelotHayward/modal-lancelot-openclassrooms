import "./Modal.scss"


/**
 * React component which displays a dialog element.
 * @param {React.Props} param0 Property "text": Displayed text. Property "reference": React useReference hook from parent.
 * @returns {React.ReactElement} <Modal/> component.
 */
function Modal({text, reference}) {
    return (
        <dialog ref={reference} onClick={e => reference.current.close()} className="modal">
            {text}
        </dialog>
    )
}

export { Modal }