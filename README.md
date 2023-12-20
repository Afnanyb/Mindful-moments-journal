# Mindful-moments-journal

## Overview

Mindful Moments Journal is a web application designed to support mental well-being by providing users with a secure and private platform for daily journaling. The app encourages users to reflect on their thoughts and emotions, track mood patterns, and set personalized goals for self-improvement.

### Problem

Many individuals face challenges in managing their mental health and finding effective tools for self-reflection. Mindful Moments Journal aims to address this by offering a dedicated space for users to express their thoughts, track emotional well-being, and promote self-awareness.

### User Profile

The target audience includes individuals seeking a mental health tool for self-reflection, emotional expression, and goal-setting. Users may have specific mental health concerns or simply wish to maintain a positive mindset. The app should consider privacy and sensitivity in handling user data.

### Features

1. Journal Entries:
   Write and Express:
   As a user, I want to be able to write daily journal entries to express my thoughts and emotions so that I can engage in regular self-reflection and emotional expression.
   Edit and Delete:
   As a user, I want the ability to edit and delete my journal entries for accuracy and privacy so that I can maintain the integrity of my personal reflections.
2. Mood Tracking:
   Track and Visualize:
   As a user, I want to track and visualize my mood patterns over time so that I can gain insights into my emotional well-being and identify potential patterns or triggers.
3. Goal Setting:
   Set and Achieve:
   As a user, I want to set personal development goals within the app for self-improvement so that I can work towards specific objectives that contribute to my well-being.

4. Accessibility Features:
   Inclusive Design:
   As a user, I want the app to be accessible to individuals with different needs, including those using screen readers or other assistive technologies so that everyone, regardless of ability, can benefit from the app's features.

## Implementation

### Tech Stack

Frontend: React.js
Backend: Node.js with Express
Database: MySQL with Knex.js
Authentication: JSON Web Tokens (JWT) with Passport.js
Styling: Sass
External Libraries: Axios for API

### APIs

TBD

### Sitemap

Home page
Journal Entries
Goals
Community Insights - Nice to have
Resources - Nice to have

### Mockups

### Data

1. Users:
   username, email, password
2. Journal Entries
   date, content, mood
3. Goals
   description, status

### Endpoints

GET /api/entries - Retrieve a list of journal entries
POST /api/entries - Add a new journal entry
GET /api/goals - Retrieve user's goals
POST /api/goals - Add a new goal

### Auth - nice to have

Implement JWT for user authentication. Ensure that journal entries and goals are only accessible by the respective user.

## Roadmap

Week 1:
Sprint Objectives:
Set up Project Structure:

Create the directory structure for the frontend and backend components.
Initialize a React.js project for the frontend and a Node.js project for the backend.
Journal Entry Functionality:

Implement the ability for users to write daily journal entries.
Create a form or interface for users to input their thoughts and emotions.
Ensure that entries are successfully stored in the database.
Basic Mood Tracking:

Integrate a basic mood tracking feature within the journal entry form.
Allow users to select or input their mood for each entry.
Goal-Setting Feature:

Implement the functionality for users to set personal development goals.
Create an interface for users to input goal descriptions and set the status.

Week 2:
Sprint Objectives:
Enhance Journal Entry Features:

Add the ability for users to edit and delete their journal entries.
Implement additional features such as prompts for guided self-reflection.
User Authentication:

Integrate user authentication using JSON Web Tokens (JWT).
Implement secure user registration and login functionality.
Ensure that journal entries and goals are associated with the authenticated user.
Accessibility Features:

Implement inclusive design practices to ensure accessibility.
Test the application with screen readers and other assistive technologies.
Make necessary adjustments to improve accessibility.
Nice-to-Haves (Community Insights and Resources):

If time allows, begin working on the community insights feature.
Explore options for integrating mental health resources.

## Nice-to-haves

1. Journal Entries cont.:

- As a user, I want the option to add prompts to my journal entries for guided self-reflection so that I can enhance the depth and focus of my self-exploration.

2. Mood Tracking cont.:

- As a user, I want to be able to update my mood for each journal entry .

3. Goal Setting cont.:

- As a user, I want to track the progress of my goals and receive notifications or reminders to stay motivated so that I can stay on track and achieve my personal development milestones.

4. User Authentication:

- As a user, I want to create a secure account with a unique username and password so that my journal entries are private and personalized.
- As a user, I want to be able to log in and log out of my account securely so that I can maintain control over who accesses my personal journal.

5. Privacy:

- As a user, I want assurance that my journal entries and personal data are private and secure so that I can feel confident and safe sharing my thoughts and emotions within the app.

6. Reminder Notifications:
   Establish Consistency:
   As a user, I want the option to receive daily reminders to write in my journal to establish a consistent habit so that I can cultivate a regular and beneficial journaling practice.
   Customize Reminders:
   As a user, I want to be able to customize the frequency and timing of reminder notifications so that I can align them with my personal schedule and preferences.
7. Community Support:

- As a user, I want to read anonymized insights from the community to gain perspective and support so that I can feel connected and supported in my mental health journey.
- As a user, I want to share my own insights with the community while maintaining my privacy so that I can contribute to a supportive and understanding community.
