async function fetchHTML() {
    const response = await fetch("https://campaignbuilder-cf2fa.firebaseio.com/html/-Lp7yIrdSIs8vf0yGpq_.json");
    const json = await response.json();
    return json;
}

fetchHTML().then(html => {
    document.querySelector('#campaign-wrapper').innerHTML = html;
});