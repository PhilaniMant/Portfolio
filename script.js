document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const chatbotIcon = document.querySelector('#chatbot-icon');
    const chatbotPopup = document.querySelector('#chatbot');
    const closeButton = document.querySelector('#close-btn');
    const sendButton = document.querySelector('#send-btn');
    const chatMessage = document.querySelector('#chat-message');
    const chatWindow = document.querySelector('#chat-window');

    // Open chatbot popup
    if (chatbotIcon) {
        chatbotIcon.addEventListener('click', () => {
            chatbotPopup.style.display = 'block'; // Show chatbot popup
        });
    } else {
        console.error('Chatbot icon not found');
    }

    // Close chatbot popup
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            chatbotPopup.style.display = 'none'; // Hide chatbot popup
        });
    } else {
        console.error('Close button not found');
    }

    // Send message and generate response
    if (sendButton && chatMessage && chatWindow) {
        const addMessage = (message, sender) => {
            const messageElement = document.createElement('li');
            messageElement.textContent = `${sender}: ${message}`;
            messageElement.classList.add(sender.toLowerCase()); // Add class for styling
            chatWindow.appendChild(messageElement);
            chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the bottom
        };

        const getResumeInfo = (query) => {
            switch (query.toLowerCase()) {
                case 'soft skills':
                    return  "Dependability, Time Management, Critical Thinking, Self-Awareness"
                case 'education':
                    return "Walter Sisulu University\n Diploma in Information and Communication Technology Applications Development \n 2021-2023"
                case 'contact':
                    return 'Email: mancotywap@gmail.com\n number: 0683700855 ';
                default:
                    return null;
            }
        };

        const generateResponse = (userMessage) => {
            if (userMessage.toLowerCase().includes('skills')) {
                return getResumeInfo('soft skills') || "Sorry, I couldn't find the skills section.";
            } else if (userMessage.toLowerCase().includes('education')) {
                return getResumeInfo('education') || "Sorry, I couldn't find the education section.";
            } else if (userMessage.toLowerCase().includes('contact')) {
                return getResumeInfo('contact') || "Sorry, I couldn't find the contact section.";
            } else if (userMessage.toLowerCase().includes('hello')) {
                return 'Hi there! How can I assist you today?';
            } else if (userMessage.toLowerCase().includes('how are you')) {
                return 'I am well, thank you! How may I help you?';
            } else if (userMessage.toLowerCase().includes('help')) {
                return 'Sure! What do you need help with?';
            } else {
                return 'I am here to assist. Can you provide more details?';
            }
        };

    

        sendButton.addEventListener('click', () => {
            const userMessage = chatMessage.value.trim();
            if (userMessage) {
                addMessage(userMessage, 'You'); // Add user's message
                chatMessage.value = ''; // Clear the input

                // Generate and add chatbot's response
                const botResponse = generateResponse(userMessage);
                setTimeout(() => {
                    addMessage(botResponse, 'Robot'); // Add bot's message
                }, 500); // Add a slight delay for realism
            }
        });
    } else {
        console.error('Send button, chat message input, or chat window not found');
    }
});

// Select all the sections and navbar links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-links a');

// Function to check the scroll position and set active class
function setActiveLink() {
    let currentSection = '';

    // Loop through all the sections
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if the section is in the viewport
        if (window.scrollY >= sectionTop - sectionHeight / 5) {
            currentSection = section.getAttribute('id');
        }
    });

    // Loop through all the navLinks and remove the active class
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Add the active class to the link that corresponds to the current section
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Call the function when the page is scrolled
window.addEventListener('scroll', setActiveLink);

// Call the function on page load to set the correct initial state
document.addEventListener('DOMContentLoaded', setActiveLink);

