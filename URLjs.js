



async function ShortenUrl() {
    const Url = document.getElementById("longurl").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`);
    if (response.ok) {
        const data = await response.text();
        document.getElementById('result').innerHTML = `
        shortend URL : <a href="${data }" target="_blank">${data}</a>`;
    }
    else{
        document.getElementById('result').innerHTML = "Error shortening"
    }

}