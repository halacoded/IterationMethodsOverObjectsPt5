const channels = [
  {
    name: "PowerfulJRE",
    description: "The Joe Rogan Experience podcast",
    videos: [
      {
        title: "Joe Rogan Experience #1480 - Kevin Hart",
        duration: 121,
      },
      {
        title: "Joe Rogan Experience #1470 - Elon Musk",
        duration: 120,
      },
      {
        title: "Joe Rogan Experience #1477 - Tony Hawk",
        duration: 102,
      },
      {
        title: "Joe Rogan Experience #1413 - Bill Maher",
        duration: 118,
      },
      {
        title: "Joe Rogan Experience #1208 - Jordan Peterson",
        duration: 175,
      },
    ],
  },
  {
    name: "LEMMiNO",
    description:
      "Documentaries and list videos narrated by a 20-something Swedish guy.",
    videos: [
      {
        title: "The Universal S",
        duration: 19,
      },

      {
        title: "Cicada 3301: An Internet Mystery",
        duration: 18,
      },
      {
        title: "The Search For D.B. Cooper",
        duration: 29,
      },
      {
        title: "The Mandela Effect: A Critical Analysis",
        duration: 16,
      },
    ],
  },
  {
    name: "CGP Grey",
    description: "What ever I finds interesting.",
    videos: [
      {
        title: "The Trouble With Tumbleweed",
        duration: 7,
      },

      {
        title: "Lockdown Productivity: Spaceship You",
        duration: 11,
      },
      {
        title: "The Fable of the Dragon-Tyrant",
        duration: 13,
      },
      {
        title: "The Rules for Rulers",
        duration: 18,
      },
      {
        title: "The Simple Solution to Traffic",
        duration: 4,
      },
      {
        title: "You Are Two",
        duration: 5,
      },
    ],
  },
  {
    name: "Alternate History Hub",
    description:
      "An entire channel dedicated to the 'What If?'.  Using knowledge of geography, population and other historical facts I predict what could have happened had things gone differently in history.",
    videos: [
      {
        title: "What if Rome Never Existed? Part III",
        duration: 19,
      },

      {
        title: "What if Trump Was Never Elected President?",
        duration: 4,
      },
      {
        title: "How A Corporation Conquered A Sub-Continent",
        duration: 18,
      },
      {
        title: "What if Antarctica Was A Green Continent?",
        duration: 18,
      },
      {
        title: "Why Tyrion's Solution For Westeros Doomed Everyone",
        duration: 8,
      },
      {
        title: "What if Napoleon Never Fell?",
        duration: 10,
      },
    ],
  },
  {
    name: "Example and Ample",
    description: "Some things are better left unsaid.",
    videos: [
      {
        title: "Billie Ellish: everything i wanted",
        duration: 4,
      },
    ],
  },
];
// console.log(channels[0]);

/**************************************************************
 * getChannelName(channel)
 * - receives a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  return channel.name;
}

console.log(getChannelName(channels[0]));

/**************************************************************
 * numberOfVideos(channel)
 * - receives a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  let count = 0;
  channel.videos.forEach((video) => {
    count++;
  });
  return count;
}
console.log(numberOfVideos(channels[0]));

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - receives a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  return channel.videos.some((video) => video.title == videoTitle);
}
console.log(channelHasVideo("The Universal S", channels[0]));
console.log(channelHasVideo("The Universal S", channels[1]));

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - receives an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  return channels.find((channel) => {
    if (channel.name == channelName) {
      return true;
    } else {
      return false;
    }
  });
}
console.log(getChannelByName("PowerfulJRE", channels));

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - receives an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  return channels.find((channel) => {
    if (channel.videos.some((video) => video.title == videoTitle)) {
      return true;
    } else {
      return false;
    }
  });
}
console.log(getChannelByVideoTitle("The Universal S", channels));

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  return channels.filter((channel) => {
    if (channel.name.includes(query) || channel.description.includes(query)) {
      return true;
    } else {
      return false;
    }
  });
}

console.log("quer");
console.log(searchChannels("the", channels));

//Bonus

/**************************************************************
 * totalVideosDuration(channel):
 * - receives a channel object
 * - returns the total duration of all the videos in this channel
 *
 * BONUS: use iteration method `.reduce()`
 ****************************************************************/
function totalVideosDuration(channel) {
  return channel.videos.reduce((total, current) => {
    return (total = total + current.duration);
  }, 0);
}

console.log(totalVideosDuration(channels[0]));

/**************************************************************
 * channelWithMostContent(channels):
 * - receives an array of channel objects
 * - returns the channel with the highest total video duration
 *
 * Hint: use the `totalVideosDuration()` function
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function channelWithMostContent(channels) {
  let highestChannel = 0;
  let channelHigh = {};
  channels.forEach((channel) => {
    if (totalVideosDuration(channel) > highestChannel) {
      highestChannel = totalVideosDuration(channel);
      channelHigh = channel;
    }
  });
  return channelHigh;
}
console.log("*********************************");
console.log(channelWithMostContent(channels));

/**************************************************************
 * longestChannelName(channels):
 * - receives an array of channel objects
 * - returns the channel with the longest name
 *
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function longestChannelName(channels) {
  let maxLength = 0;
  let channelWithLongestName = {};
  let x = channels.sort((channel) => {
    if (maxLength < channel.name.length) {
      maxLength = channel.name.length;
      channelWithLongestName = channel;
    }
  });
  return channelWithLongestName;
}

// Check your answers by running this file and comparing what it logs
console.log("*********************************");
console.log(longestChannelName(channels));
