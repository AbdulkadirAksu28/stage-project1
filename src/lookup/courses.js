var addUserVue = new Vue({
    el: "#app",
    data: {
      heading: "Vue Select Cascade",
      department: null,
      courses: null,
      department_options: [
        {
          text: "Digital",
          id: 1
        },
        {
          text: "Business",
          id: 2
        },
        {
          text: "Education",
          id: 3
        },
        {
          text: "Healthcare",
          id: 4
        },
        {
          text: "School of Arts",
          id: 5
        },
        {
          text: "Music",
          id: 6
        },
        {
          text: "Social work",
          id: 7
        },
        {
          text: "Green & Tech",
          id: 8
        },
        {
          text: "Media & Toursim",
          id: 9
        }
      ],
      courses_options: {
        1: [
          {
            text: "Software-management",
            id: 1
          },
          {
            text: "Systems and Network",
            id: 2
          },
          {
            text: "Ai and Robotics",
            id: 3
          },
          {
            text: "Full-Stack development",
            id: 4
          }
          
        ],
        2: [
          {
            text: "Corolla",
            id: 1
          },
          {
            text: "Hi Ace",
            id: 2
          }
        ],
        3: [
          {
            text: "Altima",
            id: 1
          },
          {
            text: "Zuke",
            id: 2
          }
        ],
        4: [
          {
            text: "Alto",
            id: 1
          },
          {
            text: "Swift",
            id: 2
          }
        ]
      }
    }
  });