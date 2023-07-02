# Twitter Clone

This project is a clone of Twitter, a popular social media platform that allows users to post tweets, follow other users, and engage in conversations. The Twitter Clone aims to replicate the core features and user experience of Twitter while providing an open-source alternative.

## Features

- **User Registration and Authentication**: Users can create an account, log in, and log out of the application. User authentication ensures secure access to user-specific features.

- **Posting Tweets**: Users can compose and post tweets, sharing their thoughts, opinions, or updates with their followers and the wider community.

- **Following Users**: Users can follow other users to receive their tweets in their home feed. This allows users to stay updated with the content of the accounts they are interested in.

- **User Profiles**: Each user has a profile page that displays their tweets, followers, following, and other relevant information. Users can also customize their profile picture and bio.

- **Likes**: Users can like and retweet tweets posted by other users. This helps in expressing appreciation for a tweet.

- **Hashtags and Trends**: The application supports hashtags, allowing users to discover and explore tweets related to specific topics. It also displays trending hashtags and topics to keep users updated on popular discussions.

## Data Structure

The Twitter Clone utilizes the following data structure to manage its functionality:

- **User**: Represents a user account with properties such as username, email, password, profile picture, and bio.

- **Tweet**: Represents a tweet posted by a user. It includes properties such as the tweet content, timestamp, likes count, retweets count, and references to the user who posted it.

- **Follower-Following Relationship**: Establishes the relationship between users, where a user can follow other users. This relationship is typically represented using a many-to-many relationship.

- **Like**: Represents the association between a user and a tweet, indicating that the user has liked the tweet.

- **Notification**: Represents a notification for a user, such as a new follower, like. It includes properties such as the notification type, the user who triggered the notification, and the tweet associated with the notification.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript , React JS
- **Database**: Local
- **Image Processing**: Sharp

- **Deployment**: Netlify 

## Installation

1. Clone the repository: `https://github.com/adietyaprogithub/Twitter-Clone/edit/new-Twitter`
2. Navigate to the project directory: `cd new-Twitter`
3. Install the dependencies: `npm install`
4. Set up the required environment variables. You can either create a `.env` file and define the variables or set them directly in your system environment.
5. Start the server: `npm start`
6. Access the application in your browser at `http://localhost:3000`

##  Acknowledgments

- Aditya Shende  - contributed to the project
- Aparna sahu - contributed to the project
- Saurabh Sakhare - contributed to the project
- Dhanaraj Nirasakar - contributed to the project
