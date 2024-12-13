import images from "../assets/img/images";

const coursesData = {
  tajweed: {
    boldTitle: "Tajweed Mastery",
    title: "Program",
    text: "Perfect Your Recitation - Recite the Quran as it was revealed.",
    overviewText:
      "Tajweed is the art of reciting the Quran correctly, adhering to its divine rules. This Tajweed Mastery Program is designed for learners who want to refine their Quranic recitation and bring it to perfection. Whether you’ve already learned the basics or are looking to enhance your skills, this course is your path to excellence.",
    reverseOverview: false,
    whatYouWillLearn: [
      {
        title: "Rules of",
        boldTitle: "Tajweed",
        description:
          "Learn essential rules, including Idgham, Qalqalah, Ghunna, and more.",
        icon: images.tajweed.learnIcon1Tajweed,
      },
      {
        title: "Articulation Points",
        boldTitle: "(Makharij)",
        description: "Master the correct pronunciation of each Arabic letter.",
        icon: images.tajweed.learnIcon2Tajweed,
      },
      {
        title: "Advanced",
        boldTitle: "Recitation",
        description:
          "Recite fluently with proper rhythm, pauses, and elongations.",
        icon: images.tajweed.learnIcon3Tajweed,
      },
      {
        title: "Practical",
        boldTitle: "Application",
        description: "Practice Tajweed rules on various Quranic verses.",
        icon: images.tajweed.learnIcon4Tajweed,
      },
      // Add more points...
    ],
    bgColor: "from-[#F8F8F8] to-[#DBDBDB]",
    reverseLearn: false,
    courseFor: [
      "Students with basic Quran reading skills who want to enhance their recitation.",
      "Advanced learners aiming to recite the Quran with precision and beauty.",
      "Teachers who want to polish their recitation skills for effective teaching.",
    ],
    whyCourseMatters:
      "Tajweed is not just about technical accuracy—it’s about reciting the Quran in a way that pleases Allah (SWT). By perfecting your recitation, you embody respect and love for His words.",
    reverseMatter: false,
    transparentBg: false,
    keyFeatures: [
      {
        icon: images.tajweed.featureIcon2Tajweed,
        title: "Taught by certified Tajweed experts from Egypt.",
      },
      {
        icon: images.tajweed.featureIcon3Tajweed,
        title:
          "Individualized attention to correct mistakes and refine skills.",
      },
      {
        icon: images.tajweed.featureIcon4Tajweed,
        title: "Advanced exercises to achieve fluency and confidence.",
      },
      // Add more features...
    ],
    images: {
      banner: images.tajweed.tajweedBg,
      overview: images.tajweed.tajweedOverview,
      learn: images.tajweed.tajweedLearn,
      matterImg: images.tajweed.whyTajweed,
    },
  },
  arabic: {
    boldTitle: "Arabic Language",
    title: "Program",
    text: "Speak, Read, and Write Arabic with Confidence",
    overviewText:
      "Designed for students who want to learn Modern Standard Arabic, this course equips you with the skills to read, write, and converse fluently. It’s perfect for personal growth, professional opportunities, or as a foundation for Quranic Arabic.",
    reverseOverview: true,
    whatYouWillLearn: [
      {
        title: "Reading and",
        boldTitle: "Writing",
        description: "Learn to read Arabic texts and write effectively.",
        icon: images.arabic.learnIcon1Arabic,
      },
      {
        title: "Conversational",
        boldTitle: "Skills",
        description: "Develop the ability to communicate fluently in Arabic.",
        icon: images.arabic.learnIcon2Arabic,
      },
      {
        title: "Grammar and",
        boldTitle: "Syntax",
        description: "Understand key rules to form correct sentences.",
        icon: images.arabic.learnIcon3Arabic,
      },
      {
        title: "Cultural",
        boldTitle: "Insights",
        description:
          "Explore Arabic culture and its relevance to the language.",
        icon: images.arabic.learnIcon4Arabic,
      },
      // Add more points...
    ],
    bgColor: "from-[#F8F8F8] to-[#DBDBDB]",
    reverseLearn: true,
    courseFor: [
      "Beginners starting their Arabic language journey.",
      "Professionals seeking fluency for career advancement.",
      "Students aiming to connect with Arabic culture and literature.",
    ],
    whyCourseMatters:
      "Arabic is the key to understanding Islamic texts and connecting with the global Muslim community. By mastering the language, you open doors to knowledge, spirituality, and cultural enrichment.",
    reverseMatter: true,
    transparentBg: false,
    keyFeatures: [
      {
        icon: images.arabic.featureIcon1Arabic,
        title: "Engaging lessons with a focus on real-life application.",
      },
      {
        icon: images.arabic.featureIcon2Arabic,
        title:
          "Certified native-speaking teachers who guide you every step of the way.",
      },
      {
        icon: images.arabic.featureIcon3Arabic,
        title: "Resources for practicing reading, writing, and conversation.",
      },
    ],
    images: {
      banner: images.arabic.arabicBg,
      overview: images.arabic.arabicOverview,
      learn: images.arabic.arabicLearn,
      matterImg: images.arabic.whyArabic,
    },
  },
  "islamic-studies": {
    boldTitle: "Islamic Studies",
    title: "Program",
    text: "Deepen Your Knowledge, Strengthen Your Faith",
    overviewText:
      "This comprehensive program covers the essentials of Islamic knowledge, including Seerah, Fiqh, Aqeedah, and Hadith. It’s ideal for students who want to live their lives rooted in the teachings of Islam.",
    reverseOverview: true,
    whatYouWillLearn: [
      {
        title: "Seerah",
        description:
          "Understand the life and legacy of Prophet Muhammad (peace be upon him).",
        icon: images.islamic.learnIcon1Islamic,
      },
      {
        title: "Fiqh and Aqeedah",
        description: "Learn Islamic jurisprudence and core beliefs.",
        icon: images.islamic.learnIcon2Islamic,
      },
      {
        title: "Hadith Studies",
        description: "Dive into the sayings and actions of the Prophet.",
        icon: images.islamic.learnIcon3Islamic,
      },
      {
        title: "Practical Guidance",
        description: "Apply Islamic teachings in daily life.",
        icon: images.islamic.learnIcon4Islamic,
      },
    ],
    bgColor: "from-[#F8F8F8] to-[#DBDBDB]",
    reverseLearn: false,
    courseFor: [
      "Parents who want to provide a strong Islamic foundation for their families.",
      "Adults seeking to deepen their knowledge of Islam.",
      "Students preparing for advanced Islamic studies.",
    ],
    whyCourseMatters:
      "Islamic studies are not just about learning—they're about living. This course empowers you to lead a life aligned with Islamic principles and values.",
    reverseMatter: true,
    transparentBg: true,
    images: {
      banner: images.islamic.islamicBg,
      overview: images.islamic.islamicOverview,
      learn: images.islamic.islamicLearn,
      matterImg: images.islamic.whyIslamic,
    },
  },
};

export default coursesData;
