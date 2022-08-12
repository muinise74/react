# react

- 0. node.js, npm, create-react-app 설치
- 1. create-react-app dirName
- 2. cd dirName
- 3. npm start

- 연습할 때 주의 사항으로 index.js 의 StrictMode를 제거하지 않으면 생명 주기 함수 가 2번씩 실행되는 오류가 있었습니다.

>> redux part는 잘 모르겠다,....
- R78 - 80 : src_redux 왜 200이 2번 붙는 지 모르겠다..

- R81 - 83 : src_react_redux 얘는 1번 씩 잘 붙는다...

### React - Route
- For serviceWorker : create-react-app [appName] --template cra-template-pwa
- Routing을 위해서는 import 할 Component명을 반드시 PascalCase 로 작성해야 한다...
- BrowserRouter == FrontController????

### Debounce & Throttle
- event의 실행 횟수를 제한하는 기술
- Debounce : 연속적인 event 호출 상황에서 마지막 이벤트가 실행되고 일정 시간 동안, 추가 이벤트가 발생하지 않을 때 실행하는 함수
- Throttle : 지정한 시간 단위당 최대 한번만 동작 하는 함수
