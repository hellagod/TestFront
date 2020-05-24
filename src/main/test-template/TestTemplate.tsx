import React from 'react';
import '../../App.css';
import {TestContent} from "./TestContent";

//<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous">
export class TestTemplate extends React.Component {
    private listRef: React.RefObject<any>;
    private url = "http://localhost:8000/api/";

    // TODO change any to required type
    constructor(props: any) {
        super(props);
        this.listRef = React.createRef();
    }

    render(): React.ReactNode {
        return (
            <div>
                <TestContent/>
            </div>
        )
    }
}