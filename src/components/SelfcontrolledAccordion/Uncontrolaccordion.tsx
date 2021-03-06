import React, {useState} from "react";

type AccordionType = {
    titleValue: string
    /*collapsed: boolean*/
}
type AccordionTitleType = {
    title: string
    onClick: () => void
}

function Uncontrolaccordion(props: AccordionType) {
    let [collapsed, setCollapsed] = useState(false)
    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => {
            setCollapsed(!collapsed)
        }}/>
        {!collapsed && <AccordionBody/>}
    </div>

}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Uncontrolaccordion;