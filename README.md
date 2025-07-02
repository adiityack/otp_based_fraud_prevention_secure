# OTP (One-Time Password) scam !

This project is the outcome of in-depth research into OTP-based fraud in India, particularly in remote and high-risk regions. It addresses how fraudsters exploit user behavior, location blind spots, and social engineering tactics to bypass traditional OTP verification systems.

Based on these insights, this solution integrates Twilio's Messaging API and Firebase Firestore to build a secure, context-aware OTP validation system. In addition to sending OTPs via SMS and verifying them before sensitive actions (such as payments), the system is designed with a framework that can be extended to include anomaly detection based on user location and behavioral patterns. This makes it more resilient to phishing attacks, unauthorized transactions, and other common fraud techniques.

![Report Image](https://github.com/adiityack/otp_based_fraud_prevention_secure/blob/master/working.png)

![Report Image](https://github.com/adiityack/otp_based_fraud_prevention_secure/blob/master/report.png)

While working on a broader study of digital fraud in India, I decided to go beyond surface-level data and typical narratives. OTP-based scams were being widely reported, but most discussions focused on urban users and generic solutions like two-factor authentication or awareness messages. I wanted to understand how frauds were happening in remote or rural areas—regions where users are digitally vulnerable but often ignored by fintech security systems.

### Research Focus and Motivation

My core question was:  
**How are fraudsters able to consistently succeed with OTP-based scams even in areas with limited internet access, low digital literacy, or poor infrastructure like forests, rural zones, or desert regions?**

This led me into some surprising and overlooked areas.

### Deep Dive into Fraud Operations

Through analyzing regional cybercrime data and following dozens of case studies from police reports in states like Jharkhand, Rajasthan, and Chhattisgarh, I found a consistent pattern:  
Many fraudsters operate from remote zones—forest villages, tribal belts, or semi-abandoned desert towns—where they’re less traceable, use unregistered SIM cards, and often have access to basic signal boosters.

They target victims not only in their own region but often simulate being from the same city or state as the victim using leaked data, regional accents, and social engineering tricks.

**For instance:**

- They would call a user in Pune pretending to be from a local bank branch, while actually operating from a village in Jharkhand with a temporary SIM card.  
- They’d request a small "KYC update" and manipulate users into sharing OTPs.

The fraud worked not because of tech failure—but because **location awareness was missing** in the fraud detection process.

### Key Insight

Most fintech platforms verify OTPs and transactions without deeply validating **where the request is coming from** or **how it deviates from a user's usual behavior**. This was the blind spot I decided to focus on.

### My Solution: Location-Based Anomaly Detection for OTP Systems

I proposed a concept that adds a **location intelligence layer** to OTP verification systems:

- If a user typically logs in from Delhi, but suddenly an OTP request comes from a remote forest region in Jharkhand or a desert town in Barmer, the system detects this mismatch.  
- The device's GPS, IP location, and network data are compared against historical usage.  
- If there's a high deviation with no prior travel context, the app can flag, delay, or require additional user confirmation before proceeding.

This approach doesn’t disrupt the user but silently adds a layer of intelligence and safety, especially for digitally vulnerable populations.

### Practicality Over Perfection

I didn’t build a full-fledged product, but I created a working proof-of-concept and documented the system architecture. It was minimal, but it demonstrated a **research-first, problem-centric mindset**—one that prioritizes real problems affecting real users, especially those outside the tech bubble.

This experience also helped me win a **theme-based hackathon organized by Q2 Software**, one of the largest global fintech companies. My research stood out because it focused on **people, places, and patterns** that are usually ignored in mainstream product design.
