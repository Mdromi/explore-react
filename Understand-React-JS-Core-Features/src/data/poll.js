const polls = [
  {
    id: "CC749",
    title: "What is your favourite programming language?",
    description:
      "there are lot of popular programming languages available.Among them what is your favourite",
    options: [
      { id: "1a", value: "C programming", vote: 0 },
      { id: "2a", value: "Java", vote: 0 },
      { id: "3a", value: "JavaScript", vote: 0 },
      { id: "4a", value: "Python", vote: 1 },
    ],
    created: new Date(),
    totalVote: 1,
    opinions: [{id: '3E7FVxrrA', name: 'Romi', selectedOption: '4a'}],
  },
  {
    id: "CC74649",
    title: "What is your favourite Stakck?",
    description:
      "there are lot of popular programming languages available.Among them what is your favourite",
    options: [
      { id: "1b", value: "C Stack", vote: 1 },
      { id: "2b", value: "Java Stack", vote: 0 },
      { id: "3b", value: "JavaScript Stack", vote: 0 },
      { id: "4b", value: "Python Stack", vote: 1 },
    ],
    created: new Date(),
    totalVote: 2,
    opinions: [{id: '3E7FVxdqrrA', name: 'Rakib', selectedOption: '4b'}, {id: '3E7FVxdrrA', name: 'Rakib', selectedOption: '1b'}],
  },
  {
    id: "CC7we49",
    title: "What is your favourite programmer?",
    description:
      "there are lot of popular programming languages available.Among them what is your favourite",
    options: [
      { id: "1c", value: "Dennis Ritchie", vote: 0 },
      { id: "2c", value: "Dennis Ritchie", vote: 1 },
      { id: "3c", value: "James Gosling", vote: 0 },
      { id: "4c", value: "Linus Torvalds", vote: 0 },
    ],
    created: new Date(),
    totalVote: 1,
    opinions: [{id: '32E7FVxrrA', name: 'Siam', selectedOption: '2c'}],
  },
];

export default polls