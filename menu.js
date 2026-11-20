/* ===== 메뉴 데이터 =====
   메뉴를 바꿀 때는 이 부분만 고치면 됩니다.
   price: 가격이 하나면 "4,700", 사이즈별이면 {R:"4,500", L:"5,100"}
   isNew: true 이면 NEW 표시 */
const OAT = "+오트밀크 변경 500원";
const JETBLACK = "[젯블랙] 브라질 40% 인도 30% 콜롬비아 30% · from 파슈어 커피로스터스";
const SUAN = "from 수안커피 컴퍼니";

const MENU = [
 { id:"coffee", title:"COFFEE", items:[
  { name:"아메리카노", opt:"hot/ice", en:"Americano", price:{R:"3,500",L:"4,100"}, desc:JETBLACK },
  { name:"카페라떼", opt:"hot/ice", en:"Cafe Latte", price:{R:"4,500",L:"5,100"}, desc:JETBLACK, add:OAT },
  { name:"바닐라 라떼", opt:"hot/ice", en:"Vanilla Latte", price:{R:"5,000",L:"5,600"}, desc:"찐~한 바닐라향과 은은한 단맛", add:OAT },
  { name:"돌체 라떼", opt:"hot/ice", en:"Dolce Latte", price:{R:"5,000",L:"5,600"}, desc:"연유가 들어간 부드러운 단맛의 라떼", add:OAT },
  { name:"디카페인 콜드브루", opt:"only ice", en:"Decaf Cold Brew", price:{R:"4,500",L:"5,100"}, desc:SUAN },
  { name:"디카페인 콜드브루 라떼", opt:"only ice", en:"Decaf Cold Brew Latte", price:{R:"5,500",L:"6,100"}, desc:SUAN, add:OAT },
  { name:"파라마운틴 아포가토", en:"Paramountain Affogato", price:"6,000", desc:"인디샷의 다크 에스프레소와 산처럼 쌓인 바닐라 아이스크림" },
  { name:"카푸치노", opt:"only hot", en:"Cappuccino", price:"4,700" },
  { name:"모카 라떼", opt:"hot/ice", en:"Mocha Latte", price:{R:"6,000",L:"6,600"}, desc:"인디샷만의 초코 베이스에 에스프레소를 더한 달콤쌉쌀 라떼" },
  { name:"인디 아인슈페너 10oz", opt:"hot/ice", en:"Indie Einspanner 10oz", price:"4,000", desc:"에스프레소 위 달콤한 수제크림과 상큼한 레몬 제스트의 풍미", add:"+디카페인 콜드브루 변경 1,000원" },
  { name:"솔티 카라멜 라떼", opt:"only ice", en:"Salty Caramel Latte", price:"5,700", desc:"핑크 솔트와 달콤한 카라멜, 부드러운 수제크림의 단짠 조화" },
  { name:"피넛 라떼", opt:"only ice", en:"Peanut Latte", price:"5,500", desc:"견과류가 씹히는 수제 땅콩크림에 에스프레소를 더한 고소 라떼" },
 ]},
 { id:"noncoffee", title:"NON COFFEE", items:[
  { name:"마틸다 딥 초코라떼", opt:"hot/ice", en:"Matilda Deep Choco Latte", price:{R:"6,000",L:"6,600"}, desc:"직접 만든 초콜릿 베이스로 찐~한 초코라떼 그 자체" },
  { name:"제주 말차 라떼", opt:"hot/ice", en:"Jeju Matcha Latte", price:{R:"6,000",L:"6,600"}, desc:"유기농 제주 말차와 부드러운 꿀이 들어간 달콤쌉쌀 말차라떼" },
  { name:"피넛 밀크", opt:"only ice", en:"Peanut Milk", price:"5,000", desc:"견과류가 씹히는 수제 땅콩크림이 들어간 달달고소 우유" },
 ]},
 { id:"ade", title:"ADE", items:[
  { name:"오패션 에이드", opt:"only ice", en:"Omija & Passion Fruit Ade", price:"6,500", desc:"문경 채춘식 농부가 직접 담근 오미자청과 패션후르츠가 들어간 에이드" },
  { name:"제주 청귤 에이드", opt:"only ice", en:"Jeju Green Tangerine Ade", price:"6,000", desc:"제주 산지 직송 청귤청이 듬뿍 들어간 상큼달달 에이드" },
  { name:"황금자 매실 에이드", opt:"only ice", en:"Maesil Ade (Green Plum)", price:"6,500", desc:"황금자 할머니가 직접 담근 매실액이 듬뿍 들어간 에이드" },
 ]},
 { id:"tea", title:"TEA", items:[
  { name:"더 허니", opt:"hot/ice", en:"The Honey (Chamomile Blend)", price:"4,500", desc:"[카페인 프리] 캐모마일, 허니부쉬, 사과, 바닐라향, 허니향 바닐라빈의 플레이버" },
  { name:"베리베리", opt:"hot/ice", en:"Berry Berry (Hibiscus Blend)", price:"4,500", desc:"히비스커스, 블랙베리 열매, 로즈힙 열매, 홍차" },
  { name:"백도 오룡", opt:"hot/ice", en:"White Peach Oolong", price:"5,000", desc:"대만 사계춘 품종 · 복숭아향 대만 우롱차의 신선한 감칠맛, 은은한 백도향" },
  { name:"페퍼민트", opt:"hot/ice", en:"Peppermint", price:"4,500", desc:"[카페인 프리] 유기농 페퍼민트" },
  { name:"루이보스", opt:"hot/ice", en:"Rooibos", price:"4,500", desc:"[카페인 프리] 유기농 루이보스" },
  { name:"피치 우롱 크림티", opt:"only ice", en:"Peach Oolong Cream Tea", price:"5,700", desc:"달콤한 복숭아 우롱티 위에 수제 치즈폼 한 스푼" },
  { name:"제주 청귤차", opt:"only hot", en:"Jeju Green Tangerine Tea", price:"6,000", desc:"제주 산지 직송 청귤청으로 만든 따뜻하고 상큼한 차" },
  { name:"오미자차", opt:"only hot", en:"Omija Tea", price:"6,500", desc:"문경 채춘식 농부가 직접 담근 오미자청으로 만든 따뜻한 차" },
  { name:"황금자 매실차", opt:"only hot", en:"Maesil Tea (Green Plum)", price:"6,500", desc:"황금자 할머니가 직접 담근 매실액이 들어간 따뜻한 매실차" },
 ]},
 { id:"dessert", title:"DESSERT", items:[
  { name:"티라미수", en:"Tiramisu", price:"5,500", isNew:true, desc:"에스프레소를 듬뿍 머금은 시트와 부드러운 크림, 쌉쌀한 코코아 파우더" },
  { name:"견과류 왕창 쿠키", en:"Mixed Nut Cookie", price:"4,000", desc:"6가지 견과류가 \"왕창\" 들어간 쿠키 (마카다미아, 아몬드, 크랜베리, 캐슈넛, 호박씨, 해바라기씨)" },
  { name:"초콜릿 피칸 쿠키", en:"Chocolate Pecan Cookie", price:"4,500", desc:"꾸덕한 다크 커버춰 초콜릿과 피칸이 \"왕창\" 들어간 쿠키" },
  { name:"쌀 피칸과자", en:"Rice Pecan Pastry", price:"3,500", desc:"호두 대신 피칸! 쌀가루로 만들어 더 건강한 쌀 피칸과자" },
  { name:"에그타르트", en:"Egg Tart", price:"3,000", desc:"겉바속촉, 바삭한 페이스트리 에그타르트" },
 ]},
 { id:"meal", title:"MEAL", photo:true, items:[
  { name:"리코타 샤인머스캣 샐러드", price:"10,500", img:"salad.jpg", isNew:true, desc:"달콤한 샤인머스캣과 부드러운 리코타, 루꼴라, 크랜베리가 들어간 상큼한 샐러드" },
  { name:"새우 오일 파스타", price:"16,000", img:"shrimp.jpg", isNew:true, desc:"통통한 새우가 \"왕창\" 들어간 파스타. 방울토마토, 마늘, 루꼴라에 바삭한 새우꼬리의 풍미가 어우러진 파스타" },
  { name:"트러플 버섯 반미 샌드위치", price:"13,500", img:"banhmi.jpg", desc:"직접 만든 버섯 콩피에 트러플 마요 소스로 맛이 풍부한 반미 샌드위치" },
  { name:"베이컨 에그마요 샌드위치", price:"9,000", img:"bacon.jpg", desc:"촉촉함이 남다른 황금비율 단짠 조화" },
  { name:"감자 치즈 그라탕 (빵 포함)", price:"12,000", img:"gratin.jpg", desc:"꾸덕한 모짜렐라 치즈 아래, 양파와 마늘의 깊은 풍미가 더해진 감자 그라탕" },
  { name:"트러플 포테이토 스프 (단품)", price:"4,000", img:"soup.jpg", desc:"부드럽게 쪄낸 국산 감자와 고소한 베이컨, 트러플 오일의 고소한 풍미", add:"+빵 추가 2,000원" },
  { name:"골뱅이 들기름 파스타", price:"18,500", img:"golbaengi.jpg", desc:"새콤한 초고추장과 수영팔도시장 들기름, 쫄깃한 골뱅이가 듬뿍 들어간 여름 파스타" },
  { name:"인디 샥슈카", price:"15,000", img:"shakshuka.jpg", desc:"진한 토마토의 감칠맛과 가지, 양파, 베이컨 위로 녹아내린 고소한 치즈에 부드러운 반숙란이 더해진 샥슈카" },
  { name:"마라 로제 파스타 🌶️🌶️", price:"15,900", img:"mala.jpg", desc:"하이디라오 마라소스와 진한 로제 크림과 대패 삼겹이 올라간 파스타" },
  { name:"양송이 미소 크림 파스타", price:"15,500", img:"miso.jpg", desc:"미소된장의 감칠맛이 돋보이는 부드러운 크림 파스타" },
  { name:"[비건] 버섯 콩피 오일 파스타", price:"14,500", img:"vegan.jpg", desc:"버섯 콩피로 고소한 풍미를 살린 비건 오일 파스타" },
  { name:"마라 로제 떡볶이 🌶️🌶️", price:"12,900", img:"tteok.jpg", desc:"얼얼한 마라향에 쫄깃한 떡과 부드러운 푸주의 조합!" },
 ]},
 { id:"alcohol", title:"ALCOHOL", items:[
  { name:"테라", en:"Terra (330ml)", price:"5,000" },
  { name:"아사히", en:"Asahi (330ml)", price:"8,000" },
  { name:"빅웨이브", en:"Big Wave (355ml)", price:"9,000" },
  { name:"진로", en:"Jinro Soju (360ml)", price:"5,000" },
 ]},
];
