import React from 'react';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    dummy() {
        console.log("dummy");
    }

    comparer = () => {
        console.log("comparer");
    }

    render() {
        console.log("nguyen");
        console.log(this);
        return <h1>Hello, Nguyen!</h1>;
    }
}

export default Dashboard;