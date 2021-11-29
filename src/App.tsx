import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={"App"}>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
             <UncontrolledOnOff onChange={setSwitchOn }/> {switchOn.toString()}
        </div>

    );
}


type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return <h1>{props.title}</h1>
}

export default App;
