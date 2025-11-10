import { Header } from "@/components/Header";
import { DashboardStats } from "@/components/DashboardStats";
import { ProjectCard } from "@/components/ProjectCard";
import { TaskList } from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Website Redesign",
    description: "Complete overhaul of company website with modern design",
    progress: 65,
    dueDate: "Dec 20, 2024",
    team: ["JD", "AM", "SK"],
    status: "active" as const,
  },
  {
    title: "Mobile App Development",
    description: "Native iOS and Android applications for customer portal",
    progress: 30,
    dueDate: "Jan 15, 2025",
    team: ["TL", "MK"],
    status: "planning" as const,
  },
  {
    title: "API Integration",
    description: "Connect third-party services and payment gateways",
    progress: 90,
    dueDate: "Dec 10, 2024",
    team: ["RP", "JD"],
    status: "active" as const,
  },
  {
    title: "Marketing Campaign",
    description: "Q1 2025 product launch and marketing strategy",
    progress: 100,
    dueDate: "Nov 30, 2024",
    team: ["AM", "SK", "TL"],
    status: "completed" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 md:px-8 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-primary" />
              Welcome back!
            </h2>
            <p className="text-muted-foreground mt-1">
              Here's what's happening with your projects today
            </p>
          </div>
          
          <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Stats Grid */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Active Projects</h3>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <TaskList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
