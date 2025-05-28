import { STAGE_WIDTH, STAGE_HEIGHT } from "./setup"
import { TETROMINOS } from "./tetrominos"

export type STAGECELL = [string | number, string]
export type STAGE = STAGECELL[][]

export const createStage = (): STAGE =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, "clear"]) as STAGECELL[])

export const randomTetromino = () => {
  const tetrominos = ["I", "J", "L", "O", "S", "T", "Z"] as (keyof typeof TETROMINOS)[]
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)]
  return TETROMINOS[randTetromino]
}

export const isColliding = (
  player: { pos: { x: number; y: number }; tetromino: (string | number)[][] },
  stage: STAGE,
  { x: moveX, y: moveY }: { x: number; y: number },
) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      if (player.tetromino[y][x] !== 0) {
        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== "clear"
        ) {
          return true
        }
      }
    }
  }
  return false
}

