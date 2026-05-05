
function getImages()
{
    const ores = ["iron", "copper", "coal", "sulfur", "bauxite", "quartz", "uranium", "caterium"];
    for(let rowNum = 1; rowNum < 3; rowNum++)
    {
        for(let cellNum = 0; cellNum < 4; cellNum++)
        {
            //cell
            //const ore = choice(ores);
            const ore = ores[cellNum + 4];
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
            //name.style.
            name.style.margin = "0px";
            name.style.marginTop = "2px";
            oreEle.appendChild(name);
            
            oreEle.onclick = function() {clicked(name, oreImg)};
            document.getElementById(`row-${rowNum}`).appendChild(oreEle);
        }
    }
}

function clicked(name, img)
{
  img.style.opacity = "1";
  name.style.color = "black";

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

function makeNew()
{
  if(sessionStorage.getItem("total"))
  {
    const newTotal = Number(sessionStorage.getItem("total")) + Number(document.getElementById("winnings").textContent.split("$")[1]);
    sessionStorage.setItem("total", newTotal);
  }
  else
  {
    sessionStorage.setItem("total", "0");
  }
  window.location.reload();
}

function setTotal()
{
  document.getElementById("total").textContent = `$${sessionStorage.getItem("total")}`;
}

//last left off setting the total to save

//these 2 are a helper functions
function randint(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function choice(array)
{
  return array[randint(0, array.length - 1)];
}

/*
Notes:
consider weighted changes
find cool google font
maybe add more cells
find some way to make the cell fade in as it's clicked
make consistent cell sizes
*/