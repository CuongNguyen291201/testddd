import React from 'react'
import './style.css'

const Logs = () => {
  return (
    <div id="logs">
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
          <div className="content-side-bar"><a href="./logs">logs</a></div>
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
          <div className="action">
            <div className="title-table">Action Logs</div>
            <div className="search">
              <input type="text" placeholder="name" className="input-form-item" id="key-search" />
              <div className="search-device">Search</div>
            </div>
          </div>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Device ID</th>
                  <th>Name</th>
                  <th>Action</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className="table-data">
              </tbody>
            </table>
          </div>

          <div className="section-pagination">
            <div className="pagination">
            </div>

            <div className="rows-per-page">
              <select id="change-row">
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Logs