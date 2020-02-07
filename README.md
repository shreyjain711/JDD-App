# <center> **Jan Dhan Darshak 2.0 - Money Mitra** </center>
The application is built using react-native.

<br>
The presentation - [Link](https://docs.google.com/presentation/d/1uJgolhnu4V9Cf6KF92jN5Vuutspmrta3JNznDLJgWpk/edit?usp=sharing)
<br><br>
The faculty presentation & QnA - [Link](https://docs.google.com/document/d/1AVjPQpqvhqS5oC6XMYBTqxXloRMsYMaMbRs-VJbszb0/edit?usp=sharing)
<br><br>
The Demo Video - [Link(Under progress)]()


## Before You start
You will need to download Expo on your android device to use the application.

## Getting Started
1. Clone or download this repository on your local machine
2. Change directory in the repository
3. For entering the application directory `cd App`
3. Run `npm install` to install all the required packages automaticall
4. Run `expo start` to start the development server
5. Scan the QR code using Expo app from your device to run the application

## Scope for Improvement in the Jan Dhan Darshak App 
- It has a very unsmooth user experience, especially for people not well-versed with using smartphones
- Its a Data Dump:
  - Shows irrelevant data – ATMs 15 km away
  - Renders the content only after the fetch request has been completed, making the app very slow
  - No navigation feature – No point of seeing an ATM on the map if the app won’t tell how to reach to it
  - Static & inaccurate information – shows ATMs that are non-functional & no means to update that an ATM isn’t functional at a given point of time
- It’s more convenient to Google or any other search engine instead
- The challenge involves upgrading the application with more insights and features & seamless UX

## The Proposition
- Upgradation of existing features:
  - Significant improvement of UI: Money Mitra, an interactive bot makes the user experience seamless & the app is easy to learn to use
- Additional features: 
  - The FinT(financial touchpoint) Search Engine, ranks search results in terms of distance, rating, no. of visits & no. of closed days in a month & other parameters
  - Crowdsourcing to make static location dataset into a dynamic dataset. For instance, users can rate or mark a point as out of service (if within 10m)
  - Navigation to the touchpoint through govt. improved MapMyIndia App
  - Multi-Language support through Pootle, a software used to convert static English text to a local language
  - Money Mitra Information Centre (MMIC) that uses a form-filler chatbot to get the necessary information from the user. With the user’s financial info, Money Mitra suggests the best policy that the user is eligible for using K-means Clustering

### Value to User:
   As mentioned in the Problem Statement, the application is meant for common people. However, the application has been made with a special focus on providing a seamless user experience to Technologically Challenged people (i.e. Aged people and people currently not a part of the banking system, typically belonging to not well-to-do households).
The following features of Money Mitra make it valuable to the target audience:
- Money Mitra provides a seamless user experience with a very friendly & easy-to-learn UI, the app is easier to use for the technologically challenged people 
- One-Tap or Two-Tap quick app navigation that helps find the nearby touchpoints in the fewer clicks than even Google!
- Money Mitra provides the user with an option to set relevant filters. Thus, only a few practically feasible locations are highlighted instead of showing a lot of irrelevant information as in the original Jan Dhan Darshak app
- Money Mitra provides an additional feature of MMIC that helps a user find the best policies based on his financial information

## MARKET SIZE
(We derive the numbers from the following [report](http://vikaspedia.in/social-welfare/financial-inclusion/financial-inclusion-in-india) on Financial Inclusion Initiative)

Officially, the app is for everyone. Tasks like finding an ATM or a bank is something a regular citizen often does. However, the majority does the task through a simple web search instead of a dedicated app for the same.
Hence, the target audience that we’ve kept in mind while developing this app is the technologically challenged section of society as an extension to the financial inclusion initiative by the Government of India (GOI). 
<br>
Our Target Audience<br>
51% of 1.25 billion Indians do not have a bank account yet! These are the users that are the beneficiaries of FII.<br>
49% of financially included people have some fraction of them that do not know yet, how to use the ATM, whom to contact for information on their bank account, what to do with their bank account etc.<br>
We do not expect everyone to use this app per se as googling information is the most basic task. Google also offers features like crowdsourcing to alert the user if the ATM isn’t functionals. It has multiple dedicated teams working on such things — thus, the results are often quicker, truer & more reliable.

## Development Phases (Total manhours = 24 * 6 = 144):
1. Building the basic structure of the app: 
  - 24 manhours i.e. 4 team-hours
2. Setting up APIs and serverless architecture within the app:
  - 18 man hours i.e. 3 team-hours 
3. Setting up voice navigation:
  - 36 manhours i.e. 6 team-hours
4. Setting up the server with the policy recommendation system:
  - 24 manhours i.e. 4 team-hours
5. Server integration with the app, along with voice navigation:
  - 12 manhours i.e. 2 team-hours
6. Training dataset preparation for the recommendation system:
  - 6 manhours i.e. 1 team-hour
7. Testing & finalising the app (incl. FinT engine, recommendation system):
  - 24 manhours i.e. 4 team-hours

## Product Details
- Dataflow & software architecture models in the 
- Ecosystem
  - Native Mobile Application
  - Server built using python (can be deployed on hosts like AWS)
  - The third-party libraries used are React Native Elements, MapMyIndia API for navigation (which is authorised by the GOI) and Pootle library for multi-language support
- Adjacent Markets - This app can be further integrated with BHIM UPI app to elevate the government’s objective from financial inclusion to digital financial inclusion
- Metrics - Number of users, number of calls to MapMyIndia API, number of server responses of policy recommendations
- Saleability - This is an application by the government, hence there is no profit or loss involved.
- Channels - The app would be available to download from the play store for android & app store for iOS devices. Promotion would be done by the government under the FII scheme’s promotion e.g. TV ads, posters in govt. establishments

## Business Model
This application has been developed for financial inclusion of all sections of society. 
Therefore, the intent of this application is to act as a guide for the common people and not to generate revenue. 

## Competition
Currently, this application does not face any direct competition. However, it faces indirect competition from search engines, for instance, Google. Google search will render more comprehensible results easily. However, our application Money Mitra has a competitive edge over these search engines as it offers a seamless user experience, unlike its competitors who make it extremely difficult for the technologically challenged people to access such information.

## Financial model & Projections
Financial model includes costs (cash outflows) but no revenue (cash inflows).
<br><br>
Investment to develop include a set of developers i.e. our team!<br>
No other monetary assistance is required during the development of application
<br><br>
The app’s motive, universal financial inclusion, is non-commercial & hence the app shouldn’t involve measures that help generate revenue for the government. <br><br>
Costs will include the maintenance cost of the application that is being borne by the government right now as well. We intend to simplify the server’s operations, and hence, we can expect these costs to go down. However, additional costs may arise from the maintenance of a database to store the ratings & reports submitted by users. Storing the aggregate of ratings & keeping reports of only the past one month will minimize the storage required
<br><br>
Potential revenue streams include - placement of an advertisement banner in the app, adding private policy providers’ schemes in the app & charging promotional fee from them upon a successful customer conversion

## Competitive Advantage
Money Mitra has a competitive edge over Google search due to the following reasons:
- Googling nearby ATMs, Banks etc takes more clicks every time. Money Mitra, however, provides the same information in at max 2 clicks
- Google is a For-Profit organisation. Googling this information will make the technologically-challenged people gullible to the MNC’s money-making  schemes, e.g. adverts
- For a person used to feature phones, finding the right content using google search is not easy. Money Mitra, on the other hand, makes this information accessible to the technologically challenged people and provide them with seamless user experience

## SWOT Analysis
- Strengths
  - Money Mitra, a personal digital assistant to make the app easy to use
  - Easy to learn UI - users get the ATMs near you by the click of a button rather than typing or googling
  - Empowerment the technologically handicapped through voice-enabled navigation

- Weaknesses
  - People might shift to Google after learning to use smartphones. However, Money Mitra can be given credit for helping them with that
  - The application depends on external services for navigation. However, the previous application did not provide even that

- Oppoortunities
  - The app can be further integrated with BHIM UPI app, expanding the objective from FII to DFII (digital financial inclusion initiative)
  - The app can be further expanded to connect phones with ATMs. This’ll reduce frauds, such as pin capture, that occur while using an ATM
  - The app can be used as a means to train the technologically-challenged audience at using smartphones

- Threats
  - Use of the third-party libraries e.g. react-native, Reddit API
  - Use of third-party services e.g. MayMyIndia

# Summary - The Elevator Pitch
We were tasked with making the Jan Dhan Darshak app more featureful, insightful & easier to use and that perfectly captures what our proposed upgrade offers!
<br><br>
We have brought the app to life by introducing Money Mitra, a guide for the app. The users can now see their closest ATMs and 4 other types of financial touchpoints in only 2 taps and get to navigate to their desired point in another tap. Moreover, users can now help their fellow users know if an ATM isn’t functional, which bank served them the best etc through the rate & report functionality.
<br><br>
We have introduced the Money Mitra Information Bank which helps users understand different schemes from the government and even recommends the best policy based on their information. 

### Why we are the best team to implement this project?
We are a team who have always learnt new technologies by ourselves. We have the motivation to push through every daunting obstacle & we never shy away from learning new things. We have a perfect mix of people some of whom are exceptionally good at ideating new concepts and some are always innovative with how to bring these ideas to life! Most of us have previously participated in finance-based case study competitions before, giving us a good idea of the financial aspects and the ability to comprehend what true purpose the app we develop should serve.


### Additional Information
We have added the answers to the QnA file, shared with us, in the [attached document](https://docs.google.com/document/d/1AVjPQpqvhqS5oC6XMYBTqxXloRMsYMaMbRs-VJbszb0/edit?usp=sharing)
<br><br>
We'd be more than happy to address any & all doubts that may arise. 
<br><br>
We wholeheartedly thank all the evaluators for providing us with the platform to present our ideas. We hope for the best.
