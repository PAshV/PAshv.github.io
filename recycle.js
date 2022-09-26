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
    $('.u-succ').addClass('activeState');
    $('#sec-fbb7').addClass('activeState');
    $('#sec-47ad').removeClass('activeState');
    var rewardPoints = 300;
    if (document.getElementById('checkbox-0bfa').checked) {
        rewardPoints = 500;
    }
    document.getElementById('rewardPoint').innerHTML = rewardPoints;

    $('#sec-13e7').addClass('activeState');

    if (document.getElementById('select-9bff').value == "HYDERABAD") {
        document.getElementById('vendorId').innerHTML = "Hash Technologies is your vendor, that we have selected on our behalf. They will be contacting you shortly to collect your device."
    } else if (document.getElementById('select-9bff').value == "BANGALORE") {
        document.getElementById('vendorId').innerHTML = "Clean To Green is your vendor, that we have selected on our behalf. They will be contacting you shortly to collect your device."

    }
}

function formSubmit2() {
    $('.u-succ-2').addClass('activeState');
}
