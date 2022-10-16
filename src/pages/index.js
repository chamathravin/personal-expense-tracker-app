import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const Home = () => {
    const [showWines, setshowWine] = useState()
    const apiUrl = 'https://api.sampleapis.com/wines/reds'
    let displayData
    function pullJson() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
                displayData = responseData.map(function (wine) {
                    return (

                        <div class="card" key={wine.id}>
                            <div class="title"><b>{wine.winery}</b></div>
                            <img class="wine-img" src={wine.image} />
                            <div class="details">
                               <div> <b>Wine:</b> {wine.wine}</div>
                                <div><b>Location:</b> {wine.location}</div>
                            </div>
                        </div>


                    )
                })
                console.log(responseData)
                setshowWine(displayData)
            })
    }

    useEffect(() => {
        pullJson()
    }, [])

    return (
        <div class="container">
            <h3 className="mt-3">Dashboard </h3>
            <Chart
                type="pie"
                width={1099}
                height={550}

                series={[9000, 38000, 6700]}

                options={{
                    title: {
                        text: "Expense PieChart"
                    },
                    noData: { text: "Empty Data" },
                    // colors:["#f90000","#f0f"],
                    labels: ['Transport', 'Food', 'Bills']

                }}
            >
            </Chart>
            <div class="wine-header"><h5>Wine Details</h5></div>
            <div class="grid-container">
                {showWines}
            </div>
        </div>
    );
};

export default Home;