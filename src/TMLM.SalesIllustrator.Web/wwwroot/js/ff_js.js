
var page_count_store = 1;
var previousPage = 0;
var amount = "RM 500,000"
var amount_int = 500000;
var tempAmount = 0;
var hasEntered = false;
var age = "20"
var fd = 0;
var re = 0;
var ipp = 0;
var sut = 0;
var isp = 0;
var fd_percentage = 0;
var re_percentage = 0;
var ipp_percentage = 0;
var sut_percentage = 0;
var isp_percentage = 0;
var checkValidityAmt = 0;
var category = ["fd", "re", "isp", "ipp", "sut"];
var temp_name = "";
var temp_amt = "";
var temp_age = "";
var resetAge = false;
var resetAmt = false;
var firsttime = true;

document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, false);

$(document).ready(function () {
    $(`#section_1`).css('display', 'block');
    $(`#pagination`).css('display', 'none');
    checkPageCounter(page_count_store); //test
    CreateApi();

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;

    } else {
        isMobile = false;
    }

    $('.numberonly').keypress(function (e) {
        var charCode = (e.which) ? e.which : event.keyCode
        if (String.fromCharCode(charCode).match(/[^0-9]/g))
            return false;
    });

});

function CreateApi() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var url = sitename + 'FactFind/Create/' + params.id;

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        dataType: "JSON",
        type: "GET",
        success: function (data) {
        },
        error: function (data) {
            failApiResponse(data);
        }
    });
}

function CreateApiWithCallBack(callBackFunction) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var url = sitename + 'FactFind/Create/' + params.id;

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: "GET",
        success: function (data) {
            callBackFunction();
        },
        error: function (data) {
            failApiResponse(data);
            window.location.href = sitename + "error";
        }
    });
}

function saveProcess(process_save) {
    var url = sitename + 'FactFind/UpdateProcess';
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

function update() {

    var req = {
        name: $('.name_input').val(),
        age: this.age,
        amount: parseFloat(this.amount_int),
        MoneyMarket: parseFloat(this.fd),
        RealEstateProperty: parseFloat(this.re),
        StockUnitTrust: parseFloat(this.sut),
        InsuranceProtectionPlan: parseFloat(this.ipp),
        InsuranceSavingPlan: parseFloat(this.isp),
    };

     var url = sitename + 'FactFind/Update';

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
             //next(23);
         },
         error: function (data) {
             failApiResponse(data);
         }
     });
}

function back_page() {
    if (page_count_store != 1) {
        $(`#pagination`).css('display', 'block');
    }

    $(`#section_${page_count_store}`).css('display', 'none');

    if (page_count_store == 4 || page_count_store == 5 || page_count_store == 6 || page_count_store == 7)
        page_count_store = 3;
    else
        page_count_store--;

    $(`#section_${page_count_store}`).css('display', 'block');
    checkPageCounter(page_count_store)
}

function next_page() {

    //console.log(this.checkValidityAmt, this.amount_int)

    if (this.page_count_store == 3 && this.checkValidityAmt == 0)
        return;

    if (this.page_count_store == 3 && this.checkValidityAmt < this.amount_int)
        return;

    if (this.page_count_store == 3)
        this.loading_page();

    if (page_count_store != 1) {
        $(`#pagination`).css('display', 'block');
    }

    $(`#section_${page_count_store}`).css('display', 'none');
    page_count_store++;

    $(`#section_${page_count_store}`).css('display', 'block');
    checkPageCounter(page_count_store)
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

function loading_page() {

    if (resetAmt == false) {
        if (checkNaN('fd') != this.fd ||
            checkNaN('re') != this.re ||
            checkNaN('ipp') != this.ipp ||
            checkNaN('sut') != this.sut ||
            checkNaN('isp') != this.isp) {
            CreateApiWithCallBack(afterLoadingPage);
            return;
        }
    }

    afterLoadingPage();
}

async function afterLoadingPage() {
    resetAmt = false;

    $('.right_button').css('opacity', '1')
    fd = checkNaN('fd');
    re = checkNaN('re');
    ipp = checkNaN('ipp');
    sut = checkNaN('sut');
    isp = checkNaN('isp');
    await this.percentageCalculation();

    if (this.fd_percentage == 0 &&
        this.sut_percentage == 0 &&
        this.re_percentage == 0 &&
        this.isp_percentage == 0 &&
        this.ipp_percentage == 0) {
        return;
    }

    update();

    $('#main_title').css('opacity', '0');

    setTimeout(function () {
        //console.log('fd', this.fd_percentage); //console.log('sut', this.sut_percentage); //console.log('re', this.re_percentage); //console.log('isp', this.isp_percentage); //console.log('ipp', this.ipp_percentage)
        $('#main_title').css('opacity', '1');
        if (this.fd_percentage == 0 &&
            this.sut_percentage == 0 &&
            this.re_percentage == 0 &&
            this.isp_percentage == 0 &&
            this.ipp_percentage == 0) {
            return;
        }

        if (this.fd_percentage == 50 && (this.sut_percentage + this.re_percentage) == 50
            && this.isp_percentage == 0 && this.ipp_percentage == 0) {
            next(5);
            //mr. fragile
            //Insurance Protection Plan = 0%
            //Insurance Savings Plan = 0 %
            //FD = 50 %
            //Total of Real Estate and Stock = 50 %

        } else if ((this.fd_percentage + this.isp_percentage + this.ipp_percentage) > 50) {
            next(6);
            //neighbourhood uncle
            //FD and Insurance > 50%
        } else if ((this.sut_percentage + this.re_percentage) > 50) {
            next(7);
            //investment kaki
            //Real Estate and Stock > 50%
        } else if (this.fd_percentage > 0 && this.sut_percentage > 0 && this.re_percentage > 0 && this.isp_percentage > 0 && this.ipp_percentage > 0) {
            next(8);
            //All of the assets > 0 and does not fall under the criteria for other results.
        }
        else {
            //this category doesnt fall anywhere at all
            next(8);
        }
    }, 1400)
}

function checkPageCounter(page_counter) {
    $('#info_title').hide();
    if (page_counter != 1) {
        $(`#pagination`).css('display', 'block');
    }

    if (page_counter == 1) {
        resetAge = true;
        resetAmt = true;
        $('#main_title').html("How well do you plan for your assets?")
        $('#sub_title').html("")

        $('.amt_dropdown').val('RM 500,000')
        $('.age_dropdown').val('')
        $('.name_input').val('')
    }
    else if (page_counter == 2) {

        saveProcess('user detail input');
        $('#main_title').html("How well do you plan for your assets?");
        this.populateAge();
        $('.right_button').css('opacity', '1')

        //$('.amt_dropdown').val('RM 500,000')
        //$('.age_dropdown').val('')
        //$('.name_input').val('')

        if (resetAge == true)
            $('.age_dropdown').val('')

        this.checkValidityAmt = 0;
    }
    else if (page_counter == 3) {

        resetAge = false;
        saveProcess('assets allocation');

        this.temp_name = $('.name_input').val();
        this.temp_age = $('.age_dropdown').val();
        this.temp_amt = $('.amt_dropdown').val();

        if (this.checkValidityAmt == 0) {
            $('.red_msg').show();
            $('.right_button').css('opacity', '0.5')
        }

        $('#info_title').show();
        $('#main_title').html("How well do you plan for your assets?")
        $('#sub_title').html("");

        $('.amount_input').val(this.amount);

        if (this.resetAmt == true) {
            this.clearAmt();
        }

        if (this.hasEntered == false) {
            $('.fd').change(function () { validateTotalAmount('fd') });
            $('.re').change(function () { validateTotalAmount('re') });
            $('.sut').change(function () { validateTotalAmount('sut') });
            $('.isp').change(function () { validateTotalAmount('isp') });
            $('.ipp').change(function () { validateTotalAmount('ipp') });
            this.hasEntered = true;
        } else {
            this.recalculateAmount();
        }

        if (this.firsttime == true) {
            $('.red_msg').hide();
            this.firsttime = false;
        }
    }
    else if (page_counter == 4) {
        
        //loader

    }
    else if (page_counter == 5) {
        saveProcess('Mr. Fragile investment profile');
        $('#main_title').html("Here is your investment profile")
        $('.total_amount').html(this.amount);
        $('#sub_title').html("- The Mr. Fragile -");

    }
    else if (page_counter == 6) {
        saveProcess('The Neighbourhood Uncle investment profile');
        $('#main_title').html("Here is your investment profile")
        $('.total_amount').html(this.amount);
        $('#sub_title').html("- The Neighbourhood Uncle -");

    }
    else if (page_counter == 7) {
        saveProcess('The Investment Asset Kaki profile');
        $('#main_title').html("Here is your investment profile")
        $('.total_amount').html(this.amount);
        $('#sub_title').html("- The Investment Asset Kaki -");

    }
    else if (page_counter == 8) {
        saveProcess('The Well-planned Customers investment profile');
        $('#main_title').html("Here is your investment profile")
        $('.total_amount').html(this.amount);
        $('#sub_title').html("- The Well-planned Customers -");

    }
    else if (page_counter == 9) {
        saveProcess('Recommended Asset Allocation');
        $('#main_title').html("Recommended Asset Allocation")
        $('#sub_title').html("");

    }
    else if (page_counter == 10) {
        saveProcess('tips');
        $('#main_title').html("Tips: Why Financial planning is important?")
        $('#sub_title').html("");

        if ($(window).height() >= 500) {
            var sheepheight = $(window).height() - $('.top').height() - $('.last_page_buttons').height() - 50;

            if (sheepheight > 500) {
                sheepheight = 500;
            }
            $('.tips_image').css('height', `${sheepheight}px`);
            $('.tips_charts').css('max-width', `${sheepheight}px`);
        } else {
            $('.tips_image').css('height', `300px`);
            $('.tips_charts').css('max-width', `300px`);
        }
        
    }
    else {
        return
    }
}

function recalculateAmount() {
    this.validateTotalAmount('fd');
    this.validateTotalAmount('re');
    this.validateTotalAmount('sut');
    this.validateTotalAmount('isp');
    this.validateTotalAmount('ipp');

    if ($('.fd').val() == '0') {
        $('.fd').val('')
    }

    if ($('.re').val() == '0') {
        $('.re').val('')
    }

    if ($('.sut').val() == '0') {
        $('.sut').val('')
    }

    if ($('.isp').val() == '0') {
        $('.isp').val('')
    }

    if ($('.ipp').val() == '0') {
        $('.ipp').val('')
    }
}

function startOver() {
    CreateApiWithCallBack(resetOver);
}

function closeWindow() {
    window.close();
}

function resetOver() {
    this.resetAge = true;
    this.resetAmt = true;
    this.firsttime = true;
    this.next(1);
}

function beforeAgePage() {
    this.next(this.previousPage);
}

function checkAgePage() {
    this.previousPage = this.page_count_store;
    this.checkAge();
    this.next(9);
}

function checkInput() {
    $('#invalid_age_msg').html("")
    $('#invalid_name_msg').html("")
    $('.name_input').removeClass('red_border');

    if ($('.age_dropdown').val() == null) {
        $('#invalid_age_msg').html("Please enter age")
    }
    if ($('.name_input').val() == '') {
        $('#invalid_name_msg').html("Please enter name")
        $('.name_input').addClass('red_border');
    }

    if ($('.age_dropdown').val() != null && $('.name_input').val() != '') {
        if (resetAge == false) {
            if (this.temp_name != $('.name_input').val() || this.temp_age != $('.age_dropdown').val() || this.temp_amt != $('.amt_dropdown').val()) {
                CreateApiWithCallBack(next_page);
                return;
            }
        }
        
        this.next_page();
    }
        
}

function checkAge() {
    var usrage = parseInt(this.age);

    //console.log('user age', usrage);

    if (usrage >= 20 && usrage <= 35) {
        $('#age_range').html('20s-35s');
        $('#age_img_male').attr('src', sitename + 'assets/ff/man.png')
        $('#age_img_female').attr('src', sitename + 'assets/ff/female.png')

        $('.fd_recommendation_percentage').val('10%');
        $('.sut_recommendation_percentage').val('55%');
        $('.re_recommendation_percentage').val('25%');
        $('.ipp_recommendation_percentage').val('5%');
        $('.isp_recommendation_percentage').val('5%');

        $('#first_paragraph').html(`
            <h4 class="center fs_16 mt-2">
                You are young and will be able to take up more risks. However, you will need to remember:
            </h4>

            <h4 class="center fs_16">
                "It is part of a wise man to keep himself today for tomorrow, and not venture all his eggs in one basket."
            </h4>

        `);

        $('#second_paragraph').html(`
            <h4 class="center fs_16 mt-1">
                Ensure low risk investment to hedge high risk investment vehicles for retirement
            </h4>

            <h4 class="center fs_16">
                Setting up financial goals for long-term and short-term
            </h4>

        `);

    } else if (usrage >= 36 && usrage <= 55) {
        $('#age_range').html('36s-55s');
        $('#age_img_male').attr('src', sitename + 'assets/ff/adult_man.png')
        $('#age_img_female').attr('src', sitename + 'assets/ff/adult_female.png')

        $('.fd_recommendation_percentage').val('20%');
        $('.sut_recommendation_percentage').val('30%');
        $('.re_recommendation_percentage').val('30%');
        $('.ipp_recommendation_percentage').val('10%');
        $('.isp_recommendation_percentage').val('10%');

        $('#first_paragraph').html(`
            <h4 class="center fs_16 mt-1" style="padding: 0px 70px">
                You are progressing well in your career now and have more commitments. You probably have a family member who requires your support.
                <br> While you are looking for a long-term appreciation, you may want to ensure that your financial decision does not affect your long-term 
                financial planning.
            </h4>

        `);

        $('#second_paragraph').html(`
            <h4 class="center fs_16 mt-1">
                Shift from current assets (stock/ unit trust) to lower risk assets <br>
                Include insurance savings plan into portfolio for education & retirement planning <br>
                Income protection for family shall unfortunate circumstances happen <br>
            </h4>

        `);


    } else if (usrage >= 56 && usrage <= 70) {
        $('#age_range').html('56s-70s');
        $('#age_img_male').attr('src', sitename + 'assets/ff/old_man.png')
        $('#age_img_female').attr('src', sitename + 'assets/ff/old_woman.png')

        $('.fd_recommendation_percentage').val('45%');
        $('.sut_recommendation_percentage').val('10%');
        $('.re_recommendation_percentage').val('10%');
        $('.ipp_recommendation_percentage').val('15%');
        $('.isp_recommendation_percentage').val('20%');

        $('#first_paragraph').html(`
            <h4 class="center fs_16 mt-2">
                You are reaching your golden years soon. You have enough savings and want to live your desired lifestyle. <br>
                You may already have investments from your younger age and property you bought in your working years.
            </h4>


        `);

        $('#second_paragraph').html(`
            <h4 class="center fs_16 mt-1">
                Save in financial vehicles that allow you to continuously generate a fixed income for post-retirement. <br>
                Build wealth/ legacy for future generations to come
            </h4>

        `);

    }
}

function clearAmt() {
    fd = 0;
    re = 0;
    ipp = 0;
    sut = 0;
    isp = 0;
    fd_percentage = 0;
    re_percentage = 0;
    ipp_percentage = 0;
    sut_percentage = 0;
    isp_percentage = 0;
    checkValidityAmt = 0;

    $('.fd').val('');
    $('.re').val('');
    $('.isp').val('');
    $('.ipp').val('');
    $('.sut').val('');
}

function selectAge() {
    this.age = $('.age_dropdown').val()
}

function selectAmount() {
    this.amount = $('.amt_dropdown').val()
    this.amount_int = this.removeComma(this.amount);
}

function removeComma(number1) {
    number1 = number1.replace(/\,/g, '');
    number1 = number1.replace('RM ', '');
    return parseInt(number1);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function populateAge() {
    var elm = document.getElementById('age');
    df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 20; i <= 70; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.appendChild(document.createTextNode(i));
        df.appendChild(option);
    }
    elm.appendChild(df);
}

function amt_up(type) {
    if ($(`.${type}`).val() == '') {
        $(`.${type}`).val('10,000');
        this.validateTotalAmount(type);
        return;
    }

    if ($('.amount_input').val() == "RM 0")
        return;

    var amt = this.removeComma($(`.${type}`).val());
    amt = parseInt(amt) + 10000;

    var amt_commas = numberWithCommas(amt);
    $(`.${type}`).val(amt_commas);

    setTimeout(function () {

        this.validateTotalAmount(type);
    }, 250)
}

function amt_down(type) {
    var amt = this.removeComma($(`.${type}`).val());
    amt = isNaN(amt) ? 0 : amt;

    if ($(`.${type}`).val() == '' || $(`.${type}`).val() == '0') {
        $(`.${type}`).val(0);

        var currentTotal = 0;
        category.forEach(function (y) {
            if (y != type) {
                currentTotal = currentTotal + checkNaN(y);
            }
        });

        $('.right_button').css('opacity', '0.5');
        $('.red_msg').show();
        this.checkValidityAmt = currentTotal + amt;
        if ((this.checkValidityAmt > 0) && this.checkValidityAmt <= this.amount_int) {
            $('.right_button').css('opacity', '1')
            $('.red_msg').hide();
        }

        this.tempAmount = currentTotal;
        currentTotal = currentTotal + amt;

        var balance = numberWithCommas(this.amount_int - currentTotal);

        $('.amount_input').val(`RM ${balance}`);
        return;
    } else {
        amt = parseInt(amt) - 10000;

        var amt_commas = numberWithCommas(amt);
        $(`.${type}`).val(amt_commas);

        setTimeout(function () {

            this.validateTotalAmount(type);
        }, 250)
    }
}

function validateTotalAmount(type) {

    if ($(`.${type}`).val() == '') {
        $(`.${type}`).val(0);
    }

    var amt = this.removeComma($(`.${type}`).val());
    amt = parseInt(amt);

    if ($(`.${type}`).val().length <= 3) {
        amt = amt * 1000;
    } else {
        if (amt <= 9999) {
            amt = 10000;
        }
    }

    amt = Math.round(amt / 10000) * 10000;

    var amt_commas = numberWithCommas(amt);
    $(`.${type}`).val(amt_commas);

    var currentTotal = 0;
    category.forEach(function (y) {
        if (y != type) {
            currentTotal = currentTotal + checkNaN(y);
        }
    });

    $('.right_button').css('opacity', '0.5')
    $('.red_msg').show();
    this.checkValidityAmt = currentTotal + amt;
    if ((this.checkValidityAmt > 0) && this.checkValidityAmt == this.amount_int) {
        $('.right_button').css('opacity', '1')
        $('.red_msg').hide();
    }

    this.tempAmount = currentTotal;
    currentTotal = currentTotal + amt;

    if (currentTotal > this.amount_int) {
        var remaining = this.amount_int - this.tempAmount;
        $(`.${type}`).val(numberWithCommas(remaining));
        this.tempAmount = this.amount_int;
        $('.amount_input').val(`RM 0`);
        $('.right_button').css('opacity', '1')
        $('.red_msg').hide();
        return;
    }

    var balance = numberWithCommas(this.amount_int - currentTotal);
    $('.amount_input').val(`RM ${balance}`);
}

function checkNaN(value) {
    var removedComma = this.removeComma($(`.${value}`).val());
    if (isNaN(parseInt(removedComma))) {
        return 0;
    } else {
        return parseInt(removedComma)
    }
}

function percentageCalculation() {
    $('.fd_percentage').val(`${((fd / this.amount_int) * 100).toFixed(1)}%`);
    $('.re_percentage').val(`${((re / this.amount_int) * 100).toFixed(1)}%`);
    $('.sut_percentage').val(`${ ((sut / this.amount_int) * 100).toFixed(1)}%`);
    $('.isp_percentage').val(`${ ((isp / this.amount_int) * 100).toFixed(1)}%`);
    $('.ipp_percentage').val(`${ ((ipp / this.amount_int) * 100).toFixed(1)}%`);

    fd_percentage = Math.floor((fd / this.amount_int) * 100);
    re_percentage = Math.floor((re / this.amount_int) * 100);
    ipp_percentage = Math.floor((ipp / this.amount_int) * 100);
    sut_percentage = Math.floor((sut / this.amount_int) * 100);
    isp_percentage = Math.floor((isp / this.amount_int) * 100);
}

function showMoreInformation() {
    $('.popup').show();

    $('.right_button').hide();
    $('.left_outline').hide();
    $('.red_msg').hide();
}

function closeInformationPopUp() {
    $('.popup').hide();

    $('.right_button').show();
    $('.left_outline').show();
    $('.red_msg').show();
}