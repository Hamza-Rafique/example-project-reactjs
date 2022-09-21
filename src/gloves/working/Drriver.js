
function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
import ss_1_1101 from "../../images/Work & Safety Gloves /Drriver Gloves & TPR Driver Gloves/";
const images = importAll(require.context('', false, /\.(png|jpe?g|svg)$/));

console.log(images)

   export const cottonGloves = [
    {
      id: 1,
      name: "Assembly Gloves",
      ArtNo: "ss_1_1101",
      img: ss_1_1101,
      Description: "Cotton Fabric Palm & Back Cotton Gloves",
    },
    {
      id: 2,
      name: "Assembly Gloves",
      ArtNo: "ss_1_1102",
      img: ss_1_1102,
      Description: "Cotton Fabric Palm & Back Cotton Gloves",
    },
   ]