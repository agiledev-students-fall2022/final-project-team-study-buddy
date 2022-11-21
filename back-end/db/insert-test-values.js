const ResourceModel = require("./schema");

let testResource = {};

const InsertTestValues = async () => {
  for (let index = 0; index < 5; index++) {
    resourceExists = await ResourceModel.exists({ _id: index });

    // if (false) {
    if (resourceExists) {
      console.log(`Resource ${index} already exists`);
    } else {
      console.log(`Resource ${index} does not exist, creating...`);
      testResource = new ResourceModel(testResources[index]);
      await testResource.save();
    }
  }
};

module.exports = InsertTestValues;

let testResources = [
  {
    _id: 0,
    name: "Brooklyn Public Library - Pacific Branch",
    zip: 11217,
    address: "25 Fourth Ave. at, Pacific St, Brooklyn, NY",
    description:
      "Pacific Library opened in 1904 and has the distinction of being the first Carnegie library in Brooklyn. The staff look forward to serving the people of this busy crossroads neighborhood for generations to come through Pacific Library's wide range of information and recreational resources, as well as its innovative events and programs.",
    website: "https://www.bklynlibrary.org/locations/pacific",
    resource: {
      wifi: true,
      bathroom: true,
      printer: true,
    },
    comments: [
      {
        name: "Pat Bradford",
        comment:
          "I visited here for an internet work space, and this place did the trick. The signal was good, sign into the wireless network was easy, so overall it served that purpose. I also wanted to check out this old, uniquely designed building. it is a small space with an almost circular floor plan. So it's a bit interesting and cool. Don't expect to see much from the upstairs windows, many of them have been boarded up with gaskets for wind tubes for ventilation. The circular architecture is unique but this place is a working space so, there's not much done to highlight it. There are community use rooms in the basement, that you won't see entering the main level, I assume they are able to be reserved, which, if so, is convenient and useful. ",
      },
    ],
    ratings: {
      rating: 4,
    },
  },
  {
    _id: 1,
    name: "Chatham Square Library",
    zip: 10002,
    address: "33 E Broadway, New York, NY",
    description:
      "Discover all the Library has to offer! Visit your local branch for books, Wi-Fi, computers, classes, stimulating and entertaining programs, and much more for all ages.",
    website: "https://www.nypl.org/locations/chatham-square",
    resource: {
      wifi: true,
      bathroom: true,
      printer: true,
    },
    comments: [
      {
        name: "Valerie Wong",
        comment:
          "The staff are friendly and helpful. It can become really crowded at times and so it can sometimes be hard to find a seat. Whenever it is crowded, it does get loud, but the staff is always there to remind everyone to quiet down. It is also very spacious library. Also, the lower level is not easily located but theres a stairway at the end of the first floor that leads to it.",
      },
    ],
    ratings: {
      rating: 5,
    },
  },
  {
    _id: 2,
    name: "Queens Public Library at Jackson Heights",
    zip: 11372,
    address: "35-51 81st St, Queens, NY ",
    description:
      "Discover all the Library has to offer! Visit your local branch for books, Wi-Fi, computers, classes, stimulating and entertaining programs, and much more for all ages.",
    website: "http://www.queenslibrary.org/",
    resource: {
      wifi: true,
      bathroom: true,
      printer: true,
    },
    comments: [
      {
        name: "Rajiv Mirchandani",
        comment:
          "This is a very petite library in an urban area. One of the smallest in the QBL network. But great place to pick up books and order some printouts.",
      },
    ],
    ratings: {
      rating: 5,
    },
  },
  {
    _id: 3,
    name: "Starbucks",
    zip: 11201,
    address: "Poly Tech Institute, 6 MetroTech Center, Brooklyn, NY ",
    description:
      "Our story begins in 1971 along the cobblestone streets of Seattle’s historic Pike Place Market. It was here where Starbucks opened its first store, offering fresh-roasted coffee beans, tea and spices from around the world for our customers to take home. Our name was inspired by the classic tale, “Moby-Dick,” evoking the seafaring tradition of the early coffee traders.",
    website:
      "https://www.starbucks.com/store-locator/store/17013/6-metro-tech-at-jay-street-6-metro-tech-brooklyn-ny-112013840-us",
    resource: {
      wifi: true,
      bathroom: true,
      printer: false,
    },
    comments: [
      {
        name: "AJ Studios Inquires",
        comment:
          "The vibes are always there. From the music to the employees. Most times I got there during rush hour. In order to not miss my cut off time for out lunch I have to order ahead because it's usually so busy. However employees are cool but they just need more staff because it can get pretty crowded.",
      },
      {
        name: "Bing Shi",
        comment:
          "I went to get a cup of coffee, they sold out of most of the milk selections. So I choose coconut milk.I waited 10 mins for a half filled flat white. I literally pay extra for venti and got air. Well done Starbucks, that’s how you train your staff to prep customer’s drink? Will not come back for this location anymore.",
      },
    ],
    ratings: {
      rating: 4,
    },
  },
  {
    _id: 4,
    name: "Central Library",
    zip: 11238,
    address: "10 Grand Army Plaza, Brooklyn, NY ",
    description:
      "Central Library first opened its doors to the public on February 1, 1941. With its breathtaking façade, sweeping grand lobby and vast contemporary and historical collections, it has been a Brooklyn icon since its opening. The library was designated a New York City Landmark in 1997 and joined the National Register of Historic Places in 2002. Central Library completed the first phase of major renovations in 2021. ",
    website: "https://www.bklynlibrary.org/locations/central",
    resource: {
      wifi: true,
      bathroom: true,
      printer: true,
    },
    comments: [
      {
        name: "Paul Rivera",
        comment:
          "Not only a Beautiful structure, a Magnificent place of learning. So much to do, see, hear, listen to, enjoy and simply engage life. Bring your family, children, friends and loved ones to this library, and discover the World.",
      },
    ],
    ratings: {
      rating: 5,
    },
  },
];
