


// iDesigning.ru development

var PC, PS;
var var1, var2, var3, var4, tab, newValue;
var classes = {
    5: 'vii',
    10: 'x',
    15: 'xv',
    20: 'xx',
    25: 'xxv',
    26: 'xxx'
}

function calcObj(){
    this.anuitetPercent = function(){
        var val = parseFloat($('[name=annuitet]:checked').val()) / 100;
        //console.log(val);
        return val;
    }

    //По зарплате
    this.first_anuitet = function(years, salary){
        var anuitet = rounder(salary * this.anuitetPercent());
        return parsePrice(anuitet);
    }
    this.first_summ = function(years, salary){
        var first_anuitet = parseFloat(onlyDigits($('.first.anuitet.'+classes[years]).text()));
        var first_summ = first_anuitet*(1-1/Math.pow(1+PS, years*12))/PS;
        first_summ = rounder(first_summ);
        return parsePrice(first_summ);
    }
    this.first_overpay = function(years, salary){
        var first_summ = parseFloat(onlyDigits($('.first.summ.'+classes[years]).text()));
        var first_overpay = years * 12 * salary * this.anuitetPercent() - first_summ;
        first_overpay = rounder(first_overpay);
        return parsePrice(first_overpay);
    }

        //По сумме кредита
    this.second_anuitet = function(years, credit){
        var second_anuitet = credit*PS/(1-1/Math.pow(1+PS, years*12));
        second_anuitet = rounder(second_anuitet);
        return parsePrice(second_anuitet);
    }
    this.second_overpay = function(years, credit){
        var second_anuitet = parseFloat(onlyDigits($('.second.anuitet.'+classes[years]).text()));
        var second_overpay = second_anuitet*years*12-var4;
        second_overpay = rounder(second_overpay);
        return parsePrice(second_overpay);
    }
    this.second_salary = function(years, credit){
        var second_anuitet = parseFloat(onlyDigits($('.second.anuitet.'+classes[years]).text()));
        var second_salary = second_anuitet / this.anuitetPercent();
        second_salary = rounder(second_salary);
        return parsePrice(second_salary);
    }

    //По платежу
    this.third_summ = function(years, anuitet){
        var third_summ = anuitet*(1-1/Math.pow(1+PS, years*12))/PS;
        third_summ = rounder(third_summ);
        return parsePrice(third_summ);
    }
    this.third_overpay = function(years, anuitet){
        var third_summ = parseFloat(onlyDigits($('.third.summ.'+classes[years]).text()));
        var third_overpay = years*12*anuitet-third_summ;
        third_overpay = rounder(third_overpay);
        return parsePrice(third_overpay);
    }
    this.third_salary = function(years, anuitet){
        var val = anuitet / this.anuitetPercent();
        val = rounder(val);
        return parsePrice(val);
    }
}

function calcObjOld(){
    this.first_anuitet = function(years, salary){
        return parsePrice(salary/2);
    }
    this.first_summ = function(years, salary){
        var first_anuitet = parseFloat(onlyDigits($('.first.anuitet.'+classes[years]).text()));
        var first_summ = first_anuitet*(1-1/Math.pow(1+PS, years*12))/PS;
        first_summ = rounder(first_summ);
        return parsePrice(first_summ);
    }
    this.first_overpay = function(years, salary){
        var first_summ = parseFloat(onlyDigits($('.first.summ.'+classes[years]).text()));
        var first_overpay = years*12*salary/2-first_summ;
        first_overpay = rounder(first_overpay);
        return parsePrice(first_overpay);
    }
    this.second_anuitet = function(years, credit){
        var second_anuitet = credit*PS/(1-1/Math.pow(1+PS, years*12));
        second_anuitet = rounder(second_anuitet);
        return parsePrice(second_anuitet);
    }
    this.second_overpay = function(years, credit){
        var second_anuitet = parseFloat(onlyDigits($('.second.anuitet.'+classes[years]).text()));
        var second_overpay = second_anuitet*years*12-var4;
        second_overpay = rounder(second_overpay);
        return parsePrice(second_overpay);
    }
    this.second_salary = function(years, credit){
        var second_anuitet = parseFloat(onlyDigits($('.second.anuitet.'+classes[years]).text()));
        var second_salary = second_anuitet*2;
        second_salary = rounder(second_salary);
        return parsePrice(second_salary);
    }
    this.third_summ = function(years, anuitet){
        var third_summ = anuitet*(1-1/Math.pow(1+PS, years*12))/PS;
        third_summ = rounder(third_summ);
        return parsePrice(third_summ);
    }
    this.third_overpay = function(years, anuitet){
        var third_summ = parseFloat(onlyDigits($('.third.summ.'+classes[years]).text()));
        var third_overpay = years*12*anuitet-third_summ;
        third_overpay = rounder(third_overpay);
        return parsePrice(third_overpay);
    }
    this.third_salary = function(years, anuitet){
        return parsePrice(anuitet*2);
    }
}

var calc = new calcObj();

function rounder(value){
    //	value = Math.round(value*100)/100;
    value = Math.round(value);
    return value;
}

function doCalc(){
    $('.calculators td').each(function(){

        var1 = undefined;
        var2 = undefined;
        var3 = undefined;
        var4 = undefined;
        tableClass = $(this).attr('class');

        if($(this).hasClass('first')){
            var1 = 'first';
            var4 = parseInt(onlyDigits($('#salary').val()));
        }
        if($(this).hasClass('second')){
            var1 = 'second';
            var4 = parseInt(onlyDigits($('#credit').val()));
        }
        if($(this).hasClass('third')){
            var1 = 'third';
            var4 = parseInt(onlyDigits($('#anuitet').val()));
        }

        if($(this).hasClass('anuitet')) var2 = 'anuitet';
        if($(this).hasClass('summ')) var2 = 'summ';
        if($(this).hasClass('overpay')) var2 = 'overpay';
        if($(this).hasClass('salary')) var2 = 'salary';

        if($(this).hasClass('vii')) var3 = 5;
        if($(this).hasClass('x')) var3 = 10;
        if($(this).hasClass('xv')) var3 = 15;
        if($(this).hasClass('xx')) var3 = 20;
        if($(this).hasClass('xxv')) var3 = 25;
        if($(this).hasClass('xxx')) var3 = parseInt($('input.custom').val());

        if(classes[var3]==undefined) classes[var3] = 'xxx';

        if(var1!=undefined && var2!=undefined && var3!=undefined && var4!=undefined && var4>999 && var4<99999999){
            newValue = eval('calc.'+var1+'_'+var2+'('+var3+', '+var4+');');
            if(newValue == 'NaN') newValue = '';
            $(this).text(newValue);
        }
    });

    //ristudio_draw_charts();
}

function parseDate(value){
    var yeardesc = 'лет';
    var lastnumber = parseInt(value%10);
    if(value==1 || lastnumber==1 && value>11) yeardesc = 'год';
    if((lastnumber>=2 && lastnumber<=4) && (value<5 || value>20)) yeardesc = 'года';
    return value+' '+yeardesc;
}

function parsePrice(price){

    var i; var newprice = '';
    var priceL = parseInt(String(price).length);
    var numCount = 0; var counter = 0;

    if(priceL%3==0)
        var spaceCount = Math.floor(priceL/3)-1;
    else
        var spaceCount = Math.floor(priceL/3);

    var letterBeforeStep = parseInt(priceL - spaceCount*3 - 1);

    for(i=0;i<priceL;i++){
        if(i>letterBeforeStep){
            newprice += ' ';
            letterBeforeStep = parseInt(letterBeforeStep+3);
        }
        newprice += String(price).charAt(i);
    }

    return newprice;
}

function onlyDigits(string){
    string = string.split(',').join('.');
    var digits = parseFloat(string.split(' ').join(''));
    return digits;
}

function parseFields(){
    $('#salary, #credit, #anuitet').each(function(){
        $(this).val(parsePrice($(this).val()));
    });
}

$(document).ready(function(){

    $('.bRadioBtn').on('change',function(){
        $('.bLabel').removeClass('isChecked');
        $(this).parent('.bLabel').addClass('isChecked');
    })

    PC = onlyDigits($('#percent').val()); //Процент по кредиту
    PS = PC/1200; //Процент по кредиту в месяц

    $('ul.tabs li').click(function(){
        $('.tabcontent').not(".hidden").addClass('hidden');

        tab = $(this).attr('rel');

        $('ul.tabs li.selected').removeClass('selected');
        $('div.'+tab).removeClass("hidden");
        $('#calc-diff-inputs').find('.field-item').hide();

        $('#field-' + tab).show();
        $(this).addClass('selected');
    });

    $('#percent').bind('change blur', function(){
        if($(this).val()!='') $(this).val(onlyDigits($(this).val())+'%');
    });

    $('input.custom')
        .bind('change blur', function(){
            if($(this).val()!='') { newValue = parseDate(parseInt($(this).val())); $(this).val(newValue); }
            $('input.custom').each(function(){ $(this).val(newValue); });
        })
        .keyup(function(){
            if($(this).val()!='') { newValue = parseInt($(this).val()); } else newValue = '';
            $('input.custom').each(function(){ $(this).val(newValue); });
            doCalc();
        })
        .focus(function(){ if($(this).val()!='') $(this).val(parseInt($(this).val())); });


    $('#salary, #credit, #anuitet')
        .bind('change blur', function(){
            $(this).val(parsePrice(onlyDigits($(this).val())));
        });

    $('#salary, #credit, #anuitet, #percent')
        .keyup(function(){
            PC = onlyDigits($('#percent').val());
            PS = PC/1200;
            doCalc();
        })
        .focus(function(){
            if($(this).val()!='')
                $(this).val(onlyDigits($(this).val()));
        });


    $('[name=annuitet]').change(function() {
        doCalc();
    });

    doCalc();
    parseFields();
});