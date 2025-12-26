# Zustand 연습 저장소

> Zustand의 핵심 개념들을 TODO 리스트 예제를 통해 학습하는 프로젝트

## 📋 프로젝트 개요

이 저장소는 Zustand 상태 관리 라이브러리의 다양한 기능과 패턴들을 실습하기 위한 학습용 프로젝트입니다.
간단한 TODO 리스트 애플리케이션을 구현하면서 Zustand의 주요 개념들을 단계적으로 학습합니다.

## 🎯 학습 목표

### 1. 기본 개념

- [x] Store 생성 및 기본 사용법
- [x] State와 Actions 정의
- [x] React 컴포넌트에서 Store 사용하기

### 2. 성능 최적화

- [x] Selectors를 이용한 부분 구독
- [x] Shallow equality 비교
- [x] Re-render 최적화 기법

### 3. Middleware

- [x] **persist** - 로컬 스토리지에 상태 저장
- [x] **devtools** - Redux DevTools 연동
- [x] **immer** - 불변성 관리 간소화
- [x] **subscribeWithSelector** - 선택적 구독
- [x] 커스텀 middleware 작성

### 4. 고급 패턴

- [x] Slices 패턴으로 Store 분리
- [x] Computed values (파생 상태)
- [x] TypeScript와 타입 안전성
- [x] Async actions 처리
- [x] Store 외부에서 상태 접근

### 5. React 통합

- [x] Context API와 함께 사용하기
- [x] Multiple stores 관리
- [x] 테스트 작성

## 🛠 구현할 기능

### TODO 리스트 핵심 기능

1. **CRUD 작업**

   - TODO 추가
   - TODO 수정
   - TODO 삭제
   - 완료 상태 토글

2. **필터링 & 정렬**

   - 전체 / 진행중 / 완료됨 필터
   - 우선순위별 정렬
   - 검색 기능

3. **데이터 관리**

   - 로컬 스토리지 자동 저장/복원
   - 전체 삭제 (완료된 항목만)
   - 통계 (전체/완료/미완료 개수)

4. **고급 기능**
   - 카테고리/태그 관리
   - 마감일 설정
   - 실행 취소/다시 실행 (history)

## 📂 예상 프로젝트 구조

```
Zustand-practice/
├── src/
│   ├── stores/
│   │   ├── todoStore.ts          # 메인 TODO store
│   │   ├── filterStore.ts        # 필터/정렬 상태
│   │   ├── uiStore.ts            # UI 상태 (모달, 사이드바 등)
│   │   └── slices/               # Store slices
│   │       ├── todoSlice.ts
│   │       ├── filterSlice.ts
│   │       └── statsSlice.ts
│   ├── components/
│   │   ├── TodoList.tsx
│   │   ├── TodoItem.tsx
│   │   ├── TodoForm.tsx
│   │   ├── FilterBar.tsx
│   │   └── Stats.tsx
│   ├── hooks/
│   │   └── useTodoStore.ts       # 커스텀 hooks
│   ├── types/
│   │   └── todo.ts               # TypeScript 타입 정의
│   └── App.tsx
├── docs/
│   └── blog-draft.md             # 블로그 글 초안
├── package.json
├── tsconfig.json
└── README.md
```

## 🔍 학습할 Zustand 개념들

### 1. 기본 Store 생성

```typescript
// 가장 기본적인 store
const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}));
```

### 2. TypeScript와 함께 사용

```typescript
interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

const useStore = create<TodoStore>()((set) => ({
  // ...
}));
```

### 3. Middleware 체이닝

```typescript
const useStore = create<TodoStore>()(
  devtools(
    persist(
      immer((set) => ({
        // ...
      })),
      { name: "todo-storage" }
    )
  )
);
```

### 4. Selectors로 최적화

```typescript
// 필요한 부분만 구독
const todos = useStore((state) => state.todos);
const addTodo = useStore((state) => state.addTodo);

// Shallow equality
const { todos, filter } = useStore(
  (state) => ({ todos: state.todos, filter: state.filter }),
  shallow
);
```

### 5. Slices 패턴

```typescript
const createTodoSlice = (set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
});

const createFilterSlice = (set) => ({
  filter: "all",
  setFilter: (filter) => set({ filter }),
});

const useStore = create((...a) => ({
  ...createTodoSlice(...a),
  ...createFilterSlice(...a),
}));
```

## 📝 블로그 글 구성 계획

1. **서론**

   - Zustand란?
   - 왜 Zustand를 선택했는가?
   - 다른 상태 관리 라이브러리와의 비교

2. **기본 사용법**

   - Store 생성
   - 컴포넌트에서 사용
   - 실전 예제: TODO 추가/삭제

3. **성능 최적화**

   - Re-render 문제
   - Selectors 활용
   - DevTools로 확인하기

4. **Middleware 활용**

   - persist로 영속성 추가
   - immer로 불변성 간편하게
   - 커스텀 middleware 만들기

5. **고급 패턴**

   - Slices로 대규모 앱 관리
   - TypeScript 베스트 프랙티스
   - 테스팅 전략

6. **결론**
   - Zustand의 장단점
   - 언제 사용하면 좋은가?
   - 추가 학습 자료

## 🚀 시작하기

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 테스트
npm test
```

## 📚 참고 자료

- [Zustand 공식 문서](https://docs.pmnd.rs/zustand/)
- [Zustand GitHub](https://github.com/pmndrs/zustand)
- [React 공식 문서](https://react.dev/)

## ✅ 진행 상황

- [x] 프로젝트 초기 설정 (React + TypeScript + Vite)
- [x] 기본 TODO store 구현
- [x] UI 컴포넌트 작성
- [ ] Middleware 적용 (persist, devtools)
- [ ] 성능 최적화 적용
- [ ] Slices 패턴으로 리팩토링
- [ ] 테스트 작성
- [ ] 블로그 글 초안 작성
- [ ] 블로그 글 완성

## 💡 추가로 실험해볼 것들

- [ ] Zustand + React Query 조합
- [ ] SSR/SSG 환경에서 Zustand 사용
- [ ] Zustand vs Jotai vs Valtio 비교
- [ ] 대규모 애플리케이션 구조 설계

---

**Last Updated:** 2025-12-26
