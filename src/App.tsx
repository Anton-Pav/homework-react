import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import Uncontrolaccordion from './components/SelfcontrolledAccordion/Uncontrolaccordion';

function App() {
    return (
        <div>
            <Uncontrolaccordion titleValue={"Menu"} />
            <Uncontrolaccordion titleValue={"Users"} />
            {/*<OnOff/>*/}
            {/*<OnOff on={false}/>
            <OnOff on={true}/>*/}
           {/* <PageTitle title={"This is APP components"}/>
            <Rating value={3}/>
            <Uncontrolaccordion titleValue={"Menu"} collapsed={true}/>
            <Uncontrolaccordion titleValue={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>

    );
}


type PageTitleType = {
    title: string
}
function PageTitle(props:PageTitleType) {
    return <h1>{props.title}</h1>
}
export default App;
