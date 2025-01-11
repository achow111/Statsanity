# **Statsanity**

Statsanity is a cutting-edge web application designed for basketball enthusiasts, providing real-time statistics on NBA players and teams. By leveraging advanced technologies and web scraping, it offers up-to-date data and AI-driven match predictions to help fans and analysts make informed decisions.

---

## **Features**

- **Real-time NBA statistics**: Stay updated with player and team performance metrics, powered by web scraping with Beautiful Soup.
- **AI-powered basketball match predictions**: Utilize machine learning models trained on historical game data to predict the outcomes of upcoming NBA matches.
- **User authentication**: Secure user login with JSON Web Tokens (JWTs) and Bcrypt for password hashing.
- **Interactive interface**: A seamless and responsive user experience with Bootstrap styling.
- **Robust data handling**: MongoDB stores user profiles, statistics, and predictions efficiently.

---

## **Tech Stack**

- **Frontend**: React, Bootstrap
- **Backend**: Python, Flask, Express
- **Database**: MongoDB
- **Web Scraping**: Beautiful Soup
- **Authentication**: JSON Web Tokens (JWT), Bcrypt
- **Version Control**: Git
- **AI/ML Frameworks**: Scikit-learn, Pandas, NumPy (for match prediction)

---

## **How It Works**

1. **Data Collection**: Player and team statistics are fetched in real-time using web scraping with Beautiful Soup.
2. **AI Match Prediction**:
   - Historical game data is collected and preprocessed into key features, such as player performance, team synergy, and home/away advantages.
   - A machine learning model (e.g., logistic regression or random forest) predicts the probability of a team's victory in an upcoming match.
   - The results are presented to users in an intuitive and easy-to-understand format.
3. **User Management**: Secure user accounts allow users to save their preferences and access personalized match insights.
4. **Interactive Dashboard**: Users can explore detailed team and player stats through a responsive, Bootstrap-powered interface.

