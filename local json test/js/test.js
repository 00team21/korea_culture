function load() {
  var jsonData = JSON.parse(JSON.stringify(param));
  // console.log("[main] : [jsonData] : " + JSON.stringify(jsonData));
  // alert("[main] : [idx] : " + jsonData.DATA[1].addr);  
	// var mydata = JSON.parse(param);
	// alert(mydata[0]);
	// alert(mydata[0].age);

}


function run(gu){
  var jsonData = JSON.parse(JSON.stringify(param));
  var arr=[];
  for (i in jsonData.DATA){
    console.log(jsonData.DATA[i].addr+":"+gu.value)
    if(jsonData.DATA[i].addr.includes(gu.value)==1){
      arr.push(jsonData.DATA[i].addr)
    }
  }

  const element=document.getElementById('addr');

  if(arr.length>0){
    let s=""
    for (i in arr){
      s+=arr[i]+"<br>"
    }
    element.innerHTML=s;
  }
  else{
    element.innerText="검색결과없음"
  }
  
}