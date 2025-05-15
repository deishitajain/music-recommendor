const moodData = {
  happy: [
    { title: "Good Life", artist: "OneRepublic", link: "https://youtu.be/q7QQLsC7OEw" },
    { title: "Happy", artist: "Pharrell Williams", link: "https://youtu.be/ZbZSe6N_BXs" },
    { title: "Best Day of My Life", artist: "American Authors", link: "https://youtu.be/Y66j_BUCBMY" },
    { title: "Firework", artist: "Katy Perry", link: "https://youtu.be/QGJuMBdaqIw" },
    { title: "Walking on Sunshine", artist: "Katrina & The Waves", link: "https://youtu.be/iPUmE-tne5U" },
  ],
  sad: [
    { title: "Let Her Go", artist: "Passenger", link: "https://youtu.be/RBumgq5yVrA" },
    { title: "Someone Like You", artist: "Adele", link: "https://youtu.be/hLQl3WQQoQ0" },
    { title: "Fix You", artist: "Coldplay", link: "https://youtu.be/k4V3Mo61fJM" },
    { title: "Lose You To Love Me", artist: "Selena Gomez", link: "https://youtu.be/zlJDTxahav0" },
    { title: "Skinny Love", artist: "Bon Iver", link: "https://youtu.be/ssdgFoHLwnk" },
  ],
  chill: [
    { title: "Sunflower", artist: "Post Malone", link: "https://youtu.be/ApXoWvfEYVU" },
    { title: "Location", artist: "Khalid", link: "https://youtu.be/by3yRdlQvzs" },
    { title: "Talk", artist: "Khalid", link: "https://youtu.be/hE2Ira-Cwxo" },
    { title: "Electric Feel", artist: "MGMT", link: "https://youtu.be/B9dSYgd5Elk" },
    { title: "Lost in Japan", artist: "Shawn Mendes", link: "https://youtu.be/xTlNMmZKwpA" },
  ],
  energetic: [
    { title: "Believer", artist: "Imagine Dragons", link: "https://youtu.be/7wtfhZwyrcc" },
    { title: "Titanium", artist: "David Guetta ft. Sia", link: "https://youtu.be/IFRl-2y9N5A" },
    { title: "Stronger", artist: "Kanye West", link: "https://youtu.be/PsO6ZnUZI0g" },
    { title: "Can't Hold Us", artist: "Macklemore", link: "https://youtu.be/2zNSgSzhBfM" },
    { title: "Eye of the Tiger", artist: "Survivor", link: "https://youtu.be/btPJPFnesV4" }
  ],
  relax: [
    { title: "Weightless", artist: "Marconi Union", link: "https://youtu.be/UfcAVejslrU" },
    { title: "Strawberry Swing", artist: "Coldplay", link: "https://youtu.be/K4DyBUG242c" },
    { title: "Breathe Me", artist: "Sia", link: "https://youtu.be/ghPcYqn0p4Y" },
    { title: "Night Owl", artist: "Galimatias", link: "https://youtu.be/t_DWmEDyRHI" },
    { title: "River Flows in You", artist: "Yiruma", link: "https://youtu.be/7maJOI3QMu0" },
  ],
  workout: [
    { title: "Lose Yourself", artist: "Eminem", link: "https://youtu.be/_Yhyp-_hX2s" },
    { title: "Stronger", artist: "Kanye West", link: "https://youtu.be/PsO6ZnUZI0g" },
    { title: "Can't Stop", artist: "Red Hot Chili Peppers", link: "https://youtu.be/BcvaOHp0qPM" },
    { title: "Power", artist: "Kanye West", link: "https://youtu.be/L53gjP-TtGE" },
    { title: "Remember The Name", artist: "Fort Minor", link: "https://youtu.be/VDvr08sCPOc" },
  ],
  slow: [
    { title: "Perfect", artist: "Ed Sheeran", link: "https://youtu.be/2Vv-BfVoq4g" },
    { title: "All of Me", artist: "John Legend", link: "https://youtu.be/450p7goxZqg" },
    { title: "Make You Feel My Love", artist: "Adele", link: "https://youtu.be/0put0_a--Ng" },
    { title: "Say You Won't Let Go", artist: "James Arthur", link: "https://youtu.be/0yW7w8F2TVA" },
    { title: "Thinking Out Loud", artist: "Ed Sheeran", link: "https://youtu.be/lp-EO5I60KA" },
  ]
};

const colors = {
  happy: "#fff9c4",
  sad: "#e1bee7",
  chill: "#b2dfdb",
  energetic: "#ffe0b2",
  relax: "#d7ccc8",
  workout: "#ffccbc",
  romantic: "#f8bbd0"
};

function showSongs(mood) {
  const songList = document.getElementById("song-list");
  const songs = moodData[mood];
  document.body.style.backgroundColor = colors[mood];

  let html = "";
  songs.forEach(song => {
    html += `
      <div class="song">
        <strong>${song.title}</strong> by ${song.artist} <br />
        <a href="${song.link}" target="_blank">Listen 🎧</a>
      </div>
    `;
  });

  songList.innerHTML = html;
}