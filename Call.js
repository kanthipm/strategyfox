function Call(){
  let bname = document.getElementById("brand").value;
  let bdomain = document.getElementById("domain").value;
  let pname = document.getElementById("product").value;
  let disc = document.getElementById("discount").value;
  let dd = document.getElementById("details").value;
  if(disc == "Yes")
  {
  let prompt = "Create an Instagram Marketing post for " 
    + bname 
    + ". They are currenlty trying to promote thier product " 
    + pname 
    + ". To do so they are running a promotion. Their product "
    + pname 
    + " is currently being sold at a discount of " 
    + dd 
    + ". Make sure to include their domain name "
    + bdomain 
    + " in the post."
  }
  else
  {
      let prompt = "Create an Instagram Marketing post for " 
    + bname 
    + ". They are currenlty trying to promote thier product " 
    + pname 
    + ". Make sure to include their domain name "
    + bdomain 
    + " in the post."
  }

  fetch("https://diigtest.openai.azure.com/").then(response => {return response.text()}).then(reply => {document.getElementById('result').src = reply})
}
