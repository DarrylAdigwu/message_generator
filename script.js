const verseText = document.getElementById('verse');
const focusText = document.getElementById('focus');
const actionText = document.getElementById('action-item');
const shuffleBtn = document.getElementById('button');

//Verses
const verse1 = "Proverbs 3:5-6 - Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.";
const verse2 = "James 1:6 - But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.";
const verse3 = "Proverbs 10:12 - Hatred stirs up strife, but love covers all offenses.";
const verse4 = "1 Peter 4:8 - Above all, love each other deeply, because love covers over a multitude of sins.";
const verse5 = "Psalm 1:1 - Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers.";
const verse6 = "Romans 6:10 - The death he died, he died to sin once for all; but the life he lives, he lives to God.";

//Action Items
const action1 = "Reach out to somebody who has been on your mind, and check on them.";
const action2 = "Work on what your prayed for today, and pray when it gets tough.";
const action3 = "Look out for someone in need today.";
const action4 = "Put aside what you need today, for someone else that can use your help.";
const action5 = "Ask a friend to attend church with you.";
const action6 = "Ask someone if you can pray for them today.";


//Prayers
const prayer1 = "Try praying for a stronger faith system today.";
const prayer2 = "Try praying for faith in God's will for your life today.";
const prayer3 = "Try praying for someone who you're not on the best terms with today.";
const prayer4 = "Try praying for a better understanding on how to love in your relationship.";
const prayer5 = "Try praying for knowledge, understanding, and wisdom for God's will in your life today.";
const prayer6 = "Try praying for deliverance from the sin you are battling with currently.";

//Arrays
//verses
let verse = [verse1, verse2, verse3, verse4, verse5, verse6];
//actions
let action = [action1, action2, action3, action4, action5, action6];
//prayers
let prayer = [prayer1, prayer2, prayer3, prayer4, prayer5, prayer6]

//Objects
let messageObj = {
    verse: verse,
    action: action,
    pray: prayer
};

const random = (obj) => {
    let messageArr = [];
    let objVal = Object.values(obj);
    for(let i=0; i<objVal.length; i++) {
        const values = objVal[i];
        const rand = values[Math.floor(Math.random() * values.length)];
        messageArr.push(rand);
    }
    return messageArr;
};

//Shuffle new messages into display
shuffleBtn.addEventListener('click', () => {
    const randomMessage = random(messageObj);

//Variables to store individual messages
    let randVerse = random(messageObj)[0];
    let randAction = random(messageObj)[1];
    let randPrayer = random(messageObj)[2];

    if(randVerse) {
      verseText.innerText = randVerse; 
      actionText.innerText = randAction; 
      focusText.innerText = randPrayer;  
    }
});




