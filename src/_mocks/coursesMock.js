export const _mockAllCourses = () => {
  return new Promise((res, _) => {
    setTimeout(() => {
      res([
        {
          title: "Mocked 1",
          languages: [{ id: "teste", language: "PT" }],
        },
        {
          title: "Mocked 2",
          languages: [
            { id: "teste", language: "PT" },
            { id: "teste-2", language: "EN" },
          ],
        },
        {
          title: "Mocked 3",
          languages: [
            { id: "teste", language: "PT" },
            { id: "teste-2", language: "EN" },
          ],
        },
        {
          title: "Mocked 4",
          languages: [
            { id: "teste", language: "PT" },
            { id: "teste-2", language: "EN" },
          ],
        },
      ]);
    }, 1000);
  });
};

export const _mockFavoriteCourses = () => {
  return new Promise((res, _) => {
    setTimeout(() => {
      res([
        {
          title: "Mocked 1",
          languages: [{ id: "teste", language: "PT" }],
        },
        {
          title: "Mocked 3",
          languages: [
            { id: "teste", language: "PT" },
            { id: "teste-2", language: "EN" },
          ],
        },
      ]);
    }, 1000);
  });
};

export const _mockRunningCourses = () => {
  return new Promise((res, _) => {
    setTimeout(() => {
      res([
        {
          title: "Mocked 4",
          languages: [{ id: "teste", language: "PT" }],
        },
      ]);
    }, 1000);
  });
};

export const _mockFinishedCourses = () => {
  return new Promise((res, _) => {
    setTimeout(() => {
      res([
        {
          title: "Mocked 1",
          languages: [{ id: "teste", language: "PT" }],
        },
      ]);
    }, 1000);
  });
};
