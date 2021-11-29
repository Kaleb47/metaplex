//import {fs} from "fs";

var fs = require('fs');

async function main() {
    //var storage = new NFTStorage({ endpoint, token });
    let array = [];
    let counter = 1;
    // console.log("storage", storage);
  
    // const dir = "./meta";
    // fs.mkdirSync(dir);
  
    var list = fs.readdirSync("./assets/videos");
    for (const dir of list) {
      const files = fs.readdirSync(`./assets/videos/${dir}`);
      var thumbnail = files[0];
      var video = files[1];
  
      // var cid = await storage.storeDirectory([
      //   new File(
      //     [await fs.promises.readFile(`./videos/${dir}/${thumbnail}`)],
      //     thumbnail
      //   ),
      //   new File(
      //     [await fs.promises.readFile(`./videos/${dir}/${video}`)],
      //     thumbnail.split(".")[0] + ".mp4"
      //   ),
      // ]);
  
      //   console.log(cid);
  
      //   // https://bafybeicvc3nppfad7z6o6ok45odilqlmacutjpvk3safxzqvqhuw3yuqye.ipfs.dweb.link/0.mp4
      //   // https://bafybeicvc3nppfad7z6o6ok45odilqlmacutjpvk3safxzqvqhuw3yuqye.ipfs.dweb.link/0.jpg
  
      // const baseHash = `https://${cid}.ipfs.dweb.link/${dir}`;
  
      var videoMetaData = video.split("-");
      //   // console.log(videoMetaData)
  
      var cap = videoMetaData[0].slice(4).replace("_", " ");
      //   // console.log(cap)
  
      var gill = videoMetaData[1].slice(5).replace("_", " ");
      //   // console.log(gill)
  
      var stem = videoMetaData[2].slice(5).replace("_", " ");
      //   // console.log(stem)
      var background = videoMetaData[3].slice(11).replace("_", " ");
      //   // console.log(background)
      var count = videoMetaData[4];
      //   // console.log(count)
  
      //   // var videoMetaData = {
      //   //   caption: cap,
      //   //   gill: gill,
      //   //   stem: stem,
      //   //   background: background,
      //   //   count: count,
      //   // };
  
      //   // const json = `./Meta/${dir}.json`
      //   // console.log(json)
  
      //   // {
      //   //   "trait_type": "Base",
      //   //   "value": "Starfish"
      //   // },
  
      const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  
      // var videoMetaDataJSON = {
      //   description: `A Cybershroom with ${
      //     vowels.includes(cap.charAt(0)) ? "an" : "a"
      //   } ${cap.replace("_", " ")} cap, ${gill} gills, and ${
      //     vowels.includes(stem.charAt(0)) ? "an" : "a"
      //   } ${stem.replace("_", " ")} stem on ${
      //     vowels.includes(background.charAt(0)) ? "an" : "a"
      //   } ${background.replace("_", " ")} backdrop.`,
      //   external_url: `https://${cid}.ipfs.dweb.link/`,
      //   image: `${baseHash}.jpg`,
      //   name: `Cybershroom #${counter}`,
      //   animation_url: `${baseHash}.mp4`,
      //   attributes: [
      //     {
      //       trait_type: "Cap",
      //       value: cap,
      //     },
      //     {
      //       trait_type: "Gills",
      //       value: gill,
      //     },
      //     {
      //       trait_type: "Stem",
      //       value: stem,
      //     },
      //     {
      //       trait_type: "Background",
      //       value: background,
      //     },
      //   ],
      // };
  
       // Solana version of the metadata
        var videoMEtaDataJSON = {
            "name": `Cybershroom #${counter}`,
            "symbol": "SHROOMS",
            "description": `A Cybershroom with ${
          vowels.includes(cap.charAt(0)) ? "an" : "a"
        } ${cap.replace("_", " ")} cap, ${gill} gills, and ${
          vowels.includes(stem.charAt(0)) ? "an" : "a"
        } ${stem.replace("_", " ")} stem on ${
          vowels.includes(background.charAt(0)) ? "an" : "a"
        } ${background.replace("_", " ")} backdrop.`,
            "seller_fee_basis_points": 500,
            "image": `${dir}.jpg`,
            "external_url": "cybershrooms.com",
            "edition": "2021",
            attributes: [
          {
            trait_type: "Cap",
            value: cap,
          },
          {
            trait_type: "Gills",
            value: gill,
          },
          {
            trait_type: "Stem",
            value: stem,
          },
          {
            trait_type: "Background",
            value: background,
          },
        ],
            "properties": {
                "category": "video",
                "files": [
                    {
                        "uri": `${dir}.mp4`,
                        "type": "video/mp4"
                    }
                ],
                "creators": [
                    {
                        "address": "ES9CnZkQdUTbiqGTVsh2tp9LMykC6TyDmcfBsmDRX9eb", // ####### KALEB ADD ADDRESS HERE #######,
                        "share": 100
                    }
                ]
            }
        }
      
  
      try {
        await fs.writeFile(
          `./assets/videos/${dir}.json`,
          JSON.stringify(videoMetaDataJSON),
          function (err) {
            if (err) throw err;
            console.log(`${counter} of 100`);
            counter++;
          }
        );
      } catch (error) {
        console.log(`${dir} did not load`);
      }
    }
  
    // const metaList = fs.readdirSync("./meta");
  
    // for (const mDir in metaList) {
    //   const newFile = new File(
    //     [await fs.promises.readFile(`./meta/${mDir}`)],
    //     mDir,
    //     { type: "application/json" }
    //   );
    //   array.push(newFile);
    // }
  
    // const metaCID = await storage.storeDirectory(array);
  
    // console.log("finished:" + metaCID);
  }
  
  main();