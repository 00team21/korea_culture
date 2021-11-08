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
    console.log(jsonData.DATA[i].new_address+":"+gu.value)
    if(jsonData.DATA[i].new_address.includes(gu.value)==1){
      arr.push('<a href='+jsonData.DATA[i].cmmn_hmpg_url+'>'+jsonData.DATA[i].post_sj)
      arr.push(jsonData.DATA[i].new_address+" | "+jsonData.DATA[i].cmmn_rstde+" | "+jsonData.DATA[i].bf_desc)
      arr.push("---------------------------------------------------------------------------------------------------------------------------------------")
    }
  }

  const element=document.getElementById('new_address');

  if(arr.length>0){
    let s=""

    for (i in arr){
      s+=arr[i]+"<br><br>"
    }
    element.innerHTML=s;
  }
  else{
    element.innerText="검색결과없음"
  }
  
}

function load_d(){
  var jsonData = JSON.parse(JSON.stringify(d));
        var arr=[];
        for (i in jsonData.Sheet1){
            console.log(jsonData.Sheet1[i].식품명+":"+jsonData.Sheet1[i].조리법)
            arr.push(jsonData.Sheet1[i].식품명)
            arr.push(jsonData.Sheet1[i].출전문헌+" | "+jsonData.Sheet1[i].간행년도)
            arr.push(jsonData.Sheet1[i].조리법)
            arr.push("---------------------------------------------------------------------------------------------------------------------------------------")
        }

    const element=document.getElementById('식품명');
    if(arr.length>0){
    let s=""

    for (i in arr){
      s+=arr[i]+"<br><br>"
    }
    element.innerHTML=s;
  }
}