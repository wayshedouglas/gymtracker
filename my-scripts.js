//set count
if (localStorage.getItem("count")== null) {
	localStorage.setItem("count",0)}

	//update count
	function update() {

		document.getElementById("count").innerHTML = localStorage.getItem("count")
			}
update()

//add one to count
function plusOne(){localStorage.setItem("count",parseInt(localStorage.getItem("count"))+1)
update()
}
//this is to reset count
function reset(){
	if(confirm("Are you sure?")){
localStorage.setItem("count",0)
update()
	}
}