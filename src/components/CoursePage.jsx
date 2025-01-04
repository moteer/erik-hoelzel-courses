import React from 'react';
import { 
  Code, 
  Users, 
  Book, 
  Award, 
  Clock, 
  MessageCircle, 
  Database, 
  GitBranch,
  Coffee,
  Box,
  Terminal,
  TestTube,
  Compass,
  Heart
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CoursePage = () => {
  const pastTrainings = [
    {
      title: "Clean Code with Java",
      icon: <Code className="h-6 w-6 text-orange-600" />,
      description: "Best practices for writing maintainable and efficient Java code"
    },
    {
      title: "Angular Testing",
      icon: <TestTube className="h-6 w-6 text-orange-600" />,
      description: "Comprehensive testing strategies for Angular applications"
    },
    {
      title: "Git & Version Control",
      icon: <GitBranch className="h-6 w-6 text-orange-600" />,
      description: "Advanced Git workflows and collaboration techniques"
    },
    {
      title: "Database Design & Implementation",
      icon: <Database className="h-6 w-6 text-orange-600" />,
      description: "Relational database design and optimization"
    },
    {
      title: "Spring Boot Development",
      icon: <Box className="h-6 w-6 text-orange-600" />,
      description: "Building robust applications with Spring Boot"
    },
    {
      title: "Java Core Fundamentals",
      icon: <Coffee className="h-6 w-6 text-orange-600" />,
      description: "Essential Java programming concepts and patterns"
    }
  ];

  const courses = [
    {
      title: "Professional Java Development Masterclass",
      description: "Deep dive into professional Java development, covering core concepts, Spring Boot, and enterprise patterns. Learn how to write clean, maintainable code following industry best practices.",
      duration: "12 weeks",
      highlights: ["Advanced Java concepts", "Spring Boot mastery", "Test-Driven Development", "Enterprise patterns"]
    },
    {
      title: "Full Stack Java Development",
      description: "Comprehensive training in modern full-stack development with Java backend and Angular/React frontend. From database design to REST APIs and modern UI development.",
      duration: "16 weeks",
      highlights: ["Spring Boot & JPA", "Angular/React", "RESTful Services", "Security best practices"]
    },
    {
      title: "Professional Git & CI/CD",
      description: "Master version control and modern deployment practices with hands-on experience in real-world scenarios.",
      duration: "4 weeks",
      highlights: ["Git workflows", "Branching strategies", "CI/CD pipelines", "DevOps practices"]
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-16">
        {/* Previous hero section code remains the same */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-8 mb-8">
            <img 
              src="/api/placeholder/300/300" 
              alt="Erik Hölzel" 
              className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4">Master Software Development with Erik Hölzel</h1>
              <p className="text-xl">Professional Software Engineer & Certified Scrum Master</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-orange-100">View Courses</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-orange-600">Contact Me</Button>
          </div>
        </div>
      </div>

      {/* Mentoring Program Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-none">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Compass className="h-8 w-8 text-orange-600" />
              <CardTitle className="text-2xl">Self-Paced Mentoring Program</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Your Learning Journey, Your Pace</h3>
                <ul className="space-y-3">
                  {[
                    "Weekly 1-on-1 mentoring sessions",
                    "Personalized learning path",
                    "Code reviews and feedback",
                    "Project-based learning",
                    "Flexible scheduling",
                    "Career guidance"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-orange-600" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Perfect For:</h3>
                <ul className="space-y-3">
                  <li>• Self-motivated learners</li>
                  <li>• Career changers</li>
                  <li>• Developers seeking guidance</li>
                  <li>• Those with irregular schedules</li>
                </ul>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Start Your Journey</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Expertise Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-900">Why Learn With Me?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-orange-200">
            <CardHeader>
              <Terminal className="h-8 w-8 mb-2 text-orange-600" />
              <CardTitle>Industry Expert</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Extensive experience as a Full Stack Developer, working with leading companies across Europe and Australia.</p>
            </CardContent>
          </Card>
          <Card className="border-orange-200">
            <CardHeader>
              <Users className="h-8 w-8 mb-2 text-orange-600" />
              <CardTitle>Personalized Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Customized curriculum tailored to individual needs and small group sizes for maximum attention.</p>
            </CardContent>
          </Card>
          <Card className="border-orange-200">
            <CardHeader>
              <Award className="h-8 w-8 mb-2 text-orange-600" />
              <CardTitle>Certified Trainer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Certified Scrum Master with proven track record in professional software development training.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Past Trainings Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-orange-900">Training Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastTrainings.map((training, index) => (
              <Card key={index} className="flex flex-col border-orange-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {training.icon}
                    <CardTitle className="text-lg">{training.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{training.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-orange-900">Featured Courses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="flex flex-col border-orange-200">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{course.description}</p>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Book className="h-4 w-4 text-orange-600" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-4 mt-auto">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Learn More</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-orange-600" />
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Ready to advance your Java development skills? Contact me to discuss your learning goals and find the right training program for you.</p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">Contact Now</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoursePage;
