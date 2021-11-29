import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

type AccordionTitleType = {
    title: string
    onChange: () => void


}

function Accordion(props: AccordionType) {
        return <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
                {props.collapsed && <AccordionBody/>}
            </div>

}
function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={() => {props.onChange()}}>{props.title}</h3>
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