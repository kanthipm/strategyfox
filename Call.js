function Call(){
  let bname = document.getElementById("brand").value;
  let industry = document.getElementById("industry").value;
  let pname = document.getElementById("product").value;
  let disc = document.getElementById("discount").value;
  let dd = document.getElementById("details").value;
  var prompt = "test";
  if(disc == "Yes")
  {
   prompt = "Create a 75 word or less social media caption for " 
    + bname 
    + ". They are currently trying to promote their product " 
    + pname 
    + ". To do so they are running a promotion. Their product "
    + pname 
    + " is currently being sold at a discount of " 
    + dd 
    + ". Make sure to include their industry "
    + industry 
    + " in the post."
  }
  else
  {
      prompt = "Create a 75 word or less social media caption for " 
    + bname 
    + ". They are currently trying to promote their product " 
    + pname 
    + ". Make sure to include their industry "
    + industry 
    + " in the post."
  }


  const url = "https://diigtest.openai.azure.com/openai/deployments/gpt-35-turbo-default/completions?api-version=2023-05-15";

  const data = `{"prompt": "${prompt}",
  "max_tokens":106}`;
  
  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'api-key': '6280d74bdb2d4afd8ee1c4442e3d1c90',
      },
      body: data,
  }).then(response => {return response.json()}).then(res=>{return res.choices[0].text}).then(reply => {document.getElementById('result').innerText = reply});
  

}
