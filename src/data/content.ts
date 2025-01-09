export interface Skill {
  name: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  appStoreLink?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface Content {
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  contact: Contact;
}

export const content: Content = {
  skills: [
    { name: "iOS Development" },
    { name: "Swift" },
    { name: "UIKit" },
    { name: "SwiftUI" },
    { name: "Combine" },
    { name: "CI/CD" },
    { name: "Bazel" },
    { name: "Flutter" },
    { name: "Dart" },
    { name: "Firebase" }
  ],
  experience: [
    {
      company: "Grab",
      role: "Software Engineer, iOS",
      period: "11/2024 - Present",
      location: "Bangalore, India",
      description: "Dedicated mobile app developer with 4+ years of experience in designing, developing, and maintaining high-quality native and cross-platform mobile applications. Proven ability to align technical skills with company goals to create robust and scalable products. Seeking to apply my expertise in mobile app development to contribute to innovative projects and drive the company's success in the mobile space.",
      achievements: [
        "Developed Grab's design system library to help standardize the UI for the app by using reusable components",
        "Contributed to the architecture revamp of the entire codebase to support migration from UI/UX to SwiftUI",
        "Monitored CI/CD job launch time, app size and other metrics and ensured the app and the platform stability by fixing the issues"
      ],
      technologies: ["iOS", "Swift", "UIKit", "SwiftUI", "CI/CD"]
    },
    {
      company: "Rakuten India",
      role: "Software Engineer",
      period: "08/2020 - 11/2024",
      location: "Bangalore, India",
      description: "Developed and maintained key features in RakutenPay iOS application, focusing on payment experience and app performance.",
      achievements: [
        "Developed key features in RakutenPay iOS application such as Barcode, QR Code, Advertisement for seamless payment experience for users using technologies like UI/UX and Swift",
        "Ensured backward compatibility and rollback support by proposing and developing the use of Feature Flags in the project",
        "Ensured Code quality by using tools like code and unit tests",
        "Improved user experience by adding Shimmering for the entire app components",
        "Setup CI/CD for Android and iOS apps using Bitrise",
        "Setup unit testing guidelines and added unit tests for major components of the project",
        "Developed an incubation iOS app using Flutter and ensured its release to public"
      ],
      technologies: ["iOS", "Swift", "UIKit", "SwiftUI", "Flutter", "CI/CD", "Unit Testing"]
    }
  ],
  projects: [
    {
      title: "Movie App",
      period: "10/2023 - 12/2023",
      description: "iOS app that can help browse trending movies and TV shows, built using iOS, Swift, SwiftUI, Combine, Clean and MVVM.",
      technologies: ["iOS", "Swift", "SwiftUI", "Combine", "MVVM"]
    }
  ],
  certifications: [
    {
      name: "iOS & Swift - The Complete iOS App Development Bootcamp",
      issuer: "Udemy",
      date: "09/2023 - Present",
      description: "Learning iOS app development with Swift and UIKit. View Certificate"
    },
    {
      name: "Flutter and Dart to build iOS and Android apps",
      issuer: "Udemy",
      date: "04/2020",
      description: "Learned Flutter mobile application using Google Maps, Authentication, native features, image upload, Firebase realtime database. View Certificate"
    },
    {
      name: "Android Application Development",
      issuer: "Udemy",
      date: "05/2019 - Present",
      description: "Created native android applications using Java. View Certificate"
    }
  ],
  contact: {
    email: "karthikk9828@gmail.com",
    phone: "+91 9066368789",
    location: "Bangalore, India",
    linkedin: "linkedin.com/in/karthikk9828"
  }
}; 