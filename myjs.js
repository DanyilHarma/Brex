
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


// Пытаюсь сделать вставку из массивов //
products = ["Overview", "Business account", "Credit card", "Rewards", "Financial modeling", "Expense tracking", "Spend management", "Bill pay", "Integrations", "Brex API", "Pro access", "Security"];
company = ["About Brex", "Careers", "Contact", "Press", "Blog"];
resource = ["Help", "Status", "Privacy", "Legal agreement", "Cookie preferences"];

function arrayPush(array, classElement) {
    let list = document.createElement("ul");
    array.forEach(function (item) {
        let listLi = document.createElement("li");
        listLi.classList.add("array");
        let linkList = document.createElement("a");
        linkList.href = "#";
        linkList.textContent = item;
        listLi.appendChild(linkList);
        list.appendChild(listLi);
    })
    document.querySelector(classElement).appendChild(list);
}

arrayPush(products, ".product");
arrayPush(company, ".company");
arrayPush(resource, ".resource");
