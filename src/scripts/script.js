//Copy to Clipboard Button Execution
document.getElementById("copy_button").addEventListener("click", () => {
    const text = document.getElementById('P_D');
    text.select();
    //Copy the generated password into clipboard
    navigator.clipboard.writeText(text.value);
});
//Domain extractor Function
chrome.tabs.query({'active': true, 'currentWindow': true}, function (tab) {
    if (tab) {
        const url = tab[0].url;
        //Extract current website
        let domain = (new URL(url));
        //Extract the domain of the current website
        domain = domain.hostname;
        //Set the domain as the domain input field value
        document.getElementById('url').value = domain;
    } else {
      document.getElementById("url").value = '<span class="error">no active tab</span>';
    }
});
//Account button execution
document.getElementById("account").addEventListener("click", () => {
    const domain = document.getElementById("url").value;
    const password = document.getElementById("P_D").value;
    //Redirect to Login page to retrieve Login Credential
    var url = "https://thivaagar28.github.io/Autenticacion-Password-Manager-Web-Application.github.io/?domain="+domain+"&password="+password;
    window.open(url);
})