export interface deckType {
  id: number;
  elements: deckElementType[];
  title: string;
}
export interface deckElementType {
  back: string;
  front: string;
  id: number;
  status: 0 | 1 | 2;
}
