export const smallImage = (imagePath, size) => {
    if (!imagePath) return ""; // Or return a default image path
  
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  
    return image;
  };