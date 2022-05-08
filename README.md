# 원티드 프리온보딩 코스 선발과제

## 라이브러리

### styled-components

CSS in JS와 classname 의 고유성 및 props에 따른 스타일 변화의 편의성을 위해 사용하였습니다.<br/>
(styles/theme.js 를 이용하여 자주 사용하는 color를 지정하였고, 재사용에 용이하도록 사용하였습니다.)

### react-icons

icon을 svg로 사용하기 위해 사용하였습니다.

## Toggle.js

![GIF 2022-04-13 오전 2-43-53](https://user-images.githubusercontent.com/98396758/163022567-db4fef35-7e76-4087-9da2-0aea919aae39.gif)<br/>

wrapper 안에 두 개의 span으로 영역을 잡은 후 useState로 toggle을 만들었습니다.<br/>
초깃값은 false이며 각 span 별로 onClick 함수를 따로 분리하여 해당 영역을 눌러야<br/>
toggle 값이 변경되게 구현하였습니다.<br/>
toggle 기능을 수행하므로 상태 값은 boolean으로 세팅하였고,<br/>
애니메이션 효과를 주기 위해 position absolute를 이용하여 분리 후<br/>
props을 받아 style을 적용하였습니다.

## Tab.js

![GIF 2022-04-13 오전 2-47-06](https://user-images.githubusercontent.com/98396758/163023032-2ed2f4b4-0d08-4aa7-bb71-d0ac2624e085.gif)<br/>

list 배열을 useState를 이용해 만든 다음, 각 키값에 selected 를 넣어주었습니다<br/>
onChangeList 함수를 만들어 map 메서드를 돌린 후 클릭 된 해당 list seleted 값이 true가 되며<br/>
나머지 list 들은 false가 됩니다.<br/>
useRef를 사용하여 onChangeList 함수 작동 시 id 인자를 받아 해당 위치를 파악해 스타일을 주었습니다.<br/>
또한 애니메이션 효과를 주기 위해 position absolute를 이용하여 분리 후 작업하였습니다.

## Slider.js

![GIF 2022-04-18 오후 8-08-59](https://user-images.githubusercontent.com/98396758/163800120-c3124556-6c8a-4fc2-a520-7c686ae239c2.gif)
<br/>

초기 로직은 마우스 클릭시 해당 좌표만큼 %를 구한 후 %값을<br/>
styled-components를 이용하여 props로 전달해 이동하는 방법으로 초기 구현을 하였지만<br/>
이동시 애니메이션 끊김이 발생하여 circle버튼을 좌표값만큼 먼저 움직인후 %값을 지정하는식으로 변경하였습니다.<br/>
mouseup, down,move 이벤트를 이용하여 적용하였고 isMove 변수를 만들어 moving중일 시 true를 저장하여 <br/>
ture일 시 mousemove 이벤트가 동작하는 방법으로 구현하였습니다.<br/>
mousedown 이벤트 발생시 pageX값 - rangebar.offsetLeft값 - circlebtn반지름 을 구하여<br/>
클릭 좌표에 circlebtn이 위치하게 됩니다.<br/>
rangeBar의 시작점과 끝 지점의 좌표를 구해 pageX 좌표가 rangeBar를 벗어나면<br/>
더 이상 이동하지 않게 if 문을 사용하였습니다. <br/>
%값에 따른 색상 변화는 props으로 받아 css style변경을 해주었습니다.<br/>

circleBtn에 event를 넣어 구현하였지만 마우스 영역을 벗어나면 움직임이 종료되는 현상이 발생하여<br/>
상위 태그에 down 이벤트를 걸어 막대를 눌러도 circle이 이동할 수 있게 이벤트 위임을 하였습니다.<br/>
mousemove가 되는 과정에서 다른 태그들이 드래그 되는 현상이 발생되었는데<br/>
body 에서 user-select: none을 적용시켜 드래그를 제어하였습니다.<br/>

빈 공간 클릭 시 mouseup 이벤트가 걸리지 않는 현상이 발생하였는데<br/>
좌우 여백을 가득 채운 div 태그를 만들고 display none을 설정하여 좌우 여백에서 mouseup 이벤트가 발생해도<br/>
이벤트가 작동할 수 있게 설정하였습니다.<br/>

input태그를 이용하지않고 구현을 해보았습니다.<br/>
이 기능을 구현하면서 mouse이벤트와 좌표 메서드에 대해 공부할 수 있는 계기가 되었습니다.<br/>
mouse이벤트와 좌표에 따른 변화에 익숙하지 않아 가장 어려운 구현이었습니다. <br/>

## Input.js

![GIF 2022-04-13 오전 2-48-42](https://user-images.githubusercontent.com/98396758/163023318-dabd2c1f-3fbe-46d3-a3b9-0b13a78ab888.gif)<br/>

useState를 이용해 form 객체를 만들어서 email과 password키를 넣어 주었습니다.<br/>
각 input엔 name과 value를 정하고 onChagne 함수와 setForm 를 이용하여 값을 변경하였습니다.<br/>
이벤트 객체를 이용하여 name과 value 값을 받아 코드를 간결하게 하였습니다.<br/>
정규표현식을 이용하여 이메일엔 특수문자 (.-\_)를 가능하게 하였고,<br/>
글자수 2자 이상, @가 들어가야 하며 메일 주소에는 .과 함께 <br/>
문자열이나 숫자열이 한 글자 이상 들어가게 세팅하였습니다.<br/>
패스워드 노출은 onClick 이벤트와 함께 type을 변경하게 토글 기능을 추가하였고,<br/>
useEffect를 이용하여 email 값이 변경될 때마다 유효성 검사를 실시한 후에<br/>
true를 반환하면 svg에 색상을 넣어 주었습니다.<br/><br/>
Invalid e-mail address 메시지를 출력하기 위해 validate값이 false값과 email.length가 1보다 클 때 지정하였지만<br/>
예제와 다르기 때문에 고민하였습니다.<br/>
state를 하나 더 만들고 초깃값을 빈 문자열을 넣었고<br/>
email input값에 onBlur 이벤트를 이용하여 이벤트가 발동됐을 시 true false를 메시지에 반환하여<br/>
에러 메시지를 출력하게 구현하였습니다.

## Dropdown.js

![gif](https://user-images.githubusercontent.com/98396758/163256577-4ca83a84-605f-4acf-b109-65c74978e618.gif)<br/>

input 태그를 만들어 사용자에게 선택된 옵션이 보이게 readonly로 세팅하였고<br/>
클릭 시 viewOptions 이 true가 되며 input 태그와 options 들이 보이게 됩니다.<br/>
options 을 선택 시 onclick 함수가 실행되어 filter메서드를 실행합니다<br/>
filter에서 e.target.value를 이용하여 기존 배열과 비교를 합니다.<br/>
이때 대,소문자 비교를 위해 기존 배열 값엔 toLowerCase,toUpperCase를 이용하여 비교하였고<br/>
includes 메서드를 이용하여 일치하는 값을 filter 메서드를 이용하여 state에 넣어 주었습니다.<br/><br/>
값을 선택하고 다시 검색하려 할 때 기존 선택된 값만 보이는 이슈가 발생하였습니다.<br/>
값을 선택하고 viewOptions를 false를 만들 때 state에 저장한 배열도 원래 값으로 되돌려 해결할 수 있었습니다.
