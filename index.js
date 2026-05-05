
function getImages()
{
    const ores = ["iron", "copper", "coal", "sulfur", "bauxite", "quartz", "uranium", "caterium"];
    for(let rowNum = 1; rowNum < 3; rowNum++)
    {
        for(let cellNum = 0; cellNum < 4; cellNum++)
        {
            //cell
            //const ore = choice(ores);
            const ore = ores[cellNum];
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
            
            document.getElementById(`row-${rowNum}`).appendChild(oreEle);
        }
    }
}
//last left off improving the visuals
//next: probaly work on the onclick function

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
//see if pages was deleted
*/