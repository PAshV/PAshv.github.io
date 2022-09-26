function beginRecycle() {
    $('.cmSec').removeClass('activeState');
    $('#sec-d8ec').addClass('activeState');
}

function deviceTypeLaptopSel() {
    $('#sec-d8ec').removeClass('activeState');
    $('#sec-b832').addClass('activeState');
    document.getElementById('deviceType').value = 'laptop';
}

function deviceTypeConsoleSel() {
    $('#sec-d8ec').removeClass('activeState');
    $('#sec-d357').addClass('activeState');
    document.getElementById('deviceType').value = 'console';
}

function deviceBrandLaptopSel() {
    $('#sec-b832').removeClass('activeState');
    $('#carousel_1513').addClass('activeState');
    document.getElementById('brand').value = 'microsoft';
}

function deviceModelLapSel() {
    $('#carousel_1513').removeClass('activeState');
    $('#sec-47ad').addClass('activeState');
    document.getElementById('deviceModel').value = 'pro';
}

function formSubmit() {
    $('.u-form-send-message').addClass('activeState');
    $('#sec-fbb7').addClass('activeState');
    var rewardPoints = 300;
    if (document.getElementById('checkbox-0bfa').checked) {
        rewardPoints = 500;
    }
    document.getElementById('rewardPoint').innerHTML = rewardPoints;

    $('#sec-13e7').addClass('activeState');
}
