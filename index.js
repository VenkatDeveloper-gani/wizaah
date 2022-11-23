let ColorTextEl = document.getElementById("ColorText");
let SizeTextEl = document.getElementById("SizeText");

let XsSizeEl = document.getElementById("XS");
let SSizeEl = document.getElementById("S");
let MSizeEl = document.getElementById("M");
let LSizeEl = document.getElementById("L");
let XLSizeEl = document.getElementById("XL");

let BrownCircleEl = document.getElementById("Brown");
let OrangeCircleEl = document.getElementById("orange");
let GreenCircleEl = document.getElementById("green");
let BlueCircleEl = document.getElementById("blue");

let MinsEl = document.getElementById("minis");
let ItemsCountEl = document.getElementById("itemsCount");
let PlusEl = document.getElementById("plus");

let AddCartEl = document.getElementById("addCart");

XsSizeEl.onclick = function() {
    SizeTextEl.textContent = "XS";
    XsSizeEl.classList.add("size-button");
    XsSizeEl.classList.remove("normal-button");
    MSizeEl.classList.remove("size-button");
    LSizeEl.classList.remove("size-button");
    XLSizeEl.classList.remove("size-button");
    SSizeEl.classList.remove("size-button");
    MSizeEl.classList.add("normal-button");
    LSizeEl.classList.add("normal-button");
    XLSizeEl.classList.add("normal-button");
    SSizeEl.classList.add("normal-button");
};

SSizeEl.onclick = function() {
    SizeTextEl.textContent = "S";
    SSizeEl.classList.add("size-button");
    SSizeEl.classList.remove("normal-button");
    XsSizeEl.classList.remove("size-button");
    MSizeEl.classList.remove("size-button");
    LSizeEl.classList.remove("size-button");
    XLSizeEl.classList.remove("size-button");
    XsSizeEl.classList.add("normal-button");
    MSizeEl.classList.add("normal-button");
    LSizeEl.classList.add("normal-button");
    XLSizeEl.classList.add("normal-button");
};

MSizeEl.onclick = function() {
    SizeTextEl.textContent = "M";
    MSizeEl.classList.add("size-button");
    MSizeEl.classList.remove("normal-button");
    XsSizeEl.classList.remove("size-button");
    LSizeEl.classList.remove("size-button");
    XLSizeEl.classList.remove("size-button");
    SSizeEl.classList.remove("size-button");
    XsSizeEl.classList.add("normal-button");
    LSizeEl.classList.add("normal-button");
    XLSizeEl.classList.add("normal-button");
    SSizeEl.classList.add("normal-button");
};

LSizeEl.onclick = function() {
    SizeTextEl.textContent = "L";
    LSizeEl.classList.add("size-button");
    LSizeEl.classList.remove("normal-button");
    XsSizeEl.classList.remove("size-button");
    MSizeEl.classList.remove("size-button");
    XLSizeEl.classList.remove("size-button");
    SSizeEl.classList.remove("size-button");
    XsSizeEl.classList.add("normal-button");
    MSizeEl.classList.add("normal-button");
    XLSizeEl.classList.add("normal-button");
    SSizeEl.classList.add("normal-button");
};

XLSizeEl.onclick = function() {
    SizeTextEl.textContent = "XL";
    XLSizeEl.classList.add("size-button");
    XLSizeEl.classList.remove("normal-button");
    XsSizeEl.classList.remove("size-button");
    MSizeEl.classList.remove("size-button");
    LSizeEl.classList.remove("size-button");
    SSizeEl.classList.remove("size-button");
    XsSizeEl.classList.add("normal-button");
    MSizeEl.classList.add("normal-button");
    LSizeEl.classList.add("normal-button");
    SSizeEl.classList.add("normal-button");
};

BrownCircleEl.onclick = function() {
    ColorTextEl.textContent = "Brown";
    BrownCircleEl.classList.add("color-button");
    BrownCircleEl.classList.remove("normal-button");
    OrangeCircleEl.classList.add("normal-button");
    GreenCircleEl.classList.add("normal-button");
    BlueCircleEl.classList.add("normal-button");
    OrangeCircleEl.classList.remove("color-button");
    GreenCircleEl.classList.remove("color-button");
    BlueCircleEl.classList.remove("color-button");
};
GreenCircleEl.onclick = function() {
    ColorTextEl.textContent = "Green";
    GreenCircleEl.classList.add("color-button");
    GreenCircleEl.classList.remove("normal-button");
    BrownCircleEl.classList.add("normal-button");
    OrangeCircleEl.classList.add("normal-button");
    BlueCircleEl.classList.add("normal-button");
    OrangeCircleEl.classList.remove("color-button");
    BrownCircleEl.classList.remove("color-button");
    BlueCircleEl.classList.remove("color-button");
};
OrangeCircleEl.onclick = function() {
    ColorTextEl.textContent = "Orange";
    OrangeCircleEl.classList.add("color-button");
    OrangeCircleEl.classList.remove("normal-button");
    BrownCircleEl.classList.add("normal-button");
    GreenCircleEl.classList.add("normal-button");
    BlueCircleEl.classList.add("normal-button");
    BrownCircleEl.classList.remove("color-button");
    GreenCircleEl.classList.remove("color-button");
    BlueCircleEl.classList.remove("color-button");
};


BlueCircleEl.onclick = function() {
    ColorTextEl.textContent = "Blue";
    BlueCircleEl.classList.add("color-button");
    BlueCircleEl.classList.remove("normal-button");
    BrownCircleEl.classList.add("normal-button");
    GreenCircleEl.classList.add("normal-button");
    OrangeCircleEl.classList.add("normal-button");
    OrangeCircleEl.classList.remove("color-button");
    GreenCircleEl.classList.remove("color-button");
    BrownCircleEl.classList.remove("color-button");
};

AddCartEl.onclick = function() {
    alert("The product has been added to the cart");
};

PlusEl.onclick = function() {
    let items = parseInt(ItemsCountEl.textContent);
    let totalitems = items + 1;
    ItemsCountEl.textContent = totalitems;
};

MinsEl.onclick = function() {
    let previousItemsCount = parseInt(ItemsCountEl.textContent);
    if (previousItemsCount < 2) {
        ItemsCountEl.textContent = 1;
    } else {
        ItemsCountEl.textContent = previousItemsCount - 1;
    }
};
