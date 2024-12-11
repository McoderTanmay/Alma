import os
import sys
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# Check if the API key is loaded
if not GOOGLE_API_KEY:
    raise EnvironmentError("Google API key is missing. Please set it in the .env file.")

# Setup Gemini model with error handling
try:
    genai.configure(api_key=GOOGLE_API_KEY)
    model = genai.GenerativeModel('gemini-pro')
except Exception as e:
    raise RuntimeError(f"Error configuring the Generative AI model: {e}")

# Predefined context for GGV-related queries
context = """To connect with an alumnus, you can use the alumni platform to search for alumni based on their field of expertise, career path, or industry. You can send a message through the platform or attend alumni events for better networking opportunities.
You can request mentorship through the platform by looking for alumni who specialize in the field you're interested in. Send a message or request a mentorship session. Make sure to specify your career goals and how the mentor can help.
Check the alumni event calendar on the platform. You can register for events such as webinars, meetups, and discussions. Alerts and reminders for upcoming events will also be sent through the platform.
you can search for alumni based on their industry or specialization using the platform's search feature. This allows you to connect with alumni who have experience in the field you’re interested in.
Interacting with alumni provides you with valuable insights into your career path, real-world experiences, networking opportunities, and career guidance. Alumni can also serve as mentors and offer internship and job opportunities.
You can search for mentors through the platform by specifying your areas of interest, career goals, and desired fields. Once you find a suitable mentor, you can send a request to initiate mentorship.
alumni can offer career guidance by sharing their experiences, providing advice on career development, and helping you navigate challenges in your chosen industry.
You can stay updated through the platform’s notifications, newsletters, and event alerts. Follow alumni profiles to receive updates on their activities, posts, and contributions.
It is a platform that facilitates communication and collaboration between alumni and students. The platform enables mentorship, career guidance, networking, and professional development through various tools like forums and event calendars.
To create a profile, sign up on the platform using your student credentials. Fill in your personal details, areas of interest, and career goals. Once completed, your profile will be visible to alumni who match your professional interests.
many alumni participate in placement assistance programs and can guide you through job applications, refer you to opportunities, or provide advice on preparing for interviews.
You can directly message alumni through the platform or attend an alumni-hosted event to seek advice. Be specific about the type of advice you're looking for to facilitate more effective conversations.
You can access career resources, mentorship programs, discussion forums, job postings, academic support, and upcoming alumni events all through the alumni platform.
Search for mentorship programs on the platform, view the mentors available, and submit a request for mentorship. Make sure to mention your goals and the area you want mentorship in.
A respectful, concise, and professional message is the best approach. Mention your goals, your connection to their field, and why you believe they would be a good mentor for you.
You can use the department-specific filter on the platform to search for alumni who graduated from your department. Send a message or request a connection to start a conversation.
Yes, many alumni share internship opportunities on the platform. You can search for internships by industry, role, or location and apply through the platform.
Alumni can provide advice on industry trends, career paths, resume building, job search strategies, skill development, and personal growth in your chosen field.
Alumni can offer academic support by sharing study materials, suggesting resources, offering tips for exams, or providing guidance on research projects and coursework.
Some alumni may offer paid mentorship programs. You can inquire about the details on the platform, and the mentorship terms (free or paid) will be clearly stated.
To improve networking, actively participate in alumni events, engage in discussion forums, and connect with alumni who share similar career interests. Be consistent in following up and staying engaged.
Alumni can provide job recommendations or referrals if they are familiar with your work or field of study. Ensure your profile and request are professional and well-articulated.
Complete your profile with relevant information, such as career interests, specialization, skills, and accomplishments. Also, participate in platform activities to increase visibility.
Introduce yourself, explain how you found them, describe why you’re reaching out (e.g., mentorship or career guidance), and be polite and professional.
Alumni can guide you on where to learn new technical skills, recommend courses, and share their own experiences of skill development in the industry.
Alumni typically indicate their availability for mentorship in their profile. You can reach out via the platform to inquire if they are open to mentoring.
Webinars are listed in the events section of the platform. Register for the webinars that interest you, and you will be notified before the event starts.
Alumni can provide valuable insights into the job market, including the demand for specific skills, job search strategies, and the hiring process in various industries.
As a student, you can attend webinars, panel discussions, alumni meetups, career fairs, and networking events organized on the alumni platform.
The platform allows you to post updates about your achievements, such as awards, projects, or certifications, to keep alumni informed and engaged with your progress.
You can directly request feedback from alumni through private messages, or some alumni may offer resume review services via the platform.
The platform implements identity verification techniques, and reviews from other students and alumni help ensure the authenticity of members.
If you encounter inappropriate behavior, report it to the platform administrators. They will investigate and take necessary actions according to the platform’s policies.
You need to sign up to participate in discussions, but you may be able to view public posts and read content without an account.
Engage in discussions, attend webinars, contribute to forums, and participate in alumni events. Regular involvement will help you build stronger connections.
Yes, alumni who have pursued postgraduate studies can offer advice on programs, application processes, and how they have benefited their careers.
Reach out to alumni through the platform to invite them to participate in student-led events, workshops, or conferences.
Yes, alumni can offer advice on developing soft skills like communication, leadership, teamwork, and time management, which are essential for career success.
Follow up with a thank-you message, and express your appreciation for their time. Continue to engage with them periodically to maintain the connection.
You can search for job opportunities shared by alumni or reach out to alumni who are hiring or involved in recruitment.
Alumni panel discussions are often hosted online, and you can register for these events through the platform’s events section.
You can provide feedback through the platform’s feedback form or by contacting the platform’s administrators directly.
Register for the events listed on the platform. If the event is virtual, you will receive a link to join. If it’s in-person, you will be informed of the location and timings.
Follow profiles of alumni who align with your career goals, have experience in industries you’re interested in, or share similar hobbies and interests."""


# Check if query is passed as command-line argument
if len(sys.argv) < 2:
    raise ValueError("User query is missing. Please provide a query.")

# Get the user query from the command-line arguments
user_query = sys.argv[1]

# Initialize chat session with error handling
try:
    chat_session = model.start_chat(history=[])
except Exception as e:
    raise RuntimeError(f"Error initializing chat session: {e}")

def get_relevant_context(user_query):
    """Extract relevant parts of the context based on the user's query."""
    # For now, return the full context. This can be refined with NLP techniques for dynamic extraction.
    return context

# Extract relevant context dynamically
relevant_context = get_relevant_context(user_query)
full_input = f"{relevant_context}\n\n{user_query}"

# Get response from the model
try:
    response = chat_session.send_message(full_input)
    # Output the response text for Node.js to capture
    print(response.text)
except Exception as e:
    print(f"Error during response generation: {e}")
