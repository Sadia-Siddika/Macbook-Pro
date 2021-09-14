var memoryButtonCount = 0;
var storageButtonCount = 0;
var deliveryButtonCount = 0;

var EightGbMemoryClicked = 0;
var SixteenGbMemoryClicked = 0;

var twoHundredFiftysixGbSsdClicked = 0;
var fiveHundredTwelveGbSsdClicked = 0;
var oneTeraBiteSsdClicked = 0;

var deliveryClicked = 0;
var urgentDeliveryClicked = 0;


/*----->> Handle Memory Events Start <<-----*/
document.getElementById('memory8GB').addEventListener('click', function () {
    if (EightGbMemoryClicked == 0) {
        extraCost('memory', 0);
        totalCost(-180);
        EightGbMemoryClicked = 1;
        SixteenGbMemoryClicked = 0;
    }
    else {
        console.log('Already calculated');
    }
});
document.getElementById('memory16GB').addEventListener('click', function () {
    if (SixteenGbMemoryClicked == 0) {
        extraCost('memory', 180);
        totalCost(180);
        SixteenGbMemoryClicked = 1;
        EightGbMemoryClicked = 0;
    }
    else {
        console.log('Already calculated');
    }
});
/*----->> Handle Memory Events End <<-----*/

/*----->> Handle Storage Events Start <<-----*/
document.getElementById('storage256GB').addEventListener('click', function () {
    if (twoHundredFiftysixGbSsdClicked == 0 && oneTeraBiteSsdClicked == 0) {
        extraCost('storage', 0);
        totalCost(-100);
        twoHundredFiftysixGbSsdClicked = 1;
        fiveHundredTwelveGbSsdClicked = 0;
        oneTeraBiteSsdClicked = 0;

    } else if (twoHundredFiftysixGbSsdClicked == 0 && oneTeraBiteSsdClicked != 0) {
        extraCost('storage', 0);
        totalCost(-180);
        twoHundredFiftysixGbSsdClicked = 1;
        fiveHundredTwelveGbSsdClicked = 0;
        oneTeraBiteSsdClicked = 0;
    }
    else {
        console.log('Already calculated');
    }
});
document.getElementById('storage512GB').addEventListener('click', function () {
    if (fiveHundredTwelveGbSsdClicked == 0) {
        if (oneTeraBiteSsdClicked == 1) {
            extraCost('storage', -180);
            totalCost(-180);
        }
        extraCost('storage', 100);
        totalCost(100);
        fiveHundredTwelveGbSsdClicked = 1;
        twoHundredFiftysixGbSsdClicked = 0;
        oneTeraBiteSsdClicked = 0;

    }
    else {
        console.log('Already calculated');
    }
});
document.getElementById('storage1TB').addEventListener('click', function () {
    if (oneTeraBiteSsdClicked == 0) {
        if (fiveHundredTwelveGbSsdClicked == 1) {
            extraCost('storage', -100);
            totalCost(-100);
        }
        extraCost('storage', 180);
        totalCost(180);
        oneTeraBiteSsdClicked = 1;
        twoHundredFiftysixGbSsdClicked = 0;
        fiveHundredTwelveGbSsdClicked = 0;

    }
    else {
        console.log('Already calculated');
    }
});
/*----->> Handle Storage Events End <<-----*/

/*----->> Handle Delivery Events Start <<-----*/
document.getElementById('freeDelivery').addEventListener('click', function () {
    if (deliveryClicked == 0) {
        extraCost('delivery', 0);
        totalCost(-20);
        deliveryClicked = 1;
        urgentDeliveryClicked = 0;
    }
    else {
        console.log('Already calculated');
    }
});
document.getElementById('urgentDelivery').addEventListener('click', function () {
    if (urgentDeliveryClicked == 0) {
        extraCost('delivery', 20);
        totalCost(20);
        urgentDeliveryClicked = 1;
        deliveryClicked = 0;
    }
    else {
        console.log('Already calculated');
    }
});
/*----->> Handle Delivery Events End <<-----*/

function extraCost(id, price) {
    const cost = document.getElementById(id + 'Cost');
    const costAmount = parseInt(price);
    console.log(costAmount);
    cost.innerText = costAmount;
}
function totalCost(price) {
    const totalCost = document.getElementById('totalCost');
    const totalCostText = totalCost.innerText;
    let totalCostNumeric = parseInt(totalCostText); //1299
    let totalamount = totalCostNumeric;
    totalCostNumeric += price; //1299-180
    if (totalCostNumeric < 1299) {
        console.log('Total cost should not less than 1299');
    } else {
        totalamount += price; //1299 + 180 = 1479
        console.log(price);
        totalCost.innerText = totalamount;
        totalPrice.innerText = totalamount;

    }

    /*----->> Promo Code Event Handler <<-----*/
    document.getElementById('promoApply').addEventListener('click', function () {
        const totalPrice = document.getElementById('totalPrice');
        const totalPriceText = totalPrice.innerText;
        const totalPriceNumeric = totalamount;

        const promoInput = document.getElementById('promoCode');
        const promoInputText = promoInput.value;

        if (promoInputText == 'stevekaku') {
            const discountPrice = totalPriceNumeric * 0.2;
            const totalPriceAmount = totalPriceNumeric - discountPrice;
            totalPrice.innerText = totalPriceAmount;
        }
        else {
            totalPrice.innerText = totalPriceNumeric;
        }
    });
}