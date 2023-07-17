export const categoryLink = (category: string) => {
  const categoryName = category?.split(" ").join("-").toLowerCase();
  const link = `https://cryptorank.io/categories/${categoryName}`;

  return link;
};
