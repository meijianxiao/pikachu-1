const string = `
    .skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::after,
  .skin *::before {
    box-sizing: border-box;
  }
  .skin {
    position: relative;
    background: #ffe600;
    height: 50vh;
  }
  
  .nose {
    border: 10px solid red;
    border-color: #000 transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -10px;
    z-index: 10;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(15deg);
    }
    66% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  
  .nose:hover {
    animation: wave 1.5s infinite linear;
  }
  
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: #000;
  }
  
  .eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    width: 25px;
    height: 25px;
    display: block;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 10px;
    top: 3px;
  }
  
  .eye.left {
    transform: translateX(-100px);
  }
  
  .eye.right {
    transform: translateX(100px);
  }
  
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  }
  
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-20deg) translateX(-53.5px);
  }
  
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(20deg) translateX(53.5px);
  }
  
  .mouth .up .lip {
    border: 3.5px solid black;
    width: 100px;
    height: 30px;
    position: relative;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
  }
  
  .mouth .up .lip.left::before {
    right: -6px;
  }
  
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .down {
    width: 100%;
    position: absolute;
    top: 7px;
    height: 180px;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 1px solid black;
    width: 150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    height: 1000px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
  }
  
  .mouth .down .yuan1 .yuan2 {
    border: 1px solid red;
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background: #ff485f;
    border-radius: 100px;
  }
  
  .face {
    position: absolute;
    border: 3px solid black;
    left: 50%;
    width: 88px;
    height: 88px;
    top: 225px;
    margin-left: -44px;
    z-index: 3;
  }
  
  .face.left {
    transform: translateX(-150px);
    background: #ff0000;
    border-radius: 50%;
  }
  
  .face.right {
    transform: translateX(150px);
    background: #ff0000;
    border-radius: 50%;
  }
  
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  
`;

const player = {
  id: undefined,
  time: 100,
  n: 1,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    if (player.n < string.length) {
      player.n += 1;
      player.ui.demo.innerText = string.substr(0, player.n);
      player.ui.demo2.innerHTML = string.substr(0, player.n);
      player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    }
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};
player.init();
