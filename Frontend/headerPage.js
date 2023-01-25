
// Function to handle category calls to the backend
function categoryAPICall(cat1_value){

    if (cat1_value=='men'){
        var cat2_value = document.getElementById("cats1").value;
    }
    else if(cat1_value){
        var cat2_value = document.getElementById("cats2").value;
    }
    else{
        var cat2_value = "";
    }
    
    window.parent.location=`Base.html?cat1=${cat1_value}&cat2=${encodeURIComponent(cat2_value)}&page=1`;
    
}


// Function to handle search query
function searchFunction(){
    
    var search_val = document.getElementById("search_val").value;
    if(search_val==""){
        search_val="*";
    }
    window.parent.location=`Base.html?q=${encodeURIComponent(search_val)}&page=1`;
    
}


window.onload=function(){
    var men_dropdown=document.getElementById("cats1");
    var women_dropdown=document.getElementById("cats2");
    fetch('https://b7c15b81-24ee-4a31-8be1-5d2b2304e9fb.mock.pstmn.io/subcategory-names', {
            method: 'GET',
            mode : 'cors',
                    headers: {
                'Access-Control-Allow-Origin':'*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
        }).then(response => response.json()).then((data)=>{
            console.log(data);
            for (const prod of data['men']){

                men_dropdown.innerHTML+=`
                <option value=${prod}>${prod}</option>`
            
            }
            for (const prod of data['women']){

                women_dropdown.innerHTML+=`
                <option value=${prod}>${prod}</option>`
            
            }
        }).catch(err=>{
            // window.location="Page500.html"
            console.log(err);
        });
}