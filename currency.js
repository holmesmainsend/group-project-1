// currency.js by Nicholas Mendez
// global variables
var countryInput = document.querySelector("#ipt-country");
var submitButton = document.querySelector("#submit-btn");
var currencyDisplay = document.querySelector("#currency-display");
var priorSearchContainer = document.querySelector("#prev-searches-display");
// country currency array codes
var countryCurrencyArray = [
    {name: "afghanistan", code : "AFN"},
    {name: "ailand islands", code: "EUR"},
    {name: "albania", code: "ALL"},
    {name: "algeria", code: "DZD"},
    {name: "american samoa", code: "USD"},
    {name: "andorra", code: "EUR"},
    {name: "angola", code: "AOA"},
    {name: "anguilla", code: "XCD"},
    {name: "argentina", code: "ARS"},
    {name: "armenia", code: "AMD"},
    {name: "aruba", code: "AWG"},
    {name: "australia", code: "AUD"},
    {name: "austria", code: "EUR"},
    {name: "azerbaijan", code: "AZN"},
    {name: "bahamas, the", code: "BSD"},
    {name: "bahrain", code: "BHD"},
    {name: "bangladesh", code: "BDT"},
    {name: "barbados", code: "BBD"},
    {name: "belarus", code: "BYN"},
    {name: "belgium", code: "EUR"},
    {name: "belize", code: "BZD"},
    {name: "benin", code: "XOF"},
    {name: "bermuda", code: "BMD"},
    {name: "bhutan", code: "INR"},
    {name: "bolivia", code: "BOV"},
    {name: "bonaire, sint eustatius and saba", code: "USD"},
    {name: "bosnia and herzegovina", code: "BAM"},
    {name: "botswanna", code: "BWP"},
    {name: "bouvet island", code: "NOK"},
    {name: "brazil", code: "BRL"},
    {name: "brunei darussalam", code: "BND"},
    {name: "bulgaria", code: "BGN"},
    {name: "burkina faso", code: "XOF"},
    {name: "cabo verde", code: "CVE"},
    {name: "cambodia", code: "KHR"},
    {name: "cameroon", code: "XAF"},
    {name: "canada", code: "CAD"},
    {name: "cayman islands, the", code: "KYD"},
    {name: "central african republic, the", code: "XAF"},
    {name: "chad", code: "XAF"},
    {name: "chile", code: "CLP"},
    {name: "china", code: "CNY"},
    {name: "christmas island", code: "AUD"},
    {name: "cocos islands, the", code: "AUD"},
    {name: "colombia", code: "COP"},
    {name: "comoros, the", code: "KMF"},
    {name: "congo, the democratic republic of", code: "CDF"},
    {name: "cook islands, the", code: "NZD"},
    {name: "costa rica", code: "CRC"},
    {name: "cote d'ivoire", code: "XOF"},
    {name: "croatia", code: "HRK"},
    {name: "cuba", code: "CUP"},
    {name: "curacao", code: "ANG"},
    {name: "cyprus", code: "ANG"},
    {name: "czechia", code: "CZK"},
    {name: "denmark", code: "DKK"},
    {name: "dJibouti", code: "DJF"},
    {name: "dominica", code: "XCD"},
    {name: "dominican republic, the", code: "DOP"},
    {name: "ecuador", code: "USD"},
    {name: "egypt", code: "EGP"},
    {name: "el salvador", code: "SVC"},
    {name: "equatorial guinea", code: "XAF"},
    {name: "eritrea","232": "ERN"},
    {name: "estonia", code: "EUR"},
    {name: "ethiopia", code: "ETB"},
    {name: "falkland islands, the", code: "FKP"},
    {name: "faroe islands, the", code: "DKK"},
    {name: "fiji", code: "FJD"},
    {name: "finland", code: "EUR"},
    {name: "france", code: "EUR"},
    {name: "french guiana", code: "EUR"},
    {name: "french polynesia", code: "XPF"},
    {name: "french southern territories, the", code: "EUR"},
    {name: "gabon", code: "XAF"},
    {name: "gambia", code: "GMD"},
    {name: "georgia", code: "GEL"},
    {name: "germany", code: "EUR"},
    {name: "ghana", code: "GHS"},
    {name: "gibraltar", code: "GIP"},
    {name: "greece", code: "EUR"},
    {name: "greenland", code: "DKK"},
    {name: "grenada", code: "XCD"},
    {name: "guadeloupe", code: "EUR"},
    {name: "guam", code: "USD"},
    {name: "guatemala", code: "GTQ"},
    {name: "guernsey", code: "GBP"},
    {name: "guinea", code: "GNF"},
    {name: "guinea-bissau", code: "XOF"},
    {name: "guyana", code: "GYD"},
    {name: "haiti", code: "HTG"},
    {name: "honduras", code: "HNL"},
    {name: "hong kong", code: "HKD"},
    {name: "hungary", code: "HUF"},
    {name: "iceland", code: "ISK"},
    {name: "india", code: "INR"},
    {name: "indonesia", code: "IDR"},
    {name: "iran, islamic republic of", code: "IRR"},
    {name: "iraq", code: "IQD"},
    {name: "ireland", code: "EUR"},
    {name: "isle of man", code: "GBP"},
    {name: "israel", code: "ILS"},
    {name: "italy", code: "EUR"},
    {name: "jamaica", code: "JMD"},
    {name: "japan", code: "JPY"},
    {name: "jersey", code: "GBP"},
    {name: "jordan", code: "JOD"},
    {name: "kazakhstan", code: "KZT"},
    {name: "kenya", code: "KES"},
    {name: "kiribati", code: "AUD"},
    {name: "north korea, the democratic people's republic of", code: "KPW"},
    {name: "korea, the republic of", code: "KRW"},
    {name: "kuwait", code: "KWD"},
    {name: "kyrgyzstan", code: "KGS"},
    {name: "lao people's democratic republic", code: "LAK"},
    {name: "latvia", code: "EUR"},
    {name: "lebanon", code: "LBP"},
    {name: "lesotho", code: "LSL"},
    {name: "liberia", code: "LRD"},
    {name: "libya", code: "LYD"},
    {name: "liechtenstein", code: "CHF"},
    {name: "lithuania", code: "EUR"},
    {name: "luxembourg", code: "EUR"},
    {name: "macao","446": "MOP"},
    {name: "macedonia", code: "MKD"},
    {name: "madagascar", code: "MGA"},
    {name: "malawi", code: "MWK"},
    {name: "malaysia", code: "MYR"},
    {name: "maldives", code: "MVR"},
    {name: "mali", code: "XOF"},
    {name: "malta", code: "EUR"},
    {name: "marshall islands", code: "USD"},
    {name: "martinique", code: "EUR"},
    {name: "mauritania", code: "MRU"},
    {name: "mauritius", code: "MUR"},
    {name: "mayotte", code: "EUR"},
    {name: "mexico", code: "MXN"},
    {name: "micronesia, federated states of", code: "USD"},
    {name: "moldova, the republic of", code: "MDL"},
    {name: "monaco", code: "EUR"},
    {name: "mongolia", code: "MNT"},
    {name: "montenegro", code: "EUR"},
    {name: "montserrat", code: "XCD"},
    {name: "morocco", code: "MAD"},
    {name: "mozambique", code: "MZN"},
    {name: "myanmar", code: "MMK"},
    {name: "namibia", code: "NAD"},
    {name: "nauru", code: "AUD"},
    {name: "nepal", code: "NPR"},
    {name: "netherlands", code: "EUR"},
    {name: "new caledonia", code: "XPF"},
    {name: "new zealand", code: "NZD"},
    {name: "nicaragua", code: "NIO"},
    {name: "niger", code: "XOF"},
    {name: "nigeria", code: "NGN"},
    {name: "niue", code: "NZD"},
    {name: "norfolk iland", code: "AUD"},
    {name: "northern mariana island", code: "USD"},
    {name: "norway", code: "NOK"},
    {name: "oman", code: "OMR"},
    {name: "pakistan", code: "PKR"},
    {name: "palau", code: "USD"},
    {name: "panama", code: "PAB"},
    {name: "papua new guinea", code: "PGK"},
    {name: "paraguay", code: "PYG"},
    {name: "peru", code: "PEN"},
    {name: "philippines, the", code: "PHP"},
    {name: "pitcairn", code: "NZD"},
    {name: "poland", code: "PLN"},
    {name: "portugal", code: "EUR"},
    {name: "puerto rico", code: "USD"},
    {name: "qatar", code: "QAR"},
    {name: "reunion", code: "EUR"},
    {name: "romania", code: "RON"},
    {name: "russia", code: "RUB"},
    {name: "rwanda", code: "RWF"},
    {name: "saint barthelemy", code: "EUR"},
    {name: "saint helena, ascension and tristan da cunha", code: "SHP"},
    {name: "saint kitts and nevis", code: "XCD"},
    {name: "saint lucia", code: "XCD"},
    {name: "saint martin (french part)", code: "EUR"},
    {name: "saint pierre and miquelon", code: "EUR"},
    {name: "saint vincent and the grenadines", code: "XCD"},
    {name: "samoa", code: "WST"},
    {name: "san marino", code: "EUR"},
    {name: "sao tome and principe", code: "STN"},
    {name: "saudi arabia", code: "SAR"},
    {name: "senegal", code: "XOF"},
    {name: "serbia", code: "RSD"},
    {name: "seychelles", code: "SCR"},
    {name: "sierra leone", code: "SLL"},
    {name: "singapore", code: "SGD"},
    {name: "sint maarten (dutch part)", code: "ANG"},
    {name: "slovakia", code: "EUR"},
    {name: "slovenia", code: "EUR"},
    {name: "solomon islands", code: "SBD"},
    {name: "somalia", code: "SOS"},
    {name: "south africa", code: "ZAR"},
    {name: "south sudan", code: "SSP"},
    {name: "spain", code: "EUR"},
    {name: "sri lanka", code: "LKR"},
    {name: "sudan, the", code: "SDG"},
    {name: "suriname", code: "SRD"},
    {name: "svalbard and jan mayen", code: "NOK"},
    {name: "eswatini", code: "SZL"},
    {name: "sweden", code: "SEK"},
    {name: "switzerland", code: "CHF"},
    {name: "syrian arab republic", code: "SYP"},
    {name: "taiwan", code: "TWD"},
    {name: "tajikistan", code: "TJS"},
    {name: "tanzania, united republic of", code: "TZS"},
    {name: "thailand", code: "THB"},
    {name: "timor-leste", code: "USD"},
    {name: "togo", code: "XOF"},
    {name: "tokelau", code: "NZD"},
    {name: "tonga", code: "TOP"},
    {name: "trinidad and tobago", code: "TTD"},
    {name: "tunisia", code: "TND"},
    {name: "turkey", code: "TRY"},
    {name: "turkmenistan", code: "TMT"},
    {name: "turks and caicos islands, the", code: "USD"},
    {name: "tuvalu", code: "AUD"},
    {name: "uganda", code: "UGX"},
    {name: "ukraine", code: "UAH"},
    {name: "united arab emirates, the", code: "AED"},
    {name: "united kingdom of great britain and northern ireland, the", code: "GBP"},
    {name: "united states of america, the", code: "USD"},
    {name: "uruguay", code: "UYU"},
    {name: "uzbekistan", code: "UZS"},
    {name: "vanuatu", code: "VUV"},
    {name: "venezuela, bolivarian republic of", code: "VES"},
    {name: "viet nam", code: "VND"},
    {name: "virgin islands", code: "USD"},
    {name: "wallis and futuna", code: "XPF"},
    {name: "western sahara", code: "MAD"},
    {name: "yemen", code: "YER"},
    {name: "zambia", code: "ZMW"},
    {name: "zimbabwe", code: "ZWL"},
];

// begins exchange rate function
function getExchangeRate() {
    // grab data attribute
    var countrySearch = countryInput.value.toLowerCase().trim()
    var currencyUSA = "USD";
    
    // fetch API to change currency rate from American Dollar (USD) to selected currency
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
        
    };

   // for (i = localStorage.length -1; i > 0 && i > localStorage.length - 6; i--) {
       // var priorSearch = document.createElement("button");
       // priorSearch.setAttribute("id", "prior-item")
       // priorSearch.textContent = localStorage.getItem([i]);
      //  priorSearch.appendChild(priorSearch);
      //  priorSearch.addEventListener("click", priorSearch)
  //  }

    if (countrySearch.length < 1) {
        return(null)
    } else {
        var countryCurrency = countryCurrencyArray.find(
            (element) => element.name === countrySearch
        );

        if (countryCurrency === void 0) {
            return(null)
        } else {
            var countryFind = countryCurrency.code;
        
    

    fetch("https://v1.nocodeapi.com/nmendez4/cx/jCgMPGVVYGVwqNwD/rates/convert?amount=1" + 
    "&from=" + currencyUSA +
    "&to=" + countryFind, requestOptions)
       // .then(response => response.text())
        .then(function(response){
            response.json().then(function(data){
                //console.log(data);
                // console.log(data.text)
                currencyDisplay.innerHTML = data.text
            })
        })
        // .then(result => console.log(result))
        .catch(error => console.log('error', error)); 

    }
    
  } 

}    

// add local storage

getExchangeRate();


submitButton.addEventListener("click", getExchangeRate);

// error codes
// 400 : Bad request.
// 403 : Authentication failed
// 404 : Resource is not found or requested format is incorrect
// 405 : Method is not allowed.
// 500 : Server error. We hope you will never see this error.
