import React, { useState, useEffect } from "react";
import Card from "./card";

import "./App.css";

function App() {
    const [allData, setAlldata] = useState([]);
    const [tenant, setTenant] = useState("otherCustomer");
    const [environment, setEnvironment] = useState("prod");

    useEffect(() => {
        setAlldata(myData);
    }, []);
    console.log("allD", allData);

    const myData = [
        {
            app: "Frontend",
            version: "2.01",
            tenant: "keylight",
            environment: "prod",
            deployed_at: "2020-08-01",
        },
        {
            app: "Backend",
            version: "2.04",
            tenant: "keylight",
            environment: "prod",
            deployed_at: "2020-06-01",
        },
        {
            app: "Frontend",
            version: "2.08",
            tenant: "keylight",
            environment: "sandbox",
            deployed_at: "2020-09-01",
        },
        {
            app: "Backend",
            version: "2.08",
            tenant: "keylight",
            environment: "sandbox",
            deployed_at: "2020-09-20",
        },
        {
            app: "Frontend",
            version: "2.02",
            tenant: "otherCustomer",
            environment: "prod",
            deployed_at: "2020-09-01",
        },
        {
            app: "Backend",
            version: "2.09",
            tenant: "otherCustomer",
            environment: "prod",
            deployed_at: "2020-07-11",
        },
        {
            app: "Frontend",
            version: "2.07",
            tenant: "otherCustomer",
            environment: "sandbox",
            deployed_at: "2020-09-11",
        },
        {
            app: "Frontend",
            version: "2.09",
            tenant: "otherCustomer",
            environment: "sandbox",
            deployed_at: "2020-09-11",
        },
    ];

    const changeFilter = (e) => {
        setTenant(e.target.value);
        console.log("change filt", tenant);
    };

    const changeEnvFilter = (e) => {
        setEnvironment(e.target.value);
    };

    const filter = () => {
        let filtered = myData.filter((el) => el.tenant === tenant);
        setAlldata(filtered);
    };
    const envFilter = () => {
        let filtered = myData.filter((el) => el.environment === environment);
        setAlldata(filtered);
    };

    return (
        <div>
            <div className="head">
                <div className="filter">
                    <h1>Filter apps</h1>
                    <div>
                        <select onChange={changeFilter} name="" id="">
                            <option value="otherCustomer">otherCustomer</option>
                            <option value="keylight">keylight</option>
                        </select>
                        <button onClick={filter}>filter tenant</button>
                    </div>
                    <div>
                        <select onChange={changeEnvFilter} name="" id="">
                            <option value="prod">prod</option>
                            <option value="sandbox">sandbox</option>
                        </select>
                        <button onClick={envFilter}>filter environment</button>
                    </div>
                </div>
                <div className="filter">
                    <div className="yellow">
                        <div className="circle"></div>
                        <h3>deployed in the last 14 days</h3>
                    </div>
                    <div className="red">
                        <div className="circle"></div>
                        <h3>deployed longer than 14 days ago </h3>
                    </div>
                    <div className="gray">
                        <div className="circle"></div>
                        <h3>deployed longer than 60 days ago </h3>
                    </div>
                </div>
            </div>
            <div className="App">
                {allData.map((item) => (
                    <Card
                        app={item.app}
                        version={item.version}
                        tenant={item.tenant}
                        environment={item.environment}
                        date={item.deployed_at}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
