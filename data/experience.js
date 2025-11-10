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
  '   Developed a steganography security system embedding AES-256-GCM encrypted text within images using LSB encoding, achieving flawless data retrieval with zero visual distortion across 50+ test images.',

'Engineered a Node.js + Express backend, seamlessly integrated with a Python CLI (OpenCV) for advanced pixel-level steganographic operations.',

'Implemented PBKDF2-based key derivation, strengthening security.'
    ],
    skills: [ 'Steganography', 'Node.js', 'Express', 'Python', 'OpenCV'],
     github: 'https://github.com/Naivedya-Baranwal/ImageEncryption',
  },
  {
    id: 2,
   title: 'Winter Intern',
    company: 'IIT Patna',
    logo: iitpLogo,
    duration: 'Nov 2024 – Jan 2025',
    location: 'Remote',
    description: [
      'Contributed to CultSportQA:a culturally contextual QA dataset for regional sports, under Dr. Sriparna Saha’s mentorship.',
      'Benchmarked 5+ LLMs and VLMs (ChatGPT, GPT-4, Gemini, BLIP-2) on 2,000+ QA pairs, achieving a 15% accuracy increase through Few-Shot and Chain-of-Thought prompting strategies.',
      'Developed an automated evaluation pipeline (Exact Match, F1 scoring) using Hugging Face and OpenAI APIs, increasing benchmarking efficiency by 20%.',
    ],
    skills: ['Gemini API', 'Excel', 'Prompt Engineering'],
  },
  {
    id: 3,
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
]

export default experiences;
