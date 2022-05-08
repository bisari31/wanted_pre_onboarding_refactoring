## 배포 주소
https://stately-longma-b89457.netlify.app

## Toggle.js

![GIF 2022-04-13 오전 2-43-53](https://user-images.githubusercontent.com/98396758/163022567-db4fef35-7e76-4087-9da2-0aea919aae39.gif)<br/>

div 안에 두 개의 button을 만들어 onClick event를 걸어 클릭 시 toggle 기능을 하게 만들었습니다.</br>
기존과 달리 span 태그에서 button으로 변경하였고, setState 함수에서 콜백함수를 이용하였습니다.

## Tab.js

![GIF 2022-04-13 오전 2-47-06](https://user-images.githubusercontent.com/98396758/163023032-2ed2f4b4-0d08-4aa7-bb71-d0ac2624e085.gif)<br/>

button 배열을 map을 이용해 만든 다음, 각 키값에 checked를 넣어주었습니다.<br/>
button은 checked 값이 true일 때 checked 클래스를 받아 선택된 버튼을 파악하게 하였습니다.<br/>
useRef를 사용하여 onChangeList 함수 작동 시 id 인자를 받아 해당 위치를 파악해 스타일을 주었습니다.<br/>

## Slider.js

![GIF 2022-04-18 오후 8-08-59](https://user-images.githubusercontent.com/98396758/163800120-c3124556-6c8a-4fc2-a520-7c686ae239c2.gif)
<br/>

기존의 방식은 input:range를 이용하지 않고 작업하였으나, 리팩토링 과정에서 코드를 전면 수정하였습니다.<br/>
input range 기능을 이용하여 쉽게 구현하였고, style은 linear-gradient를 이용해서 차오른 게이지에 색상을 넣어주었습니다.<br/>
webkit-slider-thumb을 이용하여 버튼css를 재구성하였습니다.<br/>

## Input.js

![GIF 2022-04-13 오전 2-48-42](https://user-images.githubusercontent.com/98396758/163023318-dabd2c1f-3fbe-46d3-a3b9-0b13a78ab888.gif)<br/>

useEffect를 이용하여 정규표현식을 활용한 유효성 검사를 하게 하였습니다.<br/>
math메서드를 이용하여 일치하지 않을 시 에러 메시지가 보이게 구현하였습니다.

## Dropdown.js

![gif](https://user-images.githubusercontent.com/98396758/163256577-4ca83a84-605f-4acf-b109-65c74978e618.gif)<br/>

기존 코드에 바깥 영역 클릭 시 드롭다운이 닫히는 기능을 구현하지 못하였는데<br/>
이번 리팩토링에서는 이 기능을 추가하였습니다. dropdown이 열려있는지를 확인하는 state를 생성 후 <br/>
useEffect를 이용하여 ref.current.contains(event) 메서드를 이용하여 해당 state가 true일 때 false로 변경하여 닫히게 구현하였습니다.<br/>
