# Check Yo Self!: A MEAN stack SPA app (Project #4, aka "Keystone" Project)

![appscreenshot](http://i.imgur.com/5l17ZJk.png)


### Technologies Used

- MS Text Analytics API (3rd party API)
- Mongo/Mongoose (DB)
- ReactJS (Front-end Framework)
- React Bootstrap (CSS Framework)
- Express (Back-end)
- NPM (Pkg Manager)
- Yarn (Pkg Manager)

---

### Project Approach

[Trello Board](https://trello.com/b/BFHLAH2Y/wdi-capstone)
^ contains wireframes, EDM, as well as user stories

**Sunday:** Asked my sister for project ideas. She told me she just sent an angry drunk text to someone and wished there was an app to help keep her messaging in check. Looked into APIs that could help with that.

****Monday:** Began wireframing and started Trello board to plot out my process. Decided on SPA just because I'm personally not so fond of watching a whole new page load upon redirects. Decided on React because it comes with `create-react-app` and I cannot set up my own file structure. I cannot.

**Tuesday:** Got dead-ended after setting up frontend and moving on to backend because of lack of server support on React's part. Instead of learning React Render (which sounded like it would require redirects but I could be wrong), I decided to go forth with Express since I'm already familiar with it and Friday was already feeling too close for comfort. Copy pasted from past projects but this may have set me back because I didn't recognize anything I was pasting over and so I was stuck figuring out how to connect all the modularized files and routes together. There were so many bugs that most functions couldn't even console.log. Gave up on the idea of accomplished OAuth this week which threw off how I planned some of the user stories of global insights.

**Wednesday:** Routes weren't routing. Stuck. Gave up on reading docs and StackOverflow. Started asking everyone around me for help. Inner conflicts about whether or not I'm actually hireable as a developer ran rampant. One lonely silver lining: I've been through bouts of imposter syndrome before and if I made it this far, I can certainly keep going.

**Thursday:** Finally, backend and database were solid enough to start building CRUD functions. It was helpful that Thursday's TA was actually familiar with React. Stopped writing modularized code entirely.

**Friday:** 🤷🏻‍♀️


### Technical Requirements

Your app should:

* **Be a full-stack application** with well-styled views on the front-end supported with data and functionality from your own backend.
* **Have an interactive front-end** resulting in a great UX - sounds like a great use case for a SPA.
* **Be relatively comprehensive**. For example:
  * CRUD multiple related data models.
  * Consume a third-party API.
  * Implement authentication and authorization. Consider implementing an admin feature or two.
* **Implement thoughtful user stories** prioritized to help guide you.
* **Be deployed online** so that it's publicly accessible.

---

### Installation of Dependencies

1) `yarn init`
2) 
```
npm install --save body-parser dotenv express express-session mongoose morgan path react react-bootstrap react-dom react-router request serve-favicon session
```

---

### Bugs & Future Features 

**Problems**
* db models not properly utilized (unused and unreferenced User model)
* the idea of splitting server from front end into almost two completely independent apps was almost paralyzing
* having neither a React project with running backend to refer to nor a TA who already done a full app in React made me wish I had chosen Angular more than once

**Future Features**
* OAuth for personal and global user histories
* Sorting ability on post logs
* More detailed analyses on posts through additional MS API calls
* Integration with Twitter to keep track of how mean Twitter is?
