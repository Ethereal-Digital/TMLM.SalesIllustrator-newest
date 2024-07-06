var page_count_store = 1;
var isMobileNew = false;
/*details*/
var firstPrio = '';
var secondPrio = '';
var risk = '';
var name = '';
var dob = '';
var age = '';
var gender = '';
var martial = '';
var child = '';
var occupation = '';
var nature = '';
var occupationCode = '';
var industryCode = '';
var returnHome = '';

var Validate_name = false;
var Validate_dob = false;
var Validate_gender = false;
var Validate_martial = false;
var Validate_child = false;
var Validate_occupation = false;
var Validate_nature = false;
var Validate_occCode = false;

var completeForm = false;

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

function goToRhbTreasureFlexiWealth() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    createRhbTreasureFlexiWealthApi(params.id);
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

    let categoryName1 = getCategoryName2(firstPrio);
    let categoryName2 = getCategoryName2(secondPrio);

    var req = {
        name: name,
        category: categoryName1,
        category2: categoryName2,
        risk: risk,
        age: this.age,
        dateOfBirth: new Date(dob),
        gender: gender,
        martial: martial,
        child: child,
        occupation: occupationCode,
        industry: industryCode,
        id: id
    };

    var url = sitename + 'RhbEssentialProtect/Create';
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        data: JSON.stringify(req),
        dataType: "JSON",
        type: "POST",
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

    let categoryName1 = getCategoryName2(firstPrio);
    let categoryName2 = getCategoryName2(secondPrio);

    var req = {
        name: name,
        category: categoryName1,
        category2: categoryName2,
        risk: risk,
        age: this.age,
        dateOfBirth: new Date(dob),
        gender: gender,
        martial: martial,
        child: child,
        occupation: occupationCode,
        industry: industryCode,
        id: id
    };

    var url = sitename + 'RT100/Create';
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        data: JSON.stringify(req),
        dataType: "JSON",
        type: "POST",
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

    let categoryName1 = getCategoryName2(firstPrio);
    let categoryName2 = getCategoryName2(secondPrio);

    var req = {
        name: name,
        category: categoryName1,
        category2: categoryName2,
        risk: risk,
        dateOfBirth: new Date(dob),
        gender: gender,
        martial: martial,
        child: child,
        occupation: occupationCode,
        industry: industryCode,
        id: id
    };

    var url = sitename + 'RhbTreasureBuilder/Create';
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        data: JSON.stringify(req),
        dataType: "JSON",
        type: "POST",
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

    let categoryName1 = getCategoryName2(firstPrio);
    let categoryName2 = getCategoryName2(secondPrio);

    var req = {
        name: name,
        category: categoryName1,
        category2: categoryName2,
        risk: risk,
        dateOfBirth: new Date(dob),
        gender: gender,
        martial: martial,
        child: child,
        occupation: occupationCode,
        industry: industryCode,
        id: id
    };

    var url = sitename + 'RhbTreasureSupreme/Create';

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        data: JSON.stringify(req),
        dataType: "JSON",
        type: "POST",
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

function createRhbTreasureFlexiWealthApi(id) {
    showLoader();

    let categoryName1 = getCategoryName2(firstPrio);
    let categoryName2 = getCategoryName2(secondPrio);

    var req = {
        name: name,
        category: categoryName1,
        category2: categoryName2,
        risk: risk,
        dateOfBirth: new Date(dob),
        gender: gender,
        martial: martial,
        child: child,
        occupation: occupationCode,
        industry: industryCode,
        id: id
    };

    var url = sitename + 'RhbTreasureFlexiWealth/Create';

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        data: JSON.stringify(req),
        dataType: "JSON",
        type: "POST",
        success: function (data) {
            var url = sitename + 'RhbTreasureFlexiWealth?id=' + id + '&page=2';
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

    this.firstPrio = '';
    this.secondPrio = '';
    this.risk = '';
    this.name = '';
    this.dob = '';
    this.age = '';
    this.gender = '';
    this.martial = '';
    this.child = '';
    this.occupation = '';
    this.nature = '';
    this.returnHome = '';

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

    GetDropDown();
    GetUserDetails();
});

window.addEventListener('resize', () => {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobileNew = true;
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

        //if (!lastpage) {
        //    $('.home_button').hide();
        //}
    } 
})


/*JS FUNCTIONS*/
function submitForm(){
    this.name = $('.name').val();
    this.dob = $('#age').val();
    this.martial = $('#martialStats').val();
    this.child = $('#childopt').val();
    this.occupation = $('#occupationDrop').val();
    this.nature = $('#natureopt').val();

    var error = false;

    if(this.name = ''){
        $('.invalid_name').show();
        error = true;
    }
    if(this.dob = ''){
        $('.invalid_date').show();
        error = true;
    }
    if(this.martial = ''){
        $('.martial_invalid').show();
        error = true;
    }
    if(this.child = ''){
        $('.children_invalid').show();
        error = true;
    }
    if(this.occupation = ''){
        $('.occupation_invalid').show();
        error = true;
    }
    if(this.nature = ''){
        $('.nature_invalid').show();
        error = true;
    }
    
    if(error){
        return false;
    }
    else{
        next_page();
    }
}

async function updateProcess(purpose){
    await UpdatePurposeSales(purpose);
}
function UpdatePurposeSales(purpose) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    /*params.id*/

    var url = sitename + 'SalesIllustrator/UpdatePurposeSales';

    var req = {
        id: params.id,
        process: purpose,
    };

    showLoader();

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        data: JSON.stringify(req),
        dataType: "JSON",
        type: "POST",
        success: function (data) {
            hideloader();
        },
        error: function (data) {
            hideloader();
            console.log('fail' + data);
            //failApiResponse(data);
            //window.location.href = sitename + "error";
        }
    });
}

const products = [
    //{ product: 'EES', type: 'Non-Par', suitability: { retirement: 'Y', investment: 'Y', incomeReplacement: '', education: 'Y', regularSavings: 'Y' } },
    //{ product: 'EFP', type: 'ILP', suitability: { retirement: 'Y', investment: 'Y', incomeReplacement: '', education: 'Y', regularSavings: 'Y' } },
    //{ product: 'EPP', type: 'ILP', suitability: { retirement: 'Y', investment: 'Y', incomeReplacement: 'Y', education: 'Y', regularSavings: 'Y' } },
    //{ product: 'RAF', type: 'Non-Par', suitability: { retirement: '', investment: 'Y', incomeReplacement: 'Y', education: 'Y', regularSavings: 'Y' } },
    { product: 'RT100', type: 'Non-Par', suitability: { retirement: 'Y', investment: '', incomeReplacement: '', education: 'Y', regularSavings: 'Y' } },
    { product: 'RT100P', type: 'Non-Par', suitability: { retirement: 'Y', investment: '', incomeReplacement: '', education: 'Y', regularSavings: 'Y' } },
    { product: 'RTB', type: 'ILP', suitability: { retirement: 'Y', investment: '', incomeReplacement: 'Y', education: 'Y', regularSavings: 'Y' } },
    { product: 'REP', type: 'ILP', suitability: { retirement: 'Y', investment: '', incomeReplacement: 'Y', education: '', regularSavings: 'Y' } },
    { product: 'REPP', type: 'ILP', suitability: { retirement: 'Y', investment: '', incomeReplacement: 'Y', education: '', regularSavings: 'Y' } },
    { product: 'RTS', type: 'Non-Par', suitability: { retirement: 'Y', investment: '', incomeReplacement: '', education: 'Y', regularSavings: 'Y' } },
    { product: 'RFW', type: 'ILP', suitability: { retirement: 'Y', investment: '', incomeReplacement: 'Y', education: '', regularSavings: 'Y' } }
];

const riskPreferences = {
    1: [],
    2: ['Non-Par', 'Par'],
    3: ['Non-Par', 'Par', 'ILP'],
    4: ['Non-Par', 'Par', 'ILP'],
    5: ['Non-Par', 'Par', 'ILP']
};

function getCategoryName(id) {
    if (id == 1)
        return "retirement";
    else if (id == 2)
        return "investment";
    else if (id == 3)
        return "incomeReplacement";
    else if (id == 4)
        return "education";
    else if (id == 5)
        return "regularSavings";
}

function getCategoryName2(id) {
    if (id == 1)
        return "retirement";
    else if (id == 2)
        return "investment";
    else if (id == 3)
        return "income replacement";
    else if (id == 4)
        return "education";
    else if (id == 5)
        return "regular savings";
}

function getCategoryid(name) {
    if (name == "retirement")
        return 1;
    else if (name == "investment")
        return 2;
    else if (name == "income replacement")
        return 3;
    else if (name == "education")
        return 4;
    else if (name == "regular savings")
        return 5;
}

function productRecommend(){
//retirement 1
//investment 2
//income replace 3
//edu 4
//regular 5
    
    var suitabilityKey1 = getCategoryName(firstPrio);
    var suitabilityKey2 = getCategoryName(secondPrio);
    var allowedTypes = riskPreferences[risk];

    var recommendedProducts = products.filter(product => {
        var isSuitable = product.suitability[suitabilityKey1] === 'Y' || product.suitability[suitabilityKey2] === 'Y';
        var isAllowedType = allowedTypes.includes(product.type);
        return !(isSuitable && isAllowedType);
    });
    
    console.log(recommendedProducts);
    return recommendedProducts;
    //var options = [];
    //var result = [];


    //if (firstPrio == 1 || secondPrio == 1 || firstPrio == 5 || secondPrio == 5) {

    //}
    //else if (firstPrio == 3 || secondPrio == 3) {
    //    options.push("RT100");
    //    options.push("RT100P");
    //    options.push("RTS");

    //    if (firstPrio == 4 || secondPrio == 4) {
    //        options.push("REP");
    //        options.push("REPP");
    //        options.push("RFW");
    //    }
    //}
    //else if (firstPrio == 4 || secondPrio == 4) {
    //    options.push("REP");
    //    options.push("REPP");
    //    options.push("RFW");

    //    if (firstPrio == 3 || secondPrio == 3) {
    //        options.push("RT100");
    //        options.push("RT100P");
    //        options.push("RTS");
    //    }
    //} 
    
    //if(risk == 1){
    //    options = [];
    //    options.push("RT100");
    //    options.push("RT100P");
    //    options.push("RTB");
    //    options.push("REP");
    //    options.push("REPP");
    //    options.push("RTS");
    //    options.push("RFW");
    //}
    //else if(risk == 2){
    //    if(!options.includes("RTB")){
    //        options.push('RTB');
    //    }
    //    if(!options.includes("REP")){
    //        options.push('REP');
    //    }
    //    if(!options.includes("REPP")){
    //        options.push('REPP');
    //    }
    //    if(!options.includes("RFW")){
    //        options.push('RFW');
    //    }
    //}
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

function GetOccCode(occupation, nature){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var url = sitename + 'SalesIllustrator/GetOccupationCode';

    //var req = {
    //    code: occupation,
    //    IndustryCode: nature,
    //};

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        data: {
            code: occupation,
            IndustryCode: nature,
            authToken: params.id,
        },
        dataType: "JSON",
        type: "GET",
        success: function (data) {
            var temp = $.parseJSON(data);
            if(temp != null){
                occupationCode = temp.code;
                industryCode = temp.IndustryCode;
            }
            else{
                occupationCode = null;
                industryCode = null;
            }
            

            if (occupationCode == null || industryCode == null) {
                $('.occupation_invalid').html('Please select valid option');
                $('.occupation_invalid').show();

                $('.nature_invalid').html('Please select valid option');
                $('.nature_invalid').show();
                Validate_occCode = false;
            }
            else{
                $('.nature_invalid').hide();
                $('.occupation_invalid').hide();
                Validate_occCode = true;

                if (Validate_name && Validate_dob && Validate_dob && Validate_gender && Validate_martial && Validate_child && Validate_occupation && Validate_nature && Validate_occCode) {
                    completeForm = true;
                    next_page();
                }
                else {
                    completeForm = false;
                }
            }
        },
        error: function (data) {
            hideloader();
            console.log('fail occupation dropdown')
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });
}

async function GetDropDown(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    await GetOccDropDown(params.id);
    await GetNatureDropDown(params.id);
}

function GetUserDetails(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var url = sitename + 'SalesIllustrator/GetUserDetails';
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        data: {
            authToken: params.id
        },
        datatype: "JSON",
        type: "GET",
        success: function (data) {
            if(data != ""){
                response = JSON.parse(data);

                if(response != null){
                    BindUserDetails(response);
                    next(20);
                }
            }
        },
        error: function (data) {
            hideloader();
            alert('fail user details' + data)
            //failApiResponse(data);
            //window.location.href = sitename + "error";
        }
    });
}

function BindUserDetails(detials){
    this.name = detials.Name;
    dob = detials.DateOfBirth;
    gender = detials.Gender;
    martial = detials.MartialStatus;
    child = detials.Children;
    occupationCode = detials.Occupation;
    industryCode = detials.IndustryCode;
    firstPrio = getCategoryid(detials.Category);
    secondPrio = getCategoryid(detials.Category2);
    risk = detials.Risk;
    age = detials.Age;
}

function GetOccDropDown(auth){
    var url = sitename + 'SalesIllustrator/GetDropDownOccupation/' + auth;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: "GET",
        success: function (data) {
            response = JSON.parse(data);
            $("#occupationDrop").empty();
            var select = document.getElementById('occupationDrop');
            var opt = document.createElement('option');
            opt.value = '';
            opt.innerHTML = '-Please Select-';
            select.appendChild(opt);

            $(response).each(function(index, ocp){
                var select  = document.getElementById('occupationDrop');
                var opt = document.createElement('option');
                opt.value = ocp.Occupation;
                opt.innerHTML = ocp.Occupation;

                select.appendChild(opt);
                /*console.log(ocp.Occupation)*/
            });
        },
        error: function (data) {
            hideloader();
            alert('fail occupation dropdown' + data)
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });
}

function GetNatureDropDown(auth){
    var url = sitename + 'SalesIllustrator/GetDropDownNature/' + auth;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: "GET",
        success: function (data) {
            response = JSON.parse(data);
            $("#natureopt").empty();
            var select = document.getElementById('natureopt');
            var opt = document.createElement('option');
            opt.value = '';
            opt.innerHTML = '-Please Select-';
            select.appendChild(opt);

            $(response).each(function(index, ocp){
                var select  = document.getElementById('natureopt');
                var opt = document.createElement('option');
                opt.value = ocp.NatureOfBusiness;
                opt.innerHTML = ocp.NatureOfBusiness;

                if(opt.value == 'NOT APPLICABLE'){
                    select.insertBefore(opt, select.options[1]);
                }
                else{
                    select.appendChild(opt);
                }
            });
        },
        error: function (data) {
            hideloader();
            alert('fail nature dropdown ' + data)
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });
}

function skip() {
    $(`#section_${page_count_store}`).css('display', 'none');

    if(this.secondPrio != '') {
        $(`#section_19`).css('display', 'block');
        page_count_store = 19;
        checkPageCounter(19);
    }else if (this.firstPrio != '') {
        $(`#section_3`).css('display', 'block');
        page_count_store = 3;
        checkPageCounter(3);
    }
}

function submitPriority(priority, page) {
    if (this.firstPrio == '') {
        this.firstPrio = priority;
        next(page);
    }
    else if(this.secondPrio == '') {
        this.secondPrio = priority;
        next(page);
    }
}

function mobileClickOccurence(i, y) {

    if( this.occurence == 1){
        submitPriority(i, y);
    }
    else{
        this.occurence++;
    }

    //if (this.temp_occurence == i) {
    //    this.occurence++;

    //    if (this.occurence == 2) {
    //        this.choice = i;
    //        next(y);
    //    }

    //    this.occurence = 0;
    //} else {
    //    this.occurence = 1;
    //}
    //this.temp_occurence = i;
}

function next(page_counter) {
    if (page_counter != 1) {
        $(`#pagination`).css('display', 'block');
    }

    $(`#section_${page_count_store}`).css('display', 'none');
    $(`#section_${page_counter}`).css('display', 'block');
    page_count_store = page_counter;

    checkPageCounter(page_counter)
}

function back_page() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    //if (params.page == 2 && page_count_store == 2) {
    //    afterHomeV2();
    //    return;
    //}

    if (page_count_store != 1) {
        $(`#pagination`).css('display', 'block');
    }

    $(`#section_${page_count_store}`).css('display', 'none');
    page_count_store--;

    if(page_count_store == 20){
        page_count_store = 19;
    }

    if(this.firstPrio != '' && this.secondPrio != ''){
        page_count_store = this.secondPrio == 1 && page_count_store == 18 ? 6 :
        this.secondPrio == 2 && page_count_store == 18 ? 9 : 
        this.secondPrio == 3 && page_count_store == 18 ? 12 :
        this.secondPrio == 4 && page_count_store == 18 ? 15 : page_count_store;

        page_count_store = this.secondPrio == 1 && page_count_store == 3 ? 3 :
        this.secondPrio == 2 && page_count_store == 6 ? 3 : 
        this.secondPrio == 3 && page_count_store == 9 ? 3 :
        this.secondPrio == 4 && page_count_store == 12 ? 3 :
        this.secondPrio == 5 && page_count_store == 15 ? 3 : page_count_store;
    }
    else if (this.firstPrio != '') {
            page_count_store = this.firstPrio == 1 && page_count_store == 2 ? 6 :
            this.firstPrio == 2 && page_count_store == 2 ? 9 : 
            this.firstPrio == 3 && page_count_store == 2 ? 12 :
            this.firstPrio == 4 && page_count_store == 2 ? 15 :
            this.firstPrio == 5 && page_count_store == 2 ? 18 : page_count_store;

            page_count_store = this.firstPrio == 1 && page_count_store == 3 ? 3 :
            this.firstPrio == 2 && page_count_store == 6 ? 3 : 
            this.firstPrio == 3 && page_count_store == 9 ? 3 :
            this.firstPrio == 4 && page_count_store == 12 ? 3 :
            this.firstPrio == 5 && page_count_store == 15 ? 3 : page_count_store;
    }

     if(page_count_store == 3){
        if(this.secondPrio != ''){
            this.secondPrio = '';
        }
        else if(this.firstPrio != ''){
            this.firstPrio = '';
        }
    }

    $(`#section_${page_count_store}`).css('display', 'block');
    checkPageCounter(page_count_store)
}

function next_page() {
    if (page_count_store == 2 && completeForm == false) {
        checkForm();
    }
    else {
        $(`#section_${page_count_store}`).css('display', 'none');
        page_count_store++;

        if (this.firstPrio != '' && this.secondPrio != '') {
            page_count_store = this.secondPrio == 1 && page_count_store == 7 ? 19 :
                this.secondPrio == 2 && page_count_store == 10 ? 19 :
                    this.secondPrio == 3 && page_count_store == 13 ? 19 :
                        this.secondPrio == 4 && page_count_store == 16 ? 19 : page_count_store;
        }
        else if (this.firstPrio != '') {
            page_count_store = this.firstPrio == 1 && page_count_store == 7 ? 3 :
                this.firstPrio == 2 && page_count_store == 10 ? 3 :
                    this.firstPrio == 3 && page_count_store == 13 ? 3 :
                        this.firstPrio == 4 && page_count_store == 16 ? 3 :
                            this.firstPrio == 5 && page_count_store == 19 ? 3 : page_count_store;
        }

        $(`#section_${page_count_store}`).css('display', 'block');
        checkPageCounter(page_count_store);
    }
}

function riskReset(){
    $(`#riskBox1`).css('background', 'white');
    $(`#riskBox2`).css('background', 'white');
    $(`#riskBox3`).css('background', 'white');
    $(`#riskBox4`).css('background', 'white');
    $(`#riskBox5`).css('background', 'white');

    $(`#riskArr1`).hide();
    $(`#riskArr2`).hide();
    $(`#riskArr3`).hide();
    $(`#riskArr4`).hide();
    $(`#riskArr5`).hide();
    $(`#riskMeter`).hide();
    $('.next_button').hide();
}

function riskClick(option){
    riskReset();
    this.risk = option;

    switch (option) {
        case 1:
            $(`#riskBox${option}`).css('background', '#00B050');
            $(`#riskArr${option}`).show();
            $(`#riskMeter`).show();
            document.getElementById("riskMeterImg").src = sitename + "assets/sales-ill/Mrisk1.png";
            $(`#riskText`).html("You are conservative in your investment and prefer products that preserve capital, e.g. Bank's Fixed Deposits or Savings Account");
            $('.next_button').show();
            break;
        case 2:
            $(`#riskBox${option}`).css('background', '#D2D711');
            $(`#riskArr${option}`).show();
            $(`#riskMeter`).show();
            document.getElementById("riskMeterImg").src = sitename + "assets/sales-ill/Mrisk2.png";
            $(`#riskText`).html("You are moderately conservative in your investment and prefer minor investment fluctuations");
            $('.next_button').show();
            break;
        case 3:
            $(`#riskBox${option}`).css('background', '#FFD966');
            $(`#riskArr${option}`).show();
            $(`#riskMeter`).show();
            document.getElementById("riskMeterImg").src = sitename + "assets/sales-ill/Mrisk3.png";
            $(`#riskText`).html("You are moderate in your investments and prefer moderate investment fluctuations.");
            $('.next_button').show();
            break;
        case 4:
            $(`#riskBox${option}`).css('background', '#F4B183');
            $(`#riskArr${option}`).show();
            $(`#riskMeter`).show();
            document.getElementById("riskMeterImg").src = sitename + "assets/sales-ill/Mrisk4.png";
            $(`#riskText`).html("You are moderately aggressive in your investments and prefer moderately high investment fluctuations.");
            $('.next_button').show();
            break;
        case 5:
            $(`#riskBox${option}`).css('background', '#FF0000');
            $(`#riskArr${option}`).show();
            $(`#riskMeter`).show();
            document.getElementById("riskMeterImg").src = sitename + "assets/sales-ill/Mrisk5.png";
            $(`#riskText`).html("You are aggressive in your investments and prefer high investment fluctuations.");
            $('.next_button').show();
            break;
        default:
            riskReset();
            break;
    }
}

function appendProduct(){
    const $cellElems1 = $(`<div class="carousel-cell" id="REP"> <div onclick="goToREP(\'mass\')"> <div style="background: #0096a9; padding: 10px; text-align: center; color: #fff; font-weight: 600;">RHB Essential Protect</div> <img loading="lazy" style="display: block; margin-left: auto; cursor: pointer; margin-right: auto; width: 100%" src="${sitename}assets/Mass.png"> <div class="bottom_Description_f"> <ul> <li class="fs_13">A limited premium payment term Investment-Linked endowment plan covering Death, Total and Permanent Disability (TPD) or Senior Disability (SD).</li> <li class="fs_13">Additional coverage on accidental death or TPD of the Life Assured and his/her legal spouse.</li> <li class="fs_13">This plan also provides Lifestyle Reward in which additional Basic Sum Assured will be added upon every end of the 5 policy years.</li> <li class="fs_13">Loyalty Bonus is also payable to the Protection Fund Value based on the age of entitlement. </li> </ul> </div></div> </div>`);
    const $cellElems2 = $(`<div class="carousel-cell" id="REPP"> <div onclick="goToREP(\'premier\');"> <div style="background: #0096a9; padding: 10px; text-align: center; color: #fff; font-weight: 600;">RHB Essential Protect Premier</div> <img loading="lazy"  style=" display: block; margin-left: auto;cursor: pointer; margin-right: auto; width: 100%" src="${sitename}assets/Premier.png"> <div class="bottom_Description_f"> <ul> <li class="fs_13">A limited premium payment term Investment-Linked endowment plan covering Death, Total and Permanent Disability (TPD) or Senior Disability (SD).</li> <li class="fs_13">Additional coverage on accidental death or TPD of the Life Assured and his/her legal spouse.</li> <li class="fs_13">This plan also provides Lifestyle Reward in which additional Basic Sum Assured will be added upon every end of the 5 policy years.</li> <li class="fs_13">Loyalty Bonus is also payable to the Protection Fund Value based on the age of entitlement. </li> </ul> </div> </div></div>`);
    const $cellElems3 = $(`<div class="carousel-cell" id="RT100"> <div onclick="goToRt100(\'mass\');"> <div style="background: #0096a9; padding: 10px; text-align: center; color: #fff; font-weight: 600;">RHB Treasure 100</div> <img loading="lazy"  style=" display: block; margin-left: auto; cursor: pointer; margin-right: auto; width: 100%" src="${sitename}assets/rt100/slide_1.png"> <div class="bottom_Description_f"> <ul> <li class="fs_13">A non-participating plan that provides annual Guaranteed Cash Payment (GCP) until the maturity of policy. </li> <li class="fs_13">This plan also provides coverage on Death or Total & Permanent Disability (TPD).  </li> <li class="fs_13">Additional coverage will be provided for Death or TPD due to Accident. </li> </ul> </div> </div> </div>`);
    const $cellElems4 = $(`<div class="carousel-cell" id="RT100P"> <div onclick="goToRt100(\'premier\');"> <div style="background: #0096a9; padding: 10px; text-align: center; color: #fff; font-weight: 600;">RHB Treasure 100 Premier</div> <img loading="lazy"  style=" display: block; margin-left: auto; cursor: pointer; margin-right: auto; width: 100%" src="${sitename}assets/rt100/slide_1_2.png"> <div class="bottom_Description_f"> <ul> <li class="fs_13">A non-participating plan that provides annual Guaranteed Cash Payment (GCP) until the maturity of policy. </li> <li class="fs_13">This plan also provides coverage on Death or Total & Permanent Disability (TPD).  </li> <li class="fs_13">Additional coverage will be provided for Death or TPD due to Accident. </li> </ul> </div> </div></div>`);
    const $cellElems5 = $(`<div class="carousel-cell" id="RTB"> <div onclick="goToRhbTreasureBuilder()"> <div style="background: #0096a9; padding: 10px; text-align: center; color: #fff; font-weight: 600;">RHB Treasure Builder</div> <img loading="lazy"  style=" display: block; margin-left: auto; cursor: pointer; margin-right: auto; width: 100%" src="${sitename}assets/main3.jpg"> <div class="bottom_Description_f"> <ul> <li class="fs_13">A limited 5 or 8 pay regular premium Investment-Linked plan covering Death or Total & Permanent Disability (TPD) up to 20 or 25 years. </li><li class="fs_13">This plan also comes with packaged premium paying riders that provides annual Guaranteed Cash Payment (GCP) until the maturity of policy. Additional GCP Booster will also be payable at the end of every five policy year. </li> </ul></div> </div></div>`);
    const $cellElems6 = $(`<div class="carousel-cell" id="RTS"> <div onclick="goToRhbTreasureSupreme()"> <div style="background: #0096a9; padding: 10px; text-align: center; color: #fff; font-weight: 600;"> RHB Treasure Supreme </div> <img loading="lazy" style=" display: block; margin-left: auto; cursor: pointer; margin-right: auto; width: 100%" src="${sitename}assets/supreme.jpg"> <div class="bottom_Description_f"> <ul> <li class="fs_13"> A non-participating plan that provides annual Guaranteed Cash Payment (GCP) until the maturity of policy. </li><li class="fs_13"> Short premium term of 3 years with Guaranteed Acceptance up to RM500,000. </li> <li class="fs_13"> This plan also provides coverage on Death or Total & Permanent Disability (TPD). </li> </ul></div></div></div>`);
    const $cellElems7 = $(`<div class="carousel-cell" id="RFW"> <div onclick="goToRhbTreasureFlexiWealth()"> <div style="background: #0096a9; padding: 10px; text-align: center; color: #fff; font-weight: 600;"> RHB Treasure FlexiWealth </div> <img loading="lazy" style=" display: block; margin-left: auto; cursor: pointer; margin-right: auto; width: 100%" src="${sitename}assets/flexi.jpg"> <div class="bottom_Description_f"> <ul> <li class="fs_13"> Our premier 3-pay investment-linked plan, designed to offer enduring coverage for Death or Total and Permanent Disability (TPD) up to your 100th birthday!</li> <li class="fs_13"> This plan requires only 3 regular premium payments, making it an optimal choice for those seeking substantial long-term protection with minimal upfront commitment. </li> <li class="fs_13"> Receive an exclusive Loyalty Bonus equal to 100% of your Basic Sum Assured (BSA), a reward for your commitment, payable at significant milestones — age 70, 80, 90, or 100 next birthday. </li> <li class="fs_13"> Enhance your peace of mind with comprehensive Spouse Accidental Death and Total Permanent Disability Coverage.  </li> </ul> </div> </div> </div>`);

    $('.carousel').flickity('append', $cellElems1);
    $('.carousel').flickity('append', $cellElems2);
    $('.carousel').flickity('append', $cellElems3);
    $('.carousel').flickity('append', $cellElems4);
    $('.carousel').flickity('append', $cellElems5);
    $('.carousel').flickity('append', $cellElems6);
    $('.carousel').flickity('append', $cellElems7);
}

function checkPageCounter(page_counter) {
    $('.back_button').show();
    $('.next_button').show();
    $('.skip_button').hide();
    $('.home_button').hide();

    if (page_counter != 1) {
        $(`#pagination`).css('display', 'block');
        /*updateProcess('Welcome');*/
    }

    if (page_counter == 2) {
        $('.back_button').hide();
        $('.next_button').show();
        $('#main_title').html("Let us know more about yourself!")
        $('#sub_title').html("")
        updateProcess('Let us know more about yourself');

        if(this.completeForm == true){
            $('.address_dob').show();
            $('.address_gender').show();
            $('.address_martial').show();
            $('.address_occupation').show();
        }else{
            $('.address_dob').hide();
            $('.address_gender').hide();
            $('.address_martial').hide();
            $('.address_occupation').hide();

            
            //GetOccDropDown();
            //GetNatureDropDown();
        }
    }
    else if (page_counter == 3) {
        $('.back_button').show();
        $('.next_button').hide();
        window.scrollTo(0, 0);

        if (this.firstPrio == '') {
            $('#main_title').html("What will be your priority at this moment?")
            $('#sub_title').html("")
            updateProcess('Priority 1');

            $('#prio1').show();
            $('#prio2').show();
            $('#prio3').show();
            $('#prio4').show();
            $('#prio5').show();

            $('#prio1M').show();
            $('#prio2M').show();
            $('#prio3M').show();
            $('#prio4M').show();
            $('#prio5M').show();
        }
        else{
            $('#main_title').html("What will be your second priority?")
            $('#sub_title').html("")
            updateProcess('Priority 2');

            this.firstPrio == 1 ? $('#prio1').hide() : 
            this.firstPrio == 2 ? $('#prio2').hide() : 
            this.firstPrio == 3 ? $('#prio3').hide() : 
            this.firstPrio == 4 ? $('#prio4').hide() : $('#prio5').hide();

            this.firstPrio == 1 ? $('#prio1M').hide() : 
            this.firstPrio == 2 ? $('#prio2M').hide() : 
            this.firstPrio == 3 ? $('#prio3M').hide() : 
            this.firstPrio == 4 ? $('#prio4M').hide() : $('#prio5M').hide();
        }
        

        if (this.isMobileNew == true) {
            this.occurence = 0;
            $('.isNonMobile').hide();
            $('.isMobile').show();

            var _that = this;
            $('html').click(function (evt) {
                if (evt.target.classList[0] != "hover_text") {
                    _that.occurence = 0;
                    _that.temp_occurence = 0;
                }
            });

        } else {
            $('.isMobile').hide();
            $('.isNonMobile').show();
        }
    }
    else if (page_counter == 4 || page_counter == 5 || page_counter == 6) {
        $('.back_button').show();
        $('.next_button').show();
        $('.skip_button').show();
        $('#main_title').html("Retirement")
        $('#sub_title').html("To live without boundaries during retirement.")

        var purpose = 'Retirement ' + (page_counter - 3);
        updateProcess(purpose);

        if (page_counter == 5) {
            $('#ret5_1').removeClass("fade-in");
            $('#ret5_2').removeClass("fade-in");
            $('#ret5_3').removeClass("fade-in");
            $('#ret5_4').removeClass("fade-in");
            $('#ret5_5').removeClass("fade-in");
            $('#ret5_6').removeClass("fade-in");

            $('#ret5_1').css('opacity', '0');
            $('#ret5_2').css('opacity', '0');
            $('#ret5_3').css('opacity', '0');
            $('#ret5_4').css('opacity', '0');
            $('#ret5_5').css('opacity', '0');
            $('#ret5_6').css('opacity', '0');

            $('#ret5_1').css('opacity', '1');
            $('#ret5_1').addClass("fade-in");

            setTimeout(function () {
                $('#ret5_2').css('opacity', '1');
                $('#ret5_2').addClass("fade-in");
            }, 800);

            setTimeout(function () {
                $('#ret5_3').css('opacity', '1');
                $('#ret5_3').addClass("fade-in");
            }, 1600);

            setTimeout(function () {
                $('#ret5_4').css('opacity', '1');
                $('#ret5_4').addClass("fade-in");
            }, 2400);

            setTimeout(function () {
                $('#ret5_5').css('opacity', '1');
                $('#ret5_5').addClass("fade-in");
            }, 3200);

            setTimeout(function () {
                $('#ret5_6').css('opacity', '1');
                $('#ret5_6').addClass("fade-in");
            }, 4000);
        }

        if (page_counter == 6) {
            $('#ret6_1').removeClass("fade-in");
            $('#ret6_2').removeClass("fade-in");
            $('#ret6_3').removeClass("fade-in");
            $('#ret6_4').removeClass("fade-in");
            $('#ret6_5').removeClass("fade-in");

            $('#ret6_1').css('opacity', '0');
            $('#ret6_2').css('opacity', '0');
            $('#ret6_3').css('opacity', '0');
            $('#ret6_4').css('opacity', '0');
            $('#ret6_5').css('opacity', '0');

            if (this.isMobileNew == true) {
                $('#ret6_1').removeClass("ml-5");
                $('#ret6_2').removeClass("ml-5");
                $('#ret6_3').removeClass("ml-5");
                $('#ret6_4').removeClass("ml-5");
                $('#ret6_5').removeClass("ml-5");
            }

            $('#ret6_1').css('opacity', '1');
            $('#ret6_1').addClass("fade-in");

            setTimeout(function () {
                $('#ret6_2').css('opacity', '1');
                $('#ret6_2').addClass("fade-in");
            }, 800);

            setTimeout(function () {
                $('#ret6_3').css('opacity', '1');
                $('#ret6_3').addClass("fade-in");
            }, 1600);

            setTimeout(function () {
                $('#ret6_4').css('opacity', '1');
                $('#ret6_4').addClass("fade-in");
            }, 2400);

            setTimeout(function () {
                $('#ret6_5').css('opacity', '1');
                $('#ret6_5').addClass("fade-in");
            }, 3200);
        }
    }
    else if (page_counter == 7 || page_counter == 8 || page_counter == 9) {
        $('.back_button').show();
        $('.next_button').show();
        $('.skip_button').show();
        $('#main_title').html("Investment")
        $('#sub_title').html("Asset acquired to build wealth.")

        var purpose = 'Investment ' + (page_counter - 6);
        updateProcess(purpose);

        if (page_counter == 7) {
            $('#inv7_1').removeClass("fade-in");
            $('#inv7_2').removeClass("fade-in");

            $('#inv7_1').css('opacity', '0');
            $('#inv7_2').css('opacity', '0');

            $('#inv7_1').css('opacity', '1');
            $('#inv7_1').addClass("fade-in");

            setTimeout(function () {
                $('#inv7_2').css('opacity', '1');
                $('#inv7_2').addClass("fade-in");
            }, 800);
        }

        if (page_counter == 8) {
            $('#inv8_1').removeClass("fade-in");
            $('#inv8_2').removeClass("fade-in");
            $('#inv8_3').removeClass("fade-in");
            $('#inv8_4').removeClass("fade-in");
            $('#inv8_5').removeClass("fade-in");

            $('#inv8_1').css('opacity', '0');
            $('#inv8_2').css('opacity', '0');
            $('#inv8_3').css('opacity', '0');
            $('#inv8_4').css('opacity', '0');
            $('#inv8_5').css('opacity', '0');

            $('#inv8_1').css('opacity', '1');
            $('#inv8_1').addClass("fade-in");

            setTimeout(function () {
                $('#inv8_2').css('opacity', '1');
                $('#inv8_2').addClass("fade-in");
            }, 800);

             setTimeout(function () {
                $('#inv8_3').css('opacity', '1');
                $('#inv8_3').addClass("fade-in");
            }, 1600);

             setTimeout(function () {
                $('#inv8_4').css('opacity', '1');
                $('#inv8_4').addClass("fade-in");

                $('#inv8_5').css('opacity', '1');
                $('#inv8_5').addClass("fade-in");
            }, 2400);
        }

        if (page_counter == 9) {
            $('#inv9_1').removeClass("fade-in");
            $('#inv9_2').removeClass("fade-in");
            $('#inv9_3').removeClass("fade-in");
            $('#inv9_4').removeClass("fade-in");
            $('#inv9_5').removeClass("fade-in");

            $('#inv9_1').css('opacity', '0');
            $('#inv9_2').css('opacity', '0');
            $('#inv9_3').css('opacity', '0');
            $('#inv9_4').css('opacity', '0');
            $('#inv9_5').css('opacity', '0');

            $('#inv9_1').css('opacity', '1');
            $('#inv9_1').addClass("fade-in");

            setTimeout(function () {
                $('#inv9_2').css('opacity', '1');
                $('#inv9_2').addClass("fade-in");
            }, 800);

             setTimeout(function () {
                $('#inv9_3').css('opacity', '1');
                $('#inv9_3').addClass("fade-in");
            }, 1600);

             setTimeout(function () {
                $('#inv9_4').css('opacity', '1');
                $('#inv9_4').addClass("fade-in");
            }, 2400);

             setTimeout(function () {
                $('#inv9_5').css('opacity', '1');
                $('#inv9_5').addClass("fade-in");
            }, 3200);
        }
    }
    else if (page_counter == 10 || page_counter == 11 || page_counter == 12) {
        $('.back_button').show();
        $('.next_button').show();
        $('.skip_button').show();
        $('#main_title').html("Income Replacement")
        $('#sub_title').html("Financial protection in the event of loss of income.")

        var purpose = 'Income Replacement ' + (page_counter - 9);
        updateProcess(purpose);

        if (page_counter == 11) {
            $('#inc11_1').removeClass("fade-in");
            $('#inc11_2').removeClass("fade-in");
            $('#inc11_3').removeClass("fade-in");
            $('#inc11_4').removeClass("fade-in");
            $('#inc11_5').removeClass("fade-in");

            $('#inc11_1').css('opacity', '0');
            $('#inc11_2').css('opacity', '0');
            $('#inc11_3').css('opacity', '0');
            $('#inc11_4').css('opacity', '0');
            $('#inc11_5').css('opacity', '0');

            $('#inc11_1').css('opacity', '1');
            $('#inc11_1').addClass("fade-in");

            setTimeout(function () {
                $('#inc11_2').css('opacity', '1');
                $('#inc11_2').addClass("fade-in");
            }, 800);

             setTimeout(function () {
                $('#inc11_3').css('opacity', '1');
                $('#inc11_3').addClass("fade-in");
            }, 1600);

             setTimeout(function () {
                $('#inc11_4').css('opacity', '1');
                $('#inc11_4').addClass("fade-in");
            }, 2400);

             setTimeout(function () {
                $('#inc11_5').css('opacity', '1');
                $('#inc11_5').addClass("fade-in");
            }, 3200);
        }

        if (page_counter == 12) {
            $('#inc12_1').removeClass("fade-in");
            $('#inc12_2').removeClass("fade-in");
            $('#inc12_3').removeClass("fade-in");
            $('#inc12_4').removeClass("fade-in");
            $('#inc12_5').removeClass("fade-in");

            $('#inc12_1').css('opacity', '0');
            $('#inc12_2').css('opacity', '0');
            $('#inc12_3').css('opacity', '0');
            $('#inc12_4').css('opacity', '0');
            $('#inc12_5').css('opacity', '0');

            $('#inc12_1').css('opacity', '1');
            $('#inc12_1').addClass("fade-in");

            setTimeout(function () {
                $('#inc12_2').css('opacity', '1');
                $('#inc12_2').addClass("fade-in");
            }, 800);

             setTimeout(function () {
                $('#inc12_3').css('opacity', '1');
                $('#inc12_3').addClass("fade-in");
            }, 1600);

             setTimeout(function () {
                $('#inc12_4').css('opacity', '1');
                $('#inc12_4').addClass("fade-in");
            }, 2400);

             setTimeout(function () {
                $('#inc12_5').css('opacity', '1');
                $('#inc12_5').addClass("fade-in");
            }, 3200);
        }
    }
    else if (page_counter == 13 || page_counter == 14 || page_counter == 15) {
        $('.back_button').show();
        $('.next_button').show();
        $('.skip_button').show();
        $('#main_title').html("Education")
        $('#sub_title').html("Provides financial protection for a child's education.")

        var purpose = 'Education ' + (page_counter - 12);
        updateProcess(purpose);

        if (page_counter == 14) {
            $('#edu14_1').removeClass("fade-in");
            $('#edu14_2').removeClass("fade-in");
            $('#edu14_3').removeClass("fade-in");
            $('#edu14_4').removeClass("fade-in");
            $('#edu14_5').removeClass("fade-in");

            $('#edu14_1').css('opacity', '0');
            $('#edu14_2').css('opacity', '0');
            $('#edu14_3').css('opacity', '0');
            $('#edu14_4').css('opacity', '0');
            $('#edu14_5').css('opacity', '0');

            $('#edu14_1').css('opacity', '1');
            $('#edu14_1').addClass("fade-in");

            setTimeout(function () {
                $('#edu14_2').css('opacity', '1');
                $('#edu14_2').addClass("fade-in");
            }, 800);

             setTimeout(function () {
                $('#edu14_3').css('opacity', '1');
                $('#edu14_3').addClass("fade-in");
            }, 1600);

             setTimeout(function () {
                $('#edu14_4').css('opacity', '1');
                $('#edu14_4').addClass("fade-in");
            }, 2400);

             setTimeout(function () {
                $('#edu14_5').css('opacity', '1');
                $('#edu14_5').addClass("fade-in");
            }, 3200);
        }

        if (page_counter == 15) {
            $('#edu15_1').removeClass("fade-in");
            $('#edu15_2').removeClass("fade-in");
            $('#edu15_3').removeClass("fade-in");
            $('#edu15_4').removeClass("fade-in");
            $('#edu15_5').removeClass("fade-in");

            $('#edu15_1').css('opacity', '0');
            $('#edu15_2').css('opacity', '0');
            $('#edu15_3').css('opacity', '0');
            $('#edu15_4').css('opacity', '0');
            $('#edu15_5').css('opacity', '0');

            $('#edu15_1').css('opacity', '1');
            $('#edu15_1').addClass("fade-in");

            setTimeout(function () {
                $('#edu15_2').css('opacity', '1');
                $('#edu15_2').addClass("fade-in");
            }, 800);

             setTimeout(function () {
                $('#edu15_3').css('opacity', '1');
                $('#edu15_3').addClass("fade-in");
            }, 1600);

             setTimeout(function () {
                $('#edu15_4').css('opacity', '1');
                $('#edu15_4').addClass("fade-in");
            }, 2400);

             setTimeout(function () {
                $('#edu15_5').css('opacity', '1');
                $('#edu15_5').addClass("fade-in");
            }, 3200);
        }
    }
    else if (page_counter == 16 || page_counter == 17 || page_counter == 18) {
        $('.back_button').show();
        $('.next_button').show();
        $('.skip_button').show();
        $('#main_title').html("Regular Savings")
        $('#sub_title').html("Consistent monthly savings.")

        var purpose = 'Regular Savings ' + (page_counter - 15);
        updateProcess(purpose);

        if (page_counter == 16) {
            $('#reg16_1').removeClass("fade-in");
            $('#reg16_2').removeClass("fade-in");
            $('#reg16_3').removeClass("fade-in");
            $('#reg16_4').removeClass("fade-in");
            $('#reg16_5').removeClass("fade-in");

            $('#reg16_1').css('opacity', '0');
            $('#reg16_2').css('opacity', '0');
            $('#reg16_3').css('opacity', '0');
            $('#reg16_4').css('opacity', '0');
            $('#reg16_5').css('opacity', '0');

            $('#reg16_1').css('opacity', '1');
            $('#reg16_1').addClass("fade-in");

            setTimeout(function () {
                $('#reg16_2').css('opacity', '1');
                $('#reg16_2').addClass("fade-in");
            }, 800);

             setTimeout(function () {
                $('#reg16_3').css('opacity', '1');
                $('#reg16_3').addClass("fade-in");
            }, 1600);

             setTimeout(function () {
                $('#reg16_4').css('opacity', '1');
                $('#reg16_4').addClass("fade-in");
            }, 2400);

             setTimeout(function () {
                $('#reg16_5').css('opacity', '1');
                $('#reg16_5').addClass("fade-in");
            }, 3200);
        }

        if (page_counter == 17) {
            $('#reg17_1').removeClass("fade-in");
            $('#reg17_2').removeClass("fade-in");
            $('#reg17_3').removeClass("fade-in");
            $('#reg17_4').removeClass("fade-in");

            $('#reg17_1').css('opacity', '0');
            $('#reg17_2').css('opacity', '0');
            $('#reg17_3').css('opacity', '0');
            $('#reg17_4').css('opacity', '0');

            $('#reg17_1').css('opacity', '1');
            $('#reg17_1').addClass("fade-in");

            setTimeout(function () {
                $('#reg17_2').css('opacity', '1');
                $('#reg17_2').addClass("fade-in");
            }, 800);

             setTimeout(function () {
                $('#reg17_3').css('opacity', '1');
                $('#reg17_3').addClass("fade-in");
            }, 1600);

             setTimeout(function () {
                $('#reg17_4').css('opacity', '1');
                $('#reg17_4').addClass("fade-in");
            }, 2400);
        }

         if (page_counter == 18) {
            $('#reg18_1').removeClass("fade-in");
            $('#reg18_2').removeClass("fade-in");
            $('#reg18_3').removeClass("fade-in");
            $('#reg18_4').removeClass("fade-in");
            $('#reg18_5').removeClass("fade-in");

            $('#reg18_1').css('opacity', '0');
            $('#reg18_2').css('opacity', '0');
            $('#reg18_3').css('opacity', '0');
            $('#reg18_4').css('opacity', '0');
            $('#reg18_5').css('opacity', '0');

            $('#reg18_1').css('opacity', '1');
            $('#reg18_1').addClass("fade-in");

            setTimeout(function () {
                $('#reg18_2').css('opacity', '1');
                $('#reg18_2').addClass("fade-in");
            }, 800);

             setTimeout(function () {
                $('#reg18_3').css('opacity', '1');
                $('#reg18_3').addClass("fade-in");
            }, 1600);

             setTimeout(function () {
                $('#reg18_4').css('opacity', '1');
                $('#reg18_4').addClass("fade-in");
            }, 2400);

             setTimeout(function () {
                $('#reg18_5').css('opacity', '1');
                $('#reg18_5').addClass("fade-in");
            }, 3200);
        }
    }
    else if (page_counter == 19) {
        $('.back_button').show();
        $('.skip_button').hide();
        $('#main_title').html("Rate Your Risk Appetite :")
        $('#sub_title').html("");
        updateProcess('Risk Appetite');

        if (this.risk) {
            $('.next_button').show();
            riskClick(this.risk);
        } else {
            $('.next_button').hide();
            
        }

        $('#riskArrowRow').show();

        if (this.isMobileNew ==  true) {
            $('#riskArrowRow').hide();
        }
    }
    else if (page_counter == 20) {
        $('.back_button').show();
        $('.next_button').hide();
        $('.skip_button').hide();
        $('#main_title').html("Product Recommendation")
        $('#sub_title').html("Based on your 2 Needs & Risk Appetite");
        updateProcess('Product Recommendation');

        $('.carousel').flickity( 'remove', document.getElementById('RTB'))
        $('.carousel').flickity( 'remove', document.getElementById('REP'))
        $('.carousel').flickity( 'remove', document.getElementById('REPP'))
        $('.carousel').flickity( 'remove', document.getElementById('RTS'))
        $('.carousel').flickity( 'remove', document.getElementById('RFW'))
        $('.carousel').flickity( 'remove', document.getElementById('RT100'))
        $('.carousel').flickity( 'remove', document.getElementById('RT100P'))
        appendProduct();

        var reco = productRecommend();

        if(reco.length == 7){
            console.log('empty');
            next(21);
        }

        reco.forEach((opt) => {
            $('.carousel').flickity( 'remove', document.getElementById(`${opt.product}`))
        });
    }
    else if(page_counter == 21){
        $('.back_button').show();
        $('.next_button').hide();
        $('.skip_button').hide();
        $('#main_title').html("Product Recommendation")
        $('#sub_title').html("Based on your 2 Needs & Risk Appetite");
        updateProcess('Product Recommendation Empty');
    }
}

/*validation*/
function numberMobile(e) {
    e.target.value = e.target.value.replace(/[-+()!@#$%^&*_=`~[{}:;'"<,>.?/0-9]/, '');
    this.name = $('.name').val();
    setTimeout(function () {
        if (this.name.length >= 1){
            this.Validate_name = true;
            $('.address_dob').show();
        }
        else{
            this.Validate_name = false;
        }
            
    }, 700)
    checkForm();
}

function validateDate(e) {
    var age_datepicker = $('#age').val(); //this.isMobile == true ? $('#agemobile').val() : 
    if (age_datepicker.length > 10 || age_datepicker.length < 10) {
        $('.invalid_date').show();
        this.Validate_dob = false;
        return;
    }

    $('.invalid_date').hide();

    var birthday = new Date(age_datepicker)
    var today = new Date()
    var ageInMilliseconds = new Date(today - birthday)
    var years = ageInMilliseconds / (24 * 60 * 60 * 1000 * 365.25)
    var months = 12 * (years % 1)
    var days = Math.floor(30 * (months % 1));
    var temp = Math.floor(years) + ' years ' + Math.floor(months) + ' months ' + days + ' days';

    if (Math.floor(years) >= 65 || (Math.floor(years) < 1 && Math.floor(months) < 1 && days <= 14)) {
        $('.invalid_date').show();
        $('.invalid_date').html('Age ranging from 14 days to 64 years old only');
        this.Validate_dob = false;
        return;
    }

    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    this.age = Math.abs(ageDate.getUTCFullYear() - 1970) + 1;

    var thisyear = new Date().getFullYear();
    this.age = parseInt(thisyear) - parseInt(age_datepicker.substring(0, 4))
    if(this.age == 0){
        this.age = this.age + 1;
    }
    this.dob = $('#age').val();
    this.Validate_dob = true;
     setTimeout(function () {
            $('.address_gender').show();
    }, 500)
    checkForm();
}

function validateGender(gender) {
    $(`.genderBorder`).removeClass('genderBox');
    $(`.genderBorder2`).removeClass('genderBox');
    $(`#${gender}Box`).addClass('genderBox');

    this.gender = gender
    this.Validate_gender = true;
    setTimeout(function () {
            $('.address_martial').show();
    }, 300)
    checkForm();
}

function validateMartial(){
    this.martial = $('#martialStats').val();
    if(this.martial == ''){
        $('.martial_invalid').show();
        this.Validate_martial = false;
    }
    else{
        $('.martial_invalid').hide();
        this.Validate_martial = true;
    }

    if(this.Validate_child == true && Validate_martial == true){
        setTimeout(function () {
            $('.address_occupation').show();
    }, 300)
    }
    checkForm();
}

function validateChild() {
    this.child = $('#childopt').val();
    if (this.child == '') {
        $('.children_invalid').show();
        this.Validate_child = false;
    }
    else {
        $('.children_invalid').hide();
        this.Validate_child = true;
    }

    if(this.Validate_child == true && Validate_martial == true){
        setTimeout(function () {
            $('.address_occupation').show();
    }, 300)
    }
    checkForm();
}

async function validateNature() {
    this.nature = $('#natureopt').val();
    if (this.nature == '') {
        $('.nature_invalid').show();
        this.Validate_nature = false;
    }
    else {
        $('.nature_invalid').hide();
        this.Validate_nature = true;

         if(this.nature == 'NOT APPLICABLE'){
            $("#occupationDrop").empty();
            var select = document.getElementById('occupationDrop');
            var opt = document.createElement('option');
            opt.value = '';
            opt.innerHTML = '-Please Select-';
            select.appendChild(opt);

            var dropArr = ['HOUSEWIFE/HUSBAND', 'PENSIONER', 'RETIREE', 'STUDENT', 'UNEMPLOYED']

            dropArr.forEach(ele =>{
                var opt = document.createElement('option');
                opt.value = ele;
                opt.innerHTML = ele;
                select.appendChild(opt);
            })
         }
         else{
             const urlSearchParams = new URLSearchParams(window.location.search);
             const params = Object.fromEntries(urlSearchParams.entries());
             await GetOccDropDown(params.id);
         }
    }
    checkForm();
}

function validateOccupation() {
    this.occupation = $('#occupationDrop').val();
    if (this.occupation == '') {
        $('.occupation_invalid').show();
        this.Validate_occupation = false;
    }
    else {
        $('.occupation_invalid').hide();
        this.Validate_occupation = true;
    }
    checkForm();
}

async function checkForm() {
    if(this.Validate_occupation == true && this.Validate_nature == true){
        GetOccCode(this.occupation, this.nature);
    }

    //if(Validate_name && Validate_dob && Validate_dob && Validate_gender && Validate_martial && Validate_child && Validate_occupation && Validate_nature && Validate_occCode){
    //    completeForm = true;
    //    next_page();
    //}
    //else{
    //    completeForm = false;
    //}
}