# Project Status Reporting Application

## Links

๐ [Problem Statement](https://afourathon.com/problemstatement/5/daily-status-reporting-project)

๐งพ [Round 1 Project Report](https://docs.google.com/document/d/1UehbSXNvI4L5p9PRF3I8Veepglec6jmJ/edit?usp=sharing&ouid=115135829243562507351&rtpof=true&sd=true)

๐จ [UI Design Link (Figma)](https://www.figma.com/file/EwL4XlCaSuLFfjHZxpLMVL/A4-Hackathon?node-id=0%3A1&t=KlE3UeioI6GnkagS-1UX)

๐ฉโ๐ป [GitHub Repository Link](https://github.com/atharvparkhe/AFourathon-2k22-Project-Status-Reporting-System)

๐ [API Documentation](https://docs.google.com/spreadsheets/d/1xvl0aCMRqsi_C7-u1o35UqCuy1LyGf0u8PQ2JqCkgf0/edit?usp=sharing)

๐ [Round 1 - Video Recording](https://youtu.be/qFOh9n80xlY)

## Setting up the project on local machine

1. Install Docker and git
2. Clone the repository:

    ```bash
    git clone https://github.com/atharvparkhe/AFourathon-2k22-Project-Status-Reporting-System.git
    ```

3. Run the docker-compose file: 
    ```
    docker-compose up
    ```

4. Open `localhost:3000/` on your browser

### Frontend Setup on Local

1. Clone the repository

2. Navigate to `Frontend` directory:
    ```
    cd Frontend
    ```

3. Install the dependencies
    ```
    npm install 
    ```

4. Make .env file
    ```
    REACT_APP_BASE_URL=localhost
    ``

5. Run the project
    ```
    npm run dev
    ```

## Team Members

- Atharva Parkhe
- M. Greeshma
- Sarvesh Patkar


Auth-Service - http://0.0.0.0:2001/

Project-Service - http://0.0.0.0:2002/

Status-Service - http://0.0.0.0:2003/