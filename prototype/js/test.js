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
            arr.push("출전문헌(년도): "+jsonData.Sheet1[i].출전문헌+" | "+jsonData.Sheet1[i].간행년도)
            arr.push("조리법<br>"+jsonData.Sheet1[i].조리법)
            arr.push("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
        }

    const element=document.getElementById('식품명');
    if(arr.length>0){
    let s=""

    for (i=0; i<10; i++){
      j=rand(0,(arr.length-2)/4);
      for(k=j*4; k<j*4+4; k++){
        s+=arr[k]+"<br><br>"
      }
    }
    element.innerHTML=s;
  }
}

function load_f(){
  var jsonData = JSON.parse(JSON.stringify(f));
        var arr=[];
        for (i in jsonData.Sheet2){
            console.log(jsonData.Sheet2[i].식품명+":"+jsonData.Sheet2[i].조리법)
            jsonData.Sheet2[i].식품명=="비빔밥"?arr.push(jsonData.Sheet2[i].식품명+"("+'"'+jsonData.Sheet2[i].영문음가+'"'+")"):
            arr.push(jsonData.Sheet2[i].식품명+"("+'"'+jsonData.Sheet2[i].영문음가+'"'+", "+jsonData.Sheet2[i].영문번역+")")
            arr.push("출전문헌(년도): "+jsonData.Sheet2[i].출전문헌+" | "+jsonData.Sheet2[i].간행년도)
            arr.push("조리법<br>"+jsonData.Sheet2[i].조리법)
            arr.push("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
        }

    const element=document.getElementById('식품명');
    if(arr.length>0){
    let s=""
    for (i=0; i<10; i++){
      j=rand(0,(arr.length-1)/4-1);
      for(k=j*4; k<j*4+4; k++){
        s+=arr[k]+"<br><br>"
      }
    }
    element.innerHTML=s;
  }
}
function rand(min,max){
  return Math.floor(Math.random()*(max-min)+1)+min;
}
