//GIFTED-MD//

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kkeizzah@gmail.com";
global.location = "Migori,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Keithkeizzah/KEITH-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ad00848dda6847a67ffb0.jpg";
global.devs = "254748387615";
global.sudo = process.env.SUDO || "254748387615";
global.owner = process.env.OWNER_NUMBER || "263771356067";
global.style = process.env.STYLE || "5";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ad00848dda6847a67ffb0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "263771356067";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "263771356067";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01DL1RtUks0Wmc0Rmx1dnk3MTVxTTl2S2NqNXMvdm5NNUNvODgyRVFGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTRnbE5GZW1PWVQyaHhqWFo0eElwWjF5bG82ejdhaDBERm1TZ2xOQmt4ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQ0l1Y3RVUDJiTWkyQXYva3BIMUN2dEo0dE5oSFVlNzQ5RUt5N2ZPSFhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhdjFWdldtb1FSWGVQdjNxVVNpNHlnUlQ4SkFHL0NhbVBMRDJJTWFOeGw4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9LR1p0MUllblh1dnZTUDdzaStxVEpOcDR0akZSRjRYcm1iaHdqS2pVRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFZZEZET0VUbTM4Ly9ZRUcvaVo4ZmU1Y3hwUEJyU0NRNUI4MkRxbTllUmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hVa01hYm1nM3RSR3RmQVQ1eHNGeGU0bjFvNWN4MkJoUnByREltc2trVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzNEQmtIREdLYzZBdm9HOEgrQ0tMNE1xUnZZdmNnNFlLMTJTRmlwSmJCQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNrU2s1dEhVd0NGbVlaQmtyK1NaelNtbTlPQUpKZzhwNHZnRFpWT25XdWpGNy9MWHoyazV0QXpOZ2hMT2JWMmZKRUIzNDhQeXBwbGVOZVFaZFpoNURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6InVVUENKVjZ0T2xyREg5UzU0UjFPVzBNMC9CbWpwUUwzcnlNWURhd1ZkVDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVBcGt4ZG5aUTZlYmQzRmtSNlYwM0EiLCJwaG9uZUlkIjoiNGM3Y2QyM2EtMjRiYy00OGRjLWJjMGMtZmNjNmRkZmIxZWY4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR0YjNmK2QxbURJQW16dlNEMjVRQjViSGxucz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1WUMvNHQrZFR5MGZ2OGw2WGxZMXFsWGdGS2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlJUTUpOOVciLCJtZSI6eyJpZCI6IjI2Mzc3MTM1NjA2NzoxM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3l2bXBFQ0VJL21sTFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid0xJT0xXY2w4M3NwaEtuOFEzUHVteHFveEp6eFFRNFVhS1FtQ29sd2Vucz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRkNFN1JhbFVQOXVQNFlUbGF6dDRORlB6cGt2MlI3c3V4ZE02cklRb3c5Q0FkT1I1M1pEY1ZzaWtWRk9YMWpybzFIS0NINnNzSzdQTnV3OEFqd3hEQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IlZ5a0hXQlIrMU1sVUtZMzY2STlEN3U2SUVpRGZKZHB0U01yOC81OFlUcldkMWh5Tk1kNUVBQnJFVHlwcXNNeGd2SVNUK3ZiekZLVFBSb1BMN2RRckFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzcxMzU2MDY3OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNDeURpMW5KZk43S1lTcC9FTno3cHNhcU1TYzhVRU9GR2lrSmdxSmNIcDcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxMDI1NTZ9"
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "𝐌𝐈𝐆𝐇𝐓𝐘 𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  author: process.env.PACK_AUTHER || "Keith Tech",
  packname: process.env.PACK_NAME || "Keith-Md♥️",
  botname: process.env.BOT_NAME || "tk𝐃",
  ownername: process.env.OWNER_NAME || "𝐊𝐄𝐈𝐓𝐇𝐊𝐄𝐈𝐙𝐙𝐀𝐇",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KEITH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
