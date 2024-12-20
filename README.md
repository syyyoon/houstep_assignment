# 2024년 (주) 두번째 프론트엔드 개발자 채용 과제

(주) 두번째 - 하우스텝 프론트엔드 개발자 채용 과제 코드입니다.

---

## 설치 및 실행

```bash
npm install // 패키지 설치
npm run server  // json-sever 실행
npm run dev // localhost:3000  로컬 환경에서 실행됩니다.
```

## 사용한 스택

- next.js
- typescript
- redux-toolkit
- tailwindCSS

## 구현 영상


https://github.com/syyyoon/houstep_assignment/assets/109261682/b11e2ffe-a1e2-417d-9466-18ad52edac3a




## 구현 과제

### [홈]

- 버튼 클릭 시 /order 페이지로 이동

### [/order]

- 로고가 있는 헤더는 상단에, 총 가격 및 주문하기 버튼이 있는 부분은 하단에 스크롤에 상관없이 고정
- 페이지 진입 시 주문 아이템 불러오는 요청의 로딩 표시
- 주문 아이템 카운터 조작 구현 ( 수량은 음수 X, 주문 최대 수량 999개)
- 주문 아이템 수량 -,+ 버튼 조작 시, 각 아이템의 가격과 하단의 총 가격, 총 수량이 함께 변경
- 주문 아이템의 수량이 0일 때 주문할 수 없음
- 수량이 1이상인 아이템 배경색 변경
- 주문하기 클릭 후 로딩 중인 상태를 하단 버튼에 표시

### [/complete, /error]

- 오더페이지에서 주문하기 버튼 클릭 시 주문 성공 여부에 따라 노출되는 페이지
- 3초뒤 다시 /order 페이지로 이동

---

## 기술 구현 설명

#### 라우팅

- next.js의 useRouter 훅과 Link 컴포넌트 사용하여 구현하였습니다.

#### 상태관리

- redux-toolkit 사용

  1. root component를 Provider로 감싸 store 공급하여 전역에서 state 관리가 가능하도록 했습니다.
  2. createAsyncThunk를 이용하여 전체 아이템 리스트 fetch 및 비동기 처리 하였습니다.
  3. `increment` 액션을 통해 특정 아이템의 수량을 1 증가시키는데, 해당 아이템이 이미 카트에 있는 경우 수량만 증가시키고, 없는 경우 새로운 아이템을 카트에 추가시킵니다.
  4. `decrement` 액션은 특정 아이템의 수량을 1 감소시키는데, 해당 아이템이 존재하면 수량 감소만 시키고, 수량이 0이되면 해당 아이템을 카트에서 제거합니다.
  5. `totalCartItemSelector`, `totalPriceSelector` selector 함수를 통해 장바구니에 있는 아이템의 총 수량과 총 가격을 계산합니다.
  6. `resetCart`액션은 주문 동작이 완료된 후 호출하여 카트의 데이터를 초기화시킵니다.

#### 기타

- 사용자가 잘못된 경로로 이동하였을 시 NotFound 페이지를 보여주고, 해당 페이지에서 /order 페이지로 돌아갈 수 있는 버튼을 제공하였습니다.
- setTimeout API를 통해 3초 후 오더페이지로 이동하도록 구현하였으며, count down 되는 상황을 화면에 표시하였습니다.
- `MoveToOrderButton` 컴포넌트 내 'size' property를 union type으로 정의하여 유연하게 해당 UI를 사용하였습니다.
- 주문하기 버튼 `disabled` 되는 상황은 아래와 같습니다.
  - 처음 오더페이지 진입하여 모든 제품 데이터를 불러오는 로딩 상태
  - 총 선택한 제품의 수량이 0 일 때
  - '주문하기' 버튼을 클릭하여 동작이 진행중일 때 입니다.

---
