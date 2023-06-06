//Verses
const verse1 = "Proverbs 3:5-6 - Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.";
const verse2 = "Proverbs 10:12 - Hatred stirs up strife, but love covers all offenses.";
const verse3 = "Psalm 1:1 - Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers.";

//Action Items
const action1 = "Reach out to somebody who has been on your mind, and check on them.";
const action2 = "Look out for someone in need today.";
const action3 = "Ask a friend to attend church with you.";

//Prayers
const prayer1 = "Try praying for a stronger faith system today.";
const prayer2 = "Try praying for knowledge, understanding, and wisdom for God's will in your life today.";
const prayer3 = "Try praying for someone who you're not on the best terms with today.";


//Arrays
const verses = [verse1, verse2, verse3];
const actions = [action1, action2, action3];
const prayers = [prayer1, prayer2, prayer3];


//Function to combine all three components
const messages = (arr1, arr2, arr3) => {
    const randVerse = arr1[Math.floor(Math.random() * arr1.length)];
    const randAction = arr2[Math.floor(Math.random() * arr2.length)];
    const randPrayer = arr3[Math.floor(Math.random() * arr3.length)];
    return {randVerse, randAction, randPrayer}
}

console.log(messages(verses, actions, prayers));