window.onload = function(){
    const choose1=document.getElementById("choose_nature");
    choose1.addEventListener("click", function(){console.log("자연");showForm("자연")});
    const choose2=document.getElementById("choose_shopping");
    choose2.addEventListener("click", function(){console.log("쇼핑");showForm("쇼핑")});
    const choose3=document.getElementById("choose_culture");
    choose3.addEventListener("click", function(){console.log("문화");showForm("문화")});
}

function getSelectOption(){
    console.log("실행뿝")
    const element=document.getElementById('city');

    let s="<option>-선택: 현재 서울만 검색 가능합니다.-</option>"
    +"<option value='1'>서울</option>"
    +"<option value='2' disabled>부산</option>"
    +"<option value='3' disabled>대구</option>"
    +"<option value='4' disabled>인천</option>"
    +"<option value='5' disabled>광주</option>"
    +"<option value='6' disabled>대전</option>"
    +"<option value='7' disabled>울산</option>"
    +"<option value='8' disabled>강원</option>"
    +"<option value='9' disabled>경기</option>"
    +"<option value='10' disabled>경남</option>"
    +"<option value='11' disabled>경북</option>"
    +"<option value='12' disabled>전남</option>"
    +"<option value='13' disabled>전북</option>"
    +"<option value='14' disabled>제주</option>"
    +"<option value='15' disabled>충남</option>"
    +"<option value='16' disabled>충북</option>"

    element.innerHTML=s;
}


var cat1_num = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
var cat1_name = new Array('서울','부산','대구','인천','광주','대전','울산','강원','경기','경남','경북','전남','전북','제주','충남','충북');

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

cat2_num[9] = new Array(109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148);
cat2_name[9] = new Array('고양시 덕양구','고양시 일산구','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시 소사구','부천시 오정구','부천시 원미구','성남시 분당구','성남시 수정구','성남시 중원구','수원시 권선구','수원시 장안구','수원시 팔달구','시흥시','안산시 단원구','안산시 상록구','안성시','안양시 동안구','안양시 만안구','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','하남시','화성시','가평군','양주군','양평군','여주군','연천군','포천군');

cat2_num[10] = new Array(149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168);
cat2_name[10] = new Array('거제시','김해시','마산시','밀양시','사천시','양산시','진주시','진해시','창원시','통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양군','합천군');

cat2_num[11] = new Array(169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192);
cat2_name[11] = new Array('경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시 남구','포항시 북구','고령군','군위군','봉화군','성주군','영덕군','영양군','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군');

cat2_num[12] = new Array(193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214);
cat2_name[12] = new Array('광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군');

cat2_num[13] = new Array(215,216,217,218,219,220,221,222,223,224,225,226,227,228,229);
cat2_name[13] = new Array('군산시','김제시','남원시','익산시','전주시 덕진구','전주시 완산구','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군');

cat2_num[14] = new Array(230,231,232,233);
cat2_name[14] = new Array('서귀포시','제주시','남제주군','북제주군');

cat2_num[15] = new Array(234,235,236,237,238,239,240,241,242,243,244,245,246,247,248);
cat2_name[15] = new Array('공주시','논산시','보령시','서산시','아산시','천안시','금산군','당진군','부여군','서천군','연기군','예산군','청양군','태안군','홍성군');

cat2_num[16] = new Array(249,250,251,252,253,254,255,256,257,258,259,260);
cat2_name[16] = new Array('제천시','청주시 상당구','청주시 흥덕구','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','진천군','청원군');

function cat1_change(key){
    let s="<option>-선택-</option>"
    for (i in cat2_name[key]){
        s+="<option value='"+(++i)+"'>"+cat2_name[key][i-1]+"</option>"
    }

    // alert(s);
    const element=document.getElementById('country');
    element.innerHTML=s;
    
}

function printArea(c1,c2,categori){
    console.log("전달된카테고리:"+categori)
    alert(cat1_name[c1.value-1]+"/"+cat2_name[c1.value][c2.value-1]+"로 검색합니다");
    let city_name=cat1_name[c1.value-1]
    let country_name=cat2_name[c1.value][c2.value-1]
    
    getSpot(city_name,country_name,categori)
}

function getSpot(c1,c2,categori){
    var jsonData;
    if(categori=="자연"){
        jsonData = JSON.parse(JSON.stringify(nature));
    }
    else if(categori=="쇼핑"){
        jsonData = JSON.parse(JSON.stringify(shopping));
    }
    else{
        jsonData = JSON.parse(JSON.stringify(culture));
    }

    let s="";

    for(i in jsonData){
        if(jsonData[i].언어=="ko"&&((jsonData[i].주소.includes(c1)&&jsonData[i].주소.includes(c2))||
        (jsonData[i].신주소.includes(c1)&&jsonData[i].신주소.includes(c2)))){
            // console.log("테스트으"+jsonData[i])
            s+="<tr><td>"+jsonData[i].상호명+"</td>"+
            "<td>"+(jsonData[i].신주소!=""?jsonData[i].신주소:"(구주소)"+jsonData[i].주소)+"</td><td><a id='get_info"+i+"' href='#spot_modal' style='color:black;' data-bs-toggle='modal'>"
            +"자세히</a></td></tr>"
        }

        
    }

    const element=document.getElementById('nature_result');
    element.innerHTML=s;

    for (i in jsonData){
        if(jsonData[i].언어=="ko"&&((jsonData[i].주소.includes(c1)&&jsonData[i].주소.includes(c2))||
        (jsonData[i].신주소.includes(c1)&&jsonData[i].신주소.includes(c2)))){
            let data=jsonData[i];
            let id="get_info"+i;
            console.log(id+"가 가리키는 데이터의 상호명:"+jsonData[i].상호명);
            document.getElementById(id).addEventListener("click", function(){createModalContent(data)});
        }
    }
}

function createModalContent(data){
    console.log("상호명: "+data.상호명);
    let name=data.상호명;
    let addr=data.신주소!=""?data.신주소:data.주소;
    let tel=data.전화번호!=""?data.전화번호:"정보 없음";
    let time=data.운영시간!=""?data.운영시간:"정보 없음";
    let day=data.운영요일!=""?data.운영요일:"정보 없음";
    let url=data.웹사이트==""?
    "사이트 정보 없음":"<a href='"+data.웹사이트+"' target='_blank'>방문하기</a>";
    let traffic=data.교통정보!=""?data.교통정보:"정보 없음";

    const spot_name=document.getElementById("spot_name");
    spot_name.innerHTML=name;

    const spot_addr=document.getElementById("spot_addr");
    spot_addr.innerHTML=addr;

    const spot_tel=document.getElementById("spot_tel");
    spot_tel.innerHTML=tel;

    const spot_time=document.getElementById("spot_time");
    spot_time.innerHTML=time;

    const spot_day=document.getElementById("spot_day");
    spot_day.innerHTML=day;

    const spot_url=document.getElementById("spot_url");
    spot_url.innerHTML=url;

    const spot_traffic=document.getElementById("spot_traffic");
    spot_traffic.innerHTML=traffic;
}



function showForm_0(){
    const form=document.getElementById("test")
    const nature=document.getElementById("search_nature")
    
    //search_nature, search_shopping, search_culture 중 하나가 visible이면 검색창 보이기
    // if(form.style.visibility=="visible"){
    //     console.log("검색창 숨기기")
    //     form.style.visibility="collapse"
    // }
    // else{
    //     console.log("검색창 보이기")
    //     form.style.visibility="visible"
    // }

    console.log(nature)
}

function showForm(category){
    let cat=category;
    console.log("showForm실행")

    console.log(document.getElementById("search_shopping"))
    
    let form_tag="<form class='row justify-content-center'><div class='col-md-5 my-1'><select class='form-select bg-light' name='city' onChange='cat1_change(this.value)' id='city'></select></div><div class='col-md-6 my-1'><select class='form-select bg-light' name='country' id='country'><option>-선택-</option></select></div><!--제출버튼--><div class='col-md-1 my-1'><button class='btn btn-dark' type='button' value='submit' onclick='printArea(city,country,\""+cat+"\")' style='border-radius: 0; opacity: 0.7; width: 100%;'>...</button></div></form><!--검색결과--><div><table class='table table-hover table-light my-2'><thead><tr><th scope='col'>시설명</th><th scope='col'>주소</th><th scope='col'>자세히</th></tr></thead><tbody id='nature_result'></tbody></table></div>";
    
    document.getElementById("test").innerHTML=form_tag;
    console.log(document.getElementById("test"));

    getSelectOption();
}
//spot_nature
