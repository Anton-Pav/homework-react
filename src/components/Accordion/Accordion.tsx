import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    onClick: (value: AcType) => void
}
export type AcType = boolean

type AccordionTitleType = {
    title: string
    onClick: (value: AcType) => void
    value: AcType

}

function Accordion(props: AccordionType) {
        return <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick} value={!props.collapsed}/>
                {props.collapsed && <AccordionBody/>}
            </div>

}
function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={() => {props.onClick(props.value)}}>{props.title}</h3>
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

export default Accordion;