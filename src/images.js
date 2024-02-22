const imagesList = [
    {
      id: 1,
      source: 'https://f8n-production-collection-assets.imgix.net/0x8568df9e9B418726BbE2DA13A93BB047a21e3a63/2/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'pablo',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "Lorem ipsum dolor sit amet consectetur",
      likes: 15,
      bookmarks: 9
    },
    {
      id: 2,
      source:
        'https://f8n-production-collection-assets.imgix.net/0x4dFa3bca14EC3Ba48A4e610d0894e70d2A35f374/4/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'picasso',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: " Sed do eiusmod tempor incididunt ut labore",
      likes: 25,
      bookmarks: 7
    },
    {
      id: 3,
      source: 'https://f8n-production-collection-assets.imgix.net/0x8568df9e9B418726BbE2DA13A93BB047a21e3a63/15/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'davinci',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "It's 2024 and we still here",
      likes: 30,
      bookmarks: 12
    },
    {
      id: 4,
      source: 'https://f8n-production-collection-assets.imgix.net/0x8568df9e9B418726BbE2DA13A93BB047a21e3a63/14/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'hell_no',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "It's 2024 and we still here",
      likes: 8,
      bookmarks: 3
    },
    {
      id: 5,
      source: 'https://f8n-production-collection-assets.imgix.net/0x8568df9e9B418726BbE2DA13A93BB047a21e3a63/1/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'jayz',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "It's 2024 and we still here",
      likes: 45,
      bookmarks: 19
    },
    {
      id: 6,
      source: 'https://f8n-production-collection-assets.imgix.net/0x8568df9e9B418726BbE2DA13A93BB047a21e3a63/16/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'bieber',
      collection_name: 'WONDER WOMAN',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "It's 2024 and we still here",
      likes: 47,
      bookmarks: 20
    },
    {
      id: 7,
      source: 'https://f8n-production-collection-assets.imgix.net/0x8568df9e9B418726BbE2DA13A93BB047a21e3a63/8/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'ghandi',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "love n peace",
      likes: 63,
      bookmarks: 41
    },
    {
      id: 8,
      source: 'https://f8n-production-collection-assets.imgix.net/0x4dFa3bca14EC3Ba48A4e610d0894e70d2A35f374/4/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'daemon',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "new collection coming soon",
      likes: 72,
      bookmarks: 122
    },
    {
      id: 9,
      source: 'https://f8n-production-collection-assets.imgix.net/0x8568df9e9B418726BbE2DA13A93BB047a21e3a63/23/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'boooo',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "It's 2024 and we still here",
      likes: 150,
      bookmarks: 15
    },
    {
      id: 10,
      source: 'https://f8n-production-collection-assets.imgix.net/0x8568df9e9B418726BbE2DA13A93BB047a21e3a63/17/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'dave',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "It's 2024 and we still here",
      likes: 15,
      bookmarks: 45
    },
    {
      id: 11,
      source: 'https://f8n-production-collection-assets.imgix.net/0x0aeF2E05D0D7aB077797C57456C0B93C642B4d92/8/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: 'travis',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "It's 2024 and we still here",
      likes: 10,
      bookmarks: 8
    },
    {
      id: 12,
      source: 'https://f8n-production-collection-assets.imgix.net/0x8568df9e9B418726BbE2DA13A93BB047a21e3a63/7/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max',
      author: '_axx',
      title: 'AI MADE IT',
      owner: 'LouvreOnline',
      name:'Helena Lake',
      caption: "It's 2024 and we still here",
      likes: 105,
      bookmarks: 29
    }
  ]

  export default imagesList