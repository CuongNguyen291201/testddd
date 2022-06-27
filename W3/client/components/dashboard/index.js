import React from 'react'
import './style.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <div id="dash-board">
      <div className="side-bar">
        <div className="logo item-side-bar">
          <i className="fa-solid fa-house"></i>
          <div className="content-side-bar">device manager</div>
        </div>
        <div className="item-side-bar">
          <i className="fa-solid fa-computer"></i>
          <div className="content-side-bar"><a href="/dashboard">dashboard</a></div>
        </div>

        <div className="item-side-bar">
          <i className="fa-solid fa-clock-rotate-left"></i>
          <div className="content-side-bar"><a href="/logs">logs</a></div>
        </div>

        <div className="item-side-bar">
          <i className="fa-solid fa-gear"></i>
          <div className="content-side-bar">settings</div>
        </div>

        <div className="item-side-bar">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <div className="content-side-bar" id="logout">logout</div>
        </div>
      </div>
      <div className="content">
        <div className="user">
          <i className="fa-solid fa-circle-user"></i>
          <div>Welcome John</div>
        </div>

        <div className="data">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Devices</th>
                  <th>MAC Address</th>
                  <th>IP</th>
                  <th>Created Date</th>
                  <th>Power Consumption (Kw/H)</th>
                </tr>
              </thead>
              <tbody className="table-data">
              </tbody>
            </table>
          </div>

          <div className="statistic-form">
            <div className="statistic-power">
              <div className="title-statistic">Power Consumption</div>
              <canvas id="statistic">
              </canvas>
              <Doughnut data={data} />
            </div>

            <div className="form">
              <div className="form-item">
                <input type="text" placeholder="name" className="input-form-item" id="name" />
              </div>

              <div className="form-item">
                <input type="text" placeholder="ip" className="input-form-item" id="ip" />
              </div>

              <div className="form-item">
                <input type="text" placeholder="power" className="input-form-item" id="power" />
              </div>

              <div className="error-msg"></div>

              <div className="submit-device">Add Device</div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Dashboard