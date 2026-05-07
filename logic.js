
const champions = [

    // 🔵 AP
    { name: "Ahri", type: "AP" },
    { name: "Akali", type: "AP" },
    { name: "Anivia", type: "AP" },
    { name: "Annie", type: "AP" },
    { name: "AurelionSol", type: "AP" },
    { name: "Azir", type: "AP" },
    { name: "Bard", type: "AP" },
    { name: "Brand", type: "AP" },
    { name: "Cassiopeia", type: "AP" },
    { name: "ChoGath", type: "AP" },
    { name: "Diana", type: "AP" },
    { name: "Ekko", type: "AP" },
    { name: "Elise", type: "AP" },
    { name: "Evelynn", type: "AP" },
    { name: "Fiddlesticks", type: "AP" },
    { name: "Fizz", type: "AP" },
    { name: "Gragas", type: "AP" },
    { name: "Heimerdinger", type: "AP" },
    { name: "Janna", type: "AP" },
    { name: "Karma", type: "AP" },
    { name: "Karthus", type: "AP" },
    { name: "Kassadin", type: "AP" },
    { name: "Katarina", type: "AP" },
    { name: "LeBlanc", type: "AP" },
    { name: "Lissandra", type: "AP" },
    { name: "Lux", type: "AP" },
    { name: "Malzahar", type: "AP" },
    { name: "Morgana", type: "AP" },
    { name: "Mordekaiser", type: "AP" },
    { name: "Nidalee", type: "AP" },
    { name: "Orianna", type: "AP" },
    { name: "Rumble", type: "AP" },
    { name: "Singed", type: "AP" },
    { name: "Syndra", type: "AP" },
    { name: "Teemo", type: "AP" },
    { name: "Thresh", type: "AP" },
    { name: "Veigar", type: "AP" },
    { name: "Vex", type: "AP" },
    { name: "Viktor", type: "AP" },
    { name: "Vladimir", type: "AP" },
    { name: "Xerath", type: "AP" },
    { name: "Yuumi", type: "AP" },
    { name: "Zac", type: "AP" },
    { name: "Zilean", type: "AP" },
    { name: "Zoe", type: "AP" },
    { name: "Ziggs", type: "AP" },
  
    // 🔴 AD
    { name: "Aatrox", type: "AD" },
    { name: "Akshan", type: "AD" },
    { name: "Aphelios", type: "AD" },
    { name: "Ashe", type: "AD" },
    { name: "Caitlyn", type: "AD" },
    { name: "Camille", type: "AD" },
    { name: "Darius", type: "AD" },
    { name: "Draven", type: "AD" },
    { name: "Fiora", type: "AD" },
    { name: "Gangplank", type: "AD" },
    { name: "Garen", type: "AD" },
    { name: "Gnar", type: "AD" },
    { name: "Graves", type: "AD" },
    { name: "Irelia", type: "AD" },
    { name: "JarvanIV", type: "AD" },
    { name: "Jhin", type: "AD" },
    { name: "Jinx", type: "AD" },
    { name: "Kalista", type: "AD" },
    { name: "LeeSin", type: "AD" },
    { name: "Lucian", type: "AD" },
    { name: "MasterYi", type: "AD" },
    { name: "MissFortune", type: "AD" },
    { name: "Olaf", type: "AD" },
    { name: "Pantheon", type: "AD" },
    { name: "Pyke", type: "AD" },
    { name: "Riven", type: "AD" },
    { name: "Samira", type: "AD" },
    { name: "Senna", type: "AD" },
    { name: "Sett", type: "AD" },
    { name: "Sion", type: "AD" },
    { name: "Talon", type: "AD" },
    { name: "Tristana", type: "AD" },
    { name: "Trundle", type: "AD" },
    { name: "Twitch", type: "AD" },
    { name: "Urgot", type: "AD" },
    { name: "Vayne", type: "AD" },
    { name: "Wukong", type: "AD" },
    { name: "Xayah", type: "AD" },
    { name: "Yasuo", type: "AD" },
    { name: "Yone", type: "AD" },
    { name: "Zed", type: "AD" },
  
    // 🟣 HYBRID
    { name: "Belveth", type: "AD" },
    { name: "Blitzcrank", type: "AP" },
    { name: "Corki", type: "AD" },   
    { name: "DrMundo", type: "hybrid" },
    { name: "Ezreal", type: "AD" }, 
    { name: "Gwen", type: "AP" },
    { name: "Hecarim", type: "AD" },
    { name: "Jayce", type: "AD" },
    { name: "Jax", type: "hybrid" },
    { name: "KaiSa", type: "hybrid" },
    { name: "Kayn", type: "AD" },
    { name: "Kindred", type: "AD" },
    { name: "KogMaw", type: "hybrid" },
    { name: "Maokai", type: "AP" },
    { name: "Nautilus", type: "AP" },
    { name: "Nunu", type: "AP" },
    { name: "Poppy", type: "AD" },
    { name: "Rakan", type: "AP" },
    { name: "Rammus", type: "AP" },
    { name: "RekSai", type: "AD" },
    { name: "Renekton", type: "AD" },
    { name: "Shaco", type: "AP" },
    { name: "Shen", type: "hybrid" },
    { name: "Shyvana", type: "hybrid" },
    { name: "Skarner", type: "hybrid" },
    { name: "TahmKench", type: "AP" },
    { name: "Taliyah", type: "AP" },
    { name: "Trundle", type: "AD" },
    { name: "Udyr", type: "hybrid" },
    { name: "Varus", type: "hybrid" },
    { name: "Vi", type: "AD" },
    { name: "Volibear", type: "hybrid" },
    { name: "Warwick", type: "hybrid" },
    { name: "Zeri", type: "AD" }
  ];


  const imgContainer = document.getElementById("img-container");

  champions.forEach(champ => {
    const img = document.createElement("img");
  
    img.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.name}_0.jpg`;
    img.classList.add(champ.type);
  
    imgContainer.appendChild(img);
  });


const champName = document.getElementById("champ-name")
const parentType = document.getElementById("img-container");
const startBTN = document.getElementById("start-btn")

const childrenChamp = parentType.children;

function startRandomizer() {


    randomizer()

    startBTN.style.display = "none";
    parentType.style.opacity = "1"

    console.log("randomized");
}


const stopBTN = document.getElementById("stop-btn")

function stopRandomizer() {

    correctWrong.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    correctWrongText.innerHTML = ""
    startBTN.style.display = "block";
    parentType.style.opacity = "0"
    champName.innerHTML = "Tryck Start!"

}

const correctWrong = document.getElementById("correct-wrong");
const correctWrongText = document.getElementById("correct-wrong-text")

function pressedAP() {

    if(currentChamp.type === "AP"){

      correctWrong.style.backgroundColor = "#32CD32"
      correctWrongText.innerHTML = "Correct!"
  
      console.log("correct")
    } else {
  
      correctWrong.style.backgroundColor = "red"
      correctWrongText.innerHTML = "Wrong ;("
    }

    randomizer();
}

function pressedAD() {

  if(currentChamp.type === "AD"){

    correctWrong.style.backgroundColor = "#32CD32"
    correctWrongText.innerHTML = "Correct!"

    console.log("correct")
  } else {

    correctWrong.style.backgroundColor = "red"
    correctWrongText.innerHTML = "Wrong ;("
  }
 
  randomizer();
}

function pressedHybrid() {

  if(currentChamp.type === "hybrid"){

    correctWrong.style.backgroundColor = "#32CD32"
    correctWrongText.innerHTML = "Correct!"

    console.log("correct")
  } else {

    correctWrong.style.backgroundColor = "red"
    correctWrongText.innerHTML = "Wrong ;("
  }

  randomizer();
}

function randomizer() {

  const randomIndex = Math.floor(Math.random() * childrenChamp.length);

  currentChamp = champions[randomIndex];

  const randomChild = childrenChamp[randomIndex];

  for (let i = 0; i < childrenChamp.length; i++) {
      childrenChamp[i].style.display = "none";
  }

  randomChild.style.display = "block";

  champName.innerHTML = currentChamp.name;
}


