let quoteID = document.getElementById('quoteID');
let authorID = document.getElementById('authorID');
let bgID = document.getElementById('bgID');

async function getQoute() {

    try {
        quoteID.innerHTML = "Loading...";
        authorID.innerHTML = "Loading..";

        let result = await fetch('https://dummyjson.com/quotes/random')

        let data = await result.json();

        console.log(data);
        console.log(data.quote);

        quoteID.classList.remove('fade-in');
        authorID.classList.remove('fade-in');

        void quoteID.offsetWidth;

        quoteID.innerHTML = data.quote;
        authorID.innerHTML = data.author;

        quoteID.classList.add('fade-in');
        authorID.classList.add('fade-in');

    } catch (error) {
        console.log("Error" + error);

    }


}

getQoute();

// efek pelangi mengikuti pergerakan cursor — hanya kena ke background
document.addEventListener('mousemove', function (event) {
    let hue = (event.clientX / window.innerWidth) * 360;
    bgID.style.setProperty('--hue', hue);
});