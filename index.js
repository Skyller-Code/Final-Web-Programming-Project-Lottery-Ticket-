
function getImages()
{
  const ores = ["iron", "copper", "coal", "sulfur", "caterium", "quartz", "bauxite", "uranium"];
  for(let rowNum = 1; rowNum < 3; rowNum++)
  {
      for(let cellNum = 0; cellNum < 4; cellNum++)
      {
          //cell itself
          const ore = getRandom(ores);
          const oreEle = document.createElement("div");
          oreEle.className = "cell";

          //cell's image
          const oreImg = document.createElement("img");
          oreImg.src = `resources/${ore}_ore.webp`;
          oreImg.alt = `${ore} Image`;
          oreEle.appendChild(oreImg);

          //cell's / image's name
          const name = document.createElement("h3");
          name.textContent = ore;
          name.style.margin = "0px";
          name.style.marginTop = "2px";
          oreEle.appendChild(name);
          
          oreEle.onmouseover = function() {select(name, oreImg, oreEle)};
          document.getElementById(`row-${rowNum}`).appendChild(oreEle);
      }
  }
}

function select(name, img, ele)
{
  img.style.opacity = Number(img.style.opacity) + 0.1;
  name.style.opacity = window.getComputedStyle(name)["opacity"];
  name.style.opacity = Number(name.style.opacity) + 0.1;

  if(Number(name.style.opacity) == 1)
  {
    ele.onmouseover = "";
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
  }
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

function randint(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function limChoice(array) //stands for limited choice
{
  return array[randint(0, 4)]; //both arugments are inclusive
}

function getRandom(array)
{
  const num = randint(0, 99); //makes a random number from 0 to 99 (both are inclusive)
  if(num < 5) //5% for uranium
  {
    return array[7];
  }
  else if(num < 10) //10% for bauxite
  {
    return array[6];
  }
  else if(num < 20) //20% for quartz
  {
    return array[5];
  }
  else //80% for everything else
  {
    return limChoice(array);
  }
}