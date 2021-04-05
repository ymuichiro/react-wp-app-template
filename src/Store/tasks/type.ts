export interface Todo {
  // ユニークなタスクの識別子。並びは配列側で保持している為、idは更新する必要はない
  id: string;
  name: string;
  status: boolean;
}

export interface TodoState {
  entities: Todo[];
}
