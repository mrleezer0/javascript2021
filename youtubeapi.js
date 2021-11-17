const searchTerms = ["air%20guitar", "airguitar", "milli$20vanilli", "snow%20informer%20remix", "guitar%20broom", "Gary%20Bertsch%20Air%20Guitar"];
const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];
const YOUTUBE_API_KEY = "AIzaSyDsSVaoEwUXQYSCM53QX7u1rta3A3WKG1E";
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${YOUTUBE_API_KEY}`;
fetch(url)
  .then(response => response.json())
  .then(data => {
    document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
});