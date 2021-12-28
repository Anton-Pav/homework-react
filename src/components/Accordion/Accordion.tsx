import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<string>
}

type AccordionTitleType = {
    title: string
    onChange: () => void

}

function Accordion(props: AccordionType) {
        return <div>
                <AccordionTitle title={props.titleValue}
                                onChange={props.onChange}/>
                {props.collapsed && <AccordionBody items={props.items}/>}
            </div>

}
function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={() => {props.onChange()}}>{props.title}</h3>
    )
}
type AccordionBodyType = {
    items: Array<string>
}
function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map(i => <li>{i}</li>)}
        </ul>
    )
}

export default Accordion;