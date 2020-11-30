document.getElementById("CHECK").addEventListener("click", function() {
    document.getElementById("CHECK").removeEventListener
    getCompanies();
  }); 


async function getCompanies() {
    const GPA_ = document.getElementById('GPA').value;
	const res = await fetch('data.json');
    const companies = await res.json();
    check(companies,GPA_);
}


function check(companies,GPA){
        const eligible = document.getElementById('eligible');
        eligible.innerHTML="";
        companies.forEach(_company => {
        const _eligible = document.createElement("div");
            if(+GPA >= _company.gpa){
                _eligible.innerHTML = `
                     <img width=100 src="${_company.img}" alt="">
                `;
                eligible.appendChild(_eligible);
            }
            
        });
    
}