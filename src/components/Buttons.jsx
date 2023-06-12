import "./style.css"

export const Buttons = ({ content, className, show, evaluate }) => {
    if (className === 'bg-orange') {
        return (
            <>
            <div className="buttons">
                <button className={"btn " + className} onClick={evaluate}> {content} </button>
            </div>
            </>
        )
    }
    else {
        return (
            <>
            <div className="buttons">
                <button className={"btn " + className} onClick={show}> {content}</button>
            </div>            
            </>
        )
    }
}