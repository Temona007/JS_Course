/* ====== Progress Pricing Calculator ========= */
// function avvirCalc() {

	// style
	document.getElementById('project_price').style.color  = "#90CAF9";
	document.getElementById('project_type').style.color   = "#66BB6A";


	/* Variables */
	var project_feet = document.getElementById('project_feet').value;
	var project_type = document.getElementById('project_type').value;
	var scan_area    = document.getElementById('scan_area').value;

	var progress         = 10000;
	var progress_5d      = 20000;
	var inspect_final    = 30000;
	var inspect_snapshot = 40000;

	var progress_zero 		  = 0;
	var progress_5d_zero 	  = 0;
	var inspect_final_zero    = 0;
	var inspect_snapshot_zero = 0;

	document.getElementById("progress").innerHTML         = "$" + progress.toLocaleString("en-US");
	document.getElementById("progress_5d").innerHTML      = "$" + progress_5d.toLocaleString("en-US");
	document.getElementById("inspect").innerHTML          = "$" + inspect_final.toLocaleString("en-US");
	document.getElementById("inspect_snapshot").innerHTML = "$" + inspect_snapshot.toLocaleString("en-US");

	
	// "PROGRESS" clicked
	document.getElementById('card-analysys-1-1').onclick = function() {
		progress_zero = progress;
		console.log(progress_zero); // working
	} 
	// "PROGRESS 5D" clicked
	document.getElementById('card-analysys-2-2').onclick = function() {
		progress_5d_zero = progress_5d;
	} 
	// "INSPECT" clicked
	document.getElementById('card-analysys-3-3').onclick = function() {
		inspect_final_zero = inspect_final;
	}
	// "INSPECT SNAPSHOT" clicked
	document.getElementById('card-analysys-4-4').onclick = function() {
		inspect_snapshot_zero = inspect_snapshot;  
	}

	// Result 
	var product_price_sum = progress_zero + progress_5d_zero + inspect_final_zero + inspect_snapshot_zero;
	document.getElementById("project_price").innerHTML = "$" + product_price_sum.toLocaleString("en-US");
// }


