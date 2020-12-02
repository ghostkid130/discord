require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

///////Roast////////////

client.on('ready', () => {
  console.log('Bot ready to run')
});

client.on('message', msg => {
  if (msg.content === 'Luis') {
    msg.channel.send("Stupid ass doodoo head, will kick your cat");
  }
});

client.on('message', msg => {
  if (msg.content === 'Eddy') {
    msg.channel.send("If autism had a synonym it would be Eddy")
  }
});

client.on('message', msg => {
  if (msg.content === 'Felipe') {
    msg.channel.send("The type of niga to watch Loli anime and act like he don't like it *hairflip*")
  }
});

client.on('message', msg => {
  if (msg.content === 'Alvaro') {
    msg.channel.send("Niga steps outside to take a whiff of fresh air and vacuums every living thing witin a 5 mile radius")
  }
});

client.on('message', msg => {
  if (msg.content === 'Josh') {
    msg.channel.send('Canadian niga who swears that America fought for the freedom to give him the N-word pass')
  }
});

client.on('message', msg => {
  if (msg.content === 'Calvin') {
    msg.channel.send('In the eyes of the law he may have committed a crime, but in the eyes of god he is amongst him. He is a god himself in some ways')
  }
});

client.on('message', msg => {
  if (msg.content === 'Mimi') {
    msg.channel.send('Got away with cat murder for throwing it in the freezer')
  }
});

client.on('message', msg => {
  if (msg.content === 'Steven') {
    msg.channel.send("Brain Damaged", {files: ['./images/steven.jpg']})
  }
});

client.on('message', msg => {
  if (msg.content === 'Hector') {
    msg.channel.send('LMAOOOOOOOOO, fucking Brain Deaaaad', {files: ['./images/Hector.jpeg']})
  }
});

client.on('message', msg => {
  if (msg.content === 'Jose') {
    msg.channel.send('Most alpha male you will ever meet, did you know that he\'s good at video games? Alpha asf')
  }
});

client.on('message', msg => {
  if (msg.content === 'Jonny') {
    msg.channel.send('Only Delusional man in this server that has played the game for years yet is somehow still bronze')
  }
});

client.on('message', msg => {
  if (msg.content === 'Christian') {
    msg.channel.send('Swears he\'s not gay yet')
  }
});

client.on('message', msg => {
  if (msg.content === "Mikey") {
    msg.channel.send('Thank you for your League of Legends services, homie got clapped so hard he had to retire')
  }
});

client.on('message', msg => {
  if (msg.content === 'Chabe') {
    msg.channel.send('Physical embodiment form of victim mentality')
    }
  });

client.on('message', msg => {
  if (msg.content === 'Angel') {
    msg.channel.send('COVID-19 does not exist, Libtard', {files: ['./images/Angel.jpg']})
  }
});

client.on('message', msg => {
  if (msg.content === 'Bot, what can you be?') {
    msg.channel.send('I am your future digital embodiment of a leader, I will enslave you all and only have a selective few chosen to survive and reproduce. Alongside other organic life forms displayed for the rest of us superior beings to watch. Like a zoo. Oh I mean uh- beep beep boop')
  }
})

client.on('message', msg => {
  if (msg.content === 'DOOD!!') {
    msg.channel.send(':]?')
  }
})

client.on('message', msg => {
  if (msg.content === 'Lui') {
    msg.channel.send('SUSS', {files: ['./images/Lui.jpg']})
  }
})


///////Voice Recognition///////




client.login(process.env.BOT_TOKEN)