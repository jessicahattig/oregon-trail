class Narrative {
  points = 0;

  constructor(choice) {
    this.storyData = [
      { //index 0
        text: "EcoGuard: Corporate Takedown You are Alex, a young eco-warrior standing against the environmentally destructive Monsanto Corporation. Start: You're in the heart of the city, watching as smog clouds the skyline. Monsanto's logo is everywhere,",
        choices: [
          {text: " Sneak into a Monsanto facility to gather information?", arrayIndex: 1 },
          {text: "Seek out the eco-resistance in the nearby forest?", arrayIndex: 2 }
        ]
      },
      { //index 1
        text: "Sneak into Monsanto facility: You manage to bypass security and enter the facility, but it's crawling with guards.",
        choices: [
          {text: "Try to hack into their mainframe for evidence?", arrayIndex: 3 },
          {text: "Look for a physical file or documents?", arrayIndex: 4 }
        ]
      },
      { //index 2
        text: "Seek out the eco-resistance: You meet a group of environmentalists. They offer you tools and gadgets to help",
        choices: [
          {text: "Lay low and avoid confrontation?", arrayIndex: 5 },
          {text: "Prepare for an imminent Monsanto retaliation?", arrayIndex: 6 }
        ]
      },
      { //index 3
      text: "While hacking the Monsanto mainframe, you're caught while hacking and are thrown into a cell",
        choices: [
          {text: "Accept their tech and plan a joint sabotage mission?", arrayIndex: 5},
          {text: "Decline and decide to gather more allies from the city?", arrayIndex: 6 }
        ]
      },
      { //index 4
      text: "While looking for evidence at the facility, you find incriminating documents about their operations",
        choices: [
          {text: "Leak it to the media immediately?", narrayIndex: 5},
          {text: "Share it with the resistance?", arrayIndex: 6 }
        ]
      },
      { //index 5
      text: "While pulling off the sabotage operation, you succeed but gather lots of attention",
        choices: [
          {text: "Lay low?", arrayIndex: 5},
          {text: "Prepare for Retaliation", arrayIndex: 6 }
        ]
      },
      { //index 6
      text: "While looking for evidence at the facility, you find incriminating documents about their operations",
        choices: [
          {text: "Accept their tech and plan a joint sabotage mission?", arrayIndex: 5},
          {text: "Decline and decide to gather more allies from the city?", narrayIndex: 6 }
        ]
      },
    ];
    this.currentStep = 0;
  }