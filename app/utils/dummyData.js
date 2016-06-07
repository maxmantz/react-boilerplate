function createDummyData() {
  const data = [];

  for (let i = 0; i < 100; i++) {
    data.push({
      name: `Item ${i}`,
    });
  }

  return data;
}

const dummyData = createDummyData();

export default dummyData;
