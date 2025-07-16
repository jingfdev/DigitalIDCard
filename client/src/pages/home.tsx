import { Card } from "@/components/ui/card";
import { Github, Mail, Linkedin, Facebook, Send, User, Share2, Code, Circle } from "lucide-react";
import profileImage from "@assets/profile.jpg";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/jingfdev",
    icon: Github,
    hoverColor: "hover:bg-slate-800"
  },
  {
    name: "Email",
    url: "mailto:jingfongtan@gmail.com",
    icon: Mail,
    hoverColor: "hover:bg-red-500"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jingfong-tan/",
    icon: Linkedin,
    hoverColor: "hover:bg-blue-600"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/jingfongTANN",
    icon: Facebook,
    hoverColor: "hover:bg-blue-700"
  },
  {
    name: "Telegram",
    url: "https://t.me/jingfong_TAN",
    icon: Send,
    hoverColor: "hover:bg-blue-400"
  }
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-50 min-h-screen py-8 px-4 font-inter">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:flex">
            {/* Profile Image Section */}
            <div className="lg:w-1/3 bg-gradient-to-br from-slate-100 to-slate-200">
              <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative overflow-hidden">
                <img 
                  src={profileImage}
                  alt="JINGFONG TAN profile photo - person wearing glasses with dark hair against cloudy sky" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
            </div>

            {/* Profile Info Section */}
            <div className="lg:w-2/3 p-8 lg:p-12">
              {/* Header Section */}
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2 tracking-tight">
                  JINGFONG TAN
                </h1>
                <p className="text-xl lg:text-2xl font-medium text-slate-600">
                  Web/App Developer
                </p>
                <div className="w-20 h-1 bg-blue-500 mt-4 rounded-full"></div>
              </div>

              {/* About Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
                  <User className="mr-2 text-blue-500" size={20} />
                  About Me
                </h2>
                <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                  I'm a web and app developer passionate about full-stack development. 
                  I'm always exploring ways to improve my skills both Technical and Social Skills. 
                  Let's connect and build something amazing together.
                </p>
              </div>

              {/* Social Media Section */}
              <div>
                <h2 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
                  <Share2 className="mr-2 text-blue-500" size={20} />
                  Let's Connect
                </h2>
                <div className="grid grid-cols-5 gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target={link.name !== "Email" ? "_blank" : undefined}
                        rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                        className={`group bg-slate-100 ${link.hoverColor} rounded-xl p-4 transition-all duration-300 transform hover:scale-105`}
                        aria-label={`Contact via ${link.name}`}
                      >
                        <IconComponent 
                          size={24} 
                          className="text-slate-600 group-hover:text-white transition-colors duration-300"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Tech Badge */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Circle className="w-3 h-3 fill-green-500 text-green-500 animate-pulse" />
                    <span className="text-sm text-slate-500">Available for projects</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Code size={16} />
                    <span className="text-xs">Full-Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Footer Credit */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Digital ID Card • {currentYear}
          </p>
        </div>
      </div>
    </div>
  );
}
