<script>

    function sort_by_name(mensdata) {
        for (i = 0; i < mensdata.length; i++) {
            for (j = 0; j < mensdata.length - i - 1; j++) {
                str1 = mensdata[j].product_name
                str2 = mensdata[j + 1].product_name
                if (str1 > str2) {
                    temp = mensdata[j]
                    mensdata[j] = mensdata[j + 1]
                    mensdata[j + 1] = temp
                }
            }
        }
        return mensdata;
    }

    function sort_by_namerev(mensdata) {
        for (i = 0; i < mensdata.length; i++) {
            for (j = 0; j < mensdata.length - i - 1; j++) {
                str1 = mensdata[j].product_name
                str2 = mensdata[j + 1].product_name
                if (str1 < str2) {
                    temp = mensdata[j]
                    mensdata[j] = mensdata[j + 1]
                    mensdata[j + 1] = temp
                }
            }
        }
        return mensdata;
    }

    function mapping_data(mensdata) {
        mensdata.map(function (elm) {
            var div = document.createElement("div");
            div.setAttribute("class", "product_div");
            var image = document.createElement("img");
            image.setAttribute("src", elm.image);
            image.setAttribute("width", "100%");
            image.setAttribute("height", "70%");
            var name = document.createElement("p")
            name.textContent = elm.product_name;
            var rating = document.createElement("p")
            rating.textContent = elm.rating + " " + elm.review;
            rating.setAttribute("class", "bold")
            rating.style.fontWeight = 300
            var price = document.createElement("p")
            price.textContent = "$" + elm.price;
            price.setAttribute("id", "price");
            price.setAttribute("class", "bold")
            price.style.fontWeight = 300
            id_value = elm.product_name
            var btn = document.createElement("button");
            btn.textContent = "QUICK BUY";
            btn.setAttribute("id", id_value);
            btn.addEventListener("click", add_to_cart);

            div.append(image, name, rating, price, btn);
            document.querySelector(".container").append(div);
        })

    }

    function sortPrice() {

        var selected = document.querySelector("#short").value;
        document.querySelector(".container").textContent = "";
        if (selected == "1") {
            mensdata.sort(function (a, b) {
                return a.product_id - b.product_id;
            });
        }
        else if (selected == "2") {
            mensdata.sort(function (a, b) {
                return b.review - a.review;
            });
        }

        else if (selected == "3") {
            mensdata.sort(function (a, b) {
                return b.price - a.price;
            });
        }
        else if (selected == "4") {
            mensdata.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        else if (selected == "5") {
            mensdata = sort_by_name(mensdata)
        }
        else if (selected == "6") {
            mensdata = sort_by_namerev(mensdata)
        }

        mapping_data(mensdata)
    }
</script>