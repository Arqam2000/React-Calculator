import "./style.css"
import { useState } from "react"
import { Buttons } from "./Buttons"

export const Display = () => {
    let row1 = [{ content: 7, class: "" }, { content: 8, class: "" }, { content: 9, class: "" }, { content: '/', class: "bg-grey" }]

    let row2 = [{ content: 4, class: "" }, { content: 5, class: "" }, { content: 6, class: "" }, { content: '*', class: "bg-grey" }]

    let row3 = [{ content: 1, class: "" }, { content: 2, class: "" }, { content: 3, class: "" }, { content: '+', class: "bg-grey" }]

    let row4 = [{ content: '.', class: "" }, { content: 0, class: "" }, { content: "=", class: "bg-orange" }, { content: '-', class: "bg-grey" }]


    const [result, setResult] = useState('')
    const [inp, setInp] = useState('')

    const handle = (event) => {
        setResult(event.target.value)
    }

    const show = (content) => {
        // console.log(content)
        setResult(result + content)
    }

    const cls = () => {
        setResult('')
        setInp('')
    }

    const evaluate = () => {
        setInp(result)
        let ans = eval(result)
        setResult(ans)
    }
    return (
        <>
            <h1 className="center">Calculator</h1>
            <div className="output">
                <input type="text" id="inp" disabled value={inp} onChange={handle} />
                <input type="text" id="result" disabled onChange={handle} value={result} />
            </div>
            <div className="row">
                {row1.map((btn) => (
                    <Buttons key={btn.content} content={btn.content} className={btn.class} show={() => { show(btn.content) }} />
                ))}
            </div>

            <div className="row">
                {row2.map((btn) => (
                    <Buttons key={btn.content} content={btn.content} className={btn.class} show={() => { show(btn.content) }} />
                ))}
            </div>

            <div className="row">
                {row3.map((btn) => (
                    <Buttons key={btn.content} content={btn.content} className={btn.class} show={() => { show(btn.content) }} />
                ))}
            </div>

            <div className="row">
                {row4.map((btn) => (
                    <Buttons key={btn.content} content={btn.content} className={btn.class} show={() => { show(btn.content) }} evaluate={() => { evaluate() }} />
                ))}
            </div>

            <div className="clear">
                <button id="clear-btn" onClick={cls}>clear</button>
            </div>
        </>
    )
}