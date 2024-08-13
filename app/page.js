"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles/style.css';
import '../styles/utility.css';

const Spotify = () => {
  useEffect(() => {
    console.log("Let's write JavaScript");

    let currentSong = new Audio();
    let songs = [];
    let currFolder = '';

    function secondsToMinutesSeconds(seconds) {
      if (isNaN(seconds) || seconds < 0) {
        return "00:00";
      }
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(remainingSeconds).padStart(2, '0');
      return `${formattedMinutes}:${formattedSeconds}`;
    }

    async function getSongs(folder) {
      currFolder = folder;
      try {
        let response = await fetch(`/api/song`);
        let data = await response.json();
        songs = data[folder];

        // Show all the songs in the playlist
        let songUL = document.querySelector(".songList ul");
        songUL.innerHTML = songs.map(song => `
          <li class="pointer">
            <div class="info">
              <img class="invert" src="images/music.svg" alt="">
              <div>${song.replace(/%20/g, " ")}</div>
            </div>
            <img class="invert" src="images/play2.svg" alt="">
          </li>
        `).join('');

        // Attach an event listener to each song
        Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
          e.addEventListener("click", () => {
            playMusic(e.querySelector(".info div").innerHTML.trim());
          });
        });
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      }
    }

    const playMusic = (track, pause = false) => {
      console.log("Current folder:", currFolder);
      console.log("Track name before modification:", track);
    
      // Ensure that track is just the filename, not a full path
      if (track.startsWith('/Songs/')) {
        track = track.split('/').pop(); // Extract just the filename
      }
    
      console.log("Track name after modification:", track); // Log the modified track name
    
      // Construct the correct URL path
      const trackPath = `/Songs/${currFolder}/${track}`;
      console.log("Generated song path:", trackPath); // Log the generated path
    
      // Set the source and load the song
      currentSong.pause(); // Pause any currently playing song
      currentSong.src = trackPath;
      currentSong.load(); // Load the new song
    
      if (!pause) {
        currentSong.play().then(() => {
          console.log("Song is playing"); // Log when the song starts playing
          document.getElementById("play").src = "images/pause.svg";
        }).catch(error => {
          console.error("Error playing the song:", error); // Catch and log any errors
        });
      }
    
      // Display only the filename in song info
      document.querySelector(".songInfo").innerHTML = decodeURI(track);
      document.querySelector(".songTime").innerHTML = "00:00 / 00:00";
    };
    
    
    
    async function displayAlbums() {
      try {
        let response = await fetch(`/api/song`);
        let data = await response.json();
        let cardContainer = document.querySelector(".content");

        Object.keys(data).forEach(folder => {
          const coverImagePath = `/Songs/${folder}/cover.jpeg`; // Adjust the path according to your file structure
          const albumTitle = folder; // You might want to replace this with the title from metadata
          const albumDescription = "Album description here"; // Replace with actual metadata if available

          cardContainer.innerHTML += `
            <div data-folder="${folder}" class="cards">
              <div class="card-img circle">
                <img src="${coverImagePath}" alt="">
              </div>
              <div class="text1">${albumTitle}</div>
              <div class="text2">${albumDescription}</div>
              <div class="play-btn"><img src="images/play.svg" alt=""></div>
            </div>
          `;
        });

        // Load the playlist whenever a card is clicked
        Array.from(document.getElementsByClassName("cards")).forEach(e => {
          e.addEventListener("click", async (item) => {
            await getSongs(item.currentTarget.dataset.folder);
            playMusic(songs[0]);
          });
        });
      } catch (error) {
        console.error("Failed to fetch albums:", error);
      }
    }

    async function main() {
      // Display all albums on the page
      await displayAlbums();

      // Attach an event listener to play button
      document.getElementById("play").addEventListener("click", () => {
        if (currentSong.paused) {
          currentSong.play();
          document.getElementById("play").src = "images/pause.svg";
        } else {
          currentSong.pause();
          document.getElementById("play").src = "images/play2.svg";
        }
      });

      // Listen for time update event
      currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songTime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector(".seekcircle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
      });

      // Add an event listener to seekbar
      document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".seekcircle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
      });

      // Add an event listener to previous button
      document.getElementById("previous").addEventListener("click", () => {
        currentSong.pause();
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if (index - 1 >= 0) {
          playMusic(songs[index - 1]);
        }
      });

      // Add an event listener to next button
      document.getElementById("next").addEventListener("click", () => {
        currentSong.pause();
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if (index + 1 < songs.length) {
          playMusic(songs[index + 1]);
        }
      });

      // Add an event listener to volume input
      document.querySelector(".range input").addEventListener("change", e => {
        currentSong.volume = parseInt(e.target.value) / 100;
        if (currentSong.volume > 0) {
          document.querySelector(".volume img").src = document.querySelector(".volume img").src.replace("mute.svg", "volume.svg");
        }
      });

      // Add event listener to mute button
      document.querySelector(".volume img").addEventListener("click", e => {
        if (e.target.src.includes("volume.svg")) {
          e.target.src = e.target.src.replace("volume.svg", "mute.svg");
          currentSong.volume = 0;
          document.querySelector(".range input").value = 0;
        } else {
          e.target.src = e.target.src.replace("mute.svg", "volume.svg");
          currentSong.volume = 0.1;
          document.querySelector(".range input").value = 10;
        }
      });

      // Add event listener to hamburger menu
      document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0%";
      });

      // Add event listener to close the left part
      document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
      });
    }

    main();
  }, []);


  return (
    <>
      <Head>
        <title>Shan - Your Own Music Player</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/utility.css" />
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');`}
        </style>
      </Head>

      <div className="container">
        <div className="left">
          <div className="home">
            <div className="home-head">
              <img className="shan pointer" src="/images/shan.svg" alt="Spotify" />
              <img className="invert close pointer" src="/images/close.svg" alt="Add" />
            </div>
            <ul>
              <li className="pointer">
                <img className="invert" src="/images/home.svg" alt="Home" />
                Home
              </li>
              <li className="text-color pointer myhover">
                <img className="invert" src="/images/search.svg" alt="Search" />
                Search
              </li>
            </ul>
          </div>
          <div className="library">
            <div className="lib-head">
              <ul>
                <li>
                  <img className="invert large pointer" src="/images/library.svg" alt="Library" />
                </li>
                <li>
                  <div className="text text-color pointer myhover">Your Library</div>
                </li>
              </ul>
            </div>
            <div className="box">
              <div className="songList">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="header">
            <div className="head-left">
              <img className="hamburger invert pointer" src="/images/hamburger.svg" alt="Menu" />
            </div>
            <div className="head-right">
              <button className="sign big-text myhover pointer size2">Sign up</button>
              <button className="login big-text pointer size2">Log in</button>
            </div>
          </div>
          <div className="main">
            <div className="row1">
              <div className="row-head">
                <div className="row-title">
                  <a href="https://open.spotify.com/section/0JQ5DAnM3wGh0gz1MXnu3C">
                    <span>Popular artists</span>
                  </a>
                </div>
              </div>
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="playbar">
        <div className="songDetails">
          <div className="songInfo"></div>
          <div className="song-btns">
            <img id="previous" className="invert pointer" src="/images/previous.svg" alt="Previous" />
            <img id="play" className="invert pointer" src="/images/play2.svg" alt="Play" />
            <img id="next" className="invert pointer" src="/images/next.svg" alt="Next" />
          </div>
          <div className="time-vol">
            <ul>
              <li>
                <div className="songTime"></div>
              </li>
              <li className="volume">
                <img className="invert pointer" src="/images/volume.svg" alt="Volume" />
              </li>
              <li className="range">
                <input type="range" name="volume" className="pointer" />
              </li>
            </ul>
          </div>
        </div>
        <div className="seekbar pointer">
          <div className="seekcircle"></div>
        </div>
      </div>
    </>
  );
};

export default Spotify;
