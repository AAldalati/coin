const searchBar = document.getElementById('search_bar');
const output = document.getElementById('search_product');
const div = document.getElementById('div');

document.querySelector('button').addEventListener('click', () => {
    if(searchBar.value = '50 cent erou'){
        div.style.display = 'none';
        output.innerHTML = ` <br>
            <img src="download.jpg" alt="the 12 star 50 cent erou" /*style="width: ,height: "*/> <br>
            year: 2019 <br>
            unuiqueness: 12 stars instead of 11 <br>
            reason: catalonia geting its independence from spain that year and after that reuniting with spain because of economic problems <br>
            value: 1000$ - 2000$ <br>
            metal type: cooper <br>
            country: euroupean union <br>
            made in: spain <br>
        `
    }
});