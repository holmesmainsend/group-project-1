// 






//Sean's code to go here 







//
var countryCurrencyArray = [
    {"name": "country", "code": "3 letter abbreviation"},
    {"name": "Afghanistan", "971": "AFN"},
    {"name": "Ailand Islands","978": "EUR"},
    {"name": "Albania","008": "ALL"},
    {"name": "Algeria","012": "DZD"},
    {"name": "American Samoa","840": "USD"},
    {"name": "Andorra","978": "EUR"},
    {"name": "Angola","": ""},
    {"name": "Anguilla","951": "XCD"},
    {"name": "Argentina","032": "ARS"},
    {"name": "Armenia","051": "AMD"},
    {"name": "Aruba","533": "AWG"},
    {"name": "Australia","036": "AUD"},
    {"name": "Austria","978": "EUR"},
    {"name": "Azerbaijan","944": "AZN"},
    {"name": "Bahamas (The)","044": "BSD"},
    {"name": "Bahrain","048": "BHD"},
    {"name": "Bangladesh","050": "BDT"},
    {"name": "Barbados","052": "BBD"},
    {"name": "Belarus","933": "BYN"},
    {"name": "Belgium","978": "EUR"},
    {"name": "Belize","084": "BZD"},
    {"name": "Benin","952": "XOF"},
    {"name": "Bermuda","060": "BMD"},
    {"name": "Bhutan","356": "INR"},
    {"name": "Bolivia","984": "BOV"},
    {"name": "Bonaire, Sint Eustatius and Saba","840": "USD"},
    {"name": "Bosnia and Herzegovina","977": "BAM"},
    {"name": "Botswanna","977": "BAM"},
    {"name": "Bouvet Island","578": "NOK"},
    {"name": "Brazil","986": "BRL"},
    {"name": "British Indian Ocean Territory (The)","840": "USD"},
    {"name": "Brunei Darussalam","096": "BND"},
    {"name": "Bulgaria","975": "BGN"},
    {"name": "Burkina Faso","952": "XOF"},
    {"name": "Cabo Verde","132": "CVE"},
    {"name": "Cambodia","116": "KHR"},
    {"name": "Cameroon","950": "XAF"},
    {"name": "Canada","124": "CAD"},
    {"name": "Cayman Islands (The)","136": "KYD"},
    {"name": "Central African Republic (The)","950": "XAF"},
    {"name": "Chad","950": "XAF"},
    {"name": "Chile","152": "CLP"},
    {"name": "China","156": "CNY"},
    {"name": "Christmas Island","036": "AUD"},
    {"name": "Cocos Islands (The)","036": "AUD"},
    {"name": "Colombia","170": "COP"},
    {"name": "Comoros (The)","174": "KMF"},
    {"name": "Congo (The Democratic Republic Of)","976": "CDF"},
    {"name": "Cook Islands (The)","554": "NZD"},
    {"name": "Costa Rica","188": "CRC"},
    {"name": "Cote D'Ivoire","952": "XOF"},
    {"name": "Croatia","191": "HRK"},
    {"name": "Cuba","192": "CUP"},
    {"name": "Curacao","532": "ANG"},
    {"name": "Cyprus","978": "ANG"},
    {"name": "Czechia","203": "CZK"},
    {"name": "Denmark","208": "DKK"},
    {"name": "DJibouti","262": "DJF"},
    {"name": "Dominica","951": "XCD"},
    {"name": "Dominican Republic (The)","214": "DOP"},
    {"name": "Ecuador","840": "USD"},
    {"name": "Egypt","818": "EGP"},
    {"name": "El Salvador","222": "SVC"},
    {"name": "Equatorial Guinea","950": "XAF"},
    {"name": "Eritrea","232": "ERN"},
    {"name": "Estonia","978": "EUR"},
    {"name": "Ethiopia","230": "ETB"},
    {"name": "European Union","978": "EUR"},
    {"name": "Falkland Islands (The)","238": "FKP"},
    {"name": "Faroe Islands (The)","208": "DKK"},
    {"name": "Fiji","242": "FJD"},
    {"name": "Finland","978": "EUR"},
    {"name": "France","978": "EUR"},
    {"name": "French Guiana","978": "EUR"},
    {"name": "French Polynesia","953": "XPF"},
    {"name": "French Southern Territories (The)","978": "EUR"},
    {"name": "Gabon","950": "XAF"},
    {"name": "Gambia","270": "GMD"},
    {"name": "Georgia","981": "GEL"},
    {"name": "Germany","978": "EUR"},
    {"name": "Ghana","936": "GHS"},
    {"name": "Gibraltar","292": "GIP"},
    {"name": "Greece","978": "EUR"},
    {"name": "Greenland","208": "DKK"},
    {"name": "Grenada","951": "XCD"},
    {"name": "Guadeloupe","978": "EUR"},
    {"name": "Guam","840": "USD"},
    {"name": "Guatemala","320": "GTQ"},
    {"name": "Guernsey","826": "GBP"},
    {"name": "Guinea","324": "GNF"},
    {"name": "Guinea-Bissau","952": "XOF"},
    {"name": "Guyana","328": "GYD"},
    {"name": "Haiti","332": "HTG"},
    {"name": "Honduras","340": "HNL"},
    {"name": "Hong Kong","344": "HKD"},
    {"name": "Hungary","348": "HUF"},
    {"name": "Iceland","352": "ISK"},
    {"name": "India","356": "INR"},
    {"name": "Indonesia","360": "IDR"},
    {"name": "Iran (Islamic Republic of)","364": "IRR"},
    {"name": "Iraq","368": "IQD"},
    {"name": "Ireland","978": "EUR"},
    {"name": "Isle of Man","826": "GBP"},
    {"name": "Israel","376": "ILS"},
    {"name": "Italy","978": "EUR"},
    {"name": "Jamaica","388": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},
    {"name": "","": ""},

]
var currencyExchange = $("#placeholder");
var key = "api_key=zdMueq5BDFXftxiDgJ57t4FJu7qQ7N";
var apiURL = "https://www.amdoren.com/api/currency.php?"

// example URL string: https://www.amdoren.com/api/currency.php?api_key=zdMueq5BDFXftxiDgJ57t4FJu7qQ7N (USD to EUR)
// https://www.amdoren.com/api/currency.php?api_key=IBZzdLmM2yCYaXjgTZ6x&from=EUR&to=GBP&amount=50 (EUR to GBP, amount is 50)

function getExchangeRates() {
    // grab data attribute
    var currencyA = inputOldCurrency.selectedOptions[0].dataset.name;
    var currencyB = inputNewCurrency.selectedOptions[0].dataset.name;
    // grab html elements
    fromCurrencyText = document.querySelector("#fromCurrency");
    toCurrencyText = document.querySelector("#toCurrency");
    // update
    fromCurrencyText.innerHTML = currencyA;
    toCurrencyText.innerHTML = currencyB;
}


function exchangeCurrency() {
    var numberInput = $("#numberInput")
    var exchangeCurrency = apiURL + key + "&from=" + currencyA + "&to=" + currencyB + "&amount=" + numberInput
    $.ajax({
        url: apiURL,
        method: "GET"
    }).then(function())
}

getExchangeRates();

