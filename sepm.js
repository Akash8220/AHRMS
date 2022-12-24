function reading(){
	age= parseInt(document.getElementById("age").value);
	r1= parseInt(document.getElementById("rate1").value);
	r2= parseInt(document.getElementById("rate2").value);
	r3= parseInt(document.getElementById("rate3").value);
	r4= parseInt(document.getElementById("rate4").value);
	emer= parseInt(document.getElementById("enumber").value);
	avg= (r1 + r2 + r3 + r4)/4;
	maxHR = 220 - age;
	if(age>=12 && age<=19){
		if(r1<60||r1>200||r2<60||r2>200||r3<60||r3>200||r4<60||r4>200){
			print="Predicted Maximum HR: 200"+
			"<br>Predicted Lowest HR:60"
			+"<br>calling emergency numbers:"+emer;
		}
		else{
			print="your average heart rate:"+avg
			+"<br>Check your heart rate time to time and maintain good diet";
		}
	}
	if(age>20 && age<=25){
		if(r1<60||r1>200||r2<60||r2>200||r3<60||r3>200||r4<60||r4>200){
			print="Predicted Maximum HR: 200"+
			"<br>Predicted Lowest HR:60"
			+"<br>calling emergency numbers:"+emer;
		}
		else{
		if(avg>maxHR || avg < 60){
			print="Target Heart Rate (HR) Zone (60-85%): ** 120 – 170"
			+"<br>Predicted Maximum HR: 200"
			+"<br>your average heart rate:"+avg
			+"<br>calling emergency numbers:"+emer;
		}
		else if(avg>120 && avg<170){
			print="Target Heart Rate (HR) Zone (60-85%): ** 120 – 170"
			+"<br>Predicted Maximum HR: 200"
			+"<br>your average heart rate:"+avg
			+"<br>Keep moving on. . . ";
		}
		else if(avg>170 && avg<200){
			print="Target Heart Rate (HR) Zone (60-85%): ** 120-170"
			+"<br>Predicted Maximum HR: 200"
			+"<br>your average heart rate:"+avg
			+"<br>Check your heart rate time to time and maintain good diet";
		}
		else{
			print="Target Heart Rate (HR) Zone (60-85%): ** 120 – 170"
			+"<br>Predicted Maximum HR: 200"
			+"<br>your average heart rate:"+avg
			+"<br>You need to start an exercise program, you may need to slowly build up to your target heart rate zone";
		}
	}
	}
	if(age>26 && age<=30){
		if(r1<60||r1>200||r2<60||r2>200||r3<60||r3>200||r4<60||r4>200){
			print="Predicted Maximum HR: 200"+
			"<br>Predicted Lowest HR:60"
			+"<br>calling emergency numbers:"+emer;
		}
		else{
		if(avg>maxHR || avg < 60){
			print="Target Heart Rate (HR) Zone (60-85%): 117-166"
			+"<br>Predicted Maximum HR: 195"
			+"<br>your average heart rate:"+avg
			+"<br>calling emergency numbers:"+emer;
		}
		else if(avg>117 && avg<166){
			print="Target Heart Rate (HR) Zone (60-85%): 117-166"
			+"<br>Predicted Maximum HR: 195"
			+"<br>your average heart rate:"+avg
			+"<br>Keep moving on. . . ";
		}
		else if(avg>166 && avg<195){
			print="Target Heart Rate (HR) Zone (60-85%): 117-166"
			+"<br>Predicted Maximum HR: 195"
			+"<br>your average heart rate:"+avg
			+"<br>Check your heart rate time to time and maintain good diet";
		}
		else{
			print="Target Heart Rate (HR) Zone (60-85%): 117-166"
			+"<br>Predicted Maximum HR: 195"
			+"<br>your average heart rate:"+avg
			+"<br>You need to start an exercise program, you may need to slowly build up to your target heart rate zone";
		}
	}
	}
	if(age>31 && age<=40){
		if(r1<60||r1>200||r2<60||r2>200||r3<60||r3>200||r4<60||r4>200){
			print="Predicted Maximum HR: 200"+
			"<br>Predicted Lowest HR:60"
			+"<br>calling emergency numbers:"+emer;
		}
		else{
		if(avg>maxHR || avg < 60){
			print="Target Heart Rate (HR) Zone (60-85%): 108-153"
			+"<br>Predicted Maximum HR: 180"
			+"<br>your average heart rate:"+avg
			+"<br>calling emergency numbers:"+emer;
		}
		else if(avg>108 && avg<153){
			print="Target Heart Rate (HR) Zone (60-85%): 108-153"
			+"<br>Predicted Maximum HR: 180"
			+"<br>your average heart rate:"+avg
			+"<br>Keep moving on. . . ";
		}
		else if(avg>153 && avg<180){
			print="Target Heart Rate (HR) Zone (60-85%): 108-153"
			+"<br>Predicted Maximum HR: 180"
			+"<br>your average heart rate:"+avg
			+"<br>Check your heart rate time to time and maintain good diet";
		}
		else{
			print="Target Heart Rate (HR) Zone (60-85%): 108-153"
			+"<br>Predicted Maximum HR: 180"
			+"<br>your average heart rate:"+avg
			+"<br>You need to start an exercise program, you may need to slowly build up to your target heart rate zone";
		}
	}
	}
	if(age>41 && age<=50){
		if(r1<60||r1>200||r2<60||r2>200||r3<60||r3>200||r4<60||r4>200){
			print="Predicted Maximum HR: 200"+
			"<br>Predicted Lowest HR:60"
			+"<br>calling emergency numbers:"+emer;
		}
		else{
		if(avg>maxHR || avg < 60){
			print="Target Heart Rate (HR) Zone (60-85%): 102-145"
			+"<br>Predicted Maximum HR: 170"
			+"<br>your average heart rate:"+avg
			+"<br>calling emergency numbers:"+emer;
		}
		else if(avg>102 && avg<145){
			print="Target Heart Rate (HR) Zone (60-85%): 102-145"
			+"<br>Predicted Maximum HR: 170"
			+"<br>your average heart rate:"+avg
			+"<br>Keep moving on. . . ";
		}
		else if(avg>145 && avg<170){
			print="Target Heart Rate (HR) Zone (60-85%): 102-145"
			+"<br>Predicted Maximum HR: 170"
			+"<br>your average heart rate:"+avg
			+"<br>Check your heart rate time to time and maintain good diet";
		}
		else{
			print="Target Heart Rate (HR) Zone (60-85%): 102-145"
			+"<br>Predicted Maximum HR: 170"
			+"<br>your average heart rate:"+avg
			+"<br>You need to start an exercise program, you may need to slowly build up to your target heart rate zone";
		}
	}
	}
	if(age>51 && age<=60){
		if(r1<60||r1>200||r2<60||r2>200||r3<60||r3>200||r4<60||r4>200){
			print="Predicted Maximum HR: 200"+
			"<br>Predicted Lowest HR:60"
			+"<br>calling emergency numbers:"+emer;
		}
		else{
		if(avg>maxHR || avg < 60){
			print="Target Heart Rate (HR) Zone (60-85%): 96-136"
			+"<br>Predicted Maximum HR: 160"
			+"<br>your average heart rate:"+avg
			+"<br>calling emergency numbers:"+emer;
		}
		else if(avg>96 && avg<136){
			print="Target Heart Rate (HR) Zone (60-85%): 96-136"
			+"<br>Predicted Maximum HR: 160"
			+"<br>your average heart rate:"+avg
			+"<br>Keep moving on. . . ";
		}
		else if(avg>137 && avg<160){
			print="Target Heart Rate (HR) Zone (60-85%): 96-136"
			+"<br>Predicted Maximum HR: 160"
			+"<br>your average heart rate:"+avg
			+"<br>Check your heart rate time to time and maintain good diet";
		}
		else{
			print="Target Heart Rate (HR) Zone (60-85%): 96-136"
			+"<br>Predicted Maximum HR: 160"
			+"<br>your average heart rate:"+avg
			+"<br>You need to start an exercise program, you may need to slowly build up to your target heart rate zone";
		}
	}
	}
	if(age>61 && age<=70){
		if(r1<60||r1>200||r2<60||r2>200||r3<60||r3>200||r4<60||r4>200){
			print="Predicted Maximum HR: 200"+
			"<br>Predicted Lowest HR:60"
			+"<br>calling emergency numbers:"+emer;
		}
		else{
		if(avg>maxHR || avg < 60){
			print="Target Heart Rate (HR) Zone (60-85%): 90-128"
			+"<br>Predicted Maximum HR: 150"
			+"<br>your average heart rate:"+avg
			+"<br>calling emergency numbers:"+emer;
		}
		else if(avg>90 && avg<128){
			print="Target Heart Rate (HR) Zone (60-85%): 90-128"
			+"<br>Predicted Maximum HR: 150"
			+"<br>your average heart rate:"+avg
			+"<br>Keep moving on. . . ";
		}
		else if(avg>129 && avg<150){
			print="Target Heart Rate (HR) Zone (60-85%): 90-128"
			+"<br>Predicted Maximum HR: 150"
			+"<br>your average heart rate:"+avg
			+"<br>Check your heart rate time to time and maintain good diet";
		}
		else{
			print="Target Heart Rate (HR) Zone (60-85%): 90-128"
			+"<br>Predicted Maximum HR: 150"
			+"<br>your average heart rate:"+avg
			+"<br>You need to start an exercise program, you may need to slowly build up to your target heart rate zone";
		}
	}
	}
	document.getElementById("print").innerHTML = print;
}