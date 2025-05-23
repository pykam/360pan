// View360 is registered globally.
const viewer = new View360("#viewer", {
  // EquirectProjection and all other items are stored as properties within View360.
  projection: new View360.EquirectProjection({
    src: "URL_TO_IMAGE",
    video: false
  })
});