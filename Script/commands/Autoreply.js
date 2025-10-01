const fs = global.nodemodule["fs-extra"];
const path = global.nodemodule["path"];

module.exports.config = {
  name: "autoreplybot",
  version: "6.0.2",
  hasPermssion: 0,
  credits: "𝗞𝗼𝗯𝗶",
  description: "Auto-response bot with specified triggers",
  commandCategory: "No Prefix",
  usages: "[any trigger]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return; 
  const name = await Users.getNameUser(senderID);
  const msg = body.toLowerCase().trim();

  const responses = {
    "miss you": "অরেক বেডারে Miss না করে xan মেয়ে হলে বস 𝗞𝗼𝗯𝗶 রে হাঙ্গা করো😶👻😘",
    "বট তোর বস কে": "আমার বস এক মাত্র কবি, বসের আইডি লিং https://www.facebook.com/kabi.kaji.najarula.isalama.195620 ",
    "👍": "হাত মারো কেন সোনা। কথা বলো..!🐸🤣👍⛏️",
    "কবি": "কবি বস এখন বিজি তার সাথে যোগাযোগ করতে চাইলে https://www.facebook.com/kabi.kaji.najarula.isalama.195620 ",
    "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵",
    "bc": "SAME TO YOU😊",
    "pro": "Khud k0o KYa LeGend SmJhTi Hai 😂",
    "good morning": "GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚",
    "tor ball": "~ এখনো বাল উঠে নাই নাকি তোমার?? 🤖",
    "kobi": "উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",
    "owner": "‎[𝐎𝐖𝐍𝐄𝐑:☞ 𝗞𝗼𝗯𝗶☜\nFacebook: https://www.facebook.com/kabi.kaji.najarula.isalama.195620 WhatsApp: +8801781632776",
    "admin": "He is মনিরুজ্জামান খান  তাকে সবাই 𝗞𝗼𝗯𝗶 হিসেবে চিনে😘☺️",
    "baby": "এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে কবি বস কে নক দাও https://www.facebook.com/kabi.kaji.najarula.isalama.195620 😍.",
    "chup": "তুই চুপ চুপ কর পাগল ছাগল",
    "assalamualaikum": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ 💖",
    "fork": "https://github.com/shahadat-sahu/SHAHADAT-CHAT-BOT.git",
    "boss": "আমার বস কবি বসের আইডি লিং https://www.facebook.com/kabi.kaji.najarula.isalama.195620 ",
    "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস কবি রে তোর গার্লফ্রেন্ড টা দিয়ে দে..!🐸🥵",
    "i love you": "মেয়ে হলে আমার বস 𝗞𝗼𝗯𝗶 এর ইনবক্সে এখুনি গুঁতা দিন https://www.facebook.com/kabi.kaji.najarula.isalama.195620 🫢😻",
    "by": "কিরে তুই কই যাস কোন লাং এর সাথে চিপায় যাবি..!🌚🌶️",
    "ami tor boss": "আমার বস কবি বসের আইডি লিং https://www.facebook.com/kabi.kaji.najarula.isalama.195620 ..?☺️",
    "bot er baccha": "আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️",
    "tor nam ki": "MY NAME IS ─꯭─⃝‌‌𝗞𝗼𝗯𝗶 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭💖",
    "কবি কে": "কবি আমার বস, বসের আইডি লিং https://www.facebook.com/kabi.kaji.najarula.isalama.195620😒",
    "cudi": "এত চোদা চুদি করস কেনো..!🥱🌝🌚",
    "kobi k": "কবি আমার বসের নাম বসের আইডি লিং https://www.facebook.com/kabi.kaji.najarula.isalama.195620 🥰",
    "heda": "এতো রাগ শরীরের জন্য ভালো না 🥰",
    "boda": "ভাই তুই এত হাসিস না..!🌚🤣",
    "love you": "ভালোবাসা নামক আবলামী করতে চাইলে কবি বসের ইনবক্সে জাও বসের আইডি লিং 😘 https://www.facebook.com/kabi.kaji.najarula.isalama.195620 ",
    "kire ki koros": "তোমার কথা ভাবতে ছি জানু",
    "kire bot": "হ্যাঁ সব কেমন আছেন আপনার ওই খানে উম্মাহ 😘😽🙈"
  };

  if (responses[msg]) {
    return api.sendMessage(responses[msg], threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  return this.handleEvent({ api, event, Users });
};
