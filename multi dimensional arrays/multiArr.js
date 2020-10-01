const matrix = [];
for (let i = 0; i < 3; i++) {
  matrix[i] = []; // we need to initialize each array
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix[i][j][z] = i + j + z;
    }
  }
}
