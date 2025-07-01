
import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, Globe, Code, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DeveloperInfo = () => {
  const skills = [
    { category: 'Frontend', skills: 'React, TypeScript, Tailwind CSS' },
    { category: 'Backend', skills: 'Node.js, Express, PostgreSQL' },
    { category: 'Tools', skills: 'Git, VS Code, Figma' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ridoan01', icon: <Github className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ridoan-zisan', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Email', url: 'mailto:ridoan.zisan@gmail.com', icon: <Mail className="w-5 h-5" /> },
    { name: 'Portfolio', url: 'https://ridoan-zisan.netlify.app', icon: <Globe className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-blood-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Developer Information</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the developer behind BOBDO's web platform
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Profile Card */}
          <Card className="shadow-md border-0 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <img
                  src="/bobdo.png"
                  alt="Developer"
                  className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg"
                />
              </div>
            </div>
            
            <CardContent className="pt-16 pb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Ridoan Zisan</h2>
              <p className="text-blood-600 mb-4">Full Stack Developer</p>
              
              <div className="flex justify-center gap-3 mb-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-blood-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-blood-600 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <Button asChild className="h-12 px-8 bg-blood-600 hover:bg-blood-700 rounded-xl shadow-md">
                <a
                  href="https://ridoan-zisan.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Portfolio
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* About Section */}
          <Card className="shadow-md border-0">
            <CardHeader>
              <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mb-3">
                <User className="h-6 w-6 text-blood-600" />
              </div>
              <CardTitle className="text-xl">About the Developer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Ridoan Zisan is a passionate Full Stack Developer with expertise in modern web technologies. 
                He developed the BOBDO web platform using React, TypeScript, and Tailwind CSS.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a focus on creating impactful solutions, Ridoan combines technical expertise with a 
                deep understanding of user needs to build applications that make a difference in people's lives.
              </p>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{skill.category}</h4>
                    <p className="text-gray-600 text-sm">{skill.skills}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInfo;
