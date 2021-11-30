const items = [
  {
    id: "1",
    title: "Ferrari (w/ keys)",
    description:
      "Last Friday night I had more than one and a half gallons of cookies and cream milk from the BYU Creamery and I don't remember anything else. I lost everything. help.",
    image:
      "https://images.unsplash.com/photo-1541846476-153596ce1e61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    type: "lost",
    reporterId: "1",
  },
  {
    id: "2",
    title: "Credit / Debit Card",
    description: `I am missing four credit / debit cards that I left inside the Coke Machine outside of my apartment. The name on the card says "Batman"`,
    image:
      "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80",
    type: "lost",
    reporterId: "1",
  },

  {
    id: "3",
    title: "car keys",
    description:
      "Found these keys next to the drinking fountain in the talmage",
    image:
      "https://images.unsplash.com/photo-1575908539614-ff89490f4a78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80",
    type: "found",
    reporterId: "1",
  },
  {
    id: "4",
    title: "Backpack",
    description:
      "Saw this backpack outside of the talmage. It has a laptop and a water bottle in it",
    image:
      "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    type: "found",
    reporterId: "1",
  },
  {
    id: "5",
    title: "Blue Sneakers",
    description:
      "Found these sneakers outside of the wilk. They are blue and I think they're adidas.",
    image:
      "https://images.unsplash.com/photo-1521774971864-62e842046145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
    type: "found",
    reporterId: "2",
  },
  {
    id: "6",
    title: "iPhone X",
    description:
      "I found this on the ground in the library! The background has a picture of a cute kitten",
    image:
      "https://images.unsplash.com/photo-1515054562254-30a1b0ebe227?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
    type: "found",
    reporterId: "2",
  },
];

const users = [
  {
    id: "1",
    name: "Batman",
    email: "batman@arkham.io",
  },
  {
    id: "2",
    name: "Jerry",
    email: "jerry@wild.io",
  },
];

const comments = [
  {
    id: "1",
    itemId: "1",
    userId: "1",
    text: "I found this item and it was a ferrari",
  },
  {
    id: "2",
    itemId: "1",
    userId: "2",
    text: "Do you want to meet up so I can pick it up?",
  },
];

export { items, users, comments };
