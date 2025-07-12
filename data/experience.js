import edunetLogo from '@/public/internshipLogos/edunet.png'
import aicteLogo from '@/public/internshipLogos/aicte.png'
import iitpLogo from '@/public/internshipLogos/IIT_Patna.png'

const experiences = [
  {
    id: 1,
    title: 'Cyber Security Intern',
    company: 'Edunet Foundation',
    logo: edunetLogo,
    duration: 'Jan 2025 – Feb 2025',
    location: 'Remote',
    description: [
      'Completed 6-week internship in Cyber Security under IBM SkillsBuild & AICTE.',
      'Worked on steganography: hiding data in images to understand encryption.',
      'Explored cybersecurity concepts and tools through hands-on tasks.',
    ],
    skills: ['Cybersecurity', 'Steganography'],
  },
  {
    id: 2,
    title: 'AI Intern – TechSaksham Program',
    company: 'AICTE',
    logo: aicteLogo,
    duration: 'Jan 2025 – Feb 2025',
    location: 'Remote',
    description: [
      'Built an AI-powered health chatbot using DistilGPT-2, NLP techniques.',
      'Deployed web UI with Streamlit and applied rule-based logic.',
      'Addressed real-world accessibility challenges via AI.',
    ],
    skills: ['Python', 'NLP', 'Streamlit'],
    github: 'https://github.com/Naivedya-Baranwal/AI-Powered-health-Chatbot',
  },
  {
    id: 3,
    title: 'Winter Intern',
    company: 'IIT Patna',
    logo: iitpLogo,
    duration: 'Nov 2024 – Jan 2025',
    location: 'Remote',
    description: [
      'Contributed to CultSportQA: evaluating bias in LLMs and VLMs.',
      'Generated culturally contextual QA datasets using Gemini API.',
      'Automated image generation and multilingual translations via Excel scripting.',
    ],
    skills: ['Gemini API', 'Excel', 'Prompt Engineering'],
  },
]

export default experiences;
