const ResourceModel = require('./schema')

let testResource = {}


const InsertTestValues = async () => {
  for (let index = 0; index < 5; index++) {
    let resourceExists = await ResourceModel.exists({ _id: index })

    if (resourceExists) {
      console.log(`Resource ${index} already exists`)
    } else {
      console.log(`Resource ${index} does not exist, creating...`)
      testResource = new ResourceModel(testResources[index])
      await testResource.save()
    }
  }
}

module.exports = InsertTestValues

const testResources = [
  {
    _id: 0,
    name: 'Brooklyn Public Library - Pacific Branch',
    zip: 11217,
    address: '25 Fourth Ave. at, Pacific St, Brooklyn, NY',
    description:
      "Pacific Library opened in 1904 and has the distinction of being the first Carnegie library in Brooklyn. The staff look forward to serving the people of this busy crossroads neighborhood for generations to come through Pacific Library's wide range of information and recreational resources, as well as its innovative events and programs.",
    website: 'https://www.bklynlibrary.org/locations/pacific',
    resource: {
      wifi: 1,
      bathroom: 1,
      printer: 1
    },
    comments: [
      {
        _id: 0,
        username: 'Pat Bradford',
        body: "I visited here for an internet work space, and this place did the trick. The signal was good, sign into the wireless network was easy, so overall it served that purpose. I also wanted to check out this old, uniquely designed building. it is a small space with an almost circular floor plan. So it's a bit interesting and cool. Don't expect to see much from the upstairs windows, many of them have been boarded up with gaskets for wind tubes for ventilation. The circular architecture is unique but this place is a working space so, there's not much done to highlight it. There are community use rooms in the basement, that you won't see entering the main level, I assume they are able to be reserved, which, if so, is convenient and useful.",
        parentId: null,
        createdAt: '2021-05-01T00:00:00.000Z'
      }
    ],
    ratings: {
      printer: 4,
      network: 4,
      quiet: 4,
      accessibility: 4
    }
  },
  {
    _id: 1,
    name: 'Elmer Holmes Bobst Library',
    address: '70 Washington Square S, New York, NY 10012',
    zip: 10012,
    website: 'https://library.nyu.edu/locations/elmer-holmes-bobst-library/',
    description:
      'The Elmer Holmes Bobst Library, often referred to as simply Bobst Library or Bobst, is the main library at New York University in Manhattan, New York City.',
    resource: {
      wifi: 1,
      bathroom: 1,
      printer: 1
    },
    comments: [
      {
        _id: 0,
        username: 'Pat Bradford',
        body: "I visited here for an internet work space, and this place did the trick. The signal was good, sign into the wireless network was easy, so overall it served that purpose. I also wanted to check out this old, uniquely designed building. it is a small space with an almost circular floor plan. So it's a bit interesting and cool. Don't expect to see much from the upstairs windows, many of them have been boarded up with gaskets for wind tubes for ventilation. The circular architecture is unique but this place is a working space so, there's not much done to highlight it. There are community use rooms in the basement, that you won't see entering the main level, I assume they are able to be reserved, which, if so, is convenient and useful.",
        parentId: null,
        createdAt: '2021-05-01T00:00:00.000Z'
      }
    ],
    ratings: {
      printer: 4,
      network: 3,
      quiet: 4,
      accessibility: 0
    }
  },
  {
    _id: 2,
    name: 'El Barrista Cafe',
    address: '2154 3rd Ave, New York, NY 10035',
    zip: 10035,
    website: 'https://www.instagram.com/elbarristanyc',
    description: 'A cafe in East Harlem offering free Wi-Fi.',
    resource: {
      wifi: 1,
      bathroom: 1,
      printer: 1
    },
    comments: [
      {
        _id: 0,
        username: 'Rajiv Mirchandani',
        body: 'This is a very petite library in an urban area. One of the smallest in the QBL network. But great place to pick up books and order some printouts.',
        parentId: null,
        createdAt: '2021-05-01T00:00:00.000Z'
      }
    ],
    ratings: {
      printer: 4,
      network: 4,
      quiet: 4,
      accessibility: 4
    }
  },
  {
    _id: 3,
    name: 'Kimmel Center for University Life',
    address: '60 Washington Square S, New York, NY 10012',
    zip: 10012,
    website: 'https://www.nyu.edu/life/campus-resources/kimmel-center.html',
    description:
      'Located at the heart of the NYU campus, the Kimmel Center provides space and resources for students, faculty, staff, departments, alumni, and community organizations. Visitors have access to NYU Dining, Peet’s Coffee, the adjacent Global Center for Academic & Spiritual Life, and a breathtaking view of Washington Square Park.',
    resource: {
      wifi: 1,
      bathroom: 1,
      printer: 1
    },
    comments: [
      {
        _id: 0,
        username: 'Pat Bradford',
        body: "I visited here for an internet work space, and this place did the trick. The signal was good, sign into the wireless network was easy, so overall it served that purpose. I also wanted to check out this old, uniquely designed building. it is a small space with an almost circular floor plan. So it's a bit interesting and cool. Don't expect to see much from the upstairs windows, many of them have been boarded up with gaskets for wind tubes for ventilation. The circular architecture is unique but this place is a working space so, there's not much done to highlight it. There are community use rooms in the basement, that you won't see entering the main level, I assume they are able to be reserved, which, if so, is convenient and useful.",
        parentId: null,
        createdAt: '2021-05-01T00:00:00.000Z'
      }
    ],
    ratings: {
      printer: 4,
      network: 4,
      quiet: 4,
      accessibility: 4
    }
  },
  {
    _id: 4,
    name: 'Central Library',
    address: '10 Grand Army Plaza, Brooklyn, NY',
    zip: 11238,
    website: 'https://www.bklynlibrary.org/locations/central',
    description:
      'Central Library first opened its doors to the public on February 1, 1941. With its breathtaking façade, sweeping grand lobby and vast contemporary and historical collections, it has been a Brooklyn icon since its opening. The library was designated a New York City Landmark in 1997 and joined the National Register of Historic Places in 2002. Central Library completed the first phase of major renovations in 2021.',
    resource: {
      wifi: 0,
      bathroom: 1,
      printer: 1
    },
    ratings: {
      printer: 0,
      network: 0,
      quiet: 0,
      accessibility: 4
    },
    comments: [
      {
        _id: 0,
        username: 'Paul Rivera',
        body: 'Not only a Beautiful structure, a Magnificent place of learning. So much to do, see, hear, listen to, enjoy and simply engage life. Bring your family, children, friends and loved ones to this library, and discover the World.',
        parentId: null,
        createdAt: '2021-05-01T00:00:00.000Z'
      }
    ]
  }
]
