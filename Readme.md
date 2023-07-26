
# Setup

1.Clone the repository or download the source code.

## git clone https://github.com/Sharadp303/Authentication.git

2.Install dependencies:

## npm install

3.Create a .env file in the root of the project and add the following environment variables:

DBURL='' 

PORT=   

SESSIONSECRETKEY=""

JWTSECRETKEY=""

googleClientID=''

googleClientSecret=''

facebookClientID=''

facebookClientSecret=''

Fill up the values with your actual MongoDB connection URI,PORT, Google client ID, Google client secret, Facebook app ID, Facebook app secret, and a session secret of your choice.

4.Run the application:

## npm start