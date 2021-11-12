window.onload = function(){
  const region=document.getElementById("region");
  region.addEventListener("click", function(){showForm()});
}

function getSelectOption(){
  console.log("실행뿝")
  const element=document.getElementById('city');

  let s="<option>-선택-</option>"
  +"<option value='1'>서울</option>"
  +"<option value='2'>부산</option>"
  +"<option value='3'>대구</option>"
  +"<option value='4'>인천</option>"
  +"<option value='5'>광주</option>"
  +"<option value='6'>대전</option>"
  +"<option value='7'>울산</option>"
  +"<option value='8'>강원</option>"
  +"<option value='9'>경기</option>"
  +"<option value='10'>경상남도</option>"
  +"<option value='11'>경상북도</option>"
  +"<option value='12'>전라남도</option>"
  +"<option value='13'>전라북도</option>"
  +"<option value='14'>제주</option>"
  +"<option value='15'>충청남도</option>"
  +"<option value='16'>충청북도</option>"

  element.innerHTML=s;
}

var cat1_num = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
var cat1_name = new Array('서울','부산','대구','인천','광주','대전','울산','강원','경기','경상남도','경상북도','전라남도','전라북도','제주','충청남도','충청북도');

var cat2_num = new Array();
var cat2_name = new Array();

cat2_num[1] = new Array(17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41);
cat2_name[1] = new Array('강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구');

cat2_num[2] = new Array(42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57);
cat2_name[2] = new Array('강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군');

cat2_num[3] = new Array(58,59,60,61,62,63,64,65);
cat2_name[3] = new Array('남구','달서구','동구','북구','서구','수성구','중구','달성군');

cat2_num[4] = new Array(66,67,68,69,70,71,72,73,74,75);
cat2_name[4] = new Array('계양구','남구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군');

cat2_num[5] = new Array(76,77,78,79,80);
cat2_name[5] = new Array('광산구','남구','동구','북구','서구');

cat2_num[6] = new Array(81,82,83,84,85);
cat2_name[6] = new Array('대덕구','동구','서구','유성구','중구');

cat2_num[7] = new Array(86,87,88,89,90);
cat2_name[7] = new Array('남구','동구','북구','중구','울주군');

cat2_num[8] = new Array(91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108);
cat2_name[8] = new Array('강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천군','횡성군');

cat2_num[9] = new Array(109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139);
cat2_name[9] = new Array('고양시','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안성시','안양시','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','하남시','화성시','가평군','양주군','양평군','여주군','연천군','포천군');

cat2_num[10] = new Array(149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168);
cat2_name[10] = new Array('거제시','김해시','마산시','밀양시','사천시','양산시','진주시','진해시','창원시','통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양군','합천군');

cat2_num[11] = new Array(169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191);
cat2_name[11] = new Array('경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시','고령군','군위군','봉화군','성주군','영덕군','영양군','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군');

cat2_num[12] = new Array(193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214);
cat2_name[12] = new Array('광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군');

cat2_num[13] = new Array(215,216,217,218,219,220,221,222,223,224,225,226,227,228,229);
cat2_name[13] = new Array('군산시','김제시','남원시','익산시','전주시 덕진구','전주시 완산구','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군');

cat2_num[14] = new Array(230,231,232,233);
cat2_name[14] = new Array('서귀포시','제주시','남제주군','북제주군');

cat2_num[15] = new Array(234,235,236,237,238,239,240,241,242,243,244,245,246,247,248);
cat2_name[15] = new Array('공주시','논산시','보령시','서산시','아산시','천안시','금산군','당진군','부여군','서천군','연기군','예산군','청양군','태안군','홍성군');

cat2_num[16] = new Array(249,250,251,252,253,254,255,256,257,258,259);
cat2_name[16] = new Array('제천시','청주시','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','진천군','청원군');

function cat1_change(key){
    let s="<option>-선택-</option>"
    for (i in cat2_name[key]){
        s+="<option value='"+(++i)+"'>"+cat2_name[key][i-1]+"</option>"
    }
    const element=document.getElementById('country');
    element.innerHTML=s;
}

function printArea(c1,c2){
    // alert(cat1_name[c1.value-1]+"/"+cat2_name[c1.value][c2.value-1]+"로 검색합니다");
    let city_name=cat1_name[c1.value-1]
    let country_name=cat2_name[c1.value][c2.value-1]

    getFestivalRegion(city_name,country_name)
}

function getFestivalDate(d1){
  console.log(d1.value)
  let input_date=new Date(d1.value);
  // let input_end=new Date(d2.value);
  var jsonData=JSON.parse(JSON.stringify(festival.records));
  let s=""

  for (i in jsonData){
    var start=new Date(jsonData[i].축제시작일자);
    var end=new Date(jsonData[i].축제종료일자);
    if(start<=input_date&&end>=input_date){
      s+="<tr><td>"+jsonData[i].축제명+"</td>"+
                "<td>"+jsonData[i].개최장소
                +"</td><td>"+jsonData[i].축제시작일자+"~"+jsonData[i].축제종료일자+"</td><td><a id='get_info"+i+"' href='#fest_modal' style='color:black;' data-bs-toggle='modal'>"
                +"자세히</a></td></tr>"
    }
  }
  const element=document.getElementById('result2');
  if(s.length>0){
    element.innerHTML=s;
  }
      
  else{
      alert("검색결과 없음")
      element.innerHTML=s;
  }

  for (i in jsonData){
    var start=new Date(jsonData[i].축제시작일자);
    var end=new Date(jsonData[i].축제종료일자);
    if(start<=input_date&&end>=input_date){
      let data=jsonData[i];
      let id="get_info"+i;
      console.log(id+"가 가리키는 데이터의 축제명:"+jsonData[i].축제명);
      document.getElementById(id).addEventListener("click", function(){createModalContent(data)});
    }
  }
}

function getFestivalRegion(c1,c2){
  console.log(c1,c2)
  var jsonData=JSON.parse(JSON.stringify(festival.records));
  let s="";

  for (i in jsonData){
    var addr=(jsonData[i].소재지도로명주소!=null)?jsonData[i].소재지도로명주소:(jsonData[i].소재지지번주소!=null?jsonData[i].소재지지번주소:jsonData[i].주최기관);
    if((addr.includes(c1)&&addr.includes(c2))||(jsonData[i].개최장소.includes(c1)&&jsonData[i].개최장소.includes(c2))){
      s+="<tr><td>"+jsonData[i].축제명+"</td>"+
                "<td>"+jsonData[i].개최장소
                +"</td><td>"+jsonData[i].축제시작일자+"~"+jsonData[i].축제종료일자+"</td><td><a id='get_info"+i+"' href='#fest_modal' style='color:black;' data-bs-toggle='modal'>"
                +"자세히</a></td></tr>"
    }
  }
  const element=document.getElementById('result1');
  if(s.length>0){
    element.innerHTML=s;
  }
      
  else{
      alert("검색결과 없음")
      element.innerHTML=s;
  }

  for (i in jsonData){
    var addr=(jsonData[i].소재지도로명주소!=null)?jsonData[i].소재지도로명주소:(jsonData[i].소재지지번주소!=null?jsonData[i].소재지지번주소:jsonData[i].주최기관);
    if((addr.includes(c1)&&addr.includes(c2))||(jsonData[i].개최장소.includes(c1)&&jsonData[i].개최장소.includes(c2))){
      let data=jsonData[i];
      let id="get_info"+i;
      console.log(id+"가 가리키는 데이터의 축제명:"+jsonData[i].축제명);
      document.getElementById(id).addEventListener("click", function(){createModalContent(data)});
    }
  }
}

function showForm(){
  let form_tag="<form class='row justify-content-center'><div class='col-md-5 my-1'><select class='form-select bg-light' name='city' onChange='cat1_change(this.value)' id='city'></select></div><div class='col-md-6 my-1'><select class='form-select bg-light' name='country' id='country'><option>-선택-</option></select></div><!--제출버튼--><div class='col-md-1 my-1'><button class='btn btn-dark' type='button' value='submit' onclick='printArea(city,country)' style='border-radius: 0; opacity: 0.7; width: 100%;'>...</button></div></form><!--검색결과--><div><table class='table table-hover table-light my-2'><thead><tr><th scope='col'>축제명</th><th scope='col'>개최장소</th><th scope='col'>개최기간</th><th scope='col'>자세히</th></tr></thead><tbody id='result1'></tbody></table></div>";
  document.getElementById("test1").innerHTML=form_tag;
  removeChildrenAll("result2")
  getSelectOption();
}

function createModalContent(data,categori){
  let name=data.축제명;
  let addr=data.개최장소;
  let date=data.축제시작일자+"~"+data.축제종료일자
  let agency=data.주최기관;
  let url=(data.홈페이지주소!=""&&data.홈페이지주소!=null)?
  ((!data.홈페이지주소.includes("http"))?"<a href='http://"+data.홈페이지주소+"' target='_blank'>방문하기</a>":"<a href='"+data.홈페이지주소+"' target='_blank'>방문하기</a>"):"사이트 정보 없음";
  let info=(data.축제내용!=""&&data.축제내용!=null)?data.축제내용:"정보 없음";

  const fest_name=document.getElementById("fest_name");
  fest_name.innerHTML=name;

  const fest_addr=document.getElementById("fest_addr");
  fest_addr.innerHTML=addr;

  const fest_tel=document.getElementById("fest_date");
  fest_tel.innerHTML=date;

  const fest_time=document.getElementById("fest_agency");
  fest_time.innerHTML=agency;

  const fest_url=document.getElementById("fest_url");
  fest_url.innerHTML=url;

  const fest_info=document.getElementById("fest_info");
  fest_info.innerHTML=info;
}

function removeChildrenAll(id){
  const element=document.getElementById(id)
  while(element.hasChildNodes()){
      element.removeChild(element.firstChild)
  }
}