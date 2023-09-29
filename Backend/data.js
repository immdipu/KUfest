const City = require("./model/City");


const data = [
    {
      image:
        "https://www.mountainiq.com/wp-content/uploads/2023/05/things-to-do-in-kathmandu.jpg",
      title: "Kathmandu",
      description:
        "Nepal's capital, is a vibrant city with a rich history. Explore its ancient temples, bustling markets, and Swayambhunath Stupa. ",
    },
    {
      title: "Pokhara",
      description:
        "known for its stunning lakes and mountain views, is the gateway to the Annapurna Circuit. Enjoy boating on Phewa Lake and visit the World Peace Pagoda.   ",
      image: "https://wallpapercave.com/wp/wp7247098.jpg",
    },
    {
      title: "Lalitpur",
      description:
        "This historic city is known for its well-preserved architecture and ancient temples.Patan Durbar Square is a major attraction, showcasing traditional Newari architecture.   ",
      image:
        "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F5lidjv3z7te61.jpg",
    },
    {
      title: "Nagarkot",
      description:
        " A hill station located near Kathmandu, Nagarkot offers breathtaking views of the Himalayan mountain range, including Mount Everest, especially at sunrise and sunset.  ",
      image:
        "https://www.viator.com/tours/Kathmandu/Nagarkot-Sunrise-and-Refreshing-Hike-to-Changu-Narayan-Temple-from-Kathmandu/d5109-66561P18",
    },
    {
      title: "Gosaikunda",
      description:
        "This high-altitude alpine lake is a popular trekking destination in the Langtang National Park region. The lake is considered sacred and is surrounded by stunning mountain scenery.",
      image:
        "https://c4.wallpaperflare.com/wallpaper/736/721/212/gosaikunda-nepal-wallpaper-preview.jpg",
    },
    {
      title: "Chitwan",
      description:
        "Chitwan National Park is a UNESCO World Heritage Site and one of Nepal's premier wildlife destinations.Visitors can go on jungle safaris to spot rhinoceroses, tigers, elephants, and a wide variety of bird species. ",
      image:
        "https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5c337a21121342bd3505299a_top%20things%20to%20do%20in%20Chitwan-p-800.jpeg",
    },
    {
      title: "Lumbini",
      description:
        "The birthplace of Siddhartha Gautama, who later became Buddha, Lumbini is a sacred pilgrimage site for Buddhists.The Mayadevi Temple and Ashoka Pillar are among its important landmarks.",
      image:
        "https://en.wikipedia.org/wiki/Lumbini#/media/File:BRP_Lumbini_Mayadevi_temple.jpg",
    },
    {
      title: "Mustang",
      description:
        "A mystical desert in the Himalayas, where ancient monasteries and dramatic landscapes blend to create an enchanting realm of culture and adventure.",
      image:
        "https://www.adventurehimalayacircuit.com/blog/wp-content/uploads/2022/11/Upper-Mustang-Trekking-Information.jpg",
    },
    {
      title: "Dharan",
      description:
        "Located in eastern Nepal, Dharan is known for its pleasant climate, tea gardens, and proximity to the Koshi Tappu Wildlife Reserve.",
      image:
        "https://i0.wp.com/nattap1.org/wp-content/uploads/2022/01/Dharan.jpg?resize=650%2C450&ssl=1",
    },
  ];
const dataFunction = async() =>{

  data.forEach(cityData => {
    const city = new City({
      name: cityData.title,
      description: cityData.description,
      images: [cityData.image] // Assuming you want to store images as an array of strings
      // Add other properties as needed
    });
    
    // Save the city to the database
    city.save();
  });
}
module.exports = {
  dataFunction
}
