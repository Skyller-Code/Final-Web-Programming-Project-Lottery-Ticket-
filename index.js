
function getImages()
{
  const ores = ["iron", "copper", "coal", "sulfur", "caterium", "quartz", "bauxite", "uranium"];
  for(let rowNum = 1; rowNum < 3; rowNum++)
  {
      for(let cellNum = 0; cellNum < 4; cellNum++)
      {
          //cell
          //const ore = choice(ores);
          //const ore = ores[cellNum + 4];
          const ore = getRandom(ores);
          console.log(ore);
          const oreEle = document.createElement("div");
          oreEle.className = "cell";

          //cell's image
          const oreImg = document.createElement("img");
          oreImg.src = `resources/${ore}_ore.webp`;
          oreImg.alt = "Ore Image";
          oreEle.appendChild(oreImg);

          //cell's / image's name
          const name = document.createElement("h3");
          name.textContent = ore;
          name.style.margin = "0px";
          name.style.marginTop = "2px";
          oreEle.appendChild(name);
          
          oreEle.onclick = function() {clicked(name, oreImg, oreEle)};
          document.getElementById(`row-${rowNum}`).appendChild(oreEle);
      }
  }
}

function clicked(name, img, ele)
{
  img.style.opacity = "1";
  name.style.color = "rgb(209, 136, 1)";

  const won = document.getElementById("winnings");
  if(name.textContent == "quartz")
  {
    won.textContent = `Ticket Winnings $${Number(won.textContent.split("$")[1]) + 5}`;
  }
  else if(name.textContent == "bauxite")
  {
    won.textContent = `Ticket Winnings $${Number(won.textContent.split("$")[1]) + 10}`;
  }
  else if(name.textContent == "uranium")
  {
    won.textContent = `Ticket Winnings $${Number(won.textContent.split("$")[1]) + 15}`;
  }

  ele.onclick = "";
}

function makeNew()
{
  const newTotal = Number(sessionStorage.getItem("total")) + Number(document.getElementById("winnings").textContent.split("$")[1]);
  sessionStorage.setItem("total", newTotal);
  window.location.reload();
}

function setTotal()
{
  if(sessionStorage.getItem("total"))
  {
    document.getElementById("total").textContent = `$${sessionStorage.getItem("total")}`;
  }
  else
  {
    document.getElementById("total").textContent = "$0";
  }
}

//these 2 are a helper functions
function randint(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function choice(array)
{
  return array[randint(0, array.length - 1)];
}


function limChoice(array) //stands for limited choice
{
  return array[randint(0, 5)]; //both arugments are inclusive
}
//last left off making this function

function getRandom(array)
{
  const num = Math.floor(Math.random() * 100); //returns a random integer from 0 to 99 (both included)
  console.log(num);
  if(num < 4)
  {
    return array[7]; //uranium
  }
  else if(num < 9)
  {
    return array[6]; //bauxite
  }
  else if(num < 19)
  {
    return array[5]; //quartz
  }
  else
  {
    return limChoice(array); //everything else
  }
}

/*
Notes:
make weighted changes
find some way to make the cell fade in as it's clicked
*/