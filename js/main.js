function myDisplayer(some) {
    document.getElementById("text").innerHTML = some;
}

let date = 4
let days = true;
if (date < 3) {
    days = false
}

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (days) {
            setTimeout(() => {
                resolve(work())
            },time)
        }
    })
}

order(2000, () => myDisplayer("7.00 - 8.00 - uyg'onish, ertalabki mashqlar, yuvish;"))
    .then(() => {
    return order(2000, ()=> myDisplayer("8.00 - 8.40 - nonushta;"))
    })
    .then(() => {
    return order(3000, ()=> myDisplayer("9.10 - 10.00 - o'yinlar va rivojlanish tadbirlari;"))
    })
    .then(() => {
    return order(5000, ()=> myDisplayer("10.10 - 12.00 - toza havoda yurish va o'yinlar;"))
    })
    .then(() => {
    return order(3000, ()=> myDisplayer("12.30 - 13.20 - tushlik;"))
    })
    .then(() => {
    order(5000, () => myDisplayer("13.30 - 15.30 - kunduzgi uyqu (ochiq deraza, deraza yoki verandada);"))
    })
    .then(() => {
    return order(5000, ()=> myDisplayer("15.00 - 16.00 - sokin o'yinlar uchun bo'sh vaqt va tushdan keyin gazak uchun tayyorgarlik;"))
    })
    .then(() => {
    return order(3000, ()=> myDisplayer("16.00 - 16.30 - tushdan keyin choy;"))
    })
    .then(() => {
        return order(3000, ()=> myDisplayer("16.30 - 17.30 - o'quv o'yinlari;"))
    })
    .then(() => {
        return order(5000, ()=> myDisplayer("17.30 - 19.00 - toza havoda yurish va o'yinlar;"))
    })
    .then(() => {
        return order(3000, ()=> myDisplayer("19.00 - 19.30 - kechki ovqat;"))
    })
    .then(() => {
        return order(5000, ()=> myDisplayer("19.00 - 21.00 - bo'sh vaqt, sokin o'yinlar;"))
    })
    .catch(() => {
    myDisplayer("21.00 - 21.30 - cho'milish, yotishga tayyorgarlik;");
    })
    .finally(() => {
    myDisplayer("21.30 - 7.00 - tungi uyqu.");
})

order()