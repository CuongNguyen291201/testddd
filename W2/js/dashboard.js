$(document).ready(() => {
  const dtDevices = [
    {
      "devices": "TV",
      "mac": "00:1B:44:11:3A:B7",
      "ip": "127.0.0.2",
      "createdDate": "2021-05-31",
      "power": 50
    },
    {
      "devices": "Washer",
      "mac": "00:1B:44:11:3A:B7",
      "ip": "127.0.0.3",
      "createdDate": "2021-05-31",
      "power": 60
    },
    {
      "devices": "Selling Fan",
      "mac": "00:1B:44:11:3A:B7",
      "ip": "127.0.0.4",
      "createdDate": "2021-05-31",
      "power": 70
    },
  ];

  if (!localStorage.getItem("user-bss")) {
    window.location.href = "/login.html";
  }

  $("#logout").click(() => {
    localStorage.removeItem("user-bss");
    window.location.href = "/login.html";
  })

  let dtDevicesReal = JSON.parse(localStorage.getItem("data-db"));
  let devicesJSON = dtDevicesReal && dtDevicesReal.length !== 0 ? dtDevicesReal : dtDevices;

  const showData = (data) => {
    $(".table-data").empty();
    let totalDevices = data.reduce((prev, current) => prev + current.power, 0);
    data.map(item => (
      $(".table-data").append(
        `
          <tr>
            <td class="devices">${item.devices}</td>
            <td>${item.mac}</td>
            <td>${item.ip}</td>
            <td>${item.createdDate}</td>
            <td class="power">${item.power}</td>
          </tr>
        `
      )
    ));

    $(".table-data").append(
      `
        <tr>
          <td colspan="4">Total</td>
          <td>${totalDevices}</td>
        </tr>
      `
    )
  }
  showData(devicesJSON);

  const showChart = () => {
    let lb = [];
    $(".devices").map(item => lb = [...lb, $(".devices")[item].innerText]);
    let dts = [];
    $(".power").map(item => dts = [...dts, +$(".power")[item].innerText]);

    let rdColor = [];
    for (let i = 0; i < $(".devices").length; i++) {
      rdColor = [...rdColor, `#${Math.floor(Math.random() * 16777215).toString(16)}`];
    }

    const data = {
      labels: lb,
      datasets: [{
        data: dts,
        backgroundColor: rdColor,
      }]
    };

    const myChart = new Chart($("#statistic"), {
      type: 'doughnut',
      data: data
    });
  }
  showChart();
  
  $(".submit-device").click(() => {
    let nameDevice = $("#name");
    let ipDevice = $("#ip");
    let power = $("#power");

    if (nameDevice.val() === "" || ipDevice.val() === "" || power.val() === "") {
      alert("kkk")
    } else {
      let newDevice = {
        "devices": nameDevice.val(),
        "mac": "00:1B:44:11:3A:B7",
        "ip": ipDevice.val(),
        "createdDate": "2021-05-31",
        "power": +power.val()
      }
      devicesJSON = [...devicesJSON, newDevice];
      localStorage.setItem("data-db", JSON.stringify(devicesJSON));

      showData(devicesJSON);
      showChart();

      nameDevice.val("");
      ipDevice.val("");
      power.val("");
    }
  })
})
