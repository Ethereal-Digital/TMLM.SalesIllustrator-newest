var firstPrio = '';
var secondPrio = '';
var risk = '';
var name = "";
var gender = '';
var dob = "";
var age = '';
var martial = '';
var child = '';
var occupationCode = '';
var industryCode = '';

var loadingTable = false;
var page_count_store = 1;


var img_Src = "";
var main = false;
var amount = '';
var graphAmount = 0;
var premium_year = "";           //520, 825
var selected_year = false;
var selected_price = false;
var selected_data = [];
var year = 5;
var choice = 0; // 1 - legacy planning, 2- retirement, 3 - passive income, 4- diversification
var persona = 0;
var isMobile = false;
var previousChoice = 0;
var backtoslide_25 = 0;
var test, total, total2, total3;
var selectedTab = 'preferred-button-received';
var option_slide_29 = "High";
var lastpage = false;
var lastpageshown = false;
var occurence = 0;
var temp_occurence = 0;
var isTablet = false;
var premium_yearly, premium_advanced, gcp_receive_chart, gcp_accumulated_chart, overall_payout_graph, payout_for_death_chart, overall_gcp_boosted_graph;
var death_graph, death_boost_graph;
var checkAmount, checkDate, checkYear;
let resubmit = false;
var isMobileNew = false;
var isMassPremier = "";
var selectedAmt = 0;
var hide8payatinput = false;
var current_selection = '';
var overall_payout_receive = [];
var surrender_value = [];
var overall_payout_accumulated = [];
let hasLoadedFromPage2 = false;
var showGraphValue = false;
var overall_death_payout = [];
var cumulativeGcpWOInterest = [];
var coverage = 0;
var selected_coverage = false;
var yearsOld = 0;
var allowPremium = 0, suggestPremium = 0, monthlyPremium = 0, monthlyLTU = 0;
var annualTotalPremium = 0;


document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, false);

jQuery(document).bind("keyup keydown", function (e) {
    if (e.ctrlKey && e.keyCode == 80) {
        clickedPrint = true;
        return;
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

    if (isMobileNew == true) {
        $('.skip_button').hide();

        if (!lastpage) {
            $('.home_button').hide();
        }
    } else {
        checkPageCounter(page_count_store)
    }
})

var printing = false;
function checkPageCounter(page_counter) {


    jQuery(document).bind("keyup keydown", function (e) {
        if (e.ctrlKey && e.keyCode == 80) {
            printing = true;
        }
    });

    if (printing) {
        setTimeout(() => {
            printing = false;
        }, 300)
        return;
    }

    //uncomment this to hide 8 pay at user selection
    //this.hide8payatinput = true;

    $('.back_button').show();
    $('.next_button').show();
    $('.skip_button').hide();
    $('.home_button').hide();

    this.revertLongerBg();
    if (page_counter == 15 && lastpageshown) {
        lastpage = true;
    }
    if (lastpage) {
        $('.home_button').show();
        //$(`#break`).css('display', 'none');
        $(`#break2`).css('display', 'none');
    }
    else {
        $(`#break`).css('display', 'block');
        $(`#break2`).css('display', 'block');
        $('.home_button').hide();
    }

    if (page_counter != 1) {
        $(`#pagination`).css('display', 'block');
    }

    if (page_counter == 2) {

        $('#main_title').html("Let us know more about you. ")
        var text = 'Let us know more about you';
        $('#rt_enteredname').html(`Hi ${this.name.toUpperCase()},`);
        saveProcess(text);

        $('.skip_button').hide();
        $('.next_button').hide();

        if (this.yearsOld > 49) {
            $('#mass3').hide();
            $('#coverage_col3').hide();

            //document.getElementById("coverage_col1").classList.add('col-4');
            //document.getElementById("coverage_col2").classList.add('col-4');
            //document.getElementById("coverage_col4").classList.add('col-4');
        }
        else {
            $('#coverage_col3').show();
            $('#mass3').show();

            $("#mass1").removeAttr('class');
            $("#mass2").removeAttr('class');
            $("#mass3").removeAttr('class');
            document.getElementById("mass1").classList.add('col-4');
            document.getElementById("mass2").classList.add('col-4');
            document.getElementById("mass3").classList.add('col-4');

            $("#coverage_col1").removeAttr('class');
            $("#coverage_col2").removeAttr('class');
            $("#coverage_col3").removeAttr('class');
            $("#coverage_col4").removeAttr('class');
            document.getElementById("coverage_col1").classList.add('col-6');
            document.getElementById("coverage_col2").classList.add('col-6');
            document.getElementById("coverage_col3").classList.add('col-6');
            document.getElementById("coverage_col4").classList.add('col-6');
        }

        if (this.isMassPremier == 'premier') {
            $('.coverage_mass').hide();
            $('.coverage_premier').show();
            //var tempCol = document.getElementById("coverage_col1");
            //tempCol.className = '';
            //tempCol = document.getElementById("coverage_col2");
            //tempCol.className = '';
            //tempCol = document.getElementById("coverage_col4");
            //tempCol.className = '';

            document.getElementById("form_price1").innerHTML = "RM 1,000,000";
            document.getElementById("form_price2").innerHTML = "RM 2,000,000";
            document.getElementById("form_price3").innerHTML = "RM 3,000,000";
        }
        else {
            $('.coverage_mass').show();
            $('.coverage_premier').hide();

            document.getElementById("form_price1").innerHTML = "RM 500,000";
            document.getElementById("form_price2").innerHTML = "RM 1,000,000";
            document.getElementById("form_price3").innerHTML = "RM 1,500,000";
        }
    }
    else if (page_counter == 3) {
        saveProcess('RHB Essential Protect');
        $('.skip_button').hide();

        if (this.isMassPremier == 'mass') {
            $('#main_title').html("RHB Essential Protect")
        }
        else if (this.isMassPremier == 'mass') {
            $('#main_title').html("RHB Essential Protect Premier")
        }
        
        $('#sub_title').html("")
        $('#coverageName').html(`${this.name}'s benefits`)

        let amountName = getAmount(selectedAmt);
        var term = this.premium_year == 520 ? "5" : this.premium_year == 825 ? "8" : "10"
        let coverageName = getCoverageValue(coverage);

        if (coverage == 3 || coverage == 4) {
            coverageName = coverageName - this.age;
        }

        let planType = '';
        if (this.isMassPremier == 'premier') {
            planType = 'RHB Essential Protect Premier';
        }
        else {
            planType = 'RHB Essential Protect';
        }

        let genderNoun = '';
        if (this.gender == 'male') {
            genderNoun = 'his';
        }
        else {
            genderNoun = 'her';
        }


        if (coverage == 1 || coverage == 2) {
            $('.coverageText').html("iComprehensive Critical Illness Rider (Optional)");
            $('.coverageText2').html(`<b style="text-transform: uppercase;">${this.name}</b> purchases <b>${planType}</b> with protection coverage amount of <b>RM ${numberWithCommas(amountName)}</b> with payment term of <b>${term} years</b> and coverage term of <b>${coverageName} years</b> to cover against unexpected events during ${genderNoun} active working years.`);
            document.getElementById("coverageImg").src = sitename + "/assets/REP/medicalcare.png";
        }
        else if (coverage == 3 || coverage == 4) {
            $('.coverageText').html("Protect Boost Rider (Optional)");
            $('.coverageText2').html(`<b style="text-transform: uppercase;">${this.name}</b> purchases <b>${planType}</b> with protection coverage amount of <b>RM ${numberWithCommas(amountName)}</b> with payment term of <b>${term} years</b> and coverage term of <b>${coverageName} years</b> to preserve ${genderNoun} legacy and safeguard ${genderNoun} family future.`);
            document.getElementById("coverageImg").src = sitename + "/assets/REP/slide 30 love.png";
        }

        if (this.age <= 16) {
            if (this.gender == 'female') {
                document.getElementById("coverageProfile").src = sitename + "/assets/images/Girl icon.png";
            }
            else {
                document.getElementById("coverageProfile").src = sitename + "/assets/images/Boy icon.png";
            }
        }
        else if (this.age >= 60) {
            if (this.gender == 'female') {
                document.getElementById("coverageProfile").src = sitename + "/assets/images/Grandma icon.png";
            }
            else {
                document.getElementById("coverageProfile").src = sitename + "/assets/images/Grandpa icon.png";
            }
        }
        else {
            if (this.gender == 'female') {
                document.getElementById("coverageProfile").src = sitename + "/assets/images/Female icon.png";
            }
            else {
                document.getElementById("coverageProfile").src = sitename + "/assets/images/Male icon.png";
            }
        }
    }
    else if (page_counter == 4) {
        this.generatePremiumPaymentDonut();
        window.scrollTo(0, 0);

        if (this.main == false) {
            saveProcess('Overview of Your Plan');
            this.main = true;
        }
        

        if (coverage == 4) {
            $('.box_33').hide();
        }
        else {
            $('.box_33').show();
        }

        if (this.isMassPremier == 'premier') {
            $('.overview_title_caption').html(`RHB Essential Protect Premier`)
            $('#overview_Accidental').html("300%")
            $('.basic_sum_percent').html("20%")
            $('.basic_sum_percent2').html("8%")
            $('.loyalty_bonus').html("RM 100,000")
        }
        else {
            $('.overview_title_caption').html("RHB Essential Protect")
            $('#overview_Accidental').html("200%")
            $('.basic_sum_percent').html("10%")
            $('.basic_sum_percent2').html("4%")
            $('.loyalty_bonus').html("RM 50,000")
        }

        if (coverage == 1 || coverage == 2) {
            $('.optional_riders').html("Protect Boost")

            $('.overview_rider').html("iCOMPREHENSIVE CRITICAL ILLNESS RIDER")
            $('.overview_rider_text').html("Up to a prescribed percentage of Rider Sum Assured upon Life Assured diagnosed with listed Critical Illness")
            document.getElementById("overview_rider_img").src = sitename + "/assets/REP/medicalcare.png";
        }
        else if (coverage == 3 || coverage == 4) {
            $('.optional_riders').html("iComprehensive Critical Illness")

            $('.overview_rider').html("PROTECT BOOST RIDER")
            $('.overview_rider_text').html("Provides additional Death or TPD benefit")
            document.getElementById("overview_rider_img").src = sitename + "/assets/REP/immunesystem.png";
        }

        //overview of yout
        this.applyLongerBg();
        $('#main_title').html("Overview of Your Plan")
        $('#sub_title').html("")
        
        $('.next_button').hide();
        $('.back_button').show();

        $('.overview_actual_age').html(`<span>${this.yearsOld}</span> years old`);

        let coverageName = getCoverageValue(coverage);
        let tempAge = this.yearsOld;

        if (this.yearsOld == 1) {
            tempAge = tempAge + 1;
        }

        if (coverage == 3 || coverage == 4) {
            coverageName = coverageName - tempAge;
        }
        $('.premium_age_minus').html(`<span>${coverageName}<br>YEARS</span>`)
        
        $('.premium_payment_term').html(`${this.premium_year == 520 ? "5<br>YEARS" : this.premium_year == 825 ? "8<br>YEARS" : "10<br>YEARS"}`);

        //var BasicSum = this.calculateBasicPremium();
        //var formatBasicSum = numberWithCommas(parseFloat(removeComma(BasicSum)));
        var sum_Assured = getAmount(selectedAmt);
        var temp = numberWithCommas(sum_Assured);
        $('.basic_sum_assured').html(`${temp} <br> MYR`)
        //$('.basic_sum_premium').html(`${formatBasicSum} <br> MYR`)
        $('.basic_sum_premium2').html(`${this.annualTotalPremium}`)
        $('.totalCoverage').html(this.amount);

        $('.overview_gender').html(this.gender);

        if(this.age <= 16){
            if(this.gender == 'female'){
                $('.overview_img').attr('src', 'assets/images/Girl icon.png');
            }
            else{
                $('.overview_img').attr('src', 'assets/images/Boy icon.png');
            }
        }
        else if(this.age >= 60){
            if(this.gender == 'female'){
                $('.overview_img').attr('src', 'assets/images/Grandma icon.png');
            }
            else{
                $('.overview_img').attr('src', 'assets/images/Grandpa icon.png');
            }
        }
        else{
            if(this.gender == 'female'){
                $('.overview_img').attr('src', 'assets/images/Female icon.png');
            }
            else{
                $('.overview_img').attr('src', 'assets/images/Male icon.png');
            }
        }
        //this.getGuaranteedCashPayment();

    }
    else if (page_counter == 5) {
        window.scrollTo(0, 0);

        saveProcess('Total Premium Payment');
        $('#premium_years').html(this.year);
        $('#premium_paid').html(this.amount);
        this.applyLongerBg();
        $('.back_button').hide();
        this.backtoslide_25 = page_counter;
        this.graphAmount = removeComma(this.amount);


        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/rt100/overview_coin.png"> Total Premium Payment`)
        $('#sub_title').html("")
        this.generatePremiumPaymentDonut();
    }
    else if (page_counter == 6) {
        window.scrollTo(0, 0);
        $('.overall_gcp_boosted_graph_div').hide();
        saveProcess('Overall Protection Payout for Death');
        this.applyLongerBg();
        $('.back_button').hide();
        this.backtoslide_25 = page_counter;
        $('.High_all').addClass('green_button');
        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/rt100/overview_angelheart.png"> Overall Protection Payout for Death`)
        $('#sub_title').html("")

        if (this.isMassPremier == 'mass') {
            $('.sec33_font').html("Year 10 and above")
            $('.sec33_row').hide();
        }
        else {
            $('.sec33_font').html("Year 10 - 14")
            $('.sec33_row').show();
        }
        

        this.calculateMass1();
        //this.generateDeathGraph();
    }
    else if (page_counter == 7) {
        window.scrollTo(0, 0);

        saveProcess('Overall Protection Payout for TPD / Senior Disability');
        this.applyLongerBg();
        $('.back_button').hide();
        this.backtoslide_25 = page_counter;
        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/REP/oku.png"> Overall Protection Payout for TPD / Senior Disability`)
        $('#sub_title').html("")
    }
    else if (page_counter == 8) {
        window.scrollTo(0, 0);

        saveProcess('Additional Protection Payout for Accidental Death / TPD');
        this.applyLongerBg();
        $('.back_button').hide();
        this.backtoslide_25 = page_counter;

        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/rt100/overview_accident.png"> Additional Protection Payout for Accidental Death / TPD`)
        $('#sub_title').html("")


        if (this.isMassPremier == 'premier') {
            $('.accident_col_left').html("Due to accident of any causes other than while commuting in public conveyance and natural disaster")
            $('.accidental_row').show();
        }
        else if (this.isMassPremier == 'mass') {
            $('.accident_col_left').html("Due to accident of any causes other than while commuting in public conveyance")
            $('.accidental_row').hide();
        }
        
        
    }
    else if (page_counter == 9) {
        window.scrollTo(0, 0);

        saveProcess('Payout for Legal Spouse’s Accidental Death / TPD');
        this.applyLongerBg();
        $('.back_button').hide();
        this.backtoslide_25 = page_counter;
        var sum_Assured = getAmount(selectedAmt);

        let premium3v1 = sum_Assured * 0.2;
        let premium3v2 = sum_Assured * 0.1;

        if (parseInt(premium3v1) >= 500000) {
            premium3v1 = 500000;
        }

        if (parseInt(premium3v2) >= 500000) {
            premium3v2 = 500000;
        }

        let premium4v1 = sum_Assured * 0.08;
        let premium4v2 = sum_Assured * 0.04;

        if (parseInt(premium4v1) >= 100000) {
            premium4v1 = 100000;
        }

        if (parseInt(premium4v2) >= 50000) {
            premium4v2 = 50000;
        }

        let maxMass = sum_Assured * 0.1;
        let maxPremier = sum_Assured * 0.2;

        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/REP/accidentBlue.png"> Payout for Legal Spouse’s Accidental Death / TPD`)
        $('#sub_title').html("")

        if (this.isMassPremier == 'premier') {
            $('.spouse_percent').html("20%")
            $('.present_precent').html("8%")
            $('.basic_sum_premium3').html(`RM ${numberWithCommas(premium3v1)}`);
            $('.basic_sum_premium4').html(`RM ${numberWithCommas(premium4v1)}`);
            $('.basic_sum_premium5').html(`RM ${numberWithCommas(maxPremier)}`);
            $('.max_amt').html("RM 100,000")
        }
        else if (this.isMassPremier == 'mass') {
            $('.spouse_percent').html("10%")
            $('.present_precent').html("4%")
            $('.basic_sum_premium3').html(`RM ${numberWithCommas(premium3v2)}`)
            $('.basic_sum_premium4').html(`RM ${numberWithCommas(premium4v2)}`)
            $('.basic_sum_premium5').html(`RM ${numberWithCommas(maxMass)}`);
            $('.max_amt').html("RM 50,000")
        }
    }
    else if (page_counter == 10) {
        window.scrollTo(0, 0);

        saveProcess('Additional Payout for Lifestyle Reward');
        this.applyLongerBg();

        $('.back_button').hide();
        this.backtoslide_25 = page_counter;

        //this.changeTab('preferred-button-received');

        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/REP/lifestyle.png"> Additional Payout for Lifestyle Reward`)
        $('#enteredamount2').html(`RM&nbsp;${this.amount} `);
    }
    else if (page_counter == 11) {
        window.scrollTo(0, 0);

        saveProcess('Additional Payout for Loyalty Bonus');
        this.applyLongerBg();
        $('.back_button').hide();
        this.backtoslide_25 = page_counter;
        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/REP/gift.png"> Additional Payout for Loyalty Bonus`)
        $('#sub_title').html("")

        $('.section_29_footer').html();

        if (this.yearsOld <= 49) {
            $('.loyalty_age').html("70")
        }
        else if (this.yearsOld >= 50 && this.yearsOld <= 50) {
            $('.loyalty_age').html("80")
        }
        else if (this.yearsOld >= 60 && this.yearsOld <= 69) {
            $('.loyalty_age').html("90")
        }
    }
    else if (page_counter == 12) {
        window.scrollTo(0, 0);
        saveProcess('Auto Extension Option');
        this.applyLongerBg();
        $('.back_button').hide();
        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/REP/Overview Auto Extension Option.png"> Auto Extension Option`)
        $('#sub_title').html("")
        this.backtoslide_25 = page_counter;
    }
    else if (page_counter == 13) {
        window.scrollTo(0, 0);
        saveProcess('Protect Boost Rider');
        this.applyLongerBg();
        $('.back_button').hide();
        this.backtoslide_25 = page_counter;
        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/REP/immunesystem.png"> Protect Boost Rider`)
        $('#sub_title').html("")

        let coverageTerm = 0;
        if (coverage == 1) {
            coverageTerm = 10;
        }
        else if (coverage == 2) {
            coverageTerm = 15;
        }
        else {
            coverageTerm = 20;
        }

        let amount = getAmount(selectedAmt);

        $('.boostAssure').html(`RM ${numberWithCommas(amount)}`);
        $('.boostCover').html(`${coverageTerm} Years`);

        if (this.isMassPremier == 'mass') {
            this.generateProtectBoost();
        }
        else if (this.isMassPremier == 'premier') {
            this.generateProtectBoost2();
        }
        
    }
    else if (page_counter == 14) {
        window.scrollTo(0, 0);
        saveProcess('iComprehensive Critical Illness Rider');
        this.applyLongerBg();
        $('.back_button').hide();
        this.backtoslide_25 = page_counter;
        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/REP/medicalcare.png"> iComprehensive Critical Illness Rider`)
        $('#sub_title').html("")
    }
    else if (page_counter == 15) {
        window.scrollTo(0, 0);
        saveProcess('Brief Introduction to Optional Riders');
        this.applyLongerBg();
        $('.back_button').hide();
        this.backtoslide_25 = page_counter;
        $('#main_title').html(`<img class="mr-2 header_icon" src="${sitename}/assets/rt100/overview_chat.png"> Brief Introduction to Optional Riders`)
        $('#sub_title').html("")
        if (this.coverage == 1 || this.coverage == 2) {
            $('.rider_col1').html("WHAT IS <b>PROTECT BOOST RIDER</b>?")
            $('.rider_col2').html("It is an optional rider that provides additional Death & Total and Permanent Disability (TPD) benefit to <u>Life Assured</u>.")
        }
        else if (this.coverage == 3 || this.coverage == 4) {
            $('.rider_col1').html("WHAT IS <b>IS ICOMPREHENSIVE CRITICAL ILLNESS RIDER</b>?")
            $('.rider_col2').html("It is an optional rider that pays 50% of the Sum Assured upon <u>Life Assured</u> being diagnosed with any Critical Illness Condition under Early Stage.<br>For any Critical Illness Condition under Advanced Stage, 100 % of the Sum Assured will be paid.Additionally, 20 % of Sum Assured will be paid as Health<br>Recovery Benefit together with the first eligible claim under this rider.Also, 10 % of the Sum Assured will be payable if the Life Assured is diagnosed<br>with Angioplasty and other Invasive Treatments For Coronary Artery Disease.")
        }
        //this.getSurrenderReceive();
        this.lastpageshown = true;

        
    }
    else {
        return
    }
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
    //if (window.performance) {
    //    console.info("window.performance works fine on this browser");
    //}
    //console.info(performance.navigation.type);
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        $('.back_button').hide()
        $('.next_button').hide()
        $('.skip_button').hide()
        $('.home_button').hide()
        console.info("This page is reloaded");
        afterHomeV2();
        return;
    } else {
        //console.info("This page is not reloaded");
    }

    $(`#section_1`).css('display', 'block');
    $(`#pagination`).css('display', 'none');

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.type == null || params.type == undefined || params.type == '') {
        window.location.href = sitename + "error";
        return;
    }

    selectTypeFirstPage(params.type);


    if (params.page == 2 && hasLoadedFromPage2 == false) {
        hasLoadedFromPage2 = true;
        UpdatePurpose();
    }
    else {
        window.location.href = sitename + "error";
        return;
    }

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
        $('.pagination_button').css('top', '80px')
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

        $('.pagination_button').css('top', '80px');
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

        $('.pagination_button').css('top', '65px')
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
        $('.next_button').css('width', '130px');
        $('.next_button').css('height', '30px');
        $('.next_button').css('font-size', '12px');

        $('.back_button').css('width', '130px');
        $('.back_button').css('font-size', '12px');
        $('.back_button').css('height', '30px');

        $('.skip_button').css('width', '130px');
        $('.skip_button').css('height', '30px');
        $('.skip_button').css('font-size', '12px');

        $('.home_button').css('width', '130px');
        $('.home_button').css('height', '30px');
        $('.home_button').css('font-size', '12px');
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

            $('.pagination_button').css('top', '80px');
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

            $('.pagination_button').css('top', '65px')
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
            $('.next_button').css('width', '130px');
            $('.next_button').css('height', '30px');
            $('.next_button').css('font-size', '12px');

            $('.back_button').css('width', '130px');
            $('.back_button').css('font-size', '12px');
            $('.back_button').css('height', '30px');

            $('.skip_button').css('width', '130px');
            $('.skip_button').css('height', '30px');
            $('.skip_button').css('font-size', '12px');

            $('.home_button').css('width', '130px');
            $('.home_button').css('height', '30px');
            $('.home_button').css('font-size', '12px');
        }
    }


    if (isMobileNew == true) {
        $('.skip_button').hide();

        if (!lastpage) {
            $('.home_button').hide();
        }
    } else {
        checkPageCounter(page_count_store)
    }
})

function back_page() {

    if (!resubmit) {
        $('.home_button').hide();
        lastpage = false;
        lastpageshown = false;
    }
  
    if (page_count_store == 2) {
        afterHomeV2();
        return;
    }
    if (page_count_store != 1) {
        $(`#pagination`).css('display', 'block');
    }

    //if (page_count_store == 22) {
    //    if (this.current_selection != '') {
    //        saveProcess(this.tempSubTitle);
    //    }
    //}

    //if (page_count_store == 21) {
    //    if (this.current_selection != '') {
    //        saveProcess('What is your preference?');
    //        $('.next_button').hide();
    //        $('.grandchild').hide();
    //        $('.generation').hide();
    //        $('.incomesource').hide();

    //        $('.preference_selection').show();

    //        $('#main_title').html("What is your preference?");
    //        $('#sub_title').html("");

    //        this.current_selection = '';
    //        return;
    //    }
    //}

    $(`#section_${page_count_store}`).css('display', 'none');
    page_count_store--;

    if (page_count_store == 22) {
        if (selected_year && selected_price && selected_coverage)
            resubmit = true;
    }

    if (this.choice == 1) {
        page_count_store =
            this.persona == 1 && page_count_store == 21 ? 6 :
            this.persona == 2 && page_count_store == 21 ? 9 :
            this.persona == 3 && page_count_store == 21 ? 12 :
                    this.persona == 3 && page_count_store == 9 ? 3 :
                    this.persona == 2 && page_count_store == 6 ? 3 : 
                            page_count_store;
    }
    else {
        page_count_store = 
        this.choice == 2 && page_count_store == 12 ? 2 :
            this.choice == 2 && page_count_store == 21 ? 15 :
                this.choice == 3 && page_count_store == 15 ? 2 : page_count_store;
    }

    $(`#section_${page_count_store}`).css('display', 'block');
    checkPageCounter(page_count_store)
}

function next_page() {
    if (page_count_store != 1) {
        $(`#pagination`).css('display', 'block');
    }

    if (this.backtoslide_25 == 15) {
        this.lastpage = true;
        this.lastpageshown = true;
    }

    if (this.backtoslide_25 != 0) {
        page_count_store = 3;
        $(`#section_${this.backtoslide_25}`).css('display', 'none');

        this.backtoslide_25 = 0;
    }

    $(`#section_${page_count_store}`).css('display', 'none');
    page_count_store++;

    //if (this.choice == 1) {
    //    page_count_store = this.persona == 1 && page_count_store == 7 ? 22 :
    //        this.persona == 2 && page_count_store == 10 ? 22 :
    //            this.persona == 3 && page_count_store == 13 ? 22 : page_count_store;
    //}
    //else {
    //    page_count_store = this.choice == 2 && page_count_store == 16 ? 22 : page_count_store;
    //}

    $(`#section_${page_count_store}`).css('display', 'block');
    checkPageCounter(page_count_store)
}

function next(page_counter) {
    if (page_counter != 1) {
        $(`#pagination`).css('display', 'block');
    }

    //if (this.persona == 0) {
    //    page_counter = this.choice == 1 && page_counter == 6 ? 22 :
    //        this.choice == 2 && page_counter == 15 ? 22 :
    //            this.choice == 3 && page_counter == 21 ? 22 : page_counter;
    //}
    //else {
    //    page_counter = this.persona == 1 && page_counter == 6 ? 22 :
    //        this.persona == 2 && page_counter == 9 ? 22 :
    //            this.persona == 3 && page_counter == 12 ? 22 : page_counter;
    //}
    

    $(`#section_${page_count_store}`).css('display', 'none');
    $(`#section_${page_counter}`).css('display', 'block');
    page_count_store = page_counter;

    checkPageCounter(page_counter)
}

function skip() {
    $(`#section_${page_count_store}`).css('display', 'none');
    $(`#section_22`).css('display', 'block');
    page_count_store = 22;

    checkPageCounter(22)
}

function home() {
    /*saveProcess('Completed');*/
    afterHomeV3();
}

function afterHome() {
    $(`#section_${page_count_store}`).css('display', 'none');
    $(`#section_1`).css('display', 'block');
    page_count_store = 1;

    this.backtoslide_25 = 0;
    this.lastpage = false;
    this.lastpageshown = false;
    checkPageCounter(1);
    this.checkAmount = "";
    this.checkDate = "";
    this.name = "";
    this.dob = '';
    this.gender = null;
    selected_year = false;
    selected_price = false;
    resubmit = false;

    $('.next_button').hide();
    $('.grandchild').hide();
    $('.generation').hide();
    $('.incomesource').hide();

    $('.preference_selection').show();

    $('#main_title').html("What is your preference?");
    $('#sub_title').html("");

    this.current_selection = '';
    this.current_clicked = 26;

    for (i = 26; i <= 35; i++) {
        $(`.box_${i}>.box_animation`).html('');
        $(`.box_${i}`).addClass('overview_disable');
        $(`.box_${i}>.box_check`).html(``);
    }

    $(`.box_26>.box_animation`).html(`<div class="animating_click ping"></div>
                                               <img class="animating_finger move_upward" width="40" src="${sitename}/assets/rt100/tap.png">`);
    $(`.box_26`).removeClass('overview_disable');
}

function mobileClickOccurence(i, y) {

    if (this.temp_occurence == i) {
        this.occurence++;

        if (this.occurence == 2) {
            this.choice = i;
            next(y);
        }

        this.occurence = 0;
    } else {
        this.occurence = 1;
    }
    this.temp_occurence = i;
}

function applyLongerBg() {
    $('.top').css('height', "50%");
    $('.summary_1').css('position', 'absolute')
    $('.summary_1').css('top', '28%')
    $('.summary_1').css('transform', 'translateY(0px)')
}

function revertLongerBg() {
    $('.top').css('height', "30%");
    $('.summary_1').css('position', 'relative')
    $('.summary_1').css('top', '28%')
    $('.summary_1').css('transform', 'translateY(-80px)')
}

function preventNumberInput(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode >= 48 && keyCode <= 57) {
        e.preventDefault();

    } else {
        //(((key >= 65 && key <= 90) || key == 8))
        this.validateName(e);
    }
}

function numberMobile(e) {
    e.target.value = e.target.value.replace(/[-+()!@#$%^&*_=`~[{}:;'"<,>.?/0-9]/, '');
    this.validateName(e);
}

function removeComma(number1) {
    if (isNaN(number1)) {
        number1 = number1.replace(/\,/g, '');
    }

    //number1=parseInt(number1,10);
    return number1;
}

function validateName(event) {
    var temp = $('.rt_name').val();
    setTimeout(function () {
        if (temp.length >= 1)
            $('.information_2').show();
    }, 700)
}

function validateDate(date) {
    /*var age_datepicker = $('#rt_age').val(); //this.isMobile == true ? $('#rt_agemobile').val() : */
    var age_datepicker = date;
    if (age_datepicker.length > 10) {
        $('.invalid_date').show();
        $('.invalid_date').html('Invalid date');
        $('.old').addClass('hide');
        $('.kids').addClass('hide');
        $('.adult').addClass('hide');
        return;
    }
    else if (age_datepicker.length < 10) {
        $('.old').addClass('hide');
        $('.kids').addClass('hide');
        $('.adult').addClass('hide');
        return;
    }

    $('.invalid_date').hide();

    //max age 64(means 65 years old, 64 current age before bday), min age 14 days,         
    //if 65 then no selection 

    //if age >= 65 then no more

    //if age <= 14 days then no selection

    var birthday = new Date(age_datepicker)
    var today = new Date()
    var ageInMilliseconds = new Date(today - birthday)
    var years = ageInMilliseconds / (24 * 60 * 60 * 1000 * 365.25)
    var months = 12 * (years % 1)
    var days = Math.floor(30 * (months % 1));
    var temp = Math.floor(years) + ' years ' + Math.floor(months) + ' months ' + days + ' days';

    this.yearsOld = Math.ceil(years);

    if (Math.floor(years) > 69 || (Math.floor(years) < 1 && Math.floor(months) < 1 && days < 14)) {
        $('.invalid_date').show();
        $('.invalid_date').html('Age ranging from 14 days to 69 years old only');
        $('.old').addClass('hide');
        $('.kids').addClass('hide');
        $('.adult').addClass('hide');
        return;
    }

    $('.old').addClass('hide');
    $('.kids').addClass('hide');
    $('.adult').addClass('hide');
    var thisyear = new Date().getFullYear();
    this.age = parseInt(thisyear) - parseInt(age_datepicker.substring(0, 4))

    this.age = this.age + 1;

    $('.information_3').removeClass('slide-in-bottom');
    if (this.age <= 16) {
        $('.information_3').show();
        setTimeout(() => {
            $('.kids').show();
            $('.kids').removeClass('hide');
            $('.old').hide();
            $('.adult').hide();
        }, 80);
    }
    else if (this.age >= 60) {
        $('.information_3').show();
        setTimeout(() => {
            $('.kids').hide();
            $('.old').show();
            $('.old').removeClass('hide');
            $('.adult').hide();
        }, 80);
    }
    else {
        $('.information_3').show();
        setTimeout(() => {
            $('.kids').hide();
            $('.old').hide();
            $('.adult').show();
            $('.adult').removeClass('hide');
        }, 80);
    }
    $('.information_3').addClass('slide-in-bottom');
}

async function submitForm1(selectedGender, img_Src) {
    this.img_Src = sitename + img_Src;

    if (!resubmit) {
        this.gender = selectedGender;
        afterSubmitForm1();
        return;
    }

    if (this.name != $('.rt_name').val() || this.dob != $('#rt_age').val() || this.gender != selectedGender) {
        this.gender = selectedGender;
        CreateApiWithCallback(afterSubmitForm1);
        return;
    }

    this.gender = selectedGender;
    afterSubmitForm1();
    return;
}

function afterSubmitForm1() {
    this.name = $('.rt_name').val();
    this.dob = $('#rt_age').val();
    resubmit = false;

    //123 2000-12-20 male
    if (this.name == '' || this.dob == '' || this.dob == null || this.name == undefined || this.dob == undefined) {
        return;
    }

    next(23);
}

function submitChoice(choice, page) {
    this.choice = choice;
    if (this.previousChoice == this.choice) {
        next(page);
    }

    if (this.isMobile == true) {
        this.previousChoice = this.choice;
    }
    else
        next(page);
}

function submitPersona(persona, page) {
    this.persona = persona;
    
    next(page);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function selectTypeFirstPage(type) {
    this.isMassPremier = type;
}

function selectType(type) {
    this.isMassPremier = type;

    var opposite = type == 'mass' ? 'premier' : 'mass';

    $(`.type_${opposite}`).removeClass('green_button')
    $(`.type_${opposite}`).removeClass('font_white')
    $(`.type_${type}`).addClass('green_button')
    $(`.type_${type}`).addClass('font_white')

    this.fillAnnualValues();

    this.checkLatestSelection();

    this.checkSelectionMade();
}

function select5() {
    this.checkDate = this.premium_year;
    this.premium_year = 520;
    this.year = 5;
    this.selected_year = true;
    $('.premium_105').removeClass('green_button')
    $('.premium_105').removeClass('font_white')
    $('.premium_520').addClass('green_button')
    $('.premium_520').addClass('font_white')

    $('#mass1').show();
    $("#mass1").removeAttr('class');
    $("#mass2").removeAttr('class');
    $("#mass3").removeAttr('class');

    $('#coverage_col1').show();
    $("#coverage_col1").removeAttr('class');
    $("#coverage_col2").removeAttr('class');
    $("#coverage_col3").removeAttr('class');
    $("#coverage_col4").removeAttr('class');

    if (this.yearsOld > 49) {
        $('#mass1').addClass('col-6');
        $('#mass2').addClass('col-6');

        $('#coverage_col1').addClass('col-4');
        $('#coverage_col2').addClass('col-4');
        $('#coverage_col4').addClass('col-4');
    } else {
        $('#mass1').addClass('col-4');
        $('#mass2').addClass('col-4');
        $('#mass3').addClass('col-4');

        $('#coverage_col1').addClass('col-6');
        $('#coverage_col2').addClass('col-6');
        $('#coverage_col3').addClass('col-6');
        $('#coverage_col4').addClass('col-6');
    }

    this.checkLatestSelection();

    this.checkSelectionMade();
}

function select10() {
    this.checkDate = this.premium_year;
    this.premium_year = 105;
    this.year = 10;
    this.selected_year = true;
    $('.premium_105').addClass('green_button')
    $('.premium_105').addClass('font_white')
    $('.premium_520').removeClass('green_button')
    $('.premium_520').removeClass('font_white')

    $('#mass1').hide();
    $("#mass1").removeAttr('class');
    $("#mass2").removeAttr('class');
    $("#mass3").removeAttr('class');

    $('#coverage_col1').hide();
    $("#coverage_col1").removeAttr('class');
    $("#coverage_col2").removeAttr('class');
    $("#coverage_col3").removeAttr('class');
    $("#coverage_col4").removeAttr('class');

    if (this.yearsOld > 49) {
        $('#mass2').addClass('col-12');

        $('#coverage_col2').addClass('col-6');
        $('#coverage_col4').addClass('col-6');
    }
    else {
        $('#mass3').addClass('col-6');
        $('#mass2').addClass('col-6');

        $('#coverage_col2').addClass('col-4');
        $('#coverage_col3').addClass('col-4');
        $('#coverage_col4').addClass('col-4');
    }

    this.checkLatestSelection();

    this.checkSelectionMade();
}

function fillAnnualValues() {
    if (this.isMassPremier == 'mass' || this.isMassPremier == '') {

        $('.p1').html(`RM 15,000  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)
        $('.p2').html(`RM 20,000  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)
        $('.p3').html(`RM 25,000  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)

        if (this.year == 10) {
            $('.p1').html(`RM 7,500  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)
            $('.p2').html(`RM 10,000  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)
            $('.p3').html(`RM 12,500  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)
        }
    } else {
        $('.p1').html(`RM 30,000  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)
        $('.p2').html(`RM 50,000  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)
        $('.p3').html(`RM 100,000  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)

        if (this.year == 10) {
            $('.p1').html(`RM 15,000  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)
            $('.p2').html(`RM 25,000  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)
            $('.p3').html(`RM 50,000  <br> <span style=" font-weight: 400 !important;">Annual Premium </span>`)
        }
    }
}

function submitCoverage(amount) {
    this.checkYear = this.coverage;
    this.coverage = amount;
    this.selected_coverage = true;

    $('.premium_coverage').removeClass('green_button')
    $('.premium_coverage').removeClass('font_white')
    $(`.c${amount}`).addClass('green_button')
    $(`.c${amount}`).addClass('font_white')
    this.checkLatestSelection();
    this.checkSelectionMade();
}

function submitAmount2(amount) {
    this.checkAmount = this.amount;
    //this.amount = amount;
    this.selected_price = true;

    $('.premium_price').removeClass('green_button')
    $('.premium_price').removeClass('font_white')
    $(`.p${amount}`).addClass('green_button')
    $(`.p${amount}`).addClass('font_white')
    this.selectedAmt = amount;
    this.checkLatestSelection();
    this.checkSelectionMade();
}

function checkLatestSelection() {
    var checkAmt = $('.premium_price.green_button').html()

    if (checkAmt != undefined) {
        this.selected_price = true;
        $('.premium_price').removeClass('green_button')
        $('.premium_price').removeClass('font_white')
        $(`.p${this.selectedAmt}`).addClass('green_button')
        $(`.p${this.selectedAmt}`).addClass('font_white');


        checkAmt = checkAmt.substring(2, 10);
        checkAmt = removeComma(checkAmt);

        if (numberWithCommas(this.checkAmount) != checkAmt && this.checkDate != '')
            resubmit = true;

        this.amount = checkAmt;
        this.amount = numberWithCommas(this.amount);

        this.amount = this.amount.replace(/\s/g, '');
        this.checkAmount = checkAmt;
        this.checkSelectionMade();
    }
}

function checkSelectionMade() {
    if (this.selected_year == true && this.selected_price == true && this.isMassPremier != '')
        $('#getyourquote').removeClass('disabled');
}

async function submitForm2() {
    if (this.selected_year == false || this.selected_price == false || this.selected_coverage == false && this.isMassPremier == '')
        return;

    if (this.selectedAmt == 0)
        return;

    if (!resubmit) {
        this.checkAmount = this.amount;
        this.checkDate = this.premium_year;
        this.checkYear = this.coverage;
        updateApi();
        return;
    }

    if (this.checkAmount != numberWithCommas(this.amount) || this.checkDate != this.premium_year || this.checkYear != this.coverage) {
        this.checkAmount = this.amount;
        this.checkDate = this.premium_year;
        this.checkYear = this.coverage;
        resubmit = false;
        this.main = false;
        CreateApiWithCallback(updateApi);
        resetOverview();
        return;
    }


    this.checkAmount = this.amount;
    this.checkDate = this.premium_year;
    this.checkYear = this.coverage;
    updateApi();
}

var tempSubTitle = "";
function showPreferenceBox(display, subtitle) {

    var sub = subtitle.replaceAll('-', '');
    sub = sub.substring(1, sub.length - 1)
    tempSubTitle = sub;
    saveProcess(sub);

    $('.next_button').show();
    this.current_selection = display;
    $('.preference_selection').hide();
    $('.grandchild').hide();
    $('.generation').hide();
    $('.incomesource').hide();

    if (this.gender == 'female') {
        $('.preference_image_1').attr('src', `${sitename}/assets/images/Grandma icon.png`);
        $('.preference_image_4').attr('src', `${sitename}/assets/images/Female icon.png`);
        $('.gender_verb').html('her')
        $('.gender_verb_self').html('herself')
    } else {
        $('.preference_image_1').attr('src', `${sitename}/assets/images/Grandpa icon.png`);
        $('.preference_image_4').attr('src', `${sitename}/assets/images/Male icon.png`);
        $('.gender_verb').html('his');
        $('.gender_verb_self').html('himself')
    }

    $(`.${display}`).show();

    $('#main_title').html("RHB Treasure 100");
    $('#sub_title').html(subtitle);
    if (this.isMassPremier == 'premier')
        $('#main_title').html(`RHB Treasure 100 Premier`)

    setTimeout(() => {
        $('.selected_name').html(`${this.name.toUpperCase()}`);
    }, 100);

    if (this.gender == 'male')
        $('.second_income_img').attr('src', `${sitename}/assets/rt100/preference_4.png`)
    else
        $('.second_income_img').attr('src', `${sitename}/assets/rt100/preference_3.png`)
}

var current_clicked = 5;
function checkOverview(page) {

   //console.log("current: " + this.current_clicked + "page: " + page);
    if (this.current_clicked >= page) {

        //$(`.box_${page}`).removeClass('bounce-top');
        $(`.box_${this.current_clicked}`).removeClass('overview_disable');
        $(`.box_${page}>.box_animation`).html('');
        $(`.box_${page}>.box_check`).html(`<img width="30" class="overview_check" src="${sitename}/assets/rt100/check.png">`);

        if (coverage == 4) {
            if (current_clicked == 11) {
                this.current_clicked = this.current_clicked + 2;
                //$(`.box_${this.current_clicked}`).addClass('bounce-top');
                $(`.box_${this.current_clicked}>.box_animation`).html(`<div class="animating_click ping"></div>
                                               <img class="animating_finger move_upward" width="40" src="${sitename}/assets/rt100/tap.png">`);
                $(`.box_${this.current_clicked}`).removeClass('overview_disable');
            }
            else if (current_clicked == 13) {
                if (coverage == 1 || coverage == 2) {
                    page = page + 1; //go to section 35
                }

                this.current_clicked = this.current_clicked + 2;
                //$(`.box_${this.current_clicked}`).addClass('bounce-top');
                $(`.box_${this.current_clicked}>.box_animation`).html(`<div class="animating_click ping"></div>
                                               <img class="animating_finger move_upward" width="40" src="${sitename}/assets/rt100/tap.png">`);
                $(`.box_${this.current_clicked}`).removeClass('overview_disable');
            }
            else if (this.current_clicked == page) {
                this.current_clicked = this.current_clicked + 1;
                //$(`.box_${this.current_clicked}`).addClass('bounce-top');
                $(`.box_${this.current_clicked}>.box_animation`).html(`<div class="animating_click ping"></div>
                                               <img class="animating_finger move_upward" width="40" src="${sitename}/assets/rt100/tap.png">`);
                $(`.box_${this.current_clicked}`).removeClass('overview_disable');
            }
        }
        else if (page == 13) {
            if (coverage == 1 || coverage == 2) {
                page = page + 1;
            }

            this.current_clicked = this.current_clicked + 2;
            //$(`.box_${this.current_clicked}`).addClass('bounce-top');
            $(`.box_${this.current_clicked}>.box_animation`).html(`<div class="animating_click ping"></div>
                                               <img class="animating_finger move_upward" width="40" src="${sitename}/assets/rt100/tap.png">`);
            $(`.box_${this.current_clicked}`).removeClass('overview_disable');
        }
        else if (current_clicked == 15) {
            $(`.box_${this.current_clicked}>.box_animation`).html(``);
            $(`.box_${this.current_clicked}`).removeClass('overview_disable');
        }
        else if (this.current_clicked == page) {
            this.current_clicked = this.current_clicked + 1;
            //$(`.box_${this.current_clicked}`).addClass('bounce-top');
            $(`.box_${this.current_clicked}>.box_animation`).html(`<div class="animating_click ping"></div>
                                               <img class="animating_finger move_upward" width="40" src="${sitename}/assets/rt100/tap.png">`);
            $(`.box_${this.current_clicked}`).removeClass('overview_disable');
        }
        this.next(page);
    }

    //last page need to add 1
}

function resetOverview() {
    for (let i = 2; i <= 15; i++) {
        $(`.box_${i}`).addClass('overview_disable');
        $(`.box_${i}>.box_animation`).html('');
        $(`.box_${i}>.box_check`).html(``);
    }

    $(`.box_5>.box_animation`).html(`<div class="animating_click ping"></div>
                                               <img class="animating_finger move_upward" width="40" src="${sitename}/assets/rt100/tap.png">`);
    $(`.box_5`).removeClass('overview_disable');

    this.current_clicked = 5;
}   

function changeTab(button) {
    $(`.preferred-button`).removeClass('green_button');
    $(`.${button}`).addClass('green_button');
    this.selectedTab = button;
    $('.gcp_right_section').hide();
    $(`.gcp_${button}`).show();

    if (button == "preferred-button-accumulated")
        this.generateGcpAccumulatedChart();
    else
        this.generateGcpReceiveChart();
}

// API

function afterHomeV2() {
    showLoader();
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var url = `${sitename}SalesIllustrator?id=${params.id}`;
    window.location.replace(url);
}

function afterHomeV3() {
    showLoader();
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var url = `${sitename}SalesIllustrator/GenerateNewToken?id=${params.id}`;

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: "GET",
        success: function (data) {
            window.location.replace(data);
        },
        error: function (data) {
            hideloader();
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });
}

function UpdatePurpose() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var url = sitename + 'RhbEssentialProtect/UpdatePurpose';

    showLoader();

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: "GET",
        success: function (data) {
            hideloader();
            next(2);
        },
        error: function (data) {
            hideloader();
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });

    hideloader();
    next(2);
}

function CreateApiWithCallback(callBackFunction) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var url = sitename + 'RhbEssentialProtect/Create/' + params.id;

    //callBackFunction();

    showLoader();

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: "GET",
        success: function (data) {
            hideloader();
            callBackFunction();
        },
        error: function (data) {
            hideloader();
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });
}

function saveProcess(process_save) {
    var url = sitename + 'RhbEssentialProtect/UpdateProcess';

    var req = {
        process: process_save,
    };

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
        },
        error: function (data) {
            failApiResponse(data);
        }
    });
}

function updateApi() {
    showLoader();

    let categoryName1 = getCategoryName(firstPrio);
    let categoryName2 = getCategoryName(secondPrio);
    let personaName = getPersonaName(persona);
    let coverageName = getCoverageName(coverage);
    let amountName = getAmount(selectedAmt);

    var term = this.premium_year == 520 ? "5" : this.premium_year == 825 ? "8" : "10"

    var req = {
        name: name,
        category: categoryName1,
        category2: categoryName2,
        risk: risk,
        age: age,
        gender: gender,
        martial: martial,
        child: child,
        occupation: occupationCode,
        industry: industryCode,
        desiredPlan: isMassPremier,
        persona: personaName,
        premiumPaymentTerm: parseFloat(term.replaceAll(',', '')),
        coverageTerm: coverageName,
        basicSum : amountName
    };

    /*parseFloat(amount.replaceAll(',', ''))*/

    var url = sitename + 'RhbEssentialProtect/Update';

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
            var user = JSON.parse(data);
            getUserDetails(user.Name, user.DateOfBirth, user.Gender);
            next(3);
            hideloader();
        },
        error: function (data) {
            hideloader();
            failApiResponse(data);
        }
    });
}

function getUserDetails(name, date, gen){
    this.name = name;
    this.gender = gen;

    var birthday = new Date(date);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    this.age = Math.abs(ageDate.getUTCFullYear() - 1970) + 1;
    this.yearsOld = Math.abs(ageDate.getUTCFullYear() - 1970) + 1;
}


// CHART FUNCTION
var hasGenerated1 = false;
function premiumPayable() {

    if (hasGenerated1 == true)
        premium_yearly.destroy();

    var selected_year_data = this.year == 5 ? this.basic_ap_5 : this.year == 8 ? this.basic_ap_8 : this.basic_ap_10;
    var selected_data = selected_year_data.filter(x => removeComma(x.annual_premium_selection) == removeComma(this.amount));
    this.total = removeComma(selected_data[0].total_premium_without_apo);

    const data = {
        labels: ['Payable Yearly'],
        datasets: [{
            label: 'Payable Yearly',
            data: [this.total],
            backgroundColor: [
                "#FFDE59"
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false
                },
                hover: {
                    mode: null
                },
                labels: {
                    render: () => { }
                }
            }
        }
    };

    premium_yearly = new Chart(
        document.getElementById('premium_yearly'),
        config
    );

    setTimeout(() => {
        var temp = numberWithCommas(Math.round(this.total));
        $('#enteredGraph').html(`RM ${temp}`);
    }, 100);

    hasGenerated1 = true;
}

var hasGenerated2 = false;
function advancePremiumPayable() {

    if (hasGenerated2 == true)
        premium_advanced.destroy();

    var selected_year_data = this.year == 5 ? this.basic_ap_5 : this.year == 8 ? this.basic_ap_8 : this.basic_ap_10;
    var selected_data = selected_year_data.filter(x => removeComma(x.annual_premium_selection) == removeComma(this.amount));
    var temp2 = removeComma(selected_data[0].total_premium_with_apo);
    var temp3 = removeComma(selected_data[0].total_premium_without_apo) - removeComma(selected_data[0].total_premium_with_apo);

    this.total2 = temp2;
    this.total3 = temp3;

    const data = {
        labels: [
            '',
            'APO Discount\nRM ' + numberWithCommas(this.total3)
        ],
        datasets: [{
            label: 'Premium APO',
            data: [temp2, temp3],
            backgroundColor: [
                "#FFDE59",
                "#494F56"
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: false,
            scales: {
                y: [{
                    afterFit: function (scaleInstance) {
                        scaleInstance.width = 100; // sets the width to 100px
                    }
                }]
            },
            tooltips: {
                callbacks: {
                }
            },
            layout: {
                padding: 15
            },
            plugins: {
                hover: {
                    mode: null
                },
                tooltip: {
                    enabled: false
                },
                legend: {
                    reverse: true,
                    display: false
                },
                labels: {
                    render: (args) => {
                        return args.label;
                    },
                    position: 'outside',
                    textMargin: 6,
                    fontSize: 9
                }
            }
        }
    };


    premium_advanced = new Chart(
        document.getElementById('premium_advanced'),
        config
    );

    var temp = numberWithCommas(Math.round(this.total2));
    setTimeout(() => {
        $('#enteredGraph2').html(`RM ${temp}`);
    }, 100);

    hasGenerated2 = true;
}

function renameKey(obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
}

function getAmount(id) {
    if (this.isMassPremier == 'premier') {
        if (id == 1)
            return "1000000";
        else if (id == 2)
            return "2000000";
        else if (id == 3)
            return "3000000";
    }
    else if (this.isMassPremier == 'mass') {
        if (id == 1)
            return "500000";
        else if (id == 2)
            return "1000000";
        else if (id == 3)
            return "1500000";
    }
}

function getCoverageName(id) {
    if (id == 1)
        return "15 years";
    else if (id == 2)
        return "20 years";
    else if (id == 3)
        return "Up to Age 70";
    else if (id == 4)
        return "Up to Age 100";
}

function getCoverageNameV2(id) {
    if (id == 1)
        return "15 <br>YEARS";
    else if (id == 2)
        return "20 <br>YEARS";
    else if (id == 3)
        return 70 - this.yearsOld + "<br>YEARS";
    else if (id == 4)
        return 100 - this.yearsOld + "<br>YEARS";
}

function getCoverageValue(id) {
    if (id == 1)
        return 15;
    else if (id == 2)
        return 20;
    else if (id == 3)
        return 70;
    else
        return 100;
}

function getPersonaName(id) {
    if (id == 1)
        return "Young Family";
    else if (id == 2)
        return "Singles";
    else if (id == 3)
        return "Businessman";
    else 
        return "";
}

function getCategoryName(id) {
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

function getPremiumYear() {
    return this.premium_year == 520 ? "5 pay" : this.premium_year == 825 ? "8 pay" : "10 pay";
}

function getGuaranteedCashPayment() {
    var gcp = this.getOverallGcpDeclaredUpToDateFormula(this.year, this.isMassPremier, removeComma(this.amount));
    var accu_gcp = this.getAccumulatedGcpDeclared(gcp);
    var value = accu_gcp[100 - (this.age + 1)];
    value = numberWithCommas(value);
    $('#guaranteed_cash_payment').html(`RM ${value}`);
}

function generatePremiumPaymentDonut() {
    var type = this.isMassPremier;
    var gender = this.gender;
    var age = this.age - 1;
    var paymentterm = this.year;
    var coverage = getCoverageValue(this.coverage)
    var sumassured = getAmount(selectedAmt);
    var data = [];
    var lsd = this.getLsdPercentage(sumassured, type);

    if (coverage == 70 || coverage == 100)
        coverage = coverage - this.age;

    //console.log(type, gender, age, paymentterm, coverage, sumassured)

    for (var i = 1; i <= coverage; i++) {
        
        for (var j = 1; j <= monthly; j++) {

            var allorate = i <= 11 ? (this.year == 5 ? this.allocation_rate.data.filter(x => x.allocation == i)[0].five_pay : this.allocation_rate.data.filter(x => x.allocation == i)[0].ten_pay) / 100 : 0;
            var basiccoi = (((gender == 'male' ? this.death_coi.data.filter(x => parseInt(x.age) == (age + i))[0].male : this.death_coi.data.filter(x => parseInt(x.age) == (age + i))[0].female) *
                (1 - lsd)) +
                ((gender == 'male' ? this.tpd_coi.data.filter(x => parseInt(x.age) == (age + i))[0].male : this.tpd_coi.data.filter(x => parseInt(x.age) == (age + i))[0].female) *
                    (1 - lsd))) / 1000;
            var coirate = basiccoi * ((sumassured - (data.length == 0 ? 0 : data[data.length - 1].av)) / 12);
            var av = oneplusfgr * ((data.length == 0 ? 0 : data[data.length - 1].av) + ((8.5 * (-1)) + 0 + (coirate * (-1))));
            var perRM1 = oneplusfgr * ((1 * allorate) + (((basiccoi / 12 + 1) * (data.length == 0 ? 0 : data[data.length - 1].perRM1))));
           
            data.push({
                "year": i,
                "month": j,
                "lifeassuredage": age + i,
                "allocationrate": allorate,
                "policyfee": 8.5,
                "basicCoiRate": basiccoi,
                "coiRate": coirate,
                "av": av,
                "perRM1": perRM1,
                "modalPremium": (-(av) * (1 + 0.05)) / perRM1
            });

            //$('#premium_calculation_table').append(`
            //    <tr>
            //        <td>${i}</td>
            //        <td>${j}</td>
            //        <td>${age + i}</td>
            //        <td>${data[data.length - 1].allocationrate}</td>
            //        <td>${data[data.length - 1].policyfee}</td>
            //        <td>${data[data.length - 1].basicCoiRate.toFixed(6)}</td>
            //        <td>${data[data.length - 1].coiRate.toFixed(6)}</td>
            //        <td>${data[data.length - 1].av.toFixed(6)}</td>
            //        <td>${data[data.length - 1].perRM1.toFixed(6)}</td>
            //        <td>${Math.ceil(data[data.length - 1].modalPremium)}</td>
            //    </tr>
            //`);
        }
    }
    //generate graph

    if (hasGenerated1 == true)
        premium_yearly.destroy();

    var allowable_premium = Math.floor((parseInt(sumassured) / getFactor(age+1)) / 12);
    var suggested_premium = Math.ceil(data[data.length - 1].modalPremium);

    var monthly_premium = 0;
    if (allowable_premium < suggested_premium)
        monthly_premium = allowable_premium
    else
        monthly_premium = suggested_premium;

    if (monthly_premium < (2400 / 12))
        monthly_premium = 200;

    var monthly_ltu = 0;
    if (suggested_premium > allowable_premium) {
        monthly_ltu = suggested_premium - allowable_premium;

        if (monthly_ltu < (240 / 12))
            monthly_ltu = 200;
    } else {
        monthly_ltu = 0;
    }

    console.log(allowable_premium, suggested_premium, monthly_premium, monthly_ltu)

    $('#basic_premium_value').html(`RM ${numberWithCommas(monthly_premium * 12)}`)
    $('#ltu_value').html(`RM ${numberWithCommas(monthly_ltu * 12)}`)
    $('#annual_total_value').html(`RM ${numberWithCommas((monthly_premium * 12) + (monthly_ltu * 12))}`)
    this.totalAnnPremiumCalculated = numberWithCommas((monthly_premium * 12) + (monthly_ltu * 12));
    this.annualTotalPremium = numberWithCommas((monthly_premium * 12) + (monthly_ltu * 12));
    //$('.basic_sum_premium').html(`${numberWithCommas(monthly_premium * 12)} <br> MYR`)
    $('.basic_sum_premium').html(`${this.totalAnnPremiumCalculated} <br> MYR`)

    //GRAPH VALUES
    var total_annual_premium = ((monthly_premium * 12) + (monthly_ltu * 12)) * paymentterm;
    //var apo_premium = ((Math.ceil(data[data.length - 1].modalPremium) * 12) * (1 - (1.03 ** (-(paymentterm))))) * (34.45868036);
    //apo_premium = (Math.ceil(apo_premium * 20) / 20).toFixed(2);
    var annualprem = (monthly_premium * 12) + (monthly_ltu * 12)
    var apo_premium = Math.ceil((annualprem * (1 - (1.03 ** (-(paymentterm))))) * (34.45868036));
    var discount = Math.round(total_annual_premium - apo_premium);


    const payable_yearly_data = {
        labels: ['Payable Yearly'],
        datasets: [{
            label: 'Payable Yearly',
            data: [total_annual_premium],
            backgroundColor: [
                "#FFDE59"
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: payable_yearly_data,
        options: {
            responsive: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false
                },
                hover: {
                    mode: null
                },
                labels: {
                    render: () => { }
                }
            }
        }
    };

    premium_yearly = new Chart(
        document.getElementById('premium_yearly'),
        config
    );

    setTimeout(() => {
        var temp = numberWithCommas(Math.round(total_annual_premium));
        $('#enteredGraph').html(`RM ${temp}`);
    }, 100);

    if (hasGenerated2 == true)
        premium_advanced.destroy();

    const apo_premium_data = {
        labels: [
            '',
            'APO Discount\nRM ' + numberWithCommas(discount)
        ],
        datasets: [{
            label: 'Premium APO',
            data: [apo_premium, discount],
            backgroundColor: [
                "#FFDE59",
                "#494F56"
            ],
            hoverOffset: 4
        }]
    };

    const config2 = {
        type: 'doughnut',
        data: apo_premium_data,
        options: {
            responsive: false,
            scales: {
                y: [{
                    afterFit: function (scaleInstance) {
                        scaleInstance.width = 100; // sets the width to 100px
                    }
                }]
            },
            tooltips: {
                callbacks: {
                }
            },
            layout: {
                padding: 15
            },
            plugins: {
                hover: {
                    mode: null
                },
                tooltip: {
                    enabled: false
                },
                legend: {
                    reverse: true,
                    display: false
                },
                labels: {
                    render: (args) => {
                        return args.label;
                    },
                    position: 'outside',
                    textMargin: 6,
                    fontSize: 9
                }
            }
        }
    };


    premium_advanced = new Chart(
        document.getElementById('premium_advanced'),
        config2
    );

    var temp2 = numberWithCommas(Math.round(apo_premium));
    setTimeout(() => {
        $('#enteredGraph2').html(`RM ${temp2}`);
    }, 100);

    hasGenerated1 = true;
    hasGenerated2 = true;

    //$('#basic_premium_value').html(`RM ${numberWithCommas(Math.floor(basicannualpremiumvalue) * 12)}`)
    //$('#ltu_value').html(`RM ${numberWithCommas(calculateLTU(Math.round(tempp)) * 12)}`)
    //$('#annual_total_value').html(`RM ${numberWithCommas((Math.floor(basicannualpremiumvalue) * 12) + (calculateLTU(Math.round(tempp)) * 12))}`)
    

    //if (basicannualpremiumvalue > data[data.length - 1].modalPremium) {
    //    $('#basic_premium_value').html(`RM ${numberWithCommas((Math.ceil(data[data.length - 1].modalPremium) * 12))}`)
    //    $('.basic_sum_premium').html(`${numberWithCommas((Math.ceil(data[data.length - 1].modalPremium) * 12))} <br> MYR`)
    //    $('#annual_total_value').html(`RM ${numberWithCommas((Math.floor((Math.ceil(data[data.length - 1].modalPremium))) * 12) + (calculateLTU(Math.round(tempp)) * 12))}`)
    //    this.annualTotalPremium = numberWithCommas((Math.floor((Math.ceil(data[data.length - 1].modalPremium))) * 12) + (calculateLTU(Math.round(tempp)) * 12));
    //}
}

function getLsdPercentage(sum, type) {
    var range = (sum >= 0 && sum <= 849999) ? this.lsd.data.filter(x => x.sum_assured == 0) :
        (sum >= 850000 && sum <= 1499999) ? this.lsd.data.filter(x => x.sum_assured == 850000) :
            (sum >= 1500000 && sum <= 2499999) ? this.lsd.data.filter(x => x.sum_assured == 1500000) :
                this.lsd.data.filter(x => x.sum_assured == 2500000);

    return type == 'mass' ? range[0].mass : range[0].premier;
}

function calculateBasicPremium() {
    var basic = monthly * this.monthlyPremium;
    basic = basic.toFixed(2);
    return numberWithCommas(basic);
}

function calculateLTU(modalPremium) {
    var sum = getAmount(selectedAmt);
    var factor = getFactor(this.age + 1);

    var allow = sum / factor;
    allow = allow / premium_mode.month.col2;

    var monthly = Math.max(Math.min(allow, modalPremium), (2400 / modalPremium));

    this.allowPremium = allow;
    this.modalPremium = modalPremium;
    this.monthlyPremium = monthly;

    if (modalPremium > monthly) {
        let end = Math.max((modalPremium - Math.floor(monthly)), (240 / premium_mode.month.col2));
        return Math.round(end);
    }
    else {
        return 0;
    }
}

function getFactor(age) {
    if (age >= 1 && age <= 16) {
        return 60;
    }
    else if (age >= 17 && age <= 25) {
        return 55;
    }
    else if (age >= 26 && age <= 35) {
        return 50;
    }
    else if (age >= 36 && age <= 45) {
        return 35;
    }
    else if (age >= 46 && age <= 55) {
        return 25;
    }
    else if (age >= 56) {
        return 15;
    }
}

function oddNum(num) {
    if (parseInt(num) % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

function calculateMass1() {
    var amount = getAmount(selectedAmt);
    let temp = amount * (1 + 0.05);
    temp = temp.toFixed(0);
    $('.massValue').html(`RM ${numberWithCommas(getAmount(selectedAmt))}`)

    let temp2 = amount * (1 + 0.1);
    temp2 = temp2.toFixed(0);
    $('.massValue2').html(`RM ${numberWithCommas(temp)}`)

    if (this.isMassPremier == 'mass') {
        $('.massValue3').html(`RM ${numberWithCommas(temp2)}`)
    }
    else if (this.isMassPremier == 'premier'){
        let temp3 = amount * (1 + 0.15);
        temp3 = temp3.toFixed(0);
        $('.massValue3').html(`RM ${numberWithCommas(temp2)}`)

        let temp4 = amount * (1 + 0.2);
        temp4 = temp4.toFixed(0);
        $('.massValue4').html(`RM ${numberWithCommas(temp3)}`)
        $('.massValue5').html(`RM ${numberWithCommas(temp4)}`)
    }
}

function modulo(num) {
    var temp = num % 200000
    if (temp == 0) {
        return true;
    }
    else {
        return false;
    }
}

var protectBoostGen = false;
function generateProtectBoost() {
    if (protectBoostGen) {
        death_boost_graph.destroy();
        death_graph.destroy();
    }

    var BasicSum = [], Rewards = [], Boost = [], Age = [];
    var amount = getAmount(selectedAmt);

    var Life1 = 0;
    var Life2 = amount * 0.05;
    var Life3 = amount * 0.1;

    let coverageName = getCoverageValue(coverage);
    let tempAge = this.yearsOld + 1;
    if (coverage == 3 || coverage == 4) {
        coverageName = coverageName - tempAge; //coverage term
    }
    
    var maxAxes2 = (amount * 1.1) + parseInt(amount);
    let mod2 = modulo(maxAxes2);
    if (mod2) {
        maxAxes2 = maxAxes2 + 200000;
    }
    else {
        maxAxes2 = Math.round(maxAxes2 / 1000000) * 1000000

        let mod3 = modulo(maxAxes2);
        if (mod3) {
            maxAxes2 = maxAxes2 + 200000;
        }
        else {
            maxAxes2 = maxAxes2 + 100000;
        }
    }

    let coverageTerm;
    coverageTerm = coverageName - 5;
    if (coverageTerm >= 20) {
        coverageTerm = 20;
    }

    for (let i = 1; i <= coverageTerm; i++) {
        Boost.push(amount);
    }

    var tempCount = 1;
    for (let i = 1; i <= coverageName; i++) {
        BasicSum.push(amount);
        Age.push(tempCount);

        if (tempCount <= 4) {
            Rewards.push(Life1);
            tempCount++;
        }
        else if (tempCount >= 5 && tempCount <= 9) {
            Rewards.push(Life2);
            tempCount++;
        }
        else if (tempCount >= 10) {
            Rewards.push(Life3);
            tempCount++;
        }
    }

    const config = {
        type: 'bar',
        data: {
            labels: Age,
            datasets: [{
                label: 'Basic Sum Assured',
                data: BasicSum,
                backgroundColor: '#D1D713',
                borderWidth: 0.5,
                borderColor: '#767171',
                barPercentage: 1.0,
                categoryPercentage: 1.0
            },
                {
                    label: 'Lifestyle Reward',
                    data: Rewards,
                    backgroundColor: '#ED7D31',
                    borderWidth: 0.5,
                    borderColor: '#767171',
                    barPercentage: 1.0,
                    categoryPercentage: 1.0
                }
            ]
        },
        options: {
            plugins: {
                labels: {
                    render: () => { }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: {
                    stacked: true,
                },
                x2: {
                    labels: ['Policy Year']
                },
                yAxes: {
                    stacked: true,
                    beginAtZero: false,
                    min: 400000,
                    max: maxAxes2,
                    ticks: {
                        stepSize: 200000
                    }
                }
            }
        }
    };

    death_graph = new Chart(
        document.getElementById('Death_No_Boost'),
        config
    );


    const config2 = {
        type: 'bar',
        data: {
            labels: Age,
            datasets: [{
                label: 'Basic Sum Assured',
                data: BasicSum,
                backgroundColor: '#D1D713',
                borderWidth: 0.5,
                borderColor: '#767171',
                barPercentage: 1.0,
                categoryPercentage: 1.0
            },
            {
                label: 'Protect Boost Rider',
                data: Boost,
                backgroundColor: '#FFDE59',
                borderWidth: 0.5,
                borderColor: '#767171',
                barPercentage: 1.0,
                categoryPercentage: 1.0
             },
             {
                label: 'Lifestyle Reward',
                data: Rewards,
                backgroundColor: '#ED7D31',
                borderWidth: 0.5,
                borderColor: '#767171',
                barPercentage: 1.0,
                categoryPercentage: 1.0
            }
            ]
        },
        options: {
            plugins: {
                labels: {
                    render: () => { }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: {
                    stacked: true,
                },
                x2: {
                    labels: ['Policy Year']
                },
                yAxes: {
                    stacked: true,
                    beginAtZero: false,
                    min: 400000,
                    max: maxAxes2,
                    ticks: {
                        stepSize: 200000
                    }
                }
            }
        }
    };

    death_boost_graph = new Chart(
        document.getElementById('Death_Boost'),
        config2
    );

    protectBoostGen = true;
}

var protectBoostGen2 = false;
function generateProtectBoost2() {
    if (protectBoostGen2) {
        death_boost_graph.destroy();
        death_graph.destroy();
    }

    var BasicSum = [], Rewards = [], Boost = [], Age = [];
    var amount = getAmount(selectedAmt);

    var Life1 = 0;
    var Life2 = amount * 0.05;
    var Life3 = amount * 0.1;
    var Life4 = amount * 0.15;
    var Life5 = amount * 0.2;

    let coverageName = getCoverageValue(coverage);
    let tempAge = this.yearsOld;

    if (this.yearsOld == 1) {
        tempAge = tempAge + 1;
    }

    if (coverage == 3 || coverage == 4) {
        coverageName = coverageName - tempAge; //coverage term
    }    

    var maxAxes2 = (amount * 1.2) + parseInt(amount);
    let mod2 = modulo(maxAxes2);
    if (mod2) {
        maxAxes2 = maxAxes2 + 200000;
    }
    else {
        maxAxes2 = Math.round(maxAxes2 / 1000000) * 1000000

        let mod3 = modulo(maxAxes2);
        if (mod3) {
            maxAxes2 = maxAxes2 + 200000;
        }
        else {
            maxAxes2 = maxAxes2 + 100000;
        }
    }

    let coverageTerm;
    coverageTerm = coverageName - 5;
    if (coverageTerm >= 20) {
        coverageTerm = 20;
    }
    //if (coverage == 1) {
    //    coverageTerm = 10;
    //}
    //else if (coverage == 2) {
    //    coverageTerm = 15;
    //}
    //else {
    //    coverageTerm = 20;
    //}

    for (let i = 1; i <= coverageTerm; i++) {
        Boost.push(amount);
    }

    var tempCount = 1;
    for (let i = 1; i <= coverageName; i++) {
        BasicSum.push(amount);
        Age.push(tempCount);

        if (tempCount <= 4) {
            Rewards.push(Life1);
            tempCount++;
        }
        else if (tempCount >= 5 && tempCount <= 9) {
            Rewards.push(Life2);
            tempCount++;
        }
        else if (tempCount >= 10 && tempCount <= 14) {
            Rewards.push(Life3);
            tempCount++;
        }
        else if (tempCount >= 15 && tempCount <= 19) {
            Rewards.push(Life4);
            tempCount++;
        }
        else {
            Rewards.push(Life5);
            tempCount++;
        }
    }

    const config = {
        type: 'bar',
        data: {
            labels: Age,
            datasets: [{
                label: 'Basic Sum Assured',
                data: BasicSum,
                backgroundColor: '#D1D713',
                borderWidth: 0.5,
                borderColor: '#767171',
                barPercentage: 1.0,
                categoryPercentage: 1.0
            },
            {
                label: 'Lifestyle Reward',
                data: Rewards,
                backgroundColor: '#ED7D31',
                borderWidth: 0.5,
                borderColor: '#767171',
                barPercentage: 1.0,
                categoryPercentage: 1.0
            }
            ]
        },
        options: {
            plugins: {
                labels: {
                    render: () => { }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: {
                    stacked: true,
                },
                x2: {
                    labels: ['Policy Year']
                },
                yAxes: {
                    stacked: true,
                    beginAtZero: false,
                    min: 400000,
                    max: maxAxes2,
                    ticks: {
                        stepSize: 200000
                    }
                }
            }
        }
    };

    death_graph = new Chart(
        document.getElementById('Death_No_Boost'),
        config
    );


    const config2 = {
        type: 'bar',
        data: {
            labels: Age,
            datasets: [{
                label: 'Basic Sum Assured',
                data: BasicSum,
                backgroundColor: '#D1D713',
                borderWidth: 0.5,
                borderColor: '#767171',
                barPercentage: 1.0,
                categoryPercentage: 1.0
            },
            {
                label: 'Protect Boost Rider',
                data: Boost,
                backgroundColor: '#FFDE59',
                borderWidth: 0.5,
                borderColor: '#767171',
                barPercentage: 1.0,
                categoryPercentage: 1.0
            },
            {
                label: 'Lifestyle Reward',
                data: Rewards,
                backgroundColor: '#ED7D31',
                borderWidth: 0.5,
                borderColor: '#767171',
                barPercentage: 1.0,
                categoryPercentage: 1.0
            }
            ]
        },
        options: {
            plugins: {
                labels: {
                    render: () => { }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: {
                    stacked: true,
                },
                x2: {
                    labels: ['Policy Year']
                },
                yAxes: {
                    stacked: true,
                    beginAtZero: false,
                    min: 400000,
                    max: maxAxes2,
                    ticks: {
                        stepSize: 200000
                    }
                }
            }
        }
    };

    death_boost_graph = new Chart(
        document.getElementById('Death_Boost'),
        config2
    );

    protectBoostGen2 = true;
}

// CHART DATA
const monthly = 12;
const female_non_smoker_status = 3;
const male_non_smoker_status = 2;
const fgr = 0.275;
const oneplusfgr = 1.002748193880960;

var premium_mode = {
    "annualy": 
        {
            "col1": 1.0,
            "col2": 1,
            "col3": 12
    },
    "semi":
        {
            "col1": 0.5,
            "col2": 2,
            "col3": 6
    },
    "quater":
        {
            "col1": 0.25,
            "col2": 4,
            "col3": 3
    },
    "month":
        {
            "col1": 0.08333,
            "col2": 12,
            "col3": 1
        }
}

var sam = {
    "data": [
        {
            "age_range": "42370",
            "age": 1,
            "factor": 60
        },
        {
            "age_range": "17-25",
            "age": 17,
            "factor": 55
        },
        {
            "age_range": "26-35",
            "age": 26,
            "factor": 50
        },
        {
            "age_range": "36-45",
            "age": 36,
            "factor": 35
        },
        {
            "age_range": "46-55",
            "age": 46,
            "factor": 25
        },
        {
            "age_range": "56 above",
            "age": 56,
            "factor": 15
        }
    ]
}

var allocation_rate = {
    "data": [
        {
            "allocation": 1,
            "five_pay": 60,
            "ten_pay": 60
        },
        {
            "allocation": 2,
            "five_pay": 90,
            "ten_pay": 65
        },
        {
            "allocation": 3,
            "five_pay": 100,
            "ten_pay": 75
        },
        {
            "allocation": 4,
            "five_pay": 100,
            "ten_pay": 100
        },
        {
            "allocation": 5,
            "five_pay": 100,
            "ten_pay": 100
        },
        {
            "allocation": 6,
            "five_pay": 0,
            "ten_pay": 100
        },
        {
            "allocation": 7,
            "five_pay": 0,
            "ten_pay": 100
        },
        {
            "allocation": 8,
            "five_pay": 0,
            "ten_pay": 100
        },
        {
            "allocation": 9,
            "five_pay": 0,
            "ten_pay": 100
        },
        {
            "allocation": 10,
            "five_pay": 0,
            "ten_pay": 100
        },
        {
            "allocation": 11,
            "five_pay": 0,
            "ten_pay": 0
        }
    ]
}

var lsd = {
    "data": [
        {
            "sum_assured": 0,
            "mass": 0,
            "premier": 0
        },
        {
            "sum_assured": 850000,
            "mass": 0.05,
            "premier": 0.05
        },
        {
            "sum_assured": 1500000,
            "mass": 0.10,
            "premier": 0.10
        },
        {
            "sum_assured": 2500000,
            "mass": 0.10,
            "premier": 0.15
        }
    ]
}

var death_coi = {
    "data": [
        {
            "age": "1",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "2",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "3",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "4",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "5",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "6",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "7",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "8",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "9",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "10",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "11",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "12",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "13",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "14",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "15",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "16",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "17",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "18",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "19",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "20",
            "male": "1.64",
            "female": "1.64"
        },
        {
            "age": "21",
            "male": "1.66",
            "female": "1.66"
        },
        {
            "age": "22",
            "male": "1.68",
            "female": "1.68"
        },
        {
            "age": "23",
            "male": "1.70",
            "female": "1.70"
        },
        {
            "age": "24",
            "male": "1.72",
            "female": "1.72"
        },
        {
            "age": "25",
            "male": "1.74",
            "female": "1.74"
        },
        {
            "age": "26",
            "male": "1.77",
            "female": "1.77"
        },
        {
            "age": "27",
            "male": "1.79",
            "female": "1.79"
        },
        {
            "age": "28",
            "male": "1.81",
            "female": "1.81"
        },
        {
            "age": "29",
            "male": "1.83",
            "female": "1.83"
        },
        {
            "age": "30",
            "male": "1.85",
            "female": "1.85"
        },
        {
            "age": "31",
            "male": "1.87",
            "female": "1.87"
        },
        {
            "age": "32",
            "male": "1.89",
            "female": "1.89"
        },
        {
            "age": "33",
            "male": "1.91",
            "female": "1.91"
        },
        {
            "age": "34",
            "male": "1.93",
            "female": "1.93"
        },
        {
            "age": "35",
            "male": "1.95",
            "female": "1.95"
        },
        {
            "age": "36",
            "male": "1.95",
            "female": "1.95"
        },
        {
            "age": "37",
            "male": "1.98",
            "female": "1.95"
        },
        {
            "age": "38",
            "male": "2.00",
            "female": "1.95"
        },
        {
            "age": "39",
            "male": "2.08",
            "female": "1.95"
        },
        {
            "age": "40",
            "male": "2.13",
            "female": "1.98"
        },
        {
            "age": "41",
            "male": "2.17",
            "female": "2.00"
        },
        {
            "age": "42",
            "male": "2.25",
            "female": "2.08"
        },
        {
            "age": "43",
            "male": "2.40",
            "female": "2.13"
        },
        {
            "age": "44",
            "male": "2.55",
            "female": "2.18"
        },
        {
            "age": "45",
            "male": "2.70",
            "female": "2.26"
        },
        {
            "age": "46",
            "male": "2.78",
            "female": "2.40"
        },
        {
            "age": "47",
            "male": "3.23",
            "female": "2.50"
        },
        {
            "age": "48",
            "male": "3.45",
            "female": "2.65"
        },
        {
            "age": "49",
            "male": "3.65",
            "female": "2.70"
        },
        {
            "age": "50",
            "male": "3.84",
            "female": "3.15"
        },
        {
            "age": "51",
            "male": "4.37",
            "female": "3.39"
        },
        {
            "age": "52",
            "male": "4.92",
            "female": "3.61"
        },
        {
            "age": "53",
            "male": "5.44",
            "female": "3.84"
        },
        {
            "age": "54",
            "male": "5.96",
            "female": "4.37"
        },
        {
            "age": "55",
            "male": "6.49",
            "female": "4.92"
        },
        {
            "age": "56",
            "male": "7.34",
            "female": "5.44"
        },
        {
            "age": "57",
            "male": "8.17",
            "female": "5.96"
        },
        {
            "age": "58",
            "male": "9.02",
            "female": "6.49"
        },
        {
            "age": "59",
            "male": "9.86",
            "female": "7.34"
        },
        {
            "age": "60",
            "male": "10.69",
            "female": "8.17"
        },
        {
            "age": "61",
            "male": "12.15",
            "female": "9.02"
        },
        {
            "age": "62",
            "male": "12.80",
            "female": "9.87"
        },
        {
            "age": "63",
            "male": "14.87",
            "female": "10.69"
        },
        {
            "age": "64",
            "male": "16.46",
            "female": "12.15"
        },
        {
            "age": "65",
            "male": "18.23",
            "female": "12.81"
        },
        {
            "age": "66",
            "male": "19.61",
            "female": "14.86"
        },
        {
            "age": "67",
            "male": "22.22",
            "female": "16.46"
        },
        {
            "age": "68",
            "male": "24.84",
            "female": "18.23"
        },
        {
            "age": "69",
            "male": "27.47",
            "female": "19.61"
        },
        {
            "age": "70",
            "male": "29.62",
            "female": "21.75"
        },
        {
            "age": "71",
            "male": "32.94",
            "female": "24.37"
        },
        {
            "age": "72",
            "male": "36.26",
            "female": "27.00"
        },
        {
            "age": "73",
            "male": "39.55",
            "female": "29.62"
        },
        {
            "age": "74",
            "male": "42.87",
            "female": "32.94"
        },
        {
            "age": "75",
            "male": "46.17",
            "female": "36.26"
        },
        {
            "age": "76",
            "male": "51.21",
            "female": "39.55"
        },
        {
            "age": "77",
            "male": "56.23",
            "female": "42.87"
        },
        {
            "age": "78",
            "male": "61.26",
            "female": "46.17"
        },
        {
            "age": "79",
            "male": "66.29",
            "female": "51.21"
        },
        {
            "age": "80",
            "male": "71.32",
            "female": "56.23"
        },
        {
            "age": "81",
            "male": "78.80",
            "female": "61.26"
        },
        {
            "age": "82",
            "male": "86.29",
            "female": "66.29"
        },
        {
            "age": "83",
            "male": "93.79",
            "female": "71.32"
        },
        {
            "age": "84",
            "male": "101.27",
            "female": "78.80"
        },
        {
            "age": "85",
            "male": "108.76",
            "female": "86.29"
        },
        {
            "age": "86",
            "male": "119.92",
            "female": "93.79"
        },
        {
            "age": "87",
            "male": "131.05",
            "female": "101.27"
        },
        {
            "age": "88",
            "male": "142.20",
            "female": "108.76"
        },
        {
            "age": "89",
            "male": "153.33",
            "female": "119.92"
        },
        {
            "age": "90",
            "male": "164.47",
            "female": "131.05"
        },
        {
            "age": "91",
            "male": "176.12",
            "female": "142.20"
        },
        {
            "age": "92",
            "male": "188.52",
            "female": "153.33"
        },
        {
            "age": "93",
            "male": "201.24",
            "female": "164.47"
        },
        {
            "age": "94",
            "male": "214.49",
            "female": "176.12"
        },
        {
            "age": "95",
            "male": "228.16",
            "female": "188.52"
        },
        {
            "age": "96",
            "male": "242.03",
            "female": "201.24"
        },
        {
            "age": "97",
            "male": "255.92",
            "female": "214.49"
        },
        {
            "age": "98",
            "male": "269.50",
            "female": "228.16"
        },
        {
            "age": "99",
            "male": "282.06",
            "female": "242.03"
        }
    ]
}

var tpd_coi = {
    "data": [
        {
            "age": "1",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "2",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "3",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "4",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "5",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "6",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "7",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "8",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "9",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "10",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "11",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "12",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "13",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "14",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "15",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "16",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "17",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "18",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "19",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "20",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "21",
            "male": "0.19",
            "female": "0.19"
        },
        {
            "age": "22",
            "male": "0.20",
            "female": "0.20"
        },
        {
            "age": "23",
            "male": "0.20",
            "female": "0.20"
        },
        {
            "age": "24",
            "male": "0.20",
            "female": "0.20"
        },
        {
            "age": "25",
            "male": "0.20",
            "female": "0.20"
        },
        {
            "age": "26",
            "male": "0.20",
            "female": "0.20"
        },
        {
            "age": "27",
            "male": "0.20",
            "female": "0.20"
        },
        {
            "age": "28",
            "male": "0.21",
            "female": "0.21"
        },
        {
            "age": "29",
            "male": "0.21",
            "female": "0.21"
        },
        {
            "age": "30",
            "male": "0.21",
            "female": "0.21"
        },
        {
            "age": "31",
            "male": "0.21",
            "female": "0.21"
        },
        {
            "age": "32",
            "male": "0.21",
            "female": "0.21"
        },
        {
            "age": "33",
            "male": "0.22",
            "female": "0.22"
        },
        {
            "age": "34",
            "male": "0.22",
            "female": "0.22"
        },
        {
            "age": "35",
            "male": "0.22",
            "female": "0.22"
        },
        {
            "age": "36",
            "male": "0.22",
            "female": "0.22"
        },
        {
            "age": "37",
            "male": "0.23",
            "female": "0.22"
        },
        {
            "age": "38",
            "male": "0.23",
            "female": "0.22"
        },
        {
            "age": "39",
            "male": "0.23",
            "female": "0.22"
        },
        {
            "age": "40",
            "male": "0.24",
            "female": "0.23"
        },
        {
            "age": "41",
            "male": "0.24",
            "female": "0.23"
        },
        {
            "age": "42",
            "male": "0.24",
            "female": "0.23"
        },
        {
            "age": "43",
            "male": "0.24",
            "female": "0.23"
        },
        {
            "age": "44",
            "male": "0.29",
            "female": "0.23"
        },
        {
            "age": "45",
            "male": "0.31",
            "female": "0.23"
        },
        {
            "age": "46",
            "male": "0.31",
            "female": "0.23"
        },
        {
            "age": "47",
            "male": "0.36",
            "female": "0.28"
        },
        {
            "age": "48",
            "male": "0.40",
            "female": "0.29"
        },
        {
            "age": "49",
            "male": "0.42",
            "female": "0.31"
        },
        {
            "age": "50",
            "male": "0.45",
            "female": "0.35"
        },
        {
            "age": "51",
            "male": "0.51",
            "female": "0.38"
        },
        {
            "age": "52",
            "male": "0.57",
            "female": "0.41"
        },
        {
            "age": "53",
            "male": "0.65",
            "female": "0.45"
        },
        {
            "age": "54",
            "male": "0.71",
            "female": "0.51"
        },
        {
            "age": "55",
            "male": "0.78",
            "female": "0.57"
        },
        {
            "age": "56",
            "male": "0.88",
            "female": "0.65"
        },
        {
            "age": "57",
            "male": "1.00",
            "female": "0.71"
        },
        {
            "age": "58",
            "male": "1.12",
            "female": "0.78"
        },
        {
            "age": "59",
            "male": "1.22",
            "female": "0.88"
        },
        {
            "age": "60",
            "male": "1.31",
            "female": "1.00"
        },
        {
            "age": "61",
            "male": "1.51",
            "female": "1.12"
        },
        {
            "age": "62",
            "male": "1.59",
            "female": "1.21"
        },
        {
            "age": "63",
            "male": "1.84",
            "female": "1.31"
        },
        {
            "age": "64",
            "male": "2.06",
            "female": "1.51"
        },
        {
            "age": "65",
            "male": "2.25",
            "female": "1.58"
        },
        {
            "age": "66",
            "male": "2.46",
            "female": "1.85"
        },
        {
            "age": "67",
            "male": "2.69",
            "female": "2.06"
        },
        {
            "age": "68",
            "male": "2.95",
            "female": "2.25"
        },
        {
            "age": "69",
            "male": "3.23",
            "female": "2.46"
        },
        {
            "age": "70",
            "male": "4.83",
            "female": "3.55"
        },
        {
            "age": "71",
            "male": "5.37",
            "female": "3.97"
        },
        {
            "age": "72",
            "male": "5.91",
            "female": "4.40"
        },
        {
            "age": "73",
            "male": "6.45",
            "female": "4.83"
        },
        {
            "age": "74",
            "male": "6.99",
            "female": "5.37"
        },
        {
            "age": "75",
            "male": "7.53",
            "female": "5.91"
        },
        {
            "age": "76",
            "male": "8.35",
            "female": "6.45"
        },
        {
            "age": "77",
            "male": "9.17",
            "female": "6.99"
        },
        {
            "age": "78",
            "male": "9.99",
            "female": "7.53"
        },
        {
            "age": "79",
            "male": "10.81",
            "female": "8.35"
        },
        {
            "age": "80",
            "male": "11.63",
            "female": "9.17"
        },
        {
            "age": "81",
            "male": "12.85",
            "female": "9.99"
        },
        {
            "age": "82",
            "male": "14.07",
            "female": "10.81"
        },
        {
            "age": "83",
            "male": "15.30",
            "female": "11.63"
        },
        {
            "age": "84",
            "male": "16.52",
            "female": "12.85"
        },
        {
            "age": "85",
            "male": "17.74",
            "female": "14.07"
        },
        {
            "age": "86",
            "male": "19.56",
            "female": "15.30"
        },
        {
            "age": "87",
            "male": "21.37",
            "female": "16.52"
        },
        {
            "age": "88",
            "male": "23.19",
            "female": "17.74"
        },
        {
            "age": "89",
            "male": "25.01",
            "female": "19.56"
        },
        {
            "age": "90",
            "male": "26.83",
            "female": "21.37"
        },
        {
            "age": "91",
            "male": "28.73",
            "female": "23.19"
        },
        {
            "age": "92",
            "male": "30.75",
            "female": "25.01"
        },
        {
            "age": "93",
            "male": "32.82",
            "female": "26.83"
        },
        {
            "age": "94",
            "male": "34.98",
            "female": "28.73"
        },
        {
            "age": "95",
            "male": "37.21",
            "female": "30.75"
        },
        {
            "age": "96",
            "male": "39.48",
            "female": "32.82"
        },
        {
            "age": "97",
            "male": "41.74",
            "female": "34.98"
        },
        {
            "age": "98",
            "male": "43.96",
            "female": "37.21"
        },
        {
            "age": "99",
            "male": "46.00",
            "female": "39.48"
        }
    ]
}