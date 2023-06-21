async function request() {
    const input = document.querySelector("#input").value
    const first = document.querySelector("#first").value
    const second = document.querySelector("#second").value

    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
    	method: 'POST',
    	headers: {
    		'content-type': 'application/x-www-form-urlencoded',
    		'Accept-Encoding': 'application/gzip',
    		'X-RapidAPI-Key': 'c601b0c8d8mshbaa580dc64476cdp19ec2djsne8b9bde08b2a',
    		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    	},
    	body: new URLSearchParams({
    		source: first,
    		target: second,
    		q: input
    	})
    };
    
    try {
    	const response = await fetch(url, options);
    	const result = await response.text();
        const resultadoConvertido = JSON.parse(result)
    	console.log(resultadoConvertido);
        document.getElementById("result").innerHTML = resultadoConvertido.data.translations[0].translatedText
    } catch (error) {
    	console.error(error);
    }
}
