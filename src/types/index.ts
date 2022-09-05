export type Position = {
  x: number
  y: number
}

export type Char = {
  value: string
  position: Position
  disabled: boolean
}

export const CHARS: string[][] = [
  ['あ', 'さ', 'な', 'ま', 'ら'],
  ['い', 'し', 'に', 'み', 'り'],
  ['う', 'す', 'ぬ', 'む', 'る'],
  ['え', 'せ', 'ね', 'め', 'れ'],
  ['お', 'ぞ', 'の', 'も', 'ろ'],
  ['か', 'た', 'は', 'や', 'わ'],
  ['き', 'ち', 'ひ', '🟡', '🟡'],
  ['く', 'つ', 'ふ', 'ゆ', 'を'],
  ['け', 'て', 'へ', '🟡', '🟡'],
  ['こ', 'と', 'ほ', 'よ', 'ん'],
]
