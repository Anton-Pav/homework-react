import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion, {AcType} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<AcType>(false)
    return (
        <div className={"App"}>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <OnOff/>
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
