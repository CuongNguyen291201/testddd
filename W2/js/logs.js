$(document).ready(() => {
  const dtLogs = [
    {
      "id": 101,
      "name": "TV",
      "action": "Turn on",
      "date": 1123456
    },
    {
      "id": 102,
      "name": "Washer",
      "action": "Turn on",
      "date": 1123456
    },
    {
      "id": 103,
      "name": "Selling Fan",
      "action": "Turn on",
      "date": 1123456
    },
    {
      "id": 104,
      "name": "Bed",
      "action": "Turn on",
      "date": 1123456
    },
    {
      "id": 105,
      "name": "Clock",
      "action": "Turn on",
      "date": 1123456
    },
    {
      "id": 106,
      "name": "Chair",
      "action": "Turn on",
      "date": 1123456
    },
    {
      "id": 107,
      "name": "Picture",
      "action": "Turn on",
      "date": 1123456
    },
    {
      "id": 108,
      "name": "Close",
      "action": "Turn on",
      "date": 1123456
    },
    {
      "id": 109,
      "name": "Sofa",
      "action": "Turn on",
      "date": 1123456
    },
    {
      "id": 110,
      "name": "Vase",
      "action": "Turn on",
      "date": 1123456
    },
  ]

  let rowData = 3;

  $("select").on("change", function () {
    rowData = this.value;
    showData(sliceData(dtLogs, 1, rowData));
    showPagination(dtLogs);
    getDataByPage(dtLogs);
  })

  const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };
  const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };

  if (!localStorage.getItem("user-bss")) {
    window.location.href = "/";
  }

  $("#logout").click(() => {
    localStorage.removeItem("user-bss");
    window.location.href = "/";
  })

  const showData = (data) => {
    $(".table-data").empty();
    let totalDevices = data.reduce((prev, current) => prev + current.power, 0);
    data.map(item => (
      $(".table-data").append(
        `
          <tr>
            <td>${item.id}</td>
            <td class="devices">${item.name}</td>
            <td>${item.action}</td>
            <td class="power">${item.date}</td>
          </tr>
        `
      )
    ));
  }
  showData(sliceData(dtLogs, 1, rowData));

  let keySearch = $("#key-search");
  $(".search-device").click(() => {
    let key = keySearch.val().toLowerCase();
    let dtLogsFilter = dtLogs.filter(item => item.name.toLowerCase().includes(key));
    showData(sliceData(dtLogsFilter, 1, rowData));
    if (key !== "") {
      showPagination(sliceData(dtLogsFilter, 1, rowData));
    } else {
      showPagination(dtLogs);
    }
    keySearch.val("");
  });

  const showPagination = (data) => {
    $(".pagination").empty();
    calculateRange(data, rowData).map(item => (
      $(".pagination").append(
        `
          <div class="pagination-item" id="page-${item}">${item}</div>
        `
      )
    ));
  }
  showPagination(dtLogs);

  const getDataByPage = (data) => {
    calculateRange(data, rowData).map(item => (
      $(`#page-${item}`).click(() => {
        showData(sliceData(data, item, rowData));
      })
    ));
  } 

  getDataByPage(dtLogs);
})