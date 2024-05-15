function goToRhbTreasureBuilder() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    createRhbTreasureBuilderApi(params.id);
}

function goToRhbTreasureSupreme() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    createRhbTreasureSupremeApi(params.id);
}

function goToRt100(type) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    createRt100Api(params.id, type);
}

function goToREP(type) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(type);
    createREPApi(params.id, type);
}

function createREPApi(id, type) {
    showLoader();
    var url = sitename + 'RhbEssentialProtect/Create/' + id;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: "GET",
        success: function (data) {
            var url = `${sitename}RhbEssentialProtect?id=${id}&page=2&type=${type}`;
            window.location.replace(url);
        },
        error: function (data) {
            hideloader();
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });
}

function createRt100Api(id, type) {
    showLoader();
    var url = sitename + 'RT100/Create/' + id;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: "GET",
        success: function (data) {
            var url = `${sitename}RT100?id=${id}&page=2&type=${type}`;
            window.location.replace(url);
        },
        error: function (data) {
            hideloader();
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });
}

function createRhbTreasureBuilderApi(id) {
    showLoader();
    var url = sitename + 'RhbTreasureBuilder/Create/' + id;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: "GET",
        success: function (data) {
            var url = sitename + 'RhbTreasureBuilder?id=' + id + '&page=2';
            window.location.replace(url);
        },
        error: function (data) {
            hideloader();
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });
}

function createRhbTreasureSupremeApi(id) {
    showLoader();
    var url = sitename + 'RhbTreasureSupreme/Create/' + id;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: "GET",
        success: function (data) {
            var url = sitename + 'RhbTreasureSupreme?id=' + id + '&page=2';
            window.location.replace(url);
        },
        error: function (data) {
            hideloader();
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });
}

$(window).on("orientationchange", function (event) {
    if (this.page_count_store == 24) {
        setTimeout(function () {
            var chart = $("#payout_for_death_chart").data("kendoChart");

            if (chart != undefined)
                chart.refresh();

            var chart1 = $("#overall_gcp_boosted_graph").data("kendoChart");

            if (chart1 != undefined)
                chart1.refresh();
        }, 150)
    }
    if (this.page_count_store == 28) {
        setTimeout(function () {
            var chart = $("#gcp_receive_chart").data("kendoChart");

            if (chart != undefined)
                chart.refresh();

            var chart1 = $("#gcp_accumulated_chart").data("kendoChart");
            if (chart1 != undefined)
                chart1.refresh();
        }, 150)
    }
    if (this.page_count_store == 29) {
        setTimeout(function () {
            var chart = $("#opr_tpp_receive_graph").data("kendoChart");
            if (chart != undefined)
                chart.refresh();

            var chart1 = $("#opr_tpp_accumulate_graph").data("kendoChart");
            if (chart1 != undefined)
                chart1.refresh();
        }, 150)
    }
});

$(document).ready(function () {
    $(`#section_1`).css('display', 'block');
    $(`#pagination`).css('display', 'none');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
        $('.back_button').html('<')
        $('.next_button').html('>')
        $('.skip_button').html('>>')
        $('.home_button').html('&#x2302')
        $('.back_button').css('width', '40px')
        $('.back_button').css('margin-left', '10px')
        $('.next_button').css('width', '40px')
        $('.next_button').css('margin-right', '10px')
        $('.skip_button').css('width', '40px')
        $('.skip_button').css('margin-right', '10px')
        $('.home_button').css('width', '40px')
        $('.home_button').css('margin-right', '10px')
        $('.pagination_button').css('top', '58px')
    } else {
        isMobile = false;
    }

    if (/iPad|iPhone|MacIntel|iPod/.test(navigator.platform)) {
        isMobile = true;
    }

    if (/iPad|MacIntel/.test(navigator.platform)) {
        isTablet = true;
    }

    const browserZoomLevel = Math.round(window.devicePixelRatio * 100);

    if (browserZoomLevel >= 25 && browserZoomLevel <= 50) {
        $('.next_button').css('width', '355px');
        $('.next_button').css('height', '110px');
        $('.next_button').css('font-size', '61px');
        $('.next_button').css('border-radius', '70px');

        //$('.back_button').css('float','left');
        $('.back_button').css('width', '355px');
        $('.back_button').css('font-size', '61px');
        $('.back_button').css('height', '110px');
        $('.back_button').css('border-radius', '70px');

        $('.skip_button').css('width', '355px');
        $('.skip_button').css('height', '110px');
        $('.skip_button').css('font-size', '61px');
        $('.skip_button').css('border-radius', '70px');

        $('.home_button').css('width', '355px');
        $('.home_button').css('height', '110px');
        $('.home_button').css('font-size', '61px');
        $('.home_button').css('border-radius', '70px');

        $('.pagination_button').css('top', '57px');
    }
    else if (browserZoomLevel >= 175 && browserZoomLevel <= 300) {
        $('.next_button').css('width', '50px');
        $('.next_button').css('height', '25px');
        $('.next_button').css('font-size', '10px');
        $('.next_button').css('display', 'flex');
        $('.next_button').css('justify-content', 'center');
        $('.next_button').css('align-items', 'center');

        //$('.back_button').css('float','left');
        $('.back_button').css('width', '50px');
        $('.back_button').css('font-size', '10px');
        $('.back_button').css('height', '25px');
        //$('.back_button').css('display','flex');
        $('.back_button').css('justify-content', 'center');
        $('.back_button').css('align-items', 'center');

        $('.skip_button').css('width', '50px');
        $('.skip_button').css('height', '25px');
        $('.skip_button').css('font-size', '10px');
        $('.skip_button').css('display', 'flex');
        $('.skip_button').css('justify-content', 'center');
        $('.skip_button').css('align-items', 'center');

        $('.home_button').css('width', '50px');
        $('.home_button').css('height', '25px');
        $('.home_button').css('font-size', '10px');
        $('.home_button').css('display', 'flex');
        $('.home_button').css('justify-content', 'center');
        $('.home_button').css('align-items', 'center');

        $('.pagination_button').css('top', '57px')
    }
    else if (browserZoomLevel >= 301 && browserZoomLevel <= 800) {
        $('.next_button').css('width', '30px');
        $('.next_button').css('height', '15px');
        $('.next_button').css('font-size', '7px');
        $('.next_button').css('display', 'flex');
        $('.next_button').css('justify-content', 'center');
        $('.next_button').css('align-items', 'center');

        //$('.back_button').css('float','left');
        $('.back_button').css('width', '30px');
        $('.back_button').css('font-size', '7px');
        $('.back_button').css('height', '15px');
        //$('.back_button').css('display','flex');
        $('.back_button').css('justify-content', 'center');
        $('.back_button').css('align-items', 'center');

        $('.skip_button').css('width', '30px');
        $('.skip_button').css('height', '15px');
        $('.skip_button').css('font-size', '7px');
        $('.skip_button').css('display', 'flex');
        $('.skip_button').css('justify-content', 'center');
        $('.skip_button').css('align-items', 'center');

        $('.home_button').css('width', '30px');
        $('.home_button').css('height', '15px');
        $('.home_button').css('font-size', '7px');
        $('.home_button').css('display', 'flex');
        $('.home_button').css('justify-content', 'center');
        $('.home_button').css('align-items', 'center');

        $('.pagination_button').css('top', '51px')
    }
    else {
        $('.next_button').css('width', '165px');
        $('.next_button').css('height', '40px');
        $('.next_button').css('font-size', '17px');

        $('.back_button').css('width', '165px');
        $('.back_button').css('font-size', '17px');
        $('.back_button').css('height', '40px');

        $('.skip_button').css('width', '165px');
        $('.skip_button').css('height', '40px');
        $('.skip_button').css('font-size', '17px');

        $('.home_button').css('width', '165px');
        $('.home_button').css('height', '40px');
        $('.home_button').css('font-size', '17px');
    }
});

window.addEventListener('resize', () => {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobileNew = true;
    } else {
        isMobileNew = false;
    }

    if (/iPad|iPhone|MacIntel|iPod/.test(navigator.platform)) {
        isMobileNew = true;
    }

    if (/iPad|MacIntel/.test(navigator.platform)) {
        isMobileNew = true;
    }

    if (isMobileNew == false) {
        const browserZoomLevel = Math.round(window.devicePixelRatio * 100);

        if (browserZoomLevel >= 25 && browserZoomLevel <= 50) {
            $('.next_button').css('width', '355px');
            $('.next_button').css('height', '110px');
            $('.next_button').css('font-size', '61px');
            $('.next_button').css('border-radius', '70px');
            $('.back_button').css('width', '355px');
            $('.back_button').css('font-size', '61px');
            $('.back_button').css('height', '110px');
            $('.back_button').css('border-radius', '70px');

            $('.skip_button').css('width', '355px');
            $('.skip_button').css('height', '110px');
            $('.skip_button').css('font-size', '61px');
            $('.skip_button').css('border-radius', '70px');

            $('.home_button').css('width', '355px');
            $('.home_button').css('height', '110px');
            $('.home_button').css('font-size', '61px');
            $('.home_button').css('border-radius', '70px');

            $('.pagination_button').css('top', '57px');
        }
        else if (browserZoomLevel >= 175 && browserZoomLevel <= 300) {
            $('.next_button').css('width', '50px');
            $('.next_button').css('height', '25px');
            $('.next_button').css('font-size', '10px');
            $('.next_button').css('display', 'flex');
            $('.next_button').css('justify-content', 'center');
            $('.next_button').css('align-items', 'center');
            $('.back_button').css('width', '50px');
            $('.back_button').css('font-size', '10px');
            $('.back_button').css('height', '25px');
            $('.back_button').css('justify-content', 'center');
            $('.back_button').css('align-items', 'center');

            $('.skip_button').css('width', '50px');
            $('.skip_button').css('height', '25px');
            $('.skip_button').css('font-size', '10px');
            $('.skip_button').css('display', 'flex');
            $('.skip_button').css('justify-content', 'center');
            $('.skip_button').css('align-items', 'center');

            $('.home_button').css('width', '50px');
            $('.home_button').css('height', '25px');
            $('.home_button').css('font-size', '10px');
            $('.home_button').css('display', 'flex');
            $('.home_button').css('justify-content', 'center');
            $('.home_button').css('align-items', 'center');

            $('.pagination_button').css('top', '57px')
        }
        else if (browserZoomLevel >= 301 && browserZoomLevel <= 800) {
            $('.next_button').css('width', '30px');
            $('.next_button').css('height', '15px');
            $('.next_button').css('font-size', '7px');
            $('.next_button').css('display', 'flex');
            $('.next_button').css('justify-content', 'center');
            $('.next_button').css('align-items', 'center');
            $('.back_button').css('width', '30px');
            $('.back_button').css('font-size', '7px');
            $('.back_button').css('height', '15px');
            $('.back_button').css('justify-content', 'center');
            $('.back_button').css('align-items', 'center');

            $('.skip_button').css('width', '30px');
            $('.skip_button').css('height', '15px');
            $('.skip_button').css('font-size', '7px');
            $('.skip_button').css('display', 'flex');
            $('.skip_button').css('justify-content', 'center');
            $('.skip_button').css('align-items', 'center');

            $('.home_button').css('width', '30px');
            $('.home_button').css('height', '15px');
            $('.home_button').css('font-size', '7px');
            $('.home_button').css('display', 'flex');
            $('.home_button').css('justify-content', 'center');
            $('.home_button').css('align-items', 'center');

            $('.pagination_button').css('top', '51px')
        }
        else {
            $('.next_button').css('width', '165px');
            $('.next_button').css('height', '40px');
            $('.next_button').css('font-size', '17px');

            $('.back_button').css('width', '165px');
            $('.back_button').css('font-size', '17px');
            $('.back_button').css('height', '40px');

            $('.skip_button').css('width', '165px');
            $('.skip_button').css('height', '40px');
            $('.skip_button').css('font-size', '17px');

            $('.home_button').css('width', '165px');
            $('.home_button').css('height', '40px');
            $('.home_button').css('font-size', '17px');
        }
    }


    if (isMobileNew == true) {
        $('.skip_button').hide();

        if (!lastpage) {
            $('.home_button').hide();
        }
    } 
})