import computePath from "./RobotGridMaze";

describe('computePath Test', function () {
  it('should compute path1', function () {
    const path1: Set<[number, number]> = new Set()

    // 미로를 정의합니다.
    const maze1: boolean[][]  = Array.from(
      {length: 6},
      () => Array(6).fill(false)
    )
    maze1[2][0]=true;
    maze1[3][0]=true;
    maze1[3][1]=true;
    maze1[3][2]=true;
    maze1[3][3]=true;

    // 경로를 계산하고 표시합니다.
    computePath(5, 5, maze1, path1);
    expect(path1).toStrictEqual(new Set<[number, number]>([
      [ 0, 0 ],
      [ 0, 1 ],
      [ 0, 2 ],
      [ 0, 3 ],
      [ 0, 4 ],
      [ 0, 5 ],
      [ 1, 5 ],
      [ 2, 5 ],
      [ 3, 5 ],
      [ 4, 5 ],
      [ 5, 5 ]
    ]))
  });

  it('should compute path2', function () {
    const path2: Set<[number, number]> = new Set()

    // 미로를 정의합니다.
    const maze2: boolean[][]  = Array.from(
      {length: 2},
      () => Array(2).fill(false)
    )
    maze2[0][1]=true;

    // 경로를 계산하고 표시합니다.
    computePath(1, 1, maze2, path2);
    expect(path2).toStrictEqual(new Set<[number, number]>([
      [0, 0],
      [1, 0],
      [1, 1]
    ]))
  });
});
